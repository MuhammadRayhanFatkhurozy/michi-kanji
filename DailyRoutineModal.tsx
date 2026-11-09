/**
 * Daily Study Routine Modal (Section 13)
 * Implements the recommended structured daily routine:
 * 1. 10 New Vocabulary words
 * 2. Review 10 previous words
 * 3. 1 Grammar topic
 * 4. Kanji practice
 * 5. 10-15 mins listening
 * 6. 5 mins shadowing
 * 7. 5-Question quick quiz with score recording & confetti!
 */

import React, { useState } from 'react';
import { UserProgress, VocabItem, KanjiItem, GrammarPoint } from '../../types';
import { storageService } from '../../services/storageService';
import { AudioButton } from './AudioButton';
import { CanvasWriter } from './CanvasWriter';
import {
  X,
  CheckCircle2,
  Circle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Volume2,
  RotateCcw,
  Trophy,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyRoutineModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onProgressUpdated: (newProgress: UserProgress) => void;
  vocabList: VocabItem[];
  kanjiList: KanjiItem[];
  grammarList: GrammarPoint[];
}

export const DailyRoutineModal: React.FC<DailyRoutineModalProps> = ({
  isOpen,
  onClose,
  progress,
  onProgressUpdated,
  vocabList,
  kanjiList,
  grammarList,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  if (!isOpen) return null;

  // Selected routine items for today
  const newVocabItems = vocabList.slice(0, 10);
  const reviewVocabItems = vocabList.slice(5, 15);
  const selectedGrammar = grammarList[0];
  const selectedKanji = kanjiList[0];

  // Quick 5-question routine quiz
  const routineQuizQuestions = [
    {
      q: 'Apa arti dari kosakata "私 (わたし)"?',
      options: ['Saya / Aku', 'Kamu', 'Dia', 'Mereka'],
      correct: 0,
      exp: '私 (watashi) adalah kata ganti orang pertama (Saya/Aku).'
    },
    {
      q: 'Partikel penanda topik kalimat dalam bahasa Jepang ditulis dengan...',
      options: ['わ', 'は (dibaca wa)', 'を', 'に'],
      correct: 1,
      exp: 'Topik kalimat ditulis dengan huruf は dan dilafalkan "wa".'
    },
    {
      q: 'Kanji "日" memiliki arti...',
      options: ['Bulan', 'Matahari / Hari', 'Pohon', 'Air'],
      correct: 1,
      exp: '日 berarti matahari, hari, atau tanggal.'
    },
    {
      q: 'Ungkapan salam yang diucapkan saat jam kerja berakhir adalah...',
      options: ['おはようございます', 'いただきます', 'お疲れ様でした (Otsukaresama deshita)', 'ごちそうさま'],
      correct: 2,
      exp: 'Otsukaresama deshita adalah ucapan terima kasih atas kerja keras hari ini.'
    },
    {
      q: 'Bentuk te-kudasai dari kata kerja "待ちます (machimasu = menunggu)" adalah...',
      options: ['待て ください', '待って ください (Matte kudasai)', '待ちて ください', '待んで ください'],
      correct: 1,
      exp: 'Kata kerja berakhiran -chimasu berubah menjadi -tte kudasai (matte kudasai).'
    }
  ];

  const handleSelectQuizAnswer = (qIndex: number, optionIndex: number) => {
    if (isQuizSubmitted) return;
    const updated = [...quizAnswers];
    updated[qIndex] = optionIndex;
    setQuizAnswers(updated);
  };

  const handleFinishRoutine = () => {
    let score = 0;
    routineQuizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) {
        score += 1;
      }
    });

    setQuizScore(score);
    setIsQuizSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}

    // Record progress safely with date-aware streak increment
    const updated = { ...progress };
    const today = new Date().toISOString().split('T')[0];
    
    // Only increment streak if this is a new calendar day
    if (updated.lastActiveDate !== today) {
      updated.streakDays += 1;
      updated.lastActiveDate = today;
    }
    
    updated.totalStudyMinutes += 30;
    updated.dailyTodayStats.vocabLearned = Math.max(updated.dailyTodayStats.vocabLearned, 10);
    updated.dailyTodayStats.grammarLearned = Math.max(updated.dailyTodayStats.grammarLearned, 1);
    updated.dailyTodayStats.minutesSpent += 30;
    updated.dailyTodayStats.quizzesCompleted += 1;
    updated.dailyTodayStats.shadowingDone = true;

    storageService.saveProgress(updated);
    onProgressUpdated(updated);
  };

  const stepTitles = [
    '1. 10 Kosakata Baru',
    '2. Review 10 Kosakata',
    '3. Tata Bahasa Hari Ini',
    '4. Latihan Menulis Kanji',
    '5. Menyimak (10 Menit)',
    '6. Shadowing (5 Menit)',
    '7. Kuis Harian (5 Soal)',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-[#131B2E] text-stone-900 dark:text-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-stone-200 dark:border-stone-700 animate-scale-up duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#18233C] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#C8102E] text-white">
                Rutinitas Harian Kanji Michi
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                Langkah {currentStep} dari 7
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#0F1D38] dark:text-white mt-1">
              {stepTitles[currentStep - 1]}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 dark:hover:text-white rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors btn-interactive"
          >
            <X size={20} />
          </button>
        </div>

        {/* Stepper Progress bar */}
        <div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 overflow-hidden">
          <div
            className="bg-[#C8102E] h-1.5 progress-bar-smooth"
            style={{ width: `${(currentStep / 7) * 100}%` }}
          />
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 animate-fade-in" key={currentStep}>
          {/* STEP 1: 10 New Vocab */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600 dark:text-stone-300">
                Dengarkan dan pelajari 10 kata baru berikut. Klik tombol audio untuk mendengarkan lafal aslinya:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {newVocabItems.map((v) => (
                  <div
                    key={v.id}
                    className="p-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50/50 dark:bg-[#18233C] flex items-center justify-between card-hover-effect"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 dark:text-white font-jp flex items-center gap-2">
                        <span>{v.kanji || v.hiragana}</span>
                        {v.kanji && (
                          <span className="text-xs text-stone-500 dark:text-stone-400 font-normal">
                            ({v.hiragana})
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">{v.romaji}</div>
                      <div className="text-xs text-stone-700 dark:text-stone-300 font-medium mt-0.5">
                        {v.meaningId}
                      </div>
                    </div>
                    <AudioButton text={v.kanji || v.hiragana} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Review Vocab */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Uji ingatan Anda: coba tebak artinya sebelum melihat terjemahannya, lalu dengarkan audionya:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {reviewVocabItems.map((v) => (
                  <div
                    key={v.id}
                    className="p-3 rounded-xl border border-stone-200 bg-white flex items-center justify-between shadow-xs"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 font-jp text-base">
                        {v.kanji || v.hiragana}
                      </div>
                      <div className="text-xs text-stone-500 font-mono">{v.romaji}</div>
                      <div className="text-xs text-[#0F1D38] font-semibold mt-1">
                        {v.meaningId}
                      </div>
                    </div>
                    <AudioButton text={v.kanji || v.hiragana} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Grammar */}
          {currentStep === 3 && selectedGrammar && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-[#FCE7EB] bg-[#FDF2F4]/60">
                <div className="text-xs font-semibold text-[#C8102E] uppercase">
                  Pola Minna no Nihongo {selectedGrammar.minnaLesson}
                </div>
                <h3 className="text-base font-bold text-stone-900 mt-0.5">
                  {selectedGrammar.title}
                </h3>
                <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                  {selectedGrammar.explanationId}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Contoh Kalimat:
                </h4>
                {selectedGrammar.examples.slice(0, 2).map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-stone-200 bg-white flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 font-jp">{ex.japanese}</div>
                      <div className="text-xs text-stone-500 font-mono">{ex.romaji}</div>
                      <div className="text-xs text-stone-700 mt-0.5">{ex.indonesian}</div>
                    </div>
                    <AudioButton text={ex.japanese} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Kanji Practice */}
          {currentStep === 4 && selectedKanji && (
            <div className="space-y-4 flex flex-col items-center">
              <div className="text-center">
                <div className="text-xs font-semibold text-stone-500">
                  Target Kanji Hari Ini: <span className="text-[#C8102E] font-bold">{selectedKanji.kanji}</span> (JLPT {selectedKanji.level})
                </div>
                <p className="text-xs text-stone-600 mt-0.5">
                  Arti: <strong>{selectedKanji.meaningId}</strong> · Onyomi: {selectedKanji.onyomi.join(', ')} · Kunyomi: {selectedKanji.kunyomi.join(', ')}
                </p>
              </div>

              <CanvasWriter
                character={selectedKanji.kanji}
                strokeCount={selectedKanji.strokeCount}
              />
            </div>
          )}

          {/* STEP 5: Listening */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600 leading-relaxed">
                Dengarkan audio dialog pendek berikut secara berulang. Latih telinga untuk menangkap partikel dan kata kunci:
              </p>
              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-700">
                    Percakapan: Di Stasiun Kereta
                  </span>
                  <AudioButton
                    text="すみません、羽田空港行きの電車は何番線ですか。四番線です。次は十分後に出ますよ。"
                    size="md"
                    showSpeedControl
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                    <div className="font-semibold text-stone-800 font-jp">
                      A: すみません、羽田空港行きの電車は何番線ですか。
                    </div>
                    <div className="text-xs text-stone-500">
                      (Permisi, kereta ke Bandara Haneda peron berapa?)
                    </div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                    <div className="font-semibold text-stone-800 font-jp">
                      B: 四番線です。次は十分後に出ますよ。
                    </div>
                    <div className="text-xs text-stone-500">
                      (Peron 4. Kereta berikutnya 10 menit lagi.)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Shadowing */}
          {currentStep === 6 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-600" />
                  <span>Teknik Shadowing (5 Menit)</span>
                </div>
                <p className="leading-relaxed">
                  Tirukan suara pembicara persis saat audio sedang berbunyi (hanya terlambat sepersekian detik). Jangan tunggu sampai kalimat selesai!
                </p>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900 text-sm font-jp">
                      初めまして。ブディです。どうぞよろしくお願いします。
                    </div>
                    <div className="text-xs text-stone-500 font-mono">
                      Hajimemashite. Budi desu. Douzo yoroshiku onegai shimasu.
                    </div>
                  </div>
                  <AudioButton
                    text="初めまして。ブディです。どうぞよろしくお願いします。"
                    size="md"
                    showSpeedControl
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: Quiz */}
          {currentStep === 7 && (
            <div className="space-y-5">
              {!isQuizSubmitted ? (
                <>
                  <p className="text-xs text-stone-600">
                    Selesaikan 5 soal kuis evaluasi harian berikut untuk mencatat pencapaian hari ini:
                  </p>
                  <div className="space-y-4">
                    {routineQuizQuestions.map((q, qIdx) => (
                      <div
                        key={qIdx}
                        className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2"
                      >
                        <div className="text-xs font-semibold text-stone-900">
                          {qIdx + 1}. {q.q}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = quizAnswers[qIdx] === optIdx;
                            return (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                                className={`px-3 py-2 text-xs rounded-lg text-left transition-all border ${
                                  isSelected
                                    ? 'bg-[#0F1D38] text-white border-[#0F1D38] font-medium shadow-xs'
                                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                /* Quiz Results */
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Trophy size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Luar Biasa! Rutinitas Selesai
                    </h3>
                    <p className="text-sm text-stone-600 mt-1">
                      Skor kuis harian Anda: <strong className="text-[#C8102E]">{quizScore} / 5</strong>
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-xs text-stone-600">
                    Progres harian, streak, dan waktu belajar berhasil disimpan ke sistem Kanji Michi.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#18233C] flex items-center justify-between">
          <button
            type="button"
            disabled={currentStep === 1}
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors btn-interactive ${
              currentStep === 1
                ? 'text-stone-300 dark:text-stone-600 cursor-not-allowed'
                : 'text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 active:scale-95'
            }`}
          >
            <ArrowLeft size={14} />
            <span>Sebelumnya</span>
          </button>

          <div className="flex items-center gap-2">
            {currentStep < 7 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F1D38] hover:bg-[#0A1224] rounded-lg transition-all btn-interactive active:scale-95 shadow-xs"
              >
                <span>Lanjut ke Langkah {currentStep + 1}</span>
                <ArrowRight size={14} />
              </button>
            ) : !isQuizSubmitted ? (
              <button
                type="button"
                disabled={!routineQuizQuestions.every((_, idx) => quizAnswers[idx] !== undefined)}
                onClick={handleFinishRoutine}
                className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white rounded-lg transition-all btn-interactive ${
                  routineQuizQuestions.every((_, idx) => quizAnswers[idx] !== undefined)
                    ? 'bg-[#C8102E] hover:bg-[#A00C24] shadow-sm active:scale-95 animate-pulse-subtle'
                    : 'bg-stone-300 dark:bg-stone-700 cursor-not-allowed text-stone-500'
                }`}
              >
                <Sparkles size={14} />
                <span>Kirim Jawaban & Selesaikan</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors btn-interactive active:scale-95 shadow-xs"
              >
                Selesai & Tutup
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
