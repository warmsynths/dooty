import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-walk')
export class DootyWalk extends LitElement {
  private unsubscribe?: () => void;

  @state() private notes: string = '';
  @state() private photoUrl: string = '';
  @state() private isSaving: boolean = false;

  static styles = css`
    :host {
      display: contents;
    }

    /* Floating Banner above dock */
    .walk-banner {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 104px;
      z-index: 75;
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 10px 14px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 11px;
      cursor: pointer;
      box-sizing: border-box;
      animation: tb-screen 0.2s ease both;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .walk-banner:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .ping-wrap {
      position: relative;
      width: 13px;
      height: 13px;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ping-circle {
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #17140F;
      animation: tb-ping 1.5s ease-out infinite;
    }

    .ping-dot {
      position: relative;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #17140F;
    }

    .banner-label {
      font-size: 10.5px;
      font-weight: 800;
      color: #0A5A45;
      letter-spacing: 1.2px;
      flex: none;
    }

    .banner-time {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 20px;
      color: #17140F;
      letter-spacing: -0.6px;
      font-variant-numeric: tabular-nums;
    }

    .banner-divider {
      width: 2.5px;
      height: 18px;
      background: #0A5A45;
      opacity: 0.35;
      border-radius: 2px;
      flex: none;
    }

    .banner-km {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
      flex: none;
    }

    /* Fullscreen Live View */
    .live-fullscreen {
      position: fixed;
      inset: 0;
      z-index: 140;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .live-map-area {
      position: relative;
      flex: 1;
      min-height: 0;
      background: #E3E8D8;
      overflow: hidden;
      border-bottom: 3px solid #17140F;
    }

    .map-grid-bg {
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(0deg, transparent 0 60px, #D2D9C4 60px 66px),
        repeating-linear-gradient(90deg, transparent 0 76px, #D2D9C4 76px 82px);
    }

    .map-park-1 {
      position: absolute;
      left: -30px;
      top: 150px;
      width: 190px;
      height: 130px;
      border-radius: 60px;
      background: #C3DCB4;
      border: 3px solid #17140F;
    }

    .map-park-2 {
      position: absolute;
      right: -40px;
      top: 36px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #C3DCB4;
      border: 3px solid #17140F;
    }

    .map-river {
      position: absolute;
      left: -4px;
      right: -4px;
      top: 250px;
      height: 20px;
      background: #9EC6E8;
      border-top: 3px solid #17140F;
      border-bottom: 3px solid #17140F;
    }

    .minimize-btn {
      position: absolute;
      z-index: 5;
      left: 16px;
      top: 58px;
      width: 40px;
      height: 40px;
      border-radius: 14px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .minimize-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .live-status-pill {
      position: absolute;
      z-index: 5;
      right: 16px;
      top: 58px;
      background: #17140F;
      border-radius: 13px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .live-controls-panel {
      flex: none;
      padding: 16px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      background: #FFFBF2;
      box-sizing: border-box;
    }

    .stat-row {
      display: flex;
      align-items: flex-end;
      gap: 14px;
    }

    .main-timer {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 54px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -2.6px;
      font-variant-numeric: tabular-nums;
      margin-top: 2px;
    }

    .btn-row {
      display: flex;
      gap: 10px;
    }

    .pause-btn {
      width: 112px;
      flex: none;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      box-sizing: border-box;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .pause-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .end-btn {
      flex: 1;
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      box-sizing: border-box;
      user-select: none;
      transition: background 0.15s ease, transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .end-btn:hover {
      background: #FF7659;
    }

    .end-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .end-btn.is-loading {
      background: #E84E32;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: not-allowed;
      pointer-events: none;
      transform: translate(1px, 1px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .end-btn .btn-spinner {
      width: 18px;
      height: 18px;
      border: 2.5px solid rgba(255, 255, 255, 0.4);
      border-top-color: #FFFFFF;
      border-radius: 50%;
      animation: spin 0.65s linear infinite;
      display: inline-block;
      flex: none;
    }

    /* Arrived Home Sheet */
    .arrived-sheet-backdrop {
      position: fixed;
      inset: 0;
      z-index: 190;
      background: rgba(23, 20, 15, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      animation: tb-scrim 0.2s ease both;
    }

    .arrived-sheet {
      position: relative;
      background: #FFFBF2;
      border-top: 3px solid #17140F;
      border-radius: 30px 30px 0 0;
      padding: 20px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      animation: tb-sheet 0.25s cubic-bezier(0.23, 1, 0.32, 1) both;
      box-sizing: border-box;
    }

    /* Post Walk Summary Screen */
    .summary-fullscreen {
      position: fixed;
      inset: 0;
      z-index: 140;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .summary-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 56px 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-sizing: border-box;
    }

    .summary-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 32px;
      color: #17140F;
      letter-spacing: -1.3px;
      line-height: 1.06;
    }

    .summary-sub {
      font-size: 12.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 3px;
    }

    .map-preview-box {
      position: relative;
      height: 196px;
      border: 3px solid #17140F;
      border-radius: 22px;
      overflow: hidden;
      background: #E3E8D8;
      box-shadow: 4px 4px 0 #17140F;
    }

    .kpis-row {
      display: flex;
      gap: 10px;
    }

    .kpi-tile {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 12px;
      box-shadow: 3px 3px 0 #17140F;
      box-sizing: border-box;
    }

    .kpi-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 21px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -0.8px;
    }

    .kpi-lbl {
      font-size: 9.5px;
      font-weight: 800;
      color: #7A5C00;
      margin-top: 5px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    .details-box {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      box-shadow: 4px 4px 0 #17140F;
      overflow: hidden;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 15px;
      border-bottom: 2.5px solid #F0E7D3;
    }

    .detail-lbl {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      width: 74px;
      flex: none;
      text-transform: uppercase;
    }

    .detail-val {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
    }

    .discard-link {
      text-align: center;
      font-size: 12.5px;
      font-weight: 800;
      color: #9A9080;
      text-decoration: underline;
      cursor: pointer;
      padding: 4px;
      user-select: none;
    }

    .discard-link:active {
      opacity: 0.5;
    }

    .save-bottom-bar {
      flex: none;
      padding: 14px 18px 26px;
      background: #FFFBF2;
      border-top: 3px solid #F0E7D3;
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

  private formatSec(sec: number): string {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  render() {
    const isKo = appState.currentLocale === 'ko';
    const walk = appState.activeWalk;
    const view = appState.walkView;
    const sec = appState.getWalkSeconds();
    const timeStr = this.formatSec(sec);
    const kmStr = appState.getWalkDistanceKm();
    const paceStr = appState.getWalkPace();
    const isPaused = walk?.pausedAt !== null;

    // Fixed mock GPS SVG route coordinates
    const routeD = 'M 60 220 Q 90 120 180 140 T 280 90 T 320 220 T 220 310';
    const startX = 60;
    const startY = 220;
    const headX = 220;
    const headY = 310;

    return html`
      <!-- 1. Floating Banner above Dock (Visible when walk is running in background) -->
      ${walk && view === null
        ? html`
            <div class="walk-banner" @click=${() => appState.expandWalk()}>
              <div class="ping-wrap">
                <div class="ping-circle"></div>
                <div class="ping-dot"></div>
              </div>
              <div class="banner-label">${isKo ? '실시간 산책' : 'LIVE WALK'}</div>
              <div style="flex: 1;"></div>
              <div class="banner-time">${timeStr}</div>
              <div class="banner-divider"></div>
              <div class="banner-km">${kmStr} km</div>
            </div>
          `
        : null}

