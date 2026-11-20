import { LitElement } from 'lit';
import './dooty-map-picker.js';
export declare class DootySheet extends LitElement {
    private selectedType;
    private cons;
    private size;
    private mood;
    private selectedMed;
    private selectedMedDose;
    private customMedName;
    private weightKg;
    private walkMin;
    private walkKm;
    private vetReason;
    private symptom;
    private portion;
    private photoUrl;
    private notes;
    private locationName;
    private lat?;
    private lng?;
    private isLocating;
    private showLocationPicker;
    private showMapPicker;
    private showTimePicker;
    private customTimestamp;
    private walkPetIds;
    private weatherText;
    private isFetchingWeather;
    private isSaving;
    private startLat?;
    private startLng?;
    private startLocationName;
    private isLocatingStart;
    private endLat?;
    private endLng?;
    private endLocationName;
    private isLocatingEnd;
    private activeMapPickerTarget;
    private unsubscribe?;
    private fileInput?;
    private wasOpen;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResult;
    private consNames;
    private consNamesKo;
    private typeDefs;
    private medOptions;
    private walkOptions;
    private vetReasons;
    private symptomOptions;
    private portionOptions;
    private moodOptions;
    private quickTypes;
    private handleSelectType;
    private handleBackToTypes;
    /** Re-entrancy guard for quickLogType, separate from `isSaving` (which
     *  handleSave only sets *after* the GPS fetch below resolves) — without
     *  this, a second tap during that window would start a second concurrent
     *  quick-log racing the same `lat`/`lng`/`notes`/`photoUrl` fields. */
    private quickLogging;
    /** Tapping a quick type logs it right away with current defaults + GPS,
     *  no confirm screen — tap the feed entry afterward to edit it. Closes
     *  the sheet immediately (matching the design's instant-close `xitGo`)
     *  rather than leaving it open: `selectedType` being set would otherwise
     *  render the full edit form for the second or so the GPS fetch and save
     *  take, which looks like the app opened a form and auto-submitted it.
     *
     *  `appState.closeLogger()` fires this component's own `appState.subscribe`
     *  listener synchronously, which resets `this.selectedType` back to null
     *  as soon as the sheet closes — so `typeId` is passed straight through
     *  to `handleSave` as an explicit override instead of being read back off
     *  `this.selectedType` after the close. */
    private quickLogType;
    /** Best-effort, silent GPS fill for the quick-log path: reuses any
     *  coordinates already on the component, otherwise tries a short fix
     *  (3s) so the common case stays near-instant without blocking forever
     *  if permission is denied or the device is slow to acquire a fix. */
    private quickFetchLocation;
    private triggerPhotoUpload;
    private locationPresets;
    private locationPresetsKo;
    private selectPreset;
    private clearLocation;
    private fetchCurrentLocation;
    /** Silently request location on sheet open just for weather */
    private autoFetchWeather;
    private fetchWeather;
    private wmoCodeToDescription;
    private tryReverseGeocode;
    private formatDisplayTime;
    private toDatetimeLocalValue;
    private handleCustomTimeInput;
    private setQuickOffsetMinutes;
    private setQuickOffsetDays;
    private setNow;
    private handleSave;
    private handleDelete;
    private openMapPickerFor;
    private fetchStartGPS;
    private fetchEndGPS;
    private tryReverseGeocodeForTarget;
    private handleSpotSelected;
    private close;
    render(): import("lit-html").TemplateResult<1> | null;
}
//# sourceMappingURL=dooty-sheet.d.ts.map