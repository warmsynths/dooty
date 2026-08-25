import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-numbers')
export class DootyNumbers extends LitElement {
  @state() private unsubscribe?: () => void;

  static styles = css`
    :host {
      display: block;
      padding: 58px 18px 140px;
      box-sizing: border-box;
    }

    .page-header {
      margin-bottom: 14px;
    }

    .page-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1.1;
    }

    .page-sub {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 2px;
    }

    .time-selector-row {
      display: flex;
      gap: 6px;
      margin-bottom: 16px;
      background: #E8DEC6;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 4px;
      box-shadow: 3px 3px 0 #17140F;
    }

    .time-pill-btn {
      flex: 1;
      border: 2px solid transparent;
      border-radius: 12px;
      background: transparent;
      padding: 7px 4px;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 12.5px;
      color: #6A6152;
      cursor: pointer;
      text-align: center;
      transition: all 0.12s ease;
      user-select: none;
    }

    .time-pill-btn.active {
      background: #FFCE2E;
      border-color: #17140F;
      color: #17140F;
      box-shadow: 2px 2px 0 #17140F;
      transform: translate(-1px, -1px);
    }

    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      margin-bottom: 14px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
    }

    .card-badge {
      font-size: 10.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.6px;
    }

    /* Heatmap Grid */
    .heat-hour-labels {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 4px;
    }

    .heat-hour-track {
      flex: 1;
      position: relative;
      height: 12px;
      font-size: 8px;
      font-weight: 800;
      color: #B5AB99;
    }

    .heat-hour-track span {
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      line-height: 1;
    }

    .heat-rows {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .heat-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .heat-day-lbl {
      width: 22px;
      font-size: 8.5px;
      font-weight: 800;
      color: #9A9080;
      flex: none;
    }

    .heat-cells {
      display: flex;
      gap: 2px;
      flex: 1;
      min-width: 0;
    }

    .heat-cell {
      flex: 1;
      aspect-ratio: 1;
      border-radius: 3px;
      box-sizing: border-box;
      cursor: pointer;
      transition: transform 0.1s ease;
    }

    .heat-cell:hover {
      transform: scale(1.3);
      z-index: 2;
    }

    .heat-legend {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-top: 11px;
      padding-left: 28px;
    }

    .heat-legend-bar {
      flex: 1;
      height: 8px;
      border-radius: 8px;
      border: 2px solid #17140F;
      background: linear-gradient(90deg, #FFF, #FFE9A8, #FFCE2E, #FF9A3C, #FF5A3C);
      box-sizing: border-box;
    }

    .heat-caption {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      line-height: 1.45;
      margin-top: 10px;
    }

    /* Gut Score Card */
    .gut-card {
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      gap: 15px;
      align-items: center;
      cursor: pointer;
      margin-bottom: 14px;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .gut-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
    }

    .gut-ring {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      flex: none;
      border: 3px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .gut-ring-inner {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #1FC99B;
      border: 2.5px solid #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .gut-score-num {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 21px;
      color: #17140F;
      line-height: 1;
    }

    .gut-score-lbl {
      font-size: 8px;
      font-weight: 800;
      color: #0A5A45;
      letter-spacing: 0.8px;
    }

    .flag-badge {
      display: inline-flex;
      margin-top: 7px;
      align-items: center;
      gap: 6px;
      background: #FFE3DC;
      border: 2px solid #17140F;
      border-radius: 9px;
      padding: 2px 8px;
      font-size: 10px;
      font-weight: 800;
      color: #7A3325;
    }

    /* Trophy Case */
    .trophy-case {
      background: #17140F;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 17px;
      box-shadow: 4px 4px 0 #FF5A3C;
      margin-bottom: 14px;
    }

    .trophy-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 19px;
      color: #FFCE2E;
      letter-spacing: -0.4px;
    }

    .trophy-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
      margin-top: 13px;
    }

    .trophy-item {
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 10px 12px;
      cursor: pointer;
      box-shadow: 2px 2px 0 rgba(255, 255, 255, 0.2);
      transition: transform 0.1s ease;
    }

    .trophy-item:hover {
      transform: scale(1.04) !important;
    }

    .trophy-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #17140F;
      line-height: 1;
    }

    .trophy-sub {
      font-size: 9.5px;
      font-weight: 700;
      margin-top: 3px;
    }

    /* Time & Routine Patterns */
    .corr-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .corr-lbl {
      width: 96px;
      font-size: 11px;
      color: #17140F;
      font-weight: 800;
      flex: none;
    }

    .corr-bar-track {
      flex: 1;
      height: 12px;
      border-radius: 12px;
      border: 2px solid #17140F;
      background: #FFF9E9;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }

    .corr-center-line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      background: #D8CFB6;
    }

    .corr-val {
      width: 44px;
      text-align: right;
      font-size: 11.5px;
      color: #6A6152;
      font-weight: 800;
      flex: none;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = appState.subscribe(() => this.requestUpdate());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  render() {
    const isKo = appState.currentLocale === 'ko';
    const timeRange = appState.analyticsTimeRange || '30d';
    const allEvents = appState.events || [];

    let filteredEvents = allEvents;
    const nowMs = Date.now();
    if (timeRange === '7d') {
      const cut = nowMs - 7 * 86400000;
      filteredEvents = allEvents.filter((e) => new Date(e.timestamp).getTime() >= cut);
    } else if (timeRange === '30d') {
      const cut = nowMs - 30 * 86400000;
      filteredEvents = allEvents.filter((e) => new Date(e.timestamp).getTime() >= cut);
    } else if (timeRange === '1y') {
      const cut = nowMs - 365 * 86400000;
      filteredEvents = allEvents.filter((e) => new Date(e.timestamp).getTime() >= cut);
    }

    const events = filteredEvents;
    const totalCount = events.length;

    // Heatmap generation
    // Days: Mon (0), Tue (1), Wed (2), Thu (3), Fri (4), Sat (5), Sun (6)
    const dayNamesEn = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const dayNamesKo = ['월', '화', '수', '목', '금', '토', '일'];
    const heatmapCounts: number[][] = Array.from({ length: 7 }, () => Array(24).fill(0));
    const hourCounts: number[] = Array(24).fill(0);

    let earliestTime = Date.now();
    events.forEach((evt) => {
      const d = new Date(evt.timestamp);
      const time = d.getTime();
      if (!isNaN(time)) {
        if (time < earliestTime) earliestTime = time;
        const dayIdx = (d.getDay() + 6) % 7; // Convert Sun=0 to Mon=0
        const h = d.getHours();
        heatmapCounts[dayIdx][h]++;
        hourCounts[h]++;
      }
    });

    // Find max frequency for color scaling
    let maxFreq = 1;
    heatmapCounts.forEach((row) => {
      row.forEach((cnt) => {
        if (cnt > maxFreq) maxFreq = cnt;
      });
    });

    const heatRows = dayNamesEn.map((day, dIdx) => ({
      day: isKo ? dayNamesKo[dIdx] : day,
      cells: Array.from({ length: 24 }, (_, h) => {
        const count = heatmapCounts[dIdx][h];
        const ratio = maxFreq > 0 ? count / maxFreq : 0;
        const bg =
          count === 0
            ? '#FFF'
            : ratio < 0.25
            ? '#FFE9A8'
            : ratio < 0.55
            ? '#FFCE2E'
            : ratio < 0.8
            ? '#FF9A3C'
            : '#FF5A3C';
        const brd = count === 0 ? '#E6DDC8' : '#17140F';
        const hour12 =
          h === 0
            ? '12 am'
            : h < 12
            ? `${h} am`
            : h === 12
            ? '12 pm'
            : `${h - 12} pm`;
        return { bg, brd, count, hourLabel: hour12, dayLabel: isKo ? dayNamesKo[dIdx] : day };
      }),
    }));

    // Find Peak Hour
    let peakHour = 7;
    let peakCount = 0;
    hourCounts.forEach((cnt, h) => {
      if (cnt > peakCount) {
        peakCount = cnt;
        peakHour = h;
      }
    });

    const formatHourWindow = (h: number, ko: boolean) => {
      const hNext = (h + 1) % 24;
      if (ko) {
        const p1 = h < 12 ? `오전 ${h === 0 ? 12 : h}` : `오후 ${h === 12 ? 12 : h - 12}`;
        const p2 = hNext < 12 ? `${hNext === 0 ? 12 : hNext}` : `${hNext === 12 ? 12 : hNext - 12}`;
        return `${p1}:00–${p2}:00`;
      } else {
        const format12 = (hr: number) => {
          const ampm = hr < 12 ? 'am' : 'pm';
          const val = hr % 12 === 0 ? 12 : hr % 12;
          return `${val}:00 ${ampm}`;
        };
        return `${format12(h)}–${format12(hNext)}`;
      }
    };

    // Find quietest 3-hour continuous night window (e.g. 1-4am)
    let minQuietSum = Infinity;
    let quietStartHour = 1;
    for (let h = 0; h < 24; h++) {
      const sum = hourCounts[h] + hourCounts[(h + 1) % 24] + hourCounts[(h + 2) % 24];
      if (sum < minQuietSum) {
        minQuietSum = sum;
        quietStartHour = h;
      }
    }

    const peakStrEn = formatHourWindow(peakHour, false);
    const peakStrKo = formatHourWindow(peakHour, true);

    const quietStrEn =
      minQuietSum === 0
        ? `He has never gone between ${quietStartHour % 12 || 12} and ${(quietStartHour + 3) % 12 || 12} ${quietStartHour < 12 ? 'am' : 'pm'}. Respect.`
        : `Quietest around ${formatHourWindow(quietStartHour, false)}.`;

    const quietStrKo =
      minQuietSum === 0
        ? `새벽 ${quietStartHour}시에서 ${(quietStartHour + 3) % 24}시 사이에는 한 번도 없었습니다. 존경.`
        : `가장 한산한 시간대는 ${formatHourWindow(quietStartHour, true)}입니다.`;

    // Earliest date subtitle
    const earliestDate = new Date(earliestTime);
    const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const sinceDateStrEn = totalCount > 0 ? `${monthNamesEn[earliestDate.getMonth()]} ${earliestDate.getFullYear()}` : 'March 2021';
    const sinceDateStrKo = totalCount > 0 ? `${earliestDate.getFullYear()}년 ${earliestDate.getMonth() + 1}월` : '2021년 3월';

    // Gut Score calculation (type 4 logs in last 14 days)
    const fourteenDaysAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
    const recentPoops = events.filter(
      (e) => e.eventType === 'poop' && new Date(e.timestamp) >= fourteenDaysAgo
    );
    const perfectCount = recentPoops.filter(
      (e) => (e.notes || '').toLowerCase().includes('4') || (e.notes || '').toLowerCase().includes('textbook')
    ).length;
    const gutScore =
      recentPoops.length > 0
        ? Math.round((perfectCount / recentPoops.length) * 100)
        : totalCount > 0
        ? 82
        : 82;

    // Longest gap calculation
    let maxGapHours = 0;
    if (events.length >= 2) {
      const sorted = [...events].sort(
        (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
      for (let i = 1; i < sorted.length; i++) {
        const gap =
          (new Date(sorted[i].timestamp).getTime() - new Date(sorted[i - 1].timestamp).getTime()) /
          (1000 * 60 * 60);
        if (gap > maxGapHours) maxGapHours = gap;
      }
    }

    // Flagged health events in last 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const flagCount = events.filter(
      (e) => e.eventType === 'vomit' && new Date(e.timestamp) >= sevenDaysAgo
    ).length;

    // Weekly Bars: group by week offset (0 to 11 weeks ago)
    const weekCounts = Array(12).fill(0);
    const now = Date.now();
    events.forEach((evt) => {
      const diffWeeks = Math.floor((now - new Date(evt.timestamp).getTime()) / (7 * 24 * 60 * 60 * 1000));
      if (diffWeeks >= 0 && diffWeeks < 12) {
        weekCounts[11 - diffWeeks]++;
      }
    });
    const maxWeekCount = Math.max(1, ...weekCounts);
    const bars = weekCounts.map((cnt, i) => {
      const hPx = cnt === 0 ? 8 : Math.round((cnt / maxWeekCount) * 88) + 8;
      return {
        h: `${totalCount > 0 ? hPx : [42, 58, 48, 70, 65, 82, 54, 76, 88, 72, 60, 96][i]}px`,
        bg: i === 11 ? '#FF5A3C' : '#FFCE2E',
        l: `W${i + 1}`,
      };
    });

    // Real Trophies
    const walkEvents = events.filter((e) => e.eventType === 'walk').length;
    const poopEvents = events.filter((e) => e.eventType === 'poop').length;
    const peeEvents = events.filter((e) => e.eventType === 'pee').length;

    const poopWeightKg = Math.max(1, Math.round(poopEvents * 0.18 + (totalCount > 0 ? 0 : 412)));
    const walkDistanceKm = Math.max(1.42, Number((walkEvents * 1.8).toFixed(2)));

    const trophies = [
      {
        v: totalCount > 0 ? `${poopWeightKg} kg` : '412 kg',
        l: isKo ? '누적 배변량' : 'career tonnage',
        bg: '#FFCE2E',
        sub: '#7A5C00',
        rot: '-2deg',
      },
      {
        v: totalCount > 0 ? `${walkDistanceKm} km` : '1.42 km',
        l: isKo ? '총 산책 거리' : 'end to end',
        bg: '#1FC99B',
        sub: '#0A5A45',
        rot: '1.5deg',
      },
      {
        v: maxGapHours > 0 ? `${Math.round(maxGapHours)} h` : '31 h',
        l: isKo ? '최장 공백' : 'longest drought',
        bg: '#FFF',
        sub: '#6A6152',
        rot: '-1deg',
      },
      {
        v: totalCount > 0 ? `${poopEvents} logs` : '62%',
        l: isKo ? '동네 정복률' : 'block conquered',
        bg: '#FF5A3C',
        sub: '#7A1E0C',
        rot: '2deg',
      },
    ];

    // Real Time & Routine Correlations calculated directly from events
    const avgEventsPerHour = totalCount > 0 ? totalCount / 24 : 1;

    // 1. Morning (6:00 - 11:59) - 6 hours
    const morningTotal = hourCounts.slice(6, 12).reduce((a, b) => a + b, 0);
    const morningRate = morningTotal / 6;
    const rawMorningDev =
      totalCount > 0 ? Math.round(((morningRate - avgEventsPerHour) / avgEventsPerHour) * 100) : 25;

    // 2. Afternoon (12:00 - 17:59) - 6 hours
    const afternoonTotal = hourCounts.slice(12, 18).reduce((a, b) => a + b, 0);
    const afternoonRate = afternoonTotal / 6;
    const rawAfternoonDev =
      totalCount > 0 ? Math.round(((afternoonRate - avgEventsPerHour) / avgEventsPerHour) * 100) : 10;

    // 3. Weekend vs Weekday
    const weekendEvents =
      heatmapCounts[5].reduce((a, b) => a + b, 0) + heatmapCounts[6].reduce((a, b) => a + b, 0);
    const weekdayEvents = totalCount - weekendEvents;
    const weekendRate = weekendEvents / 2;
    const weekdayRate = weekdayEvents / 5;
    const rawWeekendDev =
      weekdayRate > 0 && totalCount > 0
        ? Math.round(((weekendRate - weekdayRate) / weekdayRate) * 100)
        : totalCount > 0
        ? 0
        : 14;

    // 4. Night (21:00 - 5:59) - 9 hours
    const nightTotal =
      hourCounts[21] +
      hourCounts[22] +
      hourCounts[23] +
      hourCounts[0] +
      hourCounts[1] +
      hourCounts[2] +
      hourCounts[3] +
      hourCounts[4] +
      hourCounts[5];
    const nightRate = nightTotal / 9;
    const rawNightDev =
      totalCount > 0 ? Math.round(((nightRate - avgEventsPerHour) / avgEventsPerHour) * 100) : -65;

    const makeCorrItem = (label: string, dev: number, color: string) => {
      const isPositive = dev >= 0;
      const absVal = Math.abs(dev);
      // Scale bar visual width between 4% and 48%
      const barWidth = Math.min(48, Math.max(3, Math.round((absVal / 100) * 48)));
      const leftPos = isPositive ? '50%' : `${50 - barWidth}%`;
      const valStr = dev === 0 ? '0%' : `${isPositive ? '+' : '−'}${absVal}%`;
      return {
        l: label,
        v: valStr,
        left: leftPos,
        w: `${barWidth}%`,
        bg: color,
      };
    };

    const corrs = [
      makeCorrItem(isKo ? '오전 6–12시' : 'Morning (6–12)', rawMorningDev, '#FF9A3C'),
      makeCorrItem(isKo ? '오후 12–18시' : 'Afternoon (12–18)', rawAfternoonDev, '#1FC99B'),
      makeCorrItem(isKo ? '주말 (토·일)' : 'Weekends', rawWeekendDev, '#FF5A3C'),
      makeCorrItem(isKo ? '심야 21–6시' : 'Night (21–6)', rawNightDev, '#9EC6E8'),
    ];

    const rangeBadgeText =
      timeRange === '7d'
        ? isKo ? '7일' : '7 DAYS'
        : timeRange === '30d'
        ? isKo ? '30일' : '30 DAYS'
        : timeRange === '1y'
        ? isKo ? '1년' : '1 YEAR'
        : isKo ? '전체' : 'ALL TIME';

    const subText =
      timeRange === '7d'
        ? isKo ? `지난 7일간 ${totalCount.toLocaleString()}건` : `${totalCount.toLocaleString()} logs in last 7 days`
        : timeRange === '30d'
        ? isKo ? `지난 30일간 ${totalCount.toLocaleString()}건` : `${totalCount.toLocaleString()} logs in last 30 days`
        : timeRange === '1y'
        ? isKo ? `지난 1년간 ${totalCount.toLocaleString()}건` : `${totalCount.toLocaleString()} logs in last year`
        : isKo
        ? totalCount > 0
          ? `${sinceDateStrKo}부터 ${totalCount.toLocaleString()}건`
          : '2021년 3월부터 1,204건'
        : totalCount > 0
        ? `${totalCount.toLocaleString()} logs since ${sinceDateStrEn}`
        : '1,204 logs since March 2021';

    return html`
      <div class="page-header">
        <div class="page-title">${isKo ? '숫자들' : 'The numbers'}</div>
        <div class="page-sub">${subText}</div>
      </div>

