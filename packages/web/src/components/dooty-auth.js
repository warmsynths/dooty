var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
let DootyAuth = class DootyAuth extends LitElement {
    constructor() {
        super(...arguments);
        // Auth view mode: 'signin' | 'signup' | 'dogsetup' | 'join' | 'joindetails'
        this.view = 'signin';
        // Common user fields
        this.email = '';
        this.password = '';
        this.showPassword = false;
        this.displayName = '';
        this.userAvatar = '';
        // Dog & Household setup fields (Step 2)
        this.dogName = '';
        this.householdName = '';
        this.dogAvatar = '';
        this.setupSize = 'M';
        this.trackingPrefs = {
            poop: true,
            pee: true,
            vomit: true,
            meds: true,
            weight: true,
            walk: true,
            vet: false,
            symptom: false,
        };
        // Join fields
        this.joinCode = '';
        this.joinRole = 'Dan the walker';
        this.errorMessage = '';
        this.isSubmitting = false;
    }
    static { this.styles = css `
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      box-sizing: border-box;
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Base Container Variants */
    .view-signin {
      min-height: 100%;
      box-sizing: border-box;
      padding: 74px 20px 34px;
      background: #FFCE2E;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .view-signup, .view-dogsetup {
      min-height: 100%;
      box-sizing: border-box;
      padding: 56px 20px 34px;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .view-join, .view-joindetails {
      min-height: 100%;
      box-sizing: border-box;
      padding: 56px 20px 34px;
      background: #1FC99B;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    /* Back Button */
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .back-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    /* Brand Logo & Titles */
    .logo-hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 9px;
      text-align: center;
    }

    .brand-circle {
      width: 82px;
      height: 82px;
      border-radius: 50%;
      border: 4px solid #17140F;
      background: #FF5A3C;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      padding-bottom: 8px;
      box-sizing: border-box;
      box-shadow: 5px 5px 0 #17140F;
    }

    .brand-circle .p1 { width: 20px; height: 9px; border-radius: 50%; background: #FFF; }
    .brand-circle .p2 { width: 32px; height: 12px; border-radius: 50%; background: #FFF; }
    .brand-circle .p3 { width: 44px; height: 14px; border-radius: 50%; background: #FFF; }

    .brand-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 44px;
      color: #17140F;
      letter-spacing: -2px;
      line-height: 1;
    }

    .brand-subtitle {
      font-size: 13.5px;
      font-weight: 700;
      color: #7A5C00;
      text-align: center;
      line-height: 1.45;
      max-width: 260px;
    }

    /* Step Indicators */
    .step-bar-row {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .step-pill {
      flex: 1;
      height: 12px;
      border-radius: 12px;
      border: 3px solid #17140F;
      box-sizing: border-box;
    }

    .step-label {
      font-size: 11px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.8px;
      flex: none;
    }

    .section-headline {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 31px;
      color: #17140F;
      letter-spacing: -1.2px;
      line-height: 1.08;
    }

    .section-subtext {
      font-size: 13px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 4px;
      line-height: 1.45;
    }

    .section-subtext-mint {
      font-size: 13px;
      font-weight: 600;
      color: #0A5A45;
      margin-top: 5px;
      line-height: 1.5;
    }

    /* Cards */
    .card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 17px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 13px;
      box-sizing: border-box;
    }

    .field-label {
      font-size: 10.5px;
      font-weight: 800;
      letter-spacing: 1.3px;
      color: #9A9080;
      text-transform: uppercase;
      margin-bottom: 5px;
      display: block;
    }

    .input-box {
      width: 100%;
      box-sizing: border-box;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 13px 14px;
      font-size: 14.5px;
      font-weight: 700;
      color: #17140F;
      background: #FFF9E9;
      outline: none;
      font-family: inherit;
    }

    .input-box:focus {
      background: #FFF;
      border-color: #FF5A3C;
    }

    .password-wrapper {
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 6px 14px;
      background: #FFF9E9;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .password-input {
      flex: 1;
      border: none;
      background: transparent;
      outline: none;
      font-size: 14.5px;
      font-weight: 700;
      color: #17140F;
      font-family: inherit;
      padding: 7px 0;
    }

    .show-hide-btn {
      font-size: 12px;
      font-weight: 800;
      color: #2B5BE8;
      cursor: pointer;
      flex: none;
      user-select: none;
    }

    /* Strength Bar */
    .strength-row {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-top: 8px;
    }

    .strength-track {
      flex: 1;
      height: 8px;
      border-radius: 8px;
      border: 2.5px solid #17140F;
      background: #FFF9E9;
      overflow: hidden;
      box-sizing: border-box;
    }

    .strength-fill {
      height: 100%;
      transition: width 0.2s ease, background 0.2s ease;
    }

    .strength-text {
      font-size: 11px;
      font-weight: 800;
      color: #0A5A45;
      flex: none;
    }

    /* Buttons */
    .btn-coral {
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 18px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: background 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-coral:hover {
      background: #FF7659;
    }

    .btn-coral:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .btn-green {
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 17px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 18px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-green:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
    }

    .btn-green:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .divider-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .divider-line {
      flex: 1;
      height: 3px;
      background: #D8A81E;
    }

    .divider-text {
      font-size: 11px;
      font-weight: 800;
      color: #7A5C00;
      letter-spacing: 1.2px;
    }

    .provider-btn {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .provider-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .provider-dot {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #2B5BE8;
      flex: none;
    }

    .provider-text {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
    }

    /* Photo Upload Box */
    .photo-upload-circle {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      flex: none;
      border: 3px dashed #17140F;
      background: repeating-linear-gradient(45deg, #F0E7D3 0 6px, #E3D8BE 6px 12px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
    }

    .photo-upload-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .size-grid {
      display: flex;
      gap: 8px;
    }

    .size-tile {
      flex: 1;
      min-height: 52px;
      border-radius: 15px;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      user-select: none;
      transition: all 0.1s ease;
    }

    .size-tile.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translate(2px, 2px);
    }

    .track-chips-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .track-chip {
      border-radius: 14px;
      padding: 10px 13px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 800;
      min-height: 42px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      color: #17140F;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: all 0.1s ease;
    }

    .track-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
    }

    .track-dot {
      width: 16px;
      height: 16px;
      border-radius: 5px;
      border: 2.5px solid #17140F;
      background: #FFF;
      flex: none;
    }

    .track-chip.active .track-dot {
      background: #FF5A3C;
    }

    /* Join Code Input Boxes */
    .code-boxes-row {
      display: flex;
      gap: 6px;
      margin-top: 11px;
      justify-content: center;
      position: relative;
    }

    .code-box {
      flex: 1;
      max-width: 48px;
      aspect-ratio: 0.82;
      border-radius: 13px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 23px;
      color: #17140F;
    }

    .code-box.filled {
      background: #FFF9E9;
    }

    .hidden-code-input {
      position: absolute;
      inset: 0;
      opacity: 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }

    .perks-card {
      background: #0F7A5E;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px;
      color: #FFF;
    }

    .perk-item {
      display: flex;
      gap: 9px;
      align-items: flex-start;
      margin-top: 7px;
    }

    .perk-badge {
      width: 17px;
      height: 17px;
      border-radius: 6px;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      flex: none;
      margin-top: 1px;
    }

    .accepted-badge-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .checkmark-circle {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
    }

    .role-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .role-chip {
      border-radius: 14px;
      padding: 10px 13px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 800;
      min-height: 42px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background: #FFF;
      color: #17140F;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
    }

    .role-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translate(2px, 2px);
    }

    .error-banner {
      background: #FFE8E5;
      border: 2.5px solid #FF5A3C;
      border-radius: 16px;
      padding: 11px 14px;
      font-size: 12.5px;
      font-weight: 800;
      color: #C0260E;
      display: flex;
      align-items: center;
      gap: 8px;
      line-height: 1.4;
      margin-bottom: 4px;
    }
  `; }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribe = appState.subscribe(() => {
            this.view = appState.authView;
            this.requestUpdate();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.();
    }
    setView(nextView) {
        this.view = nextView;
        appState.setAuthView(nextView);
        this.errorMessage = '';
    }
    calculateStrength(pwd) {
        const t = appState.t.auth.signupStep1;
        if (!pwd || pwd.length < 6)
            return { label: t.weak, width: '25%', color: '#FF5A3C' };
        if (pwd.length >= 10 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
            return { label: t.strong, width: '100%', color: '#1FC99B' };
        }
        if (pwd.length >= 8) {
            return { label: t.good, width: '65%', color: '#FFCE2E' };
        }
        return { label: t.weak, width: '35%', color: '#FF5A3C' };
    }
    async handleLogin(e) {
        if (e)
            e.preventDefault();
        this.errorMessage = '';
        const t = appState.t.auth.errors;
        if (!this.email.trim()) {
            this.errorMessage = t.emailRequired;
            return;
        }
        if (!this.password) {
            this.errorMessage = t.passwordRequired;
            return;
        }
        this.isSubmitting = true;
        try {
            await appState.signIn({ email: this.email.trim(), password: this.password });
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: {
                    title: appState.currentLocale === 'ko' ? '환영합니다! 👋' : 'Welcome back! 👋',
                    sub: appState.currentHousehold?.name || 'Household',
                },
            }));
        }
        catch (err) {
            this.errorMessage = err.message || t.logInFailed;
        }
        finally {
            this.isSubmitting = false;
        }
    }
    handleGoToStep2(e) {
        if (e)
            e.preventDefault();
        this.errorMessage = '';
        const t = appState.t.auth.errors;
        if (!this.displayName.trim()) {
            this.errorMessage = t.yourNameRequired;
            return;
        }
        if (!this.email.trim()) {
            this.errorMessage = t.emailRequired;
            return;
        }
        if (!this.password || this.password.length < 6) {
            this.errorMessage = t.passwordTooShort;
            return;
        }
        this.setView('dogsetup');
    }
    async handleFinishSetup(e) {
        if (e)
            e.preventDefault();
        this.errorMessage = '';
        const t = appState.t.auth.errors;
        if (!this.dogName.trim()) {
            this.errorMessage = t.petNameRequired;
            return;
        }
        const finalHouseholdName = this.householdName.trim() || `${this.dogName.trim()} Household`;
        this.isSubmitting = true;
        try {
            await appState.signUp({
                email: this.email.trim(),
                password: this.password,
                displayName: this.displayName.trim(),
                mode: 'create',
                householdName: finalHouseholdName,
                pet: {
                    name: this.dogName.trim(),
                    species: 'dog',
                    size: this.setupSize,
                    avatarUrl: this.dogAvatar,
                },
                trackingPreferences: this.trackingPrefs,
            });
            // Save tracking prefs to local state
            Object.entries(this.trackingPrefs).forEach(([k, v]) => {
                appState.setTrackingPreference(k, v);
            });
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: {
                    title: appState.currentLocale === 'ko' ? '준비 완료! 🎉' : 'All set! 🎉',
                    sub: appState.currentLocale === 'ko' ? '다음 번 산책 때 주황색 버튼을 눌러보세요.' : 'Tap the orange button the next time he goes.',
                },
            }));
        }
        catch (err) {
            this.errorMessage = err.message || t.signUpFailed;
        }
        finally {
            this.isSubmitting = false;
        }
    }
    handleGoJoinDetails(e) {
        if (e)
            e.preventDefault();
        this.errorMessage = '';
        const t = appState.t.auth.errors;
        if (!this.joinCode.trim() || this.joinCode.trim().length < 4) {
            this.errorMessage = t.inviteCodeRequired;
            return;
        }
        this.setView('joindetails');
    }
    async handleJoinSubmit(e) {
        if (e)
            e.preventDefault();
        this.errorMessage = '';
        const t = appState.t.auth.errors;
        if (!this.displayName.trim()) {
            this.errorMessage = t.yourNameRequired;
            return;
        }
        if (!this.email.trim()) {
            this.errorMessage = t.emailRequired;
            return;
        }
        if (!this.password || this.password.length < 6) {
            this.errorMessage = t.passwordTooShort;
            return;
        }
        this.isSubmitting = true;
        try {
            await appState.signUp({
                email: this.email.trim(),
                password: this.password,
                displayName: this.displayName.trim(),
                mode: 'join',
                inviteCode: this.joinCode.trim().toUpperCase(),
                role: this.joinRole,
            });
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: {
                    title: appState.currentLocale === 'ko' ? `${this.joinRole}님, 환영합니다! 🎉` : `You're in, ${this.joinRole}! 🎉`,
                    sub: appState.currentHousehold?.name || 'Household',
                },
            }));
        }
        catch (err) {
            this.errorMessage = err.message || t.joinFailed;
        }
        finally {
            this.isSubmitting = false;
        }
    }
    render() {
        const tAuth = appState.t.auth;
        // ═════════════════════════════════════════════════════════════════════
        // 1. SIGN IN VIEW (Yellow Background #FFCE2E)
        // ═════════════════════════════════════════════════════════════════════
        if (this.view === 'signin') {
            return html `
        <div class="view-signin">
          <div class="logo-hero">
            <div class="brand-circle">
              <div class="p1"></div>
              <div class="p2"></div>
              <div class="p3"></div>
            </div>
            <div class="brand-title">${tAuth.welcomeTitle}</div>
            <div class="brand-subtitle">${tAuth.welcomeSubtitle}</div>
          </div>

          ${this.errorMessage ? html `<div class="error-banner">⚠️ ${this.errorMessage}</div>` : null}

          <form class="card" @submit=${(e) => this.handleLogin(e)}>
            <div>
              <label class="field-label">${tAuth.emailLabel}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${tAuth.emailPlaceholder}"
                .value=${this.email}
                @input=${(e) => (this.email = e.target.value)}
                required
              />
            </div>

            <div>
              <label class="field-label">${tAuth.passwordLabel}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword ? 'text' : 'password'}"
                  class="password-input"
                  placeholder="${tAuth.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${(e) => (this.password = e.target.value)}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${() => (this.showPassword = !this.showPassword)}
                >
                  ${this.showPassword ? tAuth.hide : tAuth.show}
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="btn-coral"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting ? tAuth.loggingIn : tAuth.logInBtn}
            </button>

            <div
              style="text-align: center; font-size: 12.5px; font-weight: 800; color: #6A6152; cursor: pointer; padding: 3px;"
              @click=${() => this.handleLogin()}
            >
              ${tAuth.forgotPassword}
            </div>
          </form>

          <div class="divider-row">
            <div class="divider-line"></div>
            <div class="divider-text">${tAuth.or}</div>
            <div class="divider-line"></div>
          </div>

          <div class="provider-btn" @click=${() => this.handleLogin()}>
            <div class="provider-dot"></div>
            <div class="provider-text">${tAuth.googleBtn}</div>
          </div>

          <div style="text-align: center; font-size: 13px; font-weight: 700; color: #7A5C00;">
            ${tAuth.newHere}
            <span
              style="color: #17140F; font-weight: 800; text-decoration: underline; cursor: pointer;"
              @click=${() => this.setView('signup')}
            >
              ${tAuth.makeAccount}
            </span>
          </div>

          <div
            style="text-align: center; font-size: 13px; font-weight: 800; color: #17140F; text-decoration: underline; cursor: pointer; padding: 2px;"
            @click=${() => this.setView('join')}
          >
            ${tAuth.gotInviteCode}
          </div>
        </div>
      `;
        }
        // ═════════════════════════════════════════════════════════════════════
        // 2. SIGN UP STEP 1 (Cream Background #FFFBF2)
        // ═════════════════════════════════════════════════════════════════════
        if (this.view === 'signup') {
            const step1 = tAuth.signupStep1;
            const strength = this.calculateStrength(this.password);
            return html `
        <div class="view-signup">
          <div class="back-btn" @click=${() => this.setView('signin')}>
            ‹ ${step1.back}
          </div>

          <div class="step-bar-row">
            <div class="step-pill" style="background: #FFCE2E;"></div>
            <div class="step-pill" style="background: #FFF;"></div>
            <div class="step-label">${step1.stepCount}</div>
          </div>

          <div>
            <div class="section-headline">${step1.title}</div>
            <div class="section-subtext">${step1.subtitle}</div>
          </div>

          ${this.errorMessage ? html `<div class="error-banner">⚠️ ${this.errorMessage}</div>` : null}

          <form class="card" @submit=${(e) => this.handleGoToStep2(e)}>
            <div>
              <label class="field-label">${step1.yourName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${step1.yourNamePlaceholder}"
                .value=${this.displayName}
                @input=${(e) => (this.displayName = e.target.value)}
                required
              />
            </div>

            <div>
              <label class="field-label">${step1.email}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${step1.emailPlaceholder}"
                .value=${this.email}
                @input=${(e) => (this.email = e.target.value)}
                required
              />
            </div>

            <div>
              <label class="field-label">${step1.password}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword ? 'text' : 'password'}"
                  class="password-input"
                  placeholder="${step1.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${(e) => (this.password = e.target.value)}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${() => (this.showPassword = !this.showPassword)}
                >
                  ${this.showPassword ? tAuth.hide : tAuth.show}
                </span>
              </div>
              <div class="strength-row">
                <div class="strength-track">
                  <div
                    class="strength-fill"
                    style="width: ${strength.width}; background: ${strength.color};"
                  ></div>
                </div>
                <div class="strength-text">${strength.label}</div>
              </div>
            </div>

            <button type="submit" class="btn-coral" style="margin-top: 4px;">
              ${step1.nextTheDog}
            </button>
          </form>

          <div style="font-size: 11.5px; font-weight: 600; color: #9A9080; text-align: center; line-height: 1.5;">
            ${step1.disclaimer}
          </div>
        </div>
      `;
        }
        // ═════════════════════════════════════════════════════════════════════
        // 3. SIGN UP STEP 2: DOG SETUP (Cream Background #FFFBF2)
        // ═════════════════════════════════════════════════════════════════════
        if (this.view === 'dogsetup') {
            const step2 = tAuth.signupStep2;
            const sizeList = ['S', 'M', 'L', 'XL'];
            return html `
        <div class="view-dogsetup">
          <div class="back-btn" @click=${() => this.setView('signup')}>
            ‹ ${step2.back}
          </div>

          <div class="step-bar-row">
            <div class="step-pill" style="background: #1FC99B;"></div>
            <div class="step-pill" style="background: #FFCE2E;"></div>
            <div class="step-label">${step2.stepCount}</div>
          </div>

          <div>
            <div class="section-headline">${step2.title}</div>
            <div class="section-subtext">${step2.subtitle}</div>
          </div>

          ${this.errorMessage ? html `<div class="error-banner">⚠️ ${this.errorMessage}</div>` : null}

          <form class="card" @submit=${(e) => this.handleFinishSetup(e)}>
            <div style="display: flex; gap: 14px; align-items: center;">
              <div
                class="photo-upload-circle"
                @click=${() => appState.openPhotoModal({
                target: 'pet',
                currentAvatar: this.dogAvatar,
                title: 'Pick Dog Avatar',
            })}
              >
                ${this.dogAvatar
                ? html `<img src="${this.dogAvatar}" alt="Dog Avatar" />`
                : html `
                      <div style="font-size: 20px; font-weight: 800; color: #8A7F68;">+</div>
                      <div style="font-size: 9px; font-weight: 800; color: #8A7F68;">${step2.photo}</div>
                    `}
              </div>
              <div style="flex: 1; min-width: 0;">
                <label class="field-label">${step2.name}</label>
                <input
                  type="text"
                  class="input-box"
                  style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-size: 19px; letter-spacing: -0.5px;"
                  placeholder="${step2.namePlaceholder}"
                  .value=${this.dogName}
                  @input=${(e) => (this.dogName = e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label class="field-label">${step2.householdName}</label>
              <input
                type="text"
                class="input-box"
                placeholder="${step2.householdNamePlaceholder}"
                .value=${this.householdName}
                @input=${(e) => (this.householdName = e.target.value)}
              />
              <div style="font-size: 11px; font-weight: 600; color: #9A9080; margin-top: 6px; line-height: 1.4;">
                ${step2.householdHelp}
              </div>
            </div>

            <div>
              <label class="field-label">${step2.size}</label>
              <div class="size-grid">
                ${sizeList.map((sz) => {
                const szData = step2.sizes[sz];
                const isSelected = this.setupSize === sz;
                return html `
                    <div
                      class="size-tile ${isSelected ? 'active' : ''}"
                      @click=${() => (this.setupSize = sz)}
                    >
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">${szData.label}</div>
                      <div style="font-size: 9.5px; font-weight: 700; color: #6A6152;">${szData.kg}</div>
                    </div>
                  `;
            })}
              </div>
            </div>

            <div>
              <label class="field-label">${step2.whatTrack}</label>
              <div class="track-chips-grid">
                ${Object.entries(step2.trackingOptions).map(([key, label]) => {
                const isChecked = !!this.trackingPrefs[key];
                return html `
                    <div
                      class="track-chip ${isChecked ? 'active' : ''}"
                      @click=${() => {
                    this.trackingPrefs = {
                        ...this.trackingPrefs,
                        [key]: !this.trackingPrefs[key],
                    };
                }}
                    >
                      <div class="track-dot"></div>
                      <span>${label}</span>
                    </div>
                  `;
            })}
              </div>
            </div>

            <button
              type="submit"
              class="btn-green"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting ? tAuth.signingUp : step2.startTracking}
            </button>
          </form>

          <div
            style="text-align: center; font-size: 12.5px; font-weight: 700; color: #6A6152; cursor: pointer; padding: 2px; line-height: 1.45;"
            @click=${() => appState.setActiveTab('import')}
          >
            ${step2.alreadyTracking} <span style="text-decoration: underline;">${step2.importHistory}</span>
          </div>
        </div>
      `;
        }
        // ═════════════════════════════════════════════════════════════════════
        // 4. JOIN STEP 1: ENTER CODE (Mint Green Background #1FC99B)
        // ═════════════════════════════════════════════════════════════════════
        if (this.view === 'join') {
            const join1 = tAuth.joinStep1;
            const codeChars = (this.joinCode.toUpperCase() + '      ').slice(0, 6).split('');
            return html `
        <div class="view-join">
          <div class="back-btn" @click=${() => this.setView('signin')}>
            ‹ ${join1.back}
          </div>

          <div>
            <div class="section-headline">${join1.title}</div>
            <div class="section-subtext-mint">${join1.subtitle}</div>
          </div>

          ${this.errorMessage ? html `<div class="error-banner">⚠️ ${this.errorMessage}</div>` : null}

          <form class="card" @submit=${(e) => this.handleGoJoinDetails(e)}>
            <div style="font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase; text-align: center;">
              ${join1.enterCode}
            </div>

            <div class="code-boxes-row">
              ${codeChars.map((ch) => html `
                <div class="code-box ${ch.trim() ? 'filled' : ''}">
                  ${ch.trim()}
                </div>
              `)}
              <input
                type="text"
                maxlength="6"
                class="hidden-code-input"
                .value=${this.joinCode}
                @input=${(e) => (this.joinCode = e.target.value.toUpperCase())}
                autofocus
              />
            </div>

            <button type="submit" class="btn-coral" style="margin-top: 10px;">
              ${join1.continueBtn}
            </button>
          </form>

          <div class="perks-card">
            <div style="font-size: 13.5px; font-weight: 800; color: #FFF;">${join1.perksTitle}</div>
            <div style="display: flex; flex-direction: column; gap: 7px; margin-top: 9px;">
              ${join1.perks.map((perk) => html `
                <div class="perk-item">
                  <div class="perk-badge"></div>
                  <div style="font-size: 12.5px; font-weight: 600; color: #CFF0E6; line-height: 1.4; flex: 1;">
                    ${perk}
                  </div>
                </div>
              `)}
            </div>
          </div>
        </div>
      `;
        }
        // ═════════════════════════════════════════════════════════════════════
        // 5. JOIN STEP 2: DETAILS (Mint Green Background #1FC99B)
        // ═════════════════════════════════════════════════════════════════════
        if (this.view === 'joindetails') {
            const join2 = tAuth.joinStep2;
            const roleChips = [
                this.displayName || 'Dan',
                `${this.displayName || 'Dan'} the walker`,
                `${this.displayName ? this.displayName + ' W.' : 'Dan W.'}`,
                'The walker',
            ];
            return html `
        <div class="view-joindetails">
          <div class="back-btn" @click=${() => this.setView('join')}>
            ‹ ${join2.back}
          </div>

          <div class="accepted-badge-card">
            <div class="checkmark-circle">✓</div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.4px; color: #9A9080; text-transform: uppercase;">
                ${join2.codeAccepted}
              </div>
              <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 18px; color: #17140F; letter-spacing: -0.5px; line-height: 1.15; margin-top: 1px;">
                ${this.householdName || 'Household'}
              </div>
              <div style="font-size: 11.5px; font-weight: 700; color: #6A6152; margin-top: 1px;">
                ${join2.summarySubtitle('3 people', this.joinRole)}
              </div>
            </div>
          </div>

          <div>
            <div class="section-headline">${join2.title}</div>
            <div class="section-subtext-mint">${join2.subtitle}</div>
          </div>

          ${this.errorMessage ? html `<div class="error-banner">⚠️ ${this.errorMessage}</div>` : null}

          <form class="card" @submit=${(e) => this.handleJoinSubmit(e)}>
            <div style="display: flex; gap: 13px; align-items: flex-end;">
              <div
                class="photo-upload-circle"
                style="width: 64px; height: 64px;"
                @click=${() => appState.openPhotoModal({
                target: 'user',
                currentAvatar: this.userAvatar,
                title: 'Pick Profile Photo',
            })}
              >
                ${this.userAvatar
                ? html `<img src="${this.userAvatar}" alt="User Avatar" />`
                : html `
                      <div style="font-size: 18px; font-weight: 800; color: #8A7F68;">+</div>
                      <div style="font-size: 8.5px; font-weight: 800; color: #8A7F68;">photo</div>
                    `}
              </div>
              <div style="flex: 1; min-width: 0;">
                <label class="field-label">${join2.yourName}</label>
                <input
                  type="text"
                  class="input-box"
                  placeholder="${join2.yourNamePlaceholder}"
                  .value=${this.displayName}
                  @input=${(e) => (this.displayName = e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label class="field-label">${join2.email}</label>
              <input
                type="email"
                class="input-box"
                placeholder="${join2.emailPlaceholder}"
                .value=${this.email}
                @input=${(e) => (this.email = e.target.value)}
                required
              />
            </div>

            <div>
              <label class="field-label">${join2.password}</label>
              <div class="password-wrapper">
                <input
                  type="${this.showPassword ? 'text' : 'password'}"
                  class="password-input"
                  placeholder="${join2.passwordPlaceholder}"
                  .value=${this.password}
                  @input=${(e) => (this.password = e.target.value)}
                  required
                />
                <span
                  class="show-hide-btn"
                  @click=${() => (this.showPassword = !this.showPassword)}
                >
                  ${this.showPassword ? tAuth.hide : tAuth.show}
                </span>
              </div>
            </div>

            <div>
              <label class="field-label">${join2.howTheySeeYou}</label>
              <div class="role-chips-row">
                ${roleChips.map((rName) => {
                const isSelected = this.joinRole === rName;
                return html `
                    <div
                      class="role-chip ${isSelected ? 'active' : ''}"
                      @click=${() => (this.joinRole = rName)}
                    >
                      <span>${rName}</span>
                    </div>
                  `;
            })}
              </div>
            </div>

            <button
              type="submit"
              class="btn-coral"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting ? tAuth.signingUp : join2.joinHouseholdBtn}
            </button>
          </form>

          <div style="font-size: 11.5px; font-weight: 600; color: #0A5A45; text-align: center; line-height: 1.5;">
            ${join2.footerDisclaimer}
          </div>
        </div>
      `;
        }
        return html ``;
    }
};
__decorate([
    state()
], DootyAuth.prototype, "view", void 0);
__decorate([
    state()
], DootyAuth.prototype, "email", void 0);
__decorate([
    state()
], DootyAuth.prototype, "password", void 0);
__decorate([
    state()
], DootyAuth.prototype, "showPassword", void 0);
__decorate([
    state()
], DootyAuth.prototype, "displayName", void 0);
__decorate([
    state()
], DootyAuth.prototype, "userAvatar", void 0);
__decorate([
    state()
], DootyAuth.prototype, "dogName", void 0);
__decorate([
    state()
], DootyAuth.prototype, "householdName", void 0);
__decorate([
    state()
], DootyAuth.prototype, "dogAvatar", void 0);
__decorate([
    state()
], DootyAuth.prototype, "setupSize", void 0);
__decorate([
    state()
], DootyAuth.prototype, "trackingPrefs", void 0);
__decorate([
    state()
], DootyAuth.prototype, "joinCode", void 0);
__decorate([
    state()
], DootyAuth.prototype, "joinRole", void 0);
__decorate([
    state()
], DootyAuth.prototype, "errorMessage", void 0);
__decorate([
    state()
], DootyAuth.prototype, "isSubmitting", void 0);
DootyAuth = __decorate([
    customElement('dooty-auth')
], DootyAuth);
export { DootyAuth };
//# sourceMappingURL=dooty-auth.js.map