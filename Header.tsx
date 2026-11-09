/**
 * Top Navigation Header adhering strictly to the Top Bar Contract:
 * Zone 1: Brand wordmark / Official Kanji Michi logo
 * Zone 2: 4-5 concise single-line nav links
 * Zone 3: 1 primary action (Rutinitas Harian / Quick Study)
 * Mobile responsive layout to prevent button squeezing or wrapping.
 */

import React from 'react';
import { PageId } from '../../types';
import { Flame, Sparkles, Menu } from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  streakDays: number;
  onOpenDailyRoutine: () => void;
  onToggleMobileSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  streakDays,
  onOpenDailyRoutine,
  onToggleMobileSidebar,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Single Brand element with Kanji Michi official logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-1.5 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100"
            aria-label="Buka menu navigasi"
          >
            <Menu size={20} />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-left group shrink-0"
          >
            <img
              src={logoImg}
              alt="Kanji Michi Logo"
              className="h-7 sm:h-10 w-auto max-w-[110px] sm:max-w-none object-contain transition-transform group-hover:scale-105"
            />
          </button>
        </div>

        {/* Zone 2: 4–5 single-line clean text links with subtle hover states */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            type="button"
            onClick={() => onNavigate('dashboard')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              currentPage === 'dashboard'
                ? 'text-[#C8102E] font-semibold'
                : 'hover:text-[#0F1D38]'
            }`}
          >
            Dashboard
          </button>
          <button
            type="button"
            onClick={() => onNavigate('kanji')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              currentPage === 'kanji'
                ? 'text-[#C8102E] font-semibold'
                : 'hover:text-[#0F1D38]'
            }`}
          >
            Kanji (N5–N3)
          </button>
          <button
            type="button"
            onClick={() => onNavigate('vocabulary')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              currentPage === 'vocabulary'
                ? 'text-[#C8102E] font-semibold'
                : 'hover:text-[#0F1D38]'
            }`}
          >
            Kosakata
          </button>
          <button
            type="button"
            onClick={() => onNavigate('grammar')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              currentPage === 'grammar'
                ? 'text-[#C8102E] font-semibold'
                : 'hover:text-[#0F1D38]'
            }`}
          >
            Tata Bahasa
          </button>
          <button
            type="button"
            onClick={() => onNavigate('jlpt')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              currentPage === 'jlpt'
                ? 'text-[#C8102E] font-semibold'
                : 'hover:text-[#0F1D38]'
            }`}
          >
            Simulasi JLPT
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Streak indicator badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-amber-700 bg-amber-50 rounded-full border border-amber-200/80">
            <Flame size={14} className="text-amber-500 fill-amber-500" />
            <span className="font-mono tabular-nums">{streakDays} Hari Streak</span>
          </div>

          <button
            type="button"
            onClick={onOpenDailyRoutine}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white bg-[#C8102E] hover:bg-[#A00C24] active:scale-95 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">Mulai Rutinitas Harian</span>
            <span className="sm:hidden">Rutinitas</span>
          </button>
        </div>
      </div>
    </header>
  );
};
