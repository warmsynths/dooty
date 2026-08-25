import {
  PetEvent,
  PetAnalytics,
  HourlyBucket,
  DailyFrequency,
  EventType,
  NextPoopPrediction,
} from '../types/index.js';
import { ALL_EVENT_TYPES } from '../constants/index.js';

export function predictNextPoop(
  events: PetEvent[],
  petId: string,
  now: Date = new Date()
): NextPoopPrediction {
  const petPoops = events
    .filter((e) => e.petId === petId && e.eventType === 'poop')
    .map((e) => ({
      ...e,
      date: new Date(e.timestamp),
    }))
    .filter((e) => !isNaN(e.date.getTime()))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

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
    };
  }

  const lastPoop = petPoops[petPoops.length - 1];
  const lastPoopTime = lastPoop.date;
  const nowMs = now.getTime();
  const lastPoopMs = lastPoopTime.getTime();
  const msSinceLast = Math.max(0, nowMs - lastPoopMs);
  const hoursSinceLastPoop = msSinceLast / (1000 * 60 * 60);

  // 1. Calculate active poop days and average daily frequency
  const poopDateSet = new Set<string>();
  for (const p of petPoops) {
    poopDateSet.add(p.date.toISOString().split('T')[0]);
  }
  const uniquePoopDays = Math.max(1, poopDateSet.size);
  const avgPoopsPerDay = petPoops.length / uniquePoopDays;

  // Poops logged today
  const todayMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0,
    0
  );
  const poopsToday = petPoops.filter((p) => p.date >= todayMidnight);
  const poopsTodayCount = poopsToday.length;

  // 2. Calculate historical inter-poop intervals on the same day (or <= 24h)
  const sameDayGapsHours: number[] = [];
  for (let i = 1; i < petPoops.length; i++) {
    const prev = petPoops[i - 1].date;
    const curr = petPoops[i].date;
    const gapH = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60);
    if (gapH >= 0.33 && gapH <= 16) {
      sameDayGapsHours.push(gapH);
    }
  }

  let avgIntervalHours = 6.0;
  if (sameDayGapsHours.length > 0) {
    const sum = sameDayGapsHours.reduce((acc, v) => acc + v, 0);
    avgIntervalHours = Math.max(2.5, Math.min(12, sum / sameDayGapsHours.length));
  } else if (avgPoopsPerDay <= 1.2) {
    avgIntervalHours = 24.0;
  } else {
    avgIntervalHours = Math.max(4.0, 24.0 / avgPoopsPerDay);
  }

  // 3. Hourly distribution & routine clusters
  const hourCounts = new Array(24).fill(0);
  for (const p of petPoops) {
    hourCounts[p.date.getHours()]++;
  }

  const activeHours: { hour: number; count: number }[] = [];
  for (let h = 0; h < 24; h++) {
    if (hourCounts[h] > 0) {
      activeHours.push({ hour: h, count: hourCounts[h] });
    }
  }

  const sortedByCount = [...activeHours].sort((a, b) => b.count - a.count);
  const maxCount = sortedByCount[0]?.count || 0;
  const significantHours = activeHours
    .filter((ah) => ah.count >= Math.max(1, Math.ceil(maxCount * 0.2)))
    .map((ah) => ah.hour)
    .sort((a, b) => a - b);

  const routineHours = significantHours.length > 0 ? significantHours : [8];

  // 4. Current context
  const currentHourFraction = now.getHours() + now.getMinutes() / 60;
  const minRestHours = Math.min(2.5, avgIntervalHours * 0.4);

  let predictedDate: Date;
  let predictionType: 'routine_today' | 'routine_tomorrow' | 'interval_today' | 'overdue' = 'routine_today';
  let isTomorrow = false;
  let isOverdue = false;

  // Future routine hours today
  const futureRoutineHoursToday = routineHours.filter((h) => {
    const candidateDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      h,
      0,
      0,
      0
    );
    const hoursFromNow = (candidateDate.getTime() - nowMs) / (1000 * 60 * 60);
    const hoursFromLastPoop = (candidateDate.getTime() - lastPoopMs) / (1000 * 60 * 60);
    return hoursFromNow > 0.1 && hoursFromLastPoop >= minRestHours;
  });

  // Check if overdue
  const isOverdueCheck =
    (avgPoopsPerDay > 1.2 && hoursSinceLastPoop > avgIntervalHours * 1.35 && currentHourFraction >= 7 && currentHourFraction <= 22) ||
    (avgPoopsPerDay <= 1.2 && poopsTodayCount === 0 && currentHourFraction >= 14 && hoursSinceLastPoop >= 20);

  if (isOverdueCheck) {
    isOverdue = true;
    predictionType = 'overdue';
    if (
      futureRoutineHoursToday.length > 0 &&
      futureRoutineHoursToday[0] - currentHourFraction <= 2.0
    ) {
      predictedDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        futureRoutineHoursToday[0],
        0,
        0,
        0
      );
    } else {
      // Estimate soon (within next 30 mins)
      const soon = new Date(nowMs + 30 * 60 * 1000);
      const roundedMins = Math.round(soon.getMinutes() / 15) * 15;
      soon.setMinutes(roundedMins, 0, 0);
      predictedDate = soon;
    }
  } else if (futureRoutineHoursToday.length > 0 && (poopsTodayCount < Math.ceil(avgPoopsPerDay) || poopsTodayCount === 0)) {
    // Upcoming routine slot today
    const targetHour = futureRoutineHoursToday[0];
    predictedDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      targetHour,
      0,
      0,
      0
    );
    predictionType = 'routine_today';
  } else if (
    poopsTodayCount < Math.ceil(avgPoopsPerDay) &&
    avgPoopsPerDay > 1.2 &&
    lastPoopMs + avgIntervalHours * 3600000 > nowMs &&
    new Date(lastPoopMs + avgIntervalHours * 3600000).getDate() === now.getDate() &&
    new Date(lastPoopMs + avgIntervalHours * 3600000).getHours() <= 21
  ) {
    // Interval candidate today
    const intervalCandidate = new Date(lastPoopMs + avgIntervalHours * 3600000);
    const roundedMins = Math.round(intervalCandidate.getMinutes() / 15) * 15;
    intervalCandidate.setMinutes(roundedMins, 0, 0);
    predictedDate = intervalCandidate;
    predictionType = 'interval_today';
  } else {
    // Tomorrow morning routine
    isTomorrow = true;
    predictionType = 'routine_tomorrow';
    const firstRoutineHour = routineHours[0] ?? 8;
    predictedDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      firstRoutineHour,
      0,
      0,
      0
    );
  }

  // 4. Progress percentage
  let progressPercent = 50;
  const totalDuration = predictedDate.getTime() - lastPoopMs;
  if (totalDuration > 0) {
    const elapsed = nowMs - lastPoopMs;
    progressPercent = Math.round((elapsed / totalDuration) * 100);
    progressPercent = Math.max(5, Math.min(100, progressPercent));
  }
  if (isOverdue) {
    progressPercent = 95;
  }

  // 5. Formatting
  const formatTime = (d: Date) => {
    const h = d.getHours();
    const m = d.getMinutes();
    const mStr = m === 0 ? ':00' : `:${m.toString().padStart(2, '0')}`;
    const periodEn = h >= 12 ? 'pm' : 'am';
    const h12 = h % 12 === 0 ? 12 : h % 12;

    const timeEn = `${h12}${mStr} ${periodEn}`;
    const periodKo = h >= 12 ? '오후' : '오전';
    const timeKo = `${periodKo} ${h12}${mStr}`;

    return { timeEn, timeKo };
  };

  const formatted = formatTime(predictedDate);
  const timeDisplay = isTomorrow ? `Tomorrow ${formatted.timeEn}` : formatted.timeEn;
  const timeDisplayKo = isTomorrow ? `내일 ${formatted.timeKo}` : formatted.timeKo;

  let subtext = 'Calculated from historical routine.';
  let subtextKo = '기록 데이터 기반 다음 예상 시간대입니다.';

  if (isOverdue) {
    subtext = `Due anytime · ~${hoursSinceLastPoop.toFixed(1)}h since last poop`;
    subtextKo = `배변 주기(${avgIntervalHours.toFixed(1)}시간) 경과 · 곧 예상`;
  } else if (isTomorrow) {
    subtext = 'Next routine window tomorrow morning.';
    subtextKo = '내일 아침 루틴 예상 시간대입니다.';
  } else if (predictionType === 'interval_today') {
    const lastFormatted = formatTime(lastPoopTime);
    subtext = `~${avgIntervalHours.toFixed(1)}h interval after ${lastFormatted.timeEn} poop.`;
    subtextKo = `마지막 기록(${lastFormatted.timeKo}) 기준 약 ${avgIntervalHours.toFixed(1)}시간 후.`;
  } else if (predictionType === 'routine_today') {
    subtext = 'Calculated from historical routine.';
    subtextKo = '기록 데이터 기반 다음 루틴 예상입니다.';
  }

  // Confidence calculation
  let confidence: 'low' | 'medium' | 'high' = 'low';
  if (petPoops.length >= 10) {
    confidence = 'high';
  } else if (petPoops.length >= 3) {
    confidence = 'medium';
  }

  const hoursRemaining = Math.max(0, (predictedDate.getTime() - nowMs) / (1000 * 60 * 60));

  return {
    hasData: true,
    predictedTimestamp: predictedDate.toISOString(),
    timeDisplay,
    timeDisplayKo,
    subtext,
    subtextKo,
    progressPercent,
    isOverdue,
    isTomorrow,
    confidence,
    estimatedHoursRemaining: Math.round(hoursRemaining * 10) / 10,
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
