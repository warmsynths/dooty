import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { PetEvent, CreateEventDTO, Household, Pet } from '@watslog/shared';

interface WatslogDBSchema extends DBSchema {
  events: {
    key: string;
    value: PetEvent;
    indexes: { 'by-pet': string; 'by-timestamp': string };
  };
  pending_events: {
    key: string;
    value: { localId: string; dto: CreateEventDTO; createdAt: string };
  };
  meta: {
    key: string;
    value: any;
  };
}

const DB_NAME = 'watslog-offline-db';
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase<WatslogDBSchema>> | null = null;

export function getOfflineDB() {
  if (!dbPromise) {
    dbPromise = openDB<WatslogDBSchema>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('events')) {
          const eventStore = db.createObjectStore('events', { keyPath: 'id' });
          eventStore.createIndex('by-pet', 'petId');
          eventStore.createIndex('by-timestamp', 'timestamp');
        }
        if (!db.objectStoreNames.contains('pending_events')) {
          db.createObjectStore('pending_events', { keyPath: 'localId' });
        }
        if (!db.objectStoreNames.contains('meta')) {
          db.createObjectStore('meta');
        }
      },
    });
  }
  return dbPromise;
}

export async function saveEventsOffline(events: PetEvent[]): Promise<void> {
  try {
    const db = await getOfflineDB();
    const tx = db.transaction('events', 'readwrite');
    for (const evt of events) {
      await tx.store.put(evt);
    }
    await tx.done;
  } catch (err) {
    console.warn('Could not save events offline:', err);
  }
}

export async function getEventsOffline(petId: string): Promise<PetEvent[]> {
  try {
    const db = await getOfflineDB();
    const all = await db.getAllFromIndex('events', 'by-pet', petId);
    return all.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  } catch (err) {
    console.warn('Could not retrieve offline events:', err);
    return [];
  }
}

export async function enqueuePendingEvent(dto: CreateEventDTO): Promise<string> {
  const localId = 'offline-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
  try {
    const db = await getOfflineDB();
    await db.put('pending_events', {
      localId,
      dto,
      createdAt: new Date().toISOString(),
    });

    // Also store as optimistic event in local events
    const optimisticEvent: PetEvent = {
      id: localId,
      householdId: dto.householdId,
      petId: dto.petId,
      eventType: dto.eventType,
      loggedByName: dto.loggedByName || 'Me',
      timestamp: dto.timestamp,
      notes: dto.notes,
      latitude: dto.latitude,
      longitude: dto.longitude,
      metadata: dto.metadata,
      createdAt: new Date().toISOString(),
      isOfflinePending: true,
      localId,
    };
    await db.put('events', optimisticEvent);
  } catch (err) {
    console.warn('Failed to enqueue pending offline event:', err);
  }
  return localId;
}

export async function getPendingEvents(): Promise<{ localId: string; dto: CreateEventDTO }[]> {
  try {
    const db = await getOfflineDB();
    return await db.getAll('pending_events');
  } catch {
    return [];
  }
}

export async function removePendingEvent(localId: string): Promise<void> {
  try {
    const db = await getOfflineDB();
    await db.delete('pending_events', localId);
    await db.delete('events', localId);
  } catch (err) {
    console.warn('Failed to remove pending event:', err);
  }
}
