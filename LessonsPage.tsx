/**
 * Lessons Curriculum Module
 * Integrates Minna no Nihongo Shokyu I (25 Lessons) and Irodori Practical Japanese
 * (Starter A1, Elementary 1-2 A2, Pre-Intermediate A2/B1) based on the official study guide.
 */

import React, { useState } from 'react';
import { LessonItem, CurriculumTrack, UserProgress } from '../../types';
import { AudioButton } from '../common/AudioButton';
import { storageService } from '../../services/storageService';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Compass,
  MessageSquare,
  HelpCircle,
  X,
  Volume2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LessonsPageProps {
  lessonsList: LessonItem[];
  progress: UserProgress;
  onProgressUpdated: (newProgress: UserProgress) => void;
  showRomajiDefault?: boolean;
}

export const LessonsPage: React.FC<LessonsPageProps> = ({
  lessonsList,
  progress,
  onProgressUpdated,
  showRomajiDefault = true,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<CurriculumTrack | 'all'>('all');
  const [activeLesson, setActiveLesson] = useState<LessonItem | null>(null);
  const [showRomaji, setShowRomaji] = useState(showRomajiDefault);
  const [quizSelectedAnswers, setQuizSelectedAnswers] = useState<Record<number, number>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [justCompletedId, setJustCompletedId] = useState<string | null>(null);

  const filteredLessons = lessonsList.filter((l) => {
    if (selectedTrack !== 'all' && l.track !== selectedTrack) return false;
    return true;
  });

  const handleOpenLesson = (lesson: LessonItem) => {
    setActiveLesson(lesson);
    setQuizSelectedAnswers({});
    setIsQuizSubmitted(false);
  };

  const handleToggleComplete = (lessonId: string) => {
    const updated = { ...progress };
    if (!updated.completedLessons.includes(lessonId)) {
      updated.completedLessons.push(lessonId);
      updated.totalStudyMinutes += 25;
      updated.dailyTodayStats.minutesSpent += 25;
      storageService.saveProgress(updated);
      onProgressUpdated(updated);
      setJustCompletedId(lessonId);
      setTimeout(() => {
        setJustCompletedId((curr) => (curr === lessonId ? null : curr));
      }, 3500);
      try {
        confetti({ particleCount: 60, spread: 65 });
      } catch {}
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0F1D38] text-white">
                Kurikulum Terpadu
              </span>
              <span className="text-xs text-stone-500 font-medium">
                Minna no Nihongo & Irodori Can-Do
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] mt-1">
              Jalur Belajar Terstruktur Menuju Jepang
            </h1>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Gunakan Minna no Nihongo sebagai tulang punggung tata bahasa & pola kalimat, dan gunakan Irodori untuk melatih kemampuan komunikasi nyata dalam kehidupan serta pekerjaan di Jepang.
            </p>
          </div>

          {/* Track selector */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl">
            <button
              type="button"
              onClick={() => setSelectedTrack('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedTrack === 'all'
                  ? 'bg-white text-[#0F1D38] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Semua Jalur
            </button>
            <button
              type="button"
              onClick={() => setSelectedTrack('minna')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedTrack === 'minna'
                  ? 'bg-white text-[#0F1D38] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Minna no Nihongo
            </button>
            <button
              type="button"
              onClick={() => setSelectedTrack('irodori')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedTrack === 'irodori'
                  ? 'bg-white text-[#0F1D38] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Irodori Practical
            </button>
          </div>
        </div>
      </div>

      {/* Curriculum Comparison Guide Banner (From PDF Summary) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-[#0F1D38] text-white space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Jalur 1: Minna no Nihongo Shokyu I
            </span>
            <span className="text-[10px] text-stone-300 font-mono">25 Pelajaran</span>
          </div>
          <h3 className="text-sm font-bold text-white">Fondasi Pola Kalimat Sistematis</h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Menyajikan penguasaan bertingkat dari Sentence Patterns, Contoh Kalimat, Percakapan (Kaiwa), hingga Latihan A-B-C untuk membangun ketepatan bentuk kalimat bahasa Jepang.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
              Jalur 2: Irodori Practical Japanese
            </span>
            <span className="text-[10px] text-stone-500 font-mono">A1 Starter – A2/B1</span>
          </div>
          <h3 className="text-sm font-bold text-[#0F1D38]">Target Komunikasi Nyata (Can-Do)</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Fokus kebutuhan langsung hidup dan bekerja di Jepang: perkenalan tim, memesan makanan, belanja, stasiun, hingga komunikasi caregiver (Kaigo) dengan penutur asli.
          </p>
        </div>
      </div>

      {/* Lessons List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLessons.map((item) => {
          const isCompleted = progress.completedLessons.includes(item.id);
          const wasJustCompleted = justCompletedId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => handleOpenLesson(item)}
              className={`bg-white rounded-2xl p-5 border shadow-xs card-hover-effect active:scale-98 animate-fade-in cursor-pointer flex flex-col justify-between group space-y-4 ${
                isCompleted
                  ? 'border-emerald-200/90 bg-linear-to-b from-emerald-50/20 to-white'
                  : 'border-stone-200/90'
              } ${wasJustCompleted ? 'animate-progress-pulse ring-2 ring-emerald-400/50' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded transition-colors duration-300 ${
                      item.track === 'minna'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200/60'
                        : 'bg-[#FDF2F4] text-[#C8102E] border border-[#FCE7EB]'
                    }`}
                  >
                    {item.level}
                  </span>

                  {isCompleted && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70 animate-check-pop">
                      <CheckCircle2 size={13} className="fill-emerald-100 text-emerald-600" />
                      <span>Selesai</span>
                    </span>
                  )}
                </div>

                <div className="mt-2.5">
                  <div className="text-[11px] text-stone-400 font-jp">{item.titleJp}</div>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-[#C8102E] transition-colors mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-2">
                  {item.descriptionId}
                </p>

                <div className="mt-3 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] text-stone-700">
                  <strong className="text-stone-900 font-semibold">Can-Do:</strong> {item.canDoObjective}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0F1D38] group-hover:text-[#C8102E]">
                <span>Buka Pelajaran & Dialog</span>
                <ArrowRight size={14} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Lesson Detail Modal */}
      {activeLesson && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveLesson(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden border border-stone-200 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#0F1D38] text-white">
                    {activeLesson.level}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    {activeLesson.track === 'minna' ? 'Minna no Nihongo Shokyu I' : 'Irodori Practical'}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[#0F1D38] mt-1">
                  {activeLesson.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveLesson(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Dynamic Progress & Completion Banner */}
              {progress.completedLessons.includes(activeLesson.id) && (
                <div
                  className={`p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-500 ease-out ${
                    justCompletedId === activeLesson.id
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 animate-check-pop animate-glow-emerald shadow-xs'
                      : 'bg-emerald-50/70 border-emerald-200 text-emerald-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-emerald-600 fill-emerald-100 shrink-0" />
                    <div>
                      <strong className="font-semibold block text-emerald-900">Pelajaran Berhasil Diselesaikan!</strong>
                      <p className="text-[11px] text-emerald-700 mt-0.5">
                        Waktu belajar bertambah +25 menit dan tercatat pada laporan progres dashboard.
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-emerald-200/80 text-emerald-950 px-2.5 py-1 rounded-lg shrink-0">
                    +25m
                  </span>
                </div>
              )}

              {/* Can Do Objective */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-950">
                  <Sparkles size={14} className="text-emerald-600" />
                  <span>Target Kemampuan (Can-Do Objective):</span>
                </div>
                <p className="leading-relaxed font-medium">{activeLesson.canDoObjective}</p>
              </div>

              {/* Dialogue (Percakapan / Kaiwa) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                    <MessageSquare size={15} className="text-[#C8102E]" />
                    <span>Percakapan Kontekstual (会話 - Kaiwa):</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowRomaji(!showRomaji)}
                    className="text-[11px] text-stone-500 hover:text-stone-800 font-medium"
                  >
                    {showRomaji ? 'Sembunyikan Romaji' : 'Tampilkan Romaji'}
                  </button>
                </div>

                <div className="space-y-2.5">
                  {activeLesson.dialogue.map((line, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-stone-200 bg-white flex items-start justify-between gap-3 shadow-2xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                            {line.speaker}
                          </span>
                          <span className="font-semibold text-stone-900 font-jp text-sm">
                            {line.japanese}
                          </span>
                        </div>
                        {showRomaji && (
                          <div className="text-xs text-stone-400 font-mono">
                            {line.romaji}
                          </div>
                        )}
                        <div className="text-xs text-stone-700 font-medium">
                          {line.indonesian}
                        </div>
                      </div>

                      <AudioButton text={line.japanese} size="sm" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural or Workplace Note */}
              {activeLesson.culturalNote && (
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-stone-700 space-y-1">
                  <span className="font-bold text-amber-900">
                    Catatan Budaya & Etika Jepang:
                  </span>
                  <p className="leading-relaxed">{activeLesson.culturalNote}</p>
                </div>
              )}

              {/* Comprehension Quiz */}
              {activeLesson.quiz && activeLesson.quiz.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-stone-100">
                  <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                    <HelpCircle size={15} className="text-[#0F1D38]" />
                    <span>Kuis Pemahaman Pelajaran:</span>
                  </h3>

                  <div className="space-y-3">
                    {activeLesson.quiz.map((q, qIdx) => {
                      const selectedAns = quizSelectedAnswers[qIdx];
                      const isAnswered = selectedAns !== undefined;
                      const isCorrect = selectedAns === q.answerIndex;

                      return (
                        <div
                          key={qIdx}
                          className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2.5"
                        >
                          <div className="text-xs font-semibold text-stone-900">
                            {qIdx + 1}. {q.question}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isChosen = selectedAns === optIdx;
                              let style = 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100';
                              if (isAnswered) {
                                if (optIdx === q.answerIndex) {
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
                                    setQuizSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
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
                              <strong>{isCorrect ? 'Benar!' : 'Kurang Tepat:'}</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleToggleComplete(activeLesson.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 ease-out active:scale-95 shadow-xs ${
                  progress.completedLessons.includes(activeLesson.id)
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 ring-2 ring-emerald-400/20'
                    : 'bg-[#C8102E] text-white hover:bg-[#A00C24] hover:shadow-md'
                } ${justCompletedId === activeLesson.id ? 'animate-progress-pulse' : ''}`}
              >
                <CheckCircle2
                  size={16}
                  className={`transition-transform duration-300 ${
                    progress.completedLessons.includes(activeLesson.id)
                      ? 'scale-110 text-emerald-700 animate-check-pop'
                      : ''
                  }`}
                />
                <span>
                  {progress.completedLessons.includes(activeLesson.id)
                    ? '✓ Pelajaran Sudah Selesai'
                    : 'Tandai Selesai & Tambah Waktu (+25m)'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveLesson(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors"
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