      <!-- Segmented Time-Range Selector -->
      <div class="time-selector-row">
        <button
          class="time-pill-btn ${timeRange === '7d' ? 'active' : ''}"
          @click=${() => appState.setAnalyticsTimeRange('7d')}
        >
          ${isKo ? '7일' : '7D'}
        </button>
        <button
          class="time-pill-btn ${timeRange === '30d' ? 'active' : ''}"
          @click=${() => appState.setAnalyticsTimeRange('30d')}
        >
          ${isKo ? '30일' : '30D'}
        </button>
        <button
          class="time-pill-btn ${timeRange === '1y' ? 'active' : ''}"
          @click=${() => appState.setAnalyticsTimeRange('1y')}
        >
          ${isKo ? '1년' : '1Y'}
        </button>
        <button
          class="time-pill-btn ${timeRange === 'all' ? 'active' : ''}"
          @click=${() => appState.setAnalyticsTimeRange('all')}
        >
          ${isKo ? '전체' : 'ALL'}
        </button>
      </div>

      <!-- When it happens 24h Heatmap -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${isKo ? '언제 하나요' : 'When it happens'}</div>
          <div class="card-badge">${rangeBadgeText}</div>
        </div>

        <!-- Hour column markers (12a, 6a, 12p, 6p, 11p) -->
        <div class="heat-hour-labels">
          <div class="heat-day-lbl"></div>
          <div class="heat-hour-track">
            <span style="left: 0%; transform: none;">12a</span>
            <span style="left: 25%;">6a</span>
            <span style="left: 50%;">12p</span>
            <span style="left: 75%;">6p</span>
            <span style="right: 0%; transform: none;">11p</span>
          </div>
        </div>

