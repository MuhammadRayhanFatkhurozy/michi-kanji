/**
 * Storage & Persistence Service for Kanji Michi
 * Handles offline localStorage persistence, daily streaks, SRS flashcards,
 * and optional Supabase backend credentials configuration.
 */

import { UserProgress, FlashcardItem } from '../types';

const STORAGE_KEY_PROGRESS = 'kanjimichi_user_progress_v1';
const STORAGE_KEY_FLASHCARDS = 'kanjimichi_flashcards_v1';
const STORAGE_KEY_SETTINGS = 'kanjimichi_settings_v1';

export interface AppSettings {
  showRomaji: boolean;
  showFurigana: boolean;
  defaultAudioSpeed: number; // 0.5, 0.75, 1.0
  preferredVoiceIndex: number;
  userName: string;
  userGoal: string; // e.g. "Kerja di Jepang / Kaigo", "Kuliah", "JLPT N3"
  supabaseUrl?: string;
  supabaseAnonKey?: string;
}

const DEFAULT_SETTINGS: AppSettings = {
  showRomaji: true,
  showFurigana: true,
  defaultAudioSpeed: 1.0,
  preferredVoiceIndex: 0,
  userName: 'Pembelajar Bahasa Jepang',
  userGoal: 'Persiapan Kerja & JLPT N3 di Jepang',
};