      <!-- 2. Fullscreen Live Walk Screen -->
      ${walk && view === 'live'
        ? html`
            <div class="live-fullscreen">
              <!-- Top Map Area with GPS Trace -->
              <div class="live-map-area">
                <div class="map-grid-bg"></div>
                <div class="map-park-1"></div>
                <div class="map-park-2"></div>
                <div class="map-river"></div>

                <!-- Animated GPS Trace SVG -->
                <svg
                  viewBox="0 0 400 400"
                  preserveAspectRatio="xMidYMid meet"
                  style="position: absolute; inset: 0; width: 100%; height: 100%;"
                >
                  <path
                    d=${routeD}
                    fill="none"
                    stroke="#17140F"
                    stroke-width="13"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d=${routeD}
                    fill="none"
                    stroke="#FF5A3C"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle cx=${startX} cy=${startY} r="9" fill="#FFCE2E" stroke="#17140F" stroke-width="3.5"></circle>
                  <circle cx=${headX} cy=${headY} r="9" fill="#1FC99B" stroke="#17140F" stroke-width="3.5"></circle>
                </svg>

                <div class="minimize-btn" @click=${() => appState.minimizeWalk()}>&#8595;</div>
                <div class="live-status-pill">
                  <div
                    style="width:9px; height:9px; border-radius:50%; background:#1FC99B; animation: tb-ping 1.5s ease-out infinite;"
                  ></div>
                  <div style="font-size:10px; font-weight:800; color:#FFF; letter-spacing:1.2px;">
                    ${isKo ? '실시간 산책' : 'LIVE WALK'}
                  </div>
                </div>
              </div>

              <!-- Bottom Controls Panel -->
              <div class="live-controls-panel">
                <div class="stat-row">
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.3px; color: #9A9080; text-transform: uppercase;">
                      ${isKo ? '경과 시간' : 'Elapsed Time'}
                    </div>
                    <div class="main-timer">${timeStr}</div>
                  </div>
                  <div style="text-align: right; flex: none;">
                    <div style="font-family: var(--font-heading); font-weight: 800; font-size: 26px; color: #17140F; line-height: 1; letter-spacing: -1px;">
                      ${kmStr}
                    </div>
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080;">
                      KM · ${paceStr}/KM
                    </div>
                  </div>
                </div>

                <div class="btn-row">
                  <div class="pause-btn" @click=${() => appState.pauseLiveWalk()}>
                    ${isPaused ? (isKo ? '계속하기' : 'Resume') : isKo ? '일시정지' : 'Pause'}
                  </div>
                  <div class="end-btn" @click=${() => appState.endLiveWalk()}>
                    ${isKo ? '산책 종료' : 'End walk'}
                  </div>
                </div>
              </div>
            </div>
          `
        : null}

