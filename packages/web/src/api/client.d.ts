import { Household, Pet, PetEvent, CreateEventDTO, UpdateEventDTO, CreateHouseholdDTO, PetAnalytics, DogNotesImportItem, WalkRoute, SignUpDTO, SignInDTO, AuthSessionResponse, GetEventsQuery, TreatmentScheduleItem } from '@dooty/shared';
export declare function onApiActivityChange(listener: (count: number) => void): () => void;
export declare function getActiveApiCount(): number;
export declare function trackedFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
export declare class ApiClient {
    static signUp(dto: SignUpDTO): Promise<AuthSessionResponse>;
    static signIn(dto: SignInDTO): Promise<AuthSessionResponse>;
    static getMe(): Promise<AuthSessionResponse>;
    static joinAuthenticated(code: string, role?: string): Promise<AuthSessionResponse>;
    static claimHousehold(householdId: string, role?: string): Promise<AuthSessionResponse>;
    static createHousehold(data: CreateHouseholdDTO): Promise<Household>;
    static getHousehold(householdId: string): Promise<Household>;
    static removeMember(householdId: string, memberId: string): Promise<void>;
    static createInviteCode(householdId: string): Promise<{
        code: string;
        expiresAt: string;
    }>;
    static joinHousehold(code: string, displayName: string, role?: string): Promise<Household>;
    static getPets(householdId: string): Promise<Pet[]>;
    static updatePet(petId: string, data: Partial<Pet>): Promise<Pet>;
    static updateMember(householdId: string, memberId: string, data: {
        displayName?: string;
        avatarUrl?: string;
        role?: string;
    }): Promise<any>;
    static getEvents(petId: string, options?: number | GetEventsQuery): Promise<PetEvent[]>;
    static syncEvents(petId: string, onProgress?: (count: number) => void): Promise<PetEvent[]>;
    static backfillOlderEvents(petId: string, beforeIso: string, onProgress?: (count: number) => void): Promise<void>;
    static createEvent(dto: CreateEventDTO): Promise<PetEvent>;
    static updateEvent(eventId: string, updates: UpdateEventDTO): Promise<PetEvent>;
    static deleteEvent(eventId: string): Promise<void>;
    static flushOfflineQueue(): Promise<number>;
    static importEvents(events: Omit<PetEvent, 'id' | 'createdAt'>[]): Promise<{
        importedCount: number;
    }>;
    static importDogNotes(householdId: string, petId: string, items: DogNotesImportItem[]): Promise<{
        importedCount: number;
    }>;
    static getAnalytics(petId: string, options?: {
        startDate?: string;
        endDate?: string;
    }): Promise<PetAnalytics>;
    static saveWalkRoute(walk: Partial<WalkRoute>): Promise<WalkRoute>;
    static getWalkRoutes(petId: string): Promise<WalkRoute[]>;
    static getTreatmentSchedules(petId: string): Promise<TreatmentScheduleItem[]>;
    static createTreatmentSchedule(petId: string, data: {
        name: string;
        dose?: string;
        every: number;
        nextDueAt?: string;
    }): Promise<TreatmentScheduleItem>;
    static updateTreatmentSchedule(id: string, data: Partial<{
        name: string;
        dose: string;
        every: number;
        nextDueAt: string;
        lastGivenAt: string;
    }>): Promise<TreatmentScheduleItem>;
    static deleteTreatmentSchedule(id: string): Promise<{
        success: boolean;
    }>;
}
//# sourceMappingURL=client.d.ts.map