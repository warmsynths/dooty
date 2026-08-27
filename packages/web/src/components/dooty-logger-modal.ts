import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
import { EVENT_METADATA, EventType, ALL_EVENT_TYPES } from '@dooty/shared';

@customElement('dooty-logger-modal')
export class DootyLoggerModal extends LitElement {
  @state() private notes: string = '';
  @state() private customTime: string = '';
  @state() private lat?: number;
  @state() private lng?: number;
  @state() private isLocating: boolean = false;
  @state() private isSaving: boolean = false;

  static styles = css`
    :host {
      display: block;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.6);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      animation: fadeIn 0.2s ease;
    }

    .modal-sheet {
      background: var(--color-cream-light);
      border-top: var(--border-thick);
      border-left: var(--border-thick);
      border-right: var(--border-thick);
      border-top-left-radius: 28px;
      border-top-right-radius: 28px;
      width: 100%;
      max-width: 480px;
      padding: 24px 20px 32px;
      box-shadow: 0 -8px 0 var(--color-ink);
      animation: tb-sheet 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-sizing: border-box;
    }

    .sheet-handle {
      width: 48px;
      height: 6px;
      background: var(--color-ink);
      border-radius: 6px;
      align-self: center;
      margin-bottom: 4px;
    }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .event-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border: var(--border-thick);
      border-radius: 16px;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      box-shadow: var(--shadow-sm);
    }

    .type-selector-strip {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 6px;
      scrollbar-width: none;
    }

    .type-pill {
      border: var(--border-thick);
      border-radius: 14px;
      padding: 6px 10px;
      font-size: 13px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      box-shadow: var(--shadow-sm);
    }

    .type-pill.active {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .field-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .field-label {
      font-size: 12px;
      font-weight: 800;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .dooty-input, .dooty-textarea {
      border: var(--border-thick);
      border-radius: 14px;
      padding: 10px 14px;
      font-size: 14px;
      background: #fff;
      box-shadow: var(--shadow-sm);
    }

    .dooty-textarea {
      min-height: 70px;
      resize: vertical;
    }

    .location-card {
      background: #fff;
      border: var(--border-thick);
      border-radius: 14px;
      padding: 10px 14px;
      box-shadow: var(--shadow-sm);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .actions-row {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }

    .save-btn {
      flex: 2;
      background: var(--color-coral);
      color: #fff;
    }

    .cancel-btn {
      flex: 1;
      background: #fff;
      color: var(--color-ink);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  private async fetchCurrentLocation() {
    if (!navigator.geolocation) return;
    this.isLocating = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
        this.isLocating = false;
      },
      (err) => {
        console.warn('Geolocation failed:', err);
        this.isLocating = false;
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }

  private async handleSave() {
    if (this.isSaving) return;
    this.isSaving = true;
    try {
      const type = appState.loggerEventType || 'poop';
      if (appState.editingEvent) {
        await appState.updateEvent(
          appState.editingEvent.id,
          type,
          this.notes,
          appState.editingEvent.metadata,
          this.lat,
          this.lng,
          appState.editingEvent.timestamp
        );
      } else {
        await appState.logEvent(type, this.notes, undefined, this.lat, this.lng);
      }
      appState.closeLogger();
    } finally {
      this.isSaving = false;
      this.notes = '';
      this.lat = undefined;
      this.lng = undefined;
    }
  }

  render() {
    if (!appState.loggerModalOpen) return null;

    const t = appState.t.logger;
    const currentType = appState.loggerEventType || 'poop';
    const meta = EVENT_METADATA[currentType] || EVENT_METADATA.poop;
    const isKorean = appState.currentLocale === 'ko';
    const eventName = isKorean ? meta.labelKo : meta.labelEn;

    return html`
      <div class="backdrop" @click=${() => appState.closeLogger()}>
        <div class="modal-sheet" @click=${(e: Event) => e.stopPropagation()}>
          <div class="sheet-handle"></div>

          <div class="header-row">
            <div
              class="event-badge"
              style="background:${meta.bgColor}; color:${meta.textColor}"
            >
              <span>${meta.emoji}</span>
              <span>${eventName}</span>
            </div>
            <button
              class="dooty-btn"
              style="padding: 4px 10px; font-size: 12px; background: #fff;"
              @click=${() => appState.closeLogger()}
            >
              ✕
            </button>
          </div>

          <!-- Quick switch event type strip -->
          <div class="type-selector-strip">
            ${ALL_EVENT_TYPES.map((type) => {
              const m = EVENT_METADATA[type];
              const isActive = type === appState.loggerEventType;
              return html`
                <button
                  class="type-pill ${isActive ? 'active' : ''}"
                  style="${isActive ? `background:${m.bgColor}; color:${m.textColor}` : ''}"
                  @click=${() => (appState.loggerEventType = type)}
                >
                  <span>${m.emoji}</span>
                  <span>${isKorean ? m.labelKo : m.labelEn}</span>
                </button>
              `;
            })}
          </div>

          <!-- Notes -->
          <div class="field-group">
            <label class="field-label">Notes</label>
            <textarea
              class="dooty-textarea"
              placeholder=${t.notesPlaceholder}
              .value=${this.notes}
              @input=${(e: any) => (this.notes = e.target.value)}
            ></textarea>
          </div>

          <!-- Location -->
          <div class="field-group">
            <label class="field-label">${t.locationTag}</label>
            <div class="location-card">
              <span style="font-size: 13px; font-weight: 700;">
                ${this.lat && this.lng
                  ? `📍 ${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`
                  : 'No location attached'}
              </span>
              <button
                class="dooty-btn"
                style="padding: 4px 10px; font-size: 12px; background: var(--color-yellow);"
                @click=${() => this.fetchCurrentLocation()}
              >
                ${this.isLocating ? 'Locating...' : '📍 Tag GPS'}
              </button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="actions-row">
            <button
              class="dooty-btn cancel-btn"
              @click=${() => appState.closeLogger()}
            >
              ${t.cancel}
            </button>
            <button
              class="dooty-btn save-btn"
              @click=${() => this.handleSave()}
              ?disabled=${this.isSaving}
            >
              ${this.isSaving ? t.saving : `${t.save} ${meta.emoji}`}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
