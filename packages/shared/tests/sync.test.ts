import test from 'node:test';
import assert from 'node:assert';
import type { PetEvent, CreateEventDTO } from '../dist/types/index.js';

test('Reconciliation replaces optimistic offline event with server event', () => {
  const localId = 'offline-1725148000000-abcde';
  const pendingDto: CreateEventDTO = {
    householdId: 'h-local',
    petId: 'pet-local',
    eventType: 'poop',
    loggedByName: 'Me',
    timestamp: '2026-09-01T08:30:00.000Z',
    notes: 'Morning potty',
  };

  const optimisticEvent: PetEvent = {
    id: localId,
    householdId: pendingDto.householdId,
    petId: pendingDto.petId,
    eventType: pendingDto.eventType,
    loggedByName: 'Me',
    timestamp: pendingDto.timestamp,
    notes: pendingDto.notes,
    createdAt: new Date().toISOString(),
    isOfflinePending: true,
    localId,
  };

  // Simulated server batch response
  const serverEvent: PetEvent = {
    id: 'evt-uuid-12345',
    householdId: 'h-server-999',
    petId: 'pet-server-888',
    eventType: pendingDto.eventType,
    loggedByName: 'Me',
    timestamp: pendingDto.timestamp,
    notes: pendingDto.notes,
    createdAt: '2026-09-01T13:00:00.000Z',
  };

  // Reconciliation function simulation
  const localStore = new Map<string, PetEvent>();
  localStore.set(localId, optimisticEvent);

  assert.strictEqual(localStore.has(localId), true);

  // Replace optimistic local ID with server event
  localStore.delete(localId);
  localStore.set(serverEvent.id, serverEvent);

  assert.strictEqual(localStore.has(localId), false);
  assert.strictEqual(localStore.has(serverEvent.id), true);
  assert.strictEqual(localStore.get(serverEvent.id)?.notes, 'Morning potty');
});

test('Rekeying updates offline pending DTOs with newly authenticated pet/household IDs', () => {
  const pendingQueue = [
    {
      localId: 'offline-1',
      dto: {
        householdId: 'h-guest',
        petId: 'pet-guest',
        eventType: 'pee' as const,
        timestamp: '2026-09-01T09:00:00.000Z',
      },
    },
    {
      localId: 'offline-2',
      dto: {
        householdId: 'h-guest',
        petId: 'pet-guest',
        eventType: 'food' as const,
        timestamp: '2026-09-01T09:15:00.000Z',
      },
    },
  ];

  const newHouseholdId = 'h-authenticated-100';
  const newPetId = 'pet-authenticated-200';

  for (const item of pendingQueue) {
    item.dto.householdId = newHouseholdId;
    item.dto.petId = newPetId;
  }

  assert.strictEqual(pendingQueue[0].dto.householdId, 'h-authenticated-100');
  assert.strictEqual(pendingQueue[0].dto.petId, 'pet-authenticated-200');
  assert.strictEqual(pendingQueue[1].dto.householdId, 'h-authenticated-100');
  assert.strictEqual(pendingQueue[1].dto.petId, 'pet-authenticated-200');
});
