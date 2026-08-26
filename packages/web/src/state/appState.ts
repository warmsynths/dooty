import {
  Household,
  Pet,
  PetEvent,
  SupportedLocale,
  translations,
  EventType,
  AuthUser,
  SignUpDTO,
  SignInDTO,
  AuthSessionResponse,
  HouseholdInvite,
  TimeRangeFilter,
  UpdateEventDTO,
} from '@watslog/shared';
import { ApiClient } from '../api/client.js';
import { getPendingEvents, getEventsOffline } from '../db/offlineStore.js';

type Listener = () => void;

export interface PendingInviteItem {
  code: string;
  role: string;
  when: string;
  expiresAt: string;
}

class AppStateManager {
  private listeners: Set<Listener> = new Set();

  currentUser: AuthUser | null = null;
  currentHousehold: Household | null = null;
  userHouseholds: Household[] = [];
  currentPet: Pet | null = null;
  pets: Pet[] = [];
  events: PetEvent[] = [];

  activeTab: 'today' | 'map' | 'analytics' | 'import' | 'settings' | 'invite' | 'dog' | 'deep' | 'wrapped' = 'today';
  authView: 'signin' | 'signup' | 'dogsetup' | 'join' | 'joindetails' = 'signin';
  currentLocale: SupportedLocale = 'en';

  isOnline: boolean = navigator.onLine;
  pendingSyncCount: number = 0;
  isSyncing: boolean = false;
  analyticsTimeRange: TimeRangeFilter = '30d';

  // User profile
  userAvatar: string = localStorage.getItem('dooty_user_avatar') || '';

