import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-invite')
export class DootyInvite extends LitElement {
  @state() private selectedRole: 'Full member' | 'Log only' = 'Full member';
  @state() private currentCode: string = 'K7M4Q9';
  @state() private isGenerating: boolean = false;
  private unsubscribe?: () => void;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      box-sizing: border-box;
      padding: 52px 18px 140px;
      background: #FFFBF2;
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .invite-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

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

    .section-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
      color: #9A9080;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    .headline {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1.1px;
      line-height: 1.08;
      margin-top: 2px;
    }

    .subline {
      font-size: 13px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 4px;
      line-height: 1.45;
    }

    .roles-row {
      display: flex;
      gap: 9px;
    }

    .role-card {
      flex: 1;
      border-radius: 16px;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      padding: 12px 13px;
      cursor: pointer;
      min-height: 74px;
      box-sizing: border-box;
      user-select: none;
      transition: all 0.1s ease;
    }

    .role-card.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translate(2px, 2px);
    }

    .role-name {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
    }

    .role-sub {
      font-size: 11px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 3px;
      line-height: 1.35;
    }

    /* Yellow Code Card */
    .yellow-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 18px;
      box-shadow: 5px 5px 0 #17140F;
    }

    .yellow-card-label {
      font-size: 10.5px;
      font-weight: 800;
      letter-spacing: 1.4px;
      color: #7A5C00;
      text-transform: uppercase;
      text-align: center;
    }

    .code-grid {
      display: flex;
      gap: 6px;
      margin-top: 11px;
      justify-content: center;
    }

    .code-char-box {
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
      box-shadow: 2px 2px 0 #17140F;
    }

    .expiry-note {
      font-size: 11.5px;
      font-weight: 700;
      color: #7A5C00;
      text-align: center;
      margin-top: 10px;
    }

    .action-btns-row {
      display: flex;
      gap: 9px;
      margin-top: 14px;
    }

    .btn-copy {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 13px;
      text-align: center;
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-copy:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .btn-share {
      flex: 1;
      background: #17140F;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 13px;
      text-align: center;
      font-size: 13.5px;
      font-weight: 800;
      color: #FFCE2E;
      cursor: pointer;
      box-shadow: 3px 3px 0 #FF5A3C;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-share:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #FF5A3C;
    }

    /* Pending Card */
    .pending-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 5px 15px;
      box-shadow: 4px 4px 0 #17140F;
    }

    .pending-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
      border-bottom: 2px solid #F0E7D3;
    }

    .pending-code-icon {
      width: 38px;
      height: 34px;
      border-radius: 12px;
      border: 2.5px solid #17140F;
      background: #FFF9E9;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 11px;
      color: #17140F;
    }

    .pending-revoke {
      font-size: 12px;
      font-weight: 800;
      color: #B93B22;
      cursor: pointer;
      flex: none;
      user-select: none;
      padding: 4px;
    }

    .pending-revoke:hover {
      text-decoration: underline;
    }

    .pending-footer-note {
      padding: 12px 0;
      font-size: 11.5px;
      font-weight: 600;
      color: #9A9080;
      line-height: 1.45;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = appState.subscribe(() => this.requestUpdate());
    this.generateNewCode();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private async generateNewCode() {
    this.isGenerating = true;
    try {
      const code = await appState.createInvite(this.selectedRole);
      if (code) {
        this.currentCode = code;
      }
    } finally {
      this.isGenerating = false;
    }
  }

  private handleCopy() {
    const t = appState.t.invite;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.currentCode);
    }
    this.dispatchEvent(
      new CustomEvent('dooty-toast', {
        bubbles: true,
        composed: true,
        detail: {
          title: t.codeCopied,
          sub: t.codeCopiedSub(this.currentCode),
        },
      })
    );
  }

  private handleShare() {
    const t = appState.t.invite;
    const shareText = `Join my household "${appState.currentHousehold?.name || 'Dooty'}" with invite code: ${this.currentCode}`;
    if (navigator.share) {
      navigator.share({
        title: 'Dooty Invite',
        text: shareText,
        url: window.location.origin,
      }).catch(() => this.handleCopy());
    } else {
      this.handleCopy();
    }
  }

  private async handleRevoke(code: string) {
    const t = appState.t.invite;
    await appState.revokeInvite(code);
    this.dispatchEvent(
      new CustomEvent('dooty-toast', {
        bubbles: true,
        composed: true,
        detail: {
          title: t.inviteRevoked,
          sub: t.inviteRevokedSub(code),
        },
      })
    );
  }

  render() {
    const t = appState.t.invite;
    const householdName = appState.currentHousehold?.name || 'Household';
    const codeChars = (this.currentCode + '      ').slice(0, 6).split('');
    const pendingList = appState.pendingInvites || [];

    return html`
      <div class="invite-container">
        <div class="back-btn" @click=${() => appState.setActiveTab('settings')}>
          ‹ ${t.back}
        </div>

        <div>
          <div class="section-label">${t.title}</div>
          <div class="headline">${householdName}</div>
          <div class="subline">${t.subtitle}</div>
        </div>

        <div>
          <div class="section-label" style="margin-bottom: 9px;">${t.theyJoinAs}</div>
          <div class="roles-row">
            <div
              class="role-card ${this.selectedRole === 'Full member' ? 'active' : ''}"
              @click=${() => {
                this.selectedRole = 'Full member';
                this.generateNewCode();
              }}
            >
              <div class="role-name">${t.roles.full.name}</div>
              <div class="role-sub">${t.roles.full.sub}</div>
            </div>

            <div
              class="role-card ${this.selectedRole === 'Log only' ? 'active' : ''}"
              @click=${() => {
                this.selectedRole = 'Log only';
                this.generateNewCode();
              }}
            >
              <div class="role-name">${t.roles.logOnly.name}</div>
              <div class="role-sub">${t.roles.logOnly.sub}</div>
            </div>
          </div>
        </div>

        <div class="yellow-card">
          <div class="yellow-card-label">${t.inviteCode}</div>
          <div class="code-grid">
            ${codeChars.map((ch) => html`
              <div class="code-char-box">${ch.trim()}</div>
            `)}
          </div>
          <div class="expiry-note">${t.expiresIn7Days}</div>
          <div class="action-btns-row">
            <div class="btn-copy" @click=${() => this.handleCopy()}>
              ${t.copyCode}
            </div>
            <div class="btn-share" @click=${() => this.handleShare()}>
              ${t.shareLink}
            </div>
          </div>
        </div>

        <div>
          <div class="section-label" style="margin: 2px 0 9px 4px;">${t.pending}</div>
          <div class="pending-card">
            ${pendingList.length === 0
              ? html`
                  <div style="padding: 14px 0; font-size: 13px; font-weight: 700; color: #9A9080; text-align: center;">
                    No pending invites
                  </div>
                `
              : pendingList.map((p) => html`
                  <div class="pending-row">
                    <div class="pending-code-icon">${p.code}</div>
                    <div style="flex: 1; min-width: 0;">
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">${p.role}</div>
                      <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">${p.when}</div>
                    </div>
                    <div class="pending-revoke" @click=${() => this.handleRevoke(p.code)}>
                      ${t.revoke}
                    </div>
                  </div>
                `)}
            <div class="pending-footer-note">
              ${t.pendingHelp}
            </div>
          </div>
        </div>

        <div style="height: 40px;"></div>
      </div>
    `;
  }
}