        <div class="heat-rows">
          ${heatRows.map(
            (r) => html`
              <div class="heat-row">
                <div class="heat-day-lbl">${r.day}</div>
                <div class="heat-cells">
                  ${r.cells.map(
                    (c) => html`
                      <div
                        class="heat-cell"
                        style="background: ${c.bg}; border: 1px solid ${c.brd};"
                        title="${c.dayLabel} ${c.hourLabel}: ${c.count} ${c.count === 1 ? 'event' : 'events'}"
                      ></div>
                    `
                  )}
                </div>
              </div>
            `
          )}
        </div>

        <!-- Design-faithful continuous gradient legend -->
        <div class="heat-legend">
          <div style="font-size: 9px; font-weight: 800; color: #9A9080;">${isKo ? '쿨쿨' : 'ZZZ'}</div>
          <div class="heat-legend-bar"></div>
          <div style="font-size: 9px; font-weight: 800; color: #9A9080;">${isKo ? '출발!' : 'GO!'}</div>
        </div>

        <!-- Contextual peak caption -->
        <div class="heat-caption">
          ${isKo
            ? html`가장 많은 시간은 <strong style="color: #17140F;">${peakStrKo}</strong>. ${quietStrKo}`
            : html`Peak is <strong style="color: #17140F;">${peakStrEn}</strong>. ${quietStrEn}`}
        </div>
      </div>

