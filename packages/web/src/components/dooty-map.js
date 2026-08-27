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
import { formatLocalizedEventNotes } from '@dooty/shared';
// Helper to compute convex hull for pet territory boundary
function getConvexHull(points) {
    if (points.length <= 2)
        return points;
    const sorted = [...points].sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lower = [];
    for (const p of sorted) {
        while (lower.length >= 2 &&
            cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) {
            lower.pop();
        }
        lower.push(p);
    }
    const upper = [];
    for (let i = sorted.length - 1; i >= 0; i--) {
        const p = sorted[i];
        while (upper.length >= 2 &&
            cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) {
            upper.pop();
        }
        upper.push(p);
    }
    upper.pop();
    lower.pop();
    return lower.concat(upper);
}
let DootyMap = class DootyMap extends LitElement {
    constructor() {
        super(...arguments);
        this.activeFilter = 'all';
        this.isLocating = false;
        this.markerMap = new Map();
    }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribe = appState.subscribe(() => {
            this.requestUpdate();
            this.updateMapLayers();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.();
        this.destroyMap();
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        setTimeout(() => {
            this.initMap();
        }, 60);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('activeFilter')) {
            this.updateMapLayers();
        }
        if (this.map) {
            setTimeout(() => this.map?.invalidateSize(), 50);
        }
    }
    destroyMap() {
        if (this.map) {
            this.map.remove();
            this.map = undefined;
            this.markersLayer = undefined;
            this.trailsLayer = undefined;
            this.territoryLayer = undefined;
            this.markerMap.clear();
        }
    }
    static { this.styles = css `
    :host {
      display: block;
      padding-bottom: 140px;
      position: relative;
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
    .leaflet-control-zoom {
      margin-bottom: 14px;
      margin-right: 14px;
      border: 2.5px solid #17140f;
      border-radius: 12px;
      box-shadow: 2.5px 2.5px 0 #17140f;
      overflow: hidden;
      background: #fff;
    }
    .leaflet-control-zoom a {
      background: #fff;
      color: #17140f;
      display: block;
      width: 32px;
      height: 32px;
      text-align: center;
      text-decoration: none;
      font-weight: 800;
      font-size: 16px;
      line-height: 30px;
      border-bottom: 1.5px solid #17140f;
      cursor: pointer;
    }
    .leaflet-control-zoom a:last-child {
      border-bottom: none;
    }
    .leaflet-popup {
      position: absolute;
      text-align: center;
      margin-bottom: 20px;
      pointer-events: none;
    }
    .leaflet-popup-content-wrapper {
      padding: 1px;
      text-align: left;
      border-radius: 16px;
      background: #fffbf2;
      border: 2.5px solid #17140f;
      box-shadow: 4px 4px 0 #17140f;
      pointer-events: auto;
    }
    .leaflet-popup-content {
      margin: 10px 12px;
      line-height: 1.4;
    }
    .leaflet-popup-tip-container {
      width: 40px;
      height: 20px;
      position: absolute;
      left: 50%;
      margin-top: -1px;
      margin-left: -20px;
      overflow: hidden;
      pointer-events: none;
    }
    .leaflet-popup-tip {
      width: 17px;
      height: 17px;
      padding: 1px;
      margin: -10px auto 0;
      transform: rotate(45deg);
      background: #fffbf2;
      border: 2px solid #17140f;
    }
    .leaflet-popup-close-button {
      position: absolute;
      top: 6px;
      right: 8px;
      padding: 2px;
      border: none;
      text-align: center;
      width: 18px;
      height: 18px;
      font: 16px/14px Tahoma, Verdana, sans-serif;
      color: #17140f;
      text-decoration: none;
      font-weight: 800;
      background: transparent;
      cursor: pointer;
      pointer-events: auto;
    }

    /* Map container shell */
    .map-section-wrapper {
      position: relative;
      width: 100%;
      height: 440px;
      background: #e5ead9;
      border-bottom: 3px solid #17140f;
      overflow: hidden;
    }

    #leaflet-map {
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #e5ead9;
    }

    /* Filter floating pills */
    .map-controls-bar {
      position: absolute;
      top: 14px;
      left: 14px;
      right: 14px;
      z-index: 400;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      pointer-events: none;
    }

    .filter-pills-row {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(255, 251, 242, 0.94);
      backdrop-filter: blur(8px);
      padding: 4px;
      border-radius: 14px;
      border: 2px solid #17140f;
      box-shadow: 2.5px 2.5px 0 #17140f;
      pointer-events: auto;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .filter-pills-row::-webkit-scrollbar {
      display: none;
    }

    .filter-btn {
      border: none;
      background: transparent;
      padding: 5px 9px;
      border-radius: 9px;
      font-family: inherit;
      font-size: 11.5px;
      font-weight: 800;
      color: #17140f;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: all 0.1s ease;
      white-space: nowrap;
    }

    .filter-btn.active {
      background: #ffce2e;
      border: 1.5px solid #17140f;
      box-shadow: 1px 1px 0 #17140f;
    }

    /* Floating Action Buttons */
    .map-actions-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: auto;
    }

    .map-action-btn {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      background: #fff;
      border: 2.5px solid #17140f;
      box-shadow: 2.5px 2.5px 0 #17140f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.08s ease, box-shadow 0.08s ease;
    }

    .map-action-btn:hover {
      background: #fffbf2;
    }

    .map-action-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140f;
    }

    /* Territory info badge */
    .territory-badge-card {
      position: absolute;
      bottom: 14px;
      left: 14px;
      z-index: 400;
      background: #fff;
      border: 2.5px solid #17140f;
      border-radius: 16px;
      padding: 8px 12px;
      box-shadow: 3px 3px 0 #17140f;
      pointer-events: auto;
    }

    .territory-sub {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9a9080;
      text-transform: uppercase;
    }

    .territory-val {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 18px;
      color: #17140f;
      line-height: 1.1;
    }

    /* Spots ranking list section */
    .spots-section {
      padding: 18px 18px 24px;
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    .spots-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .spots-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 20px;
      color: #17140f;
      letter-spacing: -0.5px;
    }

    .spots-count-badge {
      font-size: 11px;
      font-weight: 800;
      background: #e8eeff;
      border: 1.5px solid #17140f;
      border-radius: 8px;
      padding: 2px 7px;
      color: #2b5be8;
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
      background: #fff;
      border: 2.5px solid #17140f;
      border-radius: 18px;
      padding: 11px 13px;
      box-shadow: 2.5px 2.5px 0 #17140f;
      cursor: pointer;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .spot-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140f;
      background: #fffdf7;
    }

    .spot-card.selected {
      background: #fff8e7;
      border-color: #ff5a3c;
    }

    .spot-rank {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      border: 2.5px solid #17140f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      color: #17140f;
      flex: none;
    }

    .spot-name {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140f;
      line-height: 1.2;
    }

    .spot-note {
      font-size: 11px;
      font-weight: 600;
      color: #6a6152;
      margin-top: 2px;
    }

    .spot-fly-icon {
      font-size: 15px;
      opacity: 0.6;
      transition: opacity 0.1s ease, transform 0.1s ease;
      flex: none;
    }

    .spot-card:hover .spot-fly-icon {
      opacity: 1;
      transform: scale(1.15);
    }
  `; }
    getGeoEvents() {
        const events = appState.events || [];
        return events.filter((e) => typeof e.latitude === 'number' && typeof e.longitude === 'number');
    }
    getFilteredEvents() {
        const geo = this.getGeoEvents();
        if (this.activeFilter === 'all')
            return geo;
        return geo.filter((e) => e.eventType === this.activeFilter);
    }
    initMap() {
        const mapContainer = this.renderRoot?.querySelector('#leaflet-map');
        if (!mapContainer || this.map)
            return;
        const geoEvents = this.getGeoEvents();
        let initialCenter = [37.5665, 126.978];
        let initialZoom = 13;
        if (geoEvents.length > 0) {
            initialCenter = [
                geoEvents[0].latitude,
                geoEvents[0].longitude,
            ];
            initialZoom = 15;
        }
        this.map = L.map(mapContainer, {
            zoomControl: false,
            attributionControl: false,
        }).setView(initialCenter, initialZoom);
        // Warm CartoDB Voyager tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
            maxZoom: 19,
            subdomains: 'abcd',
        }).addTo(this.map);
        // Zoom controls on bottom right
        L.control.zoom({ position: 'bottomright' }).addTo(this.map);
        // Initialize layer groups for vector elements
        this.territoryLayer = L.layerGroup().addTo(this.map);
        this.trailsLayer = L.layerGroup().addTo(this.map);
        this.markersLayer = L.layerGroup().addTo(this.map);
        this.updateMapLayers(geoEvents.length > 1);
        setTimeout(() => {
            this.map?.invalidateSize();
        }, 150);
    }
    updateMapLayers(fitToAll = false) {
        if (!this.map ||
            !this.markersLayer ||
            !this.trailsLayer ||
            !this.territoryLayer)
            return;
        this.markersLayer.clearLayers();
        this.trailsLayer.clearLayers();
        this.territoryLayer.clearLayers();
        this.markerMap.clear();
        const filteredEvents = this.getFilteredEvents();
        const allGeoEvents = this.getGeoEvents();
        const isKo = appState.currentLocale === 'ko';
        const petName = appState.currentPet?.name || (isKo ? '우리 댕댕이' : 'Pet');
        // 1. Vector: Draw Dog Claimed Territory Polygon
        if (allGeoEvents.length >= 3) {
            const coordPoints = allGeoEvents.map((e) => [
                e.latitude,
                e.longitude,
            ]);
            const hull = getConvexHull(coordPoints);
            if (hull.length >= 3) {
                const polygon = L.polygon(hull, {
                    color: '#17140F',
                    weight: 2.5,
                    dashArray: '6, 8',
                    fillColor: '#1FC99B',
                    fillOpacity: 0.16,
                });
                polygon.bindPopup(`
          <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 13px; font-weight: 800; color: #17140F; text-align: center; padding: 4px 6px;">
            🐾 <strong>${petName}</strong>'s ${isKo ? '영역' : 'Territory'}
            <div style="font-size: 10.5px; color: #6A6152; font-weight: 600; margin-top: 2px;">
              ${allGeoEvents.length} ${isKo ? '개의 기록 지점' : 'tagged spots'}
            </div>
          </div>
        `);
                this.territoryLayer.addLayer(polygon);
            }
        }
        // 2. Vector: Draw Sequential Walk / Potty Path Trails
        const sortedWalkPoints = [...allGeoEvents]
            .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
            .map((e) => [e.latitude, e.longitude]);
        if (sortedWalkPoints.length >= 2) {
            // Bold outer shadow line
            const shadowTrail = L.polyline(sortedWalkPoints, {
                color: '#17140F',
                weight: 5.5,
                opacity: 0.85,
                lineCap: 'round',
                lineJoin: 'round',
            });
            // Vibrant inner dashed trail
            const innerTrail = L.polyline(sortedWalkPoints, {
                color: '#FF5A3C',
                weight: 3,
                dashArray: '5, 6',
                opacity: 1.0,
                lineCap: 'round',
            });
            this.trailsLayer.addLayer(shadowTrail);
            this.trailsLayer.addLayer(innerTrail);
        }
        // 3. Vector Markers: Custom Neo-Brutalist DivIcons
        const bounds = L.latLngBounds([]);
        filteredEvents.forEach((ev) => {
            const lat = ev.latitude;
            const lng = ev.longitude;
            bounds.extend([lat, lng]);
            const emoji = ev.eventType === 'poop'
                ? '💩'
                : ev.eventType === 'pee'
                    ? '💧'
                    : ev.eventType === 'walk'
                        ? '🐾'
                        : '📍';
            const bgColor = ev.eventType === 'poop'
                ? '#FFCE2E'
                : ev.eventType === 'pee'
                    ? '#BFD0FF'
                    : ev.eventType === 'walk'
                        ? '#FF5A3C'
                        : '#1FC99B';
            const iconHtml = `
        <div style="
          position: relative;
          transform: translate(-50%, -50%);
          cursor: pointer;
        ">
          <div style="
            background: ${bgColor};
            border: 2.5px solid #17140F;
            border-radius: 50%;
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 2.5px 2.5px 0 #17140F;
            font-size: 15px;
            transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1);
          ">
            ${emoji}
          </div>
        </div>
      `;
            const customIcon = L.divIcon({
                className: 'dooty-map-marker-icon',
                html: iconHtml,
                iconSize: [0, 0],
            });
            const marker = L.marker([lat, lng], { icon: customIcon });
            const locName = ev.metadata?.locationName ||
                (ev.notes
                    ? formatLocalizedEventNotes(ev.notes, ev.eventType, isKo)
                    : `${lat.toFixed(4)}, ${lng.toFixed(4)}`);
            const timeStr = new Date(ev.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });
            const dateStr = new Date(ev.timestamp).toLocaleDateString();
            const popupHtml = `
        <div style="padding: 4px 6px; min-width: 140px; font-family: 'Nunito', sans-serif;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 18px;">${emoji}</span>
            <div>
              <div style="font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 14px; color: #17140F;">
                ${ev.eventType.toUpperCase()}
              </div>
              <div style="font-size: 10px; font-weight: 700; color: #6A6152;">
                ${dateStr} · ${timeStr}
              </div>
            </div>
          </div>
          <div style="font-size: 12px; font-weight: 800; color: #17140F; margin-bottom: 2px;">
            ${locName}
          </div>
          <div style="font-size: 10.5px; color: #9A9080; font-weight: 600;">
            ${lat.toFixed(5)}, ${lng.toFixed(5)} · ${ev.loggedByName || 'Owner'}
          </div>
        </div>
      `;
            marker.bindPopup(popupHtml);
            marker.on('click', () => {
                this.selectedEventId = ev.id;
                this.dispatchEvent(new CustomEvent('dooty-toast', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        title: `${ev.eventType.toUpperCase()} · ${locName}`,
                        sub: `${lat.toFixed(4)}, ${lng.toFixed(4)} · ${ev.loggedByName}`,
                    },
                }));
            });
            this.markersLayer.addLayer(marker);
            this.markerMap.set(ev.id, marker);
        });
        if (fitToAll && bounds.isValid()) {
            this.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 17 });
        }
    }
    handleLocateMe() {
        if (!navigator.geolocation || !this.map) {
            alert('Geolocation is not supported by your browser');
            return;
        }
        this.isLocating = true;
        navigator.geolocation.getCurrentPosition((pos) => {
            this.isLocating = false;
            if (!this.map)
                return;
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const accuracy = pos.coords.accuracy;
            if (this.userMarker)
                this.map.removeLayer(this.userMarker);
            if (this.userAccuracyCircle)
                this.map.removeLayer(this.userAccuracyCircle);
            this.userAccuracyCircle = L.circle([lat, lng], {
                radius: Math.min(accuracy, 200),
                color: '#2B5BE8',
                weight: 1.5,
                fillColor: '#2B5BE8',
                fillOpacity: 0.12,
            }).addTo(this.map);
            this.userMarker = L.circleMarker([lat, lng], {
                radius: 8,
                color: '#FFF',
                weight: 2.5,
                fillColor: '#2B5BE8',
                fillOpacity: 1,
            }).addTo(this.map);
            this.map.flyTo([lat, lng], 16, { duration: 1.2 });
        }, (err) => {
            this.isLocating = false;
            console.warn('Geolocation failed:', err);
        }, { enableHighAccuracy: true, timeout: 8000 });
    }
    handleFitAll() {
        if (!this.map)
            return;
        const geo = this.getGeoEvents();
        if (geo.length === 0)
            return;
        const bounds = L.latLngBounds(geo.map((e) => [e.latitude, e.longitude]));
        this.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 17 });
    }
    handleSpotClick(spot) {
        this.selectedEventId = spot.id;
        if (!this.map || spot.latitude === undefined || spot.longitude === undefined)
            return;
        this.map.flyTo([spot.latitude, spot.longitude], 17, { duration: 1 });
        const marker = this.markerMap.get(spot.id);
        if (marker) {
            setTimeout(() => marker.openPopup(), 400);
        }
    }
    render() {
        const isKo = appState.currentLocale === 'ko';
        const allGeo = this.getGeoEvents();
        const filtered = this.getFilteredEvents();
        const poopCount = allGeo.filter((e) => e.eventType === 'poop').length;
        const peeCount = allGeo.filter((e) => e.eventType === 'pee').length;
        const walkCount = allGeo.filter((e) => e.eventType === 'walk').length;
        return html `
      <!-- Vector Map Area -->
      <div class="map-section-wrapper">
        <div id="leaflet-map"></div>

        <!-- Top Floating Filter Bar & Actions -->
        <div class="map-controls-bar">
          <div class="filter-pills-row">
            <button
              class="filter-btn ${this.activeFilter === 'all' ? 'active' : ''}"
              @click=${() => (this.activeFilter = 'all')}
            >
              ${isKo ? '전체' : 'All'} (${allGeo.length})
            </button>
            <button
              class="filter-btn ${this.activeFilter === 'poop' ? 'active' : ''}"
              @click=${() => (this.activeFilter = 'poop')}
            >
              💩 ${isKo ? '응가' : 'Poop'} (${poopCount})
            </button>
            <button
              class="filter-btn ${this.activeFilter === 'pee' ? 'active' : ''}"
              @click=${() => (this.activeFilter = 'pee')}
            >
              💧 ${isKo ? '쉬' : 'Pee'} (${peeCount})
            </button>
            <button
              class="filter-btn ${this.activeFilter === 'walk' ? 'active' : ''}"
              @click=${() => (this.activeFilter = 'walk')}
            >
              🐾 ${isKo ? '산책' : 'Walk'} (${walkCount})
            </button>
          </div>

          <div class="map-actions-group">
            <button
              class="map-action-btn"
              title="${isKo ? '내 위치' : 'Locate Me'}"
              @click=${this.handleLocateMe}
            >
              ${this.isLocating ? '⏳' : '🎯'}
            </button>
            <button
              class="map-action-btn"
              title="${isKo ? '모든 스팟 보기' : 'Fit All'}"
              @click=${this.handleFitAll}
            >
              🗺️
            </button>
          </div>
        </div>

        <!-- Territory Badge -->
        <div class="territory-badge-card">
          <div class="territory-sub">${isKo ? '위치 기록' : 'Geo-tagged logs'}</div>
          <div class="territory-val">
            ${allGeo.length > 0
            ? `${allGeo.length} ${isKo ? '개 지점' : 'spots'}`
            : isKo
                ? '기록 없음'
                : '0 spots'}
          </div>
        </div>
      </div>

      <!-- Favourite & Recent spots list -->
      <div class="spots-section">
        <div class="spots-header-row">
          <div class="spots-title">
            ${isKo ? '최근 위치 기록' : 'Recent tagged locations'}
          </div>
          <div class="spots-count-badge">${filtered.length} ${isKo ? '개' : 'items'}</div>
        </div>

        <div class="spots-list">
          ${filtered.length > 0
            ? filtered.slice(0, 10).map((s, i) => {
                const isSelected = this.selectedEventId === s.id;
                const locLabel = s.metadata?.locationName ||
                    (s.notes
                        ? formatLocalizedEventNotes(s.notes, s.eventType, isKo)
                        : `${s.eventType.toUpperCase()} at GPS spot`);
                return html `
                  <div
                    class="spot-card ${isSelected ? 'selected' : ''}"
                    @click=${() => this.handleSpotClick(s)}
                  >
                    <div
                      class="spot-rank"
                      style="background: ${s.eventType === 'poop'
                    ? '#FFCE2E'
                    : s.eventType === 'pee'
                        ? '#BFD0FF'
                        : '#FF5A3C'};"
                    >
                      ${s.eventType === 'poop'
                    ? '💩'
                    : s.eventType === 'pee'
                        ? '💧'
                        : '🐾'}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <div class="spot-name">${locLabel}</div>
                      <div class="spot-note">
                        ${new Date(s.timestamp).toLocaleDateString()} ·
                        ${s.latitude?.toFixed(4)}, ${s.longitude?.toFixed(4)} ·
                        ${s.loggedByName || 'Owner'}
                      </div>
                    </div>
                    <div class="spot-fly-icon">📍</div>
                  </div>
                `;
            })
            : html `
                <div
                  style="background: #FFF; border: 2.5px solid #17140F; border-radius: 20px; padding: 22px 18px; text-align: center; box-shadow: 3px 3px 0 #17140F;"
                >
                  <div style="font-size: 34px; margin-bottom: 6px;">🗺️</div>
                  <div
                    style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 16px; color: #17140F;"
                  >
                    ${isKo ? '위치 태그가 아직 없습니다' : 'No GPS logs yet'}
                  </div>
                  <div
                    style="font-size: 12px; color: #6A6152; margin-top: 5px; line-height: 1.45;"
                  >
                    ${isKo
                ? '기록할 때 위치 카드를 탭하여 GPS 좌표나 장소를 추가하면 실시간 지도에 배변 및 산책 스팟과 영역이 표시됩니다.'
                : 'When logging an entry, tap the Location card to attach GPS coordinates or spots to map your walks and potty territory!'}
                  </div>
                </div>
              `}
        </div>
      </div>
    `;
    }
};
__decorate([
    state()
], DootyMap.prototype, "activeFilter", void 0);
__decorate([
    state()
], DootyMap.prototype, "isLocating", void 0);
__decorate([
    state()
], DootyMap.prototype, "selectedEventId", void 0);
DootyMap = __decorate([
    customElement('dooty-map')
], DootyMap);
export { DootyMap };
//# sourceMappingURL=dooty-map.js.map