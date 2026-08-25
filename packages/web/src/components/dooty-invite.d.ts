import { LitElement } from 'lit';
export declare class DootyInvite extends LitElement {
    private selectedRole;
    private currentCode;
    private isGenerating;
    private unsubscribe?;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private generateNewCode;
    private handleCopy;
    private handleShare;
    private handleRevoke;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=dooty-invite.d.ts.map