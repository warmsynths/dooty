var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
let DootyHeader = class DootyHeader extends LitElement {
    static { this.styles = css `
    :host {
      display: block;
      width: 100%;
      background: var(--color-yellow);
      border-bottom: var(--border-thick);
      box-shadow: 0 4px 0 var(--color-ink);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-inner {
      max-width: 480px;
      margin: 0 auto;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }

    .logo-icon {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: var(--border-thick);
      background: var(--color-coral);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding-bottom: 3px;
      box-shadow: var(--shadow-sm);
      flex: none;
    }

    .logo-layer-1 { width: 8px; height: 3px; border-radius: 4px; background: #fff; }
    .logo-layer-2 { width: 14px; height: 4px; border-radius: 4px; background: #fff; }
    .logo-layer-3 { width: 19px; height: 5px; border-radius: 4px; background: #fff; }

    .brand-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 26px;
      color: var(--color-ink);
      letter-spacing: -0.8px;
      line-height: 1;
    }

    .right-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .pet-pill {
      background: var(--color-white);
      border: var(--border-thick);
      border-radius: 20px;
      padding: 4px 12px;
      font-weight: 800;
      font-size: 13px;
      box-shadow: var(--shadow-sm);
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }

    .pet-avatar-circle {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #E3D8BE;
      border: 1.5px solid var(--color-ink);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      overflow: hidden;
      flex: none;
    }

    .pet-avatar-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .offline-badge {
      background: var(--color-coral);
      color: #fff;
      border: var(--border-thick);
      border-radius: 12px;
      font-size: 10px;
      font-weight: 900;
      padding: 3px 8px;
      animation: pulse 1.5s infinite;
      box-shadow: var(--shadow-sm);
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.85; transform: scale(0.96); }
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
    render() {
        const pet = appState.currentPet;
        const petName = pet?.name || 'Pet';
        const petAvatar = pet?.avatarUrl;
        const isOnline = appState.isOnline;
        const pendingCount = appState.pendingSyncCount;
        return html `
      <div class="header-inner">
        <div class="brand" @click=${() => appState.setActiveTab('today')}>
          <div class="logo-icon">
            <div class="logo-layer-1"></div>
            <div class="logo-layer-2"></div>
            <div class="logo-layer-3"></div>
          </div>
          <span class="brand-title">Dooty</span>
        </div>

        <div class="right-actions">
          ${!isOnline
            ? html `<div class="offline-badge">OFFLINE (${pendingCount})</div>`
            : pendingCount > 0
                ? html `<div class="offline-badge">SYNCING ${pendingCount}</div>`
                : ''}

          <div class="pet-pill" @click=${() => appState.setActiveTab('settings')}>
            <div class="pet-avatar-circle">
              ${petAvatar ? html `<img src="${petAvatar}" alt="${petName}" />` : '🐶'}
            </div>
            <span>${petName}</span>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    state()
], DootyHeader.prototype, "unsubscribe", void 0);
DootyHeader = __decorate([
    customElement('dooty-header')
], DootyHeader);
export { DootyHeader };
//# sourceMappingURL=dooty-header.js.map