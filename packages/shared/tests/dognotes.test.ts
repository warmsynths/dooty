import test from 'node:test';
import assert from 'node:assert';
import {
  parseDogNotesJson,
  summarizeDogNotesImport,
  normalizeEventType,
} from '../dist/parsers/dognotes.js';

test('normalizeEventType maps variations properly', () => {
  assert.strictEqual(normalizeEventType('Poop'), 'poop');
  assert.strictEqual(normalizeEventType('pee'), 'pee');
  assert.strictEqual(normalizeEventType('Medication'), 'medicine');
  assert.strictEqual(normalizeEventType('Throwup'), 'vomit');
  assert.strictEqual(normalizeEventType('unknown_custom'), 'playing');
});

test('parseDogNotesJson parses valid JSON items', () => {
  const sample = JSON.stringify([
    {
      Time: '2026-08-24T22:24:48.992Z',
      'Pet Name': 'Jjols',
      Event: 'Poop',
      Note: 'Healthy',
      'Logged by': 'Reynold Ismail',
    },
    {
      Time: '2026-08-24T22:13:07.860Z',
      'Pet Name': 'Jjols',
      Event: 'Vomit',
      Note: '',
      'Logged by': 'Wife',
    },
  ]);

  const items = parseDogNotesJson(sample);
  assert.strictEqual(items.length, 2);
  assert.strictEqual(items[0]['Pet Name'], 'Jjols');
  assert.strictEqual(items[0].Event, 'Poop');
});

test('summarizeDogNotesImport aggregates counts accurately', () => {
  const items = [
    {
      Time: '2026-08-20T10:00:00.000Z',
      'Pet Name': 'Jjols',
      Event: 'Poop',
      Note: '',
      'Logged by': 'Reynold',
    },
    {
      Time: '2026-08-21T11:00:00.000Z',
      'Pet Name': 'Jjols',
      Event: 'Poop',
      Note: '',
      'Logged by': 'Reynold',
    },
    {
      Time: '2026-08-22T12:00:00.000Z',
      'Pet Name': 'Jjols',
      Event: 'Medicine',
      Note: '',
      'Logged by': 'Reynold',
    },
  ];

  const summary = summarizeDogNotesImport(items);
  assert.strictEqual(summary.totalCount, 3);
  assert.strictEqual(summary.petName, 'Jjols');
  assert.strictEqual(summary.countsByType['Poop'], 2);
  assert.strictEqual(summary.countsByType['Medicine'], 1);
  assert.strictEqual(summary.earliestDate, '2026-08-20T10:00:00.000Z');
  assert.strictEqual(summary.latestDate, '2026-08-22T12:00:00.000Z');
});
