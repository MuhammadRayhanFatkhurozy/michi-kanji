/**
 * Grammar (Bunpou) Learning Module
 * Based on Minna no Nihongo Shokyu I (Lessons 1-25) & JLPT N5, N4, N3
 * Includes sentence structure formulas, positive/negative/question patterns,
 * Indonesian explanations, common pitfalls, and interactive quizzes.
 */

import React, { useState } from 'react';
import { GrammarPoint, JLPTLevel, UserProgress } from '../../types';
import { AudioButton } from '../common/AudioButton';
import { storageService } from '../../services/storageService';
import {
  Search,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Layers,
  X,
  Volume2,
  Check,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';

interface GrammarPageProps {
  grammarList: GrammarPoint[];
  progress: UserProgress;
  onProgressUpdated: (newProgress: UserProgress) => void;
  showRomajiDefault?: boolean;
}

export const GrammarPage: React.FC<GrammarPageProps> = ({
  grammarList,
  progress,
  onProgressUpdated,
  showRomajiDefault = true,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | JLPTLevel>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<GrammarPoint | null>(null);
  const [showRomaji, setShowRomaji] = useState(showRomajiDefault);

  // Exercise quiz state inside modal
  const [userExerciseAnswers, setUserExerciseAnswers] = useState<Record<number, number>>({});
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);

  const filteredGrammar = grammarList.filter((g) => {
    if (selectedLevel !== 'ALL' && g.level !== selectedLevel) return false;
    if (showBookmarksOnly && !progress.bookmarkedGrammar.includes(g.id)) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = g.title.toLowerCase().includes(q);
      const matchPattern = g.pattern.toLowerCase().includes(q);
      const matchMeaning = g.meaningId.toLowerCase().includes(q);
      const matchExp = g.explanationId.toLowerCase().includes(q);
      if (!matchTitle && !matchPattern && !matchMeaning && !matchExp) return false;
    }

    return true;
  });

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    storageService.toggleBookmark('grammar', id);
    onProgressUpdated(storageService.getProgress());
  };

  const handleToggleCompleted = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    storageService.markMastered('grammar', id);
    onProgressUpdated(storageService.getProgress());
  };

  const handleOpenDetail = (g: GrammarPoint) => {
    setSelectedPoint(g);
    setUserExerciseAnswers({});
    setExerciseSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#C8102E] text-white">
                Modul Tata Bahasa (文法)
              </span>
              <span className="text-xs text-stone-500 font-medium">
                Minna no Nihongo Shokyu I (25 Bab) & JLPT N5–N3
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] mt-1">
              Rumus Pola Kalimat & Tata Bahasa
            </h1>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Penjelasan komprehensif dalam bahasa Indonesia, formula rumus positif/negatif/tanya, kapan harus digunakan, jebakan salah pakai, dan latihan interaktif.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                showBookmarksOnly
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <Bookmark size={14} className={showBookmarksOnly ? 'fill-amber-500 text-amber-500' : ''} />
              <span>Disimpan ({progress.bookmarkedGrammar.length})</span>
            </button>
          </div>
        </div>

        {/* Level Filters & Search */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="w-full sm:w-auto overflow-x-auto pb-1 -mb-1 scrollbar-none">
            <div className="inline-flex items-center gap-1 p-1 bg-stone-100 rounded-xl min-w-max">
              {(['ALL', 'N5', 'N4', 'N3'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    selectedLevel === lvl
                      ? 'bg-white text-[#0F1D38] shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {lvl === 'ALL' ? 'Semua Pola' : `JLPT ${lvl}`}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pola kalimat, rumus, atau arti..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#C8102E]/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grammar Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredGrammar.map((item) => {
          const isCompleted = progress.completedGrammar.includes(item.id);
          const isBookmarked = progress.bookmarkedGrammar.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => handleOpenDetail(item)}
              className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs card-hover-effect active:scale-98 animate-fade-in cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60">
                      JLPT {item.level}
                    </span>
                    {item.minnaLesson && (
                      <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        Minna Bab {item.minnaLesson}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleToggleBookmark(item.id, e)}
                    className="p-1 text-stone-400 hover:text-amber-500 rounded-md transition-colors"
                  >
                    <Bookmark
                      size={15}
                      className={isBookmarked ? 'fill-amber-500 text-amber-500' : ''}
                    />
                  </button>
                </div>

                <div className="mt-2.5">
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-[#C8102E] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-stone-600 mt-1 bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200/80 inline-block">
                    {item.pattern}
                  </div>
                </div>

                <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-2">
                  {item.explanationId}
                </p>

                {/* Example preview */}
                {item.examples[0] && (
                  <div className="mt-3 p-3 bg-stone-50/70 rounded-xl border border-stone-200/70 text-xs space-y-0.5">
                    <div className="font-semibold text-stone-800 font-jp">
                      {item.examples[0].japanese}
                    </div>
                    <div className="text-stone-500 font-medium">
                      {item.examples[0].indonesian}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-[#C8102E] font-medium group-hover:underline">
                  Buka Rumus & Latihan Soal →
                </span>

                <button
                  type="button"
                  onClick={(e) => handleToggleCompleted(item.id, e)}
                  className={`flex items-center gap-1 font-semibold transition-colors ${
                    isCompleted ? 'text-emerald-600' : 'text-stone-400 hover:text-emerald-600'
                  }`}
                >
                  <CheckCircle2 size={14} className={isCompleted ? 'fill-emerald-50' : ''} />
                  <span>{isCompleted ? 'Dipahami' : 'Tandai Selesai'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grammar Detail Modal */}
      {selectedPoint && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPoint(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-stone-200 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    JLPT {selectedPoint.level}
                  </span>
                  {selectedPoint.minnaLesson && (
                    <span className="text-xs text-stone-500 font-semibold">
                      Minna no Nihongo Bab {selectedPoint.minnaLesson}
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-[#0F1D38] mt-1">
                  {selectedPoint.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleBookmark(selectedPoint.id)}
                  className="p-1.5 text-stone-400 hover:text-amber-500 rounded-lg"
                >
                  <Bookmark
                    size={18}
                    className={
                      progress.bookmarkedGrammar.includes(selectedPoint.id)
                        ? 'fill-amber-500 text-amber-500'
                        : ''
                    }
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPoint(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Pattern Formula */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Formula Pembentukan Kalimat:
                </span>
                <ul className="space-y-1 text-xs font-semibold text-stone-800">
                  {selectedPoint.structure.map((str, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* When to use */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Kapan Digunakan:
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {selectedPoint.whenToUse}
                </p>
              </div>

              {/* Explanation */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Penjelasan Lengkap:
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed whitespace-pre-line">
                  {selectedPoint.explanationId}
                </p>
              </div>

              {/* Examples Positive, Negative, Question */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                    Contoh Pola Kalimat:
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowRomaji(!showRomaji)}
                    className="text-[11px] text-stone-500 hover:text-stone-800 font-medium"
                  >
                    {showRomaji ? 'Sembunyikan Romaji' : 'Tampilkan Romaji'}
                  </button>
                </div>

                <div className="space-y-2">
                  {selectedPoint.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-stone-200 bg-white flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded ${
                              ex.type === 'positive'
                                ? 'bg-emerald-100 text-emerald-800'
                                : ex.type === 'negative'
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {ex.type}
                          </span>
                          <span className="font-semibold text-stone-900 font-jp text-sm">
                            {ex.japanese}
                          </span>
                        </div>
                        {showRomaji && (
                          <div className="text-xs text-stone-400 font-mono">
                            {ex.romaji}
                          </div>
                        )}
                        <div className="text-xs text-stone-600 font-medium pt-0.5">
                          {ex.indonesian}
                        </div>
                      </div>
                      <AudioButton text={ex.japanese} size="sm" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Pitfalls / Mistakes */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5 text-xs">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <AlertTriangle size={15} className="text-amber-600" />
                  <span>Kesalahan Umum yang Harus Dihindari:</span>
                </div>
                <p className="text-stone-700 leading-relaxed whitespace-pre-line">
                  {selectedPoint.commonMistakes}
                </p>
              </div>

              {/* Interactive Exercises */}
              <div className="space-y-3 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle size={15} className="text-[#0F1D38]" />
                  <span>Latihan Soal Tata Bahasa:</span>
                </h4>

                <div className="space-y-3">
                  {selectedPoint.exercises.map((quiz, qIdx) => {
                    const selectedAns = userExerciseAnswers[qIdx];
                    const isAnswered = selectedAns !== undefined;
                    const isCorrect = selectedAns === quiz.answerIndex;

                    return (
                      <div
                        key={qIdx}
                        className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2.5"
                      >
                        <div className="text-xs font-semibold text-stone-900">
                          {qIdx + 1}. {quiz.question}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {quiz.options.map((opt, optIdx) => {
                            const isChosen = selectedAns === optIdx;
                            let style = 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100';
                            if (isAnswered) {
                              if (optIdx === quiz.answerIndex) {
                                style = 'bg-emerald-600 text-white border-emerald-600 font-semibold';
                              } else if (isChosen) {
                                style = 'bg-rose-600 text-white border-rose-600';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                type="button"
                                disabled={isAnswered}
                                onClick={() => {
                                  setUserExerciseAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
                                }}
                                className={`px-3 py-2 text-xs rounded-lg text-left transition-all border ${style}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {isAnswered && (
                          <div className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                            isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                          }`}>
                            <strong>{isCorrect ? 'Benar!' : 'Kurang Tepat:'}</strong> {quiz.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleToggleCompleted(selectedPoint.id)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  progress.completedGrammar.includes(selectedPoint.id)
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                <CheckCircle2 size={16} />
                <span>
                  {progress.completedGrammar.includes(selectedPoint.id)
                    ? 'Sudah Dipahami'
                    : 'Tandai Selesai'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPoint(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0F1D38] hover:bg-[#0A1224] rounded-lg transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
