import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-pet-switcher')
export class DootyPetSwitcher extends LitElement {
  private unsubscribe?: () => void;

  static styles = css`
    :host {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.5);
      z-index: 150;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      animation: tb-scrim 0.2s ease both;
    }

    .modal-sheet {
      position: relative;
      background: #FFFBF2;
      border-top: 3px solid #17140F;
      border-radius: 30px 30px 0 0;
      padding: 18px 18px 34px;
      display: flex;
      flex-direction: column;
      gap: 13px;
      max-height: 78vh;
      box-sizing: border-box;
      animation: tb-sheet 0.25s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .sheet-header {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .sheet-title-area {
      flex: 1;
      min-width: 0;
    }

    .sheet-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 23px;
      color: #17140F;
      letter-spacing: -0.8px;
      line-height: 1.1;
    }

    .sheet-sub {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .close-btn {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .close-btn:active {
      transform: scale(0.965);
    }

    .pets-list {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 3px 1px 1px;
    }

    .pet-card {
      position: relative;
      display: flex;
      align-items: stretch;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      box-shadow: 3px 3px 0 #17140F;
      overflow: hidden;
      box-sizing: border-box;
    }

    .pet-card.active {
      background: #FFF9E9;
      box-shadow: 4px 4px 0 #17140F;
    }

    .active-bar {
      position: absolute;
      left: -1px;
      top: 14px;
      bottom: 14px;
      width: 7px;
      background: #FF5A3C;
      border-right: 3px solid #17140F;
      border-radius: 0 5px 5px 0;
    }

    .pet-card-main {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 12px 13px 14px;
      cursor: pointer;
      user-select: none;
      transition: opacity 0.13s ease;
    }

    .pet-card.active .pet-card-main {
      padding-left: 20px;
    }

    .pet-card-main:active {
      opacity: 0.6;
    }

    .pet-avatar-circle {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #17140F;
    }

    .pet-info {
      flex: 1;
      min-width: 0;
    }

    .name-row {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .pet-name {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      color: #17140F;
      letter-spacing: -0.4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .on-screen-tag {
      flex: none;
      background: #17140F;
      border-radius: 8px;
      padding: 2px 7px;
      font-size: 8.5px;
      font-weight: 800;
      color: #FFCE2E;
      letter-spacing: 0.9px;
    }

    .pet-today-line {
      font-size: 11.5px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 2px;
    }

    .pet-meta-line {
      font-size: 10.5px;
      font-weight: 600;
      color: #9A9080;
      margin-top: 1px;
    }

    .page-btn {
      flex: none;
      width: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      border-left: 3px solid #17140F;
      background: #FFFDF7;
      cursor: pointer;
      user-select: none;
      transition: background 0.13s ease, transform 0.1s ease;
    }

    .page-btn:hover {
      background: #FFCE2E;
    }

    .page-btn:active {
      transform: translateY(1px);
    }

    .icon-dog-head {
      width: 24px;
      height: 22px;
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    .dog-ear-l {
      position: absolute;
      left: 1px;
      top: 0;
      width: 8px;
      height: 11px;
      border: 2.5px solid #17140F;
      border-radius: 60% 40% 45% 45%;
      background: #FFF;
      box-sizing: border-box;
    }

    .dog-ear-r {
      position: absolute;
      right: 1px;
      top: 0;
      width: 8px;
      height: 11px;
      border: 2.5px solid #17140F;
      border-radius: 40% 60% 45% 45%;
      background: #FFF;
      box-sizing: border-box;
    }

    .dog-snout {
      position: relative;
      width: 16px;
      height: 14px;
      border: 2.5px solid #17140F;
      border-radius: 45% 45% 50% 50%;
      background: #FFF;
      box-sizing: border-box;
    }

    .page-label {
      font-size: 8px;
      font-weight: 800;
      color: #17140F;
      letter-spacing: 0.7px;
    }

    .add-pet-card {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #FFF;
      border: 3px dashed #17140F;
      border-radius: 20px;
      padding: 12px 14px;
      cursor: pointer;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .add-pet-card:active {
      transform: scale(0.965);
    }

    .add-icon-circle {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 2.5px dashed #17140F;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 21px;
      font-weight: 800;
      color: #8A7F68;
    }

    .add-pet-title {
      font-size: 15.5px;
      font-weight: 800;
      color: #17140F;
    }

    .add-pet-sub {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
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

  render() {
    if (!appState.petSwitcherOpen) return null;

    const isKo = appState.currentLocale === 'ko';
    const pets = appState.pets || [];
    const currentPetId = appState.currentPet?.id;

    return html`
      <div class="modal-backdrop" @click=${() => appState.closePetSwitcher()}>
        <div class="modal-sheet" @click=${(e: Event) => e.stopPropagation()}>
          <!-- Header -->
          <div class="sheet-header">
            <div class="sheet-title-area">
              <div class="sheet-title">${isKo ? '누구의 하루인가요?' : 'Whose day is it?'}</div>
              <div class="sheet-sub">
                ${isKo
                  ? '이름을 누르면 전환됩니다. PAGE를 누르면 프로필로 이동합니다.'
                  : 'Tap a name to follow them. Tap PAGE for their file.'}
              </div>
            </div>
            <div class="close-btn" @click=${() => appState.closePetSwitcher()}>&#10005;</div>
          </div>

