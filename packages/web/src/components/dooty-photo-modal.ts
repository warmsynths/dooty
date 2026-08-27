import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-photo-modal')
export class DootyPhotoModal extends LitElement {
  @state() private unsubscribe?: () => void;
  @state() private previewUrl: string = '';
  @state() private urlInput: string = '';
  @state() private activeMode: 'upload' | 'preset' | 'url' = 'upload';
  @state() private isProcessing: boolean = false;
  @state() private errorMessage: string = '';

  // Pet Profile editing state
  @state() private petName: string = '';
  @state() private petBreed: string = '';
  @state() private petBirthday: string = '';

  private readonly petPresets = [
    { emoji: '🐶', bg: '#FFE485', label: 'Golden' },
    { emoji: '🐕', bg: '#FF9E79', label: 'Shiba' },
    { emoji: '🦮', bg: '#B8E1D9', label: 'Lab' },
    { emoji: '🐩', bg: '#EAD5E6', label: 'Poodle' },
    { emoji: '🐱', bg: '#FED7AA', label: 'Cat' },
    { emoji: '🐈‍⬛', bg: '#CBD5E1', label: 'Black Cat' },
    { emoji: '🐾', bg: '#D1FAE5', label: 'Paws' },
    { emoji: '🦴', bg: '#FDE68A', label: 'Bone' },
    { emoji: '🦊', bg: '#FDBA74', label: 'Fox' },
    { emoji: '🐻', bg: '#E2E8F0', label: 'Bear' },
    { emoji: '🐰', bg: '#FCE7F3', label: 'Bunny' },
    { emoji: '🦁', bg: '#FEF08A', label: 'Lion' },
  ];

  private readonly userPresets = [
    { emoji: '🧑‍💻', bg: '#FFE485', label: 'Dev' },
    { emoji: '👩‍🦰', bg: '#FF9E79', label: 'Redhead' },
    { emoji: '👨‍🦱', bg: '#B8E1D9', label: 'Curly' },
    { emoji: '🧔', bg: '#EAD5E6', label: 'Beard' },
    { emoji: '👩‍🎨', bg: '#FED7AA', label: 'Artist' },
    { emoji: '🧑‍🌾', bg: '#D1FAE5', label: 'Gardener' },
    { emoji: '🦸', bg: '#FDE68A', label: 'Hero' },
    { emoji: '🕶️', bg: '#CBD5E1', label: 'Cool' },
    { emoji: '⭐', bg: '#FEF08A', label: 'Star' },
    { emoji: '👑', bg: '#FCE7F3', label: 'Crown' },
  ];

