var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
let DootyPhotoModal = class DootyPhotoModal extends LitElement {
    constructor() {
        super(...arguments);
        this.previewUrl = '';
        this.urlInput = '';
        this.activeMode = 'upload';
        this.isProcessing = false;
        this.errorMessage = '';
        this.petPresets = [
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
        this.userPresets = [
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
    }
    static { this.styles = css `
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
      max-width: 420px;
      max-height: 90vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* Preview Section */
    .preview-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 14px;
      background: #FAF7EE;
      border: 2px dashed #D6CEBE;
      border-radius: 18px;
    }

    .avatar-preview-wrapper {
      width: 100px;
      height: 100px;
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
      font-size: 48px;
      line-height: 1;
    }

    .preview-label {
      font-size: 11px;
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
      padding: 24px 16px;
      text-align: center;
      background: #FFFFFF;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .upload-dropzone:hover {
      background: #FFF9E6;
    }

    .upload-dropzone:active {
      transform: scale(0.99);
    }

    .dropzone-icon {
      font-size: 32px;
    }

    .dropzone-text {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
    }

    .dropzone-subtext {
      font-size: 11px;
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
      gap: 10px;
      max-height: 180px;
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
      font-size: 26px;
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
      padding: 12px 14px;
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
      margin-top: 6px;
    }

    .btn-save {
      flex: 2;
      background: #FFCE2E;
      color: #17140F;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 12px;
      font-family: var(--font-heading, sans-serif);
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      text-align: center;
      transition: transform 0.1s;
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
      border-radius: 14px;
      padding: 12px;
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
  `; }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribe = appState.subscribe(() => {
            if (appState.photoModalOpen && !this.previewUrl) {
                this.previewUrl = appState.photoModalCurrentAvatar || '';
            }
            this.requestUpdate();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.();
    }
    handleClose() {
        this.previewUrl = '';
        this.urlInput = '';
        this.errorMessage = '';
        appState.closePhotoModal();
    }
    triggerFileInput() {
        const input = this.shadowRoot?.querySelector('#fileInput');
        input?.click();
    }
    async handleFileSelect(e) {
        const target = e.target;
        const file = target.files?.[0];
        if (!file)
            return;
        if (!file.type.startsWith('image/')) {
            this.errorMessage = 'Please select a valid image file (PNG, JPG, WEBP).';
            return;
        }
        this.isProcessing = true;
        this.errorMessage = '';
        try {
            const resizedBase64 = await this.resizeImage(file, 400, 400);
            this.previewUrl = resizedBase64;
        }
        catch (err) {
            this.errorMessage = 'Failed to process image: ' + (err.message || 'Unknown error');
        }
        finally {
            this.isProcessing = false;
        }
    }
    resizeImage(file, maxWidth, maxHeight) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (readerEvent) => {
                const img = new Image();
                img.onload = () => {
                    let width = img.width;
                    let height = img.height;
                    // Compute square center crop/resize
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
                img.src = readerEvent.target?.result;
            };
            reader.onerror = () => reject(new Error('File reader failed'));
            reader.readAsDataURL(file);
        });
    }
    handleSelectPreset(preset) {
        // Generate an SVG data URI or emoji badge
        const svg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${encodeURIComponent(preset.bg)}"/><text x="50" y="65" font-size="54" text-anchor="middle">${preset.emoji}</text></svg>`;
        this.previewUrl = svg;
        this.errorMessage = '';
    }
    handleApplyUrl() {
        if (!this.urlInput.trim()) {
            this.errorMessage = 'Please enter an image URL.';
            return;
        }
        this.previewUrl = this.urlInput.trim();
        this.errorMessage = '';
    }
    handleRemovePhoto() {
        this.previewUrl = '';
        this.urlInput = '';
        this.errorMessage = '';
    }
    async handleSave() {
        const isKo = appState.currentLocale === 'ko';
        const target = appState.photoModalTarget;
        const targetId = appState.photoModalTargetId;
        const finalUrl = this.previewUrl;
        if (target === 'pet') {
            const petId = targetId || appState.currentPet?.id;
            if (petId) {
                await appState.updatePetAvatar(petId, finalUrl);
            }
        }
        else if (target === 'user') {
            await appState.updateUserAvatar(finalUrl);
        }
        else if (target === 'member') {
            if (targetId) {
                await appState.updateMemberAvatar(targetId, finalUrl);
            }
        }
        this.dispatchEvent(new CustomEvent('dooty-toast', {
            bubbles: true,
            composed: true,
            detail: {
                title: isKo ? '사진 업데이트됨' : 'Photo Updated',
                subtitle: isKo ? '프로필 사진이 저장되었습니다.' : 'Avatar successfully updated.',
                badge: '📸',
            },
        }));
        this.handleClose();
    }
    render() {
        if (!appState.photoModalOpen)
            return html ``;
        const isKo = appState.currentLocale === 'ko';
        const target = appState.photoModalTarget;
        const presets = target === 'pet' ? this.petPresets : this.userPresets;
        const modalTitle = appState.photoModalTitle ||
            (target === 'pet'
                ? isKo ? '반려동물 사진 변경' : 'Change Pet Photo'
                : isKo ? '프로필 사진 변경' : 'Change Profile Photo');
        return html `
      <div class="modal-overlay" @click=${(e) => e.target === e.currentTarget && this.handleClose()}>
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-title">${modalTitle}</div>
            <button class="close-btn" @click=${this.handleClose}>✕</button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- Avatar Preview -->
            <div class="preview-container">
              <div class="avatar-preview-wrapper">
                ${this.previewUrl
            ? html `<img src="${this.previewUrl}" class="avatar-preview-img" alt="Preview" />`
            : html `<div class="avatar-preview-emoji">${target === 'pet' ? '🐶' : '👤'}</div>`}
              </div>
              <div class="preview-label">${isKo ? '현재 미리보기' : 'Current Preview'}</div>
            </div>

            <!-- Error Banner -->
            ${this.errorMessage ? html `<div class="error-msg">${this.errorMessage}</div>` : ''}

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
            ? html `
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
            ? html `
                  <div class="preset-grid">
                    ${presets.map((p) => html `
                        <div
                          class="preset-item"
                          style="background: ${p.bg};"
                          title="${p.label}"
                          @click=${() => this.handleSelectPreset(p)}
                        >
                          ${p.emoji}
                        </div>
                      `)}
                  </div>
                `
            : ''}

            <!-- Mode Content: URL -->
            ${this.activeMode === 'url'
            ? html `
                  <div class="url-input-container">
                    <input
                      type="url"
                      class="url-text-input"
                      placeholder="${isKo ? 'https://example.com/photo.jpg' : 'https://example.com/photo.jpg'}"
                      .value=${this.urlInput}
                      @input=${(e) => (this.urlInput = e.target.value)}
                    />
                    <button class="url-preview-btn" @click=${this.handleApplyUrl}>
                      ${isKo ? '미리보기 적용' : 'Preview URL'}
                    </button>
                  </div>
                `
            : ''}

            <!-- Action Buttons -->
            <div class="modal-actions">
              <button class="btn-clear" @click=${this.handleRemovePhoto}>
                ${isKo ? '제거' : 'Remove'}
              </button>
              <button class="btn-save" ?disabled=${this.isProcessing} @click=${this.handleSave}>
                ${this.isProcessing
            ? isKo ? '처리 중...' : 'Processing...'
            : isKo ? '저장하기' : 'Save Photo'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    state()
], DootyPhotoModal.prototype, "unsubscribe", void 0);
__decorate([
    state()
], DootyPhotoModal.prototype, "previewUrl", void 0);
__decorate([
    state()
], DootyPhotoModal.prototype, "urlInput", void 0);
__decorate([
    state()
], DootyPhotoModal.prototype, "activeMode", void 0);
__decorate([
    state()
], DootyPhotoModal.prototype, "isProcessing", void 0);
__decorate([
    state()
], DootyPhotoModal.prototype, "errorMessage", void 0);
DootyPhotoModal = __decorate([
    customElement('dooty-photo-modal')
], DootyPhotoModal);
export { DootyPhotoModal };
//# sourceMappingURL=dooty-photo-modal.js.map