          <!-- Pets List -->
          <div class="pets-list">
            ${pets.map((p, idx) => {
              const isSelected = p.id === currentPetId;
              const petName = p.name || 'Pet';
              const initial = petName.charAt(0).toUpperCase();
              const colors = ['#FFCE2E', '#BFD0FF', '#1FC99B', '#E7BFFF', '#FFB39A'];
              const bg = colors[idx % colors.length];

              const totalLogs = (appState.events || []).filter((e) => e.petId === p.id).length;
              const todayCount = (appState.events || []).filter((e) => {
                if (e.petId !== p.id) return false;
                const d = new Date(e.timestamp);
                const now = new Date();
                return (
                  d.getDate() === now.getDate() &&
                  d.getMonth() === now.getMonth() &&
                  d.getFullYear() === now.getFullYear()
                );
              }).length;

              return html`
                <div class="pet-card ${isSelected ? 'active' : ''}">
                  ${isSelected ? html`<div class="active-bar"></div>` : null}
                  <div
                    class="pet-card-main"
                    @click=${() => {
                      appState.selectPetById(p.id);
                    }}
                  >
                    <div class="pet-avatar-circle" style="background: ${bg};">${initial}</div>
                    <div class="pet-info">
                      <div class="name-row">
                        <div class="pet-name">${petName}</div>
                        ${isSelected
                          ? html`<div class="on-screen-tag">${isKo ? '화면 표시 중' : 'ON SCREEN'}</div>`
                          : null}
                      </div>
                      <div class="pet-today-line">
                        ${isKo
                          ? `오늘 ${todayCount}건 · 총 ${totalLogs}건의 기록`
                          : `${todayCount} logs today · ${totalLogs} total`}
                      </div>
                      <div class="pet-meta-line">
                        ${p.breed || (isKo ? '반려견' : 'Dog')} ${p.birthday ? `· ${p.birthday}` : ''}
                      </div>
                    </div>
                  </div>

                  <div
                    class="page-btn"
                    title=${isKo ? `${petName} 프로필 보기` : `View ${petName}'s profile`}
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      appState.selectPetById(p.id);
                      appState.closePetSwitcher();
                      appState.setActiveTab('dog');
                    }}
                  >
                    <div class="icon-dog-head">
                      <div class="dog-ear-l"></div>
                      <div class="dog-ear-r"></div>
                      <div class="dog-snout"></div>
                    </div>
                    <div class="page-label">${isKo ? '프로필' : 'PAGE'}</div>
                  </div>
                </div>
              `;
            })}
          </div>

          <!-- Add a Pet Card -->
          <div
            class="add-pet-card"
            @click=${() => {
              appState.closePetSwitcher();
              appState.setActiveTab('settings');
            }}
          >
            <div class="add-icon-circle">+</div>
            <div>
              <div class="add-pet-title">${isKo ? '반려동물 추가' : 'Add a pet'}</div>
              <div class="add-pet-sub">${isKo ? '이름, 품종, 사진' : 'Name, breed, and a photo'}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
