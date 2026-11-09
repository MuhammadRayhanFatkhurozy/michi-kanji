/**
 * Kanji Michi (漢字道) — Japanese Learning Platform
 * Learn Japanese. Step by Step.
 * Designed for Indonesian speakers mastering Japanese through JLPT N3 and workplace readiness.
 */

import React, { useState, useEffect } from 'react';
import { PageId, UserProgress } from './types';
import { storageService, AppSettings } from './services/storageService';
import { KANJI_DATA } from './data/kanjiData';
import { VOCABULARY_DATA } from './data/vocabularyData';
import { GRAMMAR_DATA } from './data/grammarData';
import { LESSONS_DATA } from './data/lessonsData';

import { Sidebar } from './components/common/Sidebar';
import { DailyRoutineModal } from './components/common/DailyRoutineModal';
import { DraggableFloatingAiButton } from './components/common/DraggableFloatingAiButton';

import { DashboardPage } from './components/pages/DashboardPage';
import { HiraganaPage } from './components/pages/HiraganaPage';
import { KatakanaPage } from './components/pages/KatakanaPage';
import { KanjiPage } from './components/pages/KanjiPage';
import { VocabularyPage } from './components/pages/VocabularyPage';
import { GrammarPage } from './components/pages/GrammarPage';
import { LessonsPage } from './components/pages/LessonsPage';
import { ListeningPage } from './components/pages/ListeningPage';
import { SpeakingPage } from './components/pages/SpeakingPage';
import { JlptPracticePage } from './components/pages/JlptPracticePage';
import { FlashcardsPage } from './components/pages/FlashcardsPage';
import { ProgressPage } from './components/pages/ProgressPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { AboutPage } from './components/pages/AboutPage';

import {
  Home,
  Info,
  Settings,
  Sun,
  Moon,
  Menu,
  X,
  Flame,
  Sparkles,
  ChevronDown,
  BookA,
  BookOpen,
  Library,
  Award,
} from 'lucide-react';
import logoImg from './assets/logo.png';

/**
 * Responsive Navigation Bar Component with Home, About, Settings links,
 * quick curriculum dropdown, and an interactive Dark Mode Switch.
 */
