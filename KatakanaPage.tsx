/**
 * Complete Katakana Learning Module
 * Gojuon (ア-ン), Dakuten, Handakuten, Chouon (ー), Loanwords (Gairaigo),
 * writing canvas practice, audio playback, recognition quizzes, and matching exercises.
 */

import React, { useState, useRef } from 'react';
import { KanaCharacter, KanaCategory } from '../../types';
import { KATAKANA_DATA, KANA_RULES_INFO } from '../../data/kanaData';
import { AudioButton } from '../common/AudioButton';
import { CanvasWriter } from '../common/CanvasWriter';
import {
  Search,
  Sparkles,
  X,
  RefreshCw,
  AlertTriangle,
  FileCode2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface KatakanaPageProps {
  onNavigateToHiragana: () => void;
}

export const KatakanaPage: React.FC<KatakanaPageProps> = ({ onNavigateToHiragana }) => {
  const [selectedCategory, setSelectedCategory] = useState<KanaCategory | 'all'>('gojuon');
  const [selectedChar, setSelectedChar] = useState<KanaCharacter | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'grid' | 'loanwords' | 'quiz' | 'lookalikes'>('grid');

  // Touch swipe coordinates
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Quiz state
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);

  const filteredList = KATAKANA_DATA.filter((k) => {
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

  const katakanaQuizList = [
    { char: 'ア', correctRomaji: 'a', options: ['a', 'i', 'u', 'e'] },
    { char: 'シ', correctRomaji: 'shi', options: ['tsu', 'shi', 'so', 'n'] },
    { char: 'ツ', correctRomaji: 'tsu', options: ['shi', 'tsu', 'so', 'n'] },
    { char: 'コーヒー', correctRomaji: 'koohii', options: ['koohii (kopi)', 'koora (cola)', 'keeki (kue)', 'kamera'] },
    { char: 'ン', correctRomaji: 'n', options: ['so', 'shi', 'n', 'tsu'] },
  ];

  const handleSelectQuizAnswer = (optionIdx: number) => {
    if (selectedQuizOption !== null) return;
    setSelectedQuizOption(optionIdx);

    const isCorrect = katakanaQuizList[quizQuestionIndex].options[optionIdx].startsWith(
      katakanaQuizList[quizQuestionIndex].correctRomaji
    );
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (quizQuestionIndex + 1 < katakanaQuizList.length) {
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

  const popularLoanwords = [
    { jp: 'コンビニ', romaji: 'konbini', id: 'Minimarket 24 jam (Convenience Store)' },
    { jp: 'アルバイト', romaji: 'arubaito', id: 'Kerja paruh waktu (Part-time job)' },
    { jp: 'トイレ', romaji: 'toire', id: 'Toilet / Kamar kecil' },
    { jp: 'スマホ', romaji: 'sumaho', id: 'Smartphone / HP' },
    { jp: 'パン', romaji: 'pan', id: 'Roti' },
    { jp: 'バス', romaji: 'basu', id: 'Bus umum' },
    { jp: 'エアコン', romaji: 'eakon', id: 'AC (Air Conditioner)' },
    { jp: 'ホテル', romaji: 'hoteru', id: 'Hotel penginapan' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0F1D38] text-white">
                Modul Aksara Kana
              </span>
              <span className="text-xs text-stone-500 font-medium">Sistem Penulisan Katakana</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] mt-1">
              Katakana Lengkap (片仮名)
            </h1>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Kuasai aksara Katakana yang digunakan untuk kata serapan asing, nama negara, merek, istilah teknis, dan bahasa dunia kerja di Jepang.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onNavigateToHiragana}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              ← Beralih ke Hiragana (あ)
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
                Tabel Katakana
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('loanwords')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'loanwords'
                    ? 'bg-white text-[#0F1D38] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Kata Serapan (外来語)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('lookalikes')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'lookalikes'
                    ? 'bg-white text-[#0F1D38] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Huruf Mirip (シ/ツ, ソ/ン)
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
                Kuis Katakana
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
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'gojuon', label: 'Gojuon Dasar (ア-ン)' },
              { id: 'dakuten', label: 'Dakuten (ガ-ボ)' },
              { id: 'handakuten', label: 'Handakuten (パ-ポ)' },
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

                <div className="my-2 text-4xl font-jp text-stone-900 group-hover:scale-110 group-hover:text-[#0F1D38] transition-transform font-bold">
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

      {/* TAB 2: Loanwords */}
      {activeTab === 'loanwords' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularLoanwords.map((lw) => (
            <div
              key={lw.jp}
              className="p-4 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold font-jp text-stone-900">{lw.jp}</span>
                  <AudioButton text={lw.jp} size="sm" />
                </div>
                <div className="text-xs font-mono font-semibold text-stone-500">{lw.romaji}</div>
                <div className="text-xs text-stone-700 mt-1 font-medium">{lw.id}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: Lookalikes */}
      {activeTab === 'lookalikes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shi vs Tsu */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-500" />
              <span>Perbedaan Vital: シ (shi) vs ツ (tsu)</span>
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-stone-50 rounded-xl text-center space-y-2">
                <div className="text-6xl font-jp font-bold text-stone-900">シ</div>
                <div className="text-xs font-bold text-stone-800">SHI</div>
                <p className="text-[11px] text-stone-600 text-left leading-relaxed">
                  • 2 titik sejajar vertikal.<br />
                  • Tarikan sapuan panjang dari <strong>kiri bawah mendatar ke atas</strong>.
                </p>
                <AudioButton text="シ" size="sm" />
              </div>

              <div className="p-4 bg-stone-50 rounded-xl text-center space-y-2">
                <div className="text-6xl font-jp font-bold text-stone-900">ツ</div>
                <div className="text-xs font-bold text-stone-800">TSU</div>
                <p className="text-[11px] text-stone-600 text-left leading-relaxed">
                  • 2 titik sejajar horizontal atas.<br />
                  • Tarikan sapuan panjang dari <strong>kanan atas curam ke kiri bawah</strong>.
                </p>
                <AudioButton text="ツ" size="sm" />
              </div>
            </div>
          </div>

          {/* So vs N */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-500" />
              <span>Perbedaan Vital: ソ (so) vs ン (n)</span>
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-stone-50 rounded-xl text-center space-y-2">
                <div className="text-6xl font-jp font-bold text-stone-900">ソ</div>
                <div className="text-xs font-bold text-stone-800">SO</div>
                <p className="text-[11px] text-stone-600 text-left leading-relaxed">
                  • Titik di kiri atas.<br />
                  • Tarikan kedua ditarik dari <strong>kanan atas turun ke bawah</strong>.
                </p>
                <AudioButton text="ソ" size="sm" />
              </div>

              <div className="p-4 bg-stone-50 rounded-xl text-center space-y-2">
                <div className="text-6xl font-jp font-bold text-stone-900">ン</div>
                <div className="text-xs font-bold text-stone-800">N</div>
                <p className="text-[11px] text-stone-600 text-left leading-relaxed">
                  • Titik di kiri bawah.<br />
                  • Tarikan kedua menyapu mendatar dari <strong>kiri bawah naik ke atas</strong>.
                </p>
                <AudioButton text="ン" size="sm" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Quiz */}
      {activeTab === 'quiz' && (
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl border border-stone-200 shadow-sm text-center space-y-6">
          {!quizFinished ? (
            <>
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>Soal {quizQuestionIndex + 1} dari {katakanaQuizList.length}</span>
                <span>Skor: {quizScore}</span>
              </div>

              <div>
                <div className="text-xs text-stone-500 font-semibold uppercase">Pilihlah Romaji / Arti:</div>
                <div className="text-6xl font-jp font-bold text-stone-900 my-4">
                  {katakanaQuizList[quizQuestionIndex].char}
                </div>
                <AudioButton text={katakanaQuizList[quizQuestionIndex].char} size="sm" />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {katakanaQuizList[quizQuestionIndex].options.map((opt, optIdx) => {
                  const isSelected = selectedQuizOption === optIdx;
                  const isCorrect = opt.startsWith(katakanaQuizList[quizQuestionIndex].correctRomaji);

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
                      className={`p-3 text-xs font-mono font-bold rounded-xl border transition-all ${btnStyle}`}
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
              <h3 className="text-xl font-bold text-stone-900">Kuis Katakana Selesai!</h3>
              <p className="text-sm text-stone-600">
                Skor Anda: <strong className="text-[#C8102E] font-mono">{quizScore} / {katakanaQuizList.length}</strong>
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

      {/* Character Modal - Compact & Swipeable with Smooth Animation */}
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
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                  {selectedChar.category.toUpperCase()}
                </span>
                <span className="text-[10px] sm:text-xs text-stone-400 font-mono">
                  {selectedChar.strokeCount} Goresan
                </span>
                {currentCharIndex !== -1 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0F1D38]/10 dark:bg-blue-500/20 text-[#0F1D38] dark:text-blue-300 font-bold">
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
