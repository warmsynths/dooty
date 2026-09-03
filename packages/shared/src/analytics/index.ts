import {
  PetEvent,
  PetAnalytics,
  HourlyBucket,
  DailyFrequency,
  EventType,
  NextPoopPrediction,
  PredictionReason,
} from '../types/index.js';
import { ALL_EVENT_TYPES } from '../constants/index.js';

// Helper for circular minute difference (0-1439 mins)
function circDiffMinutes(m1: number, m2: number): number {
  const diff = Math.abs(m1 - m2) % 1440;
  return diff > 720 ? 1440 - diff : diff;
}

// Clock time formatting helpers
function formatClockTime(d: Date): { en: string; ko: string; hmEn: string; hmKo: string } {
  const h = d.getHours();
  const m = d.getMinutes();
  const mStr = m === 0 ? ':00' : `:${m.toString().padStart(2, '0')}`;
  const periodEn = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 === 0 ? 12 : h % 12;

  const en = `${h12}${mStr} ${periodEn}`;
  const periodKo = h >= 12 ? '오후' : '오전';
  const ko = `${periodKo} ${h12}${mStr}`;
  const hmEn = `${h12}${mStr}`;
  const hmKo = `${h12}${mStr}`;

  return { en, ko, hmEn, hmKo };
}

