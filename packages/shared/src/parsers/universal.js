import { parseDogNotesJson, summarizeDogNotesImport, convertDogNotesToPetEvents, } from './dognotes.js';
import { parseReportCsv, summarizeReportCsvImport, convertReportCsvToPetEvents, normalizeUserName, } from './csv.js';
/**
 * Universal parser that auto-detects whether the content is DogNotes JSON or report.csv.
 */
export function parseAnyImportFile(content, filename) {
    const trimmed = content.trim();
    // If filename ends with .json or text starts with '[' or '{'
    const isJson = (filename && filename.toLowerCase().endsWith('.json')) ||
        trimmed.startsWith('[') ||
        trimmed.startsWith('{');
    if (isJson) {
        try {
            const dogNotesItems = parseDogNotesJson(trimmed);
            const dogNotesSummary = summarizeDogNotesImport(dogNotesItems);
            const countsByUser = {};
            const sampleItems = [];
            for (const item of dogNotesItems) {
                const user = normalizeUserName(item['Logged by']);
                countsByUser[user] = (countsByUser[user] || 0) + 1;
                if (sampleItems.length < 5) {
                    sampleItems.push({
                        timestamp: item.Time,
                        pet: item['Pet Name'],
                        eventType: item.Event,
                        user,
                        note: item.Note,
                    });
                }
            }
            const universalSummary = {
                sourceType: 'json',
                totalCount: dogNotesSummary.totalCount,
                petName: dogNotesSummary.petName,
                earliestDate: dogNotesSummary.earliestDate,
                latestDate: dogNotesSummary.latestDate,
                countsByType: dogNotesSummary.countsByType,
                countsByUser,
                sampleItems,
            };
            return {
                type: 'json',
                rawItems: dogNotesItems,
                summary: universalSummary,
            };
        }
        catch (err) {
            if (filename && filename.toLowerCase().endsWith('.json')) {
                throw err;
            }
            // If JSON parsing failed but wasn't strictly named .json, try CSV
        }
    }
    // Try parsing as CSV
    try {
        const csvItems = parseReportCsv(trimmed);
        const csvSummary = summarizeReportCsvImport(csvItems);
        return {
            type: 'csv',
            rawItems: csvItems,
            summary: csvSummary,
        };
    }
    catch (err) {
        throw new Error(`Failed to parse import file. Supported formats are CSV (e.g. report.csv) and DogNotes JSON. Detail: ${err.message}`);
    }
}
/**
 * Converts any parsed import to PetEvent list for DB insertion.
 */
export function convertAnyImportToPetEvents(importResult, householdId, petId) {
    if (importResult.type === 'csv') {
        return convertReportCsvToPetEvents(importResult.rawItems, householdId, petId);
    }
    else {
        // DogNotes items with user normalization
        const converted = convertDogNotesToPetEvents(importResult.rawItems, householdId, petId);
        return converted.map((evt) => ({
            ...evt,
            loggedByName: normalizeUserName(evt.loggedByName),
        }));
    }
}
//# sourceMappingURL=universal.js.map