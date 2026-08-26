import { LitElement, PropertyValues } from 'lit';
export declare class DootyMapPicker extends LitElement {
    open: boolean;
    initialLat?: number;
    initialLng?: number;
    initialLocationName: string;
    private currentLat?;
    private currentLng?;
    private currentLocationName;
    private isLocating;
    private isGeocoding;
    private hasMovedMarker;
    private map?;
    private marker?;
    private geocodeTimeout?;
    static styles: import("lit").CSSResult;
    private locationPresets;
    private locationPresetsKo;
    protected updated(changedProps: PropertyValues): void;
    disconnectedCallback(): void;
    private destroyMap;
    private initOrUpdateMap;
    private onPositionSelected;
    private fetchUserGPS;
    private tryReverseGeocode;
    private selectPreset;
    private handleSaveSpot;
    private handleClose;
    render(): import("lit-html").TemplateResult<1> | null;
}
//# sourceMappingURL=dooty-map-picker.d.ts.map