      <!-- 3. Arrived Home Auto-Prompt Modal -->
      ${appState.walkHomeAsk
        ? html`
            <div class="arrived-sheet-backdrop">
              <div class="arrived-sheet">
                <div style="display: flex; align-items: center; gap: 13px;">
                  <div
                    style="width:48px; height:48px; border-radius:16px; border:3px solid #17140F; background:#FFCE2E; display:flex; align-items:flex-end; justify-content:center; padding-bottom:8px; box-sizing:border-box; position:relative; overflow:hidden;"
                  >
                    <div
                      style="position:absolute; top:7px; width:26px; height:16px; background:#17140F; clip-path:polygon(50% 0, 100% 100%, 0 100%);"
                    ></div>
                    <div style="width:9px; height:11px; background:#17140F; border-radius:2px 2px 0 0;"></div>
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-family: var(--font-heading); font-weight: 800; font-size: 23px; color: #17140F; letter-spacing: -0.8px; line-height: 1.1;">
                      ${isKo ? '집에 도착하신 것 같아요' : "Looks like you're home"}
                    </div>
                    <div style="font-size: 12.5px; font-weight: 700; color: #6A6152; margin-top: 2px;">
                      ${isKo ? '지금 산책을 끝낼까요?' : 'We can end the walk now.'}
                    </div>
                  </div>
                </div>

                <div style="background:#FFF; border:3px solid #17140F; border-radius:20px; padding:14px 16px; display:flex; align-items:center; gap:14px; box-shadow:3px 3px 0 #17140F;">
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${isKo ? '소요 시간' : 'DURATION'}
                    </div>
                    <div style="font-family:var(--font-heading); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${timeStr}
                    </div>
                  </div>
                  <div style="width: 2.5px; align-self: stretch; background: #F0E7D3;"></div>
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${isKo ? '거리' : 'DISTANCE'}
                    </div>
                    <div style="font-family:var(--font-heading); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${kmStr} km
                    </div>
                  </div>
                </div>

                <div class="btn-row">
                  <div class="pause-btn" style="flex: 1; width: auto;" @click=${() => appState.keepWalking()}>
                    ${isKo ? '아직 걷는 중' : 'Still walking'}
                  </div>
                  <div
                    class="end-btn"
                    style="flex: 1; background: #1FC99B;"
                    @click=${() => appState.endLiveWalk()}
                  >
                    ${isKo ? '네, 종료할게요' : 'Yes, end it'}
                  </div>
                </div>
              </div>
            </div>
          `
        : null}

