import { Household, Pet, PetEvent, CreateEventDTO, CreateHouseholdDTO, PetAnalytics, DogNotesImportItem, WalkRoute, SignUpDTO, SignInDTO, AuthSessionResponse, GetEventsQuery } from '@watslog/shared';
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
}
//# sourceMappingURL=client.d.ts.map