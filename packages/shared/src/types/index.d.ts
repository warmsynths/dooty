export type EventType = 'poop' | 'pee' | 'walk' | 'food' | 'water' | 'medicine' | 'grooming' | 'playing' | 'vomit' | 'weight' | 'vet' | 'symptom' | 'nap' | 'training';
export interface EventMetadata {
    consistency?: number;
    consistencyLabel?: string;
    size?: 'S' | 'M' | 'L' | 'XL';
    mood?: string;
    weightKg?: number;
    medication?: string;
    dosage?: string;
    walkDuration?: string;
    walkDistance?: string;
    symptom?: string;
    visitReason?: string;
    portion?: string;
    weather?: string;
    locationName?: string;
    photoUrl?: string;
    [key: string]: any;
}
export interface UserProfile {
    id: string;
    email: string;
    displayName: string;
    avatarUrl?: string;
}
export interface AuthUser {
    id: string;
    email: string;
    displayName: string;
    avatarUrl?: string;
    createdAt: string;
}
export interface SignUpDTO {
    email: string;
    password: string;
    displayName: string;
    mode: 'create' | 'join' | 'claim';
    householdName?: string;
    pet?: {
        name: string;
        species?: 'dog' | 'cat' | 'other';
        breed?: string;
        size?: 'S' | 'M' | 'L' | 'XL';
        birthday?: string;
        avatarUrl?: string;
    };
    inviteCode?: string;
    claimHouseholdId?: string;
    role?: string;
    trackingPreferences?: Record<string, boolean>;
    redirectTo?: string;
}
export interface SignInDTO {
    email: string;
    password: string;
}
export interface AuthSessionResponse {
    user: AuthUser;
    token: string;
    activeHousehold: Household | null;
    households: Household[];
}
export interface SwitchHouseholdDTO {
    householdId: string;
}
export interface JoinAuthenticatedDTO {
    code: string;
    role?: string;
}
export interface Household {
    id: string;
    name: string;
    createdAt: string;
    updatedAt?: string;
    members?: HouseholdMember[];
    pets?: Pet[];
}
export interface HouseholdMember {
    id: string;
    householdId: string;
    userId?: string;
    displayName: string;
    avatarUrl?: string;
    role: 'owner' | 'admin' | 'member';
    joinedAt: string;
}
export interface UpdatePetDTO {
    name?: string;
    species?: 'dog' | 'cat' | 'other';
    breed?: string;
    birthday?: string;
    avatarUrl?: string;
}
export interface UpdateHouseholdMemberDTO {
    displayName?: string;
    avatarUrl?: string;
    role?: 'owner' | 'admin' | 'member';
}
export interface CreateHouseholdDTO {
    name: string;
    ownerName: string;
    pet?: {
        name: string;
        species?: 'dog' | 'cat' | 'other';
        breed?: string;
        birthday?: string;
        avatarUrl?: string;
    };
}
export interface HouseholdInvite {
    id: string;
    householdId: string;
    code: string;
    createdBy?: string;
    role?: string;
    expiresAt: string;
    createdAt: string;
}
export interface Pet {
    id: string;
    householdId: string;
    name: string;
    species: 'dog' | 'cat' | 'other';
    breed?: string;
    size?: 'S' | 'M' | 'L' | 'XL';
    birthday?: string;
    avatarUrl?: string;
    createdAt: string;
}
export interface PetEvent {
    id: string;
    householdId: string;
    petId: string;
    eventType: EventType;
    loggedByName: string;
    loggedByUserId?: string;
    timestamp: string;
    notes?: string;
    latitude?: number;
    longitude?: number;
    metadata?: Record<string, any>;
    createdAt: string;
    isOfflinePending?: boolean;
    localId?: string;
}
export interface CreateEventDTO {
    petId: string;
    householdId: string;
    eventType: EventType;
    loggedByName: string;
    loggedByUserId?: string;
    timestamp: string;
    notes?: string;
    latitude?: number;
    longitude?: number;
    metadata?: Record<string, any>;
}
export interface UpdateEventDTO {
    eventType?: EventType;
    loggedByName?: string;
    loggedByUserId?: string;
    timestamp?: string;
    notes?: string;
    latitude?: number | null;
    longitude?: number | null;
    metadata?: Record<string, any>;
}
export interface WalkPoint {
    latitude: number;
    longitude: number;
    timestamp: string;
    speed?: number;
}
export interface WalkRoute {
    id: string;
    eventId: string;
    householdId: string;
    petId: string;
    startedAt: string;
    endedAt?: string;
    distanceMeters: number;
    coordinates: WalkPoint[];
    createdAt: string;
}
export interface DogNotesImportItem {
    Time: string;
    'Pet Name': string;
    Event: string;
    Note: string;
    'Logged by': string;
}
export interface ReportCsvImportItem {
    pet: string;
    eventType: string;
    logDate: string;
    logTime: string;
    userName: string;
    comment?: string;
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
    duration?: string;
    quantityNumber?: number;
    quantityUnit?: string;
    temperatureC?: number;
    temperatureF?: number;
    weightKg?: number;
    weightLbs?: number;
    medicineType?: string;
    stoolQuality?: string;
    vaccineName?: string;
    vaccineExpiration?: string;
    bloodGlucoseNumber?: number;
    bloodGlucoseUnit?: string;
}
export interface DogNotesDryRunSummary {
    totalCount: number;
    petName: string;
    earliestDate: string;
    latestDate: string;
    countsByType: Record<string, number>;
    sampleItems: DogNotesImportItem[];
}
export interface UniversalImportSummary {
    sourceType: 'csv' | 'json';
    totalCount: number;
    petName: string;
    earliestDate: string;
    latestDate: string;
    countsByType: Record<string, number>;
    countsByUser: Record<string, number>;
    sampleItems: Array<{
        timestamp: string;
        pet: string;
        eventType: string;
        user: string;
        note?: string;
    }>;
}
export interface HourlyBucket {
    hour: number;
    poopCount: number;
    peeCount: number;
    totalCount: number;
}
export interface DailyFrequency {
    date: string;
    poop: number;
    pee: number;
    food: number;
    walk: number;
    medicine: number;
    vomit: number;
    other: number;
    total: number;
}
export type PredictionReason = 'routine_peak' | 'meal_boost' | 'walk_boost' | 'cadence_interval' | 'overdue' | 'cold_start';
export interface NextPoopPrediction {
    hasData: boolean;
    predictedTimestamp: string | null;
    windowStart?: string | null;
    windowEnd?: string | null;
    timeDisplay: string;
    timeDisplayKo: string;
    subtext: string;
    subtextKo: string;
    progressPercent: number;
    isOverdue: boolean;
    isTomorrow: boolean;
    confidence: 'low' | 'medium' | 'high';
    estimatedHoursRemaining?: number;
    predictionReason?: PredictionReason;
}
export interface PetAnalytics {
    petId: string;
    currentStreakDays: number;
    longestStreakDays: number;
    totalEventsLogged: number;
    hourlyDistribution: HourlyBucket[];
    dailyFrequencies: DailyFrequency[];
    eventCountsByType: Record<EventType, number>;
    lastEventByType: Partial<Record<EventType, PetEvent>>;
    nextPoopPrediction?: NextPoopPrediction;
    walkStats: {
        totalWalks: number;
        totalDistanceMeters: number;
        avgWalkMinutes: number;
    };
    healthAlerts: {
        vomitsLast7Days: number;
        medicinesLast7Days: number;
        daysWithoutPoop: number;
    };
}
export type TimeRangeFilter = '7d' | '30d' | '1y' | 'all';
export interface GetEventsQuery {
    since?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
}
export interface TreatmentScheduleItem {
    id: string;
    petId?: string;
    name: string;
    dose: string;
    every: number;
    due: number;
    nextDueAt?: string;
    lastGivenAt?: string;
}
//# sourceMappingURL=index.d.ts.map