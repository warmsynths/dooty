import { ReportCsvImportItem, UniversalImportSummary, EventType, PetEvent } from '../types/index.js';
/**
 * Standard RFC-4180 CSV parser supporting multiline cells and quotes.
 */
export declare function parseRawCsv(text: string): string[][];
/**
 * Normalizes user names according to app conventions:
 * - 'Reynold' / 'Reynold Ismail' -> 'reyn'
 * - 'Youngrok Lee' / 'Youngrok' -> 'youngrok'
 */
export declare function normalizeUserName(rawName: string): string;
/**
 * Normalizes pet names according to app conventions:
 * - 'Watson' -> 'jjols'
 */
export declare function normalizePetName(rawName: string): string;
/**
 * Normalizes CSV event types to Dooty EventType
 */
export declare function normalizeCsvEventType(rawEvent: string): EventType;
/**
 * Combines date string and UTC time string into ISO 8601 string
 */
export declare function parseDateTimeToUtcIso(logDate: string, logTime: string): string;
/**
 * Parses report.csv or generic pet log CSV text into ReportCsvImportItem[]
 */
export declare function parseReportCsv(csvText: string): ReportCsvImportItem[];
/**
 * Summarizes a parsed CSV import for preview
 */
export declare function summarizeReportCsvImport(items: ReportCsvImportItem[]): UniversalImportSummary;
/**
 * Converts ReportCsvImportItem[] to PetEvent objects for DB insertion
 */
export declare function convertReportCsvToPetEvents(items: ReportCsvImportItem[], householdId: string, petId: string): Omit<PetEvent, 'id' | 'createdAt'>[];
//# sourceMappingURL=csv.d.ts.map