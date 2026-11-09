/**
 * Complete Hiragana Learning Module
 * Gojuon (あ-ん), Dakuten, Handakuten, Youon, Sokuon, Long Vowel rules,
 * writing canvas practice, audio playback, recognition quizzes, and matching exercises.
 */

import React, { useState, useRef } from 'react';
import { KanaCharacter, KanaCategory } from '../../types';
import { HIRAGANA_DATA, KANA_RULES_INFO } from '../../data/kanaData';
import { AudioButton } from '../common/AudioButton';
import { CanvasWriter } from '../common/CanvasWriter';
import {
  Search,
  BookOpen,
  HelpCircle,
  Sparkles,
  X,
  Volume2,
  RefreshCw,
  Check,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HiraganaPageProps {
  onNavigateToKatakana: () => void;
}

export const HiraganaPage: React.FC<HiraganaPageProps> = ({ onNavigateToKatakana }) => {
  const [selectedCategory, setSelectedCategory] = useState<KanaCategory | 'all'>('gojuon');
  const [selectedChar, setSelectedChar] = useState<KanaCharacter | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'grid' | 'rules' | 'quiz' | 'matching'>('grid');

  // Touch swipe coordinates
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Interactive Quiz state
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);

  // Matching game state
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [selectedCardA, setSelectedCardA] = useState<string | null>(null);
  const [selectedCardB, setSelectedCardB] = useState<string | null>(null);

  const filteredList = HIRAGANA_DATA.filter((k) => {
    if (selectedCategory !== 'all' && k.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return k.char.includes(q) || k.romaji.toLowerCase().includes(q) || k.exampleMeaningId.toLowerCase().includes(q);
    }
    return true;
  });

  const currentCharIndex = selectedChar
    ? filteredList.findIndex((item) => item.char === selectedChar.char)
    : -1;

  const handleNextChar = () => {
    if (filteredList.length === 0 || currentCharIndex === -1) return;
    const nextIdx = (currentCharIndex + 1) % filteredList.length;
    setSlideDirection('right');
    setSelectedChar(filteredList[nextIdx]);
  };

  const handlePrevChar = () => {
    if (filteredList.length === 0 || currentCharIndex === -1) return;
    const prevIdx = (currentCharIndex - 1 + filteredList.length) % filteredList.length;
    setSlideDirection('left');
    setSelectedChar(filteredList[prevIdx]);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartXRef.current;
    const diffY = touchEndY - touchStartYRef.current;

    // Horizontal swipe threshold: 35px, and must be predominantly horizontal
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        handleNextChar();
      } else {
        handlePrevChar();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // 5 Quiz questions
  const quizList = [
    { char: 'あ', correctRomaji: 'a', options: ['a', 'o', 'e', 'u'] },
    { char: 'し', correctRomaji: 'shi', options: ['sa', 'shi', 'su', 'se'] },
    { char: 'ん', correctRomaji: 'n', options: ['m', 'n', 'ng', 'r'] },
    { char: 'が', correctRomaji: 'ga', options: ['ka', 'ga', 'ba', 'da'] },
    { char: 'きょ', correctRomaji: 'kyo', options: ['kyo', 'kya', 'kyu', 'sho'] },
  ];

  const handleSelectQuizAnswer = (optionIdx: number) => {
    if (selectedQuizOption !== null) return;
    setSelectedQuizOption(optionIdx);

    const isCorrect = quizList[quizQuestionIndex].options[optionIdx] === quizList[quizQuestionIndex].correctRomaji;
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (quizQuestionIndex + 1 < quizList.length) {
        setQuizQuestionIndex((prev) => prev + 1);
        setSelectedQuizOption(null);
      } else {
        setQuizFinished(true);
        try {
          confetti({ particleCount: 50 });
        } catch {}
      }
    }, 1200);
  };

  const resetQuiz = () => {
    setQuizQuestionIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
    setSelectedQuizOption(null);
  };

  // Matching game items (4 pairs)
  const matchChars = ['あ', 'い', 'う', 'え'];
  const matchRomajis = ['u', 'a', 'e', 'i'];

  const handleSelectMatchA = (char: string) => {
    if (matchedPairs.includes(char)) return;
    setSelectedCardA(char);
    checkMatch(char, selectedCardB);
  };

  const handleSelectMatchB = (romaji: string) => {
    const pairChar = matchChars.find(
      (c) => HIRAGANA_DATA.find((item) => item.char === c)?.romaji === romaji
    );
    if (!pairChar || matchedPairs.includes(pairChar)) return;
    setSelectedCardB(romaji);
    checkMatch(selectedCardA, romaji);
  };

  const checkMatch = (char: string | null, romaji: string | null) => {
    if (!char || !romaji) return;
    const targetRomaji = HIRAGANA_DATA.find((k) => k.char === char)?.romaji;
    if (targetRomaji === romaji) {
      setMatchedPairs((prev) => [...prev, char]);
      setSelectedCardA(null);
      setSelectedCardB(null);
      if (matchedPairs.length + 1 === matchChars.length) {
        try {
          confetti({ particleCount: 60 });
        } catch {}
      }
    } else {
      setTimeout(() => {
        setSelectedCardA(null);
        setSelectedCardB(null);
      }, 700);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#C8102E] text-white">
                Modul Aksara Kana
              </span>
              <span className="text-xs text-stone-500 font-medium">Sistem Penulisan Hiragana</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] mt-1">
              Hiragana Lengkap (平仮名)
            </h1>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Kuasai seluruh gojuon 46 huruf dasar, dakuten, handakuten, konsonan ganda (sokuon), dan aturan vokal panjang dengan audio lafal penutur asli.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onNavigateToKatakana}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              Beralih ke Katakana (ア) →
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="w-full sm:w-auto overflow-x-auto pb-1 -mb-1 scrollbar-none">
            <div className="inline-flex items-center gap-1 p-1 bg-stone-100 rounded-xl min-w-max">
              <button
                type="button"
                onClick={() => setActiveTab('grid')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'grid'
                    ? 'bg-white text-[#0F1D38] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Tabel Aksara
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('rules')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'rules'
                    ? 'bg-white text-[#0F1D38] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Aturan & Jebakan
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('quiz')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'quiz'
                    ? 'bg-white text-[#0F1D38] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Kuis Pengenalan
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('matching')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'matching'
                    ? 'bg-white text-[#0F1D38] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Game Pasangan
              </button>
            </div>
          </div>

          {activeTab === 'grid' && (
            <div className="relative w-full sm:w-60">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari huruf atau romaji..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#C8102E]/20"
              />
            </div>
          )}
        </div>
      </div>

      {/* TAB 1: Grid Mode */}
      {activeTab === 'grid' && (
        <div className="space-y-4">
          {/* Subcategories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'gojuon', label: 'Gojuon Dasar (あ-ん)' },
              { id: 'dakuten', label: 'Dakuten (が-ぼ)' },
              { id: 'handakuten', label: 'Handakuten (ぱ-ぽ)' },
              { id: 'youon', label: 'Youon (きゃ-ぴゃ)' },
              { id: 'all', label: 'Semua Huruf' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F1D38] text-white border-[#0F1D38]'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {filteredList.map((item) => (
              <div
                key={item.char}
                onClick={() => setSelectedChar(item)}
                className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs card-hover-effect active:scale-95 animate-fade-in cursor-pointer flex flex-col items-center justify-between group"
              >
                <div className="w-full flex items-center justify-between text-[11px] text-stone-400">
                  <span className="font-mono">{item.strokeCount} str</span>
                  <AudioButton text={item.char} size="sm" />
                </div>

                <div className="my-2 text-4xl font-jp text-stone-900 group-hover:scale-110 group-hover:text-[#C8102E] transition-transform font-bold">
                  {item.char}
                </div>

                <div className="text-xs font-mono font-bold text-stone-700">{item.romaji}</div>

                <div className="text-[10px] text-stone-500 text-center truncate w-full mt-1">
                  {item.exampleWord} ({item.exampleMeaningId})
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: Rules */}
      {activeTab === 'rules' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 space-y-4">
            <h3 className="text-base font-bold text-stone-900">
              {KANA_RULES_INFO.sokuon.title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {KANA_RULES_INFO.sokuon.description}
            </p>
            <div className="space-y-2 pt-2">
              {KANA_RULES_INFO.sokuon.examples.map((ex, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900 font-jp text-sm">{ex.word}</div>
                    <div className="text-xs text-stone-500 font-mono">{ex.romaji} — {ex.meaning}</div>
                    <div className="text-[11px] text-stone-600 mt-0.5">{ex.note}</div>
                  </div>
                  <AudioButton text={ex.word} size="sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 space-y-4">
            <h3 className="text-base font-bold text-stone-900">
              {KANA_RULES_INFO.longVowels.title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {KANA_RULES_INFO.longVowels.description}
            </p>
            <div className="space-y-2 pt-2">
              {KANA_RULES_INFO.longVowels.examples.map((ex, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-semibold text-stone-900 text-xs">{ex.word}</div>
                  <div className="text-xs text-[#C8102E] font-medium mt-0.5">{ex.contrast}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 p-6 bg-white rounded-2xl border border-stone-200 space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-500" />
              <span>Kesalahan Membaca Paling Sering Terjadi (Trap)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {KANA_RULES_INFO.commonMistakes.map((m, idx) => (
                <div key={idx} className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-200 space-y-1">
                  <div className="font-bold text-xs text-amber-900">{m.title}</div>
                  <div className="text-xs text-stone-600 leading-relaxed">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Quiz */}
      {activeTab === 'quiz' && (
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl border border-stone-200 shadow-sm text-center space-y-6">
          {!quizFinished ? (
            <>
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>Soal {quizQuestionIndex + 1} dari {quizList.length}</span>
                <span>Skor: {quizScore}</span>
              </div>

              <div>
                <div className="text-xs text-stone-500 font-semibold uppercase">Pilihlah Romaji yang Sesuai:</div>
                <div className="text-7xl font-jp font-bold text-stone-900 my-4">
                  {quizList[quizQuestionIndex].char}
                </div>
                <AudioButton text={quizList[quizQuestionIndex].char} size="sm" />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {quizList[quizQuestionIndex].options.map((opt, optIdx) => {
                  const isSelected = selectedQuizOption === optIdx;
                  const isCorrect = opt === quizList[quizQuestionIndex].correctRomaji;

                  let btnStyle = 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200';
                  if (selectedQuizOption !== null) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-600 text-white border-rose-600';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelectQuizAnswer(optIdx)}
                      className={`p-3 text-sm font-mono font-bold rounded-xl border transition-all ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="space-y-4 py-4">
              <Sparkles size={48} className="mx-auto text-amber-500" />
              <h3 className="text-xl font-bold text-stone-900">Kuis Selesai!</h3>
              <p className="text-sm text-stone-600">
                Skor Anda: <strong className="text-[#C8102E] font-mono">{quizScore} / {quizList.length}</strong>
              </p>
              <button
                type="button"
                onClick={resetQuiz}
                className="flex items-center gap-2 mx-auto px-4 py-2 text-xs font-semibold text-white bg-[#0F1D38] rounded-xl hover:bg-[#0A1224]"
              >
                <RefreshCw size={14} />
                <span>Ulangi Kuis</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: Matching */}
      {activeTab === 'matching' && (
        <div className="max-w-lg mx-auto p-4 sm:p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4 sm:space-y-5">
          <div className="text-center">
            <h3 className="text-base font-bold text-stone-900">Game Pasangan Aksara & Romaji</h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Klik satu huruf Hiragana di kolom kiri, lalu klik romaji yang cocok di kolom kanan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Left Column */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-400 text-center uppercase tracking-wider">Hiragana</div>
              {matchChars.map((char) => {
                const isMatched = matchedPairs.includes(char);
                const isSelected = selectedCardA === char;

                return (
                  <button
                    key={char}
                    type="button"
                    disabled={isMatched}
                    onClick={() => handleSelectMatchA(char)}
                    className={`w-full p-3 sm:p-4 rounded-xl text-xl sm:text-2xl font-jp font-bold border transition-all active:scale-95 ${
                      isMatched
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-200 opacity-60'
                        : isSelected
                        ? 'bg-[#0F1D38] text-white border-[#0F1D38]'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    {char}
                  </button>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-400 text-center uppercase tracking-wider">Romaji</div>
              {matchRomajis.map((romaji) => {
                const pairChar = matchChars.find(
                  (c) => HIRAGANA_DATA.find((item) => item.char === c)?.romaji === romaji
                );
                const isMatched = Boolean(pairChar && matchedPairs.includes(pairChar));
                const isSelected = selectedCardB === romaji;

                return (
                  <button
                    key={romaji}
                    type="button"
                    disabled={isMatched}
                    onClick={() => handleSelectMatchB(romaji)}
                    className={`w-full p-3 sm:p-4 rounded-xl text-base sm:text-lg font-mono font-bold border transition-all active:scale-95 ${
                      isMatched
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-200 opacity-60'
                        : isSelected
                        ? 'bg-[#C8102E] text-white border-[#C8102E]'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    {romaji}
                  </button>
                );
              })}
            </div>
          </div>

          {matchedPairs.length === matchChars.length && (
            <div className="text-center pt-2">
              <div className="text-xs font-bold text-emerald-600 mb-2">Semua Pasangan Cocok!</div>
              <button
                type="button"
                onClick={() => setMatchedPairs([])}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700"
              >
                Main Lagi
              </button>
            </div>
          )}
        </div>
      )}

      {/* Character Detail & Canvas Modal - Compact & Swipeable with Smooth Animation */}
      {selectedChar && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedChar(null)}
        >
          <div
            className="bg-white dark:bg-[#131B2E] rounded-3xl shadow-2xl w-[94vw] max-w-sm sm:max-w-md p-3.5 sm:p-4.5 border border-stone-200 dark:border-stone-700/80 max-h-[92vh] overflow-y-auto space-y-2.5 sm:space-y-3"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Modal Top Bar: Category, Stroke Count, Index indicator, Prev/Next arrows & Close */}
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                  {selectedChar.category.toUpperCase()}
                </span>
                <span className="text-[10px] sm:text-xs text-stone-400 font-mono">
                  {selectedChar.strokeCount} Goresan
                </span>
                {currentCharIndex !== -1 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#C8102E]/10 dark:bg-[#C8102E]/20 text-[#C8102E] dark:text-rose-400 font-bold">
                    {currentCharIndex + 1}/{filteredList.length}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevChar}
                  className="p-1 sm:p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors btn-interactive"
                  title="Huruf sebelumnya (atau geser kanan)"
                  aria-label="Huruf sebelumnya"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNextChar}
                  className="p-1 sm:p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors btn-interactive"
                  title="Huruf berikutnya (atau geser kiri)"
                  aria-label="Huruf berikutnya"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedChar(null)}
                  className="p-1 sm:p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg ml-0.5"
                  title="Tutup dialog"
                  aria-label="Tutup"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Animated card body sliding smoothly on character change */}
            <div
              key={selectedChar.char}
              className={`${
                slideDirection === 'right' ? 'animate-card-slide-right' : 'animate-card-slide-left'
              } space-y-2.5 sm:space-y-3`}
            >
              {/* Character Header Banner */}
              <div className="flex items-center justify-between p-3 sm:p-3.5 bg-stone-50 dark:bg-[#18233C] rounded-2xl border border-stone-200 dark:border-stone-700/80">
                <div className="flex items-center gap-3">
                  <span className="text-5xl sm:text-6xl font-jp font-bold text-[#0F1D38] dark:text-white leading-none">
                    {selectedChar.char}
                  </span>
                  <div>
                    <div className="text-base sm:text-lg font-mono font-bold text-stone-900 dark:text-stone-100">
                      {selectedChar.romaji}
                    </div>
                    <div className="text-[11px] sm:text-xs text-stone-600 dark:text-stone-300 mt-0.5">
                      Contoh: <strong>{selectedChar.exampleWord}</strong> ({selectedChar.exampleMeaningId})
                    </div>
                  </div>
                </div>
                <AudioButton text={selectedChar.char} size="md" />
              </div>

              {/* Stroke Order Steps */}
              {selectedChar.strokeSteps && selectedChar.strokeSteps.length > 0 && (
                <div className="p-2 sm:p-2.5 bg-stone-50/70 dark:bg-[#151E33] rounded-xl border border-stone-200/80 dark:border-stone-700/60 text-[11px] sm:text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-700 dark:text-stone-300">Panduan Menulis:</span>
                    <span className="text-[10px] text-stone-400 font-sans">Swipe ← →</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-600 dark:text-stone-400">
                    {selectedChar.strokeSteps.map((step, idx) => (
                      <li key={idx} className="leading-snug">{step}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Compact Canvas Writer */}
              <div className="pt-0.5 flex flex-col items-center">
                <CanvasWriter
                  character={selectedChar.char}
                  strokeCount={selectedChar.strokeCount}
                />
              </div>

              {/* Swipe/Touch navigation hints footer */}
              <div className="flex items-center justify-between pt-1 text-[10px] text-stone-400 dark:text-stone-500 font-mono border-t border-stone-100 dark:border-stone-800">
                <button
                  type="button"
                  onClick={handlePrevChar}
                  className="hover:text-stone-700 dark:hover:text-stone-300 flex items-center gap-0.5 transition-colors py-0.5"
                >
                  <ChevronLeft size={11} /> Prev
                </button>
                <span>Swipe horizontal untuk ganti huruf</span>
                <button
                  type="button"
                  onClick={handleNextChar}
                  className="hover:text-stone-700 dark:hover:text-stone-300 flex items-center gap-0.5 transition-colors py-0.5"
                >
                  Next <ChevronRight size={11} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