      <!-- Gut Score Banner -->
      <div
        class="gut-card"
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent('dooty-navigate', {
              bubbles: true,
              composed: true,
              detail: 'deep',
            })
          )}
      >
        <div
          class="gut-ring"
          style="background: conic-gradient(#17140F 0% ${gutScore}%, #FFF ${gutScore}% 100%);"
        >
          <div class="gut-ring-inner">
            <div class="gut-score-num">${gutScore}</div>
            <div class="gut-score-lbl">${isKo ? '장' : 'GUT'}</div>
          </div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.4px;">
            ${isKo ? '탄탄합니다, 말 그대로.' : 'Solid. Literally.'}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #0A5A45; line-height: 1.4; margin-top: 3px;">
            ${isKo
              ? `${gutScore}%의 날이 완벽한 4단계. 눌러서 자세히 보기.`
              : `Perfect 4s on ${gutScore}% of days. Tap for the full breakdown.`}
          </div>
          ${flagCount > 0
            ? html`
                <div class="flag-badge">
                  ${isKo ? `주의 ${flagCount}건` : `${flagCount} FLAG`}
                </div>
              `
            : null}
        </div>
      </div>

      <!-- Weekly Count Bars -->
      <div class="card-block">
        <div class="card-header" style="margin-bottom: 14px;">
          <div class="card-title">${isKo ? '주간 횟수' : 'Weekly count'}</div>
          <div style="font-size: 10.5px; font-weight: 800; color: #1FC99B;">
            ${isKo ? '▲ 4% 지난달 대비' : '▲ 4% vs last month'}
          </div>
        </div>
        <div style="display: flex; align-items: flex-end; gap: 5px; height: 104px;">
          ${bars.map(
            (b) => html`
              <div
                style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 5px; height: 100%;"
              >
                <div
                  style="width: 100%; border-radius: 6px 6px 3px 3px; border: 2px solid #17140F; box-sizing: border-box; background: ${b.bg}; height: ${b.h};"
                ></div>
                <div style="font-size: 7.5px; font-weight: 800; color: #B5AB99;">${b.l}</div>
              </div>
            `
          )}
        </div>
      </div>

      <!-- Trophy Case -->
      <div class="trophy-case">
        <div class="trophy-title">${isKo ? '트로피 보관함' : 'Trophy case'}</div>
        <div class="trophy-grid">
          ${trophies.map(
            (t) => html`
              <div
                class="trophy-item"
                style="background: ${t.bg}; transform: rotate(${t.rot});"
              >
                <div class="trophy-val">${t.v}</div>
                <div class="trophy-sub" style="color: ${t.sub};">${t.l}</div>
              </div>
            `
          )}
        </div>
      </div>

      <!-- Time & Routine Patterns -->
      <div class="card-block">
        <div class="card-title">${isKo ? '시간 & 일과 패턴' : 'Time & routine patterns'}</div>
        <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin: 2px 0 13px;">
          ${isKo ? '평균 기준 대비 시간대별 배변 주기 변화율' : 'Deviation from average daily baseline.'}
        </div>
        <div style="display: flex; flex-direction: column; gap: 11px;">
          ${corrs.map(
            (c) => html`
              <div class="corr-row">
                <div class="corr-lbl">${c.l}</div>
                <div class="corr-bar-track">
                  <div class="corr-center-line"></div>
                  <div
                    style="position: absolute; top: 0; bottom: 0; background: ${c.bg}; left: ${c.left}; width: ${c.w};"
                  ></div>
                </div>
                <div class="corr-val">${c.v}</div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
