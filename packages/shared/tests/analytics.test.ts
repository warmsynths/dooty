import test from 'node:test';
import assert from 'node:assert';
import { calculatePetAnalytics, predictNextPoop } from '../dist/analytics/index.js';
import type { PetEvent } from '../dist/types/index.js';

test('calculatePetAnalytics computes streaks, 24h hourly distribution, and prediction', () => {
  const events: PetEvent[] = [
    {
      id: '1',
      householdId: 'h1',
      petId: 'pet-1',
      eventType: 'poop',
      loggedByName: 'Reynold',
      timestamp: '2026-08-25T08:30:00.000Z',
      createdAt: '2026-08-25T08:30:00.000Z',
    },
    {
      id: '2',
      householdId: 'h1',
      petId: 'pet-1',
      eventType: 'pee',
      loggedByName: 'Reynold',
      timestamp: '2026-08-25T08:45:00.000Z',
      createdAt: '2026-08-25T08:45:00.000Z',
    },
    {
      id: '3',
      householdId: 'h1',
      petId: 'pet-1',
      eventType: 'vomit',
      loggedByName: 'Wife',
      timestamp: '2026-08-24T12:00:00.000Z',
      createdAt: '2026-08-24T12:00:00.000Z',
    },
  ];

  const now = new Date('2026-08-25T15:24:00');
  const analytics = calculatePetAnalytics(events, 'pet-1', now);
  assert.strictEqual(analytics.totalEventsLogged, 3);
  assert.strictEqual(analytics.eventCountsByType.poop, 1);
  assert.strictEqual(analytics.eventCountsByType.pee, 1);
  assert.strictEqual(analytics.eventCountsByType.vomit, 1);
  assert.strictEqual(analytics.healthAlerts.vomitsLast7Days, 1);
  assert.ok(analytics.nextPoopPrediction);
  assert.strictEqual(analytics.nextPoopPrediction.hasData, true);
});

test('predictNextPoop at 3:24 PM predicts upcoming evening routine instead of past 8:00 AM', () => {
  // Pet has routine at 8:00 AM and 5:00 PM (17:00)
  const now = new Date(2026, 7, 25, 15, 24); // 3:24 PM
  const morningPoopToday = new Date(2026, 7, 25, 8, 0).toISOString();
  const pastPoop1 = new Date(2026, 7, 24, 8, 0).toISOString();
  const pastPoop2 = new Date(2026, 7, 24, 17, 0).toISOString();
  const pastPoop3 = new Date(2026, 7, 23, 8, 0).toISOString();
  const pastPoop4 = new Date(2026, 7, 23, 17, 0).toISOString();

  const events: PetEvent[] = [
    { id: '1', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastPoop3, createdAt: pastPoop3 },
    { id: '2', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastPoop4, createdAt: pastPoop4 },
    { id: '3', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastPoop1, createdAt: pastPoop1 },
    { id: '4', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastPoop2, createdAt: pastPoop2 },
    { id: '5', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: morningPoopToday, createdAt: morningPoopToday },
  ];

  const prediction = predictNextPoop(events, 'pet-1', now);
  assert.strictEqual(prediction.hasData, true);
  assert.strictEqual(prediction.isTomorrow, false);
  assert.strictEqual(prediction.timeDisplay, '5:00 pm');
  assert.strictEqual(prediction.timeDisplayKo, '오후 5:00');
  assert.ok(prediction.progressPercent > 50); // Since 8am to 5pm (9h) and now is 3:24pm (7.4h elapsed), ~82%
});

test('predictNextPoop at 3:24 PM predicts Tomorrow 8:00 am when dog only has morning routine', () => {
  // Pet only poops at 8:00 AM once a day, and already pooped at 8:00 AM today
  const now = new Date(2026, 7, 25, 15, 24); // 3:24 PM
  const morningPoopToday = new Date(2026, 7, 25, 8, 0).toISOString();
  const pastPoop1 = new Date(2026, 7, 24, 8, 0).toISOString();
  const pastPoop2 = new Date(2026, 7, 23, 8, 0).toISOString();

  const events: PetEvent[] = [
    { id: '1', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastPoop2, createdAt: pastPoop2 },
    { id: '2', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastPoop1, createdAt: pastPoop1 },
    { id: '3', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: morningPoopToday, createdAt: morningPoopToday },
  ];

  const prediction = predictNextPoop(events, 'pet-1', now);
  assert.strictEqual(prediction.hasData, true);
  assert.strictEqual(prediction.isTomorrow, true);
  assert.strictEqual(prediction.timeDisplay, 'Tomorrow 8:00 am');
  assert.strictEqual(prediction.timeDisplayKo, '내일 오전 8:00');
  assert.strictEqual(prediction.subtext, 'Next routine window tomorrow morning.');
  assert.strictEqual(prediction.subtextKo, '내일 아침 루틴 예상 시간대입니다.');
});

test('predictNextPoop handles empty logs gracefully', () => {
  const prediction = predictNextPoop([], 'pet-1', new Date());
  assert.strictEqual(prediction.hasData, false);
  assert.strictEqual(prediction.timeDisplay, 'Log to predict');
  assert.strictEqual(prediction.timeDisplayKo, '기록 대기 중');
  assert.strictEqual(prediction.progressPercent, 0);
});

test('predictNextPoop flags overdue when last poop was long ago during waking hours', () => {
  const now = new Date(2026, 7, 25, 17, 0); // 5:00 PM
  // Last poop was yesterday at 8:00 AM (33 hours ago)
  const lastPoop = new Date(2026, 7, 24, 8, 0).toISOString();
  const pastPoop = new Date(2026, 7, 23, 8, 0).toISOString();

  const events: PetEvent[] = [
    { id: '1', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastPoop, createdAt: pastPoop },
    { id: '2', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: lastPoop, createdAt: lastPoop },
  ];

  const prediction = predictNextPoop(events, 'pet-1', now);
  assert.strictEqual(prediction.hasData, true);
  assert.strictEqual(prediction.isOverdue, true);
  assert.strictEqual(prediction.progressPercent, 95);
});
