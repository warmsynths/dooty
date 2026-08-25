import test from 'node:test';
import assert from 'node:assert';
import { translations } from '../dist/i18n/index.js';
import { ALL_EVENT_TYPES } from '../dist/constants/index.js';

test('i18n dictionaries provide all 9 event keys for en and ko', () => {
  for (const type of ALL_EVENT_TYPES) {
    assert.ok(translations.en.events[type], `Missing EN event key for ${type}`);
    assert.ok(translations.ko.events[type], `Missing KO event key for ${type}`);
    assert.ok(translations.en.events[type].name.length > 0);
    assert.ok(translations.ko.events[type].name.length > 0);
  }
});

test('i18n streak functions return formatted strings', () => {
  assert.strictEqual(translations.en.streak.badge(12), '12 DAY STREAK');
  assert.strictEqual(translations.ko.streak.badge(12), '12일 연속 기록 중!');
});
