/**
 * Dashboard & Learning Hub
 * Displays streak, study time, JLPT level, vocabulary/kanji/grammar mastery,
 * weekly activity charts, daily goals, and recommended next lesson.
 */

import React, { useState, useEffect, useRef } from 'react';
import { UserProgress, PageId, VocabItem, KanjiItem, GrammarPoint, LessonItem } from '../../types';
import { CULTURAL_FACTS } from '../../data/culturalFactsData';
import {
  Flame,
  Clock,
  BookA,
  BookOpen,
  Library,
  Target,
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Compass,
  RefreshCw,
} from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface DashboardPageProps {
  progress: UserProgress;
  onNavigate: (page: PageId) => void;
  onOpenDailyRoutine: () => void;
  vocabList: VocabItem[];
  kanjiList: KanjiItem[];
  grammarList: GrammarPoint[];
  lessonsList: LessonItem[];
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  progress,
  onNavigate,
  onOpenDailyRoutine,
  vocabList,
  kanjiList,
  grammarList,
  lessonsList,
}) => {
  const vocabMasteredCount = progress.masteredVocab.length;
  const kanjiMasteredCount = progress.masteredKanji.length;
  const grammarCompletedCount = progress.completedGrammar.length;

  const vocabGoal = progress.dailyGoal.vocabTarget || 10;
  const vocabToday = progress.dailyTodayStats.vocabLearned || 0;
  const vocabPercent = Math.min(100, Math.round((vocabToday / vocabGoal) * 100));

  const minutesGoal = progress.dailyGoal.studyMinutesTarget || 30;
  const minutesToday = progress.dailyTodayStats.minutesSpent || 0;
  const minutesPercent = Math.min(100, Math.round((minutesToday / minutesGoal) * 100));

  // Detect live changes to trigger subtle feedback animations
  const prevProgressRef = useRef(progress);
  const [recentlyUpdated, setRecentlyUpdated] = useState<{
    streak?: boolean;
    minutes?: boolean;
    kanji?: boolean;
    vocab?: boolean;
    dailyVocab?: boolean;
    dailyMinutes?: boolean;
  }>({});

  useEffect(() => {
    const prev = prevProgressRef.current;
    const changed: {
      streak?: boolean;
      minutes?: boolean;
      kanji?: boolean;
      vocab?: boolean;
      dailyVocab?: boolean;
      dailyMinutes?: boolean;
    } = {};

    if (progress.streakDays !== prev.streakDays) changed.streak = true;
    if (progress.totalStudyMinutes !== prev.totalStudyMinutes) changed.minutes = true;
    if (progress.masteredKanji.length !== prev.masteredKanji.length) changed.kanji = true;
    if (progress.masteredVocab.length !== prev.masteredVocab.length) changed.vocab = true;
    if (progress.dailyTodayStats.vocabLearned !== prev.dailyTodayStats.vocabLearned) changed.dailyVocab = true;
    if (progress.dailyTodayStats.minutesSpent !== prev.dailyTodayStats.minutesSpent) changed.dailyMinutes = true;

    if (Object.keys(changed).length > 0) {
      setRecentlyUpdated(changed);
      const timer = setTimeout(() => {
        setRecentlyUpdated({});
      }, 1200);
      prevProgressRef.current = progress;
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Next recommended lesson
  const recommendedLesson =
    lessonsList.find((l) => !progress.completedLessons.includes(l.id)) || lessonsList[0];

  // Weekly study data mock for chart
  const weeklyDays = [
    { day: 'Sen', mins: 25, active: true },
    { day: 'Sel', mins: 30, active: true },
    { day: 'Rab', mins: 40, active: true },
    { day: 'Kam', mins: 20, active: true },
    { day: 'Jum', mins: 35, active: true },
    { day: 'Sab', mins: 15, active: true },
    { day: 'Min (Hari Ini)', mins: minutesToday, active: true },
  ];

  const maxMins = 50;

  const [factIndex, setFactIndex] = useState(() => {
    const dayOfYear = Math.floor(Date.now() / 86400000);
    return dayOfYear % CULTURAL_FACTS.length;
  });
  const currentFact = CULTURAL_FACTS[factIndex] || CULTURAL_FACTS[0];

  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F1D38] via-[#142344] to-[#0A1224] text-white p-5 sm:p-8 shadow-sm">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#C8102E] text-white uppercase tracking-wider">
              Kanji Michi · 漢字道
            </span>
            <span className="text-xs text-stone-300">
              Target Level: <strong className="text-amber-300">JLPT {progress.userLevel}</strong>
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Selamat Datang di Kanji Michi.
          </h1>

          {/* Fakta Unik & Budaya Jepang (日本の豆知識) replacing generic text */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-4 sm:p-5 transition-all text-left space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-base sm:text-lg">{currentFact.iconTag}</span>
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">
                  Fakta Unik & Budaya Jepang
                </span>
                <span className="text-[10px] bg-white/20 text-stone-200 px-2 py-0.5 rounded-full font-medium">
                  {currentFact.category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setFactIndex((prev) => (prev + 1) % CULTURAL_FACTS.length)}
                className="flex items-center gap-1 text-[11px] font-medium text-stone-200 hover:text-white bg-white/15 hover:bg-white/25 active:scale-95 px-2.5 py-1 rounded-lg transition-all shrink-0"
                title="Ganti ke fakta unik lainnya"
              >
                <RefreshCw size={12} />
                <span>Ganti Fakta</span>
              </button>
            </div>

            <div>
              <div className="text-sm sm:text-base font-bold text-white flex flex-wrap items-baseline gap-1.5">
                <span className="font-jp text-amber-200 text-base sm:text-lg">{currentFact.titleJapanese}</span>
                <span className="text-xs text-stone-300 font-mono">({currentFact.titleRomaji})</span>
                <span className="text-xs font-semibold text-white">— {currentFact.titleId}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed mt-1">
                {currentFact.fact}
              </p>
              <p className="text-[11px] text-amber-200/90 mt-1 italic leading-normal">
                💡 {currentFact.detailId}
              </p>
            </div>
          </div>

          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenDailyRoutine}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#C8102E] hover:bg-[#A00C24] active:scale-95 rounded-xl shadow-md transition-all text-center"
            >
              <Sparkles size={16} />
              <span>Mulai Rutinitas Harian Hari Ini</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('lessons')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-200 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-center"
            >
              <Compass size={16} />
              <span>Lanjutkan Kurikulum</span>
            </button>
          </div>
        </div>

        {/* Decorative Torii & Sakura Subtle Motif */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden md:flex items-center justify-end pr-8">
          <img
            src={logoImg}
            alt="Kanji Michi Emblem"
            className="h-48 w-auto object-contain"
          />
        </div>
      </div>

      {/* 4 Core Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Streak */}
        <div
          className={`p-4 sm:p-5 bg-white rounded-2xl border card-hover-effect flex items-center gap-4 cursor-pointer ${
            recentlyUpdated.streak
              ? 'border-amber-400 bg-amber-50/40 animate-progress-pulse animate-glow-crimson'
              : 'border-stone-200/90 shadow-xs'
          }`}
        >
          <div
            className={`p-3 rounded-xl bg-amber-50 text-amber-600 shrink-0 transition-transform duration-300 ${
              recentlyUpdated.streak ? 'scale-110' : ''
            }`}
          >
            <Flame size={24} className="fill-amber-500" />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Streak Belajar</div>
            <div
              className={`text-xl sm:text-2xl font-bold font-mono tabular-nums transition-colors duration-300 ${
                recentlyUpdated.streak ? 'text-amber-600 animate-number-flash' : 'text-stone-900'
              }`}
            >
              {progress.streakDays} <span className="text-xs font-normal text-stone-500">Hari</span>
            </div>
          </div>
        </div>

        {/* Study Time */}
        <div
          className={`p-4 sm:p-5 bg-white rounded-2xl border card-hover-effect flex items-center gap-4 cursor-pointer ${
            recentlyUpdated.minutes
              ? 'border-blue-400 bg-blue-50/40 animate-progress-pulse'
              : 'border-stone-200/90 shadow-xs'
          }`}
        >
          <div
            className={`p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0 transition-transform duration-300 ${
              recentlyUpdated.minutes ? 'scale-110' : ''
            }`}
          >
            <Clock size={24} />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Total Waktu</div>
            <div
              className={`text-xl sm:text-2xl font-bold font-mono tabular-nums transition-colors duration-300 ${
                recentlyUpdated.minutes ? 'text-blue-600 animate-number-flash' : 'text-stone-900'
              }`}
            >
              {progress.totalStudyMinutes}{' '}
              <span className="text-xs font-normal text-stone-500">Menit</span>
            </div>
          </div>
        </div>

        {/* Kanji Mastered */}
        <div
          className={`p-4 sm:p-5 bg-white rounded-2xl border card-hover-effect flex items-center gap-4 cursor-pointer ${
            recentlyUpdated.kanji
              ? 'border-[#C8102E]/60 bg-[#FDF2F4]/60 animate-progress-pulse animate-glow-crimson'
              : 'border-stone-200/90 shadow-xs'
          }`}
        >
          <div
            className={`p-3 rounded-xl bg-[#FDF2F4] text-[#C8102E] shrink-0 transition-transform duration-300 ${
              recentlyUpdated.kanji ? 'scale-110' : ''
            }`}
          >
            <BookA size={24} />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Kanji Dikuasai</div>
            <div
              className={`text-xl sm:text-2xl font-bold font-mono tabular-nums transition-colors duration-300 ${
                recentlyUpdated.kanji ? 'text-[#C8102E] animate-number-flash' : 'text-stone-900'
              }`}
            >
              {kanjiMasteredCount}{' '}
              <span className="text-xs font-normal text-stone-500">/ {kanjiList.length}</span>
            </div>
          </div>
        </div>

        {/* Vocab Mastered */}
        <div
          className={`p-4 sm:p-5 bg-white rounded-2xl border card-hover-effect flex items-center gap-4 cursor-pointer ${
            recentlyUpdated.vocab
              ? 'border-emerald-400 bg-emerald-50/50 animate-progress-pulse animate-glow-emerald'
              : 'border-stone-200/90 shadow-xs'
          }`}
        >
          <div
            className={`p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 transition-transform duration-300 ${
              recentlyUpdated.vocab ? 'scale-110' : ''
            }`}
          >
            <BookOpen size={24} />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Kosakata Dikuasai</div>
            <div
              className={`text-xl sm:text-2xl font-bold font-mono tabular-nums transition-colors duration-300 ${
                recentlyUpdated.vocab ? 'text-emerald-700 animate-number-flash' : 'text-stone-900'
              }`}
            >
              {vocabMasteredCount}{' '}
              <span className="text-xs font-normal text-stone-500">Kata</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Split: Daily Targets & Weekly Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Goals Card */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <Target size={18} className="text-[#C8102E]" />
              <span>Target Belajar Hari Ini</span>
            </h2>
            <span className="text-xs text-stone-500 font-mono">
              {new Date().toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' })}
            </span>
          </div>

          {/* Goal 1: Vocab */}
          <div
            className={`space-y-1.5 p-2 rounded-xl transition-all duration-500 ${
              recentlyUpdated.dailyVocab ? 'bg-rose-50/50 ring-1 ring-[#C8102E]/30' : ''
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-600 flex items-center gap-1.5">
                <span>Hafalan Kosakata Baru</span>
                {vocabPercent >= 100 && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200 animate-check-pop">
                    Tercapai!
                  </span>
                )}
              </span>
              <span
                className={`font-semibold font-mono tabular-nums transition-colors duration-300 ${
                  recentlyUpdated.dailyVocab ? 'text-[#C8102E]' : 'text-stone-800'
                }`}
              >
                {vocabToday} / {vocabGoal} kata
              </span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-2.5 rounded-full progress-bar-smooth ${
                  vocabPercent >= 100 ? 'bg-emerald-600' : 'bg-[#C8102E]'
                }`}
                style={{ width: `${vocabPercent}%` }}
              />
            </div>
          </div>

          {/* Goal 2: Minutes */}
          <div
            className={`space-y-1.5 p-2 rounded-xl transition-all duration-500 ${
              recentlyUpdated.dailyMinutes ? 'bg-blue-50/50 ring-1 ring-[#0F1D38]/30' : ''
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-600 flex items-center gap-1.5">
                <span>Durasi Belajar & Audio</span>
                {minutesPercent >= 100 && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200 animate-check-pop">
                    Tercapai!
                  </span>
                )}
              </span>
              <span
                className={`font-semibold font-mono tabular-nums transition-colors duration-300 ${
                  recentlyUpdated.dailyMinutes ? 'text-[#0F1D38]' : 'text-stone-800'
                }`}
              >
                {minutesToday} / {minutesGoal} menit
              </span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-2.5 rounded-full progress-bar-smooth ${
                  minutesPercent >= 100 ? 'bg-emerald-600' : 'bg-[#0F1D38]'
                }`}
                style={{ width: `${minutesPercent}%` }}
              />
            </div>
          </div>

          {/* Goal 3: Shadowing & Quiz */}
          <div className="pt-2 border-t border-stone-100 space-y-2 text-xs">
            <div className="flex items-center justify-between text-stone-700">
              <span>Latihan Shadowing</span>
              {progress.dailyTodayStats.shadowingDone ? (
                <span className="text-emerald-600 font-semibold flex items-center gap-1 animate-check-pop">
                  <CheckCircle2 size={14} className="fill-emerald-100" /> Selesai
                </span>
              ) : (
                <span className="text-stone-400">Belum</span>
              )}
            </div>
            <div className="flex items-center justify-between text-stone-700">
              <span>Kuis Singkat 5 Soal</span>
              <span className="font-mono text-stone-800 font-medium">
                {progress.dailyTodayStats.quizzesCompleted} kuis selesai
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenDailyRoutine}
            className="w-full py-2 text-xs font-semibold text-[#C8102E] hover:text-[#A00C24] bg-[#FDF2F4] hover:bg-[#FCE7EB] rounded-xl transition-colors text-center"
          >
            Lanjutkan Target Hari Ini →
          </button>
        </div>

        {/* Weekly Activity Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-[#0F1D38]" />
                <h2 className="text-sm font-bold text-stone-900">
                  Aktivitas Belajar Mingguan
                </h2>
              </div>
              <span className="text-xs text-stone-400">Konsistensi 7 Hari</span>
            </div>

            {/* Custom Tailwind Chart Bar */}
            <div className="h-44 flex items-end justify-between gap-2 sm:gap-4 pt-6 px-2">
              {weeklyDays.map((item, idx) => {
                const heightPercent = Math.min(100, Math.round((item.mins / maxMins) * 100));
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-mono font-semibold text-stone-500">
                      {item.mins}m
                    </span>
                    <div className="w-full max-w-[36px] bg-stone-100 rounded-t-lg h-full flex items-end overflow-hidden">
                      <div
                        className="w-full bg-[#0F1D38] hover:bg-[#C8102E] rounded-t-lg chart-bar-smooth"
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-stone-600 font-medium text-center truncate">
                      {item.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-[11px] text-stone-500 mt-4 pt-3 border-t border-stone-100">
            *Berdasarkan studi resmi: belajar 20–30 menit konsisten setiap hari jauh lebih efektif untuk penguasaan bahasa Jepang dibandingkan belajar 3 jam sekaligus dalam satu minggu.
          </p>
        </div>
      </div>

      {/* Bottom Split: Recommended Lesson & Quick Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommended Next Lesson Card */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
              Rekomendasi Pelajaran Berikutnya
            </span>
            <span className="text-xs text-stone-400 font-mono">
              {recommendedLesson.track === 'minna' ? 'Minna Shokyu I' : 'Irodori Can-Do'}
            </span>
          </div>

          <h3 className="text-base font-bold text-stone-900">
            {recommendedLesson.title}
          </h3>

          <p className="text-xs text-stone-600 leading-relaxed">
            {recommendedLesson.descriptionId}
          </p>

          <div className="p-3 rounded-xl bg-stone-50 text-xs text-stone-700">
            <strong>Target Kemampuan (Can-Do):</strong> {recommendedLesson.canDoObjective}
          </div>

          <button
            type="button"
            onClick={() => onNavigate('lessons')}
            className="flex items-center gap-2 text-xs font-semibold text-[#0F1D38] hover:text-[#C8102E] transition-colors"
          >
            <span>Buka Pelajaran Ini</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Quick Access Grid */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-stone-900">
            Akses Cepat Modul Pembelajaran
          </h3>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => onNavigate('hiragana')}
              className="p-3 text-left rounded-xl border border-stone-200 hover:border-[#C8102E] hover:bg-[#FDF2F4]/30 card-hover-effect active:scale-98 group"
            >
              <div className="text-lg font-bold font-kanji text-[#0F1D38] group-hover:text-[#C8102E] transition-colors">
                あ Hiragana
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                46 aksara + dakuten
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('katakana')}
              className="p-3 text-left rounded-xl border border-stone-200 hover:border-[#C8102E] hover:bg-[#FDF2F4]/30 card-hover-effect active:scale-98 group"
            >
              <div className="text-lg font-bold font-kanji text-[#0F1D38] group-hover:text-[#C8102E] transition-colors">
                ア Katakana
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Kata serapan & merek
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('kanji')}
              className="p-3 text-left rounded-xl border border-stone-200 hover:border-[#C8102E] hover:bg-[#FDF2F4]/30 card-hover-effect active:scale-98 group"
            >
              <div className="text-lg font-bold font-kanji text-[#0F1D38] group-hover:text-[#C8102E] transition-colors">
                漢 Kanji N5-N3
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Goresan & contoh
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('jlpt')}
              className="p-3 text-left rounded-xl border border-stone-200 hover:border-[#C8102E] hover:bg-[#FDF2F4]/30 card-hover-effect active:scale-98 group"
            >
              <div className="text-lg font-bold text-[#0F1D38] group-hover:text-[#C8102E] transition-colors">
                Simulasi Ujian
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Tes JLPT N5, N4, N3
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
