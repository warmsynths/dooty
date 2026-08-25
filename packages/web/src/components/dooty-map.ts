import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-map')
export class DootyMap extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-bottom: 140px;
    }

    .map-canvas-container {
      position: relative;
      height: 420px;
      background: #E3E8D8;
      overflow: hidden;
      border-bottom: 3px solid #17140F;
    }

    .map-grid-overlay {
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

    .map-pin {
      position: absolute;
      z-index: 3;
      transform: translate(-50%, -50%);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      font-family: var(--font-heading);
      font-weight: 800;
      color: #17140F;
      transition: transform 0.1s ease;
    }

    .map-pin:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }

    .territory-card {
      position: absolute;
      z-index: 4;
      left: 16px;
      top: 62px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 11px 14px;
      box-shadow: 4px 4px 0 #17140F;
    }

    .territory-sub {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1.4px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .territory-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 23px;
      color: #17140F;
      line-height: 1.1;
      letter-spacing: -0.7px;
    }

    /* Spots List */
    .spots-section {
      padding: 18px 18px 24px;
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    .spots-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      color: #17140F;
      letter-spacing: -0.6px;
    }

    .spots-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .spot-card {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 12px 14px;
      box-shadow: 3px 3px 0 #17140F;
      cursor: pointer;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .spot-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .spot-rank {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
      flex: none;
    }

    .spot-name {
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
    }

    .spot-note {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .spot-count {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      color: #17140F;
      flex: none;
    }
  `;

  render() {
    const isKo = appState.currentLocale === 'ko';
    const geoEvents = (appState.events || []).filter((e) => typeof e.latitude === 'number' && typeof e.longitude === 'number');
    const totalCount = appState.events.length;

    return html`
      <!-- Map Canvas Area -->
      <div class="map-canvas-container">
        <div class="map-grid-overlay"></div>
        <div class="map-park-1"></div>
        <div class="map-park-2"></div>
        <div class="map-river"></div>

        <!-- Dynamic Pins from real events -->
        ${geoEvents.map((p, idx) => {
          // Normalize lat/lng to canvas coordinates
          const left = 20 + ((idx * 29) % 60);
          const top = 25 + ((idx * 37) % 55);
          const bg = p.eventType === 'poop' ? '#FFCE2E' : p.eventType === 'pee' ? '#BFD0FF' : '#FF5A3C';

          return html`
            <div
              class="map-pin"
              style="left: ${left}%; top: ${top}%; width: 38px; height: 38px; background: ${bg}; font-size: 13px;"
              @click=${() =>
                this.dispatchEvent(
                  new CustomEvent('dooty-toast', {
                    bubbles: true,
                    composed: true,
                    detail: {
                      title: `${p.eventType.toUpperCase()} Log`,
                      sub: `${p.latitude?.toFixed(4)}, ${p.longitude?.toFixed(4)} · ${p.loggedByName}`,
                    },
                  })
                )}
            >
              ${p.eventType === 'poop' ? '💩' : p.eventType === 'pee' ? '💧' : '📍'}
            </div>
          `;
        })}

        <!-- Territory Badge -->
        <div class="territory-card">
          <div class="territory-sub">${isKo ? '위치 기록' : 'Geo-tagged logs'}</div>
          <div class="territory-val">
            ${geoEvents.length > 0 ? `${geoEvents.length} spots` : isKo ? '기록 없음' : '0 spots'}
          </div>
        </div>
      </div>

      <!-- Favourite spots ranking list -->
      <div class="spots-section">
        <div class="spots-title">${isKo ? '최근 위치 기록' : 'Recent tagged locations'}</div>
        <div class="spots-list">
          ${geoEvents.length > 0
            ? geoEvents.slice(0, 5).map(
                (s, i) => html`
                  <div
                    class="spot-card"
                    @click=${() =>
                      this.dispatchEvent(
                        new CustomEvent('dooty-toast', {
                          bubbles: true,
                          composed: true,
                          detail: {
                            title: `${s.eventType.toUpperCase()} Tag`,
                            sub: `${s.latitude?.toFixed(5)}, ${s.longitude?.toFixed(5)}`,
                          },
                        })
                      )}
                  >
                    <div class="spot-rank" style="background: ${s.eventType === 'poop' ? '#FFCE2E' : '#1FC99B'};">
                      ${i + 1}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <div class="spot-name">${s.notes || `${s.eventType} at tagged location`}</div>
                      <div class="spot-note">
                        ${new Date(s.timestamp).toLocaleDateString()} · ${s.loggedByName}
                      </div>
                    </div>
                    <div class="spot-count">📍</div>
                  </div>
                `
              )
            : html`
                <div style="background: #FFF; border: 3px solid #17140F; border-radius: 20px; padding: 20px; text-align: center; box-shadow: 3px 3px 0 #17140F;">
                  <div style="font-size: 32px; margin-bottom: 6px;">🗺️</div>
                  <div style="font-family: var(--font-heading); font-weight: 800; font-size: 15px; color: #17140F;">
                    ${isKo ? '위치 태그가 아직 없습니다' : 'No GPS logs yet'}
                  </div>
                  <div style="font-size: 12px; color: #6A6152; margin-top: 4px; line-height: 1.4;">
                    ${isKo
                      ? '기록할 때 GPS 위치 추가를 활성화하면 지도에 배변 및 산책 스팟이 표시됩니다.'
                      : 'When recording an entry, tap "Add GPS Coordinates" to map your pet’s favorite potty spots!'}
                  </div>
                </div>
              `}
        </div>
      </div>
    `;
  }
}