  static styles = css`
    :host {
      display: block;
    }

    .modal-overlay {
      position: absolute;
      inset: 0;
      background: rgba(23, 20, 15, 0.7);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      animation: fadeIn 0.15s ease-out;
      box-sizing: border-box;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-card {
      background: #FFFFFF;
      border: 3px solid #17140F;
      border-radius: 24px;
      box-shadow: 6px 6px 0 #17140F;
      width: 100%;
      max-width: 440px;
      max-height: 90vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-sizing: border-box;
    }

    @keyframes popIn {
      from { transform: scale(0.92); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .modal-header {
      padding: 18px 20px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #F0ECE1;
    }

    .modal-title {
      font-family: var(--font-heading, sans-serif);
      font-size: 20px;
      font-weight: 800;
      color: #17140F;
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #F4EFE6;
      border: 2px solid #17140F;
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 2px 2px 0 #17140F;
      transition: transform 0.1s;
    }

    .close-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .modal-body {
      padding: 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-sizing: border-box;
    }

    /* Form Section */
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .field-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #7D7362;
    }

    .input-box {
      width: 100%;
      box-sizing: border-box;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 11px 14px;
      font-size: 14px;
      font-weight: 700;
      color: #17140F;
      background: #FFF9E9;
      outline: none;
      transition: border-color 0.15s, background 0.15s;
    }

    .input-box:focus {
      background: #FFFFFF;
      border-color: #FF5A3C;
    }

    .age-chips-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;
    }

    .age-chip {
      padding: 5px 10px;
      border-radius: 10px;
      border: 2px solid #17140F;
      background: #FFF;
      font-size: 11px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 0 #17140F;
      transition: all 0.1s;
      user-select: none;
    }

    .age-chip:hover {
      background: #FFCE2E;
    }

    .age-chip:active {
      transform: translate(1px, 1px);
      box-shadow: 0.5px 0.5px 0 #17140F;
    }

    /* Preview Section */
    .preview-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      background: #FAF7EE;
      border: 2px dashed #D6CEBE;
      border-radius: 18px;
    }

    .avatar-preview-wrapper {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      overflow: hidden;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .avatar-preview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .avatar-preview-emoji {
      font-size: 42px;
      line-height: 1;
    }

    .preview-label {
      font-size: 10.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #7D7362;
    }

    /* Mode Tabs */
    .mode-tabs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
      background: #F0ECE1;
      padding: 4px;
      border-radius: 14px;
      border: 2px solid #17140F;
    }

    .mode-tab {
      padding: 8px 4px;
      text-align: center;
      font-size: 12px;
      font-weight: 800;
      border-radius: 10px;
      cursor: pointer;
      border: 2px solid transparent;
      color: #6A6152;
      transition: all 0.15s;
    }

    .mode-tab.active {
      background: #FFCE2E;
      color: #17140F;
      border-color: #17140F;
      box-shadow: 1.5px 1.5px 0 #17140F;
    }

    /* Upload Mode */
    .upload-dropzone {
      border: 2px dashed #17140F;
      border-radius: 16px;
      padding: 18px 14px;
      text-align: center;
      background: #FFFFFF;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .upload-dropzone:hover {
      background: #FFF9E6;
    }

    .upload-dropzone:active {
      transform: scale(0.99);
    }

    .dropzone-icon {
      font-size: 28px;
    }

    .dropzone-text {
      font-size: 13px;
      font-weight: 800;
      color: #17140F;
    }

    .dropzone-subtext {
      font-size: 10.5px;
      font-weight: 600;
      color: #8C8271;
    }

    .file-input {
      display: none;
    }

    /* Presets Grid */
    .preset-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      max-height: 160px;
      overflow-y: auto;
      padding: 4px;
    }

    .preset-item {
      aspect-ratio: 1;
      border-radius: 14px;
      border: 2px solid #17140F;
      box-shadow: 2px 2px 0 #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      transition: transform 0.1s;
    }

    .preset-item:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .preset-item.selected {
      outline: 3px solid #FF5A3C;
      transform: scale(1.05);
    }

    /* URL Mode */
    .url-input-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .url-text-input {
      width: 100%;
      box-sizing: border-box;
      padding: 11px 13px;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      background: #FAF7EE;
      color: #17140F;
      outline: none;
    }

    .url-text-input:focus {
      border-color: #FF5A3C;
      background: #FFF;
    }

    .url-preview-btn {
      align-self: flex-end;
      padding: 6px 14px;
      font-size: 12px;
      font-weight: 800;
      background: #F0ECE1;
      border: 2px solid #17140F;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
    }

    .error-msg {
      background: #FFE5E0;
      color: #D32F2F;
      border: 2px solid #D32F2F;
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 700;
    }

    /* Actions */
    .modal-actions {
      display: flex;
      gap: 10px;
      margin-top: 4px;
    }

    .btn-save {
      flex: 2;
      background: #FF5A3C;
      color: #FFFFFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 13px;
      font-family: var(--font-heading, sans-serif);
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      text-align: center;
      transition: transform 0.1s, background 0.15s;
    }

    .btn-save:hover {
      background: #FF7659;
    }

    .btn-save:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .btn-save:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .btn-clear {
      flex: 1;
      background: #FFF;
      color: #8C8271;
      border: 2px solid #17140F;
      border-radius: 16px;
      padding: 13px;
      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      text-align: center;
    }

    .btn-clear:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = appState.subscribe(() => {
      if (appState.photoModalOpen) {
        if (!this.previewUrl) {
          this.previewUrl = appState.photoModalCurrentAvatar || '';
        }
        if (appState.photoModalTarget === 'pet') {
          const currentPet = appState.currentPet;
          if (currentPet) {
            if (!this.petName) this.petName = currentPet.name || '';
            if (!this.petBreed) this.petBreed = currentPet.breed || '';
            if (!this.petBirthday && currentPet.birthday) {
              try {
                this.petBirthday = new Date(currentPet.birthday).toISOString().slice(0, 10);
              } catch (e) {
                this.petBirthday = currentPet.birthday;
              }
            }
          }
        }
      }
      this.requestUpdate();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private handleClose() {
    this.previewUrl = '';
    this.urlInput = '';
    this.errorMessage = '';
    this.petName = '';
    this.petBreed = '';
    this.petBirthday = '';
    appState.closePhotoModal();
  }

  private triggerFileInput() {
    const input = this.shadowRoot?.querySelector('#fileInput') as HTMLInputElement;
    input?.click();
  }

  private setAgeInYears(years: number) {
    const d = new Date();
    d.setFullYear(d.getFullYear() - years);
    this.petBirthday = d.toISOString().slice(0, 10);
    this.requestUpdate();
  }

  private async handleFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.errorMessage = 'Please select a valid image file (PNG, JPG, WEBP).';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    try {
      const resizedBase64 = await this.resizeImage(file, 400, 400);
      this.previewUrl = resizedBase64;
    } catch (err: any) {
      this.errorMessage = 'Failed to process image: ' + (err.message || 'Unknown error');
    } finally {
      this.isProcessing = false;
    }
  }

  private resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          const size = Math.min(width, height);
          const startX = (width - size) / 2;
          const startY = (height - size) / 2;

          const canvas = document.createElement('canvas');
          const targetSize = Math.min(maxWidth, size);
          canvas.width = targetSize;
          canvas.height = targetSize;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Canvas context not available'));
            return;
          }

          ctx.drawImage(img, startX, startY, size, size, 0, 0, targetSize, targetSize);
          resolve(canvas.toDataURL('image/jpeg', 0.88));
        };
        img.onerror = () => reject(new Error('Image failed to load'));
        img.src = readerEvent.target?.result as string;
      };
      reader.onerror = () => reject(new Error('File reader failed'));
      reader.readAsDataURL(file);
    });
  }

  private handleSelectPreset(preset: { emoji: string; bg: string }) {
    const svg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${encodeURIComponent(
      preset.bg
    )}"/><text x="50" y="65" font-size="54" text-anchor="middle">${preset.emoji}</text></svg>`;
    this.previewUrl = svg;
    this.errorMessage = '';
  }

  private handleApplyUrl() {
    if (!this.urlInput.trim()) {
      this.errorMessage = 'Please enter an image URL.';
      return;
    }
    this.previewUrl = this.urlInput.trim();
    this.errorMessage = '';
  }

  private handleRemovePhoto() {
    this.previewUrl = '';
    this.urlInput = '';
    this.errorMessage = '';
  }

  private async handleSave() {
    if (this.isProcessing) return;
    this.isProcessing = true;
    try {
      const isKo = appState.currentLocale === 'ko';
      const target = appState.photoModalTarget;
      const targetId = appState.photoModalTargetId;
      const finalUrl = this.previewUrl;

      if (target === 'pet') {
        const petId = targetId || appState.currentPet?.id;
        if (petId) {
          await appState.updatePetProfile(petId, {
            name: this.petName.trim() || appState.currentPet?.name || 'Pet',
            breed: this.petBreed.trim() || appState.currentPet?.breed || '',
            birthday: this.petBirthday || appState.currentPet?.birthday || '',
            avatarUrl: finalUrl,
          });
        }
      } else if (target === 'user') {
        await appState.updateUserAvatar(finalUrl);
      } else if (target === 'member') {
        if (targetId) {
          await appState.updateMemberAvatar(targetId, finalUrl);
        }
      }

      this.dispatchEvent(
        new CustomEvent('dooty-toast', {
          bubbles: true,
          composed: true,
          detail: {
            title: target === 'pet'
              ? (isKo ? `${this.petName || '반려견'} 프로필 저장됨` : `${this.petName || 'Pet'} Profile Saved`)
              : (isKo ? '사진 업데이트됨' : 'Photo Updated'),
            sub: isKo ? '변경사항이 성공적으로 적용되었습니다.' : 'Changes successfully saved.',
          },
        })
      );

      this.handleClose();
    } catch (err: any) {
      this.errorMessage = 'Failed to save: ' + (err.message || 'Unknown error');
    } finally {
      this.isProcessing = false;
    }
  }

  render() {
    if (!appState.photoModalOpen) return html``;

    const isKo = appState.currentLocale === 'ko';
    const target = appState.photoModalTarget;
    const presets = target === 'pet' ? this.petPresets : this.userPresets;
    const modalTitle =
      appState.photoModalTitle ||
      (target === 'pet'
        ? isKo ? '반려동물 정보 및 사진 수정' : 'Edit Pet Profile & Photo'
        : isKo ? '프로필 사진 변경' : 'Change Profile Photo');

    return html`
      <div class="modal-overlay" @click=${(e: Event) => e.target === e.currentTarget && this.handleClose()}>
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-title">${modalTitle}</div>
            <button class="close-btn" @click=${this.handleClose}>✕</button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- If editing Pet, show Name, Breed, and Birthday fields -->
            ${target === 'pet'
              ? html`
                  <div class="form-group">
                    <label class="field-label">${isKo ? '반려견 이름' : 'Pet Name'}</label>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="${isKo ? '반려견 이름' : 'e.g. Jjols, Watson'}"
                      .value=${this.petName}
                      @input=${(e: any) => (this.petName = e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <label class="field-label">${isKo ? '품종' : 'Breed'}</label>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="${isKo ? '예: 스푸들, 비글 믹스' : 'e.g. Spoodle, Beagle mix'}"
                      .value=${this.petBreed}
                      @input=${(e: any) => (this.petBreed = e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <label class="field-label">${isKo ? '생년월일 (나이 계산)' : 'Birthday (for Age calculation)'}</label>
                    <input
                      type="date"
                      class="input-box"
                      .value=${this.petBirthday}
                      @input=${(e: any) => (this.petBirthday = e.target.value)}
                    />
                    <div style="font-size: 10.5px; font-weight: 700; color: #7D7362; margin-top: 4px;">
                      ${isKo ? '빠른 나이 선택:' : 'Quick Age Select:'}
                    </div>
                    <div class="age-chips-container">
                      ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                        (yrs) => html`
                          <div class="age-chip" @click=${() => this.setAgeInYears(yrs)}>
                            ${isKo ? `${yrs}살` : `${yrs} yr${yrs > 1 ? 's' : ''}`}
                          </div>
                        `
                      )}
                    </div>
                  </div>
                `
              : null}

            <!-- Avatar Preview -->
            <div class="preview-container">
              <div class="avatar-preview-wrapper">
                ${this.previewUrl
                  ? html`<img src="${this.previewUrl}" class="avatar-preview-img" alt="Preview" />`
                  : html`<div class="avatar-preview-emoji">${target === 'pet' ? '🐶' : '👤'}</div>`}
              </div>
              <div class="preview-label">${isKo ? '프로필 사진 / 아바타' : 'Profile Photo / Avatar'}</div>
            </div>

            <!-- Error Banner -->
            ${this.errorMessage ? html`<div class="error-msg">${this.errorMessage}</div>` : ''}

            <!-- Mode Selector Tabs -->
            <div class="mode-tabs">
              <div
                class="mode-tab ${this.activeMode === 'upload' ? 'active' : ''}"
                @click=${() => (this.activeMode = 'upload')}
              >
                📷 ${isKo ? '업로드' : 'Upload'}
              </div>
              <div
                class="mode-tab ${this.activeMode === 'preset' ? 'active' : ''}"
                @click=${() => (this.activeMode = 'preset')}
              >
                🎨 ${isKo ? '이모지' : 'Presets'}
              </div>
              <div
                class="mode-tab ${this.activeMode === 'url' ? 'active' : ''}"
                @click=${() => (this.activeMode = 'url')}
              >
                🔗 ${isKo ? '링크' : 'URL'}
              </div>
            </div>

            <!-- Mode Content: Upload -->
            ${this.activeMode === 'upload'
              ? html`
                  <div class="upload-dropzone" @click=${this.triggerFileInput}>
                    <div class="dropzone-icon">📷</div>
                    <div class="dropzone-text">
                      ${isKo ? '사진 파일 선택 또는 촬영' : 'Choose photo or take picture'}
                    </div>
                    <div class="dropzone-subtext">
                      ${isKo ? 'JPG, PNG, WEBP (자동 최적화)' : 'JPG, PNG, WEBP (auto-cropped)'}
                    </div>
                    <input
                      id="fileInput"
                      type="file"
                      class="file-input"
                      accept="image/*"
                      @change=${this.handleFileSelect}
                    />
                  </div>
                `
              : ''}

            <!-- Mode Content: Presets -->
            ${this.activeMode === 'preset'
              ? html`
                  <div class="preset-grid">
                    ${presets.map(
                      (p) => html`
                        <div
                          class="preset-item"
                          style="background: ${p.bg};"
                          title="${p.label}"
                          @click=${() => this.handleSelectPreset(p)}
                        >
                          ${p.emoji}
                        </div>
                      `
                    )}
                  </div>
                `
              : ''}

            <!-- Mode Content: URL -->
            ${this.activeMode === 'url'
              ? html`
                  <div class="url-input-container">
                    <input
                      type="url"
                      class="url-text-input"
                      placeholder="${isKo ? 'https://example.com/photo.jpg' : 'https://example.com/photo.jpg'}"
                      .value=${this.urlInput}
                      @input=${(e: any) => (this.urlInput = e.target.value)}
                    />
                    <button class="url-preview-btn" @click=${this.handleApplyUrl}>
                      ${isKo ? '미리보기 적용' : 'Preview URL'}
                    </button>
                  </div>
                `
              : ''}

            <!-- Action Buttons -->
            <div class="modal-actions">
              <button class="btn-clear" @click=${this.handleClose}>
                ${isKo ? '취소' : 'Cancel'}
              </button>
              <button class="btn-save" ?disabled=${this.isProcessing} @click=${this.handleSave} style="display:flex; align-items:center; justify-content:center; gap:8px;">
                ${this.isProcessing
                  ? html`<div class="btn-spinner" style="width:14px; height:14px; border-width:2px;"></div> <span>${isKo ? '저장 중...' : 'Saving...'}</span>`
                  : (isKo ? '저장하기' : 'Save Changes')}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
