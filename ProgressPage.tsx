/**
 * Progress & Analytics Page
 * Detailed breakdown of JLPT readiness, streak tracking, study time,
 * mastery counts, and historical test performances.
 */

import React from 'react';
import { UserProgress, KanjiItem, VocabItem, GrammarPoint } from '../../types';
import {
  BarChart3,
  TrendingUp,
  Award,
  Clock,
  Flame,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ProgressPageProps {
  progress: UserProgress;
  kanjiList: KanjiItem[];
  vocabList: VocabItem[];
  grammarList: GrammarPoint[];
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  progress,
  kanjiList,
  vocabList,
  grammarList,
}) => {
  const kanjiPct = Math.min(100, Math.round((progress.masteredKanji.length / kanjiList.length) * 100));
  const vocabPct = Math.min(100, Math.round((progress.masteredVocab.length / vocabList.length) * 100));
  const grammarPct = Math.min(100, Math.round((progress.completedGrammar.length / grammarList.length) * 100));

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs animate-fade-in-up">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0F1D38] dark:bg-[#18233C] text-white">
            Analisis Progres Belajar
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">Statistik & Kesiapan Ujian</span>
        </div>
        <h1 className="text-2xl font-bold text-[#0F1D38] dark:text-white mt-1">
          Laporan Kemajuan Bahasa Jepang
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 max-w-2xl leading-relaxed">
          Pantau penguasaan materi menuju target JLPT N3 dan kesiapan komunikasi dunia kerja di Jepang berdasarkan data waktu belajar nyata.
        </p>
      </div>

      {/* 3 Progress Bars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Kanji Progress */}
        <div className="p-6 bg-white dark:bg-[#131B2E] rounded-2xl border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-3 card-hover-effect animate-fade-in-up">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-stone-700 dark:text-stone-200">Penguasaan Kanji (N5-N3)</span>
            <span className="text-[#C8102E] font-mono">{kanjiPct}%</span>
          </div>
          <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#C8102E] h-2.5 rounded-full progress-bar-smooth"
              style={{ width: `${kanjiPct}%` }}
            />
          </div>
          <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
            {progress.masteredKanji.length} dari {kanjiList.length} aksara dikuasai
          </div>
        </div>

        {/* Vocab Progress */}
        <div className="p-6 bg-white dark:bg-[#131B2E] rounded-2xl border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-3 card-hover-effect animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-stone-700 dark:text-stone-200">Bank Kosakata (Kotoba)</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono">{vocabPct}%</span>
          </div>
          <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-emerald-600 h-2.5 rounded-full progress-bar-smooth"
              style={{ width: `${vocabPct}%` }}
            />
          </div>
          <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
            {progress.masteredVocab.length} dari {vocabList.length} kata hafal
          </div>
        </div>

        {/* Grammar Progress */}
        <div className="p-6 bg-white dark:bg-[#131B2E] rounded-2xl border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-3 card-hover-effect animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-stone-700 dark:text-stone-200">Pola Tata Bahasa (Bunpou)</span>
            <span className="text-blue-600 dark:text-blue-400 font-mono">{grammarPct}%</span>
          </div>
          <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-blue-600 h-2.5 rounded-full progress-bar-smooth"
              style={{ width: `${grammarPct}%` }}
            />
          </div>
          <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
            {progress.completedGrammar.length} dari {grammarList.length} pola dipahami
          </div>
        </div>
      </div>

      {/* Exam Simulation History */}
      <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-4 animate-fade-in-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award size={18} className="text-[#C8102E] animate-pulse-subtle" />
            <h2 className="text-base font-bold text-stone-900 dark:text-white">
              Riwayat Skor Simulasi Ujian JLPT
            </h2>
          </div>
          <span className="text-xs text-stone-400 font-mono">
            {progress.jlptTestHistory.length} kali tes
          </span>
        </div>

        {progress.jlptTestHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-700 text-stone-400 font-mono">
                  <th className="py-2.5 font-medium">Tanggal</th>
                  <th className="py-2.5 font-medium">Tingkat Ujian</th>
                  <th className="py-2.5 font-medium">Skor Soal</th>
                  <th className="py-2.5 font-medium">Persentase</th>
                  <th className="py-2.5 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                {progress.jlptTestHistory.map((test) => (
                  <tr key={test.id} className="hover:bg-stone-50/70 dark:hover:bg-[#18233C]/60 transition-colors">
                    <td className="py-3 font-mono text-stone-600 dark:text-stone-300">{test.date}</td>
                    <td className="py-3 font-semibold text-stone-900 dark:text-white">JLPT {test.level}</td>
                    <td className="py-3 font-mono text-stone-800 dark:text-stone-200">
                      {test.score} / {test.total}
                    </td>
                    <td className="py-3 font-mono font-bold text-stone-900 dark:text-white">
                      {test.percentage}%
                    </td>
                    <td className="py-3 text-right">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          test.percentage >= 70
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                            : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                        }`}
                      >
                        {test.percentage >= 70 ? 'LULUS' : 'REMEDIAL'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-xs text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-[#18233C] rounded-xl card-hover-effect">
            Belum ada riwayat simulasi ujian. Buka menu Latihan JLPT untuk mulai tes pertama Anda.
          </div>
        )}
      </div>
    </div>
  );
};
