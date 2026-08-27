import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
import './dooty-dock.js';
import './dooty-home.js';
import './dooty-history.js';
import './dooty-numbers.js';
import './dooty-map.js';
import './dooty-dog.js';
import './dooty-deep.js';
import './dooty-wrapped.js';
import './dooty-settings.js';
import './dooty-invite.js';
import './dooty-importer.js';
import './dooty-sheet.js';
import './dooty-map-picker.js';
import './dooty-photo-modal.js';
import './dooty-pet-switcher.js';
import './dooty-walk.js';
import './dooty-auth.js';

@customElement('dooty-app')
export class DootyApp extends LitElement {
  @state() private activeView: string = 'today';
  @state() private toast: { title: string; sub: string } | null = null;
  @state() private burstCount: number = 0;
  private toastTimer?: any;
  private unsubscribe?: () => void;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      min-height: 100vh;
      min-height: 100dvh;
      background: var(--color-cream-light, #FFFBF2);
      box-sizing: border-box;
    }

    /* Main Container */
    .device-shell {
      width: 100%;
      max-width: 480px;
      height: 100vh;
      height: 100dvh;
      background: var(--color-cream-light, #FFFBF2);
      position: relative;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
    }

    .device-viewport {
      flex: 1;
      width: 100%;
      height: 100%;
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .device-viewport::-webkit-scrollbar {
      display: none;
    }

    /* Green Toast */
    .toast-pill {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 104px;
      width: auto;
      box-sizing: border-box;
      z-index: 120;
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px 16px;
      box-shadow: 5px 5px 0 #17140F;
      animation: tb-pop 0.32s cubic-bezier(0.2, 1.4, 0.4, 1) both;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .toast-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1px;
      padding-bottom: 3px;
      box-sizing: border-box;
      animation: tb-wob 1.1s ease-in-out infinite;
    }

    .toast-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #17140F;
      letter-spacing: -0.3px;
    }

    .toast-sub {
      font-size: 12px;
      font-weight: 700;
      color: #0A5A45;
      margin-top: 1px;
    }

    /* Confetti Burst */
    .burst-layer {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 115;
    }

    .confetti-particle {
      position: absolute;
      left: 50%;
      bottom: 60px;
      border: 2px solid #17140F;
      box-sizing: border-box;
    }

    /* Universal Top API Activity Progress Bar */
    .api-progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      z-index: 300;
      background: linear-gradient(
        90deg,
        #FF5A3C 0%,
        #FFCE2E 25%,
        #1FC99B 50%,
        #2B5BE8 75%,
        #FF5A3C 100%
      );
      background-size: 200% 100%;
      animation: api-bar-slide 0.85s linear infinite;
      box-shadow: 0 1px 4px rgba(23, 20, 15, 0.25);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .api-progress-bar.active {
      opacity: 1;
    }

    /* Floating Cloud Sync Pill */
    .api-sync-badge {
      position: absolute;
      top: 14px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 290;
      background: #FFFFFF;
      border: 2.5px solid #17140F;
      border-radius: 20px;
      padding: 5px 12px;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      box-shadow: 3px 3px 0 #17140F;
      pointer-events: none;
      animation: api-pill-pop 0.28s cubic-bezier(0.2, 1.4, 0.4, 1) both;
    }

    .api-sync-spinner {
      width: 12px;
      height: 12px;
      border: 2px solid #E2D9C8;
      border-top-color: #FF5A3C;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
      flex: none;
    }

    .api-sync-text {
      font-size: 11px;
      font-weight: 800;
      color: #17140F;
      letter-spacing: -0.2px;
      font-family: var(--font-body);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = appState.subscribe(() => {
      this.activeView = appState.activeTab;
      this.requestUpdate();
    });

    this.addEventListener('dooty-navigate', (e: any) => {
      this.activeView = e.detail;
      appState.activeTab = e.detail;
      this.requestUpdate();
    });

    this.addEventListener('dooty-toast', (e: any) => {
      this.showToast(e.detail.title, e.detail.sub);
    });

    appState.init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }

  private showToast(title: string, sub: string) {
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toast = { title, sub };
    this.burstCount++;
    this.requestUpdate();
    this.toastTimer = setTimeout(() => {
      this.toast = null;
      this.requestUpdate();
    }, 3200);
  }

  render() {
    const isAuthenticated = appState.isAuthenticated;
    const showDock = isAuthenticated && this.activeView !== 'wrapped';
    const cols = ['#FF5A3C', '#FFCE2E', '#2B5BE8', '#1FC99B', '#17140F'];

    return html`
      <!-- Outer Container -->
      <div class="device-shell">
        <!-- Universal Top API Progress Bar -->
        <div class="api-progress-bar ${appState.isApiActive ? 'active' : ''}"></div>

        <!-- Floating Cloud Sync Status Pill -->
        ${appState.isApiActive
          ? html`
              <div class="api-sync-badge">
                <div class="api-sync-spinner"></div>
                <span class="api-sync-text">
                  ${appState.currentLocale === 'ko' ? '동기화 중...' : 'Syncing...'}
                </span>
              </div>
            `
          : null}

        <!-- Viewport -->
        <div class="device-viewport">
          ${!isAuthenticated
            ? html`<dooty-auth></dooty-auth>`
            : this.activeView === 'today'
            ? html`<dooty-home></dooty-home>`
            : this.activeView === 'history'
            ? html`<dooty-history></dooty-history>`
            : this.activeView === 'analytics'
            ? html`<dooty-numbers></dooty-numbers>`
            : this.activeView === 'map'
            ? html`<dooty-map></dooty-map>`
            : this.activeView === 'dog'
            ? html`<dooty-dog></dooty-dog>`
            : this.activeView === 'deep'
            ? html`<dooty-deep></dooty-deep>`
            : this.activeView === 'wrapped'
            ? html`<dooty-wrapped></dooty-wrapped>`
            : this.activeView === 'settings'
            ? html`<dooty-settings></dooty-settings>`
            : this.activeView === 'invite'
            ? html`<dooty-invite></dooty-invite>`
            : this.activeView === 'import'
            ? html`<dooty-importer></dooty-importer>`
            : html`<dooty-home></dooty-home>`}
        </div>

        <!-- Live Walk Overlay & Floating Banner Suite -->
        ${isAuthenticated ? html`<dooty-walk></dooty-walk>` : null}

        <!-- Sticky Floating Dock (Pinned to bottom of device-shell, only when authenticated) -->
        ${showDock ? html`<dooty-dock></dooty-dock>` : null}

        <!-- Toast Notification (Pinned over dock) -->
        ${this.toast
          ? html`
              <div class="toast-pill">
                <div class="toast-icon">
                  <div style="width:7px; height:4px; border-radius:50%; background:#17140F;"></div>
                  <div style="width:11px; height:5px; border-radius:50%; background:#17140F;"></div>
                  <div style="width:15px; height:6px; border-radius:50%; background:#17140F;"></div>
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div class="toast-title">${this.toast.title}</div>
                  <div class="toast-sub">${this.toast.sub}</div>
                </div>
              </div>
            `
          : null}

        <!-- Confetti Burst Layer -->
        ${this.burstCount > 0 && this.toast
          ? html`
              <div class="burst-layer">
                ${Array.from({ length: 26 }, (_, i) => {
                  const ang = (i / 26) * Math.PI * 2;
                  const dx = Math.round(Math.cos(ang) * (120 + (i % 4) * 40));
                  const dy = Math.round(Math.sin(ang) * (120 + (i % 4) * 40) - 90);
                  const dur = 700 + (i % 5) * 130;
                  return html`
                    <div
                      class="confetti-particle"
                      style="
                        width: ${i % 3 ? 9 : 13}px;
                        height: ${i % 3 ? 9 : 13}px;
                        border-radius: ${i % 2 ? '50%' : '3px'};
                        background: ${cols[i % 5]};
                        --dx: ${dx}px;
                        --dy: ${dy}px;
                        animation: tb-burst ${dur}ms cubic-bezier(.15,.7,.35,1) forwards;
                      "
                    ></div>
                  `;
                })}
              </div>
            `
          : null}

        <!-- Sliding Log Sheet Modal (Covers viewport when opened) -->
        <dooty-sheet></dooty-sheet>

        <!-- Pet Switcher Bottom Sheet Modal -->
        <dooty-pet-switcher></dooty-pet-switcher>

        <!-- Photo & Avatar Customization Modal -->
        <dooty-photo-modal></dooty-photo-modal>
      </div>
    `;
  }
}

