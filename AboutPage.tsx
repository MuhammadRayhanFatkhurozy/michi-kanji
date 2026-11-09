/**
 * About Page Component
 * Overview of Kanji Michi (漢字道) — Japanese Learning Platform
 * Designed for Indonesian learners mastering Japanese from basics through JLPT N3 and living/working in Japan.
 */

import React from 'react';
import { PageId } from '../../types';
import {
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Heart,
  Globe2,
  Compass,
  ArrowRight,
  ShieldCheck,
  Languages,
  Headphones,
} from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDailyRoutine: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDailyRoutine }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0F1D38] via-[#142344] to-[#0A1224] text-white p-6 sm:p-10 shadow-sm border border-stone-200/20 animate-fade-in-up">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#C8102E] text-white uppercase tracking-wider animate-pulse-subtle">
              Tentang Kanji Michi
            </span>
            <span className="text-xs text-stone-300 font-mono">v1.2.0 · Platform Terintegrasi</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Kanji Michi Logo" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300" />
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Belajar Bahasa Jepang Bertahap Menuju Jepang.
          </h1>

          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
            <strong>Kanji Michi (漢字道)</strong> adalah platform pembelajaran bahasa Jepang terstruktur
            yang didesain khusus untuk pembelajar Indonesia: mulai dari aksara dasar (Hiragana & Katakana),
            tata bahasa kurikulum Minna no Nihongo Shokyu 1–25, komunikasi praktis Irodori Can-Do, hingga
            kesiapan kerja di Jepang (Tokutei Ginou / Kaigo) dan simulasi ujian resmi JLPT N5, N4, dan N3.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#C8102E] hover:bg-[#A00C24] active:scale-95 btn-interactive rounded-xl shadow-md transition-all"
            >
              <Compass size={16} />
              <span>Jelajahi Dashboard</span>
            </button>
            <button
              type="button"
              onClick={onOpenDailyRoutine}
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-200 bg-white/10 hover:bg-white/20 active:scale-95 btn-interactive rounded-xl transition-all"
            >
              <Sparkles size={16} />
              <span>Mulai Rutinitas Harian</span>
            </button>
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none hidden md:flex items-center justify-end pr-8">
          <img src={logoImg} alt="Watermark" className="h-56 w-auto object-contain animate-float-gentle" />
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white dark:bg-[#131B2E] rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs space-y-2.5 card-hover-effect animate-fade-in-up">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-transform hover:scale-110">
            <GraduationCap size={20} />
          </div>
          <h3 className="text-sm font-bold text-stone-900 dark:text-white">Kurikulum Ganda Terpadu</h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Menggabungkan ketelitian pola kalimat <em>Minna no Nihongo</em> dengan keluwesan komunikasi situasional <em>Irodori</em>.
          </p>
        </div>

        <div className="p-5 bg-white dark:bg-[#131B2E] rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs space-y-2.5 card-hover-effect animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center transition-transform hover:scale-110">
            <Languages size={20} />
          </div>
          <h3 className="text-sm font-bold text-stone-900 dark:text-white">Audio & Kanvas Goresan</h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Audio penutur asli bahasa Jepang (ja-JP) untuk Onyomi & Kunyomi, kanvas tulis bergaris Tian Zi Ge (田字格), dan perekam suara mikrofon.
          </p>
        </div>

        <div className="p-5 bg-white dark:bg-[#131B2E] rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs space-y-2.5 card-hover-effect animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center transition-transform hover:scale-110">
            <Award size={20} />
          </div>
          <h3 className="text-sm font-bold text-stone-900 dark:text-white">Simulasi JLPT N5–N3 & SRS</h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Bank soal ujian resmi dengan batasan waktu, ulasan pembahasan mendalam, serta flashcards Spaced Repetition (SRS).
          </p>
        </div>
      </div>

      {/* Feature Matrix & Guide */}
      <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4 animate-fade-in-up">
        <h2 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 size={18} className="text-[#C8102E]" />
          <span>Fitur-Fitur Utama Kanji Michi</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 bg-stone-50 dark:bg-[#18233C] rounded-xl border border-stone-200 dark:border-stone-700/80 card-hover-effect">
            <strong className="text-stone-900 dark:text-white block font-semibold mb-1">
              ✓ Hiragana & Katakana Interaktif
            </strong>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Lengkap 46 huruf gojuon, dakuten, aturan konsonan rangkap (sokuon), vokal panjang, dan pembeda visual huruf mirip (シ/ツ, ソ/ン).
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 dark:bg-[#18233C] rounded-xl border border-stone-200 dark:border-stone-700/80 card-hover-effect">
            <strong className="text-stone-900 dark:text-white block font-semibold mb-1">
              ✓ 1.020+ Bank Kosakata Praktis
            </strong>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Terbagi dalam domain kehidupan, stasiun kereta, perbelanjaan, kantor bisnis, hingga istilah khusus caregiver lansia (Kaigo).
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 dark:bg-[#18233C] rounded-xl border border-stone-200 dark:border-stone-700/80 card-hover-effect">
            <strong className="text-stone-900 dark:text-white block font-semibold mb-1">
              ✓ Kanji N5, N4, N3 Terverifikasi
            </strong>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Dilengkapi audio Onyomi & Kunyomi terpisah, radikal pembentuk, contoh kosakata, dan kanvas latihan urutan goresan.
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 dark:bg-[#18233C] rounded-xl border border-stone-200 dark:border-stone-700/80 card-hover-effect">
            <strong className="text-stone-900 dark:text-white block font-semibold mb-1">
              ✓ Latihan Shadowing & Bicara (Speaking)
            </strong>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Kontrol kecepatan audio 0.5x, 0.75x, 1.0x, rekam suara via mikrofon, serta Speech Recognition untuk melatih pelafalan asli.
            </p>
          </div>
        </div>
      </div>

      {/* Developer & Dedication Notice */}
      <div className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-[#18233C]/60 border border-stone-200 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in-up">
        <div className="space-y-1">
          <div className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5">
            <Heart size={14} className="text-[#C8102E] fill-[#C8102E] animate-pulse" />
            <span>Didedikasikan untuk Pembelajar Bahasa Jepang di Indonesia</span>
          </div>
          <p className="leading-relaxed">
            Dirancang dengan metodologi bertahap agar siapa pun dapat menguasai bahasa Jepang secara mandiri, efisien, dan percaya diri.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('settings')}
          className="px-4 py-2 text-xs font-semibold text-stone-800 dark:text-white bg-white dark:bg-stone-700 hover:bg-stone-100 dark:hover:bg-stone-600 active:scale-95 btn-interactive rounded-xl border border-stone-200 dark:border-stone-600 shrink-0 transition-all shadow-xs"
        >
          Buka Pengaturan →
        </button>
      </div>
    </div>
  );
};
