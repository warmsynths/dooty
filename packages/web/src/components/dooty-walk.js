var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import L from 'leaflet';
import { appState } from '../state/appState.js';
let DootyWalk = class DootyWalk extends LitElement {
    constructor() {
        super(...arguments);
        this.notes = '';
        this.photoUrl = '';
        this.isSaving = false;
    }
    static { this.styles = css `
    :host {
      display: contents;
    }

    /* Core Leaflet Shadow DOM Structural Rules */
    .leaflet-pane,
    .leaflet-tile,
    .leaflet-marker-icon,
    .leaflet-marker-shadow,
    .leaflet-tile-container,
    .leaflet-pane > svg,
    .leaflet-pane > canvas,
    .leaflet-zoom-box,
    .leaflet-image-layer,
    .leaflet-layer {
      position: absolute;
      left: 0;
      top: 0;
    }
    .leaflet-container {
      overflow: hidden;
      position: relative;
      outline: 0;
      -webkit-tap-highlight-color: transparent;
      width: 100%;
      height: 100%;
    }
    .leaflet-tile {
      filter: inherit;
      visibility: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    .leaflet-tile-loaded {
      visibility: inherit;
    }
    .leaflet-tile-container {
      pointer-events: none;
    }
    .leaflet-marker-icon,
    .leaflet-marker-shadow {
      display: block;
    }
    .leaflet-container .leaflet-overlay-pane svg {
      max-width: none !important;
      max-height: none !important;
    }
    .leaflet-container .leaflet-marker-pane img,
    .leaflet-container .leaflet-shadow-pane img,
    .leaflet-container .leaflet-tile-pane img,
    .leaflet-container img.leaflet-image-layer,
    .leaflet-container .leaflet-tile {
      max-width: none !important;
      max-height: none !important;
      width: 256px;
      height: 256px;
      padding: 0;
    }
    .leaflet-map-pane svg {
      position: absolute;
      left: 0;
      top: 0;
    }
    .leaflet-control {
      position: relative;
      z-index: 800;
      pointer-events: visiblePainted;
      pointer-events: auto;
    }
    .leaflet-top,
    .leaflet-bottom {
      position: absolute;
      z-index: 1000;
      pointer-events: none;
    }
    .leaflet-top {
      top: 0;
    }
    .leaflet-right {
      right: 0;
    }
    .leaflet-bottom {
      bottom: 0;
    }
    .leaflet-left {
      left: 0;
    }

    /* Floating Banner above dock */
    .walk-banner {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 104px;
      z-index: 75;
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 10px 14px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 11px;
      cursor: pointer;
      box-sizing: border-box;
      animation: tb-screen 0.2s ease both;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .walk-banner:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .ping-wrap {
      position: relative;
      width: 13px;
      height: 13px;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ping-circle {
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #17140F;
      animation: tb-ping 1.5s ease-out infinite;
    }

    .ping-dot {
      position: relative;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #17140F;
    }

    .banner-label {
      font-size: 10.5px;
      font-weight: 800;
      color: #0A5A45;
      letter-spacing: 1.2px;
      flex: none;
    }

    .banner-time {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 20px;
      color: #17140F;
      letter-spacing: -0.6px;
      font-variant-numeric: tabular-nums;
    }

    .banner-divider {
      width: 2.5px;
      height: 18px;
      background: #0A5A45;
      opacity: 0.35;
      border-radius: 2px;
      flex: none;
    }

    .banner-km {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
      flex: none;
    }

    /* Fullscreen Live View */
    .live-fullscreen {
      position: fixed;
      inset: 0;
      z-index: 140;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .live-map-area {
      position: relative;
      flex: 1;
      min-height: 0;
      background: #E3E8D8;
      overflow: hidden;
      border-bottom: 3px solid #17140F;
    }

    #live-leaflet-map {
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #E5EAD9;
    }

    .minimize-btn {
      position: absolute;
      z-index: 500;
      left: 16px;
      top: 58px;
      width: 40px;
      height: 40px;
      border-radius: 14px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .minimize-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .live-status-pill {
      position: absolute;
      z-index: 500;
      right: 16px;
      top: 58px;
      background: #17140F;
      border-radius: 13px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 7px;
      box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
    }

    .recenter-fab {
      position: absolute;
      z-index: 500;
      right: 16px;
      bottom: 16px;
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
      transition: transform 0.08s ease, box-shadow 0.08s ease;
    }

    .recenter-fab:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .live-controls-panel {
      flex: none;
      padding: 16px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      background: #FFFBF2;
      box-sizing: border-box;
    }

    .stat-row {
      display: flex;
      align-items: flex-end;
      gap: 14px;
    }

    .main-timer {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 54px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -2.6px;
      font-variant-numeric: tabular-nums;
      margin-top: 2px;
    }

    .btn-row {
      display: flex;
      gap: 10px;
    }

    .pause-btn {
      width: 112px;
      flex: none;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      box-sizing: border-box;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .pause-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .end-btn {
      flex: 1;
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 18px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      box-sizing: border-box;
      user-select: none;
      transition: background 0.15s ease, transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .end-btn:hover {
      background: #FF7659;
    }

    .end-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .end-btn.is-loading {
      background: #E84E32;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: not-allowed;
      pointer-events: none;
      transform: translate(1px, 1px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .end-btn .btn-spinner {
      width: 18px;
      height: 18px;
      border: 2.5px solid rgba(255, 255, 255, 0.4);
      border-top-color: #FFFFFF;
      border-radius: 50%;
      animation: spin 0.65s linear infinite;
      display: inline-block;
      flex: none;
    }

    /* Arrived Home Sheet */
    .arrived-sheet-backdrop {
      position: fixed;
      inset: 0;
      z-index: 190;
      background: rgba(23, 20, 15, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      animation: tb-scrim 0.2s ease both;
    }

    .arrived-sheet {
      position: relative;
      background: #FFFBF2;
      border-top: 3px solid #17140F;
      border-radius: 30px 30px 0 0;
      padding: 20px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      animation: tb-sheet 0.25s cubic-bezier(0.23, 1, 0.32, 1) both;
      box-sizing: border-box;
    }

    /* Post Walk Summary Screen */
    .summary-fullscreen {
      position: fixed;
      inset: 0;
      z-index: 140;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .summary-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 56px 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-sizing: border-box;
    }

    .summary-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 32px;
      color: #17140F;
      letter-spacing: -1.3px;
      line-height: 1.06;
    }

    .summary-sub {
      font-size: 12.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 3px;
    }

    .map-preview-box {
      position: relative;
      height: 220px;
      border: 3px solid #17140F;
      border-radius: 22px;
      overflow: hidden;
      background: #E3E8D8;
      box-shadow: 4px 4px 0 #17140F;
    }

    #summary-leaflet-map {
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #E5EAD9;
    }

    .kpis-row {
      display: flex;
      gap: 10px;
    }

    .kpi-tile {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 12px;
      box-shadow: 3px 3px 0 #17140F;
      box-sizing: border-box;
    }

    .kpi-val {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 21px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -0.8px;
    }

    .kpi-lbl {
      font-size: 9.5px;
      font-weight: 800;
      color: #7A5C00;
      margin-top: 5px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    .details-box {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      box-shadow: 4px 4px 0 #17140F;
      overflow: hidden;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 15px;
      border-bottom: 2.5px solid #F0E7D3;
    }

    .detail-lbl {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      width: 74px;
      flex: none;
      text-transform: uppercase;
    }

    .detail-val {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      font-weight: 800;
      color: #17140F;
    }

    .discard-link {
      text-align: center;
      font-size: 12.5px;
      font-weight: 800;
      color: #9A9080;
      text-decoration: underline;
      cursor: pointer;
      padding: 4px;
      user-select: none;
    }

    .discard-link:active {
      opacity: 0.5;
    }

    .save-bottom-bar {
      flex: none;
      padding: 14px 18px 26px;
      background: #FFFBF2;
      border-top: 3px solid #F0E7D3;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `; }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribe = appState.subscribe(() => {
            this.requestUpdate();
            this.syncMaps();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.();
        this.destroyLiveMap();
        this.destroySummaryMap();
    }
    updated(changedProps) {
        super.updated(changedProps);
        this.syncMaps();
    }
    syncMaps() {
        const view = appState.walkView;
        if (view === 'live') {
            this.destroySummaryMap();
            setTimeout(() => this.initOrUpdateLiveMap(), 50);
        }
        else if (view === 'summary') {
            this.destroyLiveMap();
            setTimeout(() => this.initOrUpdateSummaryMap(), 50);
        }
        else {
            this.destroyLiveMap();
            this.destroySummaryMap();
        }
    }
    destroyLiveMap() {
        if (this.liveMap) {
            this.liveMap.remove();
            this.liveMap = undefined;
            this.livePolyline = undefined;
            this.livePolylineShadow = undefined;
            this.liveStartMarker = undefined;
            this.liveCurrentMarker = undefined;
        }
    }
    destroySummaryMap() {
        if (this.summaryMap) {
            this.summaryMap.remove();
            this.summaryMap = undefined;
        }
    }
    initOrUpdateLiveMap() {
        const container = this.renderRoot?.querySelector('#live-leaflet-map');
        if (!container)
            return;
        const walk = appState.activeWalk;
        if (!walk)
            return;
        const route = walk.route || [];
        const currentLat = walk.currentLat ?? (route.length > 0 ? route[route.length - 1][0] : 37.5665);
        const currentLng = walk.currentLng ?? (route.length > 0 ? route[route.length - 1][1] : 126.9780);
        if (!this.liveMap) {
            this.liveMap = L.map(container, {
                zoomControl: false,
                attributionControl: false,
            }).setView([currentLat, currentLng], 17);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
                maxZoom: 19,
                subdomains: 'abcd',
            }).addTo(this.liveMap);
            // Start Shadow & Main Polylines
            this.livePolylineShadow = L.polyline(route, {
                color: '#17140F',
                weight: 9,
                lineCap: 'round',
                lineJoin: 'round',
                opacity: 0.9,
            }).addTo(this.liveMap);
            this.livePolyline = L.polyline(route, {
                color: '#FF5A3C',
                weight: 5,
                lineCap: 'round',
                lineJoin: 'round',
                opacity: 1,
            }).addTo(this.liveMap);
            // Start Point Marker Icon
            const startPinHtml = `
        <div style="transform: translate(-50%, -50%);">
          <div style="
            background: #FFCE2E;
            border: 3px solid #17140F;
            border-radius: 50%;
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 0 #17140F;
            font-size: 11px;
            font-weight: 800;
            color: #17140F;
          ">
            S
          </div>
        </div>
      `;
            const startIcon = L.divIcon({
                className: 'dooty-live-start-pin',
                html: startPinHtml,
                iconSize: [0, 0],
            });
            if (walk.startLat !== undefined && walk.startLng !== undefined) {
                this.liveStartMarker = L.marker([walk.startLat, walk.startLng], { icon: startIcon }).addTo(this.liveMap);
            }
            // Current Location Pulsing Marker Icon
            const currentPinHtml = `
        <div style="position: relative; transform: translate(-50%, -50%); width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;">
          <div style="
            position: absolute;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: rgba(31, 201, 155, 0.4);
            animation: tb-ping 1.5s ease-out infinite;
          "></div>
          <div style="
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1FC99B;
            border: 3px solid #17140F;
            box-shadow: 2px 2px 0 #17140F;
            position: relative;
            z-index: 2;
          "></div>
        </div>
      `;
            const currentIcon = L.divIcon({
                className: 'dooty-live-current-pin',
                html: currentPinHtml,
                iconSize: [0, 0],
            });
            this.liveCurrentMarker = L.marker([currentLat, currentLng], { icon: currentIcon }).addTo(this.liveMap);
            setTimeout(() => this.liveMap?.invalidateSize(), 150);
        }
        else {
            // Update layers
            this.liveMap.invalidateSize();
            if (this.livePolyline && this.livePolylineShadow) {
                this.livePolyline.setLatLngs(route);
                this.livePolylineShadow.setLatLngs(route);
            }
            if (walk.startLat !== undefined && walk.startLng !== undefined) {
                if (!this.liveStartMarker) {
                    const startPinHtml = `
            <div style="transform: translate(-50%, -50%);">
              <div style="
                background: #FFCE2E;
                border: 3px solid #17140F;
                border-radius: 50%;
                width: 22px;
                height: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 2px 2px 0 #17140F;
                font-size: 11px;
                font-weight: 800;
                color: #17140F;
              ">
                S
              </div>
            </div>
          `;
                    const startIcon = L.divIcon({
                        className: 'dooty-live-start-pin',
                        html: startPinHtml,
                        iconSize: [0, 0],
                    });
                    this.liveStartMarker = L.marker([walk.startLat, walk.startLng], { icon: startIcon }).addTo(this.liveMap);
                }
                else {
                    this.liveStartMarker.setLatLng([walk.startLat, walk.startLng]);
                }
            }
            if (this.liveCurrentMarker) {
                this.liveCurrentMarker.setLatLng([currentLat, currentLng]);
            }
            // Smoothly pan map to current location
            if (walk.currentLat !== undefined && walk.currentLng !== undefined) {
                this.liveMap.panTo([walk.currentLat, walk.currentLng], { animate: true, duration: 0.8 });
            }
        }
    }
    handleRecenterLive() {
        if (!this.liveMap || !appState.activeWalk)
            return;
        const walk = appState.activeWalk;
        const lat = walk.currentLat ?? (walk.route.length > 0 ? walk.route[walk.route.length - 1][0] : undefined);
        const lng = walk.currentLng ?? (walk.route.length > 0 ? walk.route[walk.route.length - 1][1] : undefined);
        if (lat !== undefined && lng !== undefined) {
            this.liveMap.flyTo([lat, lng], 17, { animate: true, duration: 0.8 });
        }
    }
    initOrUpdateSummaryMap() {
        const container = this.renderRoot?.querySelector('#summary-leaflet-map');
        if (!container)
            return;
        const summary = appState.walkSummaryData;
        if (!summary)
            return;
        const route = summary.route || [];
        const defaultCenter = summary.startLat !== undefined && summary.startLng !== undefined
            ? [summary.startLat, summary.startLng]
            : route.length > 0
                ? [route[0][0], route[0][1]]
                : [37.5665, 126.9780];
        if (!this.summaryMap) {
            this.summaryMap = L.map(container, {
                zoomControl: false,
                attributionControl: false,
                dragging: true,
                touchZoom: true,
                scrollWheelZoom: false,
            }).setView(defaultCenter, 15);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
                maxZoom: 19,
                subdomains: 'abcd',
            }).addTo(this.summaryMap);
            if (route.length >= 2) {
                // Shadow line
                L.polyline(route, {
                    color: '#17140F',
                    weight: 8,
                    lineCap: 'round',
                    lineJoin: 'round',
                    opacity: 0.9,
                }).addTo(this.summaryMap);
                // Main colored line
                const polyline = L.polyline(route, {
                    color: '#1FC99B',
                    weight: 4.5,
                    lineCap: 'round',
                    lineJoin: 'round',
                    opacity: 1,
                }).addTo(this.summaryMap);
                this.summaryMap.fitBounds(polyline.getBounds(), { padding: [35, 35] });
            }
            // Add Start Marker (🟢 Start)
            const startPt = summary.startLat !== undefined && summary.startLng !== undefined
                ? [summary.startLat, summary.startLng]
                : route.length > 0
                    ? [route[0][0], route[0][1]]
                    : undefined;
            if (startPt) {
                const startIcon = L.divIcon({
                    className: 'dooty-summary-start-pin',
                    html: `
            <div style="transform: translate(-50%, -50%);">
              <div style="
                background: #FFCE2E;
                border: 2.5px solid #17140F;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 2px 2px 0 #17140F;
                font-size: 11px;
                font-weight: 800;
                color: #17140F;
              ">
                📍
              </div>
            </div>
          `,
                    iconSize: [0, 0],
                });
                L.marker(startPt, { icon: startIcon }).addTo(this.summaryMap);
            }
            // Add End Marker (🏁 Finish)
            const endPt = summary.endLat !== undefined && summary.endLng !== undefined
                ? [summary.endLat, summary.endLng]
                : route.length > 1
                    ? [route[route.length - 1][0], route[route.length - 1][1]]
                    : undefined;
            if (endPt) {
                const endIcon = L.divIcon({
                    className: 'dooty-summary-end-pin',
                    html: `
            <div style="transform: translate(-50%, -50%);">
              <div style="
                background: #FF5A3C;
                border: 2.5px solid #17140F;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 2px 2px 0 #17140F;
                font-size: 11px;
                font-weight: 800;
                color: #FFF;
              ">
                🏁
              </div>
            </div>
          `,
                    iconSize: [0, 0],
                });
                L.marker(endPt, { icon: endIcon }).addTo(this.summaryMap);
            }
            setTimeout(() => this.summaryMap?.invalidateSize(), 150);
        }
        else {
            this.summaryMap.invalidateSize();
        }
    }
    formatSec(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${String(s).padStart(2, '0')}`;
    }
    render() {
        const isKo = appState.currentLocale === 'ko';
        const walk = appState.activeWalk;
        const view = appState.walkView;
        const sec = appState.getWalkSeconds();
        const timeStr = this.formatSec(sec);
        const kmStr = appState.getWalkDistanceKm();
        const paceStr = appState.getWalkPace();
        const isPaused = walk?.pausedAt !== null;
        return html `
      <!-- Inject Leaflet core CSS -->
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

      <!-- 1. Floating Banner above Dock (Visible when walk is running in background) -->
      ${walk && view === null
            ? html `
            <div class="walk-banner" @click=${() => appState.expandWalk()}>
              <div class="ping-wrap">
                <div class="ping-circle"></div>
                <div class="ping-dot"></div>
              </div>
              <div class="banner-label">${isKo ? '실시간 산책' : 'LIVE WALK'}</div>
              <div style="flex: 1;"></div>
              <div class="banner-time">${timeStr}</div>
              <div class="banner-divider"></div>
              <div class="banner-km">${kmStr} km</div>
            </div>
          `
            : null}

      <!-- 2. Fullscreen Live Walk Screen -->
      ${walk && view === 'live'
            ? html `
            <div class="live-fullscreen">
              <!-- Top Real Leaflet Map Area with GPS Trace -->
              <div class="live-map-area">
                <div id="live-leaflet-map"></div>

                <div class="minimize-btn" @click=${() => appState.minimizeWalk()}>&#8595;</div>
                <div class="live-status-pill">
                  <div
                    style="width:9px; height:9px; border-radius:50%; background:#1FC99B; animation: tb-ping 1.5s ease-out infinite;"
                  ></div>
                  <div style="font-size:10px; font-weight:800; color:#FFF; letter-spacing:1.2px;">
                    ${isKo ? '실시간 산책' : 'LIVE WALK'}
                  </div>
                </div>

                <button class="recenter-fab" @click=${() => this.handleRecenterLive()}>
                  <span>🎯</span>
                  <span>${isKo ? '내 위치' : 'Recenter'}</span>
                </button>
              </div>

              <!-- Bottom Controls Panel -->
              <div class="live-controls-panel">
                <div class="stat-row">
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.3px; color: #9A9080; text-transform: uppercase;">
                      ${isKo ? '경과 시간' : 'Elapsed Time'}
                    </div>
                    <div class="main-timer">${timeStr}</div>
                  </div>
                  <div style="text-align: right; flex: none;">
                    <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 26px; color: #17140F; line-height: 1; letter-spacing: -1px;">
                      ${kmStr}
                    </div>
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080;">
                      KM · ${paceStr}/KM
                    </div>
                  </div>
                </div>

                <div class="btn-row">
                  <div class="pause-btn" @click=${() => appState.pauseLiveWalk()}>
                    ${isPaused ? (isKo ? '계속하기' : 'Resume') : isKo ? '일시정지' : 'Pause'}
                  </div>
                  <div class="end-btn" @click=${() => appState.endLiveWalk()}>
                    ${isKo ? '산책 종료' : 'End walk'}
                  </div>
                </div>
              </div>
            </div>
          `
            : null}

      <!-- 3. Arrived Home Auto-Prompt Modal -->
      ${appState.walkHomeAsk
            ? html `
            <div class="arrived-sheet-backdrop">
              <div class="arrived-sheet">
                <div style="display: flex; align-items: center; gap: 13px;">
                  <div
                    style="width:48px; height:48px; border-radius:16px; border:3px solid #17140F; background:#FFCE2E; display:flex; align-items:flex-end; justify-content:center; padding-bottom:8px; box-sizing:border-box; position:relative; overflow:hidden;"
                  >
                    <div
                      style="position:absolute; top:7px; width:26px; height:16px; background:#17140F; clip-path:polygon(50% 0, 100% 100%, 0 100%);"
                    ></div>
                    <div style="width:9px; height:11px; background:#17140F; border-radius:2px 2px 0 0;"></div>
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 23px; color: #17140F; letter-spacing: -0.8px; line-height: 1.1;">
                      ${isKo ? '집에 도착하신 것 같아요' : "Looks like you're home"}
                    </div>
                    <div style="font-size: 12.5px; font-weight: 700; color: #6A6152; margin-top: 2px;">
                      ${isKo ? '지금 산책을 끝낼까요?' : 'We can end the walk now.'}
                    </div>
                  </div>
                </div>

                <div style="background:#FFF; border:3px solid #17140F; border-radius:20px; padding:14px 16px; display:flex; align-items:center; gap:14px; box-shadow:3px 3px 0 #17140F;">
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${isKo ? '소요 시간' : 'DURATION'}
                    </div>
                    <div style="font-family:var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${timeStr}
                    </div>
                  </div>
                  <div style="width: 2.5px; align-self: stretch; background: #F0E7D3;"></div>
                  <div style="flex: 1;">
                    <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:#9A9080; text-transform:uppercase;">
                      ${isKo ? '거리' : 'DISTANCE'}
                    </div>
                    <div style="font-family:var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight:800; font-size:22px; color:#17140F; letter-spacing:-0.8px; line-height:1.2;">
                      ${kmStr} km
                    </div>
                  </div>
                </div>

                <div class="btn-row">
                  <div class="pause-btn" style="flex: 1; width: auto;" @click=${() => appState.keepWalking()}>
                    ${isKo ? '아직 걷는 중' : 'Still walking'}
                  </div>
                  <div
                    class="end-btn"
                    style="flex: 1; background: #1FC99B;"
                    @click=${() => appState.endLiveWalk()}
                  >
                    ${isKo ? '네, 종료할게요' : 'Yes, end it'}
                  </div>
                </div>
              </div>
            </div>
          `
            : null}

      <!-- 4. Post Walk Summary View -->
      ${view === 'summary' && appState.walkSummaryData
            ? html `
            <div class="summary-fullscreen">
              <div class="summary-scroll">
                <div>
                  <div class="summary-title">
                    ${isKo
                ? `수고했어요, ${appState.walkSummaryData.petNames.join(' & ')}!`
                : `Good effort, ${appState.walkSummaryData.petNames.join(' & ')}`}
                  </div>
                  <div class="summary-sub">
                    ${appState.walkSummaryData.startTime} ~ ${appState.walkSummaryData.endTime} ·
                    ${isKo ? '저장하기 전에 확인해 주세요.' : 'check it over before saving.'}
                  </div>
                </div>

                <!-- Real Leaflet Map Preview Box -->
                <div class="map-preview-box">
                  <div id="summary-leaflet-map"></div>
                </div>

                <!-- 3 KPI Tiles -->
                <div class="kpis-row">
                  <div class="kpi-tile" style="background: #FFCE2E;">
                    <div class="kpi-val">${Math.max(1, Math.round(appState.walkSummaryData.durationSec / 60))} min</div>
                    <div class="kpi-lbl">${isKo ? '시간' : 'Duration'}</div>
                  </div>
                  <div class="kpi-tile" style="background: #1FC99B;">
                    <div class="kpi-val">${appState.walkSummaryData.distanceKm} km</div>
                    <div class="kpi-lbl">${isKo ? '거리' : 'Distance'}</div>
                  </div>
                  <div class="kpi-tile" style="background: #BFD0FF;">
                    <div class="kpi-val">${appState.walkSummaryData.pace}</div>
                    <div class="kpi-lbl">${isKo ? '평균 페이스' : 'Avg Pace'}</div>
                  </div>
                </div>

                <!-- Details & Notes Box -->
                <div class="details-box">
                  <div class="detail-item">
                    <div class="detail-lbl">${isKo ? '참여' : 'WHO'}</div>
                    <div class="detail-val">${appState.walkSummaryData.petNames.join(' & ')}</div>
                  </div>
                  ${appState.walkSummaryData.startLocationName
                ? html `
                        <div class="detail-item">
                          <div class="detail-lbl">${isKo ? '출발지' : 'START'}</div>
                          <div class="detail-val">${appState.walkSummaryData.startLocationName}</div>
                        </div>
                      `
                : null}
                  ${appState.walkSummaryData.endLocationName
                ? html `
                        <div class="detail-item">
                          <div class="detail-lbl">${isKo ? '도착지' : 'END'}</div>
                          <div class="detail-val">${appState.walkSummaryData.endLocationName}</div>
                        </div>
                      `
                : null}
                  <div class="detail-item">
                    <div class="detail-lbl">${isKo ? '작성자' : 'LOGGED BY'}</div>
                    <div class="detail-val">${appState.currentUser?.displayName || 'Me'}</div>
                  </div>
                  <div style="padding: 14px 15px;">
                    <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px; color: #9A9080; text-transform: uppercase;">
                      ${isKo ? '메모' : 'NOTES'}
                    </div>
                    <input
                      type="text"
                      placeholder=${isKo ? '산책 중 특이사항을 적어주세요...' : 'Met three dogs, had a blast...'}
                      .value=${this.notes}
                      @input=${(e) => (this.notes = e.target.value)}
                      style="width:100%; border:none; background:none; font-size:14px; font-weight:700; color:#17140F; margin-top:5px; outline:none;"
                    />
                  </div>
                </div>

                <div class="discard-link" @click=${() => appState.discardLiveWalk()}>
                  ${isKo ? '이 산책 기록 취소' : 'Discard this walk'}
                </div>
              </div>

              <!-- Bottom Save Button -->
              <div class="save-bottom-bar">
                <div
                  class="end-btn ${this.isSaving ? 'is-loading' : ''}"
                  @click=${() => this.handleSave()}
                >
                  ${this.isSaving
                ? html `
                        <div class="btn-spinner"></div>
                        <span>${isKo ? '산책 저장 중...' : 'Saving walk...'}</span>
                      `
                : (isKo ? '산책 저장' : 'Save walk')}
                </div>
              </div>
            </div>
          `
            : null}
    `;
    }
    async handleSave() {
        if (this.isSaving)
            return;
        this.isSaving = true;
        try {
            const isKo = appState.currentLocale === 'ko';
            const summary = appState.walkSummaryData;
            const petNames = summary?.petNames.join(' & ') || (isKo ? '반려견' : 'Pet');
            const kmStr = summary?.distanceKm ? `${summary.distanceKm} km` : 'Walk';
            await appState.saveLiveWalk(this.notes, this.photoUrl);
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: {
                    title: isKo ? '산책 기록 완료!' : 'Walk saved!',
                    sub: isKo ? `${petNames}와(과) 함께한 산책 (${kmStr})` : `${petNames}'s walk logged (${kmStr})`,
                },
            }));
        }
        catch (err) {
            console.error('Failed to save walk:', err);
        }
        finally {
            this.isSaving = false;
        }
    }
};
__decorate([
    state()
], DootyWalk.prototype, "notes", void 0);
__decorate([
    state()
], DootyWalk.prototype, "photoUrl", void 0);
__decorate([
    state()
], DootyWalk.prototype, "isSaving", void 0);
DootyWalk = __decorate([
    customElement('dooty-walk')
], DootyWalk);
export { DootyWalk };
//# sourceMappingURL=dooty-walk.js.map