  // Tracking preferences
  track: Record<string, boolean> = {
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
  nudges: Record<string, boolean> = {
    push: true,
    weekly: true,
    gap: true,
    vet: false,
  };

  // Pending invites
  pendingInvites: PendingInviteItem[] = [];

  // Modal states
  loggerModalOpen: boolean = false;
  loggerEventType: EventType | null = null;
  editingEvent: PetEvent | null = null;
  photoModalOpen: boolean = false;
  photoModalTarget: 'pet' | 'user' | 'member' = 'pet';
  photoModalTargetId: string = '';
  photoModalCurrentAvatar: string = '';
  photoModalTitle: string = '';
  isLoading: boolean = false;

  constructor() {
    // Detect initial locale
    const storedLocale = localStorage.getItem('dooty_locale') as SupportedLocale;
    if (storedLocale && (storedLocale === 'en' || storedLocale === 'ko')) {
      this.currentLocale = storedLocale;
    } else {
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
      } catch (e) {
        console.warn('Failed to parse track prefs:', e);
      }
    }

    // Load nudges preferences
    const storedNudges = localStorage.getItem('dooty_nudge_prefs');
    if (storedNudges) {
      try {
        this.nudges = { ...this.nudges, ...JSON.parse(storedNudges) };
      } catch (e) {
        console.warn('Failed to parse nudge prefs:', e);
      }
    }

    // Load analytics timeframe preference
    const storedRange = localStorage.getItem('dooty_analytics_timerange') as TimeRangeFilter;
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
          this.currentPet = this.pets.find((p: any) => p.id === storedPetId) || this.pets[0];
          // Eagerly populate cached offline events on boot
          getEventsOffline(this.currentPet.id).then((cachedEvents) => {
            if (cachedEvents.length > 0 && this.events.length === 0) {
              this.events = cachedEvents;
              this.notify();
            }
          });
        }
        this.loadPendingInvites();
      } catch (e) {
        console.warn('Failed to parse cached household data:', e);
      }
    }

    // Network listeners
    window.addEventListener('online', () => this.handleNetworkChange(true));
    window.addEventListener('offline', () => this.handleNetworkChange(false));
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((l) => l());
  }

  get t() {
    return translations[this.currentLocale];
  }

  setLocale(locale: SupportedLocale) {
    this.currentLocale = locale;
    localStorage.setItem('dooty_locale', locale);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.body.classList.toggle('lang-ko', locale === 'ko');
    }
    this.notify();
  }

  setActiveTab(tab: 'today' | 'map' | 'analytics' | 'import' | 'settings' | 'invite' | 'dog' | 'deep' | 'wrapped') {
    this.activeTab = tab;
    this.notify();
  }

  setAuthView(view: 'signin' | 'signup' | 'dogsetup' | 'join' | 'joindetails') {
    this.authView = view;
    this.notify();
  }

  setTrackingPreference(key: string, value: boolean) {
    this.track = { ...this.track, [key]: value };
    localStorage.setItem('dooty_track_prefs', JSON.stringify(this.track));
    this.notify();
  }

  setNudgePreference(key: string, value: boolean) {
    this.nudges = { ...this.nudges, [key]: value };
    localStorage.setItem('dooty_nudge_prefs', JSON.stringify(this.nudges));
    this.notify();
  }

  setAnalyticsTimeRange(range: TimeRangeFilter) {
    this.analyticsTimeRange = range;
    localStorage.setItem('dooty_analytics_timerange', range);
    this.notify();
  }

  openLogger(eventType?: EventType | null) {
    this.editingEvent = null;
    this.loggerEventType = eventType || null;
    this.loggerModalOpen = true;
    this.notify();
  }

  openLoggerForEdit(event: PetEvent) {
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

  openPhotoModal(opts: {
    target: 'pet' | 'user' | 'member';
    targetId?: string;
    currentAvatar?: string;
    title?: string;
  }) {
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

  async updatePetAvatar(petId: string, avatarUrl: string) {
    await this.updatePetProfile(petId, { avatarUrl });
  }

  async updatePetProfile(petId: string, updates: Partial<Pet>) {
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
      } catch (err) {
        console.warn('Could not sync pet profile to server:', err);
      }
    }
  }

  async updateUserAvatar(avatarUrl: string) {
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
          } catch (err) {
            console.warn('Could not sync member avatar to server:', err);
          }
        }
      }
    }
  }

  async updateMemberAvatar(memberId: string, avatarUrl: string) {
    if (this.currentHousehold && this.currentHousehold.members) {
      const member = this.currentHousehold.members.find((m) => m.id === memberId);
      if (member) {
        member.avatarUrl = avatarUrl;
        localStorage.setItem(`dooty_member_avatar_${memberId}`, avatarUrl);
        this.notify();

        if (navigator.onLine) {
          try {
            await ApiClient.updateMember(this.currentHousehold.id, memberId, { avatarUrl });
          } catch (err) {
            console.warn('Could not sync member avatar to server:', err);
          }
        }
      }
    }
  }

  private loadPendingInvites() {
    if (!this.currentHousehold) return;
    const stored = localStorage.getItem(`dooty_pending_invites_${this.currentHousehold.id}`);
    if (stored) {
      try {
        this.pendingInvites = JSON.parse(stored);
      } catch (e) {
        this.pendingInvites = [];
      }
    } else {
      // Default initial mockup invites if empty
      this.pendingInvites = [
        { code: 'H3P8', role: 'Log only', when: 'sent to Dan · expires in 6 days', expiresAt: new Date(Date.now() + 6 * 86400000).toISOString() },
        { code: 'B9XT', role: 'Full member', when: 'unsent · expires in 7 days', expiresAt: new Date(Date.now() + 7 * 86400000).toISOString() }
      ];
      localStorage.setItem(`dooty_pending_invites_${this.currentHousehold.id}`, JSON.stringify(this.pendingInvites));
    }
  }

  async createInvite(roleName: string = 'Full member'): Promise<string> {
    let generatedCode = '';
    if (this.currentHousehold) {
      try {
        const res = await ApiClient.createInviteCode(this.currentHousehold.id);
        generatedCode = res.code;
      } catch (err) {
        console.warn('Could not generate invite code from server, creating locally:', err);
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        generatedCode = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
      }

      const newInvite: PendingInviteItem = {
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

  async revokeInvite(code: string): Promise<void> {
    if (!this.currentHousehold) return;
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
        } else if (window.location.search && window.location.search.includes('access_token=')) {
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
        } catch (fetchErr: any) {
          console.warn('Network sync for auth session failed, using cached session:', fetchErr);
          if (fetchErr.message?.includes('Unauthorized') || fetchErr.message?.includes('expired')) {
            this.signOut();
            return;
          }
        }
      } else {
        const householdId = localStorage.getItem('dooty_household_id');
        if (householdId) {
          try {
            const fresh = await ApiClient.getHousehold(householdId);
            if (fresh) {
              this.currentHousehold = fresh;
              localStorage.setItem('dooty_household_data', JSON.stringify(fresh));
            }
          } catch (fetchErr) {
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
        } else {
          this.currentPet = null;
        }

        this.loadPendingInvites();
      }

      if (this.currentPet) {
        await this.refreshEvents();
      } else {
        this.events = [];
      }

      await this.checkPendingSync();
    } catch (err) {
      console.warn('Init loaded with local fallback:', err);
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async selectPet(pet: Pet) {
    this.currentPet = pet;
    localStorage.setItem('dooty_pet_id', pet.id);
    this.events = await getEventsOffline(pet.id);
    this.notify();
    this.syncEvents();
  }

  async selectHousehold(householdId: string) {
    const target = this.userHouseholds.find((h) => h.id === householdId);
    if (!target) return;
    this.currentHousehold = target;
    localStorage.setItem('dooty_household_id', target.id);
    localStorage.setItem('dooty_household_data', JSON.stringify(target));
    const rawPets = target.pets || (await ApiClient.getPets(target.id));
    this.pets = rawPets;
    if (rawPets.length > 0) {
      this.currentPet = rawPets[0];
      localStorage.setItem('dooty_pet_id', this.currentPet.id);
      this.events = await getEventsOffline(this.currentPet.id);
      this.syncEvents();
    } else {
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
    if (!this.currentPet) return;
    const targetPetId = this.currentPet.id;
    this.isSyncing = true;
    this.notify();

    try {
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
    } catch (err) {
      console.warn('Sync events warning:', err);
    } finally {
      this.isSyncing = false;
      this.notify();
    }
  }

  async logEvent(
    eventType: EventType,
    notes = '',
    metadata?: Record<string, any>,
    lat?: number,
    lng?: number,
    customTimestamp?: string
  ) {
    if (!this.currentHousehold || !this.currentPet) return;

    const loggedByName =
      this.currentUser?.displayName ||
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

  async updateEvent(
    eventId: string,
    eventType: EventType,
    notes = '',
    metadata?: Record<string, any>,
    lat?: number,
    lng?: number,
    timestamp?: string
  ) {
    const updates: UpdateEventDTO = {
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
    } catch (err) {
      // Optimistic local update fallback
      this.events = this.events.map((e) =>
        e.id === eventId
          ? {
              ...e,
              eventType,
              notes,
              metadata: metadata || e.metadata,
              latitude: lat !== undefined ? lat : e.latitude,
              longitude: lng !== undefined ? lng : e.longitude,
              ...(timestamp ? { timestamp } : {}),
            }
          : e
      );
    }
    this.notify();
  }

  async deleteEvent(eventId: string) {
    try {
      await ApiClient.deleteEvent(eventId);
    } catch (err) {
      console.warn('Failed to delete event on backend:', err);
    }
    this.events = this.events.filter((e) => e.id !== eventId && e.localId !== eventId);
    this.notify();
  }

  async handleNetworkChange(isOnline: boolean) {
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

  get isAuthenticated(): boolean {
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

  async signUp(dto: SignUpDTO): Promise<void> {
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
          await this.refreshEvents();
        } else {
          this.currentPet = null;
        }
        this.loadPendingInvites();
      }
      this.authView = 'signin';
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async signIn(dto: SignInDTO): Promise<void> {
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
        } else {
          this.currentPet = null;
        }
        this.loadPendingInvites();
      }
      this.authView = 'signin';
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async joinAuthenticated(code: string, role?: string): Promise<void> {
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
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async claimHousehold(householdId: string, role?: string): Promise<void> {
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
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  async removeMember(memberId: string): Promise<void> {
    if (!this.currentHousehold) return;
    this.isLoading = true;
    this.notify();
    try {
      await ApiClient.removeMember(this.currentHousehold.id, memberId);
      this.currentHousehold.members = (this.currentHousehold.members || []).filter((m) => m.id !== memberId);
      localStorage.setItem('dooty_household_data', JSON.stringify(this.currentHousehold));
    } finally {
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
