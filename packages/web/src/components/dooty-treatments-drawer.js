var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
let DootyTreatmentsDrawer = class DootyTreatmentsDrawer extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.dose = '';
        this.every = 30;
        this.isClosing = false;
    }
    static { this.styles = css `
    :host {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.5);
      z-index: 195;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      animation: tb-scrim 0.24s ease-out both;
    }

    .modal-backdrop.closing {
      animation: tb-scrimout 0.19s ease-in both;
    }

    .modal-sheet {
      position: relative;
      background: #FFFBF2;
      border: 3px solid #17140F;
      border-bottom: none;
      border-radius: 30px 30px 0 0;
      padding: 18px 18px 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      width: 100%;
      max-width: 480px;
      box-shadow: 0 -10px 32px rgba(23, 20, 15, 0.25);
      max-height: 88vh;
      overflow-y: auto;
      box-sizing: border-box;
      animation: tb-sheet 0.3s cubic-bezier(0.2, 0.85, 0.25, 1) both;
    }

    .modal-sheet.closing {
      animation: tb-sheetout 0.19s cubic-bezier(0.4, 0, 1, 1) both;
    }

    .drag-handle {
      width: 52px;
      height: 5px;
      border-radius: 5px;
      background: #17140F;
      margin: 0 auto;
      flex: none;
    }

    .sheet-header {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-info {
      flex: 1;
      min-width: 0;
    }

    .sheet-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      color: #17140F;
      letter-spacing: -0.7px;
      line-height: 1.15;
    }

    .sheet-sub {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .close-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #17140F;
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .close-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .treatment-list {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .treatment-card {
      display: flex;
      align-items: center;
      gap: 11px;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 11px 13px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.16s ease;
    }

    .treatment-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .treatment-card:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .card-chip {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 14px;
      color: #17140F;
    }

    .card-chip.animated {
      animation: tb-nudge 3s ease-in-out infinite;
    }

    .card-body {
      flex: 1;
      min-width: 0;
    }

    .card-name {
      font-size: 14px;
      font-weight: 800;
      line-height: 1.2;
    }

    .card-detail {
      font-size: 11.5px;
      font-weight: 600;
      margin-top: 1px;
      line-height: 1.2;
    }

    .card-right {
      flex: none;
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .card-left-time {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 15px;
      line-height: 1;
      letter-spacing: -0.4px;
    }

    .card-date {
      font-size: 10.5px;
      font-weight: 700;
      margin-top: 3px;
    }

    .card-del-btn {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1.5px solid currentColor;
      opacity: 0.35;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      cursor: pointer;
      flex: none;
      padding: 0;
      user-select: none;
      transition: opacity 0.15s ease, transform 0.13s ease;
    }

    .card-del-btn:hover {
      opacity: 0.95;
      transform: scale(1.15);
    }

    .hint-label {
      font-size: 11px;
      font-weight: 700;
      color: #9A9080;
      text-align: center;
    }

    .divider {
      height: 2.5px;
      background: #EFE6D2;
      border-radius: 3px;
    }

    .section-title {
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
      margin-bottom: 10px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input-box {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 9px 13px;
      box-shadow: 2px 2px 0 #17140F;
    }

    .input-box:focus-within {
      border-color: #FF5A3C;
    }

    .input-label {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      text-transform: uppercase;
      line-height: 1;
    }

    .text-input {
      width: 100%;
      border: 0;
      outline: 0;
      background: transparent;
      font-family: var(--font-body);
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
      padding: 4px 0 0;
      box-sizing: border-box;
    }

    .frequency-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .freq-pill {
      border: 3px solid #17140F;
      border-radius: 15px;
      padding: 9px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.16s ease;
    }

    .freq-pill:active {
      transform: scale(0.965);
    }

    .freq-pill.active {
      background: #FFCE2E;
      box-shadow: 3px 3px 0 #17140F;
    }

    .freq-pill:not(.active) {
      background: #FFF;
      box-shadow: none;
    }

    .add-action-btn {
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.16s ease, background-color 0.16s ease;
    }

    .add-action-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .add-action-btn.ready {
      background: #1FC99B;
      opacity: 1;
    }

    .add-action-btn:not(.ready) {
      background: #E8DFCB;
      opacity: 0.55;
      cursor: not-allowed;
    }

    @keyframes tb-sheet {
      0% { transform: translateY(100%); }
      100% { transform: translateY(0); }
    }

    @keyframes tb-sheetout {
      0% { transform: translateY(0); }
      100% { transform: translateY(100%); }
    }

    @keyframes tb-scrim {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes tb-scrimout {
      0% { opacity: 1; }
      100% { opacity: 0; }
    }

    @keyframes tb-nudge {
      0%, 70%, 100% { transform: rotate(0) scale(1); }
      77% { transform: rotate(-6deg) scale(1.05); }
      85% { transform: rotate(6deg) scale(1.05); }
      93% { transform: rotate(-2deg) scale(1.01); }
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
    closeDrawer() {
        if (this.isClosing)
            return;
        this.isClosing = true;
        setTimeout(() => {
            this.isClosing = false;
            appState.closeTreatmentsDrawer();
        }, 190);
    }
    handleGive(id) {
        const res = appState.giveTreatment(id);
        if (res.title) {
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: res,
            }));
        }
        this.closeDrawer();
    }
    handleDelete(id) {
        const res = appState.removeTreatment(id);
        if (res.title) {
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: res,
            }));
        }
        this.requestUpdate();
    }
    handleAdd() {
        if (!this.name.trim())
            return;
        const res = appState.addTreatment({
            name: this.name,
            dose: this.dose,
            every: this.every,
        });
        if (res.title) {
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: res,
            }));
        }
        this.name = '';
        this.dose = '';
        this.every = 30;
        this.closeDrawer();
    }
    render() {
        if (!appState.treatmentsDrawerOpen && !this.isClosing)
            return null;
        const isKo = appState.currentLocale === 'ko';
        const sorted = appState.treatments.slice().sort((a, b) => a.due - b.due);
        const count = sorted.length;
        const isReady = this.name.trim().length > 0;
        const freqOptions = [
            { name: isKo ? '매주' : 'Weekly', value: 7 },
            { name: isKo ? '매월' : 'Monthly', value: 30 },
            { name: isKo ? '3개월마다' : 'Every 3 months', value: 90 },
            { name: isKo ? '6개월마다' : 'Every 6 months', value: 180 },
            { name: isKo ? '매년' : 'Yearly', value: 365 },
        ];
        return html `
      <div
        class="modal-backdrop ${this.isClosing ? 'closing' : ''}"
        @click=${() => this.closeDrawer()}
      >
        <div
          class="modal-sheet ${this.isClosing ? 'closing' : ''}"
          @click=${(e) => e.stopPropagation()}
        >
          <!-- Drag Handle -->
          <div class="drag-handle"></div>

          <!-- Header -->
          <div class="sheet-header">
            <div class="header-info">
              <div class="sheet-title">
                ${isKo ? '투약 및 예방 관리' : 'Treatments'}
              </div>
              <div class="sheet-sub">
                ${isKo
            ? `반복 일정 ${count}건 등록됨`
            : `${count} ${count === 1 ? 'treatment' : 'treatments'} on a repeating schedule.`}
              </div>
            </div>
            <div class="close-btn" @click=${() => this.closeDrawer()}>
              &#10005;
            </div>
          </div>

          <!-- Treatments List -->
          <div class="treatment-list">
            ${sorted.map((t) => {
            const skin = appState.getTreatmentSkin(t.due);
            const leftText = appState.formatTreatmentLeft(t.due);
            const dateText = appState.formatTreatmentDueDate(t.due);
            const everyLabel = appState.getTreatmentEveryLabel(t.every);
            const tag = t.name.trim().charAt(0).toUpperCase() || 'M';
            return html `
                <div
                  class="treatment-card"
                  style="background: ${skin.bg};"
                  @click=${() => this.handleGive(t.id)}
                >
                  <div
                    class="card-chip ${skin.anim !== 'none' ? 'animated' : ''}"
                    style="background: ${skin.chip};"
                  >
                    ${tag}
                  </div>
                  <div class="card-body">
                    <div class="card-name" style="color: ${skin.fg};">
                      ${t.name}
                    </div>
                    <div class="card-detail" style="color: ${skin.sub};">
                      ${t.dose} · ${isKo ? `${everyLabel}마다` : `every ${everyLabel}`}
                    </div>
                  </div>
                  <div class="card-right">
                    <div style="text-align: right;">
                      <div class="card-left-time" style="color: ${skin.fg};">
                        ${leftText}
                      </div>
                      <div class="card-date" style="color: ${skin.sub};">
                        ${dateText}
                      </div>
                    </div>
                    <button
                      class="card-del-btn"
                      style="color: ${skin.fg};"
                      @click=${(e) => {
                e.stopPropagation();
                this.handleDelete(t.id);
            }}
                      title="${isKo ? '일정 삭제' : 'Remove schedule'}"
                    >
                      &#10005;
                    </button>
                  </div>
                </div>
              `;
        })}
          </div>

          <div class="hint-label">
            ${isKo ? '탭하여 투약을 완료 상태로 기록하세요.' : 'Tap one to mark it given.'}
          </div>

          <div class="divider"></div>

          <!-- Add Another Section -->
          <div>
            <div class="section-title">${isKo ? '일정 추가' : 'Add another'}</div>
            <div class="input-group">
              <div class="input-box">
                <div class="input-label">${isKo ? '약 / 치료 이름' : 'Name'}</div>
                <input
                  class="text-input"
                  type="text"
                  .value=${this.name}
                  @input=${(e) => (this.name = e.target.value)}
                  placeholder="${isKo ? '심장사상충약, 구충제 등' : 'Flea & tick'}"
                />
              </div>
              <div class="input-box">
                <div class="input-label">
                  ${isKo ? '복용량 또는 브랜드' : 'Dose or brand'}
                </div>
                <input
                  class="text-input"
                  type="text"
                  .value=${this.dose}
                  @input=${(e) => (this.dose = e.target.value)}
                  placeholder="${isKo ? '선택 사항 (예: 1정, 바르는 약)' : 'optional'}"
                />
              </div>
            </div>
          </div>

          <!-- How Often Frequency -->
          <div>
            <div class="section-title">${isKo ? '반복 주기' : 'How often'}</div>
            <div class="frequency-grid">
              ${freqOptions.map((opt) => html `
                  <div
                    class="freq-pill ${this.every === opt.value ? 'active' : ''}"
                    @click=${() => (this.every = opt.value)}
                  >
                    ${opt.name}
                  </div>
                `)}
            </div>
          </div>

          <!-- Submit Button -->
          <div
            class="add-action-btn ${isReady ? 'ready' : ''}"
            @click=${() => this.handleAdd()}
          >
            ${isKo ? '일정 등록하기' : 'Add treatment'}
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    state()
], DootyTreatmentsDrawer.prototype, "name", void 0);
__decorate([
    state()
], DootyTreatmentsDrawer.prototype, "dose", void 0);
__decorate([
    state()
], DootyTreatmentsDrawer.prototype, "every", void 0);
__decorate([
    state()
], DootyTreatmentsDrawer.prototype, "isClosing", void 0);
DootyTreatmentsDrawer = __decorate([
    customElement('dooty-treatments-drawer')
], DootyTreatmentsDrawer);
export { DootyTreatmentsDrawer };
//# sourceMappingURL=dooty-treatments-drawer.js.map