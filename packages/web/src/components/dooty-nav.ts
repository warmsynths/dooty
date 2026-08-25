import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-nav')
export class DootyNav extends LitElement {
  private unsubscribe?: () => void;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      background: #FFFBF2;
      border-top: var(--border-thick);
      box-shadow: 0 -4px 0 var(--color-ink);
      position: sticky;
      bottom: 0;
      z-index: 100;
      padding-bottom: env(safe-area-inset-bottom, 8px);
    }

    .nav-inner {
      max-width: 480px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 8px 10px;
    }

    .nav-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      padding: 6px 12px;
      border-radius: 14px;
      cursor: pointer;
      color: var(--color-muted);
      font-weight: 700;
      font-size: 11px;
      transition: all 0.15s ease;
    }

    .nav-btn .icon {
      font-size: 20px;
      line-height: 1;
    }

    .nav-btn.active {
      background: var(--color-yellow);
      color: var(--color-ink);
      border: var(--border-thick);
      box-shadow: var(--shadow-sm);
      transform: translateY(-2px);
    }

    .nav-btn:active {
      transform: scale(0.92);
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
    const t = appState.t.nav;
    const active = appState.activeTab;

    return html`
      <div class="nav-inner">
        <button
          class="nav-btn ${active === 'today' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('today')}
        >
          <span class="icon">📅</span>
          <span>${t.today}</span>
        </button>

        <button
          class="nav-btn ${active === 'map' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('map')}
        >
          <span class="icon">🗺️</span>
          <span>${t.map}</span>
        </button>

        <button
          class="nav-btn ${active === 'analytics' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('analytics')}
        >
          <span class="icon">📊</span>
          <span>${t.analytics}</span>
        </button>

        <button
          class="nav-btn ${active === 'import' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('import')}
        >
          <span class="icon">📥</span>
          <span>${t.import}</span>
        </button>

        <button
          class="nav-btn ${active === 'settings' ? 'active' : ''}"
          @click=${() => appState.setActiveTab('settings')}
        >
          <span class="icon">⚙️</span>
          <span>${t.settings}</span>
        </button>
      </div>
    `;
  }
}
