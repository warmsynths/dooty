var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';
let DootyHistory = class DootyHistory extends LitElement {
    constructor() {
        super(...arguments);
        this.searchSheetOpen = false;
        this.searchQuery = '';
    }
    static { this.styles = css `
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      background: var(--color-cream-light, #FFFBF2);
      box-sizing: border-box;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .history-container {
      padding: 56px 18px 24px;
      display: flex;
      flex-direction: column;
      gap: 13px;
      box-sizing: border-box;
    }

    /* Top Bar */
    .top-bar {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .title-area {
      flex: 1;
      min-width: 0;
    }

    .main-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1.1;
    }

    .sub-title {
      font-size: 12px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 2px;
    }

    .pet-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 17px;
      padding: 4px 9px 4px 4px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      flex: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .pet-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140F;
    }

    .pet-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .pet-avatar-dot {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 12px;
      color: #17140F;
    }

    .pet-btn-name {
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      max-width: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .chevron-down {
      width: 0;
      height: 0;
      border-top: 5px solid #17140F;
      border-left: 4.5px solid transparent;
      border-right: 4.5px solid transparent;
      flex: none;
      margin-right: 1px;
    }

    .settings-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid #17140F;
      background: #FFCE2E;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      flex: none;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 16px;
      color: #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .settings-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #17140F;
    }

    .settings-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    /* Search Bar */
    .search-box {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 18px;
      padding: 11px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .search-box:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0 #17140F;
    }

    .glass-icon {
      width: 15px;
      height: 15px;
      border: 2.5px solid #17140F;
      border-radius: 50%;
      flex: none;
      position: relative;
      box-sizing: border-box;
    }

    .glass-handle {
      position: absolute;
      right: -4px;
      bottom: -4px;
      width: 7px;
      height: 2.5px;
      background: #17140F;
      border-radius: 2px;
      transform: rotate(45deg);
    }

    .search-text {
      flex: 1;
      min-width: 0;
      font-size: 13px;
      font-weight: 700;
      color: #9A9080;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .search-text.active {
      color: #17140F;
    }

    .clear-badge {
      background: #FF5A3C;
      border: 2.5px solid #17140F;
      border-radius: 11px;
      padding: 3px 9px;
      font-size: 10px;
      font-weight: 800;
      color: #FFF;
      flex: none;
      cursor: pointer;
    }

    .clear-badge:active {
      transform: scale(0.965);
    }

    /* Scrollable Filter Chips */
    .chip-scroll {
      display: flex;
      gap: 7px;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding: 2px 18px 3px;
      margin: 0 -18px;
    }

    .chip-scroll::-webkit-scrollbar {
      display: none;
    }

    .filter-chip {
      flex: none;
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 15px;
      padding: 7px 11px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .filter-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
    }

    .filter-chip:active {
      transform: scale(0.965);
    }

    .chip-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      border: 2px solid #17140F;
      box-sizing: border-box;
      flex: none;
    }

    .chip-label {
      font-size: 11.5px;
      font-weight: 800;
      color: #17140F;
      white-space: nowrap;
    }

    /* By Members Filter Row */
    .by-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .by-tag {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #9A9080;
      flex: none;
    }

    .member-chip {
      flex: none;
      display: flex;
      align-items: center;
      gap: 6px;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 7px 11px 7px 7px;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
    }

    .member-chip.active {
      background: #FFCE2E;
      box-shadow: 1px 1px 0 #17140F;
    }

    .member-chip:active {
      transform: scale(0.965);
    }

    .member-dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid #17140F;
      background: #FFCE2E;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9.5px;
      font-weight: 900;
      color: #17140F;
    }

    /* Calendar Card */
    .calendar-card {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 14px;
      box-shadow: 5px 5px 0 #17140F;
      box-sizing: border-box;
    }

    .cal-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }

    .cal-nav-btn {
      width: 32px;
      height: 32px;
      border-radius: 11px;
      border: 2.5px solid #17140F;
      background: #FFFBF2;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      user-select: none;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .cal-nav-btn.disabled {
      opacity: 0.35;
      cursor: default;
      pointer-events: none;
    }

    .cal-nav-btn:active {
      transform: scale(0.965);
    }

    .cal-month-title {
      flex: 1;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 19px;
      color: #17140F;
      letter-spacing: -0.5px;
    }

    .day-names-row {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
      margin-bottom: 6px;
    }

    .day-name {
      text-align: center;
      font-size: 9px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.4px;
    }

    .cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
    }

    .cal-cell {
      aspect-ratio: 1;
      border-radius: 11px;
      border: 2px solid transparent;
      background: #FFFBF2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
      user-select: none;
      animation: tb-cell 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
      box-sizing: border-box;
      transition: transform 0.1s ease;
    }

    .cal-cell.empty {
      background: transparent;
      cursor: default;
      pointer-events: none;
      opacity: 0;
    }

    .cal-cell.today {
      border: 2.5px solid #17140F;
      background: #FFF;
    }

    .cal-cell.selected {
      border: 2.5px solid #17140F;
      background: #FFCE2E;
      transform: scale(1.04);
    }

    .cal-cell:active {
      transform: scale(0.96);
    }

    .cell-num {
      font-size: 11.5px;
      font-weight: 800;
      color: #17140F;
      line-height: 1;
    }

    .cell-dots {
      display: flex;
      gap: 1.5px;
      height: 4px;
      align-items: center;
    }

    .event-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
    }

    /* Day Detail Card */
    .day-detail-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 15px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      flex-direction: column;
      gap: 11px;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .day-detail-header {
      display: flex;
      align-items: center;
      gap: 11px;
    }

    .day-detail-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 22px;
      color: #17140F;
      letter-spacing: -0.7px;
      line-height: 1.1;
    }

    .day-detail-sub {
      font-size: 11.5px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 1px;
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border-radius: 11px;
      border: 2.5px solid #17140F;
      background: #FFFBF2;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      flex: none;
      user-select: none;
    }

    .close-btn:active {
      transform: scale(0.965);
    }

    .event-row {
      display: flex;
      gap: 11px;
      align-items: center;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 16px;
      padding: 10px 12px;
      cursor: pointer;
      box-sizing: border-box;
      transition: transform 0.13s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.13s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .event-row:hover {
      transform: translate(-1px, -1px);
      box-shadow: 3px 3px 0 #17140F;
    }

    .event-row:active {
      transform: scale(0.965);
    }

    .event-tag-badge {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 14px;
      color: #17140F;
    }

    .event-body {
      flex: 1;
      min-width: 0;
    }

    .event-title {
      font-size: 13.5px;
      font-weight: 800;
      color: #17140F;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .event-detail {
      font-size: 11.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 1px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .event-time-col {
      text-align: right;
      flex: none;
    }

    .event-time {
      font-size: 11.5px;
      font-weight: 800;
      color: #17140F;
    }

    .event-who {
      font-size: 10px;
      font-weight: 700;
      color: #9A9080;
      margin-top: 1px;
    }

    .empty-day-card {
      background: #FFF;
      border: 3px dashed #17140F;
      border-radius: 24px;
      padding: 22px 18px;
      text-align: center;
      animation: tb-screen 0.24s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .empty-day-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 19px;
      color: #17140F;
      letter-spacing: -0.5px;
    }

    .empty-day-sub {
      font-size: 12.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 3px;
    }

    /* Search Modal Sheet */
    .search-modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(23, 20, 15, 0.45);
      z-index: 200;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      animation: tb-scrim 0.2s ease both;
    }

    .search-modal {
      background: #FFFBF2;
      border-top: 3px solid #17140F;
      border-radius: 28px 28px 0 0;
      padding: 20px 18px 32px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      max-height: 80vh;
      animation: tb-sheet 0.25s cubic-bezier(0.23, 1, 0.32, 1) both;
      box-sizing: border-box;
    }

    .search-input-box {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 16px;
      padding: 10px 14px;
    }

    .search-input {
      flex: 1;
      border: none;
      background: none;
      font-size: 15px;
      font-weight: 700;
      color: #17140F;
    }

    .search-results-list {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `; }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribe = appState.subscribe(() => this.requestUpdate());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.();
    }
    getTypeColor(type) {
        switch (type) {
            case 'poop': return '#FFCE2E';
            case 'pee': return '#BFD0FF';
            case 'medicine':
            case 'meds': return '#1FC99B';
            case 'walk': return '#9EC6E8';
            case 'weight': return '#FFB39A';
            case 'vomit': return '#FF9F9F';
            case 'vet': return '#FFEAA0';
            default: return '#E3D8BE';
        }
    }
    getTypeTag(type, isKo) {
        switch (type) {
            case 'poop': return isKo ? '응가' : 'P';
            case 'pee': return isKo ? '쉬야' : 'U';
            case 'medicine':
            case 'meds': return isKo ? '약' : 'M';
            case 'walk': return isKo ? '산책' : 'W';
            case 'weight': return isKo ? '체중' : 'K';
            case 'vomit': return isKo ? '구토' : 'V';
            case 'vet': return isKo ? '병원' : 'H';
            default: return isKo ? '기록' : 'E';
        }
    }
    getTypeName(type, isKo) {
        switch (type) {
            case 'poop': return isKo ? '응가' : 'Poop';
            case 'pee': return isKo ? '쉬야' : 'Pee';
            case 'medicine':
            case 'meds': return isKo ? '약' : 'Meds';
            case 'walk': return isKo ? '산책' : 'Walk';
            case 'weight': return isKo ? '체중' : 'Weight';
            case 'vomit': return isKo ? '구토' : 'Vomit';
            case 'vet': return isKo ? '병원' : 'Vet';
            default: return isKo ? '기타' : 'Other';
        }
    }
    getEventsForDay(year, month, day) {
        return (appState.events || []).filter((e) => {
            const d = new Date(e.timestamp);
            if (d.getFullYear() !== year || d.getMonth() !== month || d.getDate() !== day)
                return false;
            if (appState.historyTypeFilters.length > 0) {
                const matchesType = appState.historyTypeFilters.some((f) => {
                    if (f === 'meds' || f === 'medicine') {
                        return e.eventType === 'medicine';
                    }
                    return e.eventType === f;
                });
                if (!matchesType)
                    return false;
            }
            if (appState.historyMemberFilter !== 'all') {
                const who = e.loggedByName || 'Me';
                if (who !== appState.historyMemberFilter)
                    return false;
            }
            return true;
        });
    }
    render() {
        const isKo = appState.currentLocale === 'ko';
        const pet = appState.currentPet;
        const petName = pet?.name || (isKo ? '반려견' : 'Pet');
        const petInitial = petName.charAt(0).toUpperCase();
        const userInitial = (appState.currentUser?.displayName || 'S').charAt(0).toUpperCase();
        // Target Year & Month
        const now = new Date();
        const targetDate = new Date(now.getFullYear(), now.getMonth() + appState.historyMonthOffset, 1);
        const targetYear = targetDate.getFullYear();
        const targetMonth = targetDate.getMonth();
        const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthNamesKo = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
        const monthLabel = isKo ? `${targetYear}년 ${monthNamesKo[targetMonth]}` : `${monthNamesEn[targetMonth]} ${targetYear}`;
        // Compute Days in Month & First Day of Week (0=Sun, 1=Mon, ..., 6=Sat)
        const daysInMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
        const firstDayIndex = (new Date(targetYear, targetMonth, 1).getDay() + 6) % 7; // Monday-first (0 = Monday)
        const isCurrentMonth = appState.historyMonthOffset === 0;
        const currentDayNum = now.getDate();
        // Total events for this month view
        const monthEventsCount = (appState.events || []).filter((e) => {
            const d = new Date(e.timestamp);
            return d.getFullYear() === targetYear && d.getMonth() === targetMonth;
        }).length;
        // Filter categories
        const typeList = ['poop', 'pee', 'meds', 'walk', 'weight', 'vomit'];
        const memberList = Array.from(new Set((appState.currentHousehold?.members || []).map((m) => m.displayName).concat(['Me'])));
        const hasFilters = appState.historyTypeFilters.length > 0 || appState.historyMemberFilter !== 'all' || this.searchQuery !== '';
        // Selected Day Events
        const selectedDay = appState.historySelectedDay;
        const selectedDayEvents = selectedDay !== null ? this.getEventsForDay(targetYear, targetMonth, selectedDay) : [];
        const dayOfWeekNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeekNamesKo = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        let selectedDayTitle = '';
        if (selectedDay !== null) {
            const selDate = new Date(targetYear, targetMonth, selectedDay);
            const dowEn = dayOfWeekNamesEn[selDate.getDay()];
            const dowKo = dayOfWeekNamesKo[selDate.getDay()];
            selectedDayTitle = isKo ? `${targetMonth + 1}월 ${selectedDay}일 ${dowKo}` : `${dowEn} ${selectedDay} ${monthNamesEn[targetMonth].substring(0, 3)}`;
        }
        return html `
      <div class="history-container">
        <!-- Top Bar -->
        <div class="top-bar">
          <div class="title-area">
            <div class="main-title">${isKo ? '기록' : 'The record'}</div>
            <div class="sub-title">${isKo ? `${monthLabel}에 ${monthEventsCount}건` : `${monthEventsCount} logs in ${monthLabel}`}</div>
          </div>
          <div class="pet-btn" @click=${() => appState.openPetSwitcher()}>
            <div class="pet-avatar-dot">${petInitial}</div>
            <div class="pet-btn-name">${petName}</div>
            ${appState.pets.length > 1 ? html `<div class="chevron-down"></div>` : null}
          </div>
          <div class="settings-btn" @click=${() => appState.setActiveTab('settings')}>
            ${userInitial}
          </div>
        </div>

        <!-- Search Bar -->
        <div class="search-box" @click=${() => (this.searchSheetOpen = true)}>
          <div class="glass-icon">
            <div class="glass-handle"></div>
          </div>
          <div class="search-text ${this.searchQuery ? 'active' : ''}">
            ${this.searchQuery ? `"${this.searchQuery}"` : isKo ? '메모 및 캡션 검색' : 'Search notes & photo captions...'}
          </div>
          ${hasFilters
            ? html `
                <div
                  class="clear-badge"
                  @click=${(e) => {
                e.stopPropagation();
                this.searchQuery = '';
                appState.clearHistoryFilters();
            }}
                >
                  ${isKo ? '초기화' : 'CLEAR'}
                </div>
              `
            : null}
        </div>

        <!-- Event Type Filter Chips -->
        <div class="chip-scroll">
          ${typeList.map((typeId) => {
            const active = appState.historyTypeFilters.includes(typeId);
            return html `
              <div
                class="filter-chip ${active ? 'active' : ''}"
                @click=${() => appState.toggleHistoryTypeFilter(typeId)}
              >
                <div class="chip-dot" style="background: ${this.getTypeColor(typeId)};"></div>
                <div class="chip-label">${this.getTypeName(typeId, isKo)}</div>
              </div>
            `;
        })}
        </div>

        <!-- By Member Filter Row -->
        <div class="by-row">
          <div class="by-tag">${isKo ? '작성자' : 'BY'}</div>
          <div class="chip-scroll" style="margin: 0; padding: 2px 0;">
            <div
              class="member-chip ${appState.historyMemberFilter === 'all' ? 'active' : ''}"
              @click=${() => appState.setHistoryMemberFilter('all')}
            >
              <div class="chip-label">${isKo ? '전체' : 'All'}</div>
            </div>
            ${memberList.map((name) => {
            const active = appState.historyMemberFilter === name;
            return html `
                <div
                  class="member-chip ${active ? 'active' : ''}"
                  @click=${() => appState.setHistoryMemberFilter(active ? 'all' : name)}
                >
                  <div class="member-dot">${name.charAt(0).toUpperCase()}</div>
                  <div class="chip-label">${name}</div>
                </div>
              `;
        })}
          </div>
        </div>

        <!-- Month Calendar Grid Card -->
        <div class="calendar-card">
          <!-- Calendar Header -->
          <div class="cal-header">
            <div
              class="cal-nav-btn"
              @click=${() => appState.setHistoryMonthOffset(appState.historyMonthOffset - 1)}
            >
              &#8249;
            </div>
            <div class="cal-month-title">${monthLabel}</div>
            <div
              class="cal-nav-btn ${isCurrentMonth ? 'disabled' : ''}"
              @click=${() => {
            if (!isCurrentMonth)
                appState.setHistoryMonthOffset(appState.historyMonthOffset + 1);
        }}
            >
              &#8250;
            </div>
          </div>

          <!-- Day of Week Names (M T W T F S S) -->
          <div class="day-names-row">
            ${(isKo ? ['월', '화', '수', '목', '금', '토', '일'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S']).map((name) => html `<div class="day-name">${name}</div>`)}
          </div>

          <!-- 7-Column Days Grid -->
          <div class="cal-grid">
            <!-- Empty offset cells -->
            ${Array.from({ length: firstDayIndex }, () => html `<div class="cal-cell empty"></div>`)}
            <!-- Month days -->
            ${Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const dayEvents = this.getEventsForDay(targetYear, targetMonth, day);
            const isToday = isCurrentMonth && day === currentDayNum;
            const isSelected = selectedDay === day;
            // Distinct dots
            const eventDots = dayEvents.slice(0, 3).map((e) => this.getTypeColor(e.eventType));
            return html `
                <div
                  class="cal-cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}"
                  style="animation-delay: ${i * 0.015}s;"
                  @click=${() => {
                if (selectedDay === day)
                    appState.setHistorySelectedDay(null);
                else
                    appState.setHistorySelectedDay(day);
            }}
                >
                  <div class="cell-num">${day}</div>
                  <div class="cell-dots">
                    ${eventDots.map((c) => html `<div class="event-dot" style="background: ${c};"></div>`)}
                  </div>
                </div>
              `;
        })}
          </div>
        </div>

        <!-- Selected Day Expanded Accordion -->
        ${selectedDay !== null && selectedDayEvents.length > 0
            ? html `
              <div class="day-detail-card">
                <div class="day-detail-header">
                  <div style="flex: 1; min-width: 0;">
                    <div class="day-detail-title">${selectedDayTitle}</div>
                    <div class="day-detail-sub">
                      ${isKo ? `${selectedDayEvents.length}건의 기록` : `${selectedDayEvents.length} events logged`}
                    </div>
                  </div>
                  <div class="close-btn" @click=${() => appState.setHistorySelectedDay(null)}>
                    &#10005;
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${selectedDayEvents.map((evt) => {
                const d = new Date(evt.timestamp);
                const timeStr = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
                const tag = this.getTypeTag(evt.eventType, isKo);
                const tagColor = this.getTypeColor(evt.eventType);
                const meta = evt.metadata || {};
                let detailStr = evt.notes || '';
                if (evt.eventType === 'poop') {
                    detailStr = `Type ${meta.consistency || 4} · ${meta.size || 'M'} · ${meta.mood || 'Normal'}`;
                }
                else if (evt.eventType === 'medicine') {
                    detailStr = `${meta.medication || 'Medication'} · ${meta.dosage || '1 dose'}`;
                }
                else if (evt.eventType === 'walk') {
                    detailStr = `${meta.walkDuration || '30 min'} · ${meta.walkDistance || '2.0 km'}`;
                }
                return html `
                      <div class="event-row" @click=${() => appState.openLoggerForEdit(evt)}>
                        <div class="event-tag-badge" style="background: ${tagColor};">${tag}</div>
                        <div class="event-body">
                          <div class="event-title">${evt.notes || this.getTypeName(evt.eventType, isKo)}</div>
                          <div class="event-detail">${detailStr}</div>
                        </div>
                        <div class="event-time-col">
                          <div class="event-time">${timeStr}</div>
                          <div class="event-who">${evt.loggedByName || 'Me'}</div>
                        </div>
                      </div>
                    `;
            })}
                </div>
              </div>
            `
            : selectedDay !== null && selectedDayEvents.length === 0
                ? html `
              <div class="empty-day-card">
                <div class="empty-day-title">${selectedDayTitle}</div>
                <div class="empty-day-sub">${isKo ? '기록이 없습니다. 수상하군요.' : 'Nothing logged. Suspicious.'}</div>
              </div>
            `
                : null}


        <!-- Bottom Safe Space for Dock -->
        <div style="height: 100px;"></div>
      </div>

      <!-- Quick Search Modal Sheet -->
      ${this.searchSheetOpen
            ? html `
            <div class="search-modal-backdrop" @click=${() => (this.searchSheetOpen = false)}>
              <div class="search-modal" @click=${(e) => e.stopPropagation()}>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="font-family: var(--font-heading); font-weight: 800; font-size: 20px; color: #17140F;">
                    ${isKo ? '기록 검색' : 'Search records'}
                  </div>
                  <div class="close-btn" @click=${() => (this.searchSheetOpen = false)}>&#10005;</div>
                </div>

                <div class="search-input-box">
                  <div class="glass-icon"><div class="glass-handle"></div></div>
                  <input
                    type="text"
                    class="search-input"
                    placeholder=${isKo ? '메모나 캡션 검색...' : 'Search notes or captions...'}
                    .value=${this.searchQuery}
                    @input=${(e) => {
                this.searchQuery = e.target.value;
            }}
                  />
                </div>

                <div class="search-results-list">
                  ${(appState.events || [])
                .filter((e) => {
                if (!this.searchQuery)
                    return true;
                const q = this.searchQuery.toLowerCase();
                return ((e.notes && e.notes.toLowerCase().includes(q)) ||
                    (e.eventType && e.eventType.toLowerCase().includes(q)) ||
                    (e.loggedByName && e.loggedByName.toLowerCase().includes(q)));
            })
                .slice(0, 15)
                .map((evt) => {
                const d = new Date(evt.timestamp);
                const dateStr = d.toLocaleDateString([], { month: 'short', day: 'numeric' });
                const timeStr = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
                return html `
                        <div
                          class="event-row"
                          @click=${() => {
                    this.searchSheetOpen = false;
                    appState.openLoggerForEdit(evt);
                }}
                        >
                          <div class="event-tag-badge" style="background: ${this.getTypeColor(evt.eventType)};">
                            ${this.getTypeTag(evt.eventType, isKo)}
                          </div>
                          <div class="event-body">
                            <div class="event-title">${evt.notes || this.getTypeName(evt.eventType, isKo)}</div>
                            <div class="event-detail">${dateStr} · ${timeStr}</div>
                          </div>
                          <div class="event-who">${evt.loggedByName || 'Me'}</div>
                        </div>
                      `;
            })}
                </div>
              </div>
            </div>
          `
            : null}
    `;
    }
};
__decorate([
    state()
], DootyHistory.prototype, "searchSheetOpen", void 0);
__decorate([
    state()
], DootyHistory.prototype, "searchQuery", void 0);
DootyHistory = __decorate([
    customElement('dooty-history')
], DootyHistory);
export { DootyHistory };
//# sourceMappingURL=dooty-history.js.map