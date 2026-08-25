import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-settings')
export class DootySettings extends LitElement {
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

    .settings-container {
      display: flex;
      flex-direction: column;
      gap: 14px;
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

    .page-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1.1;
    }

    /* User Profile Card */
    .user-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .user-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 17px;
      color: #17140F;
      flex: none;
      overflow: hidden;
      cursor: pointer;
    }

    .user-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .section-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
      color: #9A9080;
      text-transform: uppercase;
      margin: 2px 0 9px 4px;
    }

    /* Language Buttons */
    .lang-row {
      display: flex;
      gap: 9px;
    }

    .lang-btn {
      flex: 1;
      min-height: 50px;
      border-radius: 18px;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      user-select: none;
      transition: all 0.1s ease;
    }

    .lang-btn.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translate(2px, 2px);
    }

    .lang-dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      flex: none;
    }

    .lang-btn.active .lang-dot {
      background: #FF5A3C;
    }

    /* Household Card */
    .household-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px;
      box-shadow: 4px 4px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .house-icon-badge {
      width: 48px;
      height: 48px;
      border-radius: 16px;
      border: 3px solid #17140F;
      background: #FFF;
      flex: none;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 9px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
    }

    .house-roof {
      position: absolute;
      top: 8px;
      left: 8px;
      right: 8px;
      height: 13px;
      background: #FF5A3C;
      border: 2.5px solid #17140F;
      border-radius: 3px 3px 0 0;
      box-sizing: border-box;
    }

    .house-door {
      width: 12px;
      height: 14px;
      border: 2.5px solid #17140F;
      border-bottom: none;
      border-radius: 2px 2px 0 0;
      background: #FFCE2E;
      box-sizing: border-box;
    }

    .btn-invite-badge {
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 7px 11px;
      font-size: 12px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-invite-badge:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    /* List Card Blocks */
    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 5px 15px;
      box-shadow: 4px 4px 0 #17140F;
    }

    .list-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
      border-bottom: 2px solid #F0E7D3;
    }

    .list-row:last-child {
      border-bottom: none;
    }

    .member-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      color: #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 13px;
      flex: none;
      overflow: hidden;
    }

    .member-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .pet-avatar-circle {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: repeating-linear-gradient(45deg, #F0E7D3 0 5px, #E3D8BE 5px 10px);
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 7px;
      font-weight: 800;
      color: #8A7F68;
      text-align: center;
      line-height: 1.15;
      overflow: hidden;
      cursor: pointer;
    }

    .pet-avatar-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .add-action-link {
      padding: 13px 0;
      font-size: 13.5px;
      font-weight: 800;
      color: #2B5BE8;
      cursor: pointer;
      user-select: none;
    }

    .add-action-link:hover {
      text-decoration: underline;
    }

    /* Toggle Switches */
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 0;
      border-bottom: 2px solid #F0E7D3;
    }

    .toggle-row:last-child {
      border-bottom: none;
    }

    .switch-track {
      width: 50px;
      height: 30px;
      border-radius: 30px;
      flex: none;
      cursor: pointer;
      padding: 2px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border: 2.5px solid #17140F;
      transition: background 0.15s ease, justify-content 0.15s ease;
    }

    .switch-track.on {
      background: #1FC99B;
      justify-content: flex-end;
    }

    .switch-track.off {
      background: #E3D8BE;
      justify-content: flex-start;
    }

    .switch-thumb {
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background: #FFF;
      border: 2px solid #17140F;
      box-sizing: border-box;
    }

    /* Action Tiles */
    .data-tiles-column {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .data-tile {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 13px 15px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      align-items: center;
      gap: 12px;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .data-tile:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .data-tile:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .tile-icon {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      border: 2.5px solid #17140F;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: 800;
      color: #17140F;
    }

    .btn-signout {
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 14px 16px;
      font-size: 13.5px;
      font-weight: 800;
      color: #FFF;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      text-align: center;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .btn-signout:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .version-footer {
      text-align: center;
      font-size: 10.5px;
      font-weight: 700;
      color: #B5AB99;
      padding-top: 6px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = appState.subscribe(() => this.requestUpdate());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private setLanguage(locale: 'en' | 'ko') {
    appState.setLocale(locale);
    if (locale === 'ko') {
      document.body.classList.add('lang-ko');
    } else {
      document.body.classList.remove('lang-ko');
    }
  }

  private handleExportCsv() {
    const t = appState.t.settings;
    appState.exportEventsCsv();
    this.dispatchEvent(
      new CustomEvent('dooty-toast', {
        bubbles: true,
        composed: true,
        detail: {
          title: appState.currentLocale === 'ko' ? 'CSV 내보내기 완료' : 'CSV Export Complete',
          sub: appState.currentLocale === 'ko' ? '모든 기록이 다운로드되었습니다.' : 'All event logs saved to your device.',
        },
      })
    );
  }

  private handleSignOut() {
    appState.signOut();
    this.dispatchEvent(
      new CustomEvent('dooty-toast', {
        bubbles: true,
        composed: true,
        detail: {
          title: appState.currentLocale === 'ko' ? '로그아웃되었습니다' : 'Signed out',
          sub: appState.currentLocale === 'ko' ? '다음에 또 만나요!' : 'See you on the next walk!',
        },
      })
    );
  }

  render() {
    const isKo = appState.currentLocale === 'ko';
    const t = appState.t.settings;
    const user = appState.currentUser;
    const household = appState.currentHousehold;
    const members = household?.members || [
      { id: '1', displayName: user?.displayName || 'Sam (you)', role: 'owner', avatarUrl: appState.userAvatar },
      { id: '2', displayName: 'Priya', role: 'member', avatarUrl: '' },
      { id: '3', displayName: 'Dan the walker', role: 'member', avatarUrl: '' },
    ];
    const pets = appState.pets?.length > 0 ? appState.pets : (appState.currentPet ? [appState.currentPet] : [
      { id: 'p1', name: 'Nacho', breed: 'Beagle mix · 5 yrs · 14.2 kg', species: 'dog', householdId: household?.id || '1', avatarUrl: '', createdAt: new Date().toISOString() }
    ]);
    const totalLogs = appState.events?.length || 1204;

    // User initials
    const userInitials = (user?.displayName || 'Sam')
      .split(' ')
      .map((s) => s[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    return html`
      <div class="settings-container">
        <!-- Back button -->
        <div class="back-btn" @click=${() => appState.setActiveTab('today')}>
          ‹ ${t.back}
        </div>

        <!-- Page Title -->
        <div class="page-title">${t.title}</div>

        <!-- User Profile Card -->
        <div class="user-card">
          <div
            class="user-avatar"
            @click=${() =>
              appState.openPhotoModal({
                target: 'user',
                currentAvatar: appState.userAvatar,
                title: 'Pick Profile Photo',
              })}
          >
            ${appState.userAvatar
              ? html`<img src="${appState.userAvatar}" alt="User Avatar" />`
              : html`${userInitials}`}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 14px; font-weight: 800; color: #17140F;">
              ${user?.email || 'sam@jellyfish.dog'}
            </div>
            <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px;">
              ${t.signedInPlan}
            </div>
          </div>
        </div>

        <!-- Language Selector -->
        <div>
          <div class="section-label">${t.language}</div>
          <div class="lang-row">
            <div
              class="lang-btn ${!isKo ? 'active' : ''}"
              @click=${() => this.setLanguage('en')}
            >
              <div class="lang-dot"></div>
              ${t.english}
            </div>
            <div
              class="lang-btn ${isKo ? 'active' : ''}"
              @click=${() => this.setLanguage('ko')}
            >
              <div class="lang-dot"></div>
              ${t.korean}
            </div>
          </div>
        </div>

        <!-- Analytics Timeframe Preference -->
        <div>
          <div class="section-label">${isKo ? '기본 분석 기간' : 'Default Analytics Range'}</div>
          <div class="lang-row">
            <div
              class="lang-btn ${appState.analyticsTimeRange === '7d' ? 'active' : ''}"
              @click=${() => appState.setAnalyticsTimeRange('7d')}
            >
              7D
            </div>
            <div
              class="lang-btn ${appState.analyticsTimeRange === '30d' ? 'active' : ''}"
              @click=${() => appState.setAnalyticsTimeRange('30d')}
            >
              30D
            </div>
            <div
              class="lang-btn ${appState.analyticsTimeRange === '1y' ? 'active' : ''}"
              @click=${() => appState.setAnalyticsTimeRange('1y')}
            >
              1Y
            </div>
            <div
              class="lang-btn ${appState.analyticsTimeRange === 'all' ? 'active' : ''}"
              @click=${() => appState.setAnalyticsTimeRange('all')}
            >
              ${isKo ? '전체' : 'ALL'}
            </div>
          </div>
        </div>

        <!-- Household Banner Card -->
        <div class="household-card">
          <div class="house-icon-badge">
            <div class="house-roof"></div>
            <div class="house-door"></div>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.4px; color: #7A5C00; text-transform: uppercase;">
              ${t.household}
            </div>
            <div style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 20px; color: #17140F; letter-spacing: -0.6px; line-height: 1.15; margin-top: 1px;">
              ${household?.name || 'The Nacho Household'}
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: #7A5C00; margin-top: 1px;">
              ${t.householdCount(members.length, pets.length)}
            </div>
          </div>
          <div
            class="btn-invite-badge"
            @click=${() => appState.setActiveTab('invite')}
          >
            ${t.invite}
          </div>
        </div>

        <!-- People Section -->
        <div>
          <div class="section-label">${t.people}</div>
          <div class="card-block">
            ${members.map((m, idx) => {
              const bgColors = ['#FFCE2E', '#1FC99B', '#BFD0FF', '#FF9A3C'];
              const initial = (m.displayName || 'Member')[0].toUpperCase();
              const memberLogs = idx === 0 ? Math.round(totalLogs * 0.75) : Math.round(totalLogs * 0.2);

              return html`
                <div class="list-row">
                  <div
                    class="member-avatar"
                    style="background: ${bgColors[idx % bgColors.length]};"
                    @click=${() =>
                      appState.openPhotoModal({
                        target: 'member',
                        targetId: m.id,
                        currentAvatar: m.avatarUrl,
                        title: `Pick Photo for ${m.displayName}`,
                      })}
                  >
                    ${m.avatarUrl
                      ? html`<img src="${m.avatarUrl}" alt="Avatar" />`
                      : html`${initial}`}
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                      ${m.displayName}
                    </div>
                    <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                      ${m.role === 'owner' ? (isKo ? '소유자' : 'Owner') : (isKo ? '가족 구성원' : 'Household')}
                    </div>
                  </div>
                  <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                    ${memberLogs} ${t.logsUnit}
                  </div>
                </div>
              `;
            })}
            <div
              class="add-action-link"
              @click=${() => appState.setActiveTab('invite')}
            >
              ${t.inviteSomeone}
            </div>
          </div>
        </div>

        <!-- Pets Section -->
        <div>
          <div class="section-label">${t.pets}</div>
          <div class="card-block">
            ${pets.map((p) => html`
              <div
                class="list-row"
                style="cursor: pointer;"
                @click=${() => appState.setActiveTab('dog')}
              >
                <div
                  class="pet-avatar-circle"
                  @click=${(e: Event) => {
                    e.stopPropagation();
                    appState.openPhotoModal({
                      target: 'pet',
                      targetId: p.id,
                      currentAvatar: p.avatarUrl,
                      title: `Pick Photo for ${p.name}`,
                    });
                  }}
                >
                  ${p.avatarUrl
                    ? html`<img src="${p.avatarUrl}" alt="${p.name}" />`
                    : html`dog<br />pic`}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                    ${p.name}
                  </div>
                  <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                    ${p.breed || (isKo ? '비글 믹스 · 5살 · 14.2 kg' : 'Beagle mix · 5 yrs · 14.2 kg')}
                  </div>
                </div>
                <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                  ${totalLogs} ${t.logsUnit}
                </div>
              </div>
            `)}
            <div
              class="add-action-link"
              @click=${() =>
                appState.openPhotoModal({
                  target: 'pet',
                  title: 'Add New Pet Profile',
                })}
            >
              ${t.addPet}
            </div>
          </div>
        </div>

        <!-- Nudges Section -->
        <div>
          <div class="section-label">${t.nudges}</div>
          <div class="card-block">
            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.walkReminders}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${t.walkRemindersSub}
                </div>
              </div>
              <div
                class="switch-track ${appState.nudges.push ? 'on' : 'off'}"
                @click=${() => appState.setNudgePreference('push', !appState.nudges.push)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.weeklyDigest}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${t.weeklyDigestSub}
                </div>
              </div>
              <div
                class="switch-track ${appState.nudges.weekly ? 'on' : 'off'}"
                @click=${() => appState.setNudgePreference('weekly', !appState.nudges.weekly)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.unusualGap}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${t.unusualGapSub}
                </div>
              </div>
              <div
                class="switch-track ${appState.nudges.gap ? 'on' : 'off'}"
                @click=${() => appState.setNudgePreference('gap', !appState.nudges.gap)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>

            <div class="toggle-row">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.vetShare}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.35; margin-top: 1px;">
                  ${t.vetShareSub}
                </div>
              </div>
              <div
                class="switch-track ${appState.nudges.vet ? 'on' : 'off'}"
                @click=${() => appState.setNudgePreference('vet', !appState.nudges.vet)}
              >
                <div class="switch-thumb"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Your Data Section -->
        <div>
          <div class="section-label">${t.yourData}</div>
          <div class="data-tiles-column">
            <div class="data-tile" @click=${() => appState.setActiveTab('import')}>
              <div class="tile-icon" style="background: #1FC99B;">↓</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.importCsv}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${t.importCsvSub}
                </div>
              </div>
            </div>

            <div class="data-tile" @click=${() => this.handleExportCsv()}>
              <div class="tile-icon" style="background: #BFD0FF;">↑</div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                  ${t.exportCsv}
                </div>
                <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px; line-height: 1.35;">
                  ${t.exportCsvSub}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sign Out Button -->
        <div class="btn-signout" @click=${() => this.handleSignOut()}>
          ${t.signOut}
        </div>

        <!-- Version Tag -->
        <div class="version-footer">
          ${t.version}
        </div>

        <div style="height: 40px;"></div>
      </div>
    `;
  }
}
