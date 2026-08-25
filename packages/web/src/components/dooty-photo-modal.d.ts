import { LitElement } from 'lit';
export declare class DootyPhotoModal extends LitElement {
    private unsubscribe?;
    private previewUrl;
    private urlInput;
    private activeMode;
    private isProcessing;
    private errorMessage;
    private readonly petPresets;
    private readonly userPresets;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleClose;
    private triggerFileInput;
    private handleFileSelect;
    private resizeImage;
    private handleSelectPreset;
    private handleApplyUrl;
    private handleRemovePhoto;
    private handleSave;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=dooty-photo-modal.d.ts.map