export function predictNextPoop(
  events: PetEvent[],
  petId: string,
  now: Date = new Date()
): NextPoopPrediction {
  const nowMs = now.getTime();

  // 1. Separate and sort events for this pet
  const petEvents = events
    .filter((e) => e.petId === petId)
    .map((e) => ({ ...e, date: new Date(e.timestamp) }))
    .filter((e) => !isNaN(e.date.getTime()))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const petPoops = petEvents.filter((e) => e.eventType === 'poop');
  const petFoods = petEvents.filter((e) => e.eventType === 'food');
  const petWalks = petEvents.filter((e) => e.eventType === 'walk');

  // Cold start: no data at all
  if (petPoops.length === 0) {
    return {
      hasData: false,
      predictedTimestamp: null,
      timeDisplay: 'Log to predict',
      timeDisplayKo: '기록 대기 중',
      subtext: 'Record events to unlock AI timing prediction.',
      subtextKo: '이벤트를 기록하면 다음 배변 시간을 예측합니다.',
      progressPercent: 0,
      isOverdue: false,
      isTomorrow: false,
      confidence: 'low',
      predictionReason: 'cold_start',
    };
  }

  const lastPoop = petPoops[petPoops.length - 1];
  const lastPoopTime = lastPoop.date;
  const lastPoopMs = lastPoopTime.getTime();
  const msSinceLastPoop = Math.max(0, nowMs - lastPoopMs);
  const hoursSinceLastPoop = msSinceLastPoop / (1000 * 60 * 60);

  // 2. Calculate unique poop days & daily frequency
  const poopDateSet = new Set<string>();
  for (const p of petPoops) {
    poopDateSet.add(p.date.toISOString().split('T')[0]);
  }
  const uniquePoopDays = Math.max(1, poopDateSet.size);
  const avgPoopsPerDay = petPoops.length / uniquePoopDays;

  // 3. Historical inter-poop gaps and dynamic refractory window
  const validGapsHours: number[] = [];
  for (let i = 1; i < petPoops.length; i++) {
    const gapH = (petPoops[i].date.getTime() - petPoops[i - 1].date.getTime()) / (1000 * 60 * 60);
    if (gapH >= 0.33 && gapH <= 36) {
      validGapsHours.push(gapH);
    }
  }

  let typicalIntervalHours = 12.0;
  let minRefractoryHours = 2.0;

  if (validGapsHours.length > 0) {
    const sortedGaps = [...validGapsHours].sort((a, b) => a - b);
    typicalIntervalHours = sortedGaps[Math.floor(sortedGaps.length * 0.5)]; // median
    const p10Gap = sortedGaps[Math.max(0, Math.floor(sortedGaps.length * 0.1))];
    minRefractoryHours = Math.max(1.5, Math.min(3.5, p10Gap));
  } else if (avgPoopsPerDay <= 1.2) {
    typicalIntervalHours = 24.0;
    minRefractoryHours = 2.5;
  } else {
    typicalIntervalHours = Math.max(4.0, 24.0 / avgPoopsPerDay);
    minRefractoryHours = Math.min(2.5, typicalIntervalHours * 0.25);
  }

  // 4. Circular Kernel Density Estimation (KDE) with Exponential Recency Weighting
  // 96 discrete 15-minute bins across 24h (0 to 1425 minutes)
  const kdeBins = new Array(96).fill(0);
  const KERNEL_SIGMA_MINS = 45; // 45-minute smoothing bandwidth
  const RECENCY_HALF_LIFE_DAYS = 21; // 3-week half life

  for (const p of petPoops) {
    const daysAgo = Math.max(0, (nowMs - p.date.getTime()) / (1000 * 60 * 60 * 24));
    const recencyWeight = Math.max(0.08, Math.exp((-Math.LN2 * daysAgo) / RECENCY_HALF_LIFE_DAYS));
    const pMinute = p.date.getHours() * 60 + p.date.getMinutes();

    for (let b = 0; b < 96; b++) {
      const binMinute = b * 15;
      const diffM = circDiffMinutes(binMinute, pMinute);
      const density = recencyWeight * Math.exp(-(diffM * diffM) / (2 * KERNEL_SIGMA_MINS * KERNEL_SIGMA_MINS));
      kdeBins[b] += density;
    }
  }

  // Peak detection across circular bins
  const maxDensity = Math.max(...kdeBins, 0.001);
  const detectedPeaks: { minuteOfDay: number; density: number }[] = [];

  for (let b = 0; b < 96; b++) {
    const prev = kdeBins[(b - 1 + 96) % 96];
    const curr = kdeBins[b];
    const next = kdeBins[(b + 1) % 96];

    if (curr > prev && curr >= next && curr >= maxDensity * 0.25) {
      // Sub-bin quadratic refinement
      const denom = 2 * (2 * curr - prev - next);
      const offset = denom > 1e-6 ? (next - prev) / denom : 0;
      const refinedMinute = Math.round((b + offset) * 15);
      const normalizedMinute = ((refinedMinute % 1440) + 1440) % 1440;
      detectedPeaks.push({ minuteOfDay: normalizedMinute, density: curr });
    }
  }

  // Sort routine peaks chronologically across the day
  detectedPeaks.sort((a, b) => a.minuteOfDay - b.minuteOfDay);

  // Fallback if no peaks detected (e.g., 1 poop)
  const routineMinutes: number[] =
    detectedPeaks.length > 0
      ? detectedPeaks.map((p) => p.minuteOfDay)
      : petPoops.length > 0
      ? [petPoops[petPoops.length - 1].date.getHours() * 60 + petPoops[petPoops.length - 1].date.getMinutes()]
      : [8 * 60]; // default 8:00 AM

  // 5. Learned event lags: Food -> Poop and Walk -> Poop
  const foodLagsMins: number[] = [];
  for (const poop of petPoops) {
    const priorFoods = petFoods.filter(
      (f) => f.date.getTime() < poop.date.getTime() && poop.date.getTime() - f.date.getTime() <= 3.5 * 3600000
    );
    if (priorFoods.length > 0) {
      const closestFood = priorFoods[priorFoods.length - 1];
      foodLagsMins.push((poop.date.getTime() - closestFood.date.getTime()) / 60000);
    }
  }
  const learnedFoodLagMins =
    foodLagsMins.length >= 2
      ? Math.max(20, Math.min(75, Math.round(foodLagsMins.sort((a, b) => a - b)[Math.floor(foodLagsMins.length / 2)])))
      : 35; // canine default: 35 minutes

  const walkLagsMins: number[] = [];
  for (const poop of petPoops) {
    const priorWalks = petWalks.filter(
      (w) => fDateWithin(w.date, poop.date, 0, 90)
    );
    if (priorWalks.length > 0) {
      const closestWalk = priorWalks[priorWalks.length - 1];
      walkLagsMins.push((poop.date.getTime() - closestWalk.date.getTime()) / 60000);
    }
  }
  function fDateWithin(d1: Date, d2: Date, minM: number, maxM: number) {
    const diff = (d2.getTime() - d1.getTime()) / 60000;
    return diff >= minM && diff <= maxM;
  }
  const learnedWalkLagMins =
    walkLagsMins.length >= 2
      ? Math.max(10, Math.min(45, Math.round(walkLagsMins.sort((a, b) => a - b)[Math.floor(walkLagsMins.length / 2)])))
      : 15; // canine default: 15 minutes into walk

  // 6. Active recent event triggers (events occurring AFTER the last poop)
  const recentFoodsAfterPoop = petFoods.filter((f) => f.date.getTime() > lastPoopMs);
  const latestFoodAfterPoop = recentFoodsAfterPoop[recentFoodsAfterPoop.length - 1];

  const recentWalksAfterPoop = petWalks.filter((w) => w.date.getTime() > lastPoopMs);
  const latestWalkAfterPoop = recentWalksAfterPoop[recentWalksAfterPoop.length - 1];

  // Refractory threshold
  const minEarliestMs = lastPoopMs + minRefractoryHours * 3600000;

  // 7. Multi-Factor Candidate Selection
  let predictedDate: Date;
  let predictionReason: PredictionReason = 'routine_peak';
  let isOverdue = false;
  let isTomorrow = false;
  let rolledOver = false;

  // Check event boost: Walk underway or recently logged
  let walkCandidate: Date | null = null;
  if (latestWalkAfterPoop) {
    const minsSinceWalk = (nowMs - latestWalkAfterPoop.date.getTime()) / 60000;
    if (minsSinceWalk <= 90) {
      const candidate = new Date(latestWalkAfterPoop.date.getTime() + learnedWalkLagMins * 60000);
      if (candidate.getTime() >= minEarliestMs - 15 * 60000) {
        walkCandidate = candidate;
      }
    }
  }

  // Check event boost: Meal eaten recently
  let mealCandidate: Date | null = null;
  if (latestFoodAfterPoop) {
    const minsSinceMeal = (nowMs - latestFoodAfterPoop.date.getTime()) / 60000;
    if (minsSinceMeal <= 210) {
      const candidate = new Date(latestFoodAfterPoop.date.getTime() + learnedFoodLagMins * 60000);
      if (candidate.getTime() >= minEarliestMs - 15 * 60000) {
        mealCandidate = candidate;
      }
    }
  }

  // Evaluate candidate selection
  if (walkCandidate && (walkCandidate.getTime() > nowMs - 45 * 60000)) {
    predictedDate = walkCandidate;
    predictionReason = 'walk_boost';
    if (nowMs > predictedDate.getTime() + 20 * 60000) {
      isOverdue = true;
    }
  } else if (mealCandidate && (mealCandidate.getTime() > nowMs - 60 * 60000)) {
    predictedDate = mealCandidate;
    predictionReason = 'meal_boost';
    if (nowMs > predictedDate.getTime() + 30 * 60000) {
      isOverdue = true;
    }
  } else {
    // Routine circadian evaluation
    // Build peak date candidates for today & tomorrow
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const tomorrowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);

    const todayCandidates = routineMinutes.map((m) => new Date(todayMidnight.getTime() + m * 60000));
    const tomorrowCandidates = routineMinutes.map((m) => new Date(tomorrowMidnight.getTime() + m * 60000));

    // Check overdue on today's peaks
    // An overdue peak is one where candidate is within the last 2.5 hours and after refractory
    const overdueCandidate = todayCandidates.find(
      (c) => c.getTime() <= nowMs && nowMs - c.getTime() <= 2.5 * 3600000 && c.getTime() >= minEarliestMs - 30 * 60000
    );

    // Future candidate today
    const futureTodayCandidate = todayCandidates.find(
      (c) => c.getTime() > nowMs && c.getTime() >= minEarliestMs
    );

    // Overdue check based on inter-poop interval
    const isIntervalOverdue =
      (avgPoopsPerDay > 1.2 && hoursSinceLastPoop > typicalIntervalHours * 1.35 && now.getHours() >= 7 && now.getHours() <= 22) ||
      (avgPoopsPerDay <= 1.2 && hoursSinceLastPoop >= 20 && now.getHours() >= 14);

    if (overdueCandidate) {
      predictedDate = overdueCandidate;
      isOverdue = true;
      predictionReason = 'overdue';
    } else if (futureTodayCandidate) {
      predictedDate = futureTodayCandidate;
      predictionReason = 'routine_peak';
      // Check if earlier peak passed today and we rolled over to this one
      const earlierPassed = todayCandidates.some((c) => c.getTime() < nowMs && nowMs - c.getTime() > 2.5 * 3600000);
      if (earlierPassed) {
        rolledOver = true;
      }
    } else if (isIntervalOverdue) {
      isOverdue = true;
      predictionReason = 'overdue';
      // If next routine peak is soon (within 2h), snap to it; otherwise estimate within next 20m
      if (tomorrowCandidates[0] && (tomorrowCandidates[0].getTime() - nowMs) <= 2.0 * 3600000) {
        predictedDate = tomorrowCandidates[0];
      } else {
        const soon = new Date(nowMs + 20 * 60000);
        soon.setMinutes(Math.round(soon.getMinutes() / 15) * 15, 0, 0);
        predictedDate = soon;
      }
    } else {
      // Tomorrow morning routine
      isTomorrow = true;
      predictedDate = tomorrowCandidates[0];
      predictionReason = 'routine_peak';
      const earlierPassed = todayCandidates.some((c) => c.getTime() < nowMs);
      if (earlierPassed) {
        rolledOver = true;
      }
    }
  }

  // 8. Confidence level & Window Calculation
  let confidence: 'low' | 'medium' | 'high' = 'low';
  let windowMarginMins = 30;

  if (petPoops.length >= 10) {
    confidence = 'high';
    windowMarginMins = 15;
  } else if (petPoops.length >= 3) {
    confidence = 'medium';
    windowMarginMins = 25;
  } else {
    confidence = 'low';
    windowMarginMins = 45;
  }

  if (predictionReason === 'walk_boost' || predictionReason === 'meal_boost') {
    windowMarginMins = 15;
  }

  const windowStart = new Date(predictedDate.getTime() - windowMarginMins * 60000);
  const windowEnd = new Date(predictedDate.getTime() + windowMarginMins * 60000);

  // 9. Formatting: Target time & tight window
  const targetFmt = formatClockTime(predictedDate);
  const startFmt = formatClockTime(windowStart);
  const endFmt = formatClockTime(windowEnd);

  // Window string e.g. "5:00–5:30"
  const windowStrEn = `${startFmt.hmEn}–${endFmt.en}`;
  const windowStrKo = `${startFmt.hmKo}–${endFmt.hmKo}`;

  let timeDisplay = isTomorrow
    ? `Tomorrow ~${targetFmt.en} (${windowStrEn})`
    : `~${targetFmt.en} (${windowStrEn})`;

  let timeDisplayKo = isTomorrow
    ? `내일 ~${targetFmt.ko} (${windowStrKo})`
    : `~${targetFmt.ko} (${windowStrKo})`;

  if (isOverdue) {
    timeDisplay = `Due now (~${targetFmt.en})`;
    timeDisplayKo = `곧 배변 예상 (~${targetFmt.ko})`;
  }

  // Contextual bilingual subtexts
  let subtext = 'Regular routine peak window.';
  let subtextKo = '규칙적인 일과 시간대입니다.';

  if (isOverdue) {
    subtext = `Due anytime · ~${hoursSinceLastPoop.toFixed(1)}h since last poop.`;
    subtextKo = `배변 주기 경과 · 마지막 배변 후 ~${hoursSinceLastPoop.toFixed(1)}시간 경과.`;
  } else if (predictionReason === 'walk_boost') {
    subtext = 'Walk activity boost · High probability during or after walk.';
    subtextKo = '산책 활동 반영 · 산책 중 또는 직후 배변 확률 높음.';
  } else if (predictionReason === 'meal_boost' && latestFoodAfterPoop) {
    const mealFmt = formatClockTime(latestFoodAfterPoop.date);
    subtext = `Expected ~${learnedFoodLagMins}m after ${mealFmt.en} meal.`;
    subtextKo = `${mealFmt.ko} 식사 후 약 ${learnedFoodLagMins}분 내 예상.`;
  } else if (rolledOver) {
    subtext = isTomorrow
      ? 'Earlier routine windows passed · Next window tomorrow morning.'
      : `Earlier routine window elapsed · Next expected ~${targetFmt.en}.`;
    subtextKo = isTomorrow
      ? '오늘 루틴 시간 경과 · 내일 아침 예상 시간대입니다.'
      : `이전 루틴 시간 경과 · 다음 예상 시간대 ~${targetFmt.ko}.`;
  } else if (isTomorrow) {
    subtext = 'Next routine window tomorrow morning.';
    subtextKo = '내일 아침 루틴 예상 시간대입니다.';
  } else if (petPoops.length >= 3) {
    subtext = `Routine peak based on ${petPoops.length} recorded events.`;
    subtextKo = `기록 데이터 ${petPoops.length}개 기반 루틴 분석.`;
  }

  // 10. Progress percentage
  let progressPercent = 50;
  if (isOverdue) {
    progressPercent = 95;
  } else {
    const totalDuration = predictedDate.getTime() - lastPoopMs;
    if (totalDuration > 0) {
      const elapsed = nowMs - lastPoopMs;
      progressPercent = Math.round((elapsed / totalDuration) * 100);
      progressPercent = Math.max(5, Math.min(95, progressPercent));
    }
  }

  const hoursRemaining = Math.max(0, (predictedDate.getTime() - nowMs) / (1000 * 60 * 60));

  return {
    hasData: true,
    predictedTimestamp: predictedDate.toISOString(),
    windowStart: windowStart.toISOString(),
    windowEnd: windowEnd.toISOString(),
    timeDisplay,
    timeDisplayKo,
    subtext,
    subtextKo,
    progressPercent,
    isOverdue,
    isTomorrow,
    confidence,
    estimatedHoursRemaining: Math.round(hoursRemaining * 10) / 10,
    predictionReason,
  };
}

