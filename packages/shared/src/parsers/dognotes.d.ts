import { DogNotesImportItem, DogNotesDryRunSummary, EventType, PetEvent } from '../types/index.js';
export declare function normalizeEventType(rawEvent: string): EventType;
export declare function parseDogNotesJson(rawJsonText: string): DogNotesImportItem[];
export declare function summarizeDogNotesImport(items: DogNotesImportItem[]): DogNotesDryRunSummary;
export declare function convertDogNotesToPetEvents(items: DogNotesImportItem[], householdId: string, petId: string): Omit<PetEvent, 'id' | 'createdAt'>[];
//# sourceMappingURL=dognotes.d.ts.map