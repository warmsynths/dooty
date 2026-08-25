import { EventType } from '../types/index.js';
export interface EventMeta {
    type: EventType;
    labelEn: string;
    labelKo: string;
    emoji: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    category: 'potty' | 'nutrition' | 'activity' | 'health' | 'care';
}
export declare const EVENT_METADATA: Record<EventType, EventMeta>;
export declare const ALL_EVENT_TYPES: EventType[];
export declare const DOOTY_THEME_COLORS: {
    yellow: string;
    coral: string;
    blue: string;
    green: string;
    cream: string;
    creamLight: string;
    ink: string;
    muted: string;
    white: string;
};
export interface MoodOption {
    id: string;
    name: string;
    nameKo: string;
}
export declare const MOOD_OPTIONS: MoodOption[];
export declare const MOOD_MAP_KO: Record<string, string>;
export declare const MOOD_MAP_EN: Record<string, string>;
//# sourceMappingURL=index.d.ts.map