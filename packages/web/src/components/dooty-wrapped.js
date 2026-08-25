var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
let DootyWrapped = class DootyWrapped extends LitElement {
    static { this.styles = css `
    :host {
      display: block;
      min-height: 100vh;
      background: #17140F;
      padding: 52px 18px 40px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFCE2E;
      border: 3px solid #FFCE2E;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
    }

    .wrapped-header-tag {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 2.4px;
      color: #FF5A3C;
      text-transform: uppercase;
    }

    .wrapped-main-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 52px;
      line-height: 0.95;
      color: #FFFBF2;
      margin-top: 5px;
      letter-spacing: -2.5px;
    }

    .cards-col {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 6px;
    }

    .wrapped-stat-card {
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 17px 18px;
    }

    .stat-label {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1.8px;
      text-transform: uppercase;
    }

    .stat-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 32px;
      line-height: 1.05;
      margin-top: 4px;
      letter-spacing: -1.2px;
    }

    .stat-sub {
      font-size: 12.5px;
      font-weight: 600;
      line-height: 1.45;
      margin-top: 5px;
    }

    .share-btn {
      background: #FF5A3C;
      border: 3px solid #FFFBF2;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      color: #FFF;
      cursor: pointer;
      margin-top: 8px;
    }
  `; }
    render() {
        const isKo = appState.currentLocale === 'ko';
        const events = appState.events || [];
        const totalCount = events.length;
        const petId = appState.currentPet?.id || '';
        const poopEvents = events.filter((e) => e.eventType === 'poop');
        const walkEvents = events.filter((e) => e.eventType === 'walk');
        // Peak hour
        const hourCounts = Array(24).fill(0);
        events.forEach((e) => {
            const d = new Date(e.timestamp);
            if (!isNaN(d.getTime())) {
                hourCounts[d.getHours()]++;
            }
        });
        let maxHour = 7;
        let maxHourCount = 0;
        hourCounts.forEach((c, h) => {
            if (c > maxHourCount) {
                maxHourCount = c;
                maxHour = h;
            }
        });
        const goldenHourStr = maxHourCount > 0
            ? `${maxHour > 12 ? maxHour - 12 : maxHour || 12}:00 ${maxHour >= 12 ? 'pm' : 'am'}`
            : isKo ? '기록 없음' : 'No data yet';
        const cards = [
            {
                k: isKo ? '총 배출량' : 'Total output',
                v: isKo ? `${poopEvents.length}회` : `${poopEvents.length} poops`,
                sub: isKo
                    ? `총 ${totalCount}건의 이벤트가 등록되었습니다.`
                    : `${totalCount} total logged events recorded so far.`,
                bg: '#FFCE2E',
                fg: '#17140F',
                label: '#7A5C00',
                shadow: '#FF5A3C',
                rot: '-1.2deg',
            },
            {
                k: isKo ? '황금 시간대' : 'Your golden hour',
                v: goldenHourStr,
                sub: isKo
                    ? `가장 많은 활동이 기록된 주요 시간대입니다.`
                    : `Most frequent hour of daily activity.`,
                bg: '#FFFBF2',
                fg: '#17140F',
                label: '#6A6152',
                shadow: '#2B5BE8',
                rot: '0.9deg',
            },
            {
                k: isKo ? '산책 세션' : 'Walk sessions',
                v: isKo ? `${walkEvents.length}회` : `${walkEvents.length} walks`,
                sub: isKo
                    ? '반려견과 함께한 야외 산책 기록입니다.'
                    : 'Outdoor exercise recorded with your pet.',
                bg: '#1FC99B',
                fg: '#17140F',
                label: '#0A5A45',
                shadow: '#FFCE2E',
                rot: '-0.7deg',
            },
            {
                k: isKo ? '기록 데이터' : 'Database Status',
                v: totalCount > 0 ? (isKo ? '실시간 동기화' : 'Synced Live') : (isKo ? '대기 중' : 'Waiting'),
                sub: isKo
                    ? 'Cloudflare & Supabase 클라우드에 안전하게 보관됩니다.'
                    : 'Securely saved to Cloudflare & Supabase.',
                bg: '#FF5A3C',
                fg: '#FFF',
                label: '#FFE3DC',
                shadow: '#FFCE2E',
                rot: '1.1deg',
            },
        ];
        return html `
      <div
        class="back-btn"
        @click=${() => this.dispatchEvent(new CustomEvent('dooty-navigate', { bubbles: true, composed: true, detail: 'today' }))}
      >
        ‹ ${isKo ? '오늘' : 'Today'}
      </div>

      <div>
        <div class="wrapped-header-tag">
          ${isKo ? 'Dooty 연말 결산' : 'Dooty Wrapped'}
        </div>
        <div class="wrapped-main-title">
          ${isKo ? '2026년,\n지금까지' : '2026,\nso far'}
        </div>
      </div>

      <div class="cards-col">
        ${cards.map((w) => html `
            <div
              class="wrapped-stat-card"
              style="background: ${w.bg}; box-shadow: 4px 4px 0 ${w.shadow}; transform: rotate(${w.rot});"
            >
              <div class="stat-label" style="color: ${w.label};">${w.k}</div>
              <div class="stat-val" style="color: ${w.fg};">${w.v}</div>
              <div class="stat-sub" style="color: ${w.label};">${w.sub}</div>
            </div>
          `)}
      </div>

      <div
        class="share-btn"
        @click=${() => this.dispatchEvent(new CustomEvent('dooty-toast', {
            bubbles: true,
            composed: true,
            detail: { title: 'Card ready to share', sub: 'Saved to photos.' },
        }))}
      >
        ${isKo ? '카드 공유하기' : 'Share the card'}
      </div>
    `;
    }
};
DootyWrapped = __decorate([
    customElement('dooty-wrapped')
], DootyWrapped);
export { DootyWrapped };
//# sourceMappingURL=dooty-wrapped.js.map