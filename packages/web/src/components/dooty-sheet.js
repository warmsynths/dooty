var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
import { MOOD_OPTIONS, MOOD_MAP_KO } from '@dooty/shared';
import './dooty-map-picker.js';
let DootySheet = class DootySheet extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedType = null;
        this.cons = 4;
        this.size = 'M';
        this.mood = 'Zoomy';
        this.selectedMed = 'Apoquel';
        this.selectedMedDose = '16 mg with food';
        this.customMedName = '';
        this.weightKg = 14.2;
        this.walkMin = '30 min';
        this.walkKm = '2.3 km';
        this.vetReason = 'Annual check-up';
        this.symptom = 'Itch / Scratch';
        this.portion = '1 cup';
        this.photoUrl = '';
        this.notes = '';
        this.locationName = '';
        this.lat = undefined;
        this.lng = undefined;
        this.isLocating = false;
        this.showLocationPicker = false;
        this.showMapPicker = false;
        this.showTimePicker = false;
        this.customTimestamp = '';
        this.walkPetIds = [];
        this.weatherText = '';
        this.isFetchingWeather = false;
        this.wasOpen = false;
        this.consNames = [
            'hard pellets',
            'lumpy log',
            'cracked log',
            'textbook — the dream',
            'soft blobs',
            'mushy',
            'liquid',
        ];
        this.consNamesKo = [
            '단단한 토끼똥',
            '울퉁불퉁한 변',
            '약간 갈라진 변',
            '완벽한 황금변 (최고)',
            '무른 덩어리변',
            '형태 없는 묽은변',
            '설사/수분성 액체',
        ];
        this.typeDefs = [
            { id: 'poop', name: 'Poop', nameKo: '응가', tag: 'P', sub: 'the main event', subKo: '주요 배변 활동', c: '#FFCE2E' },
            { id: 'pee', name: 'Pee', nameKo: '쉬야', tag: 'U', sub: 'quick mark', subKo: '배뇨 영역 표시', c: '#BFD0FF' },
            { id: 'vomit', name: 'Vomit', nameKo: '구토', tag: 'V', sub: 'we hope not', subKo: '소화 이상/토', c: '#FF9A3C' },
            { id: 'medicine', name: 'Medicine', nameKo: '약/영양제', tag: 'M', sub: '3 on schedule', subKo: '투약 일정 관리', c: '#1FC99B' },
            { id: 'weight', name: 'Weight', nameKo: '몸무게', tag: 'KG', sub: 'last 14.2 kg', subKo: '체중 변화 기록', c: '#2B5BE8' },
            { id: 'walk', name: 'Walk', nameKo: '산책', tag: 'W', sub: '2 already today', subKo: '야외 활동 & 코스', c: '#9EC6E8' },
            { id: 'vet', name: 'Vet visit', nameKo: '병원 진료', tag: 'D', sub: 'appointments', subKo: '검진 및 진료 예약', c: '#FFD15C' },
            { id: 'symptom', name: 'Symptom', nameKo: '증상 메모', tag: 'S', sub: 'itch, limp, mood', subKo: '가려움, 절뚝임 등', c: '#FF5A3C' },
        ];
        this.medOptions = [
            { name: 'Apoquel', dose: '16 mg with food' },
            { name: 'Joint chew', dose: '1 chew, evening' },
            { name: 'Flea & tick', dose: 'topical, weekly' },
        ];
        this.walkOptions = [
            { min: '15 min', minKo: '15분', km: '1.1 km' },
            { min: '30 min', minKo: '30분', km: '2.3 km' },
            { min: '45 min', minKo: '45분', km: '3.4 km' },
            { min: '1 hr', minKo: '1시간', km: '4.6 km' },
        ];
        this.vetReasons = [
            { id: 'Annual check-up', name: 'Annual check-up', nameKo: '정기 검진' },
            { id: 'Vaccination booster', name: 'Vaccination booster', nameKo: '예방 접종' },
            { id: 'Loose stool consult', name: 'Loose stool consult', nameKo: '배변/설사 진료' },
            { id: 'Dental scaling', name: 'Dental scaling', nameKo: '치과/스케일링' },
            { id: 'Medication renewal', name: 'Medication renewal', nameKo: '처방약 재발급' },
            { id: 'Follow-up exam', name: 'Follow-up exam', nameKo: '재진/경과 관찰' },
        ];
        this.symptomOptions = [
            { id: 'Itch / Scratch', name: 'Itch / Scratch', nameKo: '가려움 / 긁음' },
            { id: 'Limping / Joint', name: 'Limping / Joint', nameKo: '절뚝임 / 관절' },
            { id: 'Lethargic / Low energy', name: 'Lethargic / Low energy', nameKo: '기력 저하' },
            { id: 'Coughing / Reverse sneeze', name: 'Coughing / Reverse sneeze', nameKo: '기침 / 역재채기' },
            { id: 'Loss of Appetite', name: 'Loss of Appetite', nameKo: '식욕 부진' },
            { id: 'Skin redness / Rash', name: 'Skin redness / Rash', nameKo: '피부 발진 / 붉어짐' },
            { id: 'Ear shaking', name: 'Ear shaking', nameKo: '귀 털기 / 귓병' },
        ];
        this.portionOptions = [
            { id: '0.5 cup', name: '0.5 cup', nameKo: '0.5 컵' },
            { id: '1.0 cup', name: '1.0 cup', nameKo: '1.0 컵' },
            { id: '1.5 cups', name: '1.5 cups', nameKo: '1.5 컵' },
            { id: '2.0 cups', name: '2.0 cups', nameKo: '2.0 컵' },
            { id: 'Full bowl', name: 'Full bowl', nameKo: '한 그릇 가득' },
            { id: 'Special treats', name: 'Special treats', nameKo: '특별 간식' },
        ];
        this.moodOptions = MOOD_OPTIONS;
        this.locationPresets = [
            'Home / Indoor',
            'Backyard',
            'Park',
            'Walk Route',
            'Vet Clinic',
            'Daycare',
        ];
        this.locationPresetsKo = [
            '우리집 / 실내',
            '마당 / 배변패드',
            '공원 / 산책로',
            '단지 내 산책',
            '동물병원',
            '데이케어',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribe = appState.subscribe(() => {
            if (appState.loggerModalOpen) {
                if (!this.wasOpen) {
                    this.walkPetIds = appState.currentPet ? [appState.currentPet.id] : [];
                    // Just opened
                    if (appState.editingEvent) {
                        const evt = appState.editingEvent;
                        const meta = evt.metadata || {};
                        this.selectedType = evt.eventType;
                        // Extract user-entered note if wrapped in formatted string
                        let userNote = evt.notes || '';
                        const parts = userNote.split(' · ');
                        if (parts.length > 1) {
                            const last = parts[parts.length - 1].trim();
                            if (last !== meta.mood && last !== meta.size && last !== meta.portion) {
                                userNote = last;
                            }
                            else {
                                userNote = '';
                            }
                        }
                        else if (userNote.startsWith('응가') ||
                            userNote.startsWith('쉬야') ||
                            userNote.startsWith('Type ') ||
                            userNote.startsWith('Pee') ||
                            userNote.startsWith('Vomit') ||
                            userNote.startsWith('구토') ||
                            userNote.startsWith('Weigh-in') ||
                            userNote.startsWith('체중')) {
                            userNote = '';
                        }
                        this.notes = userNote;
                        this.photoUrl = meta.photoUrl || '';
                        this.locationName = meta.locationName || '';
                        this.lat = evt.latitude;
                        this.lng = evt.longitude;
                        this.weatherText = meta.weather || '';
                        this.customTimestamp = evt.timestamp || new Date().toISOString();
                        if (meta.consistency)
                            this.cons = meta.consistency;
                        if (meta.size)
                            this.size = meta.size;
                        if (meta.mood)
                            this.mood = meta.mood;
                        if (meta.medication)
                            this.selectedMed = meta.medication;
                        if (meta.dosage)
                            this.selectedMedDose = meta.dosage;
                        if (meta.weightKg)
                            this.weightKg = meta.weightKg;
                        if (meta.walkDuration)
                            this.walkMin = meta.walkDuration;
                        if (meta.walkDistance)
                            this.walkKm = meta.walkDistance;
                        if (meta.visitReason)
                            this.vetReason = meta.visitReason;
                        if (meta.symptom)
                            this.symptom = meta.symptom;
                        if (meta.portion)
                            this.portion = meta.portion;
                        this.isLocating = false;
                        this.showLocationPicker = false;
                        this.showMapPicker = false;
                        this.showTimePicker = false;
                        this.isFetchingWeather = false;
                    }
                    else {
                        this.selectedType = appState.loggerEventType || null;
                        this.locationName = '';
                        this.lat = undefined;
                        this.lng = undefined;
                        this.notes = '';
                        this.photoUrl = '';
                        this.customMedName = '';
                        this.customTimestamp = new Date().toISOString();
                        this.isLocating = false;
                        this.showLocationPicker = false;
                        this.showMapPicker = false;
                        this.showTimePicker = false;
                        this.weatherText = '';
                        this.isFetchingWeather = false;
                        this.autoFetchWeather();
                    }
                    this.wasOpen = true;
                }
                else if (appState.loggerEventType && this.selectedType !== appState.loggerEventType && !appState.editingEvent) {
                    this.selectedType = appState.loggerEventType;
                }
            }
            else {
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
    static { this.styles = css `
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
      max-width: 480px;
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
      cursor: pointer;
      user-select: none;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .pill-info:hover {
      background: #FFFBF0;
    }

    .pill-info.active-picker {
      background: #FFE8A3;
      box-shadow: 1px 1px 0 #17140F;
      transform: translateY(1px);
    }

    .location-picker-card, .time-picker-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 14px;
      box-shadow: 3px 3px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 10px;
      animation: fadeIn 0.15s ease-out;
    }

    .custom-time-input {
      width: 100%;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 8px 12px;
      font-size: 13.5px;
      font-family: inherit;
      font-weight: 800;
      color: #17140F;
      background: #FFFBF2;
      box-sizing: border-box;
      outline: none;
    }

    .custom-time-input:focus {
      border-color: #2B5BE8;
    }

    .picker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .picker-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 14px;
      color: #17140F;
    }

    .picker-close-btn {
      background: #F3EFE6;
      border: 2px solid #17140F;
      border-radius: 8px;
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: 800;
      font-size: 12px;
    }

    .gps-btn-row {
      display: flex;
      gap: 8px;
    }

    .gps-action-btn {
      flex: 1;
      background: #FFE485;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 9px 12px;
      font-family: inherit;
      font-weight: 800;
      font-size: 13px;
      color: #17140F;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      box-shadow: 2px 2px 0 #17140F;
      transition: transform 0.08s ease, box-shadow 0.08s ease;
    }

    .gps-action-btn.tagged {
      background: #9EE0C8;
    }

    .gps-action-btn:hover {
      filter: brightness(1.03);
    }

    .gps-action-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .gps-clear-btn {
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 9px 12px;
      font-family: inherit;
      font-weight: 800;
      font-size: 12px;
      color: #17140F;
      cursor: pointer;
      box-shadow: 2px 2px 0 #17140F;
    }

    .map-picker-trigger-btn {
      width: 100%;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 10px 14px;
      font-family: inherit;
      font-weight: 800;
      font-size: 13px;
      color: #17140F;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      box-shadow: 2px 2px 0 #17140F;
      transition: transform 0.08s ease, box-shadow 0.08s ease, background 0.08s ease;
      box-sizing: border-box;
    }

    .map-picker-trigger-btn:hover {
      background: #FFFBF2;
    }

    .map-picker-trigger-btn:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .picker-section-lbl {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #9A9080;
      text-transform: uppercase;
      margin-top: 2px;
    }

    .location-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .location-chip {
      background: #F3EFE6;
      border: 2px solid #17140F;
      border-radius: 10px;
      padding: 5px 9px;
      font-size: 11.5px;
      font-weight: 700;
      color: #17140F;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 0 #17140F;
      transition: all 0.08s ease;
    }

    .location-chip.active {
      background: #FFCE2E;
      box-shadow: 0.5px 0.5px 0 #17140F;
      transform: translateY(1px);
    }

    .custom-loc-input-row {
      margin-top: 2px;
    }

    .custom-loc-input {
      width: 100%;
      border: 2.5px solid #17140F;
      border-radius: 12px;
      padding: 8px 12px;
      font-size: 13px;
      font-family: inherit;
      font-weight: 600;
      color: #17140F;
      background: #FFFBF2;
      box-sizing: border-box;
      outline: none;
    }

    .custom-loc-input:focus {
      border-color: #2B5BE8;
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

    /* Start Walk Button & Who's coming */
    .start-walk-btn {
      background: #1FC99B;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px 16px;
      display: flex;
      align-items: center;
      gap: 13px;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      box-sizing: border-box;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.16s ease;
    }

    .start-walk-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
    }

    .start-walk-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #17140F;
    }

    .play-icon-circle {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFF;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 4px;
      box-sizing: border-box;
    }

    .play-triangle {
      width: 0;
      height: 0;
      border-left: 14px solid #17140F;
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
    }

    .start-walk-title {
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 19px;
      color: #17140F;
      letter-spacing: -0.5px;
    }

    .start-walk-sub {
      font-size: 11.5px;
      font-weight: 700;
      color: #0A5A45;
      margin-top: 1px;
    }

    .who-chips-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .who-pet-chip {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 7px 12px 7px 7px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .who-pet-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
    }

    .who-pet-chip:active {
      transform: scale(0.965);
    }

    .who-pet-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 12px;
      color: #17140F;
    }

    .who-pet-name {
      font-size: 13px;
      font-weight: 800;
      color: #17140F;
    }

    .who-tick-circle {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFF;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      color: #17140F;
    }

    .who-pet-chip.active .who-tick-circle {
      background: #17140F;
      color: #FFCE2E;
    }

    .walk-or-divider {
      display: flex;
      align-items: center;
      gap: 9px;
      margin: 4px 0;
    }

    .walk-or-line {
      flex: 1;
      height: 2.5px;
      background: #E3D8BE;
    }

    .walk-or-text {
      font-size: 8.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 1.1px;
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

    .log-delete-btn {
      background: #FFF;
      border: 3px solid #E02424;
      border-radius: 20px;
      padding: 16px 18px;
      text-align: center;
      font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
      font-weight: 800;
      font-size: 16px;
      color: #E02424;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      user-select: none;
      transition: background 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      flex: none;
    }

    .log-delete-btn:hover {
      background: #FEE2E2;
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #17140F;
    }

    .log-delete-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `; }
    handleSelectType(typeId) {
        this.selectedType = typeId;
        appState.loggerEventType = typeId;
    }
    handleBackToTypes() {
        this.selectedType = null;
        appState.loggerEventType = null;
    }
    triggerPhotoUpload() {
        if (!this.fileInput) {
            this.fileInput = document.createElement('input');
            this.fileInput.type = 'file';
            this.fileInput.accept = 'image/*';
            this.fileInput.style.display = 'none';
            document.body.appendChild(this.fileInput);
            this.fileInput.addEventListener('change', (e) => {
                const file = e.target.files?.[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        this.photoUrl = event.target?.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        this.fileInput.click();
    }
    selectPreset(preset) {
        this.locationName = preset;
        if (!this.lat && typeof navigator !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.lat = pos.coords.latitude;
                this.lng = pos.coords.longitude;
                this.requestUpdate();
            }, () => { }, { timeout: 5000 });
        }
    }
    clearLocation() {
        this.locationName = '';
        this.lat = undefined;
        this.lng = undefined;
        this.isLocating = false;
    }
    async fetchCurrentLocation() {
        if (typeof navigator === 'undefined' || !navigator.geolocation) {
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: {
                    title: appState.currentLocale === 'ko' ? '위치 권한 필요' : 'GPS Unavailable',
                    sub: appState.currentLocale === 'ko'
                        ? '브라우저에서 위치 정보 접근을 허용해주세요.'
                        : 'Geolocation is not supported or permitted by your browser.',
                },
            }));
            return;
        }
        this.isLocating = true;
        this.requestUpdate();
        navigator.geolocation.getCurrentPosition(async (pos) => {
            this.lat = pos.coords.latitude;
            this.lng = pos.coords.longitude;
            this.isLocating = false;
            if (!this.locationName) {
                this.locationName = `${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`;
                this.tryReverseGeocode(this.lat, this.lng);
            }
            // Also refresh weather with the precise GPS coordinates
            this.fetchWeather(this.lat, this.lng);
            this.requestUpdate();
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: {
                    title: appState.currentLocale === 'ko' ? 'GPS 위치 태그 완료' : 'GPS Location Tagged',
                    sub: `${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`,
                },
            }));
        }, (err) => {
            console.warn('Geolocation failed:', err);
            this.isLocating = false;
            this.requestUpdate();
            this.dispatchEvent(new CustomEvent('dooty-toast', {
                bubbles: true,
                composed: true,
                detail: {
                    title: appState.currentLocale === 'ko' ? '위치 확인 실패' : 'Location Tagging Failed',
                    sub: err.message ||
                        (appState.currentLocale === 'ko'
                            ? '위치 정보를 가져올 수 없습니다.'
                            : 'Could not retrieve GPS coordinates.'),
                },
            }));
        }, { enableHighAccuracy: true, timeout: 8000 });
    }
    /** Silently request location on sheet open just for weather */
    autoFetchWeather() {
        if (typeof navigator === 'undefined' || !navigator.geolocation)
            return;
        this.isFetchingWeather = true;
        this.weatherText = '';
        this.requestUpdate();
        navigator.geolocation.getCurrentPosition((pos) => {
            this.fetchWeather(pos.coords.latitude, pos.coords.longitude);
        }, () => {
            this.isFetchingWeather = false;
            this.weatherText = '';
            this.requestUpdate();
        }, { timeout: 5000 });
    }
    async fetchWeather(lat, lng) {
        this.isFetchingWeather = true;
        this.requestUpdate();
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code&temperature_unit=celsius`;
            const res = await fetch(url);
            if (!res.ok)
                throw new Error('Weather API error');
            const data = await res.json();
            const temp = Math.round(data.current?.temperature_2m ?? 0);
            const code = data.current?.weather_code ?? 0;
            const desc = this.wmoCodeToDescription(code);
            this.weatherText = `${temp}° ${desc}`;
        }
        catch (e) {
            console.warn('Weather fetch failed:', e);
            this.weatherText = '';
        }
        finally {
            this.isFetchingWeather = false;
            this.requestUpdate();
        }
    }
    wmoCodeToDescription(code) {
        const isKo = appState.currentLocale === 'ko';
        const map = {
            0: ['☀️ clear', '☀️ 맑음'],
            1: ['🌤️ mostly clear', '🌤️ 대체로 맑음'],
            2: ['⛅ partly cloudy', '⛅ 구름 조금'],
            3: ['☁️ overcast', '☁️ 흐림'],
            45: ['🌫️ fog', '🌫️ 안개'],
            48: ['🌫️ rime fog', '🌫️ 서리 안개'],
            51: ['🌦️ light drizzle', '🌦️ 가벼운 이슬비'],
            53: ['🌦️ drizzle', '🌦️ 이슬비'],
            55: ['🌧️ heavy drizzle', '🌧️ 강한 이슬비'],
            56: ['🌧️ freezing drizzle', '🌧️ 얼어붙는 이슬비'],
            57: ['🌧️ heavy freezing drizzle', '🌧️ 강한 결빙 이슬비'],
            61: ['🌧️ light rain', '🌧️ 약한 비'],
            63: ['🌧️ rain', '🌧️ 비'],
            65: ['🌧️ heavy rain', '🌧️ 강한 비'],
            66: ['🌧️ freezing rain', '🌧️ 얼어붙는 비'],
            67: ['🌧️ heavy freezing rain', '🌧️ 강한 결빙 비'],
            71: ['🌨️ light snow', '🌨️ 약한 눈'],
            73: ['🌨️ snow', '🌨️ 눈'],
            75: ['❄️ heavy snow', '❄️ 강한 눈'],
            77: ['🌨️ snow grains', '🌨️ 싸락눈'],
            80: ['🌦️ light showers', '🌦️ 약한 소나기'],
            81: ['🌧️ showers', '🌧️ 소나기'],
            82: ['⛈️ heavy showers', '⛈️ 강한 소나기'],
            85: ['🌨️ light snow showers', '🌨️ 약한 눈 소나기'],
            86: ['❄️ heavy snow showers', '❄️ 강한 눈 소나기'],
            95: ['⛈️ thunderstorm', '⛈️ 뇌우'],
            96: ['⛈️ thunderstorm w/ hail', '⛈️ 우박 동반 뇌우'],
            99: ['⛈️ severe thunderstorm', '⛈️ 강한 뇌우'],
        };
        const entry = map[code];
        if (entry)
            return isKo ? entry[1] : entry[0];
        return isKo ? '☁️ 알 수 없음' : '☁️ unknown';
    }
    async tryReverseGeocode(lat, lng) {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`, {
                headers: {
                    Accept: 'application/json',
                },
            });
            if (res.ok) {
                const data = await res.json();
                const road = data.address?.road ||
                    data.address?.pedestrian ||
                    data.address?.suburb ||
                    data.address?.neighbourhood;
                const city = data.address?.city ||
                    data.address?.town ||
                    data.address?.village ||
                    data.address?.county;
                if (road && city) {
                    this.locationName = `${road}, ${city}`;
                }
                else if (road) {
                    this.locationName = road;
                }
                else if (data.display_name) {
                    const parts = data.display_name.split(',');
                    this.locationName = parts.slice(0, 2).join(',').trim();
                }
                this.requestUpdate();
            }
        }
        catch {
            // Keep coordinate fallback
        }
    }
    formatDisplayTime(isoString) {
        const isKo = appState.currentLocale === 'ko';
        const timestamp = isoString || new Date().toISOString();
        const d = new Date(timestamp);
        if (isNaN(d.getTime())) {
            return {
                main: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).toLowerCase(),
                sub: isKo ? '오늘 · 탭하여 변경' : 'Today · tap to edit',
            };
        }
        const now = new Date();
        const isToday = d.getFullYear() === now.getFullYear() &&
            d.getMonth() === now.getMonth() &&
            d.getDate() === now.getDate();
        const timePart = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).toLowerCase();
        if (isToday) {
            return {
                main: timePart,
                sub: isKo ? '오늘 · 탭하여 변경' : 'Today · tap to edit',
            };
        }
        else {
            const datePart = isKo
                ? `${d.getMonth() + 1}월 ${d.getDate()}일`
                : d.toLocaleDateString([], { month: 'short', day: 'numeric' });
            return {
                main: `${datePart}, ${timePart}`,
                sub: isKo ? '지정된 일시 · 탭하여 변경' : 'Custom date · tap to edit',
            };
        }
    }
    toDatetimeLocalValue(isoString) {
        const d = isoString ? new Date(isoString) : new Date();
        if (isNaN(d.getTime()))
            return '';
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    handleCustomTimeInput(val) {
        if (!val) {
            this.customTimestamp = new Date().toISOString();
        }
        else {
            const d = new Date(val);
            this.customTimestamp = isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
        }
        this.requestUpdate();
    }
    setQuickOffsetMinutes(offsetMinutes) {
        const target = new Date(Date.now() - offsetMinutes * 60 * 1000);
        this.customTimestamp = target.toISOString();
        this.requestUpdate();
    }
    setQuickOffsetDays(offsetDays) {
        const target = new Date(Date.now() - offsetDays * 24 * 60 * 60 * 1000);
        this.customTimestamp = target.toISOString();
        this.requestUpdate();
    }
    setNow() {
        this.customTimestamp = new Date().toISOString();
        this.requestUpdate();
    }
    async handleSave() {
        const isKo = appState.currentLocale === 'ko';
        const type = (this.selectedType || 'poop');
        const petName = appState.currentPet?.name || (isKo ? '반려견' : 'Pet');
        let summaryNotes = '';
        let toastTitle = isKo ? '기록 완료!' : 'Logged it!';
        let toastSub = '';
        const finalTimestamp = this.customTimestamp || (appState.editingEvent ? appState.editingEvent.timestamp : new Date().toISOString());
        const metadata = {
            timestamp: finalTimestamp,
            photoUrl: this.photoUrl || undefined,
            locationName: this.locationName || (this.lat ? `${this.lat.toFixed(4)}, ${this.lng?.toFixed(4)}` : undefined),
            weather: this.weatherText,
        };
        const moodLabel = isKo ? (MOOD_MAP_KO[this.mood] || this.mood) : this.mood;
        if (type === 'poop') {
            const consLabel = isKo ? this.consNamesKo[this.cons - 1] : this.consNames[this.cons - 1];
            summaryNotes = isKo
                ? `응가 ${this.cons}단계 (${consLabel}) · ${this.size} · ${moodLabel}`
                : `Type ${this.cons} (${this.consNames[this.cons - 1]}) · ${this.size} · ${this.mood}`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.consistency = this.cons;
            metadata.consistencyLabel = this.consNames[this.cons - 1];
            metadata.size = this.size;
            metadata.mood = this.mood;
            toastTitle = isKo ? '응가 기록 완료!' : 'Logged it!';
            toastSub = isKo
                ? `${petName}의 배변 기록: ${this.cons}단계 · ${this.size}`
                : `${petName}’s log: Type ${this.cons} · ${this.size}`;
        }
        else if (type === 'pee') {
            summaryNotes = isKo
                ? `쉬야 · ${this.size} · ${moodLabel}`
                : `Pee · ${this.size} · ${this.mood}`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.size = this.size;
            metadata.mood = this.mood;
            toastTitle = isKo ? '쉬야 완료!' : 'Marked!';
            toastSub = isKo ? '영역 표시 기록됨.' : 'Territory marked.';
        }
        else if (type === 'vomit') {
            summaryNotes = isKo
                ? `구토 · ${this.cons}단계 · ${moodLabel}`
                : `Vomit · Type ${this.cons} · ${this.mood}`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.consistency = this.cons;
            metadata.consistencyLabel = this.consNames[this.cons - 1];
            metadata.mood = this.mood;
            toastTitle = isKo ? '구토 기록됨 & 주의 알림' : 'Logged and flagged';
            toastSub = isKo ? '24시간 내 반복 발생 시 알림을 드립니다.' : 'Two in 48h will alert you.';
        }
        else if (type === 'medicine') {
            const medName = this.customMedName || this.selectedMed;
            summaryNotes = `${medName} (${this.selectedMedDose})`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.medication = medName;
            metadata.dosage = this.selectedMedDose;
            toastTitle = isKo ? '투약 기록 완료' : `${medName} given`;
            toastSub = isKo ? '다음 투약 일정에 반영됩니다.' : 'Next dose scheduled.';
        }
        else if (type === 'weight') {
            summaryNotes = isKo
                ? `체중 측정: ${this.weightKg.toFixed(1)} kg`
                : `Weigh-in: ${this.weightKg.toFixed(1)} kg`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.weightKg = this.weightKg;
            toastTitle = isKo ? '체중 저장됨' : 'Weigh-in saved';
            toastSub = `${this.weightKg.toFixed(1)} kg · ${isKo ? '체중 기록 완료' : 'recorded'}`;
        }
        else if (type === 'walk') {
            const walkMinLabel = isKo ? this.walkOptions.find(w => w.min === this.walkMin)?.minKo || this.walkMin : this.walkMin;
            summaryNotes = isKo
                ? `산책 · ${walkMinLabel} (${this.walkKm}) · ${moodLabel}`
                : `Walk · ${this.walkMin} (${this.walkKm}) · ${this.mood}`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.walkDuration = this.walkMin;
            metadata.walkDistance = this.walkKm;
            metadata.mood = this.mood;
            toastTitle = isKo ? '산책 기록 완료' : 'Walk logged';
            toastSub = `${walkMinLabel} · ${this.walkKm} · ${isKo ? '좋은 운동이었어요!' : 'Good effort.'}`;
        }
        else if (type === 'vet') {
            const vetLabel = isKo ? this.vetReasons.find(v => v.id === this.vetReason)?.nameKo || this.vetReason : this.vetReason;
            summaryNotes = isKo ? `병원 진료: ${vetLabel}` : `Vet visit: ${this.vetReason}`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.visitReason = this.vetReason;
            toastTitle = isKo ? '진료 기록 추가' : 'Visit added';
            toastSub = isKo ? '진료 내역 및 알림이 설정되었습니다.' : 'Reminder set.';
        }
        else if (type === 'symptom') {
            const symLabel = isKo ? this.symptomOptions.find(s => s.id === this.symptom)?.nameKo || this.symptom : this.symptom;
            summaryNotes = isKo ? `증상: ${symLabel}` : `Symptom: ${this.symptom}`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.symptom = this.symptom;
            toastTitle = isKo ? '증상 기록됨' : 'Symptom noted';
            toastSub = isKo ? '수의사 진료용 요약에 추가되었습니다.' : 'Added to vet-ready summary.';
        }
        else if (type === 'food' || type === 'water') {
            const portionLabel = isKo ? this.portionOptions.find(p => p.id === this.portion)?.nameKo || this.portion : this.portion;
            summaryNotes = isKo ? `식사: ${portionLabel}` : `Meal: ${this.portion}`;
            if (this.notes)
                summaryNotes += ` · ${this.notes}`;
            metadata.portion = this.portion;
            toastTitle = isKo ? '식사 기록 완료' : 'Meal recorded';
            toastSub = `${portionLabel}`;
        }
        if (appState.editingEvent) {
            await appState.updateEvent(appState.editingEvent.id, type, summaryNotes, metadata, this.lat, this.lng, finalTimestamp);
            toastTitle = isKo ? '기록 수정 완료!' : 'Entry updated!';
            toastSub = isKo ? '수정사항이 저장되었습니다.' : 'Changes saved.';
        }
        else {
            await appState.logEvent(type, summaryNotes, metadata, this.lat, this.lng, finalTimestamp);
        }
        this.close();
        // Trigger celebratory toast & confetti burst
        this.dispatchEvent(new CustomEvent('dooty-toast', {
            bubbles: true,
            composed: true,
            detail: {
                title: toastTitle,
                sub: toastSub,
            },
        }));
    }
    async handleDelete() {
        if (!appState.editingEvent)
            return;
        const isKo = appState.currentLocale === 'ko';
        const confirmMsg = isKo ? '정말 이 기록을 삭제하시겠습니까?' : 'Are you sure you want to delete this entry?';
        if (!window.confirm(confirmMsg))
            return;
        const eventId = appState.editingEvent.id;
        await appState.deleteEvent(eventId);
        this.close();
        this.dispatchEvent(new CustomEvent('dooty-toast', {
            bubbles: true,
            composed: true,
            detail: {
                title: isKo ? '기록 삭제됨' : 'Entry deleted',
                sub: isKo ? '기록이 정상적으로 삭제되었습니다.' : 'The log entry has been removed.',
            },
        }));
    }
    handleSpotSelected(e) {
        this.lat = e.detail.lat;
        this.lng = e.detail.lng;
        if (e.detail.locationName) {
            this.locationName = e.detail.locationName;
        }
        else if (this.lat !== undefined && this.lng !== undefined) {
            this.locationName = `${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`;
        }
        if (this.lat !== undefined && this.lng !== undefined) {
            this.fetchWeather(this.lat, this.lng);
        }
        this.showMapPicker = false;
        this.requestUpdate();
    }
    close() {
        this.selectedType = null;
        this.notes = '';
        this.photoUrl = '';
        this.customMedName = '';
        this.locationName = '';
        this.lat = undefined;
        this.lng = undefined;
        this.customTimestamp = '';
        this.isLocating = false;
        this.showLocationPicker = false;
        this.showMapPicker = false;
        this.showTimePicker = false;
        appState.closeLogger();
    }
    render() {
        if (!appState.loggerModalOpen)
            return null;
        const isStep1 = !this.selectedType;
        const isStep2 = !!this.selectedType;
        const isKo = appState.currentLocale === 'ko';
        const sheetTitles = {
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
        const isEditing = !!appState.editingEvent;
        const currentTitlePair = isEditing
            ? (isKo ? ['기록 수정하기', '내용을 변경하거나 삭제할 수 있습니다'] : ['Edit Log Entry', 'Update details or delete entry'])
            : this.selectedType
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
        return html `
      <div class="sheet-overlay">
        <div class="sheet-backdrop" @click=${() => this.close()}></div>
        <div class="sheet-body">
          <div class="sheet-top">
            <div class="sheet-handle"></div>
            <div class="sheet-header-row">
              ${isStep2 && !isEditing
            ? html `
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
            ? html `
                  <div class="type-grid">
                    ${this.typeDefs.map((t) => html `
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
                      `)}
                  </div>
                `
            : html `
                  <div class="form-col">
                    <!-- Top Pill Row: Time & Status/Weather -->
                    <div class="pill-row">
                      <div
                        class="pill-info ${this.showTimePicker ? 'active-picker' : ''}"
                        @click=${() => {
                this.showTimePicker = !this.showTimePicker;
                if (this.showTimePicker)
                    this.showLocationPicker = false;
            }}
                      >
                        <div class="pill-label">${isKo ? '시간' : 'Time'} ⏱️</div>
                        <div class="pill-val">
                          ${this.formatDisplayTime(this.customTimestamp).main}
                        </div>
                        <div class="pill-sub">
                          ${this.formatDisplayTime(this.customTimestamp).sub}
                        </div>
                      </div>
                      <div class="pill-info">
                        <div class="pill-label">${isKo ? '상태 / 날씨' : 'Weather / GPS'}</div>
                        <div class="pill-val">${this.isFetchingWeather ? (isKo ? '날씨 확인중…' : 'fetching…') : (this.weatherText || (isKo ? '—' : '—'))}</div>
                        <div class="pill-sub">${this.weatherText ? (isKo ? '실시간 날씨' : 'Live weather') : (isKo ? 'GPS 기반' : 'GPS synced')}</div>
                      </div>
                    </div>

                    <!-- Date & Time Picker Card -->
                    ${this.showTimePicker
                ? html `
                          <div class="time-picker-card">
                            <div class="picker-header">
                              <span class="picker-title">${isKo ? '일시 및 시간 변경' : 'Adjust Date & Time'}</span>
                              <button class="picker-close-btn" @click=${() => (this.showTimePicker = false)}>✕</button>
                            </div>

                            <div class="picker-section-lbl">${isKo ? '빠른 시간 선택' : 'Quick Time'}</div>
                            <div class="location-chips-row">
                              <div class="location-chip" @click=${() => this.setNow()}>
                                ⏱️ ${isKo ? '지금' : 'Now'}
                              </div>
                              <div class="location-chip" @click=${() => this.setQuickOffsetMinutes(15)}>
                                ${isKo ? '15분 전' : '15m ago'}
                              </div>
                              <div class="location-chip" @click=${() => this.setQuickOffsetMinutes(30)}>
                                ${isKo ? '30분 전' : '30m ago'}
                              </div>
                              <div class="location-chip" @click=${() => this.setQuickOffsetMinutes(60)}>
                                ${isKo ? '1시간 전' : '1h ago'}
                              </div>
                              <div class="location-chip" @click=${() => this.setQuickOffsetDays(1)}>
                                ${isKo ? '어제 이맘때' : 'Yesterday'}
                              </div>
                            </div>

                            <div class="picker-section-lbl">${isKo ? '직접 날짜 & 시간 지정' : 'Exact Date & Time'}</div>
                            <div class="custom-loc-input-row">
                              <input
                                type="datetime-local"
                                class="custom-time-input"
                                .value=${this.toDatetimeLocalValue(this.customTimestamp)}
                                @input=${(e) => this.handleCustomTimeInput(e.target.value)}
                              />
                            </div>
                          </div>
                        `
                : null}

                    <!-- 1. Consistency (Poop / Vomit) -->
                    ${showCons
                ? html `
                          <div>
                            <div class="section-lbl">${isKo ? '변 상태 / 형태' : 'Consistency'}</div>
                            <div class="section-sub">
                              Type ${this.cons} — ${isKo ? this.consNamesKo[this.cons - 1] : this.consNames[this.cons - 1]}
                            </div>
                            <div class="cons-row">
                              ${[1, 2, 3, 4, 5, 6, 7].map((n) => html `
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
                                `)}
                            </div>
                          </div>
                        `
                : null}

                    <!-- 2. Size (Poop / Pee) -->
                    ${showSize
                ? html `
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '크기 / 양' : 'Size'}
                            </div>
                            <div class="size-row">
                              ${['S', 'M', 'L', 'XL'].map((s) => html `
                                  <div
                                    class="size-btn ${this.size === s ? 'active' : ''}"
                                    @click=${() => (this.size = s)}
                                  >
                                    ${s}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `
                : null}

                    <!-- 3. Weight Stepper (Weight) -->
                    ${showWeight
                ? html `
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
                ? html `
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '복용 약품' : 'Which one'}
                            </div>
                            <div class="med-list">
                              ${this.medOptions.map((m) => html `
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
                                `)}
                            </div>
                          </div>
                        `
                : null}

                    <!-- 5. Walk (Live tracking & Quick logs) -->
                    ${showWalk
                ? html `
                          <div style="display: flex; flex-direction: column; gap: 14px;">
                            <!-- Start Live Walk Button -->
                            <div
                              class="start-walk-btn"
                              @click=${() => {
                    appState.closeLogger();
                    appState.startLiveWalk(this.walkPetIds);
                }}
                            >
                              <div class="play-icon-circle">
                                <div class="play-triangle"></div>
                              </div>
                              <div style="flex: 1; min-width: 0;">
                                <div class="start-walk-title">${isKo ? '지금 산책 시작' : 'Start walk now'}</div>
                                <div class="start-walk-sub">${isKo ? '시간 측정 및 경로 기록' : 'Times it and traces the route'}</div>
                              </div>
                            </div>

                            <!-- Who's Coming Multi-Pet Selector -->
                            ${appState.pets.length > 1
                    ? html `
                                  <div>
                                    <div class="section-lbl" style="margin-bottom: 9px;">
                                      ${isKo ? '누가 가나요?' : "Who's coming"}
                                    </div>
                                    <div class="who-chips-row">
                                      ${appState.pets.map((p) => {
                        const isSelected = this.walkPetIds.includes(p.id);
                        return html `
                                          <div
                                            class="who-pet-chip ${isSelected ? 'active' : ''}"
                                            @click=${() => {
                            if (isSelected) {
                                if (this.walkPetIds.length > 1) {
                                    this.walkPetIds = this.walkPetIds.filter((id) => id !== p.id);
                                }
                            }
                            else {
                                this.walkPetIds = [...this.walkPetIds, p.id];
                            }
                        }}
                                          >
                                            <div class="who-pet-avatar">${p.name.charAt(0).toUpperCase()}</div>
                                            <div class="who-pet-name">${p.name}</div>
                                            <div class="who-tick-circle">${isSelected ? '✓' : ''}</div>
                                          </div>
                                        `;
                    })}
                                    </div>
                                  </div>
                                `
                    : null}

                            <!-- Divider -->
                            <div class="walk-or-divider">
                              <div class="walk-or-line"></div>
                              <div class="walk-or-text">
                                ${isKo ? '또는 이미 완료한 산책 기록' : 'OR LOG ONE YOU ALREADY DID'}
                              </div>
                              <div class="walk-or-line"></div>
                            </div>

                            <!-- Manual Walk Duration Selector -->
                            <div>
                              <div class="section-lbl" style="margin-bottom: 10px;">
                                ${isKo ? '산책 시간' : 'How long'}
                              </div>
                              <div class="walk-row">
                                ${this.walkOptions.map((w) => html `
                                    <div
                                      class="walk-btn ${this.walkMin === w.min ? 'active' : ''}"
                                      @click=${() => {
                    this.walkMin = w.min;
                    this.walkKm = w.km;
                }}
                                    >
                                      <div class="walk-min">${isKo ? w.minKo : w.min}</div>
                                      <div class="walk-km">${w.km}</div>
                                    </div>
                                  `)}
                              </div>
                            </div>
                          </div>
                        `
                : null}


                    <!-- 6. Vet Visit Reason (Vet) -->
                    ${showVet
                ? html `
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '진료 내용' : 'Visit Reason'}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.vetReasons.map((r) => html `
                                  <div
                                    class="mood-pill ${this.vetReason === r.id ? 'active' : ''}"
                                    @click=${() => (this.vetReason = r.id)}
                                  >
                                    ${isKo ? r.nameKo : r.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `
                : null}

                    <!-- 7. Symptom Tags (Symptom) -->
                    ${showSymptom
                ? html `
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '관찰된 증상' : 'Symptom observed'}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.symptomOptions.map((sym) => html `
                                  <div
                                    class="mood-pill ${this.symptom === sym.id ? 'active' : ''}"
                                    @click=${() => (this.symptom = sym.id)}
                                  >
                                    ${isKo ? sym.nameKo : sym.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `
                : null}

                    <!-- 8. Food Portion (Food/Water) -->
                    ${showFood
                ? html `
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '급여량' : 'Portion'}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.portionOptions.map((p) => html `
                                  <div
                                    class="mood-pill ${this.portion === p.id ? 'active' : ''}"
                                    @click=${() => (this.portion = p.id)}
                                  >
                                    ${isKo ? p.nameKo : p.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `
                : null}

                    <!-- 9. Mood on Delivery (General / Potty) -->
                    ${showMood
                ? html `
                          <div>
                            <div class="section-lbl" style="margin-bottom: 10px;">
                              ${isKo ? '기분 & 태도' : 'Mood on delivery'}
                            </div>
                            <div class="wrap-pill-row">
                              ${this.moodOptions.map((m) => html `
                                  <div
                                    class="mood-pill ${this.mood === m.id ? 'active' : ''}"
                                    @click=${() => (this.mood = m.id)}
                                  >
                                    ${isKo ? m.nameKo : m.name}
                                  </div>
                                `)}
                            </div>
                          </div>
                        `
                : null}

                    <!-- Location & Logged By -->
                    <div class="pill-row">
                      <div
                        class="pill-info ${this.showLocationPicker ? 'active-picker' : ''}"
                        @click=${() => (this.showLocationPicker = !this.showLocationPicker)}
                      >
                        <div class="pill-label">${isKo ? '위치' : 'Location'} 📍</div>
                        <div class="pill-val" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          ${this.isLocating
                ? (isKo ? 'GPS 확인 중...' : 'Locating GPS...')
                : (this.locationName || (this.lat ? `${this.lat.toFixed(4)}, ${this.lng?.toFixed(4)}` : (isKo ? '위치 추가' : 'Add location')))}
                        </div>
                        <div class="pill-sub">
                          ${this.lat
                ? (isKo ? 'GPS 연결됨 · 탭하여 변경' : 'GPS Tagged · tap to edit')
                : (this.locationName
                    ? (isKo ? '장소 지정됨 · 탭하여 변경' : 'Custom spot · tap to edit')
                    : (isKo ? '탭하여 GPS/장소 태그' : 'Tap to tag GPS/spot'))}
                        </div>
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

                    ${this.showLocationPicker
                ? html `
                          <div class="location-picker-card">
                            <div class="picker-header">
                              <span class="picker-title">${isKo ? '위치 태그 설정' : 'Attach Location'}</span>
                              <button class="picker-close-btn" @click=${() => (this.showLocationPicker = false)}>✕</button>
                            </div>

                            <div class="gps-btn-row">
                              <button
                                class="gps-action-btn ${this.lat ? 'tagged' : ''}"
                                @click=${() => this.fetchCurrentLocation()}
                                ?disabled=${this.isLocating}
                              >
                                <span>${this.isLocating ? '⏳' : this.lat ? '📍' : '📡'}</span>
                                <span>
                                  ${this.isLocating
                    ? (isKo ? 'GPS 위치 수신 중...' : 'Getting GPS...')
                    : this.lat
                        ? (isKo ? `GPS 연결됨 (${this.lat.toFixed(4)}, ${this.lng?.toFixed(4)})` : `GPS Tagged (${this.lat.toFixed(4)}, ${this.lng?.toFixed(4)})`)
                        : (isKo ? '현재 GPS 위치 태그하기' : 'Tag Current GPS')}
                                </span>
                              </button>
                              ${this.lat || this.locationName
                    ? html `
                                    <button class="gps-clear-btn" @click=${() => this.clearLocation()}>
                                      ${isKo ? '초기화' : 'Clear'}
                                    </button>
                                  `
                    : null}
                            </div>

                            <!-- Open Interactive Map Spot Picker -->
                            <button
                              class="map-picker-trigger-btn"
                              @click=${() => (this.showMapPicker = true)}
                            >
                              <span>🗺️</span>
                              <span>${isKo ? '지도에서 핀 찍기 / 위치 찾기' : 'Find / Pin Spot on Map'}</span>
                            </button>

                            <div class="picker-section-lbl">${isKo ? '자주 쓰는 장소' : 'Quick Spots'}</div>
                            <div class="location-chips-row">
                              ${(isKo ? this.locationPresetsKo : this.locationPresets).map((preset) => html `
                                  <div
                                    class="location-chip ${this.locationName === preset ? 'active' : ''}"
                                    @click=${() => this.selectPreset(preset)}
                                  >
                                    ${preset}
                                  </div>
                                `)}
                            </div>

                            <div class="custom-loc-input-row">
                              <input
                                type="text"
                                class="custom-loc-input"
                                placeholder="${isKo ? '직접 장소명 입력 (예: 센트럴파크 잔디밭)' : 'Or type custom name (e.g. Elm St & 4th)...'}"
                                .value=${this.locationName}
                                @input=${(e) => (this.locationName = e.target.value)}
                              />
                            </div>
                          </div>
                        `
                : null}

                    <!-- Photo & Notes -->
                    <div class="photo-notes-row">
                      <div class="photo-box" @click=${() => this.triggerPhotoUpload()}>
                        ${this.photoUrl
                ? html `<img src="${this.photoUrl}" alt="Photo" />`
                : html `
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
                          @input=${(e) => (this.notes = e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div style="height: 6px;"></div>
                  </div>
                `}
          </div>

          ${isStep2
            ? html `
                <div class="sheet-bottom" style="${isEditing ? 'display: flex; gap: 10px; align-items: center;' : ''}">
                  ${isEditing
                ? html `
                        <button
                          class="log-delete-btn"
                          @click=${() => this.handleDelete()}
                          title=${isKo ? '기록 삭제' : 'Delete log'}
                        >
                          🗑️ ${isKo ? '삭제' : 'Delete'}
                        </button>
                      `
                : null}
                  <div class="log-submit-btn" style="flex: 1;" @click=${() => this.handleSave()}>
                    ${isEditing
                ? isKo ? '수정 완료!' : 'Save changes'
                : isKo ? '기록하기!' : 'Log it!'}
                  </div>
                </div>
              `
            : null}
        </div>

        <!-- Interactive Map Spot Picker Modal -->
        <dooty-map-picker
          .open=${this.showMapPicker}
          .initialLat=${this.lat}
          .initialLng=${this.lng}
          .initialLocationName=${this.locationName}
          @spot-selected=${(e) => this.handleSpotSelected(e)}
          @close=${() => (this.showMapPicker = false)}
        ></dooty-map-picker>
      </div>
    `;
    }
};
__decorate([
    state()
], DootySheet.prototype, "selectedType", void 0);
__decorate([
    state()
], DootySheet.prototype, "cons", void 0);
__decorate([
    state()
], DootySheet.prototype, "size", void 0);
__decorate([
    state()
], DootySheet.prototype, "mood", void 0);
__decorate([
    state()
], DootySheet.prototype, "selectedMed", void 0);
__decorate([
    state()
], DootySheet.prototype, "selectedMedDose", void 0);
__decorate([
    state()
], DootySheet.prototype, "customMedName", void 0);
__decorate([
    state()
], DootySheet.prototype, "weightKg", void 0);
__decorate([
    state()
], DootySheet.prototype, "walkMin", void 0);
__decorate([
    state()
], DootySheet.prototype, "walkKm", void 0);
__decorate([
    state()
], DootySheet.prototype, "vetReason", void 0);
__decorate([
    state()
], DootySheet.prototype, "symptom", void 0);
__decorate([
    state()
], DootySheet.prototype, "portion", void 0);
__decorate([
    state()
], DootySheet.prototype, "photoUrl", void 0);
__decorate([
    state()
], DootySheet.prototype, "notes", void 0);
__decorate([
    state()
], DootySheet.prototype, "locationName", void 0);
__decorate([
    state()
], DootySheet.prototype, "lat", void 0);
__decorate([
    state()
], DootySheet.prototype, "lng", void 0);
__decorate([
    state()
], DootySheet.prototype, "isLocating", void 0);
__decorate([
    state()
], DootySheet.prototype, "showLocationPicker", void 0);
__decorate([
    state()
], DootySheet.prototype, "showMapPicker", void 0);
__decorate([
    state()
], DootySheet.prototype, "showTimePicker", void 0);
__decorate([
    state()
], DootySheet.prototype, "customTimestamp", void 0);
__decorate([
    state()
], DootySheet.prototype, "walkPetIds", void 0);
__decorate([
    state()
], DootySheet.prototype, "weatherText", void 0);
__decorate([
    state()
], DootySheet.prototype, "isFetchingWeather", void 0);
DootySheet = __decorate([
    customElement('dooty-sheet')
], DootySheet);
export { DootySheet };
//# sourceMappingURL=dooty-sheet.js.map