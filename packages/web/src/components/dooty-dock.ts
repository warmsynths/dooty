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
      bottom: 24px;
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
      z-index: 70;
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
      box-sizing: border-box;
    }

    .dock-tab {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      min-height: 50px;
      border-radius: 19px;
      cursor: pointer;
      background: #FFF;
      border: 2.5px solid transparent;
      transition: all 0.15s ease;
      user-select: none;
      box-sizing: border-box;
    }

    .dock-tab:hover {
      background: #FFFDF7;
    }

    .dock-tab.active {
      background: #FFCE2E;
      border: 2.5px solid #17140F;
    }

    .dock-tab:active {
      transform: translateY(1px);
    }

    .dock-label {
      font-size: 9.5px;
      font-weight: 800;
      color: #17140F;
      letter-spacing: 0.2px;
      line-height: 1;
      font-family: var(--font-body);
    }

    :host-context(body.lang-ko) .dock-label {
      font-size: 10px;
      letter-spacing: 0;
    }

    /* Today Icon */
    .icon-today {
      width: 17px;
      height: 16px;
      border: 2.5px solid #17140F;
      border-radius: 5px;
      box-sizing: border-box;
      background: #FFF;
      position: relative;
      overflow: hidden;
      flex: none;
    }

    .icon-today-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4.5px;
      background: #17140F;
    }

    /* Numbers Icon */
    .icon-numbers {
      display: flex;
      align-items: flex-end;
      gap: 2.5px;
      height: 16px;
      flex: none;
    }

    .bar {
      width: 4px;
      background: #17140F;
      border-radius: 2px;
    }

    .bar-1 { height: 8px; }
    .bar-2 { height: 16px; }
    .bar-3 { height: 11px; }

    /* Map Icon */
    .icon-map-wrap {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
    }

    .icon-map-pin {
      width: 14px;
      height: 14px;
      border: 2.5px solid #17140F;
      background: #FFF;
      border-radius: 50% 50% 50% 2px;
      transform: rotate(-45deg);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-map-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #17140F;
    }

    /* Dog Icon */
    .icon-dog {
      width: 18px;
      height: 16px;
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex: none;
    }

    .icon-dog-ear-left {
      position: absolute;
      left: 0;
      top: 0;
      width: 6.5px;
      height: 9px;
      border: 2.5px solid #17140F;
      border-radius: 60% 40% 45% 45%;
      background: #FFF;
      box-sizing: border-box;
    }

    .icon-dog-ear-right {
      position: absolute;
      right: 0;
      top: 0;
      width: 6.5px;
      height: 9px;
      border: 2.5px solid #17140F;
      border-radius: 40% 60% 45% 45%;
      background: #FFF;
      box-sizing: border-box;
    }

    .icon-dog-muzzle {
      position: relative;
      width: 12px;
      height: 11px;
      border: 2.5px solid #17140F;
      border-radius: 45% 45% 50% 50%;
      background: #FFF;
      box-sizing: border-box;
    }

    /* Central Elevated Log FAB */
    .fab-btn {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      flex: none;
      align-self: flex-start;
      margin: -20px 3px 0;
      border: 3px solid #17140F;
      background: #FF5A3C;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding-bottom: 5px;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: 3px 4px 0 #17140F;
      transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.1s ease;
      user-select: none;
    }

    .fab-btn:hover {
      background: #FF7659;
    }

    .fab-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 2px 0 #17140F;
    }

    .fab-l1 {
      width: 11px;
      height: 5px;
      border-radius: 50%;
      background: #FFF;
    }

    .fab-l2 {
      width: 17px;
      height: 6px;
      border-radius: 50%;
      background: #FFF;
    }

    .fab-l3 {
      width: 23px;
      height: 7px;
      border-radius: 50%;
      background: #FFF;
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
    const petName = appState.currentPet?.name || (isKo ? '반려견' : 'Pet');
    const active = appState.activeTab;

    return html`
      <div class="dock-container">
        <!-- 1. Today Tab -->
        <div
          class="dock-tab ${active === 'today' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('today')}
        >
          <div class="icon-today">
            <div class="icon-today-bar"></div>
          </div>
          <div class="dock-label">${isKo ? '오늘' : 'Today'}</div>
        </div>

        <!-- 2. Numbers Tab -->
        <div
          class="dock-tab ${active === 'analytics' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('analytics')}
        >
          <div class="icon-numbers">
            <div class="bar bar-1"></div>
            <div class="bar bar-2"></div>
            <div class="bar bar-3"></div>
          </div>
          <div class="dock-label">${isKo ? '숫자' : 'Numbers'}</div>
        </div>

        <!-- 3. Center Elevated Log FAB Button -->
        <div
          class="fab-btn"
          @click=${() => appState.openLogger()}
          title=${isKo ? '기록하기' : 'Log event'}
        >
          <div class="fab-l1"></div>
          <div class="fab-l2"></div>
          <div class="fab-l3"></div>
        </div>

        <!-- 4. Map Tab -->
        <div
          class="dock-tab ${active === 'map' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('map')}
        >
          <div class="icon-map-wrap">
            <div class="icon-map-pin">
              <div class="icon-map-dot"></div>
            </div>
          </div>
          <div class="dock-label">${isKo ? '지도' : 'Map'}</div>
        </div>

        <!-- 5. Dog Tab -->
        <div
          class="dock-tab ${active === 'dog' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('dog')}
        >
          <div class="icon-dog">
            <div class="icon-dog-ear-left"></div>
            <div class="icon-dog-ear-right"></div>
            <div class="icon-dog-muzzle"></div>
          </div>
          <div class="dock-label">${petName}</div>
        </div>
      </div>
    `;
  }
}
