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
    /** Tapping a quick type logs it right away with current defaults + GPS,
     *  no confirm screen — tap the feed entry afterward to edit it. */
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