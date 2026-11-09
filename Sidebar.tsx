/**
 * Main Sidebar Navigation
 * Hosts all 13 required navigation items with clean icons, active indicators,
 * and responsive mobile drawer behavior.
 */

import React from 'react';
import { PageId } from '../../types';
import {
  LayoutDashboard,
  Languages,
  FileCode2,
  BookA,
  BookOpen,
  Library,
  GraduationCap,
  Headphones,
  Mic,
  Award,
  Layers,
  BarChart3,
  Settings,
  X,
  ChevronRight,
  Info,
} from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface SidebarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: PageId;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  tag?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', sublabel: 'Ringkasan & Target', icon: LayoutDashboard },
  { id: 'hiragana', label: 'Hiragana', sublabel: 'Aksara Dasar (あ-ん)', icon: Languages },
  { id: 'katakana', label: 'Katakana', sublabel: 'Kata Serapan (ア-ン)', icon: FileCode2 },
  { id: 'kanji', label: 'Kanji (N5–N3)', sublabel: 'Aksara & Radikal', icon: BookA, tag: 'N3 Baru' },
  { id: 'vocabulary', label: 'Kosakata (Kotoba)', sublabel: 'Tema Kerja & Hidup', icon: BookOpen },
  { id: 'grammar', label: 'Tata Bahasa (Bunpou)', sublabel: 'Pola Minna & N5-N3', icon: Library },
  { id: 'lessons', label: 'Pelajaran (Kurikulum)', sublabel: 'Minna & Irodori Can-Do', icon: GraduationCap },
  { id: 'listening', label: 'Menyimak (Choukai)', sublabel: 'Audio & Shadowing', icon: Headphones },
  { id: 'speaking', label: 'Latihan Berbicara', sublabel: 'Rekam Suara & Koreksi', icon: Mic },
  { id: 'jlpt', label: 'Latihan JLPT', sublabel: 'Simulasi N5, N4, N3', icon: Award },
  { id: 'flashcards', label: 'Flashcards (SRS)', sublabel: 'Spaced Repetition', icon: Layers },
  { id: 'progress', label: 'Progres Belajar', sublabel: 'Statistik & Analisis', icon: BarChart3 },
  { id: 'settings', label: 'Pengaturan', sublabel: 'Furigana, Romaji & Audio', icon: Settings },
  { id: 'about', label: 'Tentang Aplikasi', sublabel: 'Kurikulum & Panduan', icon: Info },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onNavigate,
  isOpenMobile,
  onCloseMobile,
}) => {
  const content = (
    <div className="flex flex-col h-full bg-[#FAF8F5] dark:bg-[#090D16] border-r border-stone-200 dark:border-stone-800">
      {/* Mobile Header in drawer */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-[#131B2E]">
        <div className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Kanji Michi Logo"
            className="h-8 w-auto object-contain"
          />
        </div>
        <button
          type="button"
          onClick={onCloseMobile}
          className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg"
          aria-label="Tutup menu navigasi"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[11px] font-bold text-stone-400 uppercase tracking-wider">
          Menu Utama Kanji Michi
        </div>

        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onNavigate(item.id);
                onCloseMobile();
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-200 group active:scale-98 ${
                isActive
                  ? 'bg-white text-[#0F1D38] shadow-sm font-semibold border border-stone-200/90 translate-x-1'
                  : 'text-stone-600 hover:bg-stone-200/60 hover:text-stone-900 hover:translate-x-1'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`p-1.5 rounded-lg transition-transform duration-200 group-hover:scale-110 shrink-0 ${
                    isActive
                      ? 'bg-[#C8102E] text-white shadow-xs'
                      : 'bg-stone-200/80 text-stone-600 group-hover:bg-stone-300 group-hover:text-stone-900'
                  }`}
                >
                  <Icon size={16} />
                </div>
                <div className="truncate">
                  <div className="text-sm leading-tight flex items-center gap-2">
                    <span className="truncate">{item.label}</span>
                    {item.tag && (
                      <span className="text-[10px] px-1.5 py-0.2 bg-[#FDF2F4] text-[#C8102E] font-medium rounded border border-[#FCE7EB]">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-stone-400 font-normal leading-tight truncate">
                    {item.sublabel}
                  </div>
                </div>
              </div>

              {isActive && (
                <ChevronRight size={14} className="text-[#C8102E] shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Target Roadmap Badge */}
      <div className="p-3 border-t border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-[#131B2E]/90">
        <div className="p-3 rounded-xl bg-gradient-to-br from-stone-900 to-[#0F1D38] text-white text-xs">
          <div className="font-semibold flex items-center justify-between mb-1">
            <span>Roadmap Target</span>
            <span className="text-[10px] text-amber-300 font-mono">JLPT N3</span>
          </div>
          <p className="text-[11px] text-stone-300 leading-relaxed">
            Fondasi Minna no Nihongo & komunikasi praktis Irodori menuju Jepang.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 h-[calc(100vh-4rem)] sticky top-16">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden flex"
          onClick={onCloseMobile}
        >
          <div
            className="w-72 max-w-[85vw] h-full shadow-2xl animate-in slide-in-from-left duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};