function getTodayString(): string {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

const DEFAULT_PROGRESS: UserProgress = {
  userLevel: 'N5',
  streakDays: 4,
  lastActiveDate: getTodayString(),
  totalStudyMinutes: 145,
  completedLessons: ['minna-1', 'irodori-starter-1'],
  masteredVocab: ['v-watashi', 'v-sensei', 'v-ohayou', 'v-arigatou'],
  masteredKanji: ['k-n5-1', 'k-n5-2'],
  completedGrammar: ['g-wa-desu', 'g-ka-question'],
  bookmarkedVocab: ['v-kaigo-1', 'v-shigoto'],
  bookmarkedKanji: ['k-n5-3'],
  bookmarkedGrammar: ['g-mo-particle'],
  dailyGoal: {
    vocabTarget: 10,
    grammarTarget: 1,
    studyMinutesTarget: 30,
    quizTarget: 5,
  },
  dailyTodayStats: {
    date: getTodayString(),
    vocabLearned: 6,
    grammarLearned: 1,
    minutesSpent: 22,
    quizzesCompleted: 2,
    shadowingDone: true,
  },
  jlptTestHistory: [
    {
      id: 'test-1',
      date: '2026-11-06',
      level: 'N5',
      score: 18,
      total: 20,
      percentage: 90,
      categoryScores: {
        vocabulary: { correct: 5, total: 5 },
        kanji: { correct: 4, total: 5 },
        grammar: { correct: 5, total: 5 },
        reading: { correct: 4, total: 5 },
      },
    },
  ],
  dailyRoutineLog: [
    {
      date: '2026-11-07',
      step1VocabNew: true,
      step2VocabReview: true,
      step3Grammar: true,
      step4Kanji: true,
      step5Listening: true,
      step6Shadowing: true,
      step7QuizScore: 5,
      completedAt: '2026-11-07T14:30:00Z',
    },
  ],
};

const DEFAULT_FLASHCARDS: FlashcardItem[] = [
  {
    id: 'fc-1',
    type: 'vocab',
    frontJapanese: '私 (わたし)',
    frontSub: 'watashi',
    backIndonesian: 'Saya / Aku',
    exampleSentence: '私は学生です。 (Watashi wa gakusei desu)',
    level: 'N5',
    deckName: 'Dasar Minna 1',
    intervalDays: 3,
    easeFactor: 2.5,
    repetitions: 2,
    nextReviewDate: getTodayString(),
    status: 'learning',
  },
  {
    id: 'fc-2',
    type: 'vocab',
    frontJapanese: '先生 (せんせい)',
    frontSub: 'sensei',
    backIndonesian: 'Guru / Dosen / Dokter',
    exampleSentence: '田中さんは先生です。 (Tanaka-san wa sensei desu)',
    level: 'N5',
    deckName: 'Dasar Minna 1',
    intervalDays: 7,
    easeFactor: 2.6,
    repetitions: 4,
    nextReviewDate: getTodayString(),
    status: 'mastered',
  },
  {
    id: 'fc-3',
    type: 'kanji',
    frontJapanese: '日',
    frontSub: 'Onyomi: ニチ, ジツ | Kunyomi: ひ, -び, -か',
    backIndonesian: 'Matahari / Hari (JLPT N5)',
    exampleSentence: '日曜日 (にちようび) - Hari Minggu',
    level: 'N5',
    deckName: 'Kanji N5 Inti',
    intervalDays: 1,
    easeFactor: 2.2,
    repetitions: 1,
    nextReviewDate: getTodayString(),
    status: 'difficult',
  },
  {
    id: 'fc-4',
    type: 'vocab',
    frontJapanese: '介護 (かいご)',
    frontSub: 'kaigo',
    backIndonesian: 'Perawatan lansia / Caregiver (Tokutei Ginou)',
    exampleSentence: '日本で介護の仕事をします。 (Nihon de kaigo no shigoto o shimasu)',
    level: 'N4',
    deckName: 'Kerja & Kaigo',
    intervalDays: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReviewDate: getTodayString(),
    status: 'new',
  },
  {
    id: 'fc-5',
    type: 'vocab',
    frontJapanese: 'すみません',
    frontSub: 'sumimasen',
    backIndonesian: 'Permisi / Maaf / Terima kasih (Irodori)',
    exampleSentence: 'すみません、駅はどこですか。 (Sumimasen, eki wa doko desu ka)',
    level: 'N5',
    deckName: 'Irodori Percakapan',
    intervalDays: 4,
    easeFactor: 2.5,
    repetitions: 3,
    nextReviewDate: getTodayString(),
    status: 'mastered',
  },
];

export const storageService = {
  getProgress(): UserProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (!data) return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
      const parsed = JSON.parse(data) as UserProgress;
      // Check if today's date is fresh
      const today = getTodayString();
      if (parsed.dailyTodayStats?.date !== today) {
        parsed.dailyTodayStats = {
          date: today,
          vocabLearned: 0,
          grammarLearned: 0,
          minutesSpent: 0,
          quizzesCompleted: 0,
          shadowingDone: false,
        };
      }
      return parsed;
    } catch {
      return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
    }
  },

  saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage', e);
    }
  },

  updateStudyTime(minutesToAdd: number): void {
    const progress = this.getProgress();
    progress.totalStudyMinutes += minutesToAdd;
    progress.dailyTodayStats.minutesSpent += minutesToAdd;
    this.saveProgress(progress);
  },

  toggleBookmark(type: 'vocab' | 'kanji' | 'grammar', id: string): boolean {
    const progress = this.getProgress();
    let isBookmarked = false;
    if (type === 'vocab') {
      if (progress.bookmarkedVocab.includes(id)) {
        progress.bookmarkedVocab = progress.bookmarkedVocab.filter(x => x !== id);
      } else {
        progress.bookmarkedVocab.push(id);
        isBookmarked = true;
      }
    } else if (type === 'kanji') {
      if (progress.bookmarkedKanji.includes(id)) {
        progress.bookmarkedKanji = progress.bookmarkedKanji.filter(x => x !== id);
      } else {
        progress.bookmarkedKanji.push(id);
        isBookmarked = true;
      }
    } else if (type === 'grammar') {
      if (progress.bookmarkedGrammar.includes(id)) {
        progress.bookmarkedGrammar = progress.bookmarkedGrammar.filter(x => x !== id);
      } else {
        progress.bookmarkedGrammar.push(id);
        isBookmarked = true;
      }
    }
    this.saveProgress(progress);
    return isBookmarked;
  },

  markMastered(type: 'vocab' | 'kanji' | 'grammar', id: string): void {
    const progress = this.getProgress();
    if (type === 'vocab' && !progress.masteredVocab.includes(id)) {
      progress.masteredVocab.push(id);
      progress.dailyTodayStats.vocabLearned += 1;
    } else if (type === 'kanji' && !progress.masteredKanji.includes(id)) {
      progress.masteredKanji.push(id);
    } else if (type === 'grammar' && !progress.completedGrammar.includes(id)) {
      progress.completedGrammar.push(id);
      progress.dailyTodayStats.grammarLearned += 1;
    }
    this.saveProgress(progress);
  },

  getFlashcards(): FlashcardItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_FLASHCARDS);
      if (!data) return DEFAULT_FLASHCARDS;
      return JSON.parse(data);
    } catch {
      return DEFAULT_FLASHCARDS;
    }
  },

  saveFlashcards(cards: FlashcardItem[]): void {
    try {
      localStorage.setItem(STORAGE_KEY_FLASHCARDS, JSON.stringify(cards));
    } catch (e) {
      console.warn('Failed to save flashcards', e);
    }
  },

  addFlashcard(card: Omit<FlashcardItem, 'id' | 'intervalDays' | 'easeFactor' | 'repetitions' | 'nextReviewDate' | 'status'>): void {
    const cards = this.getFlashcards();
    const newCard: FlashcardItem = {
      ...card,
      id: `fc-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      intervalDays: 1,
      easeFactor: 2.5,
      repetitions: 0,
      nextReviewDate: getTodayString(),
      status: 'new',
    };
    cards.unshift(newCard);
    this.saveFlashcards(cards);
  },

  updateCardSRS(cardId: string, rating: 'difficult' | 'learning' | 'mastered'): void {
    const cards = this.getFlashcards();
    const idx = cards.findIndex(c => c.id === cardId);
    if (idx === -1) return;

    const card = cards[idx];
    const today = new Date();

    if (rating === 'difficult') {
      card.repetitions = 0;
      card.intervalDays = 1;
      card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
      card.status = 'difficult';
    } else if (rating === 'learning') {
      card.repetitions += 1;
      card.intervalDays = Math.max(1, Math.round(card.intervalDays * 1.5));
      card.status = 'learning';
    } else {
      // mastered
      card.repetitions += 1;
      card.intervalDays = Math.round(card.intervalDays * card.easeFactor);
      card.easeFactor += 0.15;
      card.status = 'mastered';
    }

    const nextDate = new Date();
    nextDate.setDate(today.getDate() + card.intervalDays);
    card.nextReviewDate = nextDate.toISOString().split('T')[0];
    card.lastReviewedAt = new Date().toISOString();

    cards[idx] = card;
    this.saveFlashcards(cards);
  },

  getSettings(): AppSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (!data) return DEFAULT_SETTINGS;
      return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save settings', e);
    }
  },

  resetAllProgress(): void {
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
    localStorage.removeItem(STORAGE_KEY_FLASHCARDS);
  },
};
