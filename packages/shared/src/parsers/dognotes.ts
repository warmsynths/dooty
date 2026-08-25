import {
  DogNotesImportItem,
  DogNotesDryRunSummary,
  EventType,
  PetEvent,
} from '../types/index.js';
import { normalizeUserName } from './csv.js';

const EVENT_TYPE_MAPPING: Record<string, EventType> = {
  poop: 'poop',
  pee: 'pee',
  walk: 'walk',
  food: 'food',
  water: 'water',
  medicine: 'medicine',
  medication: 'medicine',
  grooming: 'grooming',
  playing: 'playing',
  play: 'playing',
  vomit: 'vomit',
  throwup: 'vomit',
  weight: 'weight',
  weigh: 'weight',
  vet: 'vet',
  clinic: 'vet',
  doctor: 'vet',
  symptom: 'symptom',
  illness: 'symptom',
  scratch: 'symptom',
};

export function normalizeEventType(rawEvent: string): EventType {
  const normalized = (rawEvent || '').trim().toLowerCase();
  return EVENT_TYPE_MAPPING[normalized] || 'playing';
}

export function parseDogNotesJson(rawJsonText: string): DogNotesImportItem[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawJsonText);
  } catch (err) {
    throw new Error('Invalid JSON format: Unable to parse file.');
  }

  if (!Array.isArray(parsed)) {
    throw new Error('Invalid DogNotes format: Root must be an array of event records.');
  }

  const validItems: DogNotesImportItem[] = [];

  for (const item of parsed) {
    if (
      item &&
      typeof item === 'object' &&
      'Time' in item &&
      'Event' in item
    ) {
      validItems.push({
        Time: String(item.Time || new Date().toISOString()),
        'Pet Name': String(item['Pet Name'] || 'Pet'),
        Event: String(item.Event || ''),
        Note: String(item.Note || ''),
        'Logged by': String(item['Logged by'] || 'Owner'),
      });
    }
  }

  return validItems;
}

export function summarizeDogNotesImport(items: DogNotesImportItem[]): DogNotesDryRunSummary {
  if (items.length === 0) {
    return {
      totalCount: 0,
      petName: 'Unknown',
      earliestDate: '',
      latestDate: '',
      countsByType: {},
      sampleItems: [],
    };
  }

  const countsByType: Record<string, number> = {};
  let earliest = items[0].Time;
  let latest = items[0].Time;
  const petNameFrequency: Record<string, number> = {};

  for (const item of items) {
    const rawType = item.Event || 'Unknown';
    countsByType[rawType] = (countsByType[rawType] || 0) + 1;

    const pet = item['Pet Name'] || 'Pet';
    petNameFrequency[pet] = (petNameFrequency[pet] || 0) + 1;

    if (item.Time < earliest) earliest = item.Time;
    if (item.Time > latest) latest = item.Time;
  }

  // Find most frequent pet name
  let mainPetName = 'Pet';
  let maxCount = 0;
  for (const [name, count] of Object.entries(petNameFrequency)) {
    if (count > maxCount) {
      maxCount = count;
      mainPetName = name;
    }
  }

  return {
    totalCount: items.length,
    petName: mainPetName,
    earliestDate: earliest,
    latestDate: latest,
    countsByType,
    sampleItems: items.slice(0, 5),
  };
}

export function convertDogNotesToPetEvents(
  items: DogNotesImportItem[],
  householdId: string,
  petId: string
): Omit<PetEvent, 'id' | 'createdAt'>[] {
  return items.map((item) => ({
    householdId,
    petId,
    eventType: normalizeEventType(item.Event),
    loggedByName: normalizeUserName(item['Logged by'] || 'Owner'),
    timestamp: item.Time,
    notes: item.Note || '',
    metadata: {
      originalDogNotesEvent: item.Event,
      originalUserName: item['Logged by'] || '',
      importedAt: new Date().toISOString(),
    },
  }));
}
