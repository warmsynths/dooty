import { LitElement, PropertyValues } from 'lit';
export declare class DootyWalk extends LitElement {
    private unsubscribe?;
    private notes;
    private photoUrl;
    private isSaving;
    private liveMap?;
    private livePolyline?;
    private livePolylineShadow?;
    private liveStartMarker?;
    private liveCurrentMarker?;
    private summaryMap?;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    private syncMaps;
    private destroyLiveMap;
    private destroySummaryMap;
    private initOrUpdateLiveMap;
    private handleRecenterLive;
    private initOrUpdateSummaryMap;
    private formatSec;
    render(): import("lit-html").TemplateResult<1>;
    private handleSave;
}
//# sourceMappingURL=dooty-walk.d.ts.map