var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import L from 'leaflet';
import { appState } from '../state/appState.js';
let DootyMapPicker = class DootyMapPicker extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
        this.initialLocationName = '';
        this.currentLocationName = '';
        this.isLocating = false;
        this.isGeocoding = false;
        this.hasMovedMarker = false;
        this.locationPresets = [
            'Home / Indoor',
            'Backyard',
            'Park',
            'Walk Route',
            'Vet Clinic',
            'Daycare',
        ];
        this.locationPresetsKo = [
            '우리집 / 실내',
            '마당 / 배변패드',
            '공원 / 산책로',
            '단지 내 산책',
            '동물병원',
            '데이케어',
        ];
    }
    static { this.styles = css `
    :host {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.6);
      backdrop-filter: blur(4px);
      z-index: 250;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      box-sizing: border-box;
      animation: fadeIn 0.2s ease;
    }

    .picker-window {
      position: relative;
      background: #FFFBF2;
      border: 3px solid #17140F;
      border-radius: 28px;
      width: 100%;
      max-width: 520px;
      max-height: 94vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 16px 36px rgba(23, 20, 15, 0.35);
      overflow: hidden;
      animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      box-sizing: border-box;
    }

    .picker-header {
      padding: 16px 18px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2.5px solid #17140F;
      background: #FFFBF2;
      flex: none;
    }

    .picker-title-group {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .picker-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 20px;
      color: #17140F;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .picker-sub {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
    }

    .picker-close-btn {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.08s ease, box-shadow 0.08s ease;
    }

    .picker-close-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .map-wrapper {
      position: relative;
      height: 340px;
      width: 100%;
      background: #E5EAD9;
      overflow: hidden;
      flex: none;
    }

    #leaflet-map {
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .gps-locate-fab {
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 500;
      background: #FFCE2E;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 8px 12px;
      font-family: inherit;
      font-weight: 800;
      font-size: 12.5px;
      color: #17140F;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      box-shadow: 2.5px 2.5px 0 #17140F;
      user-select: none;
      transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.08s ease;
    }

    .gps-locate-fab:hover {
      filter: brightness(1.05);
    }

    .gps-locate-fab:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .map-hint-badge {
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 500;
      background: rgba(23, 20, 15, 0.85);
      color: #FFFBF2;
      border-radius: 20px;
      padding: 5px 12px;
      font-size: 11px;
      font-weight: 700;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .picker-footer {
      padding: 14px 18px 18px;
      background: #FFFBF2;
      border-top: 2.5px solid #17140F;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
      min-height: 0;
      box-sizing: border-box;
    }

    .address-card {
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 16px;
      padding: 10px 12px;
      box-shadow: 2px 2px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .address-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .address-label {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .coords-tag {
      font-family: monospace;
      font-size: 11px;
      font-weight: 700;
      color: #2B5BE8;
      background: #E8EEFF;
      padding: 2px 6px;
      border-radius: 6px;
      border: 1px solid #17140F;
    }

    .location-name-input {
      border: none;
      background: transparent;
      font-size: 14px;
      font-family: inherit;
      font-weight: 800;
      color: #17140F;
      outline: none;
      padding: 2px 0 0;
      width: 100%;
    }

    .location-name-input::placeholder {
      color: #9A9080;
      font-weight: 600;
    }

    /* Quick Preset Chips */
    .presets-row {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-bottom: 2px;
      scrollbar-width: none;
    }

    .presets-row::-webkit-scrollbar {
      display: none;
    }

    .preset-pill {
      background: #F3EFE6;
      border: 2px solid #17140F;
      border-radius: 10px;
      padding: 5px 9px;
      font-size: 11.5px;
      font-weight: 700;
      color: #17140F;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 0 #17140F;
      white-space: nowrap;
      user-select: none;
      transition: all 0.08s ease;
    }

    .preset-pill.active {
      background: #FFCE2E;
      transform: translateY(1px);
      box-shadow: 0.5px 0.5px 0 #17140F;
    }

    .action-buttons-row {
      display: flex;
      gap: 10px;
      margin-top: 2px;
    }

    .btn-cancel {
      flex: 1;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 16px;
      padding: 12px;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: all 0.08s ease;
    }

    .btn-save {
      flex: 2;
      background: #FF5A3C;
      border: 2.5px solid #17140F;
      border-radius: 16px;
      padding: 12px;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: all 0.08s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .btn-save:hover {
      background: #FF7659;
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140F;
    }

    .btn-save:active, .btn-cancel:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes popIn {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `; }
    updated(changedProps) {
        if (changedProps.has('open')) {
            if (this.open) {
                this.currentLat = this.initialLat;
                this.currentLng = this.initialLng;
                this.currentLocationName = this.initialLocationName || '';
                this.hasMovedMarker = false;
                // Leaflet needs DOM to be rendered before mounting map
                setTimeout(() => {
                    this.initOrUpdateMap();
                }, 80);
            }
            else {
                this.destroyMap();
            }
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.destroyMap();
    }
    destroyMap() {
        if (this.map) {
            this.map.remove();
            this.map = undefined;
            this.marker = undefined;
        }
    }
    initOrUpdateMap() {
        const mapContainer = this.renderRoot?.querySelector('#leaflet-map');
        if (!mapContainer)
            return;
        if (this.map) {
            this.map.invalidateSize();
            return;
        }
        // Default center (Seoul or Sydney or existing lat/lng)
        const defaultLat = this.currentLat ?? 37.5665;
        const defaultLng = this.currentLng ?? 126.9780;
        const zoomLevel = (this.currentLat && this.currentLng) ? 16 : 14;
        this.map = L.map(mapContainer, {
            zoomControl: false,
            attributionControl: false,
        }).setView([defaultLat, defaultLng], zoomLevel);
        // Warm CartoDB Voyager tiles matching the neo-brutalist cream palette
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
            maxZoom: 19,
            subdomains: 'abcd',
            updateWhenIdle: true,
            updateWhenZooming: false,
            keepBuffer: 3,
        }).addTo(this.map);
        // Add minimal zoom controls on bottom right
        L.control.zoom({ position: 'bottomright' }).addTo(this.map);
        // Create custom Neo-brutalist marker pin
        const customPinHtml = `
      <div style="
        position: relative;
        transform: translate(-50%, -100%);
        cursor: grab;
      ">
        <div style="
          background: #FF5A3C;
          color: #FFF;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 16px;
          border: 3px solid #17140F;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 3px 3px 0 #17140F;
        ">
          <span style="transform: rotate(45deg); display: inline-block;">📍</span>
        </div>
      </div>
    `;
        const customIcon = L.divIcon({
            className: 'dooty-custom-leaflet-pin',
            html: customPinHtml,
            iconSize: [0, 0],
        });
        if (this.currentLat && this.currentLng) {
            this.marker = L.marker([this.currentLat, this.currentLng], {
                icon: customIcon,
                draggable: true,
            }).addTo(this.map);
        }
        else {
            // If no initial coordinates, place at map center and prompt GPS
            this.marker = L.marker([defaultLat, defaultLng], {
                icon: customIcon,
                draggable: true,
            }).addTo(this.map);
            this.fetchUserGPS(false);
        }
        // Handle marker drag
        this.marker.on('dragend', (e) => {
            const pos = e.target.getLatLng();
            this.onPositionSelected(pos.lat, pos.lng);
        });
        // Handle map tap/click to place marker
        this.map.on('click', (e) => {
            const { lat, lng } = e.latlng;
            if (this.marker) {
                this.marker.setLatLng([lat, lng]);
            }
            this.onPositionSelected(lat, lng);
        });
        setTimeout(() => {
            this.map?.invalidateSize();
        }, 150);
    }
    onPositionSelected(lat, lng) {
        this.currentLat = lat;
        this.currentLng = lng;
        this.hasMovedMarker = true;
        this.requestUpdate();
        // Trigger reverse geocoding with debounce
        if (this.geocodeTimeout) {
            window.clearTimeout(this.geocodeTimeout);
        }
        this.geocodeTimeout = window.setTimeout(() => {
            this.tryReverseGeocode(lat, lng);
        }, 400);
    }
    fetchUserGPS(centerImmediately = true) {
        if (typeof navigator === 'undefined' || !navigator.geolocation)
            return;
        this.isLocating = true;
        this.requestUpdate();
        navigator.geolocation.getCurrentPosition((pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            this.isLocating = false;
            this.currentLat = lat;
            this.currentLng = lng;
            if (this.map) {
                this.map.flyTo([lat, lng], 17, { animate: true, duration: 1 });
                if (this.marker) {
                    this.marker.setLatLng([lat, lng]);
                }
            }
            if (!this.currentLocationName || !this.hasMovedMarker) {
                this.tryReverseGeocode(lat, lng);
            }
            this.requestUpdate();
        }, (err) => {
            console.warn('Geolocation error in picker:', err);
            this.isLocating = false;
            this.requestUpdate();
        }, { enableHighAccuracy: true, timeout: 8000 });
    }
    async tryReverseGeocode(lat, lng) {
        this.isGeocoding = true;
        this.requestUpdate();
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`, {
                headers: {
                    Accept: 'application/json',
                },
            });
            if (res.ok) {
                const data = await res.json();
                const road = data.address?.road ||
                    data.address?.pedestrian ||
                    data.address?.suburb ||
                    data.address?.neighbourhood;
                const city = data.address?.city ||
                    data.address?.town ||
                    data.address?.village ||
                    data.address?.county;
                if (road && city) {
                    this.currentLocationName = `${road}, ${city}`;
                }
                else if (road) {
                    this.currentLocationName = road;
                }
                else if (data.display_name) {
                    const parts = data.display_name.split(',');
                    this.currentLocationName = parts.slice(0, 2).join(',').trim();
                }
            }
        }
        catch {
            // Keep coordinate fallback
        }
        finally {
            this.isGeocoding = false;
            this.requestUpdate();
        }
    }
    selectPreset(preset) {
        this.currentLocationName = preset;
        this.requestUpdate();
    }
    handleSaveSpot() {
        if (this.currentLat === undefined || this.currentLng === undefined) {
            if (this.map) {
                const center = this.map.getCenter();
                this.currentLat = center.lat;
                this.currentLng = center.lng;
            }
        }
        this.dispatchEvent(new CustomEvent('spot-selected', {
            bubbles: true,
            composed: true,
            detail: {
                lat: this.currentLat,
                lng: this.currentLng,
                locationName: this.currentLocationName,
            },
        }));
        this.handleClose();
    }
    handleClose() {
        this.dispatchEvent(new CustomEvent('close', {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        if (!this.open)
            return null;
        const isKo = appState.currentLocale === 'ko';
        const presets = isKo ? this.locationPresetsKo : this.locationPresets;
        return html `
      <!-- Inject Leaflet core CSS into Shadow DOM -->
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />

      <div class="modal-backdrop" @click=${() => this.handleClose()}>
        <div class="picker-window" @click=${(e) => e.stopPropagation()}>
          <!-- Header -->
          <div class="picker-header">
            <div class="picker-title-group">
              <div class="picker-title">
                <span>🗺️</span>
                <span>${isKo ? '지도에서 위치 찾기' : 'Find Spot on Map'}</span>
              </div>
              <div class="picker-sub">
                ${isKo
            ? '지도를 탭하거나 핀을 드래그하여 정확한 위치를 지정하세요.'
            : 'Tap the map or drag the pin to pinpoint the exact location.'}
              </div>
            </div>
            <button class="picker-close-btn" @click=${() => this.handleClose()}>✕</button>
          </div>

          <!-- Interactive Leaflet Map Container -->
          <div class="map-wrapper">
            <div id="leaflet-map"></div>

            <!-- Locate Me Floating Button -->
            <button
              class="gps-locate-fab"
              @click=${() => this.fetchUserGPS(true)}
              ?disabled=${this.isLocating}
            >
              <span>${this.isLocating ? '⏳' : '🎯'}</span>
              <span>${this.isLocating ? (isKo ? '수신 중...' : 'Locating...') : (isKo ? '내 위치' : 'My GPS')}</span>
            </button>

            <div class="map-hint-badge">
              ${isKo ? '👇 지도를 탭하여 핀 이동' : '👇 Tap anywhere to place pin'}
            </div>
          </div>

          <!-- Bottom Footer Details -->
          <div class="picker-footer">
            <!-- Address / Spot Name Box -->
            <div class="address-card">
              <div class="address-header-row">
                <span class="address-label">${isKo ? '선택된 위치명' : 'Selected Spot'}</span>
                ${this.currentLat && this.currentLng
            ? html `
                      <span class="coords-tag">
                        ${this.currentLat.toFixed(4)}, ${this.currentLng.toFixed(4)}
                      </span>
                    `
            : null}
              </div>
              <input
                type="text"
                class="location-name-input"
                placeholder="${this.isGeocoding
            ? (isKo ? '주소 확인 중...' : 'Resolving address...')
            : (isKo ? '장소 이름을 입력하거나 칩을 선택하세요' : 'Enter place name or pick preset')}"
                .value=${this.currentLocationName}
                @input=${(e) => (this.currentLocationName = e.target.value)}
              />
            </div>

            <!-- Quick Preset Chips -->
            <div class="presets-row">
              ${presets.map((preset) => html `
                  <div
                    class="preset-pill ${this.currentLocationName === preset ? 'active' : ''}"
                    @click=${() => this.selectPreset(preset)}
                  >
                    ${preset}
                  </div>
                `)}
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons-row">
              <button class="btn-cancel" @click=${() => this.handleClose()}>
                ${isKo ? '취소' : 'Cancel'}
              </button>
              <button class="btn-save" @click=${() => this.handleSaveSpot()}>
                <span>📍</span>
                <span>${isKo ? '이 위치로 저장' : 'Save this Spot'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], DootyMapPicker.prototype, "open", void 0);
__decorate([
    property({ type: Number })
], DootyMapPicker.prototype, "initialLat", void 0);
__decorate([
    property({ type: Number })
], DootyMapPicker.prototype, "initialLng", void 0);
__decorate([
    property({ type: String })
], DootyMapPicker.prototype, "initialLocationName", void 0);
__decorate([
    state()
], DootyMapPicker.prototype, "currentLat", void 0);
__decorate([
    state()
], DootyMapPicker.prototype, "currentLng", void 0);
__decorate([
    state()
], DootyMapPicker.prototype, "currentLocationName", void 0);
__decorate([
    state()
], DootyMapPicker.prototype, "isLocating", void 0);
__decorate([
    state()
], DootyMapPicker.prototype, "isGeocoding", void 0);
__decorate([
    state()
], DootyMapPicker.prototype, "hasMovedMarker", void 0);
DootyMapPicker = __decorate([
    customElement('dooty-map-picker')
], DootyMapPicker);
export { DootyMapPicker };
//# sourceMappingURL=dooty-map-picker.js.map