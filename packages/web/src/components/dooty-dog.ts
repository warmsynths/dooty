import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-dog')
export class DootyDog extends LitElement {
  @state() private medDone: Record<number, boolean> = { 0: true, 1: false, 2: false };
  private unsubscribe?: () => void;

  static styles = css`
    :host {
      display: block;
      padding: 58px 18px 140px;
      box-sizing: border-box;
    }

    .dog-hero-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 17px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      gap: 14px;
      align-items: center;
      margin-bottom: 14px;
    }

    .dog-avatar-wrapper {
      position: relative;
      cursor: pointer;
      flex: none;
      transition: transform 0.12s;
    }

    .dog-avatar-wrapper:active {
      transform: scale(0.96);
    }

    .dog-pic-avatar {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      border: 3px solid #17140F;
      box-shadow: 2px 2px 0 #17140F;
      background: #FFFFFF;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      color: #8A7F68;
      text-align: center;
      line-height: 1.2;
    }

    .dog-pic-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .avatar-edit-badge {
      position: absolute;
      bottom: -2px;
      right: -2px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #FF5A3C;
      color: #FFFFFF;
      border: 2px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      box-shadow: 1.5px 1.5px 0 #17140F;
    }

    .dog-name {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 25px;
      color: #17140F;
      letter-spacing: -0.8px;
      line-height: 1.1;
    }

    .dog-details {
      font-size: 12px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 2px;
    }

    .good-badge {
      display: inline-flex;
      margin-top: 7px;
      align-items: center;
      gap: 6px;
      background: #1FC99B;
      border: 2.5px solid #17140F;
      border-radius: 10px;
      padding: 3px 9px;
      font-size: 10.5px;
      font-weight: 800;
      color: #17140F;
    }

    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      margin-bottom: 14px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
    }

    .card-badge {
      font-size: 10.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.6px;
    }

    /* Checklist */
    .med-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 11px;
    }

    .med-check {
      width: 28px;
      height: 28px;
      border-radius: 10px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
    }

    /* Vet Timeline */
    .vet-item {
      display: flex;
      gap: 12px;
      margin-bottom: 12px;
    }

    .vet-date {
      font-size: 11px;
      font-weight: 800;
      color: #9A9080;
      width: 48px;
      flex: none;
      padding-top: 2px;
    }

    .vet-body {
      flex: 1;
      min-width: 0;
      border-left: 3px solid #FFCE2E;
      padding-left: 12px;
    }

    .export-btn {
      background: #2B5BE8;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .export-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
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

  private toggleMed(idx: number) {
    this.medDone = { ...this.medDone, [idx]: !this.medDone[idx] };
  }

  render() {
    const isKo = appState.currentLocale === 'ko';
    const pet = appState.currentPet;
    const petName = pet?.name || (isKo ? '반려견' : 'My Pet');
    const petBreed = pet?.breed || (isKo ? '품종 미설정' : 'Breed unlisted');
    const petBirthday = pet?.birthday ? new Date(pet.birthday).toLocaleDateString() : '';

    const medEvents = (appState.events || []).filter((e) => e.eventType === 'medicine');
    const healthEvents = (appState.events || []).filter(
      (e) =>
        e.eventType === 'vomit' ||
        e.eventType === 'medicine' ||
        (e.notes && e.notes.toLowerCase().includes('vet'))
    );

    const petAvatar = pet?.avatarUrl;

    return html`
      <!-- Pet Hero Card -->
      <div class="dog-hero-card">
        <div
          class="dog-avatar-wrapper"
          @click=${() =>
            appState.openPhotoModal({
              target: 'pet',
              targetId: pet?.id,
              currentAvatar: petAvatar,
              title: isKo ? `${petName} 사진 변경` : `Change ${petName}'s Photo`,
            })}
        >
          <div class="dog-pic-avatar">
            ${petAvatar
              ? html`<img src="${petAvatar}" class="dog-pic-img" alt="${petName}" />`
              : html`<div>${isKo ? '반려견\n사진' : 'pet\npic'}</div>`}
          </div>
          <div class="avatar-edit-badge">📷</div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div class="dog-name">${petName}</div>
          <div class="dog-details">
            ${petBreed}${petBirthday ? ` · ${petBirthday}` : ''}
          </div>
          <div class="good-badge">${isKo ? '프로필 활성' : 'ACTIVE'}</div>
        </div>
      </div>

      <!-- Medications Log -->
      <div class="card-block">
        <div class="card-title" style="margin-bottom: 13px;">
          ${isKo ? '투약 및 영양제 기록' : 'Medication & Supplements'}
        </div>
        <div>
          ${medEvents.length > 0
            ? medEvents.slice(0, 5).map((m, i) => {
                const done = !!this.medDone[i];
                return html`
                  <div class="med-row">
                    <div
                      class="med-check"
                      style="background: ${done ? '#1FC99B' : '#FFF'};"
                      @click=${() => this.toggleMed(i)}
                    >
                      ${done ? '✓' : ''}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <div style="font-size: 14px; font-weight: 800; color: #17140F;">
                        ${m.notes || (isKo ? '투약 기록' : 'Medication')}
                      </div>
                      <div style="font-size: 11.5px; font-weight: 600; color: #6A6152;">
                        ${new Date(m.timestamp).toLocaleDateString()} · ${m.loggedByName}
                      </div>
                    </div>
                    <div style="font-size: 11.5px; font-weight: 800; color: #9A9080; flex: none;">
                      ${new Date(m.timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                    </div>
                  </div>
                `;
              })
            : html`
                <div style="font-size: 12.5px; font-weight: 600; color: #6A6152; padding: 6px 0;">
                  ${isKo
                    ? '아직 등록된 투약 기록이 없습니다. 하단 버튼에서 약을 기록해보세요.'
                    : 'No medications logged yet. Tap the log button below to record medicine.'}
                </div>
              `}
        </div>
      </div>

      <!-- Health Events History -->
      <div class="card-block">
        <div class="card-title" style="margin-bottom: 13px;">
          ${isKo ? '건강 및 이상 반응 기록' : 'Health & Symptom History'}
        </div>
        <div>
          ${healthEvents.length > 0
            ? healthEvents.slice(0, 5).map(
                (v) => html`
                  <div class="vet-item">
                    <div class="vet-date">
                      ${new Date(v.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                    </div>
                    <div class="vet-body">
                      <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                        ${v.eventType.toUpperCase()} · ${v.notes || (isKo ? '상태 기록' : 'Logged')}
                      </div>
                      <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.45; margin-top: 2px;">
                        ${isKo ? `기록자: ${v.loggedByName}` : `Logged by ${v.loggedByName}`}
                      </div>
                    </div>
                  </div>
                `
              )
            : html`
                <div style="font-size: 12.5px; font-weight: 600; color: #6A6152; padding: 6px 0;">
                  ${isKo
                    ? '이상 징후나 구토 기록이 없습니다. 건강한 상태입니다!'
                    : 'No symptoms or issues logged. Looking healthy!'}
                </div>
              `}
        </div>
      </div>

      <!-- Export Button -->
      <div
        class="export-btn"
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent('dooty-toast', {
              bubbles: true,
              composed: true,
              detail: {
                title: isKo ? '요약 준비 완료' : 'Summary ready',
                sub: isKo ? '기록 데이터가 준비되었습니다.' : 'Health logs ready.',
              },
            })
          )}
      >
        ${isKo ? '건강 요약 내보내기' : 'Export health summary'}
      </div>
    `;
  }
}
