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
  assert.ok(prediction.timeDisplay.includes('5:00 pm'));
  assert.ok(prediction.timeDisplayKo.includes('5:00'));
  assert.strictEqual(prediction.predictionReason, 'routine_peak');
  assert.ok(prediction.windowStart != null);
  assert.ok(prediction.windowEnd != null);
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
  assert.ok(prediction.timeDisplay.includes('Tomorrow'));
  assert.ok(prediction.timeDisplay.includes('8:00 am'));
  assert.ok(prediction.timeDisplayKo.includes('내일'));
  assert.ok(prediction.timeDisplayKo.includes('8:00'));
});

test('predictNextPoop handles empty logs gracefully', () => {
  const prediction = predictNextPoop([], 'pet-1', new Date());
  assert.strictEqual(prediction.hasData, false);
  assert.strictEqual(prediction.timeDisplay, 'Log to predict');
  assert.strictEqual(prediction.timeDisplayKo, '기록 대기 중');
  assert.strictEqual(prediction.progressPercent, 0);
  assert.strictEqual(prediction.predictionReason, 'cold_start');
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
  assert.strictEqual(prediction.predictionReason, 'overdue');
});

test('predictNextPoop applies meal_boost when food event logged recently after last poop', () => {
  // Last poop at 8:00 PM yesterday evening
  const lastPoop = new Date(2026, 7, 24, 20, 0).toISOString();
  // Breakfast at 7:30 AM today
  const breakfast = new Date(2026, 7, 25, 7, 30).toISOString();
  // Current time is 7:35 AM today
  const now = new Date(2026, 7, 25, 7, 35);

  const events: PetEvent[] = [
    { id: '1', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: lastPoop, createdAt: lastPoop },
    { id: '2', householdId: 'h1', petId: 'pet-1', eventType: 'food', loggedByName: 'User', timestamp: breakfast, createdAt: breakfast },
  ];

  const prediction = predictNextPoop(events, 'pet-1', now);
  assert.strictEqual(prediction.hasData, true);
  assert.strictEqual(prediction.predictionReason, 'meal_boost');
  // Expected ~35 mins after 7:30 AM -> 8:05 AM
  assert.ok(prediction.timeDisplay.includes('8:05 am'));
  assert.ok(prediction.subtext.includes('meal'));
  assert.ok(prediction.subtextKo.includes('식사'));
});

test('predictNextPoop applies walk_boost when walk event logged recently after last poop', () => {
  // Last poop at 8:00 AM yesterday
  const lastPoop = new Date(2026, 7, 24, 8, 0).toISOString();
  // Walk started 10 mins ago at 5:00 PM today
  const walkStart = new Date(2026, 7, 25, 17, 0).toISOString();
  // Current time is 5:10 PM
  const now = new Date(2026, 7, 25, 17, 10);

  const events: PetEvent[] = [
    { id: '1', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: lastPoop, createdAt: lastPoop },
    { id: '2', householdId: 'h1', petId: 'pet-1', eventType: 'walk', loggedByName: 'User', timestamp: walkStart, createdAt: walkStart },
  ];

  const prediction = predictNextPoop(events, 'pet-1', now);
  assert.strictEqual(prediction.hasData, true);
  assert.strictEqual(prediction.predictionReason, 'walk_boost');
  assert.ok(prediction.timeDisplay.includes('5:15 pm'));
  assert.ok(prediction.subtext.includes('Walk'));
  assert.ok(prediction.subtextKo.includes('산책'));
});

test('predictNextPoop rolls over to next peak when earlier routine window missed by > 2.5 hours', () => {
  // Routine has 8:00 AM and 5:00 PM peaks
  const pastDayPoop1 = new Date(2026, 7, 24, 8, 0).toISOString();
  const pastDayPoop2 = new Date(2026, 7, 24, 17, 0).toISOString();
  // Now is 1:00 PM (13:00) on 2026-08-25. 8:00 AM passed 5 hours ago without a poop.
  const now = new Date(2026, 7, 25, 13, 0);

  const events: PetEvent[] = [
    { id: '1', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastDayPoop1, createdAt: pastDayPoop1 },
    { id: '2', householdId: 'h1', petId: 'pet-1', eventType: 'poop', loggedByName: 'User', timestamp: pastDayPoop2, createdAt: pastDayPoop2 },
  ];

  const prediction = predictNextPoop(events, 'pet-1', now);
  assert.strictEqual(prediction.hasData, true);
  assert.strictEqual(prediction.isTomorrow, false);
  // Rolled over to upcoming 5:00 PM peak instead of staying stuck overdue at 8:00 AM
  assert.ok(prediction.timeDisplay.includes('5:00 pm'));
  assert.strictEqual(prediction.isOverdue, false);
  assert.ok(prediction.subtext.includes('Earlier routine window') || prediction.subtext.includes('Routine peak'));
});
