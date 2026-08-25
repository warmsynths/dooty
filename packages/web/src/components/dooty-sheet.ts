import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
import { EventType, EventMetadata } from '@watslog/shared';

@customElement('dooty-sheet')
export class DootySheet extends LitElement {
  @state() private selectedType: string | null = null;
  @state() private cons: number = 4;
  @state() private size: 'S' | 'M' | 'L' | 'XL' = 'M';
  @state() private mood: string = 'Zoomy';
  @state() private selectedMed: string = 'Apoquel';
  @state() private selectedMedDose: string = '16 mg with food';
  @state() private customMedName: string = '';
  @state() private weightKg: number = 14.2;
  @state() private walkMin: string = '30 min';
  @state() private walkKm: string = '2.3 km';
  @state() private vetReason: string = 'Annual check-up';
  @state() private symptom: string = 'Itch / Scratch';
  @state() private portion: string = '1 cup';
  @state() private photoUrl: string = '';
  @state() private notes: string = '';
  @state() private locationName: string = 'Elm St & 4th';
  @state() private weatherText: string = '18° drizzle';

  private unsubscribe?: () => void;
  private fileInput?: HTMLInputElement;

  private wasOpen: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = appState.subscribe(() => {
      if (appState.loggerModalOpen) {
        if (!this.wasOpen) {
          // Just opened
          this.selectedType = appState.loggerEventType || null;
          this.wasOpen = true;
        } else if (appState.loggerEventType && this.selectedType !== appState.loggerEventType) {
          this.selectedType = appState.loggerEventType;
        }
      } else {
        this.selectedType = null;
        this.wasOpen = false;
      }
      this.requestUpdate();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  static styles = css`
    :host {
      display: block;
    }

    .sheet-overlay {
      position: absolute;
      inset: 0;
      z-index: 180;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }

    .sheet-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(23, 20, 15, 0.45);
      animation: fadeIn 0.2s ease;
    }

    .sheet-body {
      position: relative;
      background: #FFFBF2;
      border: 3px solid #17140F;
      border-bottom: none;
      border-radius: 30px 30px 0 0;
      width: 100%;
      max-width: 440px;
      max-height: 92%;
      display: flex;
      flex-direction: column;
      animation: tb-sheet 0.3s cubic-bezier(0.2, 0.85, 0.25, 1) both;
      box-shadow: 0 -10px 32px rgba(23, 20, 15, 0.2);
      overflow: hidden;
      box-sizing: border-box;
    }

    .sheet-top {
      padding: 14px 18px 8px;
      display: flex;
      flex-direction: column;
      gap: 11px;
      flex: none;
      background: #FFFBF2;
      border-bottom: 2px solid rgba(23, 20, 15, 0.06);
    }

    .sheet-handle {
      width: 52px;
      height: 5px;
      border-radius: 5px;
      background: #17140F;
      margin: 0 auto;
    }

    .sheet-header-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .sheet-back-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #17140F;
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
    }

    .sheet-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 22px;
      color: #17140F;
      line-height: 1.15;
      letter-spacing: -0.7px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .sheet-sub {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .sheet-close-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #17140F;
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .sheet-close-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .sheet-scroll-content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 14px 18px 20px;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    }

    /* Step 1 Grid */
    .type-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .type-card {
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 9px;
      cursor: pointer;
      min-height: 94px;
      box-sizing: border-box;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      user-select: none;
    }

    .type-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .type-card:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .type-icon {
      width: 36px;
      height: 36px;
      border-radius: 13px;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
    }

    .type-card-name {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
    }

    .type-card-sub {
      font-size: 11px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 2px;
      line-height: 1.3;
    }

    /* Step 2 Form */
    .form-col {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .pill-row {
      display: flex;
      gap: 10px;
    }

    .pill-info {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 11px 13px;
      box-shadow: 2px 2px 0 #17140F;
      box-sizing: border-box;
    }

    .pill-label {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .pill-val {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
      margin-top: 3px;
    }

    .pill-sub {
      font-size: 11px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
    }

    .section-lbl {
      font-size: 14.5px;
      font-weight: 800;
      color: #17140F;
    }

    .section-sub {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
      margin: 2px 0 10px;
    }

    /* 7-Point Consistency Scale */
    .cons-row {
      display: flex;
      gap: 6px;
    }

    .cons-opt {
      flex: 1;
      min-height: 54px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      cursor: pointer;
      border: 3px solid #17140F;
      background: #FFF;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
      user-select: none;
    }

    .cons-opt.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    /* Size Buttons */
    .size-row {
      display: flex;
      gap: 9px;
    }

    .size-btn {
      flex: 1;
      min-height: 48px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      background: #FFF;
      color: #17140F;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
      user-select: none;
    }

    .size-btn.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    /* Weight Stepper */
    .weight-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 15px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 3px 3px 0 #17140F;
    }

    .step-btn {
      width: 46px;
      height: 46px;
      border-radius: 15px;
      border: 3px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      box-shadow: 2px 2px 0 #17140F;
      user-select: none;
      transition: transform 0.1s ease;
    }

    .step-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .weight-readout {
      flex: 1;
      text-align: center;
    }

    .weight-val {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 32px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -1.2px;
    }

    .weight-unit {
      font-size: 10.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 1px;
      margin-top: 4px;
    }

    /* Medicine List */
    .med-list {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .med-item {
      display: flex;
      align-items: center;
      gap: 12px;
      border-radius: 16px;
      padding: 13px 14px;
      cursor: pointer;
      background: #FFF;
      border: 3px solid #17140F;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
      user-select: none;
    }

    .med-item.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    .med-dot {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      flex: none;
      border: 2.5px solid #17140F;
      background: #FFF;
    }

    .med-item.active .med-dot {
      background: #FF5A3C;
    }

    .med-name {
      flex: 1;
      min-width: 0;
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
    }

    .med-dose {
      font-size: 11.5px;
      font-weight: 700;
      color: #6A6152;
      flex: none;
    }

    /* Walk Duration */
    .walk-row {
      display: flex;
      gap: 8px;
    }

    .walk-btn {
      flex: 1;
      min-height: 54px;
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
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .walk-btn.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    .walk-min {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 15px;
      color: #17140F;
    }

    .walk-km {
      font-size: 9.5px;
      font-weight: 700;
      color: #6A6152;
    }

    /* Mood on Delivery & Pills */
    .wrap-pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .mood-pill {
      border-radius: 14px;
      padding: 10px 14px;
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
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .mood-pill.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(2px);
    }

    /* Photo & Notes */
    .photo-notes-row {
      display: flex;
      gap: 10px;
      align-items: stretch;
    }

    .photo-box {
      width: 98px;
      height: 98px;
      border-radius: 18px;
      flex: none;
      background: repeating-linear-gradient(45deg, #F0E7D3 0 6px, #E3D8BE 6px 12px);
      border: 3px dashed #17140F;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      user-select: none;
    }

    .photo-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .photo-plus {
      font-size: 22px;
      font-weight: 800;
      color: #8A7F68;
      line-height: 1;
    }

    .photo-lbl {
      font-size: 9.5px;
      font-weight: 800;
      color: #8A7F68;
    }

    .notes-box {
      flex: 1;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      box-shadow: 2px 2px 0 #17140F;
      box-sizing: border-box;
    }

    .sheet-bottom {
      flex: none;
      padding: 14px 18px 24px;
      background: #FFFBF2;
      border-top: 2px solid rgba(23, 20, 15, 0.06);
    }

    .log-submit-btn {
      background: #FF5A3C;
      border: 3px solid #17140F;
      border-radius: 20px;
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

    .log-submit-btn:hover {
      background: #FF7659;
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .log-submit-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  private consNames = [
    'hard pellets',
    'lumpy log',
    'cracked log',
    'textbook — the dream',
    'soft blobs',
    'mushy',
    'liquid',
  ];

  private consNamesKo = [
    '단단한 토끼똥',
    '울퉁불퉁한 변',
    '약간 갈라진 변',
    '완벽한 황금변 (최고)',
    '무른 덩어리변',
    '형태 없는 묽은변',
    '설사/수분성 액체',
  ];

  private typeDefs = [
    { id: 'poop', name: 'Poop', nameKo: '응가', tag: 'P', sub: 'the main event', subKo: '주요 배변 활동', c: '#FFCE2E' },
    { id: 'pee', name: 'Pee', nameKo: '쉬야', tag: 'U', sub: 'quick mark', subKo: '배뇨 영역 표시', c: '#BFD0FF' },
    { id: 'vomit', name: 'Vomit', nameKo: '구토', tag: 'V', sub: 'we hope not', subKo: '소화 이상/토', c: '#FF9A3C' },
    { id: 'medicine', name: 'Medicine', nameKo: '약/영양제', tag: 'M', sub: '3 on schedule', subKo: '투약 일정 관리', c: '#1FC99B' },
    { id: 'weight', name: 'Weight', nameKo: '몸무게', tag: 'KG', sub: 'last 14.2 kg', subKo: '체중 변화 기록', c: '#2B5BE8' },
    { id: 'walk', name: 'Walk', nameKo: '산책', tag: 'W', sub: '2 already today', subKo: '야외 활동 & 코스', c: '#9EC6E8' },
    { id: 'vet', name: 'Vet visit', nameKo: '병원 진료', tag: 'D', sub: 'appointments', subKo: '검진 및 진료 예약', c: '#FFD15C' },
    { id: 'symptom', name: 'Symptom', nameKo: '증상 메모', tag: 'S', sub: 'itch, limp, mood', subKo: '가려움, 절뚝임 등', c: '#FF5A3C' },
  ];

  private medOptions = [
    { name: 'Apoquel', dose: '16 mg with food' },
    { name: 'Joint chew', dose: '1 chew, evening' },
    { name: 'Flea & tick', dose: 'topical, weekly' },
  ];

  private walkOptions = [
    { min: '15 min', km: '1.1 km' },
    { min: '30 min', km: '2.3 km' },
    { min: '45 min', km: '3.4 km' },
    { min: '1 hr', km: '4.6 km' },
  ];

  private vetReasons = [
    'Annual check-up',
    'Vaccination booster',
    'Loose stool consult',
    'Dental scaling',
    'Medication renewal',
    'Follow-up exam',
  ];

  private symptomOptions = [
    'Itch / Scratch',
    'Limping / Joint',
    'Lethargic / Low energy',
    'Coughing / Reverse sneeze',
    'Loss of Appetite',
    'Skin redness / Rash',
    'Ear shaking',
  ];

  private portionOptions = [
    '0.5 cup',
    '1.0 cup',
    '1.5 cups',
    '2.0 cups',
    'Full bowl',
    'Special treats',
  ];

  private moodOptions = ['Zoomy', 'Regal', 'Guilty', 'Unbothered', 'Feral', 'Happy', 'Calm'];

  private handleSelectType(typeId: string) {
    this.selectedType = typeId;
    appState.loggerEventType = typeId as EventType;
  }

  private handleBackToTypes() {
    this.selectedType = null;
    appState.loggerEventType = null;
  }

  private triggerPhotoUpload() {
    if (!this.fileInput) {
      this.fileInput = document.createElement('input');
      this.fileInput.type = 'file';
      this.fileInput.accept = 'image/*';
      this.fileInput.style.display = 'none';
      document.body.appendChild(this.fileInput);
      this.fileInput.addEventListener('change', (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            this.photoUrl = event.target?.result as string;
          };
          reader.readAsDataURL(file);
        }
      });
    }
    this.fileInput.click();
  }

  private async handleSave() {
    const isKo = appState.currentLocale === 'ko';
    const type = (this.selectedType || 'poop') as EventType;
    const petName = appState.currentPet?.name || (isKo ? '반려견' : 'Pet');

    let summaryNotes = '';
    let toastTitle = isKo ? '기록 완료!' : 'Logged it!';
    let toastSub = '';

    const metadata: EventMetadata = {
      timestamp: new Date().toISOString(),
      photoUrl: this.photoUrl || undefined,
      locationName: this.locationName,
      weather: this.weatherText,
    };

    if (type === 'poop') {
      summaryNotes = `Type ${this.cons} (${this.consNames[this.cons - 1]}) · ${this.size} · ${this.mood}`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.consistency = this.cons;
      metadata.consistencyLabel = this.consNames[this.cons - 1];
      metadata.size = this.size;
      metadata.mood = this.mood;
      toastTitle = isKo ? '응가 기록 완료!' : 'Logged it!';
      toastSub = isKo
        ? `${petName}의 배변 기록: ${this.cons}단계 · ${this.size}`
        : `${petName}’s log: Type ${this.cons} · ${this.size}`;
    } else if (type === 'pee') {
      summaryNotes = `Pee · ${this.size} · ${this.mood}`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.size = this.size;
      metadata.mood = this.mood;
      toastTitle = isKo ? '쉬야 완료!' : 'Marked!';
      toastSub = isKo ? '영역 표시 기록됨.' : 'Territory marked.';
    } else if (type === 'vomit') {
      summaryNotes = `Vomit · Type ${this.cons} · ${this.mood}`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.consistency = this.cons;
      metadata.consistencyLabel = this.consNames[this.cons - 1];
      metadata.mood = this.mood;
      toastTitle = isKo ? '구토 기록됨 & 주의 알림' : 'Logged and flagged';
      toastSub = isKo ? '24시간 내 반복 발생 시 알림을 드립니다.' : 'Two in 48h will alert you.';
    } else if (type === 'medicine') {
      const medName = this.customMedName || this.selectedMed;
      summaryNotes = `${medName} (${this.selectedMedDose})`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.medication = medName;
      metadata.dosage = this.selectedMedDose;
      toastTitle = isKo ? '투약 기록 완료' : `${medName} given`;
      toastSub = isKo ? '다음 투약 일정에 반영됩니다.' : 'Next dose scheduled.';
    } else if (type === 'weight') {
      summaryNotes = `Weigh-in: ${this.weightKg.toFixed(1)} kg`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.weightKg = this.weightKg;
      toastTitle = isKo ? '체중 저장됨' : 'Weigh-in saved';
      toastSub = `${this.weightKg.toFixed(1)} kg · ${isKo ? '체중 기록 완료' : 'recorded'}`;
    } else if (type === 'walk') {
      summaryNotes = `Walk · ${this.walkMin} (${this.walkKm})`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.walkDuration = this.walkMin;
      metadata.walkDistance = this.walkKm;
      toastTitle = isKo ? '산책 기록 완료' : 'Walk logged';
      toastSub = `${this.walkMin} · ${this.walkKm} · ${isKo ? '좋은 운동이었어요!' : 'Good effort.'}`;
    } else if (type === 'vet') {
      summaryNotes = `Vet visit: ${this.vetReason}`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.visitReason = this.vetReason;
      toastTitle = isKo ? '진료 기록 추가' : 'Visit added';
      toastSub = isKo ? '진료 내역 및 알림이 설정되었습니다.' : 'Reminder set.';
    } else if (type === 'symptom') {
      summaryNotes = `Symptom: ${this.symptom}`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.symptom = this.symptom;
      toastTitle = isKo ? '증상 기록됨' : 'Symptom noted';
      toastSub = isKo ? '수의사 진료용 요약에 추가되었습니다.' : 'Added to vet-ready summary.';
    } else if (type === 'food' || type === 'water') {
      summaryNotes = `Meal: ${this.portion}`;
      if (this.notes) summaryNotes += ` · ${this.notes}`;
      metadata.portion = this.portion;
      toastTitle = isKo ? '식사 기록 완료' : 'Meal recorded';
      toastSub = `${this.portion}`;
    }

    await appState.logEvent(type, summaryNotes, metadata);
    this.close();

    // Trigger celebratory toast & confetti burst
    this.dispatchEvent(
      new CustomEvent('dooty-toast', {
        bubbles: true,
        composed: true,
        detail: {
          title: toastTitle,
          sub: toastSub,
        },
      })
    );
  }

  private close() {
    this.selectedType = null;
    this.notes = '';
    this.photoUrl = '';
    this.customMedName = '';
    appState.closeLogger();
  }

  render() {
    if (!appState.loggerModalOpen) return null;

    const isStep1 = !this.selectedType;
    const isStep2 = !!this.selectedType;
    const isKo = appState.currentLocale === 'ko';

    const sheetTitles: Record<string, [string, string]> = {
      poop: isKo ? ['배변 세부 기록', '두 번 탭으로 간단하게'] : ['A fine specimen', 'Two taps and you’re done'],
      pee: isKo ? ['영역 표시 업데이트', '위치와 규모'] : ['Territory update', 'Where and how long'],
      vomit: isKo ? ['소화 이상 기록', '수의사 진료에 도움이 됩니다'] : ['Sorry, buddy', 'Details help the vet'],
      medicine: isKo ? ['투약 완료', '일정에 체크하세요'] : ['Dose given', 'Tick it off the schedule'],
      weight: isKo ? ['체중 측정', '주기적인 측정이 중요해요'] : ['Weigh-in', 'Monthly is plenty'],
      vet: isKo ? ['병원 진료', '진료 내용과 날짜'] : ['Vet visit', 'Reason and date'],
      walk: isKo ? ['즐거운 야외 산책', '얼마나 걸었나요?'] : ['Out and about', 'How long were you gone?'],
      symptom: isKo ? ['이상 징후 기록', '생생할 때 기록해두세요'] : ['Something’s off', 'Describe it while it’s fresh'],
      food: isKo ? ['식사 및 사료', '급여량과 종류'] : ['Mealtime', 'Portion and food'],
    };

    const currentTitlePair = this.selectedType
      ? sheetTitles[this.selectedType] || (isKo ? ['기록 세부사항', '확인'] : ['What happened?', 'Confirm details'])
      : isKo
      ? ['무슨 일이 있었나요?', '종류를 선택하세요']
      : ['What happened?', 'Pick a type'];

    const sheetTitle = currentTitlePair[0];
    const sheetSub = currentTitlePair[1];

    const showCons = this.selectedType === 'poop' || this.selectedType === 'vomit';
    const showSize = this.selectedType === 'poop' || this.selectedType === 'pee';
    const showWeight = this.selectedType === 'weight';
    const showMeds = this.selectedType === 'medicine';
    const showWalk = this.selectedType === 'walk';
    const showVet = this.selectedType === 'vet';
    const showSymptom = this.selectedType === 'symptom';
    const showFood = this.selectedType === 'food' || this.selectedType === 'water';
    const showMood = this.selectedType === 'poop' || this.selectedType === 'pee' || this.selectedType === 'vomit' || this.selectedType === 'walk';

    return html`
      <div class="sheet-overlay">
        <div class="sheet-backdrop" @click=${() => this.close()}></div>
        <div class="sheet-body">
          <div class="sheet-top">
            <div class="sheet-handle"></div>
            <div class="sheet-header-row">
              ${isStep2
                ? html`
                    <div class="sheet-back-icon" @click=${() => this.handleBackToTypes()}>‹</div>
                  `
                : null}
              <div style="flex: 1; min-width: 0;">
                <div class="sheet-title">${sheetTitle}</div>
                <div class="sheet-sub">${sheetSub}</div>
              </div>
              <div class="sheet-close-btn" @click=${() => this.close()}>✕</div>
            </div>
          </div>

          <div class="sheet-scroll-content">
            ${isStep1
              ? html`
                  <div class="type-grid">
                    ${this.typeDefs.map(
                      (t) => html`
                        <div
                          class="type-card"
                          @click=${() => this.handleSelectType(t.id)}
                        >
                          <div class="type-icon" style="background: ${t.c};">
                            ${t.tag}
                          </div>
                          <div>
                            <div class="type-card-name">${isKo ? t.nameKo : t.name}</div>
                            <div class="type-card-sub">${isKo ? t.subKo : t.sub}</div>
                          </div>
                        </div>
                      `
                    )}
                  </div>
                `
              : html`
                  <div class="form-col">
                    <!-- Top Pill Row: Time & Status/Weather -->
                    <div class="pill-row">
                      <div class="pill-info">
                        <div class="pill-label">${isKo ? '시간' : 'Time'}</div>
                        <div class="pill-val">
                          ${new Date().toLocaleTimeString([], {
                            hour: 'numeric',
                            minute: '2-digit',
                          }).toLowerCase()}
                        </div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${isKo ? '상태 / 날씨' : 'Weather / GPS'}</div>
                        <div class="pill-val">${this.weatherText}</div>
                      </div>
                    </div>

                    <!-- 1. Consistency (Poop / Vomit) -->
                    ${showCons
                      ? html`
                          <div>
                            <div class="section-lbl">${isKo ? '변 상태 / 형태' : 'Consistency'}</div>
                            <div class="section-sub">
                              Type ${this.cons} — ${isKo ? this.consNamesKo[this.cons - 1] : this.consNames[this.cons - 1]}
                            </div>
                            <div class="cons-row">
                              ${[1, 2, 3, 4, 5, 6, 7].map(
                                (n) => html`
                                  <div
                                    class="cons-opt ${this.cons === n ? 'active' : ''}"
                                    @click=${() => (this.cons = n)}
                                  >
                                    <div
                                      style="font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif); font-weight: 800; font-size: 15px; color: #17140F;"
                                    >
                                      ${n}
                                    </div>
                                    <div
                                      style="width: ${5 + n * 2.4}px; height: 5px; border-radius: 5px; background: #17140F;"
                                    ></div>
                                  </div>
                                `
                              )}
                            </div>
                          </div>
                        `
                      : null}

                    <!-- 2. Size (Poop / Pee) -->
                    ${showSize
                      ? html`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '크기 / 양' : 'Size'}
                            </div>
                            <div class="size-row">
                              ${(['S', 'M', 'L', 'XL'] as const).map(
                                (s) => html`
                                  <div
                                    class="size-btn ${this.size === s ? 'active' : ''}"
                                    @click=${() => (this.size = s)}
                                  >
                                    ${s}
                                  </div>
                                `
                              )}
                            </div>
                          </div>
                        `
                      : null}

                    <!-- 3. Weight Stepper (Weight) -->
                    ${showWeight
                      ? html`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '체중 측정' : 'Body Weight'}
                            </div>
                            <div class="weight-card">
                              <div
                                class="step-btn"
                                @click=${() => (this.weightKg = Math.max(0.5, Number((this.weightKg - 0.1).toFixed(1))))}
                              >
                                −
                              </div>
                              <div class="weight-readout">
                                <div class="weight-val">${this.weightKg.toFixed(1)}</div>
                                <div class="weight-unit">
                                  KG · ${isKo ? '최근' : 'LAST'} 14.2 KG
                                </div>
                              </div>
                              <div
                                class="step-btn"
                                @click=${() => (this.weightKg = Number((this.weightKg + 0.1).toFixed(1)))}
                              >
                                +
                              </div>
                            </div>
                          </div>
                        `
                      : null}

                    <!-- 4. Medicine Options (Medicine) -->
                    ${showMeds
                      ? html`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '복용 약품' : 'Which one'}
                            </div>
                            <div class="med-list">
                              ${this.medOptions.map(
                                (m) => html`
                                  <div
                                    class="med-item ${this.selectedMed === m.name ? 'active' : ''}"
                                    @click=${() => {
                                      this.selectedMed = m.name;
                                      this.selectedMedDose = m.dose;
                                    }}
                                  >
                                    <div class="med-dot"></div>
                                    <div class="med-name">${m.name}</div>
                                    <div class="med-dose">${m.dose}</div>
                                  </div>
                                `
                              )}
                            </div>
                          </div>
                        `
                      : null}

                    <!-- 5. Walk Duration (Walk) -->
                    ${showWalk
                      ? html`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '산책 시간 & 거리' : 'How long'}
                            </div>
                            <div class="walk-row">
                              ${this.walkOptions.map(
                                (w) => html`
                                  <div
                                    class="walk-btn ${this.walkMin === w.min ? 'active' : ''}"
                                    @click=${() => {
                                      this.walkMin = w.min;
                                      this.walkKm = w.km;
                                    }}
                                  >
                                    <div class="walk-min">${w.min}</div>
                                    <div class="walk-km">${w.km}</div>
                                  </div>
                                `
                              )}
                            </div>
                          </div>
                        `
                      : null}

                    <!-- 6. Vet Visit Reason (Vet) -->
                    ${showVet
                      ? html`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '진료 내용' : 'Visit Reason'}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.vetReasons.map(
                                (r) => html`
                                  <div
                                    class="mood-pill ${this.vetReason === r ? 'active' : ''}"
                                    @click=${() => (this.vetReason = r)}
                                  >
                                    ${r}
                                  </div>
                                `
                              )}
                            </div>
                          </div>
                        `
                      : null}

                    <!-- 7. Symptom Tags (Symptom) -->
                    ${showSymptom
                      ? html`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '관찰된 증상' : 'Symptom observed'}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.symptomOptions.map(
                                (sym) => html`
                                  <div
                                    class="mood-pill ${this.symptom === sym ? 'active' : ''}"
                                    @click=${() => (this.symptom = sym)}
                                  >
                                    ${sym}
                                  </div>
                                `
                              )}
                            </div>
                          </div>
                        `
                      : null}

                    <!-- 8. Food Portion (Food/Water) -->
                    ${showFood
                      ? html`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '급여량' : 'Portion'}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.portionOptions.map(
                                (p) => html`
                                  <div
                                    class="mood-pill ${this.portion === p ? 'active' : ''}"
                                    @click=${() => (this.portion = p)}
                                  >
                                    ${p}
                                  </div>
                                `
                              )}
                            </div>
                          </div>
                        `
                      : null}

                    <!-- 9. Mood on Delivery (General / Potty) -->
                    ${showMood
                      ? html`
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '기분 & 태도' : 'Mood on delivery'}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.moodOptions.map(
                                (m) => html`
                                  <div
                                    class="mood-pill ${this.mood === m ? 'active' : ''}"
                                    @click=${() => (this.mood = m)}
                                  >
                                    ${m}
                                  </div>
                                `
                              )}
                            </div>
                          </div>
                        `
                      : null}

                    <!-- Location & Logged By -->
                    <div class="pill-row">
                      <div class="pill-info">
                        <div class="pill-label">${isKo ? '위치' : 'Location'}</div>
                        <div class="pill-val">${this.locationName}</div>
                        <div class="pill-sub">${isKo ? 'GPS 핀 연결됨' : 'pin dropped'}</div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${isKo ? '기록자' : 'Logged by'}</div>
                        <div class="pill-val">
                          ${appState.currentUser?.displayName ||
                          appState.currentHousehold?.members?.[0]?.displayName ||
                          'Me'}
                        </div>
                        <div class="pill-sub">${isKo ? '가족 구성원' : 'tap to change'}</div>
                      </div>
                    </div>

                    <!-- Photo & Notes -->
                    <div class="photo-notes-row">
                      <div class="photo-box" @click=${() => this.triggerPhotoUpload()}>
                        ${this.photoUrl
                          ? html`<img src="${this.photoUrl}" alt="Photo" />`
                          : html`
                              <div class="photo-plus">+</div>
                              <div class="photo-lbl">${isKo ? '사진' : 'photo'}</div>
                            `}
                      </div>
                      <div class="notes-box">
                        <div class="pill-label">${isKo ? '메모' : 'Notes'}</div>
                        <textarea
                          style="border: none; background: transparent; font-size: 13px; font-weight: 600; color: #17140F; margin-top: 5px; line-height: 1.4; resize: none; height: 100%; font-family: inherit; outline: none;"
                          placeholder="${isKo
                            ? '수의사에게 전할 참고사항 입력...'
                            : 'Anything the vet would want to know…'}"
                          .value=${this.notes}
                          @input=${(e: any) => (this.notes = e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div style="height: 6px;"></div>
                  </div>
                `}
          </div>

          ${isStep2
            ? html`
                <div class="sheet-bottom">
                  <div class="log-submit-btn" @click=${() => this.handleSave()}>
                    ${isKo ? '기록하기!' : 'Log it!'}
                  </div>
                </div>
              `
            : null}
        </div>
      </div>
    `;
  }
}