interface NavigationBarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  streakDays: number;
  onOpenDailyRoutine: () => void;
  onToggleMobileSidebar: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  currentPage,
  onNavigate,
  isDarkMode,
  onToggleDarkMode,
  streakDays,
  onOpenDailyRoutine,
  onToggleMobileSidebar,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModulesDropdownOpen, setIsModulesDropdownOpen] = useState(false);

  // Close menus on navigation
  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsModulesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#131B2E]/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Section */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-1.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
            aria-label="Buka menu modul"
            title="Menu Modul"
          >
            <Menu size={20} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('dashboard')}
            className="flex items-center gap-2.5 text-left group shrink-0"
          >
            <img
              src={logoImg}
              alt="Kanji Michi Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="text-sm font-bold tracking-tight text-[#0F1D38] dark:text-white block leading-tight">
                Kanji Michi <span className="font-jp text-xs text-[#C8102E] font-semibold">漢字道</span>
              </span>
              <span className="text-[10px] text-stone-400 dark:text-stone-400 block leading-tight font-normal">
                Belajar Bahasa Jepang Bertahap
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links: Home, About, Settings + Quick Modules Dropdown */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
          {/* Home Link */}
          <button
            type="button"
            onClick={() => handleNavClick('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              currentPage === 'dashboard'
                ? 'bg-[#FDF2F4] dark:bg-[#C8102E]/15 text-[#C8102E] dark:text-[#FB7185] font-semibold'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Home size={15} />
            <span>Home</span>
          </button>

          {/* About Link */}
          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              currentPage === 'about'
                ? 'bg-[#FDF2F4] dark:bg-[#C8102E]/15 text-[#C8102E] dark:text-[#FB7185] font-semibold'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Info size={15} />
            <span>About</span>
          </button>

          {/* Settings Link */}
          <button
            type="button"
            onClick={() => handleNavClick('settings')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              currentPage === 'settings'
                ? 'bg-[#FDF2F4] dark:bg-[#C8102E]/15 text-[#C8102E] dark:text-[#FB7185] font-semibold'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Settings size={15} />
            <span>Settings</span>
          </button>

          {/* Quick Modules Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsModulesDropdownOpen(!isModulesDropdownOpen)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-all text-sm font-medium"
            >
              <span>Modul Belajar</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isModulesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isModulesDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white dark:bg-[#18233C] rounded-2xl shadow-xl border border-stone-200 dark:border-stone-700 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50"
                onClick={() => setIsModulesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick('kanji')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700/60 rounded-xl text-left"
                >
                  <BookA size={14} className="text-[#C8102E]" />
                  <span>Kanji (N5–N3)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('vocabulary')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700/60 rounded-xl text-left"
                >
                  <BookOpen size={14} className="text-emerald-600" />
                  <span>Kosakata (1.020+ Kata)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('grammar')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700/60 rounded-xl text-left"
                >
                  <Library size={14} className="text-blue-600" />
                  <span>Tata Bahasa Minna</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('jlpt')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700/60 rounded-xl text-left"
                >
                  <Award size={14} className="text-amber-500" />
                  <span>Simulasi Ujian JLPT</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Right Section: Dark Mode Switch + Streak + Routine CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Dark Mode Switch Button */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="group flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 transition-all duration-200 text-xs font-medium active:scale-95 shadow-2xs hover:shadow-xs"
            title={isDarkMode ? 'Beralih ke Mode Terang (Light Mode)' : 'Beralih ke Mode Gelap (Dark Mode)'}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <>
                <Sun size={15} className="text-amber-400 fill-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                <span className="hidden sm:inline font-semibold">Light</span>
              </>
            ) : (
              <>
                <Moon size={15} className="text-slate-700 fill-slate-700 dark:text-slate-200 group-hover:-rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline font-semibold">Dark</span>
              </>
            )}
          </button>

          {/* Streak indicator badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 rounded-full border border-amber-200/80 dark:border-amber-800/80 hover:scale-105 transition-transform duration-200 cursor-default">
            <Flame size={14} className="text-amber-500 fill-amber-500 animate-pulse" />
            <span className="font-mono tabular-nums">{streakDays} Hari</span>
          </div>

          {/* Primary Action Button with subtle pulse and shine */}
          <button
            type="button"
            onClick={onOpenDailyRoutine}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white bg-[#C8102E] hover:bg-[#A00C24] active:scale-95 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 animate-pulse-subtle"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span className="hidden lg:inline">Mulai Rutinitas</span>
            <span className="lg:hidden">Rutinitas</span>
          </button>

          {/* Mobile Navigation Dropdown Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Buka menu navigasi"
          >
            {isMobileMenuOpen ? <X size={20} className="animate-scale-up" /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-[#131B2E] px-4 py-3 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2">
            Navigasi Utama
          </div>
          <button
            type="button"
            onClick={() => handleNavClick('dashboard')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
              currentPage === 'dashboard'
                ? 'bg-[#C8102E] text-white'
                : 'text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Home size={15} />
            <span>Home (Dashboard)</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
              currentPage === 'about'
                ? 'bg-[#C8102E] text-white'
                : 'text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Info size={15} />
            <span>About (Tentang Kanji Michi)</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('settings')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
              currentPage === 'settings'
                ? 'bg-[#C8102E] text-white'
                : 'text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Settings size={15} />
            <span>Settings (Pengaturan)</span>
          </button>

          {/* Dark Mode toggle inside mobile menu */}
          <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between px-2 text-xs">
            <span className="text-stone-600 dark:text-stone-300 font-medium">Mode Tampilan:</span>
            <button
              type="button"
              onClick={onToggleDarkMode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-semibold"
            >
              {isDarkMode ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-slate-600" />}
              <span>{isDarkMode ? 'Mode Terang' : 'Mode Gelap'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(() => storageService.getProgress());
  const [settings, setSettings] = useState<AppSettings>(() => storageService.getSettings());
  const [isDailyRoutineOpen, setIsDailyRoutineOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Dark Mode state with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kanjimichi_dark_mode');
      if (saved !== null) {
        return saved === 'true';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync dark class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('kanjimichi_dark_mode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleResetProgress = () => {
    storageService.resetAllProgress();
    setProgress(storageService.getProgress());
    setCurrentPage('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#090D16] text-[#1E293B] dark:text-[#F8FAFC] flex flex-col font-sans transition-colors duration-200">
      {/* Responsive Navigation Bar with Home, About, Settings and Dark Mode Switch */}
      <NavigationBar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        streakDays={progress.streakDays}
        onOpenDailyRoutine={() => setIsDailyRoutineOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      {/* Main Layout: Persistent Sidebar + Content Viewport */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Sidebar */}
        <Sidebar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Viewport Content Area with smooth entrance animation */}
        <main className="flex-1 min-w-0 p-3 sm:p-6 lg:p-8 overflow-x-hidden animate-fade-in" key={currentPage}>
          {currentPage === 'dashboard' && (
            <DashboardPage
              progress={progress}
              onNavigate={setCurrentPage}
              onOpenDailyRoutine={() => setIsDailyRoutineOpen(true)}
              vocabList={VOCABULARY_DATA}
              kanjiList={KANJI_DATA}
              grammarList={GRAMMAR_DATA}
              lessonsList={LESSONS_DATA}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigate={setCurrentPage}
              onOpenDailyRoutine={() => setIsDailyRoutineOpen(true)}
            />
          )}

          {currentPage === 'hiragana' && (
            <HiraganaPage onNavigateToKatakana={() => setCurrentPage('katakana')} />
          )}

          {currentPage === 'katakana' && (
            <KatakanaPage onNavigateToHiragana={() => setCurrentPage('hiragana')} />
          )}

          {currentPage === 'kanji' && (
            <KanjiPage
              kanjiList={KANJI_DATA}
              progress={progress}
              onProgressUpdated={setProgress}
              showRomajiDefault={settings.showRomaji}
            />
          )}

          {currentPage === 'vocabulary' && (
            <VocabularyPage
              vocabList={VOCABULARY_DATA}
              progress={progress}
              onProgressUpdated={setProgress}
              showRomajiDefault={settings.showRomaji}
            />
          )}

          {currentPage === 'grammar' && (
            <GrammarPage
              grammarList={GRAMMAR_DATA}
              progress={progress}
              onProgressUpdated={setProgress}
              showRomajiDefault={settings.showRomaji}
            />
          )}

          {currentPage === 'lessons' && (
            <LessonsPage
              lessonsList={LESSONS_DATA}
              progress={progress}
              onProgressUpdated={setProgress}
              showRomajiDefault={settings.showRomaji}
            />
          )}

          {currentPage === 'listening' && <ListeningPage />}

          {currentPage === 'speaking' && <SpeakingPage />}

          {currentPage === 'jlpt' && (
            <JlptPracticePage
              progress={progress}
              onProgressUpdated={setProgress}
            />
          )}

          {currentPage === 'flashcards' && <FlashcardsPage />}

          {currentPage === 'progress' && (
            <ProgressPage
              progress={progress}
              kanjiList={KANJI_DATA}
              vocabList={VOCABULARY_DATA}
              grammarList={GRAMMAR_DATA}
            />
          )}

          {currentPage === 'settings' && (
            <SettingsPage
              settings={settings}
              onSettingsUpdated={setSettings}
              onResetProgress={handleResetProgress}
            />
          )}
        </main>
      </div>

      {/* Daily Study Routine Modal */}
      <DailyRoutineModal
        isOpen={isDailyRoutineOpen}
        onClose={() => setIsDailyRoutineOpen(false)}
        progress={progress}
        onProgressUpdated={setProgress}
        vocabList={VOCABULARY_DATA}
        kanjiList={KANJI_DATA}
        grammarList={GRAMMAR_DATA}
      />

      {/* Draggable Floating AI Sensei Mascot & Chat Panel */}
      <DraggableFloatingAiButton />
    </div>
  );
}
