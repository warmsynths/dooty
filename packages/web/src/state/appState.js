import { translations, } from '@watslog/shared';
import { ApiClient } from '../api/client.js';
import { getPendingEvents } from '../db/offlineStore.js';
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
        this.photoModalOpen = false;
        this.photoModalTarget = 'pet';
        this.photoModalTargetId = '';
        this.photoModalCurrentAvatar = '';
        this.photoModalTitle = '';
        this.isLoading = false;
        // Detect initial locale
        const storedLocale = localStorage.getItem('dooty_locale');
        if (storedLocale && (storedLocale === 'en' || storedLocale === 'ko')) {
            this.currentLocale = storedLocale;
        }
        else {
            const browserLang = navigator.language || '';
            this.currentLocale = browserLang.startsWith('ko') ? 'ko' : 'en';
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
                }
                this.loadPendingInvites();
            }
            catch (e) {
                console.warn('Failed to parse cached household data:', e);
            }
        }
        // Network listeners
        window.addEventListener('online', () => this.handleNetworkChange(true));
        window.addEventListener('offline', () => this.handleNetworkChange(false));
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
        this.notify();
    }
    setActiveTab(tab) {
        this.activeTab = tab;
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
    openLogger(eventType) {
        this.loggerEventType = eventType || null;
        this.loggerModalOpen = true;
        this.notify();
    }
    closeLogger() {
        this.loggerModalOpen = false;
        this.loggerEventType = null;
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
        if (this.currentPet && this.currentPet.id === petId) {
            this.currentPet = { ...this.currentPet, avatarUrl };
        }
        this.pets = this.pets.map((p) => (p.id === petId ? { ...p, avatarUrl } : p));
        localStorage.setItem(`dooty_pet_avatar_${petId}`, avatarUrl);
        this.notify();
        if (navigator.onLine) {
            try {
                await ApiClient.updatePet(petId, { avatarUrl });
            }
            catch (err) {
                console.warn('Could not sync pet avatar to server:', err);
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
    async init() {
        this.isLoading = true;
        this.notify();
        try {
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
    selectPet(pet) {
        this.currentPet = pet;
        localStorage.setItem('dooty_pet_id', pet.id);
        this.refreshEvents();
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
            await this.refreshEvents();
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
        try {
            this.events = await ApiClient.getEvents(this.currentPet.id);
            this.notify();
        }
        catch (err) {
            console.warn('Could not refresh events:', err);
        }
    }
    async logEvent(eventType, notes = '', metadata, lat, lng) {
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
            timestamp: new Date().toISOString(),
            notes,
            latitude: lat,
            longitude: lng,
            metadata: metadata || {},
        });
        this.events = [newEvt, ...this.events];
        await this.checkPendingSync();
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