export function calculatePetAnalytics(
  events: PetEvent[],
  petId: string,
  now: Date = new Date()
): PetAnalytics {
  const petEvents = events.filter((e) => e.petId === petId);

  // Initialize hourly distribution (0 - 23)
  const hourlyDistribution: HourlyBucket[] = Array.from({ length: 24 }, (_, hour) => ({
    hour,
    poopCount: 0,
    peeCount: 0,
    totalCount: 0,
  }));

  const eventCountsByType: Record<EventType, number> = {
    poop: 0,
    pee: 0,
    walk: 0,
    food: 0,
    water: 0,
    medicine: 0,
    grooming: 0,
    playing: 0,
    vomit: 0,
    weight: 0,
    vet: 0,
    symptom: 0,
    nap: 0,
    training: 0,
  };

  const lastEventByType: Partial<Record<EventType, PetEvent>> = {};
  const dailyMap = new Map<string, DailyFrequency>();
  const activeDateSet = new Set<string>();

  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  let vomitsLast7Days = 0;
  let medicinesLast7Days = 0;
  let latestPoopTime: Date | null = null;

  for (const event of petEvents) {
    const d = new Date(event.timestamp);
    if (isNaN(d.getTime())) continue;

    const hour = d.getHours();
    const dateStr = d.toISOString().split('T')[0];
    activeDateSet.add(dateStr);

    // Hourly
    if (hourlyDistribution[hour]) {
      hourlyDistribution[hour].totalCount++;
      if (event.eventType === 'poop') hourlyDistribution[hour].poopCount++;
      if (event.eventType === 'pee') hourlyDistribution[hour].peeCount++;
    }

    // Counts by type
    if (event.eventType in eventCountsByType) {
      eventCountsByType[event.eventType]++;
    }

    // Last event
    if (
      !lastEventByType[event.eventType] ||
      new Date(lastEventByType[event.eventType]!.timestamp) < d
    ) {
      lastEventByType[event.eventType] = event;
    }

    // Daily map
    if (!dailyMap.has(dateStr)) {
      dailyMap.set(dateStr, {
        date: dateStr,
        poop: 0,
        pee: 0,
        food: 0,
        walk: 0,
        medicine: 0,
        vomit: 0,
        other: 0,
        total: 0,
      });
    }
    const daily = dailyMap.get(dateStr)!;
    daily.total++;
    if (event.eventType === 'poop') daily.poop++;
    else if (event.eventType === 'pee') daily.pee++;
    else if (event.eventType === 'food') daily.food++;
    else if (event.eventType === 'walk') daily.walk++;
    else if (event.eventType === 'medicine') daily.medicine++;
    else if (event.eventType === 'vomit') daily.vomit++;
    else daily.other++;

    // Health watch
    if (d >= sevenDaysAgo) {
      if (event.eventType === 'vomit') vomitsLast7Days++;
      if (event.eventType === 'medicine') medicinesLast7Days++;
    }

    if (event.eventType === 'poop') {
      if (!latestPoopTime || d > latestPoopTime) {
        latestPoopTime = d;
      }
    }
  }

  // Calculate streaks
  const sortedDates = Array.from(activeDateSet).sort();
  let currentStreakDays = 0;
  let longestStreakDays = 0;
  let runningStreak = 0;
  let prevDate: Date | null = null;

  for (const dateStr of sortedDates) {
    const curDate = new Date(dateStr);
    if (!prevDate) {
      runningStreak = 1;
    } else {
      const diffDays = Math.round(
        (curDate.getTime() - prevDate.getTime()) / (24 * 60 * 60 * 1000)
      );
      if (diffDays === 1) {
        runningStreak++;
      } else if (diffDays > 1) {
        runningStreak = 1;
      }
    }
    if (runningStreak > longestStreakDays) {
      longestStreakDays = runningStreak;
    }
    prevDate = curDate;
  }

  // Check if current streak extends to today or yesterday
  if (sortedDates.length > 0) {
    const todayStr = new Date(now).toISOString().split('T')[0];
    const yesterdayStr = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const lastActiveDate = sortedDates[sortedDates.length - 1];

    if (lastActiveDate === todayStr || lastActiveDate === yesterdayStr) {
      currentStreakDays = runningStreak;
    } else {
      currentStreakDays = 0;
    }
  }

  // Days without poop
  let daysWithoutPoop = 0;
  if (latestPoopTime) {
    daysWithoutPoop = Math.max(
      0,
      Math.floor((now.getTime() - latestPoopTime.getTime()) / (24 * 60 * 60 * 1000))
    );
  }

  // Sorted daily frequencies
  const dailyFrequencies = Array.from(dailyMap.values()).sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const nextPoopPrediction = predictNextPoop(events, petId, now);

  return {
    petId,
    currentStreakDays,
    longestStreakDays,
    totalEventsLogged: petEvents.length,
    hourlyDistribution,
    dailyFrequencies,
    eventCountsByType,
    lastEventByType,
    nextPoopPrediction,
    walkStats: {
      totalWalks: eventCountsByType.walk || 0,
      totalDistanceMeters: 0,
      avgWalkMinutes: 25,
    },
    healthAlerts: {
      vomitsLast7Days,
      medicinesLast7Days,
      daysWithoutPoop,
    },
  };
}
