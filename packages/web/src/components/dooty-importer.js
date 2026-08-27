var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
import { parseAnyImportFile, convertAnyImportToPetEvents, } from '@dooty/shared';
import { ApiClient } from '../api/client.js';
let DootyImporter = class DootyImporter extends LitElement {
    constructor() {
        super(...arguments);
        this.isImporting = false;
        this.importProgress = '';
        this.errorMessage = '';
        this.successMessage = '';
        this.isDragOver = false;
    }
    static { this.styles = css `
    :host {
      display: block;
      padding: 52px 18px 140px;
      max-width: 480px;
      margin: 0 auto;
      box-sizing: border-box;
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
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
      margin-bottom: 14px;
    }

    .back-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .page-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      letter-spacing: -0.5px;
      color: var(--color-ink);
    }

    .page-sub {
      font-size: 13px;
      color: var(--color-muted);
      font-weight: 600;
      margin-top: 2px;
      margin-bottom: 16px;
    }

    .dropzone {
      background: #fff;
      border: 3px dashed var(--color-ink);
      border-radius: 22px;
      padding: 32px 18px;
      text-align: center;
      box-shadow: var(--shadow-md);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    }

    .dropzone:hover,
    .dropzone.dragover {
      background: #fffdf8;
      border-color: #ff5a3c;
      transform: translateY(-2px);
    }

    .preview-card {
      margin-top: 20px;
      background: #fff;
      border: var(--border-thick);
      border-radius: 22px;
      padding: 18px;
      box-shadow: var(--shadow-md);
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .preview-header {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .format-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 800;
      background: #bfd0ff;
      border: 2px solid var(--color-ink);
      border-radius: 10px;
      padding: 2px 8px;
      text-transform: uppercase;
    }

    .section-subtitle {
      font-size: 12px;
      font-weight: 800;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .breakdown-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .breakdown-chip {
      background: var(--color-yellow-light, #fff9e6);
      border: 2px solid var(--color-ink);
      border-radius: 12px;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 800;
    }

    .user-chip {
      background: #d1fae5;
      border: 2px solid var(--color-ink);
      border-radius: 12px;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 800;
    }

    .import-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 15px;
      padding: 14px 18px;
      border: 3px solid #17140F;
      border-radius: 18px;
      background: #FF5A3C;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;
      user-select: none;
      box-sizing: border-box;
      text-align: center;
      width: 100%;
      margin-top: 6px;
    }

    .import-btn:hover:not(:disabled) {
      transform: translate(1px, 1px);
      box-shadow: 3px 3px 0 #17140F;
    }

    .import-btn:active:not(:disabled) {
      transform: translate(3px, 3px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .import-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      box-shadow: 2px 2px 0 #17140F;
      transform: none;
    }

    .select-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 13px;
      padding: 8px 18px;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      background: #FFD027;
      color: #17140F;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      user-select: none;
      width: auto;
    }

    .select-btn:hover {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .msg-success {
      background: #D1FAE5;
      border: var(--border-thick);
      border-radius: 14px;
      padding: 12px;
      font-weight: 700;
      color: #065F46;
      font-size: 13px;
      margin-top: 14px;
    }

    .msg-error {
      background: #FEE2E2;
      border: var(--border-thick);
      border-radius: 14px;
      padding: 12px;
      font-weight: 700;
      color: #991B1B;
      font-size: 13px;
      margin-top: 14px;
    }
  `; }
    async processFile(file) {
        this.errorMessage = '';
        this.successMessage = '';
        try {
            const text = await file.text();
            const result = parseAnyImportFile(text, file.name);
            this.parsedResult = result;
        }
        catch (err) {
            this.errorMessage = err.message || 'Failed to read and parse import file.';
            this.parsedResult = undefined;
        }
    }
    async handleFileSelect(e) {
        const target = e.target;
        const file = target.files?.[0];
        if (!file)
            return;
        await this.processFile(file);
    }
    handleDragOver(e) {
        e.preventDefault();
        this.isDragOver = true;
    }
    handleDragLeave(e) {
        e.preventDefault();
        this.isDragOver = false;
    }
    async handleDrop(e) {
        e.preventDefault();
        this.isDragOver = false;
        const file = e.dataTransfer?.files?.[0];
        if (!file)
            return;
        await this.processFile(file);
    }
    async handleImport() {
        if (!this.parsedResult || this.isImporting)
            return;
        this.isImporting = true;
        this.errorMessage = '';
        try {
            const householdId = appState.currentHousehold?.id;
            const petId = appState.currentPet?.id;
            if (!householdId || !petId) {
                throw new Error('Please select or configure a household and pet before importing.');
            }
            this.importProgress = `Converting ${this.parsedResult.summary.totalCount} events...`;
            const convertedEvents = convertAnyImportToPetEvents(this.parsedResult, householdId, petId);
            this.importProgress = `Saving ${convertedEvents.length} events to server...`;
            const res = await ApiClient.importEvents(convertedEvents);
            this.successMessage = appState.t.importer.success(res.importedCount);
            await appState.refreshEvents();
            this.parsedResult = undefined;
        }
        catch (err) {
            this.errorMessage = err.message || 'Import failed on server.';
        }
        finally {
            this.isImporting = false;
            this.importProgress = '';
        }
    }
    render() {
        const t = appState.t.importer;
        const isKo = appState.currentLocale === 'ko';
        const summary = this.parsedResult?.summary;
        return html `
      <div
        class="back-btn"
        @click=${() => appState.setActiveTab('settings')}
      >
        ‹ ${isKo ? '설정' : 'Settings'}
      </div>
      <h2 class="page-title">${t.title}</h2>
      <p class="page-sub">${t.subtitle}</p>

      <label
        class="dropzone ${this.isDragOver ? 'dragover' : ''}"
        @dragover=${(e) => this.handleDragOver(e)}
        @dragleave=${(e) => this.handleDragLeave(e)}
        @drop=${(e) => this.handleDrop(e)}
      >
        <div style="font-size: 42px;">📂</div>
        <div style="font-family: var(--font-heading); font-weight: 800; font-size: 16px;">
          ${t.dropText}
        </div>
        <input
          type="file"
          accept=".csv, .json, text/csv, application/json"
          style="display: none;"
          @change=${(e) => this.handleFileSelect(e)}
        />
        <div class="select-btn">
          ${t.selectFile}
        </div>
      </label>

      ${this.errorMessage ? html `<div class="msg-error">${this.errorMessage}</div>` : ''}
      ${this.successMessage ? html `<div class="msg-success">${this.successMessage}</div>` : ''}

      ${summary
            ? html `
            <div class="preview-card">
              <div class="preview-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>📋 ${t.dryRunTitle}</span>
                  <span class="format-badge"
                    >${summary.sourceType === 'csv' ? '📄 CSV Report' : '📦 DogNotes JSON'}</span
                  >
                </div>
                <span style="font-size: 13px; font-weight: 800; color: var(--color-coral);"
                  >${summary.totalCount.toLocaleString()} items</span
                >
              </div>

              <div style="font-size: 13px; font-weight: 700;">
                🐾 ${t.targetPet}: <span style="font-weight: 900;">${summary.petName}</span>
              </div>

              <div style="font-size: 12px; color: var(--color-muted); font-weight: 600;">
                📅 ${t.dateSpan}: ${summary.earliestDate.split('T')[0]} →
                ${summary.latestDate.split('T')[0]}
              </div>

              <div>
                <div class="section-subtitle">👤 Logged by (Mapped)</div>
                <div class="breakdown-row">
                  ${Object.entries(summary.countsByUser).map(([user, count]) => html `
                      <div class="user-chip">@${user}: ${count.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <div>
                <div class="section-subtitle">🏷️ Event Breakdown</div>
                <div class="breakdown-row">
                  ${Object.entries(summary.countsByType).map(([type, count]) => html `
                      <div class="breakdown-chip">${type}: ${count.toLocaleString()}</div>
                    `)}
                </div>
              </div>

              <button
                class="import-btn"
                @click=${() => this.handleImport()}
                ?disabled=${this.isImporting}
              >
                ${this.isImporting
                ? this.importProgress || t.importing
                : `🚀 ${t.confirmImport} (${summary.totalCount.toLocaleString()})`}
              </button>
            </div>
          `
            : ''}
    `;
    }
};
__decorate([
    state()
], DootyImporter.prototype, "parsedResult", void 0);
__decorate([
    state()
], DootyImporter.prototype, "isImporting", void 0);
__decorate([
    state()
], DootyImporter.prototype, "importProgress", void 0);
__decorate([
    state()
], DootyImporter.prototype, "errorMessage", void 0);
__decorate([
    state()
], DootyImporter.prototype, "successMessage", void 0);
__decorate([
    state()
], DootyImporter.prototype, "isDragOver", void 0);
DootyImporter = __decorate([
    customElement('dooty-importer')
], DootyImporter);
export { DootyImporter };
//# sourceMappingURL=dooty-importer.js.map