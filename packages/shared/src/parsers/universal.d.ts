import { UniversalImportSummary, PetEvent, DogNotesImportItem, ReportCsvImportItem } from '../types/index.js';
export type ParsedImportResult = {
    type: 'csv';
    rawItems: ReportCsvImportItem[];
    summary: UniversalImportSummary;
} | {
    type: 'json';
    rawItems: DogNotesImportItem[];
    summary: UniversalImportSummary;
};
/**
 * Universal parser that auto-detects whether the content is DogNotes JSON or report.csv.
 */
export declare function parseAnyImportFile(content: string, filename?: string): ParsedImportResult;
/**
 * Converts any parsed import to PetEvent list for DB insertion.
 */
export declare function convertAnyImportToPetEvents(importResult: ParsedImportResult, householdId: string, petId: string): Omit<PetEvent, 'id' | 'createdAt'>[];
//# sourceMappingURL=universal.d.ts.map