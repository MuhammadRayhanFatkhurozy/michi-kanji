/**
 * JLPT Practice & Simulation Exam Module (N5, N4, N3)
 * Full mock tests across Vocabulary, Kanji, Grammar, Reading, and Listening.
 * Features test timer, score calculation, category accuracy breakdown, and answer review.
 */

import React, { useState, useEffect } from 'react';
import { JLPTQuestion, JLPTLevel, UserProgress } from '../../types';
import { JLPT_QUESTIONS } from '../../data/jlptData';
import { AudioButton } from '../common/AudioButton';
import { storageService } from '../../services/storageService';
import {
  Award,
  Timer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Volume2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface JlptPracticePageProps {
  progress: UserProgress;
  onProgressUpdated: (newProgress: UserProgress) => void;
}

export const JlptPracticePage: React.FC<JlptPracticePageProps> = ({
  progress,
  onProgressUpdated,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>('N5');
  const [selectedCategory, setSelectedCategory] = useState<
    'ALL' | 'vocabulary' | 'kanji' | 'grammar' | 'reading' | 'listening'
  >('ALL');

  const [isTestRunning, setIsTestRunning] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(600); // 10 minutes
  const [testResult, setTestResult] = useState<{
    score: number;
    total: number;
    percentage: number;
    categoryScores: Record<string, { correct: number; total: number }>;
  } | null>(null);

  // Active question pool for current test
  const activeQuestions = JLPT_QUESTIONS.filter((q) => {
    if (q.level !== selectedLevel) return false;
    if (selectedCategory !== 'ALL' && q.category !== selectedCategory) return false;
    return true;
  });

  // Timer countdown
  useEffect(() => {
    let timer: any = null;
    if (isTestRunning && secondsRemaining > 0 && !testResult) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            handleFinishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestRunning, secondsRemaining, testResult]);

  const handleStartTest = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTestResult(null);
    setSecondsRemaining(activeQuestions.length * 90); // 1.5 mins per question
    setIsTestRunning(true);
  };

  const handleSelectOption = (optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleFinishTest = () => {
    let score = 0;
    const catScores: Record<string, { correct: number; total: number }> = {};

    activeQuestions.forEach((q, idx) => {
      if (!catScores[q.category]) {
        catScores[q.category] = { correct: 0, total: 0 };
      }
      catScores[q.category].total += 1;

      if (userAnswers[idx] === q.correctIndex) {
        score += 1;
        catScores[q.category].correct += 1;
      }
    });

    const total = activeQuestions.length;
    const percentage = Math.round((score / total) * 100);

    const result = {
      score,
      total,
      percentage,
      categoryScores: catScores,
    };

    setTestResult(result);
    setIsTestRunning(false);

    // Save test result to progress
    const updated = { ...progress };
    updated.jlptTestHistory.unshift({
      id: `jlpt-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      level: selectedLevel,
      score,
      total,
      percentage,
      categoryScores: catScores,
    });
    updated.totalStudyMinutes += 15;
    updated.dailyTodayStats.minutesSpent += 15;
    updated.dailyTodayStats.quizzesCompleted += 1;

    storageService.saveProgress(updated);
    onProgressUpdated(updated);

    if (percentage >= 70) {
      try {
        confetti({ particleCount: 70, spread: 80 });
      } catch {}
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentQ = activeQuestions[currentQuestionIndex];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs animate-fade-in-up">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#C8102E] text-white">
                Simulasi Ujian Resmi
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                JLPT N5 · N4 · N3
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] dark:text-white mt-1">
              Latihan Soal & Mock Test JLPT
            </h1>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 max-w-2xl leading-relaxed">
              Format ujian otentik mencakup Kosakata (Goi), Kanji (Moji), Tata Bahasa (Bunpou), Membaca (Dokkai), dan Menyimak (Choukai) dengan pembatasan waktu dan evaluasi kesalahan terperinci.
            </p>
          </div>

          {/* Level Switcher */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl">
            {(['N5', 'N4', 'N3'] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                disabled={isTestRunning}
                onClick={() => {
                  setSelectedLevel(lvl);
                  setTestResult(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all btn-interactive active:scale-95 ${
                  selectedLevel === lvl
                    ? 'bg-[#0F1D38] text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white disabled:opacity-50'
                }`}
              >
                JLPT {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        {!isTestRunning && !testResult && (
          <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'ALL', label: 'Semua Bidang Ujian' },
              { id: 'vocabulary', label: 'Kosakata (Goi)' },
              { id: 'kanji', label: 'Kanji (Moji)' },
              { id: 'grammar', label: 'Tata Bahasa (Bunpou)' },
              { id: 'reading', label: 'Membaca (Dokkai)' },
              { id: 'listening', label: 'Menyimak (Choukai)' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all border card-hover-effect btn-interactive active:scale-95 ${
                  selectedCategory === cat.id
                    ? 'bg-[#C8102E] text-white border-[#C8102E]'
                    : 'bg-white dark:bg-[#18233C] text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Test Idle State (Ready to start) */}
      {!isTestRunning && !testResult && (
        <div className="p-8 bg-white dark:bg-[#131B2E] rounded-2xl border border-stone-200 dark:border-stone-800 text-center space-y-5 max-w-xl mx-auto shadow-xs animate-fade-in-up card-hover-effect">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FAF8F5] dark:bg-[#18233C] text-[#C8102E] flex items-center justify-center border border-stone-200 dark:border-stone-700 animate-pulse-subtle">
            <Award size={36} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-white">
              Simulasi Ujian JLPT {selectedLevel}
            </h2>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 max-w-md mx-auto leading-relaxed">
              Terdapat <strong>{activeQuestions.length} butir soal pilihan ganda</strong>. Setiap soal dilengkapi pembahasan komprehensif dalam bahasa Indonesia setelah selesai.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs max-w-xs mx-auto">
            <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-[#18233C] border border-stone-200 dark:border-stone-700">
              <span className="text-stone-400 block">Waktu Ujian</span>
              <strong className="text-stone-800 dark:text-white font-mono">
                {Math.round((activeQuestions.length * 90) / 60)} Menit
              </strong>
            </div>
            <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-[#18233C] border border-stone-200 dark:border-stone-700">
              <span className="text-stone-400 block">Target Lulus</span>
              <strong className="text-stone-800 dark:text-white font-mono">≥ 70% Akurasi</strong>
            </div>
          </div>

          <button
            type="button"
            onClick={handleStartTest}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-[#C8102E] hover:bg-[#A00C24] active:scale-95 btn-interactive rounded-xl shadow-md transition-all animate-pulse-subtle"
          >
            Mulai Ujian Sekarang
          </button>
        </div>
      )}

      {/* Active Test In Progress */}
      {isTestRunning && currentQ && (
        <div className="max-w-3xl mx-auto bg-white dark:bg-[#131B2E] rounded-2xl p-6 md:p-8 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6 animate-fade-in">
          {/* Top Bar: Progress and Timer */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#0F1D38] dark:bg-[#18233C] text-white">
                {currentQ.level}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium capitalize">
                Kategori: {currentQ.category}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs font-bold px-3 py-1 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-lg">
              <Timer size={14} className="text-[#C8102E] animate-pulse" />
              <span>Sisa Waktu: {formatTime(secondsRemaining)}</span>
            </div>
          </div>

          {/* Stepper info */}
          <div className="text-xs text-stone-400 font-mono">
            Soal {currentQuestionIndex + 1} dari {activeQuestions.length}
          </div>

          {/* Reading Passage or Listening Script if applicable */}
          {currentQ.readingPassage && (
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-[#18233C] border border-stone-200 dark:border-stone-700 text-xs font-jp text-stone-800 dark:text-stone-200 leading-relaxed whitespace-pre-line animate-fade-in">
              <span className="font-bold text-stone-400 block uppercase mb-1 text-[10px]">
                Teks Bacaan (Dokkai):
              </span>
              {currentQ.readingPassage}
            </div>
          )}

          {currentQ.listeningScript && (
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-900 dark:text-blue-300">
                  Transkrip Audio Menyimak:
                </span>
                <AudioButton text={currentQ.listeningScript} size="sm" />
              </div>
              <div className="text-xs font-jp text-stone-800 dark:text-stone-200 whitespace-pre-line leading-relaxed">
                {currentQ.listeningScript}
              </div>
            </div>
          )}

          {/* Prompt */}
          <div className="text-base font-bold text-stone-900 dark:text-white font-jp leading-relaxed whitespace-pre-line animate-fade-in">
            {currentQ.prompt}
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = userAnswers[currentQuestionIndex] === optIdx;

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full p-3.5 text-xs sm:text-sm text-left rounded-xl border transition-all flex items-center justify-between card-hover-effect btn-interactive active:scale-98 ${
                    isSelected
                      ? 'bg-[#0F1D38] text-white border-[#0F1D38] font-semibold shadow-xs'
                      : 'bg-white dark:bg-[#18233C] text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-transform ${
                        isSelected
                          ? 'bg-white text-[#0F1D38] scale-110'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                      }`}
                    >
                      {optIdx + 1}
                    </span>
                    <span className="font-jp">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <button
              type="button"
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 disabled:opacity-30 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 btn-interactive"
            >
              <ArrowLeft size={14} />
              <span>Sebelumnya</span>
            </button>

            {currentQuestionIndex + 1 < activeQuestions.length ? (
              <button
                type="button"
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F1D38] hover:bg-[#0A1224] rounded-lg btn-interactive active:scale-95"
              >
                <span>Soal Berikutnya</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinishTest}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#C8102E] hover:bg-[#A00C24] rounded-lg shadow-sm btn-interactive active:scale-95 animate-pulse-subtle"
              >
                Selesaikan Ujian & Nilai
              </button>
            )}
          </div>
        </div>
      )}

      {/* Test Results & Answer Review */}
      {testResult && (
        <div className="max-w-3xl mx-auto space-y-6 animate-scale-up">
          {/* Summary Card */}
          <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 md:p-8 border border-stone-200 dark:border-stone-800 shadow-sm text-center space-y-4 card-hover-effect">
            <div
              className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center animate-bounce-subtle ${
                testResult.percentage >= 70
                  ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                  : 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
              }`}
            >
              <Award size={36} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
                {testResult.percentage >= 70 ? 'Selamat! Anda Lulus Simulasi' : 'Belum Mencapai Nilai Ambang Lulus'}
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Hasil evaluasi simulasi resmi JLPT {selectedLevel}
              </p>
            </div>

            <div className="text-4xl font-extrabold text-[#C8102E] font-mono">
              {testResult.percentage}%
              <span className="text-xs text-stone-500 dark:text-stone-400 block font-normal mt-1">
                {testResult.score} dari {testResult.total} Soal Benar
              </span>
            </div>

            {/* Performance by category */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 max-w-md mx-auto text-xs">
              {Object.entries(testResult.categoryScores).map(([cat, score]) => (
                <div key={cat} className="p-3 bg-stone-50 dark:bg-[#18233C] rounded-xl border border-stone-200 dark:border-stone-700 text-center card-hover-effect">
                  <span className="text-stone-500 dark:text-stone-400 font-medium capitalize block text-[11px] truncate">
                    {cat}
                  </span>
                  <strong className="text-stone-900 dark:text-white font-mono text-sm">
                    {score.correct}/{score.total}
                  </strong>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleStartTest}
              className="flex items-center gap-2 mx-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#0F1D38] rounded-xl hover:bg-[#0A1224] btn-interactive active:scale-95"
            >
              <RotateCcw size={14} />
              <span>Coba Ujian Lagi</span>
            </button>
          </div>

          {/* Detailed Incorrect/Correct Review */}
          <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-5 animate-fade-in-up">
            <h3 className="text-base font-bold text-stone-900 dark:text-white">
              Pembahasan Lengkap & Kunci Jawaban
            </h3>

            <div className="space-y-4">
              {activeQuestions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border space-y-2 card-hover-effect ${
                      isCorrect
                        ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
                        : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs font-bold text-stone-900 dark:text-white">
                        Soal {idx + 1} ({q.category.toUpperCase()})
                      </div>
                      <span className={`text-[11px] font-semibold flex items-center gap-1 ${
                        isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'
                      }`}>
                        {isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                        <span>{isCorrect ? 'Benar' : 'Salah'}</span>
                      </span>
                    </div>

                    <div className="text-xs font-jp text-stone-800 dark:text-stone-200 whitespace-pre-line leading-relaxed">
                      {q.prompt}
                    </div>

                    <div className="text-xs space-y-1 pt-1">
                      <div>
                        <span className="text-stone-500 dark:text-stone-400">Jawaban Anda: </span>
                        <strong className={isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}>
                          {userAns !== undefined ? q.options[userAns] : 'Tidak dijawab'}
                        </strong>
                      </div>
                      {!isCorrect && (
                        <div>
                          <span className="text-stone-500 dark:text-stone-400">Kunci Jawaban yang Benar: </span>
                          <strong className="text-emerald-700 dark:text-emerald-400">
                            {q.options[q.correctIndex]}
                          </strong>
                        </div>
                      )}
                    </div>

                    <div className="p-2.5 rounded-lg bg-white dark:bg-[#18233C] border border-stone-200/80 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 leading-relaxed mt-2">
                      <strong>Penjelasan:</strong> {q.explanationId}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
