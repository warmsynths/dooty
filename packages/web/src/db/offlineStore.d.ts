import { DBSchema, IDBPDatabase } from 'idb';
import { PetEvent, CreateEventDTO } from '@dooty/shared';
interface DootyDBSchema extends DBSchema {
    events: {
        key: string;
        value: PetEvent;
        indexes: {
            'by-pet': string;
            'by-timestamp': string;
        };
    };
    pending_events: {
        key: string;
        value: {
            localId: string;
            dto: CreateEventDTO;
            createdAt: string;
        };
    };
    meta: {
        key: string;
        value: any;
    };
}
export declare function getOfflineDB(): Promise<IDBPDatabase<DootyDBSchema>>;
export declare function saveEventsOffline(events: PetEvent[]): Promise<void>;
export declare function getEventsOffline(petId: string, options?: {
    startDate?: string;
    endDate?: string;
    limit?: number;
}): Promise<PetEvent[]>;
export declare function getLastSyncTimestamp(petId: string): Promise<string | null>;
export declare function setLastSyncTimestamp(petId: string, timestamp: string): Promise<void>;
export declare function clearOfflineEvents(petId?: string): Promise<void>;
export declare function enqueuePendingEvent(dto: CreateEventDTO): Promise<string>;
export declare function getPendingEvents(): Promise<{
    localId: string;
    dto: CreateEventDTO;
}[]>;
export declare function removePendingEvent(localId: string): Promise<void>;
export declare function replacePendingEventWithServerEvent(localId: string, serverEvent: PetEvent): Promise<void>;
export declare function rekeyPendingEvents(newPetId: string, newHouseholdId: string, oldPetId?: string, oldHouseholdId?: string): Promise<void>;
export declare function deleteEventOffline(eventId: string): Promise<void>;
export declare function updateEventOffline(event: PetEvent): Promise<void>;
export {};
//# sourceMappingURL=offlineStore.d.ts.map