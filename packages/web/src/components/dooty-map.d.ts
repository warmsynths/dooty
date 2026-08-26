import { LitElement, PropertyValues } from 'lit';
export declare class DootyMap extends LitElement {
    private activeFilter;
    private isLocating;
    private selectedEventId?;
    private map?;
    private markersLayer?;
    private trailsLayer?;
    private territoryLayer?;
    private userMarker?;
    private userAccuracyCircle?;
    private unsubscribe?;
    private markerMap;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private destroyMap;
    static styles: import("lit").CSSResult;
    private getGeoEvents;
    private getFilteredEvents;
    private initMap;
    private updateMapLayers;
    private handleLocateMe;
    private handleFitAll;
    private handleSpotClick;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=dooty-map.d.ts.map