      <!-- 4. Post Walk Summary View -->
      ${view === 'summary' && appState.walkSummaryData
        ? html`
            <div class="summary-fullscreen">
              <div class="summary-scroll">
                <div>
                  <div class="summary-title">
                    ${isKo
                      ? `수고했어요, ${appState.walkSummaryData.petNames.join(' & ')}!`
                      : `Good effort, ${appState.walkSummaryData.petNames.join(' & ')}`}
                  </div>
                  <div class="summary-sub">
                    ${appState.walkSummaryData.startTime} ~ ${appState.walkSummaryData.endTime} ·
                    ${isKo ? '저장하기 전에 확인해 주세요.' : 'check it over before saving.'}
                  </div>
                </div>

                <!-- Map Preview Box -->
                <div class="map-preview-box">
                  <div class="map-grid-bg"></div>
                  <div class="map-park-1"></div>
                  <div class="map-park-2"></div>
                  <div class="map-river"></div>
                  <svg
                    viewBox="0 0 400 400"
                    preserveAspectRatio="xMidYMid meet"
                    style="position: absolute; inset: 0; width: 100%; height: 100%;"
                  >
                    <path
                      d=${routeD}
                      fill="none"
                      stroke="#17140F"
                      stroke-width="13"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d=${routeD}
                      fill="none"
                      stroke="#FF5A3C"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <circle cx=${startX} cy=${startY} r="9" fill="#FFCE2E" stroke="#17140F" stroke-width="3.5"></circle>
                    <circle cx=${headX} cy=${headY} r="9" fill="#1FC99B" stroke="#17140F" stroke-width="3.5"></circle>
                  </svg>
                </div>

                <!-- 3 KPI Tiles -->
                <div class="kpis-row">
                  <div class="kpi-tile" style="background: #FFCE2E;">
                    <div class="kpi-val">${Math.max(1, Math.round(appState.walkSummaryData.durationSec / 60))} min</div>
                    <div class="kpi-lbl">${isKo ? '시간' : 'Duration'}</div>
                  </div>
                  <div class="kpi-tile" style="background: #1FC99B;">
                    <div class="kpi-val">${appState.walkSummaryData.distanceKm} km</div>
                    <div class="kpi-lbl">${isKo ? '거리' : 'Distance'}</div>
                  </div>
                  <div class="kpi-tile" style="background: #BFD0FF;">
                    <div class="kpi-val">${appState.walkSummaryData.pace}</div>
                    <div class="kpi-lbl">${isKo ? '평균 페이스' : 'Avg Pace'}</div>
                  </div>
                </div>

                <!-- Details & Notes Box -->
                <div class="details-box">
                  <div class="detail-item">
                    <div class="detail-lbl">${isKo ? '참여' : 'WHO'}</div>
                    <div class="detail-val">${appState.walkSummaryData.petNames.join(' & ')}</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-lbl">${isKo ? '작성자' : 'LOGGED BY'}</div>
                    <div class="detail-val">${appState.currentUser?.displayName || 'Me'}</div>
                  </div>
                  <div style="padding: 14px 15px;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080; text-transform: uppercase;">
                      ${isKo ? '메모' : 'NOTES'}
                    </div>
                    <input
                      type="text"
                      placeholder=${isKo ? '산책 중 특이사항을 적어주세요...' : 'Met three dogs, had a blast...'}
                      .value=${this.notes}
                      @input=${(e: any) => (this.notes = e.target.value)}
                      style="width:100%; border:none; background:none; font-size:14px; font-weight:700; color:#17140F; margin-top:5px; outline:none;"
                    />
                  </div>
                </div>

                <div class="discard-link" @click=${() => appState.discardLiveWalk()}>
                  ${isKo ? '이 산책 기록 취소' : 'Discard this walk'}
                </div>
              </div>

              <!-- Bottom Save Button -->
              <div class="save-bottom-bar">
                <div
                  class="end-btn ${this.isSaving ? 'is-loading' : ''}"
                  @click=${() => this.handleSave()}
                >
                  ${this.isSaving
                    ? html`
                        <div class="btn-spinner"></div>
                        <span>${isKo ? '산책 저장 중...' : 'Saving walk...'}</span>
                      `
                    : (isKo ? '산책 저장' : 'Save walk')}
                </div>
              </div>
            </div>
          `
        : null}
    `;
  }

  private async handleSave() {
    if (this.isSaving) return;
    this.isSaving = true;
    try {
      const isKo = appState.currentLocale === 'ko';
      const summary = appState.walkSummaryData;
      const petNames = summary?.petNames.join(' & ') || (isKo ? '반려견' : 'Pet');
      const kmStr = summary?.distanceKm ? `${summary.distanceKm} km` : 'Walk';

      await appState.saveLiveWalk(this.notes, this.photoUrl);
      this.dispatchEvent(
        new CustomEvent('dooty-toast', {
          bubbles: true,
          composed: true,
          detail: {
            title: isKo ? '산책 기록 완료!' : 'Walk saved!',
            sub: isKo ? `${petNames}와(과) 함께한 산책 (${kmStr})` : `${petNames}'s walk logged (${kmStr})`,
          },
        })
      );
    } catch (err) {
      console.error('Failed to save walk:', err);
    } finally {
      this.isSaving = false;
    }
  }
}

