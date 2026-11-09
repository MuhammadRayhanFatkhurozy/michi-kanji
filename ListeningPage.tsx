/**
 * Listening Comprehension (Choukai) & Shadowing Module
 * Features slow playback speed (0.5x, 0.75x, 1.0x), sentence-by-sentence audio,
 * dialogue playback, native demo audio asset player, and comprehension tests.
 */

import React, { useState } from 'react';
import { ListeningItem } from '../../types';
import { LISTENING_DATA, SAMPLE_AUDIO_URL } from '../../data/listeningData';
import { AudioButton } from '../common/AudioButton';
import { audioService } from '../../services/audioService';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Volume2,
  Check,
  Music,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ListeningPage: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<ListeningItem>(LISTENING_DATA[0]);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<number | null>(null);
  const [isPlayingFullDialogue, setIsPlayingFullDialogue] = useState<boolean>(false);
  const [isPlayingDemoAsset, setIsPlayingDemoAsset] = useState<boolean>(false);

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Play dialogue sentence by sentence sequentially
  const handlePlayFullDialogue = () => {
    if (isPlayingFullDialogue) {
      audioService.stop();
      setIsPlayingFullDialogue(false);
      setActiveSentenceIndex(null);
      return;
    }

    setIsPlayingFullDialogue(true);
    let currentIdx = 0;

    const playNext = () => {
      if (currentIdx >= selectedScenario.dialogue.length) {
        setIsPlayingFullDialogue(false);
        setActiveSentenceIndex(null);
        return;
      }

      setActiveSentenceIndex(currentIdx);
      const line = selectedScenario.dialogue[currentIdx];
      audioService.speak(line.japanese, {
        rate: playbackSpeed,
        onEnd: () => {
          currentIdx += 1;
          setTimeout(playNext, 600);
        },
        onError: () => {
          setIsPlayingFullDialogue(false);
          setActiveSentenceIndex(null);
        },
      });
    };

    playNext();
  };

  // Play external native demo audio asset provided in user prompt
  const handlePlayDemoAsset = () => {
    if (isPlayingDemoAsset) {
      audioService.stop();
      setIsPlayingDemoAsset(false);
      return;
    }

    setIsPlayingDemoAsset(true);
    audioService.playAudioUrl(SAMPLE_AUDIO_URL, {
      rate: playbackSpeed,
      onEnd: () => setIsPlayingDemoAsset(false),
      onError: () => {
        setIsPlayingDemoAsset(false);
        // Fallback speak explanation
        audioService.speak('羽田空港行きの電車は四番線です。次は十分後に出ますよ。', {
          rate: playbackSpeed,
        });
      },
    });
  };

  const handleSelectAnswer = (qIndex: number, optIndex: number) => {
    if (quizScore !== null) return;
    setUserAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    selectedScenario.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    setQuizScore(score);
    try {
      confetti({ particleCount: 50 });
    } catch {}
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setQuizScore(null);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs animate-fade-in-up">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0F1D38] dark:bg-[#18233C] text-white">
                Modul Menyimak (聴解 - Choukai)
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                Audio Percakapan Asli & Shadowing
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] dark:text-white mt-1">
              Latihan Menyimak & Pemahaman Suara
            </h1>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 max-w-2xl leading-relaxed">
              Dengarkan percakapan bahasa Jepang alami dengan kontrol kecepatan lambat (0.5x, 0.75x, 1x), pemutaran kalimat per kalimat, dan uji pemahaman lewat soal listening.
            </p>
          </div>

          {/* Speed Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">Kecepatan:</span>
            <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl">
              {[0.5, 0.75, 1.0].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setPlaybackSpeed(rate)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg transition-all btn-interactive active:scale-95 ${
                    playbackSpeed === rate
                      ? 'bg-white dark:bg-[#131B2E] text-[#0F1D38] dark:text-white shadow-xs'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {LISTENING_DATA.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedScenario(item);
                resetQuiz();
              }}
              className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all border text-left card-hover-effect btn-interactive active:scale-95 ${
                selectedScenario.id === item.id
                  ? 'bg-[#0F1D38] text-white border-[#0F1D38] shadow-xs'
                  : 'bg-white dark:bg-[#18233C] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/20">
                  {item.level}
                </span>
                <span>{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Dialogue Player & Dialogue Lines */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Dialogue Player (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-5 animate-fade-in-up">
            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-stone-50 dark:bg-[#18233C] border border-stone-200 dark:border-stone-700">
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  {selectedScenario.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  {selectedScenario.scenario}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Play full dialogue */}
                <button
                  type="button"
                  onClick={handlePlayFullDialogue}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all shadow-xs btn-interactive active:scale-95 ${
                    isPlayingFullDialogue
                      ? 'bg-rose-600 text-white animate-pulse'
                      : 'bg-[#C8102E] hover:bg-[#A00C24] text-white'
                  }`}
                >
                  {isPlayingFullDialogue ? <Pause size={15} /> : <Play size={15} />}
                  <span>{isPlayingFullDialogue ? 'Hentikan Audio' : 'Putar Seluruh Dialog'}</span>
                </button>

                {/* Sample demo audio asset player */}
                <button
                  type="button"
                  onClick={handlePlayDemoAsset}
                  title="Putar sampel rekaman audio penutur asli"
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-all btn-interactive active:scale-95 ${
                    isPlayingDemoAsset
                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-white dark:bg-[#18233C] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
                  }`}
                >
                  <Music size={14} className="text-amber-600 animate-pulse" />
                  <span>Sampel Demo Audio</span>
                </button>
              </div>
            </div>

            {/* Sentence-by-sentence dialogue list */}
            <div className="space-y-3">
              {selectedScenario.dialogue.map((line, idx) => {
                const isActive = activeSentenceIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-4 card-hover-effect ${
                      isActive
                        ? 'bg-[#FDF2F4] dark:bg-rose-950/30 border-[#C8102E] shadow-sm scale-[1.01] ring-2 ring-[#C8102E]/20'
                        : 'bg-white dark:bg-[#131B2E] border-stone-200 dark:border-stone-800 hover:border-stone-300'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded transition-colors ${
                          isActive ? 'bg-[#C8102E] text-white' : 'text-stone-500 bg-stone-100 dark:bg-stone-800 dark:text-stone-300'
                        }`}>
                          {line.speaker}
                        </span>
                        <span className="font-semibold text-stone-900 dark:text-white font-jp text-base">
                          {line.japanese}
                        </span>
                      </div>
                      <div className="text-xs text-stone-400 font-mono">
                        {line.romaji}
                      </div>
                      <div className="text-xs text-stone-700 dark:text-stone-300 font-medium pt-0.5">
                        {line.indonesian}
                      </div>
                    </div>

                    <AudioButton text={line.japanese} size="sm" />
                  </div>
                );
              })}
            </div>

            {/* Shadowing Tip */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-amber-950">
                <Sparkles size={14} className="text-amber-600" />
                <span>Tips Shadowing:</span>
              </div>
              <p className="leading-relaxed">{selectedScenario.shadowingTips}</p>
            </div>
          </div>
        </div>

        {/* Right: Comprehension Quiz (1 Col) */}
        <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-5 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
              <HelpCircle size={16} className="text-[#0F1D38] dark:text-white" />
              <span>Kuis Pemahaman Menyimak</span>
            </h3>
            {quizScore !== null && (
              <button
                type="button"
                onClick={resetQuiz}
                className="text-xs text-[#C8102E] font-medium hover:underline flex items-center gap-1 btn-interactive"
              >
                <RotateCcw size={12} /> Ulangi
              </button>
            )}
          </div>

          <div className="space-y-4">
            {selectedScenario.questions.map((q, qIdx) => {
              const selectedAns = userAnswers[qIdx];
              const isAnswered = quizScore !== null;
              const isCorrect = selectedAns === q.correctIndex;

              return (
                <div key={qIdx} className="space-y-2 p-3.5 bg-stone-50 dark:bg-[#18233C] rounded-xl border border-stone-200 dark:border-stone-700 card-hover-effect">
                  <div className="text-xs font-semibold text-stone-900 dark:text-white">
                    {qIdx + 1}. {q.question}
                  </div>

                  <div className="space-y-1.5">
                    {q.options.map((opt, optIdx) => {
                      const isChosen = selectedAns === optIdx;
                      let btnStyle = 'bg-white dark:bg-[#131B2E] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800';

                      if (isAnswered) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-semibold';
                        } else if (isChosen) {
                          btnStyle = 'bg-rose-600 text-white border-rose-600';
                        }
                      } else if (isChosen) {
                        btnStyle = 'bg-[#0F1D38] text-white border-[#0F1D38] font-semibold';
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectAnswer(qIdx, optIdx)}
                          className={`w-full text-left p-2.5 text-xs rounded-lg border transition-all btn-interactive active:scale-98 ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="text-[11px] text-stone-600 dark:text-stone-300 pt-1 leading-relaxed border-t border-stone-200 dark:border-stone-700 animate-fade-in">
                      <strong>Penjelasan:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {quizScore === null ? (
            <button
              type="button"
              disabled={Object.keys(userAnswers).length < selectedScenario.questions.length}
              onClick={handleSubmitQuiz}
              className={`w-full py-2.5 text-xs font-semibold rounded-xl transition-all btn-interactive ${
                Object.keys(userAnswers).length === selectedScenario.questions.length
                  ? 'bg-[#C8102E] hover:bg-[#A00C24] text-white shadow-sm active:scale-98'
                  : 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
              }`}
            >
              Periksa Jawaban Menyimak
            </button>
          ) : (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-center animate-scale-up">
              <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                Skor Listening Anda:
              </div>
              <div className="text-xl font-bold text-emerald-900 dark:text-emerald-200 font-mono mt-0.5">
                {quizScore} / {selectedScenario.questions.length} Benar
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
