var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
import { calculatePetAnalytics } from '@watslog/shared';
let DootyAnalytics = class DootyAnalytics extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedPeriod = 'days7';
    }
    static { this.styles = css `
    :host {
      display: block;
      padding: 16px 18px 32px;
      max-width: 480px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .analytics-header {
      margin-bottom: 16px;
    }

    .page-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      letter-spacing: -0.5px;
    }

    .page-sub {
      font-size: 13px;
      color: var(--color-muted);
      font-weight: 600;
      margin-top: 2px;
    }

    /* Cards */
    .card-block {
      background: #fff;
      border: var(--border-thick);
      border-radius: 22px;
      padding: 18px;
      box-shadow: var(--shadow-md);
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .card-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* 24-Hour Clock Histogram */
    .clock-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 4px;
      align-items: flex-end;
      height: 110px;
      padding-top: 10px;
    }

    .clock-bar-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: flex-end;
    }

    .bar-pill {
      width: 100%;
      min-height: 4px;
      border-radius: 6px;
      border: 1.5px solid var(--color-ink);
      transition: height 0.3s ease;
    }

    .clock-hour-label {
      font-size: 9px;
      font-weight: 700;
      color: var(--color-muted);
      margin-top: 4px;
    }

    /* Health Alerts */
    .health-alert-box {
      background: #FFE4E6;
      border: var(--border-thick);
      border-radius: 16px;
      padding: 12px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      font-weight: 700;
      color: #9F1239;
    }

    /* Frequency Grid */
    .freq-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .freq-chip {
      background: var(--color-cream);
      border: 2px solid var(--color-ink);
      border-radius: 12px;
      padding: 8px;
      text-align: center;
    }

    .freq-count {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
    }

    .freq-label {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-muted);
    }
  `; }
    connectedCallback() {
        super.connectedCallback();
        this.computeAnalytics();
    }
    computeAnalytics() {
        const petId = appState.currentPet?.id || '';
        this.analytics = calculatePetAnalytics(appState.events, petId);
    }
    render() {
        const t = appState.t.analytics;
        this.computeAnalytics();
        const stats = this.analytics;
        if (!stats)
            return null;
        // Calculate max hourly count for scaling bar heights
        const maxHour = Math.max(1, ...stats.hourlyDistribution.map((h) => h.poopCount + h.peeCount));
        return html `
      <div class="analytics-header">
        <h2 class="page-title">${t.title}</h2>
        <p class="page-sub">${t.subtitle}</p>
      </div>

      <!-- 24-Hour Clock Histogram -->
      <div class="card-block">
        <div class="card-title">
          <span>⏰ ${t.clock24hTitle}</span>
          <span style="font-size: 11px; color: var(--color-muted);">00:00 - 23:00</span>
        </div>
        <p style="font-size: 12px; color: var(--color-muted);">${t.clock24hDesc}</p>

        <div class="clock-grid">
          ${stats.hourlyDistribution.slice(0, 12).map((bucket) => {
            const sum = bucket.poopCount + bucket.peeCount;
            const heightPct = Math.max(10, Math.round((sum / maxHour) * 100));
            const bg = bucket.poopCount > 0 ? '#FF5A3C' : bucket.peeCount > 0 ? '#3E8BFF' : '#E5E0D5';
            return html `
              <div class="clock-bar-col">
                <div
                  class="bar-pill"
                  style="height: ${heightPct}%; background: ${bg};"
                  title="${bucket.hour}:00 - ${bucket.poopCount} poops, ${bucket.peeCount} pees"
                ></div>
                <span class="clock-hour-label">${bucket.hour}h</span>
              </div>
            `;
        })}
        </div>

        <div class="clock-grid">
          ${stats.hourlyDistribution.slice(12, 24).map((bucket) => {
            const sum = bucket.poopCount + bucket.peeCount;
            const heightPct = Math.max(10, Math.round((sum / maxHour) * 100));
            const bg = bucket.poopCount > 0 ? '#FF5A3C' : bucket.peeCount > 0 ? '#3E8BFF' : '#E5E0D5';
            return html `
              <div class="clock-bar-col">
                <div
                  class="bar-pill"
                  style="height: ${heightPct}%; background: ${bg};"
                  title="${bucket.hour}:00 - ${bucket.poopCount} poops, ${bucket.peeCount} pees"
                ></div>
                <span class="clock-hour-label">${bucket.hour}h</span>
              </div>
            `;
        })}
        </div>
      </div>

      <!-- Health Watch -->
      <div class="card-block">
        <div class="card-title">
          <span>🩺 ${t.healthWatch}</span>
        </div>
        <div class="health-alert-box">
          <span style="font-size: 20px;">🤢</span>
          <span>${t.vomitCount(stats.healthAlerts.vomitsLast7Days)}</span>
        </div>
        <div class="health-alert-box" style="background:#EDE9FE; color:#5B21B6;">
          <span style="font-size: 20px;">💊</span>
          <span>${t.medCount(stats.healthAlerts.medicinesLast7Days)}</span>
        </div>
      </div>

      <!-- All-Time Total Frequency Breakdown -->
      <div class="card-block">
        <div class="card-title">
          <span>📊 ${t.frequencyTitle}</span>
          <span style="font-size: 12px; font-weight: 800;">${stats.totalEventsLogged} Logs</span>
        </div>

        <div class="freq-grid">
          <div class="freq-chip">
            <div class="freq-count">💩 ${stats.eventCountsByType.poop || 0}</div>
            <div class="freq-label">Poop</div>
          </div>
          <div class="freq-chip">
            <div class="freq-count">💧 ${stats.eventCountsByType.pee || 0}</div>
            <div class="freq-label">Pee</div>
          </div>
          <div class="freq-chip">
            <div class="freq-count">🦮 ${stats.eventCountsByType.walk || 0}</div>
            <div class="freq-label">Walks</div>
          </div>
          <div class="freq-chip">
            <div class="freq-count">🍖 ${stats.eventCountsByType.food || 0}</div>
            <div class="freq-label">Food</div>
          </div>
          <div class="freq-chip">
            <div class="freq-count">🥣 ${stats.eventCountsByType.water || 0}</div>
            <div class="freq-label">Water</div>
          </div>
          <div class="freq-chip">
            <div class="freq-count">💊 ${stats.eventCountsByType.medicine || 0}</div>
            <div class="freq-label">Meds</div>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    state()
], DootyAnalytics.prototype, "analytics", void 0);
__decorate([
    state()
], DootyAnalytics.prototype, "selectedPeriod", void 0);
DootyAnalytics = __decorate([
    customElement('dooty-analytics')
], DootyAnalytics);
export { DootyAnalytics };
//# sourceMappingURL=dooty-analytics.js.map