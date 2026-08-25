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

export const EVENT_METADATA: Record<EventType, EventMeta> = {
  poop: {
    type: 'poop',
    labelEn: 'Poop',
    labelKo: '응가',
    emoji: '💩',
    bgColor: '#FF5A3C',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'potty',
  },
  pee: {
    type: 'pee',
    labelEn: 'Pee',
    labelKo: '쉬야',
    emoji: '💧',
    bgColor: '#3E8BFF',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'potty',
  },
  walk: {
    type: 'walk',
    labelEn: 'Walk',
    labelKo: '산책',
    emoji: '🦮',
    bgColor: '#34D399',
    textColor: '#17140F',
    borderColor: '#17140F',
    category: 'activity',
  },
  food: {
    type: 'food',
    labelEn: 'Food',
    labelKo: '밥/사료',
    emoji: '🍖',
    bgColor: '#FFB800',
    textColor: '#17140F',
    borderColor: '#17140F',
    category: 'nutrition',
  },
  water: {
    type: 'water',
    labelEn: 'Water',
    labelKo: '물',
    emoji: '🥣',
    bgColor: '#60A5FA',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'nutrition',
  },
  medicine: {
    type: 'medicine',
    labelEn: 'Medicine',
    labelKo: '약/영양제',
    emoji: '💊',
    bgColor: '#A78BFA',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'health',
  },
  grooming: {
    type: 'grooming',
    labelEn: 'Grooming',
    labelKo: '목욕/미용',
    emoji: '🛁',
    bgColor: '#F472B6',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'care',
  },
  playing: {
    type: 'playing',
    labelEn: 'Playing',
    labelKo: '놀이',
    emoji: '🎾',
    bgColor: '#FBBF24',
    textColor: '#17140F',
    borderColor: '#17140F',
    category: 'activity',
  },
  vomit: {
    type: 'vomit',
    labelEn: 'Vomit',
    labelKo: '구토/토',
    emoji: '🤢',
    bgColor: '#FF9A3C',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'health',
  },
  weight: {
    type: 'weight',
    labelEn: 'Weight',
    labelKo: '몸무게',
    emoji: '⚖️',
    bgColor: '#2B5BE8',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'health',
  },
  vet: {
    type: 'vet',
    labelEn: 'Vet visit',
    labelKo: '병원 진료',
    emoji: '🏥',
    bgColor: '#FFD15C',
    textColor: '#17140F',
    borderColor: '#17140F',
    category: 'care',
  },
  symptom: {
    type: 'symptom',
    labelEn: 'Symptom',
    labelKo: '증상 메모',
    emoji: '⚠️',
    bgColor: '#FF5A3C',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'health',
  },
  nap: {
    type: 'nap',
    labelEn: 'Nap / Sleep',
    labelKo: '수면/낮잠',
    emoji: '💤',
    bgColor: '#818CF8',
    textColor: '#FFFFFF',
    borderColor: '#17140F',
    category: 'care',
  },
  training: {
    type: 'training',
    labelEn: 'Training',
    labelKo: '훈련/교육',
    emoji: '🎯',
    bgColor: '#F59E0B',
    textColor: '#17140F',
    borderColor: '#17140F',
    category: 'activity',
  },
};

export const ALL_EVENT_TYPES: EventType[] = [
  'poop',
  'pee',
  'walk',
  'food',
  'water',
  'medicine',
  'grooming',
  'playing',
  'vomit',
  'weight',
  'vet',
  'symptom',
  'nap',
  'training',
];

export const DOOTY_THEME_COLORS = {
  yellow: '#FFCE2E',
  coral: '#FF5A3C',
  blue: '#3E8BFF',
  green: '#34D399',
  cream: '#F4EFE2',
  creamLight: '#FFFBF2',
  ink: '#17140F',
  muted: '#6A6152',
  white: '#FFFFFF',
};

export interface MoodOption {
  id: string;
  name: string;
  nameKo: string;
}

export const MOOD_OPTIONS: MoodOption[] = [
  { id: 'Zoomy', name: 'Zoomy', nameKo: '우다다' },
  { id: 'Regal', name: 'Regal', nameKo: '도도함' },
  { id: 'Guilty', name: 'Guilty', nameKo: '눈치봄' },
  { id: 'Unbothered', name: 'Unbothered', nameKo: '무덤덤' },
  { id: 'Feral', name: 'Feral', nameKo: '천방지축' },
  { id: 'Happy', name: 'Happy', nameKo: '행복함' },
  { id: 'Calm', name: 'Calm', nameKo: '차분함' },
];

export const MOOD_MAP_KO: Record<string, string> = {
  Zoomy: '우다다',
  Regal: '도도함',
  Guilty: '눈치봄',
  Unbothered: '무덤덤',
  Feral: '천방지축',
  Happy: '행복함',
  Calm: '차분함',
};

export const MOOD_MAP_EN: Record<string, string> = {
  우다다: 'Zoomy',
  도도함: 'Regal',
  눈치봄: 'Guilty',
  무덤덤: 'Unbothered',
  천방지축: 'Feral',
  행복함: 'Happy',
  차분함: 'Calm',
};
