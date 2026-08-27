import {
  ReportCsvImportItem,
  UniversalImportSummary,
  EventType,
  PetEvent,
} from '../types/index.js';

/**
 * Standard RFC-4180 CSV parser supporting multiline cells and quotes.
 */
export function parseRawCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          cell += '"';
          i++; // skip escaped quote
        } else {
          inQuotes = false;
        }
      } else {
        cell += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        row.push(cell);
        cell = '';
      } else if (char === '\r') {
        if (nextChar === '\n') {
          i++;
        }
        row.push(cell);
        rows.push(row);
        row = [];
        cell = '';
      } else if (char === '\n') {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = '';
      } else {
        cell += char;
      }
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

/**
 * Normalizes user names according to app conventions:
 * - 'Reynold' / 'Reynold Ismail' -> 'reyn'
 * - 'Youngrok Lee' / 'Youngrok' -> 'youngrok'
 */
export function normalizeUserName(rawName: string): string {
  const trimmed = (rawName || '').trim();
  const lower = trimmed.toLowerCase();

  if (lower === 'reynold' || lower === 'reynold ismail' || lower === 'reyn') {
    return 'reyn';
  }
  if (
    lower === 'youngrok lee' ||
    lower === 'youngrok' ||
    lower === 'young lee' ||
    lower === 'young'
  ) {
    return 'youngrok';
  }
  return trimmed || 'reyn';
}

/**
 * Normalizes pet names according to app conventions:
 * - 'Watson' -> 'jjols'
 */
export function normalizePetName(rawName: string): string {
  const trimmed = (rawName || '').trim();
  const lower = trimmed.toLowerCase();

  if (lower === 'watson' || lower === 'jjols') {
    return 'jjols';
  }
  return trimmed || 'jjols';
}

/**
 * Normalizes CSV event types to Dooty EventType
 */
export function normalizeCsvEventType(rawEvent: string): EventType {
  const normalized = (rawEvent || '').trim().toLowerCase();

  switch (normalized) {
    case 'poop':
      return 'poop';
    case 'pee':
      return 'pee';
    case 'walk':
      return 'walk';
    case 'food':
    case 'treat':
      return 'food';
    case 'water':
      return 'water';
    case 'nap':
    case 'sleep':
    case 'play':
    case 'playing':
    case 'playpen':
    case 'daycare':
    case 'training':
      return 'playing';
    case 'medicine':
    case 'medication':
      return 'medicine';
    case 'vomit':
    case 'throwup':
      return 'vomit';
    case 'weight':
    case 'weigh':
      return 'weight';
    case 'grooming':
    case 'bath':
    case 'teeth brushing':
      return 'grooming';
    case 'hospital':
    case 'vet':
    case 'clinic':
    case 'doctor':
      return 'vet';
    case 'accident':
      return 'pee';
    case 'eat grass':
    case 'temperature':
    case 'crying':
    case 'coughing':
    case 'symptom':
    case 'illness':
    case 'scratch':
      return 'symptom';
    default:
      return 'playing';
  }
}

/**
 * Combines date string and UTC time string into ISO 8601 string
 */
export function parseDateTimeToUtcIso(logDate: string, logTime: string): string {
  const cleanDate = (logDate || '').trim();
  const cleanTime = (logTime || '').trim();

  if (!cleanDate && !cleanTime) {
    return new Date().toISOString();
  }

  if (cleanDate && cleanTime) {
    // e.g. "Fri Aug 16 2019" + "16:10:38" + " UTC"
    const combined = `${cleanDate} ${cleanTime} UTC`;
    const parsed = new Date(combined);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  }

  // Fallback: try parsing cleanDate directly
  if (cleanDate) {
    const parsed = new Date(cleanDate);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  }

  return new Date().toISOString();
}

/**
 * Parses report.csv or generic pet log CSV text into ReportCsvImportItem[]
 */
