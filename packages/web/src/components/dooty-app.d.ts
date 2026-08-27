import { LitElement } from 'lit';
import './dooty-dock.js';
import './dooty-home.js';
import './dooty-numbers.js';
import './dooty-map.js';
import './dooty-dog.js';
import './dooty-deep.js';
import './dooty-wrapped.js';
import './dooty-settings.js';
import './dooty-invite.js';
import './dooty-importer.js';
import './dooty-sheet.js';
import './dooty-map-picker.js';
import './dooty-photo-modal.js';
import './dooty-auth.js';
export declare class DootyApp extends LitElement {
    private activeView;
    private toast;
    private burstCount;
    private toastTimer?;
    private unsubscribe?;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private showToast;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=dooty-app.d.ts.map