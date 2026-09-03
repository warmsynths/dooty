import { translations, } from '@dooty/shared';
import { ApiClient, onApiActivityChange } from '../api/client.js';
import { getPendingEvents, getEventsOffline, rekeyPendingEvents } from '../db/offlineStore.js';
class AppStateManager {
    constructor() {
        this.listeners = new Set();
        this.currentUser = null;
        this.currentHousehold = null;
        this.userHouseholds = [];
        this.currentPet = null;
        this.pets = [];
        this.events = [];
        this.activeTab = 'today';
        this.authView = 'signin';
        this.currentLocale = 'en';
        this.isOnline = navigator.onLine;
        this.pendingSyncCount = 0;
        this.isSyncing = false;
        this.isApiActive = false;
        this.activeApiRequests = 0;
        this.analyticsTimeRange = '30d';
        // User profile
        this.userAvatar = localStorage.getItem('dooty_user_avatar') || '';
        // Tracking preferences
        this.track = {
            poop: true,
            pee: true,
            vomit: true,
            meds: true,
            weight: true,
            walk: true,
            vet: false,
            symptom: false,
        };
        // Nudges settings
        this.nudges = {
            push: true,
            weekly: true,
            gap: true,
            vet: false,
        };
        // Pending invites
        this.pendingInvites = [];
        // Modal states
        this.loggerModalOpen = false;
        this.loggerEventType = null;
        this.editingEvent = null;
        this.photoModalOpen = false;
        this.photoModalTarget = 'pet';
        this.photoModalTargetId = '';
        this.photoModalCurrentAvatar = '';
        this.photoModalTitle = '';
        this.isLoading = false;
        // Pet switcher bottom sheet
        this.petSwitcherOpen = false;
        // Treatments Drawer & Repeating Schedule
        this.treatmentsDrawerOpen = false;
        this.treatments = [];
        // History State
        this.historyMonthOffset = 0;
        this.historySelectedDay = null;
        this.historyTypeFilters = [];
        this.historyMemberFilter = 'all';
        this.historySearchOpen = false;
        this.historySearchQuery = '';
        // Live Walk State
        this.activeWalk = null;
        this.walkView = null;
        this.walkHomeAsk = false;
        this.homeAsked = false;
        this.walkSummaryData = null;
        // Detect initial locale
        const storedLocale = localStorage.getItem('dooty_locale');
        if (storedLocale && (storedLocale === 'en' || storedLocale === 'ko')) {
            this.currentLocale = storedLocale;
        }
        else {
            const browserLang = typeof navigator !== 'undefined' ? navigator.language || '' : '';
            this.currentLocale = browserLang.startsWith('ko') ? 'ko' : 'en';
        }
        // Apply initial locale class to body and html
        if (typeof document !== 'undefined') {
            document.documentElement.lang = this.currentLocale;
            document.body.classList.toggle('lang-ko', this.currentLocale === 'ko');
        }
        // Load tracking preferences
        const storedTrack = localStorage.getItem('dooty_track_prefs');
        if (storedTrack) {
            try {
                this.track = { ...this.track, ...JSON.parse(storedTrack) };
            }
            catch (e) {
                console.warn('Failed to parse track prefs:', e);
            }
        }
        // Load nudges preferences
        const storedNudges = localStorage.getItem('dooty_nudge_prefs');
        if (storedNudges) {
            try {
                this.nudges = { ...this.nudges, ...JSON.parse(storedNudges) };
            }
            catch (e) {
                console.warn('Failed to parse nudge prefs:', e);
            }
        }
        // Load analytics timeframe preference
        const storedRange = localStorage.getItem('dooty_analytics_timerange');
        if (storedRange && ['7d', '30d', '1y', 'all'].includes(storedRange)) {
            this.analyticsTimeRange = storedRange;
        }
        // Restore cached household session immediately so hot reload never flashes auth screen
        const cachedHousehold = localStorage.getItem('dooty_household_data');
        if (cachedHousehold) {
            try {
                const parsed = JSON.parse(cachedHousehold);
                this.currentHousehold = parsed;
                this.pets = parsed.pets || [];
                if (this.pets.length > 0) {
                    const storedPetId = localStorage.getItem('dooty_pet_id');
                    this.currentPet = this.pets.find((p) => p.id === storedPetId) || this.pets[0];
                    // Eagerly populate cached offline events on boot
                    getEventsOffline(this.currentPet.id).then((cachedEvents) => {
                        if (cachedEvents.length > 0 && this.events.length === 0) {
                            this.events = cachedEvents;
                            this.notify();
                        }
                    });
                }
                this.loadPendingInvites();
                this.loadTreatmentsForPet();
            }
            catch (e) {
                console.warn('Failed to parse cached household data:', e);
            }
        }
        // Network listeners
        window.addEventListener('online', () => this.handleNetworkChange(true));
        window.addEventListener('offline', () => this.handleNetworkChange(false));
        // API activity listener for universal loading feedback
        onApiActivityChange((count) => {
            this.activeApiRequests = count;
            this.isApiActive = count > 0;
            this.notify();
        });
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
    notify() {
        this.listeners.forEach((l) => l());
    }
    get t() {
        return translations[this.currentLocale];
    }
    setLocale(locale) {
        this.currentLocale = locale;
        localStorage.setItem('dooty_locale', locale);
        if (typeof document !== 'undefined') {
            document.documentElement.lang = locale;
            document.body.classList.toggle('lang-ko', locale === 'ko');
        }
        this.notify();
    }
    setActiveTab(tab) {
        this.activeTab = tab;
        this.notify();
    }
    // --- Pet Switcher Methods ---
    openPetSwitcher() {
        this.petSwitcherOpen = true;
        this.notify();
    }
    closePetSwitcher() {
        this.petSwitcherOpen = false;
        this.notify();
    }
    selectPetById(petId) {
        const pet = this.pets.find((p) => p.id === petId);
        if (pet) {
            this.selectPet(pet);
            this.closePetSwitcher();
        }
    }
    // --- Treatments / Preventatives Drawer & Schedule Methods ---
    openTreatmentsDrawer() {
        this.treatmentsDrawerOpen = true;
        this.notify();
    }
    closeTreatmentsDrawer() {
        this.treatmentsDrawerOpen = false;
        this.notify();
    }
    async loadTreatmentsForPet(petId) {
        const targetPetId = petId || this.currentPet?.id || 'default';
        const key = `dooty_treatments_${targetPetId}`;
        const stored = localStorage.getItem(key);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                this.treatments = parsed.map((item) => {
                    if (item.nextDueAt) {
                        const target = new Date(item.nextDueAt);
                        target.setHours(0, 0, 0, 0);
                        const diffDays = Math.round((target.getTime() - now.getTime()) / 86400000);
                        return { ...item, due: diffDays };
                    }
                    return item;
                });
            }
            catch (e) {
                console.warn('Failed to parse stored treatments:', e);
            }
        }
        else {
            // Default sample treatments matching Dooty design prototype
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            this.treatments = [
                {
                    id: 'trt_flea_tick',
                    petId: targetPetId,
                    name: 'Flea & tick',
                    dose: 'Bravecto spot-on',
                    every: 90,
                    due: 2,
                    nextDueAt: new Date(now.getTime() + 2 * 86400000).toISOString(),
                },
                {
                    id: 'trt_heartworm',
                    petId: targetPetId,
                    name: 'Heartworm',
                    dose: 'Milbemax chew',
                    every: 30,
                    due: 12,
                    nextDueAt: new Date(now.getTime() + 12 * 86400000).toISOString(),
                },
                {
                    id: 'trt_dewormer',
                    petId: targetPetId,
                    name: 'Dewormer',
                    dose: 'Panacur, 3 days',
                    every: 90,
                    due: -3,
                    nextDueAt: new Date(now.getTime() - 3 * 86400000).toISOString(),
                },
            ];
            this.saveTreatments();
        }
        // Cloud synchronization via BFF / Supabase if authenticated
        if (this.isAuthenticated && targetPetId && targetPetId !== 'default') {
            try {
                const cloudTreatments = await ApiClient.getTreatmentSchedules(targetPetId);
                if (cloudTreatments && cloudTreatments.length > 0) {
                    this.treatments = cloudTreatments;
                    this.saveTreatments();
                    this.notify();
                }
            }
            catch (err) {
                console.warn('Could not sync treatment schedules from cloud:', err);
            }
        }
    }
    saveTreatments() {
        const targetPetId = this.currentPet?.id || 'default';
        const key = `dooty_treatments_${targetPetId}`;
        localStorage.setItem(key, JSON.stringify(this.treatments));
    }
    formatTreatmentLeft(due) {
        const isKo = this.currentLocale === 'ko';
        if (due < 0) {
            const abs = Math.abs(due);
            return isKo ? `${abs}일 지남` : `${abs} ${abs === 1 ? 'day late' : 'days late'}`;
        }
        if (due === 0)
            return isKo ? '오늘' : 'Today';
        if (due === 1)
            return isKo ? '내일' : 'Tomorrow';
        return isKo ? `${due}일 후` : `in ${due} days`;
    }
    formatTreatmentDueDate(dueDays) {
        const dt = new Date();
        dt.setDate(dt.getDate() + dueDays);
        const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if (this.currentLocale === 'ko') {
            return `${dt.getMonth() + 1}월 ${dt.getDate()}일`;
        }
        return `${dt.getDate()} ${monthsEn[dt.getMonth()]}`;
    }
    getTreatmentEveryLabel(every) {
        const isKo = this.currentLocale === 'ko';
        switch (every) {
            case 7:
                return isKo ? '1주일' : 'week';
            case 30:
                return isKo ? '1개월' : 'month';
            case 90:
                return isKo ? '3개월' : '3 months';
            case 180:
                return isKo ? '6개월' : '6 months';
            case 365:
                return isKo ? '1년' : 'year';
            default:
                return isKo ? `${every}일` : `${every} days`;
        }
    }
    getTreatmentSkin(due) {
        const late = due < 0;
        const soon = due >= 0 && due <= 3;
        return {
            bg: late ? '#FF5A3C' : soon ? '#FF9A3C' : '#FFF',
            chip: late || soon ? '#FFF' : '#BFD0FF',
            fg: late ? '#FFF' : '#17140F',
            sub: late ? 'rgba(255,255,255,0.82)' : soon ? '#7A3F00' : '#6A6152',
            anim: late ? 'tb-nudge 3s ease-in-out infinite' : 'none',
        };
    }
    getNextTreatment() {
        const isKo = this.currentLocale === 'ko';
        const sorted = this.treatments.slice().sort((a, b) => a.due - b.due);
        if (sorted.length === 0) {
            return {
                item: null,
                name: isKo ? '등록된 일정 없음' : 'Nothing scheduled',
                tag: 'M',
                left: '—',
                date: isKo ? '일정 추가' : 'add one',
                skin: {
                    bg: '#FFFBF2',
                    chip: '#E8DFCB',
                    fg: '#17140F',
                    sub: '#9A9080',
                    anim: 'none',
                },
            };
        }
        const nx = sorted[0];
        return {
            item: nx,
            name: nx.name,
            tag: nx.name.trim().charAt(0).toUpperCase() || 'M',
            left: this.formatTreatmentLeft(nx.due),
            date: this.formatTreatmentDueDate(nx.due),
            skin: this.getTreatmentSkin(nx.due),
        };
    }
    giveTreatment(id) {
        const isKo = this.currentLocale === 'ko';
        const item = this.treatments.find((t) => t.id === id);
        if (!item)
            return { title: '', sub: '' };
        const nextDueAt = new Date(Date.now() + item.every * 86400000).toISOString();
        this.treatments = this.treatments.map((t) => t.id === id
            ? {
                ...t,
                due: t.every,
                lastGivenAt: new Date().toISOString(),
                nextDueAt,
            }
            : t);
        this.saveTreatments();
        // Automatically record a medicine event in Dooty's database/log
        if (this.currentHousehold && this.currentPet) {
            this.logEvent('medicine', `${item.name}${item.dose ? ' · ' + item.dose : ''}`, {
                medication: item.name,
                dosage: item.dose,
                treatmentScheduleId: item.id,
            }).catch((e) => console.warn('Could not auto-log treatment event:', e));
        }
        // Sync update to backend if authenticated
        if (this.isAuthenticated) {
            ApiClient.updateTreatmentSchedule(id, {
                nextDueAt,
                lastGivenAt: new Date().toISOString(),
            }).catch((e) => console.warn('Could not sync treatment update to server:', e));
        }
        const title = isKo ? `${item.name} 투약 완료` : `${item.name} given`;
        const sub = isKo
            ? `다음 예정일: ${this.formatTreatmentDueDate(item.every)}`
            : `Next one due ${this.formatTreatmentDueDate(item.every)}.`;
        this.notify();
        return { title, sub };
    }
    addTreatment(opts) {
        const isKo = this.currentLocale === 'ko';
        const name = opts.name.trim();
        if (!name)
            return { title: '', sub: '' };
        const id = 'trt_' + Date.now();
        const nextDueAt = new Date(Date.now() + opts.every * 86400000).toISOString();
        const newItem = {
            id,
            petId: this.currentPet?.id,
            name,
            dose: opts.dose.trim() || (isKo ? '복용량 미입력' : 'no dose noted'),
            every: opts.every,
            due: opts.every,
            nextDueAt,
        };
        this.treatments = [...this.treatments, newItem];
        this.saveTreatments();
        // Sync creation to backend if authenticated
        if (this.isAuthenticated && this.currentPet) {
            ApiClient.createTreatmentSchedule(this.currentPet.id, {
                name: newItem.name,
                dose: newItem.dose,
                every: newItem.every,
                nextDueAt: newItem.nextDueAt,
            })
                .then((serverItem) => {
                if (serverItem && serverItem.id) {
                    this.treatments = this.treatments.map((t) => (t.id === id ? serverItem : t));
                    this.saveTreatments();
                    this.notify();
                }
            })
                .catch((e) => console.warn('Could not sync treatment creation to server:', e));
        }
        const title = isKo ? `${newItem.name} 추가됨` : `${newItem.name} added`;
        const sub = isKo
            ? `첫 투약 예정일: ${this.formatTreatmentDueDate(opts.every)}`
            : `First one due ${this.formatTreatmentDueDate(opts.every)}.`;
        this.notify();
        return { title, sub };
    }
    removeTreatment(id) {
        const isKo = this.currentLocale === 'ko';
        const item = this.treatments.find((t) => t.id === id);
        this.treatments = this.treatments.filter((t) => t.id !== id);
        this.saveTreatments();
        // Sync deletion to backend if authenticated
        if (this.isAuthenticated) {
            ApiClient.deleteTreatmentSchedule(id).catch((e) => console.warn('Could not sync treatment deletion to server:', e));
        }
        this.notify();
        return {
            title: isKo ? `${item?.name || '일정'} 삭제됨` : `${item?.name || 'Treatment'} removed`,
            sub: isKo ? '반복 일정에서 제외되었습니다.' : 'Removed from repeating schedule.',
        };
    }
    // --- History Management Methods ---
    setHistoryMonthOffset(offset) {
        this.historyMonthOffset = offset;
        this.historySelectedDay = null;
        this.notify();
    }
    setHistorySelectedDay(day) {
        this.historySelectedDay = day;
        this.notify();
    }
    toggleHistoryTypeFilter(typeId) {
        if (this.historyTypeFilters.includes(typeId)) {
            this.historyTypeFilters = this.historyTypeFilters.filter((t) => t !== typeId);
        }
        else {
            this.historyTypeFilters = [...this.historyTypeFilters, typeId];
        }
        this.notify();
    }
    setHistoryMemberFilter(member) {
        this.historyMemberFilter = member;
        this.notify();
    }
    clearHistoryFilters() {
        this.historyTypeFilters = [];
        this.historyMemberFilter = 'all';
        this.historySearchQuery = '';
        this.notify();
    }
    setHistorySearchOpen(open) {
        this.historySearchOpen = open;
        this.notify();
    }
    setHistorySearchQuery(query) {
        this.historySearchQuery = query;
        this.notify();
    }
    // --- Live Walk Tracking Methods ---
    startLiveWalk(petIds) {
        if (this.walkTimerInterval)
            clearInterval(this.walkTimerInterval);
        if (this.activeWalk?.geoWatchId !== undefined && typeof navigator !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.clearWatch(this.activeWalk.geoWatchId);
        }
        const chosenPetIds = petIds && petIds.length > 0 ? petIds : this.currentPet ? [this.currentPet.id] : [];
        this.activeWalk = {
            startTime: Date.now(),
            pausedTotal: 0,
            pausedAt: null,
            route: [],
            petIds: chosenPetIds,
            distanceMeters: 0,
        };
        this.walkView = 'live';
        this.walkHomeAsk = false;
        this.homeAsked = false;
        this.walkSummaryData = null;
        // Start geolocation watcher
        if (typeof navigator !== 'undefined' && navigator.geolocation) {
            this.activeWalk.geoWatchId = navigator.geolocation.watchPosition((pos) => {
                if (!this.activeWalk || this.activeWalk.pausedAt)
                    return;
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                if (typeof lat !== 'number' || typeof lng !== 'number' || isNaN(lat) || isNaN(lng))
                    return;
                const prevPoints = this.activeWalk.route;
                if (prevPoints.length === 0) {
                    this.activeWalk.startLat = lat;
                    this.activeWalk.startLng = lng;
                    this.activeWalk.currentLat = lat;
                    this.activeWalk.currentLng = lng;
                    this.activeWalk.route = [[lat, lng]];
                    this.tryReverseGeocodeForWalk(lat, lng, true);
                }
                else {
                    const last = prevPoints[prevPoints.length - 1];
                    const dist = this.computeDistanceMeters(last[0], last[1], lat, lng);
                    // Ignore noise (< 1.5m) or impossible teleports (> 500m per tick)
                    if (dist >= 1.5 && dist < 500) {
                        this.activeWalk.distanceMeters += dist;
                        this.activeWalk.route = [...prevPoints, [lat, lng]];
                    }
                    this.activeWalk.currentLat = lat;
                    this.activeWalk.currentLng = lng;
                }
                this.notify();
            }, (err) => {
                console.warn('Live walk GPS tracking error:', err);
            }, { enableHighAccuracy: true, maximumAge: 2000, timeout: 10000 });
        }
        this.notify();
        // Start tick interval
        this.walkTimerInterval = setInterval(() => {
            if (!this.activeWalk || this.activeWalk.pausedAt)
                return;
            const sec = this.getWalkSeconds();
            // Auto home check prompt after 120s
            if (!this.homeAsked && sec >= 120) {
                this.walkHomeAsk = true;
                this.homeAsked = true;
            }
            this.notify();
        }, 1000);
    }
    computeDistanceMeters(lat1, lon1, lat2, lon2) {
        const R = 6371e3; // meters
        const φ1 = (lat1 * Math.PI) / 180;
        const φ2 = (lat2 * Math.PI) / 180;
        const Δφ = ((lat2 - lat1) * Math.PI) / 180;
        const Δλ = ((lon2 - lon1) * Math.PI) / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    async tryReverseGeocodeForWalk(lat, lng, isStart) {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`, { headers: { Accept: 'application/json' } });
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
                const name = road && city
                    ? `${road}, ${city}`
                    : road || (data.display_name ? data.display_name.split(',').slice(0, 2).join(',').trim() : '');
                if (name && this.activeWalk) {
                    if (isStart)
                        this.activeWalk.startLocationName = name;
                    else
                        this.activeWalk.endLocationName = name;
                    this.notify();
                }
            }
        }
        catch {
            // Fallback
        }
    }
    getWalkSeconds() {
        if (!this.activeWalk)
            return 0;
        const now = Date.now();
        const held = this.activeWalk.pausedTotal + (this.activeWalk.pausedAt ? now - this.activeWalk.pausedAt : 0);
        return Math.max(0, Math.floor((now - this.activeWalk.startTime - held) / 1000));
    }
    getWalkDistanceKm() {
        if (this.activeWalk && this.activeWalk.distanceMeters > 0) {
            return (this.activeWalk.distanceMeters / 1000).toFixed(2);
        }
        const sec = this.getWalkSeconds();
        return ((sec / 3600) * 4.8).toFixed(2);
    }
    getWalkPace() {
        const sec = this.getWalkSeconds();
        if (sec < 20)
            return "9'40\"";
        const km = parseFloat(this.getWalkDistanceKm());
        if (km <= 0.01)
            return "9'40\"";
        const paceMin = (sec / 60) / km;
        if (paceMin > 35)
            return "35'00\"";
        const m = Math.floor(paceMin);
        const s = Math.round((paceMin - m) * 60);
        return `${m}'${String(s).padStart(2, '0')}"`;
    }
    pauseLiveWalk() {
        if (!this.activeWalk)
            return;
        const now = Date.now();
        if (this.activeWalk.pausedAt) {
            // Resume
            this.activeWalk.pausedTotal += (now - this.activeWalk.pausedAt);
            this.activeWalk.pausedAt = null;
        }
        else {
            // Pause
            this.activeWalk.pausedAt = now;
        }
        this.notify();
    }
    minimizeWalk() {
        this.walkView = null;
        this.notify();
    }
    expandWalk() {
        this.walkView = 'live';
        this.notify();
    }
    keepWalking() {
        this.walkHomeAsk = false;
        this.notify();
    }
    endLiveWalk() {
        if (this.walkTimerInterval)
            clearInterval(this.walkTimerInterval);
        if (!this.activeWalk)
            return;
        if (this.activeWalk.geoWatchId !== undefined && typeof navigator !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.clearWatch(this.activeWalk.geoWatchId);
        }
        const sec = this.getWalkSeconds();
        const km = parseFloat(this.getWalkDistanceKm());
        const pace = this.getWalkPace();
        const petNames = this.activeWalk.petIds
            .map((id) => this.pets.find((p) => p.id === id)?.name)
            .filter(Boolean);
        const d0 = new Date(this.activeWalk.startTime);
        const d1 = new Date();
        const formatTime = (d) => d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        const endLat = this.activeWalk.currentLat ??
            (this.activeWalk.route.length > 0 ? this.activeWalk.route[this.activeWalk.route.length - 1][0] : undefined);
        const endLng = this.activeWalk.currentLng ??
            (this.activeWalk.route.length > 0 ? this.activeWalk.route[this.activeWalk.route.length - 1][1] : undefined);
        this.activeWalk.endLat = endLat;
        this.activeWalk.endLng = endLng;
        if (endLat !== undefined && endLng !== undefined && !this.activeWalk.endLocationName) {
            this.tryReverseGeocodeForWalk(endLat, endLng, false);
        }
        this.walkSummaryData = {
            durationSec: sec,
            distanceKm: km,
            pace,
            route: this.activeWalk.route,
            petNames: petNames.length > 0 ? petNames : [this.currentPet?.name || 'Pet'],
            startTime: formatTime(d0),
            endTime: formatTime(d1),
            startLat: this.activeWalk.startLat,
            startLng: this.activeWalk.startLng,
            startLocationName: this.activeWalk.startLocationName,
            endLat,
            endLng,
            endLocationName: this.activeWalk.endLocationName,
        };
        this.walkView = 'summary';
        this.walkHomeAsk = false;
        this.notify();
    }
    async saveLiveWalk(notes = '', photoUrl = '') {
        if (!this.walkSummaryData)
            return;
        const data = this.walkSummaryData;
        const minStr = Math.max(1, Math.round(data.durationSec / 60)) + ' min';
        const kmStr = data.distanceKm + ' km';
        if (this.activeWalk?.geoWatchId !== undefined && typeof navigator !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.clearWatch(this.activeWalk.geoWatchId);
        }
        // Log walk event with start/end metadata and coordinates
        await this.logEvent('walk', notes || `Walk · ${minStr} · ${kmStr}`, {
            walkDuration: minStr,
            walkDistance: kmStr,
            photoUrl,
            petNames: data.petNames,
            startLat: data.startLat,
            startLng: data.startLng,
            startLocationName: data.startLocationName,
            endLat: data.endLat,
            endLng: data.endLng,
            endLocationName: data.endLocationName,
            route: data.route,
        }, data.startLat, data.startLng);
        this.activeWalk = null;
        this.walkView = null;
        this.walkSummaryData = null;
        this.walkHomeAsk = false;
        this.homeAsked = false;
        this.notify();
    }
    discardLiveWalk() {
        if (this.walkTimerInterval)
            clearInterval(this.walkTimerInterval);
        if (this.activeWalk?.geoWatchId !== undefined && typeof navigator !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.clearWatch(this.activeWalk.geoWatchId);
        }
        this.activeWalk = null;
        this.walkView = null;
        this.walkSummaryData = null;
        this.walkHomeAsk = false;
        this.homeAsked = false;
        this.notify();
    }
    setAuthView(view) {
        this.authView = view;
        this.notify();
    }
    setTrackingPreference(key, value) {
        this.track = { ...this.track, [key]: value };
        localStorage.setItem('dooty_track_prefs', JSON.stringify(this.track));
        this.notify();
    }
    setNudgePreference(key, value) {
        this.nudges = { ...this.nudges, [key]: value };
        localStorage.setItem('dooty_nudge_prefs', JSON.stringify(this.nudges));
        this.notify();
    }
    setAnalyticsTimeRange(range) {
        this.analyticsTimeRange = range;
        localStorage.setItem('dooty_analytics_timerange', range);
        this.notify();
    }
    openLogger(eventType) {
        this.editingEvent = null;
        this.loggerEventType = eventType || null;
        this.loggerModalOpen = true;
        this.notify();
    }
    openLoggerForEdit(event) {
        this.editingEvent = event;
        this.loggerEventType = event.eventType;
        this.loggerModalOpen = true;
        this.notify();
    }
    closeLogger() {
        this.loggerModalOpen = false;
        this.loggerEventType = null;
        this.editingEvent = null;
        this.notify();
    }
    openPhotoModal(opts) {
        this.photoModalTarget = opts.target;
        this.photoModalTargetId = opts.targetId || '';
        this.photoModalCurrentAvatar = opts.currentAvatar || '';
        this.photoModalTitle = opts.title || '';
        this.photoModalOpen = true;
        this.notify();
    }
    closePhotoModal() {
        this.photoModalOpen = false;
        this.notify();
    }
    async updatePetAvatar(petId, avatarUrl) {
        await this.updatePetProfile(petId, { avatarUrl });
    }
    async updatePetProfile(petId, updates) {
        if (this.currentPet && this.currentPet.id === petId) {
            this.currentPet = { ...this.currentPet, ...updates };
        }
        this.pets = this.pets.map((p) => (p.id === petId ? { ...p, ...updates } : p));
        if (this.currentHousehold) {
            this.currentHousehold = {
                ...this.currentHousehold,
                pets: this.pets,
            };
            localStorage.setItem('dooty_household_data', JSON.stringify(this.currentHousehold));
        }
        if (updates.avatarUrl !== undefined) {
            localStorage.setItem(`dooty_pet_avatar_${petId}`, updates.avatarUrl);
        }
        this.notify();
        if (navigator.onLine) {
            try {
                await ApiClient.updatePet(petId, updates);
            }
            catch (err) {
                console.warn('Could not sync pet profile to server:', err);
            }
        }
    }
    async updateUserAvatar(avatarUrl) {
        this.userAvatar = avatarUrl;
        localStorage.setItem('dooty_user_avatar', avatarUrl);
        this.notify();
        if (this.currentHousehold && this.currentHousehold.members?.length) {
            const ownerMember = this.currentHousehold.members[0];
            if (ownerMember) {
                ownerMember.avatarUrl = avatarUrl;
                if (navigator.onLine) {
                    try {
                        await ApiClient.updateMember(this.currentHousehold.id, ownerMember.id, { avatarUrl });
                    }
                    catch (err) {
                        console.warn('Could not sync member avatar to server:', err);
                    }
                }
            }
        }
    }
    async updateMemberAvatar(memberId, avatarUrl) {
        if (this.currentHousehold && this.currentHousehold.members) {
            const member = this.currentHousehold.members.find((m) => m.id === memberId);
            if (member) {
                member.avatarUrl = avatarUrl;
                localStorage.setItem(`dooty_member_avatar_${memberId}`, avatarUrl);
                this.notify();
                if (navigator.onLine) {
                    try {
                        await ApiClient.updateMember(this.currentHousehold.id, memberId, { avatarUrl });
                    }
                    catch (err) {
                        console.warn('Could not sync member avatar to server:', err);
                    }
                }
            }
        }
    }
    loadPendingInvites() {
        if (!this.currentHousehold)
            return;
        const stored = localStorage.getItem(`dooty_pending_invites_${this.currentHousehold.id}`);
        if (stored) {
            try {
                this.pendingInvites = JSON.parse(stored);
            }
            catch (e) {
                this.pendingInvites = [];
            }
        }
        else {
            // Default initial mockup invites if empty
            this.pendingInvites = [
                { code: 'H3P8', role: 'Log only', when: 'sent to Dan · expires in 6 days', expiresAt: new Date(Date.now() + 6 * 86400000).toISOString() },
                { code: 'B9XT', role: 'Full member', when: 'unsent · expires in 7 days', expiresAt: new Date(Date.now() + 7 * 86400000).toISOString() }
            ];
            localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`, JSON.stringify(this.pendingInvites));
        }
    }
    async createInvite(roleName = 'Full member') {
        let generatedCode = '';
        if (this.currentHousehold) {
            try {
                const res = await ApiClient.createInviteCode(this.currentHousehold.id);
                generatedCode = res.code;
            }
            catch (err) {
                console.warn('Could not generate invite code from server, creating locally:', err);
                const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
                generatedCode = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
            }
            const newInvite = {
                code: generatedCode,
                role: roleName,
                when: 'just created · expires in 7 days',
                expiresAt: new Date(Date.now() + 7 * 86400000).toISOString(),
            };
            this.pendingInvites = [newInvite, ...this.pendingInvites];
            localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`, JSON.stringify(this.pendingInvites));
            this.notify();
        }
        return generatedCode;
    }
    async revokeInvite(code) {
        if (!this.currentHousehold)
            return;
        this.pendingInvites = this.pendingInvites.filter((i) => i.code !== code);
        localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`, JSON.stringify(this.pendingInvites));
        this.notify();
    }
    exportEventsCsv() {
        const petName = this.currentPet?.name || 'Pet';
        const headers = ['Timestamp', 'Pet Name', 'Event Type', 'Logged By', 'Notes', 'Latitude', 'Longitude'];
        const rows = (this.events || []).map((e) => [
            `"${e.timestamp || ''}"`,
            `"${petName}"`,
            `"${e.eventType || ''}"`,
            `"${(e.loggedByName || '').replace(/"/g, '""')}"`,
            `"${(e.notes || '').replace(/"/g, '""')}"`,
            e.latitude !== undefined && e.latitude !== null ? e.latitude : '',
            e.longitude !== undefined && e.longitude !== null ? e.longitude : '',
        ]);
        const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `dooty-${petName.toLowerCase()}-events.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    exportFullBackupJson() {
        const backupData = {
            app: 'Dooty',
            version: '1.0',
            exportedAt: new Date().toISOString(),
            household: this.currentHousehold,
            pets: this.pets,
            currentPet: this.currentPet,
            treatments: this.treatments,
            events: this.events,
        };
        const jsonString = JSON.stringify(backupData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        const dateStr = new Date().toISOString().split('T')[0];
        const petName = (this.currentPet?.name || 'dooty').toLowerCase();
        link.setAttribute('download', `dooty-${petName}-backup-${dateStr}.json`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    async init() {
        this.isLoading = true;
        this.notify();
        try {
            // Check for auth tokens in URL hash or query params (from Supabase email confirmation link)
            if (typeof window !== 'undefined') {
                if (window.location.hash && window.location.hash.includes('access_token=')) {
                    const hash = window.location.hash.substring(1);
                    const hashParams = new URLSearchParams(hash);
                    const accessToken = hashParams.get('access_token');
                    if (accessToken) {
                        localStorage.setItem('dooty_auth_token', accessToken);
                        window.history.replaceState(null, '', window.location.pathname + window.location.search);
                    }
                }
                else if (window.location.search && window.location.search.includes('access_token=')) {
                    const searchParams = new URLSearchParams(window.location.search);
                    const accessToken = searchParams.get('access_token');
                    if (accessToken) {
                        localStorage.setItem('dooty_auth_token', accessToken);
                        window.history.replaceState(null, '', window.location.pathname);
                    }
                }
            }
            const token = localStorage.getItem('dooty_auth_token');
            if (token) {
                try {
                    const session = await ApiClient.getMe();
                    this.currentUser = session.user;
                    this.userHouseholds = session.households || [];
                    if (session.activeHousehold) {
                        this.currentHousehold = session.activeHousehold;
                        localStorage.setItem('dooty_household_id', session.activeHousehold.id);
                        localStorage.setItem('dooty_household_data', JSON.stringify(session.activeHousehold));
                    }
                }
                catch (fetchErr) {
                    console.warn('Network sync for auth session failed, using cached session:', fetchErr);
                    if (fetchErr.message?.includes('Unauthorized') || fetchErr.message?.includes('expired')) {
                        this.signOut();
                        return;
                    }
                }
            }
            else {
                const householdId = localStorage.getItem('dooty_household_id');
                if (householdId) {
                    try {
                        const fresh = await ApiClient.getHousehold(householdId);
                        if (fresh) {
                            this.currentHousehold = fresh;
                            localStorage.setItem('dooty_household_data', JSON.stringify(fresh));
                        }
                    }
                    catch (fetchErr) {
                        console.warn('Network sync for household failed, using cached session:', fetchErr);
                    }
                }
            }
            if (this.currentHousehold) {
                const rawPets = this.currentHousehold.pets || (await ApiClient.getPets(this.currentHousehold.id));
                this.pets = rawPets.map((p) => {
                    const cached = localStorage.getItem(`dooty_pet_avatar_${p.id}`);
                    return {
                        ...p,
                        avatarUrl: p.avatarUrl || cached || '',
                    };
                });
                if (this.currentHousehold.members) {
                    this.currentHousehold.members = this.currentHousehold.members.map((m) => {
                        const cached = localStorage.getItem(`dooty_member_avatar_${m.id}`);
                        return {
                            ...m,
                            avatarUrl: m.avatarUrl || cached || (m.role === 'owner' ? this.userAvatar : ''),
                        };
                    });
                }
                if (this.pets.length > 0) {
                    const storedPetId = localStorage.getItem('dooty_pet_id');
                    this.currentPet = this.pets.find((p) => p.id === storedPetId) || this.pets[0];
                }
                else {
                    this.currentPet = null;
                }
                this.loadPendingInvites();
            }
            if (this.currentPet) {
                if (this.currentHousehold) {
                    await rekeyPendingEvents(this.currentPet.id, this.currentHousehold.id);
                }
                await ApiClient.flushOfflineQueue();
                await this.refreshEvents();
            }
            else {
                this.events = [];
            }
            await this.checkPendingSync();
        }
        catch (err) {
            console.warn('Init loaded with local fallback:', err);
        }
        finally {
            this.isLoading = false;
            this.notify();
        }
    }
    async selectPet(pet) {
        this.currentPet = pet;
        localStorage.setItem('dooty_pet_id', pet.id);
        this.loadTreatmentsForPet(pet.id);
        this.events = await getEventsOffline(pet.id);
        this.notify();
        this.syncEvents();
    }
    async selectHousehold(householdId) {
        const target = this.userHouseholds.find((h) => h.id === householdId);
        if (!target)
            return;
        this.currentHousehold = target;
        localStorage.setItem('dooty_household_id', target.id);
        localStorage.setItem('dooty_household_data', JSON.stringify(target));
        const rawPets = target.pets || (await ApiClient.getPets(target.id));
        this.pets = rawPets;
        if (rawPets.length > 0) {
            this.currentPet = rawPets[0];
            localStorage.setItem('dooty_pet_id', this.currentPet.id);
            await rekeyPendingEvents(this.currentPet.id, target.id);
            await ApiClient.flushOfflineQueue();
            this.events = await getEventsOffline(this.currentPet.id);
            this.syncEvents();
        }
        else {
            this.currentPet = null;
            this.events = [];
        }
        this.loadPendingInvites();
        this.notify();
    }
    async refreshEvents() {
        if (!this.currentPet) {
            this.events = [];
            this.notify();
            return;
        }
        // Instant display from local storage
        this.events = await getEventsOffline(this.currentPet.id);
        this.notify();
        // Delta sync in background
        await this.syncEvents();
    }
    async syncEvents() {
        if (!this.currentPet)
            return;
        const targetPetId = this.currentPet.id;
        this.isSyncing = true;
        this.notify();
        try {
            if (navigator.onLine) {
                const flushed = await ApiClient.flushOfflineQueue();
                await this.checkPendingSync();
                if (flushed > 0 && this.currentPet?.id === targetPetId) {
                    this.events = await getEventsOffline(targetPetId);
                    this.notify();
                }
            }
            const updated = await ApiClient.syncEvents(targetPetId, async () => {
                if (this.currentPet?.id === targetPetId) {
                    this.events = await getEventsOffline(targetPetId);
                    this.notify();
                }
            });
            if (this.currentPet?.id === targetPetId) {
                this.events = updated;
                this.notify();
            }
        }
        catch (err) {
            console.warn('Sync events warning:', err);
        }
        finally {
            this.isSyncing = false;
            this.notify();
        }
    }
    async logEvent(eventType, notes = '', metadata, lat, lng, customTimestamp) {
        if (!this.currentHousehold || !this.currentPet)
            return;
        const loggedByName = this.currentUser?.displayName ||
            this.currentHousehold.members?.[0]?.displayName ||
            'Owner';
        const newEvt = await ApiClient.createEvent({
            householdId: this.currentHousehold.id,
            petId: this.currentPet.id,
            eventType,
            loggedByName,
            loggedByUserId: this.currentUser?.id,
            timestamp: customTimestamp || new Date().toISOString(),
            notes,
            latitude: lat,
            longitude: lng,
            metadata: metadata || {},
        });
        this.events = [newEvt, ...this.events];
        await this.checkPendingSync();
        this.notify();
    }
    async updateEvent(eventId, eventType, notes = '', metadata, lat, lng, timestamp) {
        const updates = {
            eventType,
            notes,
            metadata: metadata || {},
            latitude: lat,
            longitude: lng,
        };
        if (timestamp) {
            updates.timestamp = timestamp;
        }
        try {
            const updatedEvt = await ApiClient.updateEvent(eventId, updates);
            this.events = this.events.map((e) => (e.id === eventId ? { ...e, ...updatedEvt } : e));
        }
        catch (err) {
            // Optimistic local update fallback
            this.events = this.events.map((e) => e.id === eventId
                ? {
                    ...e,
                    eventType,
                    notes,
                    metadata: metadata || e.metadata,
                    latitude: lat !== undefined ? lat : e.latitude,
                    longitude: lng !== undefined ? lng : e.longitude,
                    ...(timestamp ? { timestamp } : {}),
                }
                : e);
        }
        this.notify();
    }
    async deleteEvent(eventId) {
        try {
            await ApiClient.deleteEvent(eventId);
        }
        catch (err) {
            console.warn('Failed to delete event on backend:', err);
        }
        this.events = this.events.filter((e) => e.id !== eventId && e.localId !== eventId);
        this.notify();
    }
    async handleNetworkChange(isOnline) {
        this.isOnline = isOnline;
        if (isOnline) {
            const flushed = await ApiClient.flushOfflineQueue();
            if (flushed > 0) {
                await this.refreshEvents();
            }
        }
        await this.checkPendingSync();
        this.notify();
    }
    get isAuthenticated() {
        return this.currentHousehold !== null;
    }
    signOut() {
        localStorage.removeItem('dooty_auth_token');
        localStorage.removeItem('dooty_household_id');
        localStorage.removeItem('dooty_household_data');
        localStorage.removeItem('dooty_pet_id');
        localStorage.removeItem('dooty_user_avatar');
        this.currentUser = null;
        this.currentHousehold = null;
        this.userHouseholds = [];
        this.currentPet = null;
        this.pets = [];
        this.events = [];
        this.userAvatar = '';
        this.activeTab = 'today';
        this.authView = 'signin';
        this.notify();
    }
    async signUp(dto) {
        this.isLoading = true;
        this.notify();
        try {
            if (!dto.redirectTo && typeof window !== 'undefined') {
                dto.redirectTo = window.location.origin + window.location.pathname;
            }
            const session = await ApiClient.signUp(dto);
            this.currentUser = session.user;
            this.currentHousehold = session.activeHousehold;
            this.userHouseholds = session.households || (session.activeHousehold ? [session.activeHousehold] : []);
            if (session.token) {
                localStorage.setItem('dooty_auth_token', session.token);
            }
            if (session.activeHousehold) {
                localStorage.setItem('dooty_household_id', session.activeHousehold.id);
                localStorage.setItem('dooty_household_data', JSON.stringify(session.activeHousehold));
                const rawPets = session.activeHousehold.pets || [];
                this.pets = rawPets;
                if (rawPets.length > 0) {
                    this.currentPet = rawPets[0];
                    localStorage.setItem('dooty_pet_id', this.currentPet.id);
                    await rekeyPendingEvents(this.currentPet.id, session.activeHousehold.id);
                    await ApiClient.flushOfflineQueue();
                    await this.refreshEvents();
                }
                else {
                    this.currentPet = null;
                }
                this.loadPendingInvites();
            }
            this.authView = 'signin';
        }
        finally {
            this.isLoading = false;
            this.notify();
        }
    }
    async signIn(dto) {
        this.isLoading = true;
        this.notify();
        try {
            const session = await ApiClient.signIn(dto);
            this.currentUser = session.user;
            this.currentHousehold = session.activeHousehold;
            this.userHouseholds = session.households || (session.activeHousehold ? [session.activeHousehold] : []);
            if (session.token) {
                localStorage.setItem('dooty_auth_token', session.token);
            }
            if (session.activeHousehold) {
                localStorage.setItem('dooty_household_id', session.activeHousehold.id);
                localStorage.setItem('dooty_household_data', JSON.stringify(session.activeHousehold));
                const rawPets = session.activeHousehold.pets || [];
                this.pets = rawPets;
                if (rawPets.length > 0) {
                    this.currentPet = rawPets[0];
                    localStorage.setItem('dooty_pet_id', this.currentPet.id);
                    await rekeyPendingEvents(this.currentPet.id, session.activeHousehold.id);
                    await ApiClient.flushOfflineQueue();
                    await this.refreshEvents();
                }
                else {
                    this.currentPet = null;
                }
                this.loadPendingInvites();
            }
            this.authView = 'signin';
        }
        finally {
            this.isLoading = false;
            this.notify();
        }
    }
    async joinAuthenticated(code, role) {
        this.isLoading = true;
        this.notify();
        try {
            const session = await ApiClient.joinAuthenticated(code, role);
            this.userHouseholds = session.households || [];
            if (session.activeHousehold) {
                this.currentHousehold = session.activeHousehold;
                localStorage.setItem('dooty_household_id', session.activeHousehold.id);
                localStorage.setItem('dooty_household_data', JSON.stringify(session.activeHousehold));
                const rawPets = session.activeHousehold.pets || [];
                this.pets = rawPets;
                if (rawPets.length > 0) {
                    this.currentPet = rawPets[0];
                    localStorage.setItem('dooty_pet_id', this.currentPet.id);
                    await rekeyPendingEvents(this.currentPet.id, session.activeHousehold.id);
                    await ApiClient.flushOfflineQueue();
                    await this.refreshEvents();
                }
                this.loadPendingInvites();
            }
        }
        finally {
            this.isLoading = false;
            this.notify();
        }
    }
    async claimHousehold(householdId, role) {
        this.isLoading = true;
        this.notify();
        try {
            const session = await ApiClient.claimHousehold(householdId, role);
            this.userHouseholds = session.households || [];
            if (session.activeHousehold) {
                this.currentHousehold = session.activeHousehold;
                localStorage.setItem('dooty_household_id', session.activeHousehold.id);
                localStorage.setItem('dooty_household_data', JSON.stringify(session.activeHousehold));
                const rawPets = session.activeHousehold.pets || [];
                this.pets = rawPets;
                if (rawPets.length > 0) {
                    this.currentPet = rawPets[0];
                    localStorage.setItem('dooty_pet_id', this.currentPet.id);
                    await rekeyPendingEvents(this.currentPet.id, session.activeHousehold.id);
                    await ApiClient.flushOfflineQueue();
                    await this.refreshEvents();
                }
                this.loadPendingInvites();
            }
        }
        finally {
            this.isLoading = false;
            this.notify();
        }
    }
    async removeMember(memberId) {
        if (!this.currentHousehold)
            return;
        this.isLoading = true;
        this.notify();
        try {
            await ApiClient.removeMember(this.currentHousehold.id, memberId);
            this.currentHousehold.members = (this.currentHousehold.members || []).filter((m) => m.id !== memberId);
            localStorage.setItem('dooty_household_data', JSON.stringify(this.currentHousehold));
        }
        finally {
            this.isLoading = false;
            this.notify();
        }
    }
    async checkPendingSync() {
        const pending = await getPendingEvents();
        this.pendingSyncCount = pending.length;
        this.notify();
    }
}
export const appState = new AppStateManager();
//# sourceMappingURL=appState.js.map