export function parseReportCsv(csvText: string): ReportCsvImportItem[] {
  const rows = parseRawCsv(csvText);
  if (rows.length < 2) {
    throw new Error('CSV file is empty or missing data rows.');
  }

  const headerRow = rows[0].map((h) => h.trim());
  const headerMap: Record<string, number> = {};
  headerRow.forEach((h, idx) => {
    headerMap[h.toLowerCase()] = idx;
  });

  const getVal = (row: string[], colName: string): string => {
    const colIdx = headerMap[colName.toLowerCase()];
    if (colIdx === undefined || colIdx >= row.length) return '';
    let val = (row[colIdx] || '').trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.slice(1, -1).trim();
    }
    return val;
  };

  const getNum = (row: string[], colName: string): number | undefined => {
    const val = getVal(row, colName);
    if (!val || val === '-' || val === '0' || val === '0.0') return undefined;
    const num = parseFloat(val);
    return isNaN(num) ? undefined : num;
  };

  const items: ReportCsvImportItem[] = [];

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    // Ignore trailing empty lines
    if (row.length <= 1 && (!row[0] || row[0].trim() === '')) {
      continue;
    }

    const rawPet = getVal(row, 'Pet');
    const pet = normalizePetName(rawPet);
    const eventType = getVal(row, 'Event_Type');
    const logDate = getVal(row, 'Log_Date');
    const logTime = getVal(row, 'Log_Time (UTC+00:00)') || getVal(row, 'Log_Time');
    const userName = getVal(row, 'User_Name');
    const comment = getVal(row, 'Comment');

    if (!eventType && !logDate && !logTime) {
      continue;
    }

    const item: ReportCsvImportItem = {
      pet,
      eventType: eventType || 'Unknown',
      logDate,
      logTime,
      userName: userName || 'reyn',
      comment: comment || undefined,
      startDate: getVal(row, 'Start_Date') || undefined,
      startTime: getVal(row, 'Start_Time (UTC+00:00)') || getVal(row, 'Start_Time') || undefined,
      endDate: getVal(row, 'End_Date') || undefined,
      endTime: getVal(row, 'End_Time (UTC+00:00)') || getVal(row, 'End_Time') || undefined,
      duration: getVal(row, 'Duration') || undefined,
      quantityNumber: getNum(row, 'Quantity_Number'),
      quantityUnit: getVal(row, 'Quantity_Unit') || undefined,
      temperatureC: getNum(row, 'Temperature_(C)'),
      temperatureF: getNum(row, 'Temperature_(F)'),
      weightKg: getNum(row, 'Weight_(Kg)'),
      weightLbs: getNum(row, 'Weight_(P)') || getNum(row, 'Weight_(Lbs)'),
      medicineType: getVal(row, 'Medicine_Type') || undefined,
      stoolQuality: getVal(row, 'Stool_Quality') || undefined,
      vaccineName: getVal(row, 'Vaccine_Name') || undefined,
      vaccineExpiration: getVal(row, 'Vaccine_Expiration') || undefined,
      bloodGlucoseNumber: getNum(row, 'Blood_Glucose_Number'),
      bloodGlucoseUnit: getVal(row, 'Blood_Glucose_Unit') || undefined,
    };

    items.push(item);
  }

  return items;
}

/**
 * Summarizes a parsed CSV import for preview
 */
export function summarizeReportCsvImport(items: ReportCsvImportItem[]): UniversalImportSummary {
  if (items.length === 0) {
    return {
      sourceType: 'csv',
      totalCount: 0,
      petName: 'Unknown',
      earliestDate: '',
      latestDate: '',
      countsByType: {},
      countsByUser: {},
      sampleItems: [],
    };
  }

  const countsByType: Record<string, number> = {};
  const countsByUser: Record<string, number> = {};
  const petFrequency: Record<string, number> = {};

  let earliest = '';
  let latest = '';

  const sampleItems: UniversalImportSummary['sampleItems'] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const rawType = item.eventType || 'Unknown';
    countsByType[rawType] = (countsByType[rawType] || 0) + 1;

    const normalizedUser = normalizeUserName(item.userName);
    countsByUser[normalizedUser] = (countsByUser[normalizedUser] || 0) + 1;

    const pet = normalizePetName(item.pet);
    petFrequency[pet] = (petFrequency[pet] || 0) + 1;

    const iso = parseDateTimeToUtcIso(item.logDate, item.logTime);
    if (!earliest || iso < earliest) earliest = iso;
    if (!latest || iso > latest) latest = iso;

    if (sampleItems.length < 5) {
      sampleItems.push({
        timestamp: iso,
        pet,
        eventType: item.eventType,
        user: normalizedUser,
        note: item.comment,
      });
    }
  }

  // Find dominant pet name
  let dominantPet = 'jjols';
  let maxCount = 0;
  for (const [name, count] of Object.entries(petFrequency)) {
    if (count > maxCount) {
      maxCount = count;
      dominantPet = name;
    }
  }

  return {
    sourceType: 'csv',
    totalCount: items.length,
    petName: dominantPet,
    earliestDate: earliest,
    latestDate: latest,
    countsByType,
    countsByUser,
    sampleItems,
  };
}

