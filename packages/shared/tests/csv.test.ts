import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import {
  parseRawCsv,
  normalizeUserName,
  normalizePetName,
  normalizeCsvEventType,
  parseDateTimeToUtcIso,
  parseReportCsv,
  summarizeReportCsvImport,
  convertReportCsvToPetEvents,
  parseAnyImportFile,
  convertAnyImportToPetEvents,
} from '../dist/index.js';

test('normalizeUserName maps names accurately', () => {
  assert.strictEqual(normalizeUserName('Reynold'), 'reyn');
  assert.strictEqual(normalizeUserName('Reynold Ismail'), 'reyn');
  assert.strictEqual(normalizeUserName('reynold'), 'reyn');
  assert.strictEqual(normalizeUserName('reyn'), 'reyn');
  assert.strictEqual(normalizeUserName('Youngrok Lee'), 'youngrok');
  assert.strictEqual(normalizeUserName('Youngrok'), 'youngrok');
  assert.strictEqual(normalizeUserName('Young Lee'), 'youngrok');
  assert.strictEqual(normalizeUserName('Young'), 'youngrok');
  assert.strictEqual(normalizeUserName('young lee'), 'youngrok');
  assert.strictEqual(normalizeUserName('youngrok lee'), 'youngrok');
  assert.strictEqual(normalizeUserName('youngrok'), 'youngrok');
});

test('normalizePetName maps Watson to jjols accurately', () => {
  assert.strictEqual(normalizePetName('Watson'), 'jjols');
  assert.strictEqual(normalizePetName('watson'), 'jjols');
  assert.strictEqual(normalizePetName('jjols'), 'jjols');
  assert.strictEqual(normalizePetName('OtherPet'), 'OtherPet');
});

test('normalizeCsvEventType maps all pet event variations', () => {
  assert.strictEqual(normalizeCsvEventType('Pee'), 'pee');
  assert.strictEqual(normalizeCsvEventType('Poop'), 'poop');
  assert.strictEqual(normalizeCsvEventType('Food'), 'food');
  assert.strictEqual(normalizeCsvEventType('Water'), 'water');
  assert.strictEqual(normalizeCsvEventType('Nap'), 'playing');
  assert.strictEqual(normalizeCsvEventType('Training'), 'playing');
  assert.strictEqual(normalizeCsvEventType('Play'), 'playing');
  assert.strictEqual(normalizeCsvEventType('Walk'), 'walk');
  assert.strictEqual(normalizeCsvEventType('Medicine'), 'medicine');
  assert.strictEqual(normalizeCsvEventType('Vomit'), 'vomit');
  assert.strictEqual(normalizeCsvEventType('Weight'), 'weight');
  assert.strictEqual(normalizeCsvEventType('Bath'), 'grooming');
  assert.strictEqual(normalizeCsvEventType('Teeth Brushing'), 'grooming');
  assert.strictEqual(normalizeCsvEventType('Treat'), 'food');
  assert.strictEqual(normalizeCsvEventType('Accident'), 'pee');
  assert.strictEqual(normalizeCsvEventType('Hospital'), 'vet');
  assert.strictEqual(normalizeCsvEventType('Eat grass'), 'symptom');
});

test('parseRawCsv handles quotes and multiline comments', () => {
  const csv = `Pet,Event_Type,Comment
Watson,Pee,"Line 1
Line 2, with comma"
Watson,Poop,Simple`;

  const rows = parseRawCsv(csv);
  assert.strictEqual(rows.length, 3);
  assert.strictEqual(rows[1][2], 'Line 1\nLine 2, with comma');
  assert.strictEqual(rows[2][2], 'Simple');
});

test('parseDateTimeToUtcIso formats UTC timestamps correctly', () => {
  const iso = parseDateTimeToUtcIso('Fri Aug 16 2019', '16:10:38');
  assert.strictEqual(iso, '2019-08-16T16:10:38.000Z');
});

test('parseReportCsv parses sample report correctly', () => {
  const sample = `Pet,Event_Type,Log_Date,Log_Time (UTC+00:00),Start_Date,Start_Time (UTC+00:00),End_Date,End_Time (UTC+00:00),Duration,Quantity_Number,Quantity_Unit,User_Name,Temperature_(C),Temperature_(F),Weight_(Kg),Weight_(P),Medicine_Type,Stool_Quality,Vaccine_Name,Vaccine_Expiration,Blood_Glucose_Number,Blood_Glucose_Unit,Comment
Watson,Pee,Fri Aug 16 2019,16:10:38,,,,,0,0,,Reynold,0,0,0,0,-,-,-,-,-,-,
Watson,Weight,Thu Oct 08 2020,6:0:24,,,,,0,0,,Reynold Ismail,0,0,9,19.8,-,-,-,-,-,-,
Watson,Bath,Sun Sep 01 2019,1:40:13,,,,,0,0,,Youngrok Lee,0,0,0,0,-,-,-,-,-,-,Clean coat`;

  const items = parseReportCsv(sample);
  assert.strictEqual(items.length, 3);
  assert.strictEqual(items[0].pet, 'jjols');
  assert.strictEqual(items[1].weightKg, 9);
  assert.strictEqual(items[2].comment, 'Clean coat');

  const summary = summarizeReportCsvImport(items);
  assert.strictEqual(summary.totalCount, 3);
  assert.strictEqual(summary.petName, 'jjols');
  assert.strictEqual(summary.countsByUser['reyn'], 2);
  assert.strictEqual(summary.countsByUser['youngrok'], 1);

  const converted = convertReportCsvToPetEvents(items, 'h-1', 'p-1');
  assert.strictEqual(converted.length, 3);
  assert.strictEqual(converted[0].loggedByName, 'reyn');
  assert.strictEqual(converted[1].metadata?.weightKg, 9);
  assert.strictEqual(converted[2].eventType, 'grooming');
  assert.strictEqual(converted[2].metadata?.subcategory, 'bath');
});

test('Full import test against actual report.csv (12k+ rows)', () => {
  const filePath = path.resolve('c:/reyn/Projects/watslog-design/report.csv');
  if (!fs.existsSync(filePath)) {
    return;
  }
  const csvContent = fs.readFileSync(filePath, 'utf8');
  const result = parseAnyImportFile(csvContent, 'report.csv');
  
  assert.strictEqual(result.type, 'csv');
  assert.strictEqual(result.summary.totalCount, 12739);
  assert.strictEqual(result.summary.petName, 'jjols');
  
  // Verify user normalization across all 12,739 rows:
  // Reynold (2815) + Reynold Ismail (4964) = 7779 -> 'reyn'
  // Youngrok Lee (4892) + Youngrok (68) = 4960 -> 'youngrok'
  assert.strictEqual(result.summary.countsByUser['reyn'], 7779);
  assert.strictEqual(result.summary.countsByUser['youngrok'], 4960);

  const events = convertAnyImportToPetEvents(result, 'test-hh', 'test-pet');
  assert.strictEqual(events.length, 12739);
  assert.strictEqual(events[0].loggedByName, 'reyn');
  assert.strictEqual(events[0].eventType, 'pee');
  assert.strictEqual(events[0].timestamp, '2019-08-16T16:10:38.000Z');
  assert.strictEqual(events[0].metadata?.petName, 'jjols');
});
