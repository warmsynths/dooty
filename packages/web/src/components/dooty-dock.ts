import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-dock')
export class DootyDock extends LitElement {
  private unsubscribe?: () => void;

  static styles = css`
    :host {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 20px;
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
      z-index: 90;
      pointer-events: none;
    }

    .dock-container {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 26px;
      padding: 8px;
      box-shadow: 5px 5px 0 #17140F;
    }

    .dock-tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      border-radius: 19px;
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 11.5px;
      font-weight: 800;
      color: #17140F;
      border: 2.5px solid transparent;
      background: #FFF;
      transition: all 0.15s ease;
      user-select: none;
    }

    .dock-tab.active {
      background: #FFCE2E;
      border-color: #17140F;
    }

    .dock-tab:active {
      transform: scale(0.95);
    }

    .fab-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      flex: none;
      border: 3px solid #17140F;
      background: #FF5A3C;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding-bottom: 4px;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.1s ease;
    }

    .fab-btn:hover {
      background: #FF7659;
    }

    .fab-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .fab-l1 { width: 10px; height: 5px; border-radius: 50%; background: #FFF; }
    .fab-l2 { width: 16px; height: 6px; border-radius: 50%; background: #FFF; }
    .fab-l3 { width: 22px; height: 7px; border-radius: 50%; background: #FFF; }
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
    const petName = appState.currentPet?.name || (isKo ? '설정' : 'Settings');
    const active = appState.activeTab;

    return html`
      <div class="dock-container">
        <div
          class="dock-tab ${active === 'today' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('today')}
        >
          ${isKo ? '오늘' : 'Today'}
        </div>

        <div
          class="dock-tab ${active === 'analytics' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('analytics')}
        >
          ${isKo ? '숫자들' : 'Numbers'}
        </div>

        <div
          class="dock-tab ${active === 'map' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('map')}
        >
          ${isKo ? '지도' : 'Map'}
        </div>

        <div
          class="dock-tab ${active === 'settings' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('settings')}
        >
          ${petName}
        </div>

        <div class="fab-btn" @click=${() => appState.openLogger()}>
          <div class="fab-l1"></div>
          <div class="fab-l2"></div>
          <div class="fab-l3"></div>
        </div>
      </div>
    `;
  }
}