/**
 * Converts ReportCsvImportItem[] to PetEvent objects for DB insertion
 */
export function convertReportCsvToPetEvents(
  items: ReportCsvImportItem[],
  householdId: string,
  petId: string
): Omit<PetEvent, 'id' | 'createdAt'>[] {
  return items.map((item) => {
    const eventType = normalizeCsvEventType(item.eventType);
    const normalizedUser = normalizeUserName(item.userName);
    const normalizedPet = normalizePetName(item.pet);
    const timestamp = parseDateTimeToUtcIso(item.logDate, item.logTime);

    const metadata: Record<string, any> = {
      originalEvent: item.eventType,
      originalUserName: item.userName,
      originalPetName: item.pet,
      petName: normalizedPet,
      source: 'csv_import',
      importedAt: new Date().toISOString(),
    };

    // Subcategory mappings
    const rawLower = (item.eventType || '').trim().toLowerCase();
    if (rawLower === 'nap' || rawLower === 'sleep') {
      metadata.subcategory = 'nap';
    } else if (rawLower === 'training') {
      metadata.subcategory = 'training';
    } else if (rawLower === 'bath') {
      metadata.subcategory = 'bath';
    } else if (rawLower === 'teeth brushing') {
      metadata.subcategory = 'teeth_brushing';
    } else if (rawLower === 'treat') {
      metadata.subcategory = 'treat';
    } else if (rawLower === 'hospital') {
      metadata.visitReason = 'Hospital';
    } else if (rawLower === 'accident') {
      metadata.isAccident = true;
    } else if (rawLower === 'eat grass') {
      metadata.symptom = 'Eat grass';
    } else if (rawLower === 'temperature') {
      metadata.symptom = 'Temperature';
    } else if (rawLower === 'crying') {
      metadata.symptom = 'Crying';
    } else if (rawLower === 'coughing') {
      metadata.symptom = 'Coughing';
    } else if (rawLower === 'playpen') {
      metadata.locationName = 'Playpen';
    } else if (rawLower === 'daycare') {
      metadata.locationName = 'Daycare';
    }

    if (item.weightKg !== undefined) metadata.weightKg = item.weightKg;
    if (item.weightLbs !== undefined) metadata.weightLbs = item.weightLbs;
    if (item.temperatureC !== undefined) metadata.temperatureC = item.temperatureC;
    if (item.temperatureF !== undefined) metadata.temperatureF = item.temperatureF;
    if (item.medicineType) metadata.medication = item.medicineType;
    if (item.stoolQuality) metadata.stoolQuality = item.stoolQuality;
    if (item.vaccineName) metadata.vaccineName = item.vaccineName;
    if (item.vaccineExpiration) metadata.vaccineExpiration = item.vaccineExpiration;
    if (item.bloodGlucoseNumber !== undefined) metadata.bloodGlucoseNumber = item.bloodGlucoseNumber;
    if (item.bloodGlucoseUnit) metadata.bloodGlucoseUnit = item.bloodGlucoseUnit;
    if (item.duration && item.duration !== '0') metadata.duration = item.duration;
    if (item.quantityNumber !== undefined) metadata.quantityNumber = item.quantityNumber;
    if (item.quantityUnit) metadata.quantityUnit = item.quantityUnit;

    return {
      householdId,
      petId,
      eventType,
      loggedByName: normalizedUser,
      timestamp,
      notes: item.comment || '',
      metadata,
    };
  });
}
