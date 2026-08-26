import { LitElement } from 'lit';
export declare class DootyAuth extends LitElement {
    private view;
    private email;
    private password;
    private showPassword;
    private displayName;
    private userAvatar;
    private dogName;
    private dogBreed;
    private dogBirthday;
    private householdName;
    private dogAvatar;
    private setupSize;
    private trackingPrefs;
    private joinCode;
    private joinRole;
    private errorMessage;
    private isSubmitting;
    private unsubscribe?;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private setView;
    private calculateStrength;
    private handleLogin;
    private handleGoToStep2;
    private handleFinishSetup;
    private handleGoJoinDetails;
    private handleJoinSubmit;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=dooty-auth.d.ts.map