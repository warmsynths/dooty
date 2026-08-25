var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
import { calculatePetAnalytics, predictNextPoop } from '@watslog/shared';
let DootyHome = class DootyHome extends LitElement {
    static { this.styles = css `
    :host {
      display: block;
      padding: 58px 18px 140px;
      box-sizing: border-box;
    }

    .top-header-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }

    .dog-avatar-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      flex: none;
      border: 3px solid #17140F;
      background: #FFFFFF;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8.5px;
      font-weight: 800;
      color: #8A7F68;
      text-align: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      line-height: 1.15;
    }

    .dog-avatar-btn img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .greeting-col {
      flex: 1;
      min-width: 0;
    }

    .greeting-text {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 24px;
      color: #17140F;
      line-height: 1.1;
      letter-spacing: -0.7px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .vibe-text {
      font-size: 12.5px;
      color: #6A6152;
      font-weight: 600;
      margin-top: 1px;
    }

    .hamburger-btn {
      width: 40px;
      height: 40px;
      border-radius: 13px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      flex: none;
    }

    .ham-line {
      width: 13px;
      height: 2.5px;
      background: #17140F;
      border-radius: 3px;
    }

    /* Prediction Card */
    .prediction-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 17px 18px;
      box-shadow: 5px 5px 0 #17140F;
      position: relative;
      margin-bottom: 14px;
    }

    .streak-badge {
      position: absolute;
      right: 14px;
      top: -11px;
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 11px;
      padding: 3px 9px;
      transform: rotate(4deg);
      font-size: 11px;
      font-weight: 800;
      color: #FFF;
      letter-spacing: 0.4px;
    }

    .pred-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.6px;
      color: #7A5C00;
      text-transform: uppercase;
    }

    .pred-time {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: clamp(28px, 8vw, 38px);
      color: #17140F;
      line-height: 1.08;
      letter-spacing: -1.2px;
      margin-top: 3px;
      word-break: keep-all;
    }

    .pred-sub {
      font-size: 12.5px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 3px;
    }

    .pred-progress-bar {
      margin-top: 14px;
      height: 14px;
      border-radius: 14px;
      border: 2.5px solid #17140F;
      background: #FFF;
      overflow: hidden;
    }

    .pred-progress-fill {
      height: 100%;
      background: #FF5A3C;
      border-right: 2.5px solid #17140F;
      box-sizing: border-box;
      transition: width 0.3s ease;
    }

    /* KPI Row */
    .kpi-row {
      display: flex;
      gap: 10px;
      margin-bottom: 14px;
    }

    .kpi-card {
      flex: 1;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 12px;
      box-shadow: 3px 3px 0 #17140F;
    }

    .kpi-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 20px;
      line-height: 1;
      letter-spacing: -0.8px;
    }

    .kpi-lbl {
      font-size: 10px;
      font-weight: 700;
      margin-top: 4px;
      line-height: 1.3;
    }

    /* Feed */
    .section-row {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-top: 5px;
      margin-bottom: 10px;
    }

    .section-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 20px;
      color: #17140F;
      letter-spacing: -0.5px;
    }

    .section-count {
      font-size: 11.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.5px;
    }

    .feed-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 14px;
    }

    .feed-card {
      display: flex;
      gap: 12px;
      align-items: center;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 12px 14px;
      box-shadow: 3px 3px 0 #17140F;
    }

    .feed-badge {
      width: 40px;
      height: 40px;
      border-radius: 14px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
    }

    .feed-content {
      flex: 1;
      min-width: 0;
    }

    .feed-title {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .feed-detail {
      font-size: 12px;
      color: #6A6152;
      font-weight: 600;
      margin-top: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .feed-time {
      font-size: 12px;
      font-weight: 800;
      color: #9A9080;
      flex: none;
    }

    .empty-card {
      background: #FFF;
      border: 3px dashed #17140F;
      border-radius: 20px;
      padding: 24px 18px;
      text-align: center;
      color: #6A6152;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    /* Wrapped Banner */
    .wrapped-card {
      margin-top: 6px;
      background: #2B5BE8;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px 18px;
      display: flex;
      align-items: center;
      gap: 13px;
      cursor: pointer;
      box-shadow: 5px 5px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .wrapped-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 7px 7px 0 #17140F;
    }

    .wrapped-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 19px;
      color: #FFF;
      letter-spacing: -0.4px;
    }

    .wrapped-sub {
      font-size: 12px;
      font-weight: 700;
      color: #BFD0FF;
      margin-top: 2px;
    }

    .wrapped-arrow {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
      flex: none;
    }
  `; }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribe = appState.subscribe(() => this.requestUpdate());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.();
    }
    formatTime(iso) {
        const d = new Date(iso);
        if (isNaN(d.getTime()))
            return '';
        return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).toLowerCase();
    }
    getEventVisuals(t) {
        switch (t) {
            case 'poop': return { tag: 'P', bg: '#FFCE2E' };
            case 'pee': return { tag: 'U', bg: '#BFD0FF' };
            case 'walk': return { tag: 'W', bg: '#9EC6E8' };
            case 'medicine': return { tag: 'M', bg: '#1FC99B' };
            case 'vomit': return { tag: 'V', bg: '#FF9A3C' };
            case 'weight': return { tag: 'KG', bg: '#2B5BE8' };
            case 'vet': return { tag: 'D', bg: '#FFD15C' };
            case 'symptom': return { tag: 'S', bg: '#FF5A3C' };
            case 'food': return { tag: 'F', bg: '#FFB800' };
            case 'water': return { tag: 'H', bg: '#60A5FA' };
            case 'playing': return { tag: 'T', bg: '#FBBF24' };
            case 'grooming': return { tag: 'G', bg: '#F472B6' };
            default: return { tag: 'E', bg: '#FFCE2E' };
        }
    }
    render() {
        const isKo = appState.currentLocale === 'ko';
        const petName = appState.currentPet?.name || (isKo ? '반려견' : 'My Pet');
        const petId = appState.currentPet?.id || '';
        const events = appState.events || [];
        // Analytics from real data
        const analytics = calculatePetAnalytics(events, petId);
        const totalCount = events.length;
        // Today's events
        const todayMidnight = new Date();
        todayMidnight.setHours(0, 0, 0, 0);
        const todayEvents = events.filter((e) => new Date(e.timestamp) >= todayMidnight);
        // Compute longest gap
        let longestGapHours = 0;
        if (events.length >= 2) {
            const sorted = [...events].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
            for (let i = 1; i < sorted.length; i++) {
                const gap = (new Date(sorted[i].timestamp).getTime() - new Date(sorted[i - 1].timestamp).getTime()) /
                    (1000 * 60 * 60);
                if (gap > longestGapHours)
                    longestGapHours = gap;
            }
        }
        // Dynamic greeting & vibe
        const hour = new Date().getHours();
        const timeGreeting = hour < 12
            ? isKo ? `좋은 아침, ${petName}!` : `Morning, ${petName}.`
            : hour < 18
                ? isKo ? `안녕, ${petName}!` : `Hey ${petName}!`
                : isKo ? `좋은 저녁, ${petName}!` : `Evening, ${petName}.`;
        const vibeText = todayEvents.length === 0
            ? isKo
                ? '오늘의 첫 기록을 시작해볼까요?'
                : 'Ready for today’s first log.'
            : isKo
                ? `오늘 ${todayEvents.length}번 완료.`
                : `${todayEvents.length} down today.`;
        // Dynamic streak & prediction
        const streak = analytics.currentStreakDays;
        const prediction = analytics.nextPoopPrediction || predictNextPoop(events, petId);
        const predTimeStr = isKo ? prediction.timeDisplayKo : prediction.timeDisplay;
        const predSubText = isKo ? prediction.subtextKo : prediction.subtext;
        const progressFillPct = prediction.progressPercent;
        const activeDays = Math.max(1, analytics.dailyFrequencies.length);
        const avgPerDay = totalCount > 0 ? (totalCount / activeDays).toFixed(1) : '0.0';
        const petAvatar = appState.currentPet?.avatarUrl;
        return html `
      <!-- Top Header Row -->
      <div class="top-header-row">
        <div
          class="dog-avatar-btn"
          @click=${() => this.dispatchEvent(new CustomEvent('dooty-navigate', {
            bubbles: true,
            composed: true,
            detail: 'dog',
        }))}
        >
          ${petAvatar
            ? html `<img src="${petAvatar}" alt="Pet" />`
            : html `<div>${isKo ? '강아지\n사진' : 'dog\npic'}</div>`}
        </div>

        <div class="greeting-col">
          <div class="greeting-text">${timeGreeting}</div>
          <div class="vibe-text">${vibeText}</div>
        </div>

        <div
          class="hamburger-btn"
          @click=${() => this.dispatchEvent(new CustomEvent('dooty-navigate', {
            bubbles: true,
            composed: true,
            detail: 'settings',
        }))}
        >
          <div class="ham-line"></div>
          <div class="ham-line"></div>
          <div class="ham-line"></div>
        </div>
      </div>

      <!-- Streak & Next Prediction Card -->
      <div class="prediction-card">
        <div class="streak-badge">
          ${isKo ? `${streak}일 연속` : `${streak} DAY STREAK`}
        </div>
        <div class="pred-label">
          ${isKo ? '다음은 아마도' : 'Next one, probably'}
        </div>
        <div class="pred-time">${predTimeStr}</div>
        <div class="pred-sub">${predSubText}</div>
        <div class="pred-progress-bar">
          <div class="pred-progress-fill" style="width: ${progressFillPct}%;"></div>
        </div>
      </div>

      <!-- 3 KPI Cards -->
      <div class="kpi-row">
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">${avgPerDay}</div>
          <div class="kpi-lbl" style="color: #6A6152;">${isKo ? '일일 평균' : 'a day, avg'}</div>
        </div>
        <div class="kpi-card" style="background: #FFF;">
          <div class="kpi-val" style="color: #17140F;">
            ${longestGapHours > 0 ? `${Math.round(longestGapHours)}h` : isKo ? '기록 없음' : '0h'}
          </div>
          <div class="kpi-lbl" style="color: #6A6152;">${isKo ? '최대 공백' : 'longest gap'}</div>
        </div>
        <div class="kpi-card" style="background: #2B5BE8;">
          <div class="kpi-val" style="color: #FFF;">${totalCount}</div>
          <div class="kpi-lbl" style="color: #BFD0FF;">${isKo ? '전체 기록' : 'all time'}</div>
        </div>
      </div>

      <!-- Today Feed Header -->
      <div class="section-row">
        <div class="section-title">${isKo ? '오늘' : 'Today'}</div>
        <div class="section-count">
          ${isKo ? `${todayEvents.length}건` : `${todayEvents.length} THINGS`}
        </div>
      </div>

      <!-- Feed List -->
      <div class="feed-list">
        ${todayEvents.length > 0
            ? todayEvents.map((evt) => {
                const { tag, bg } = this.getEventVisuals(evt.eventType);
                return html `
                <div class="feed-card" @click=${() => appState.openLogger(evt.eventType)}>
                  <div class="feed-badge" style="background: ${bg};">${tag}</div>
                  <div class="feed-content">
                    <div class="feed-title">
                      ${evt.notes || `${evt.eventType.toUpperCase()} · ${isKo ? '기록됨' : 'Logged'}`}
                    </div>
                    <div class="feed-detail">
                      ${isKo ? `기록자: ${evt.loggedByName}` : `logged by ${evt.loggedByName}`}
                    </div>
                  </div>
                  <div class="feed-time">${this.formatTime(evt.timestamp)}</div>
                </div>
              `;
            })
            : events.length > 0
                ? html `
              <!-- Recent fallback if no logs today -->
              <div style="font-size: 11px; font-weight: 800; color: #9A9080; text-transform: uppercase; margin-bottom: 4px;">
                ${isKo ? '최근 기록' : 'Recent logs'}
              </div>
              ${events.slice(0, 4).map((evt) => {
                    const { tag, bg } = this.getEventVisuals(evt.eventType);
                    return html `
                  <div class="feed-card" @click=${() => appState.openLogger(evt.eventType)}>
                    <div class="feed-badge" style="background: ${bg};">${tag}</div>
                    <div class="feed-content">
                      <div class="feed-title">
                        ${evt.notes || `${evt.eventType.toUpperCase()} · ${isKo ? '기록' : 'Logged'}`}
                      </div>
                      <div class="feed-detail">
                        ${new Date(evt.timestamp).toLocaleDateString()} · ${evt.loggedByName}
                      </div>
                    </div>
                    <div class="feed-time">${this.formatTime(evt.timestamp)}</div>
                  </div>
                `;
                })}
            `
                : html `
              <div class="empty-card">
                <div style="font-family: var(--font-heading); font-weight: 800; font-size: 16px; color: #17140F;">
                  ${isKo ? '아직 기록이 없습니다' : 'No logs recorded yet'}
                </div>
                <div style="font-size: 12px; line-height: 1.45;">
                  ${isKo
                    ? '하단의 주황색 버튼을 눌러 첫 배변, 식사 또는 산책을 기록해보세요!'
                    : 'Tap the orange button at the bottom to log your pet’s first poop, walk, or meal!'}
                </div>
              </div>
            `}
      </div>

      <!-- Wrapped Banner Card -->
      <div
        class="wrapped-card"
        @click=${() => this.dispatchEvent(new CustomEvent('dooty-navigate', {
            bubbles: true,
            composed: true,
            detail: 'wrapped',
        }))}
      >
        <div style="flex: 1;">
          <div class="wrapped-title">
            ${isKo ? 'Dooty 결산 2026' : 'Dooty Wrapped 2026'}
          </div>
          <div class="wrapped-sub">
            ${isKo
            ? `올해 ${totalCount}번, 기록을 확인하세요.`
            : `${totalCount} logs so far. Tap to view records.`}
          </div>
        </div>
        <div class="wrapped-arrow">›</div>
      </div>
    `;
    }
};
__decorate([
    state()
], DootyHome.prototype, "unsubscribe", void 0);
DootyHome = __decorate([
    customElement('dooty-home')
], DootyHome);
export { DootyHome };
//# sourceMappingURL=dooty-home.js.map