import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { PetEvent, CreateEventDTO, Household, Pet } from '@dooty/shared';

interface DootyDBSchema extends DBSchema {
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

const DB_NAME = 'dooty-offline-db';
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase<DootyDBSchema>> | null = null;

export function getOfflineDB() {
  if (!dbPromise) {
    dbPromise = openDB<DootyDBSchema>(DB_NAME, DB_VERSION, {
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

export async function getEventsOffline(
  petId: string,
  options?: { startDate?: string; endDate?: string; limit?: number }
): Promise<PetEvent[]> {
  try {
    const db = await getOfflineDB();
    let all = await db.getAllFromIndex('events', 'by-pet', petId);

    if (options?.startDate) {
      const startMs = new Date(options.startDate).getTime();
      all = all.filter((e) => new Date(e.timestamp).getTime() >= startMs);
    }
    if (options?.endDate) {
      const endMs = new Date(options.endDate).getTime();
      all = all.filter((e) => new Date(e.timestamp).getTime() <= endMs);
    }

    all.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    if (options?.limit && options.limit > 0) {
      return all.slice(0, options.limit);
    }
    return all;
  } catch (err) {
    console.warn('Could not retrieve offline events:', err);
    return [];
  }
}

export async function getLastSyncTimestamp(petId: string): Promise<string | null> {
  try {
    const db = await getOfflineDB();
    const val = await db.get('meta', `last_sync_${petId}`);
    return val || null;
  } catch {
    return null;
  }
}

export async function setLastSyncTimestamp(petId: string, timestamp: string): Promise<void> {
  try {
    const db = await getOfflineDB();
    await db.put('meta', timestamp, `last_sync_${petId}`);
  } catch (err) {
    console.warn('Failed to set last sync timestamp:', err);
  }
}

export async function clearLastSyncTimestamp(petId: string): Promise<void> {
  try {
    const db = await getOfflineDB();
    await db.delete('meta', `last_sync_${petId}`);
  } catch (err) {
    console.warn('Failed to clear last sync timestamp:', err);
  }
}

export async function clearOfflineEvents(petId?: string): Promise<void> {
  try {
    const db = await getOfflineDB();
    if (!petId) {
      await db.clear('events');
      await db.clear('meta');
    } else {
      const all = await db.getAllFromIndex('events', 'by-pet', petId);
      const tx = db.transaction('events', 'readwrite');
      for (const e of all) {
        await tx.store.delete(e.id);
      }
      await tx.done;
      await db.delete('meta', `last_sync_${petId}`);
    }
  } catch (err) {
    console.warn('Failed to clear offline events:', err);
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

export async function replacePendingEventWithServerEvent(localId: string, serverEvent: PetEvent): Promise<void> {
  try {
    const db = await getOfflineDB();
    await db.delete('pending_events', localId);
    await db.delete('events', localId);
    await db.put('events', serverEvent);
  } catch (err) {
    console.warn('Failed to replace pending event with server event:', err);
  }
}

export async function rekeyPendingEvents(
  newPetId: string,
  newHouseholdId: string,
  oldPetId?: string,
  oldHouseholdId?: string
): Promise<void> {
  try {
    const db = await getOfflineDB();
    const pendingList = await db.getAll('pending_events');
    for (const item of pendingList) {
      const shouldRekey =
        (!oldPetId || item.dto.petId === oldPetId) &&
        (!oldHouseholdId || item.dto.householdId === oldHouseholdId);
      if (shouldRekey) {
        item.dto.petId = newPetId;
        item.dto.householdId = newHouseholdId;
        await db.put('pending_events', item);

        const localEvt = await db.get('events', item.localId);
        if (localEvt) {
          localEvt.petId = newPetId;
          localEvt.householdId = newHouseholdId;
          await db.put('events', localEvt);
        }
      }
    }
  } catch (err) {
    console.warn('Failed to rekey pending events:', err);
  }
}

export async function deleteEventOffline(eventId: string): Promise<void> {
  try {
    const db = await getOfflineDB();
    await db.delete('events', eventId);
    await db.delete('pending_events', eventId);
  } catch (err) {
    console.warn('Failed to delete offline event:', err);
  }
}

export async function updateEventOffline(event: PetEvent): Promise<void> {
  try {
    const db = await getOfflineDB();
    await db.put('events', event);
  } catch (err) {
    console.warn('Failed to update offline event:', err);
  }
}


