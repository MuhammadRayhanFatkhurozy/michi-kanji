/**
 * Core type definitions for Kanji Michi (漢字道)
 */

export type JLPTLevel = 'N5' | 'N4' | 'N3';

export type KanaType = 'hiragana' | 'katakana';
export type KanaCategory = 'gojuon' | 'dakuten' | 'handakuten' | 'youon' | 'sokuon';

export interface KanaCharacter {
  char: string;
  romaji: string;
  type: KanaType;
  category: KanaCategory;
  row?: string; // a, ka, sa, etc.
  strokeCount: number;
  strokeSteps?: string[]; // stroke guide description or hints
  exampleWord: string;
  exampleReading: string;
  exampleMeaningId: string; // Indonesian meaning
  audioText: string;
  mnemonic?: string;
  commonMistake?: string;
}

export interface KanjiItem {
  id: string;
  kanji: string;
  level: JLPTLevel;
  meaningId: string; // Indonesian meaning
  onyomi: string[];
  kunyomi: string[];
  primaryReading?: string; // Pure kana for primary audio pronunciation
  cleanOnyomi?: string; // Clean kana string for Onyomi audio
  cleanKunyomi?: string; // Clean kana string for Kunyomi audio
  strokeCount: number;
  radical: string;
  radicalName: string;
  strokeOrderGuide: string[]; // steps e.g. "Garis horizontal atas", "Garis vertikal tengah"
  examples: {
    word: string;
    reading: string;
    meaningId: string;
  }[];
  sentences: {
    japanese: string;
    furigana: string;
    romaji: string;
    indonesian: string;
  }[];
  relatedKanji?: string[];
}

export type VocabCategory =
  | 'jlpt-n5'
  | 'jlpt-n4'
  | 'jlpt-n3'
  | 'percakapan-harian'
  | 'makanan-restoran'
  | 'transportasi'
  | 'belanja'
  | 'dunia-kerja'
  | 'kesehatan'
  | 'budaya-jepang'
  | 'kaigo';

export interface VocabItem {
  id: string;
  kanji?: string;
  hiragana: string;
  romaji: string;
  meaningId: string; // Indonesian
  category: VocabCategory;
  level?: JLPTLevel;
  partOfSpeech: 'noun' | 'verb' | 'i-adjective' | 'na-adjective' | 'adverb' | 'expression' | 'particle';
  sentence: {
    japanese: string;
    furigana: string;
    romaji: string;
    indonesian: string;
  };
}

export interface GrammarPoint {
  id: string;
  title: string;
  pattern: string;
  level: JLPTLevel;
  minnaLesson?: number; // Lesson 1-25
  meaningId: string; // Indonesian
  explanationId: string; // Indonesian detailed explanation
  whenToUse: string; // Kapan digunakan
  structure: string[]; // Formula pola kalimat e.g. "KB1 は KB2 です"
  examples: {
    japanese: string;
    furigana: string;
    romaji: string;
    indonesian: string;
    type: 'positive' | 'negative' | 'question';
  }[];
  commonMistakes: string;
  exercises: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
}

export type CurriculumTrack = 'minna' | 'irodori';

export interface LessonDialogue {
  speaker: string;
  japanese: string;
  furigana: string;
  romaji: string;
  indonesian: string;
}

export interface LessonItem {
  id: string;
  track: CurriculumTrack;
  lessonNumber: number;
  level: string; // e.g. "N5 / Shokyu I" or "A1 Starter"
  title: string;
  titleJp: string;
  descriptionId: string;
  canDoObjective: string; // Capaian kemampuan (Can-Do)
  vocabIds: string[];
  grammarIds: string[];
  dialogue: LessonDialogue[];
  culturalNote?: string;
  quiz: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
}

export interface ListeningItem {
  id: string;
  title: string;
  scenario: string;
  level: JLPTLevel | 'A1' | 'A2';
  audioSpeedOptions: number[];
  audioAssetUrl?: string; // e.g. sample audio
  dialogue: LessonDialogue[];
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  shadowingTips: string;
}

export interface SpeakingItem {
  id: string;
  category: string;
  level: JLPTLevel | 'A1' | 'A2';
  sentence: string;
  furigana: string;
  romaji: string;
  meaningId: string;
  context: string;
  pronunciationNotes: string;
}

export interface JLPTQuestion {
  id: string;
  level: JLPTLevel;
  category: 'vocabulary' | 'kanji' | 'grammar' | 'reading' | 'listening';
  prompt: string;
  readingPassage?: string;
  listeningScript?: string;
  options: string[];
  correctIndex: number;
  explanationId: string; // Penjelasan dalam Bahasa Indonesia
}

export interface FlashcardItem {
  id: string;
  type: 'vocab' | 'kanji';
  frontJapanese: string;
  frontSub?: string; // reading or onyxomi/kunyomi
  backIndonesian: string;
  exampleSentence?: string;
  level?: string;
  deckName: string;
  intervalDays: number;
  easeFactor: number;
  repetitions: number;
  nextReviewDate: string; // ISO date string
  status: 'new' | 'learning' | 'mastered' | 'difficult';
  lastReviewedAt?: string;
}

export interface UserProgress {
  userLevel: JLPTLevel;
  streakDays: number;
  lastActiveDate: string;
  totalStudyMinutes: number;
  completedLessons: string[]; // lesson ids
  masteredVocab: string[]; // vocab ids
  masteredKanji: string[]; // kanji ids
  completedGrammar: string[]; // grammar ids
  bookmarkedVocab: string[];
  bookmarkedKanji: string[];
  bookmarkedGrammar: string[];
  dailyGoal: {
    vocabTarget: number;
    grammarTarget: number;
    studyMinutesTarget: number;
    quizTarget: number;
  };
  dailyTodayStats: {
    date: string;
    vocabLearned: number;
    grammarLearned: number;
    minutesSpent: number;
    quizzesCompleted: number;
    shadowingDone: boolean;
  };
  jlptTestHistory: {
    id: string;
    date: string;
    level: JLPTLevel;
    score: number;
    total: number;
    percentage: number;
    categoryScores: Record<string, { correct: number; total: number }>;
  }[];
  dailyRoutineLog: {
    date: string;
    step1VocabNew: boolean;
    step2VocabReview: boolean;
    step3Grammar: boolean;
    step4Kanji: boolean;
    step5Listening: boolean;
    step6Shadowing: boolean;
    step7QuizScore: number; // out of 5
    completedAt?: string;
  }[];
}

export type PageId =
  | 'dashboard'
  | 'hiragana'
  | 'katakana'
  | 'kanji'
  | 'vocabulary'
  | 'grammar'
  | 'lessons'
  | 'listening'
  | 'speaking'
  | 'jlpt'
  | 'flashcards'
  | 'progress'
  | 'settings'
  | 'about';
