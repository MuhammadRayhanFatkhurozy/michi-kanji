/**
 * Flashcards & Spaced Repetition (SRS) Module
 * Front (Japanese) / Back (Indonesian), reveal answer,
 * SRS intervals (Difficult, Learning, Mastered), custom decks, and review queue.
 */

import React, { useState, useEffect } from 'react';
import { FlashcardItem } from '../../types';
import { storageService } from '../../services/storageService';
import { AudioButton } from '../common/AudioButton';
import {
  Layers,
  RotateCw,
  Plus,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Calendar,
  Sparkles,
  X,
  Volume2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const FlashcardsPage: React.FC = () => {
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [selectedDeck, setSelectedDeck] = useState<string>('ALL');
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // New card form state
  const [newFront, setNewFront] = useState('');
  const [newSub, setNewSub] = useState('');
  const [newBack, setNewBack] = useState('');
  const [newDeck, setNewDeck] = useState('Kosakata Utama');
  const [newSentence, setNewSentence] = useState('');

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = () => {
    const loaded = storageService.getFlashcards();
    setCards(loaded);
  };

  const decks = ['ALL', ...Array.from(new Set(cards.map((c) => c.deckName)))];

  const filteredCards = cards.filter((c) => {
    if (selectedDeck !== 'ALL' && c.deckName !== selectedDeck) return false;
    return true;
  });

  const currentCard = filteredCards[currentCardIndex];

  const handleSRSReview = (rating: 'difficult' | 'learning' | 'mastered') => {
    if (!currentCard) return;

    storageService.updateCardSRS(currentCard.id, rating);
    loadCards();

    setIsFlipped(false);
    if (currentCardIndex + 1 < filteredCards.length) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      setCurrentCardIndex(0);
      try {
        confetti({ particleCount: 50 });
      } catch {}
    }
  };

  const handleCreateCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFront || !newBack) return;

    storageService.addFlashcard({
      type: 'vocab',
      frontJapanese: newFront,
      frontSub: newSub,
      backIndonesian: newBack,
      exampleSentence: newSentence,
      deckName: newDeck,
    });

    loadCards();
    setIsAddModalOpen(false);
    setNewFront('');
    setNewSub('');
    setNewBack('');
    setNewSentence('');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs animate-fade-in-up">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0F1D38] dark:bg-[#18233C] text-white">
                Metode Spaced Repetition (SRS)
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                Pengulangan Berjarak Optimal
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] dark:text-white mt-1">
              Flashcards & Kartu Pintar
            </h1>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 max-w-2xl leading-relaxed">
              Kaji ulang kosakata dan kanji secara efisien. Kartu yang sulit akan muncul lebih sering, sedangkan kartu yang sudah hafal dijadwalkan dalam interval hari yang lebih panjang.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#C8102E] hover:bg-[#A00C24] active:scale-95 btn-interactive rounded-xl shadow-xs transition-all"
          >
            <Plus size={15} />
            <span>Buat Kartu Baru</span>
          </button>
        </div>

        {/* Deck Filters */}
        <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {decks.map((deck) => (
            <button
              key={deck}
              type="button"
              onClick={() => {
                setSelectedDeck(deck);
                setCurrentCardIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all border card-hover-effect btn-interactive active:scale-95 ${
                selectedDeck === deck
                  ? 'bg-[#0F1D38] text-white border-[#0F1D38]'
                  : 'bg-white dark:bg-[#18233C] text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
              }`}
            >
              {deck === 'ALL' ? 'Semua Deck' : deck}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flashcard Stage */}
      {filteredCards.length > 0 && currentCard ? (
        <div className="max-w-xl mx-auto space-y-5 animate-scale-up">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
            <span>Kartu {currentCardIndex + 1} dari {filteredCards.length}</span>
            <span>Deck: {currentCard.deckName}</span>
          </div>

          {/* Interactive 3D Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[300px] bg-white dark:bg-[#131B2E] rounded-3xl p-8 border-2 border-stone-200/90 dark:border-stone-700 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between text-center select-none relative group card-hover-effect active:scale-99"
          >
            {/* Top row */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                {currentCard.type.toUpperCase()}
              </span>
              <span className="text-stone-400 flex items-center gap-1 text-[11px]">
                <RotateCw size={13} className="group-hover:rotate-180 transition-transform duration-500" />
                <span>Klik untuk membalik kartu</span>
              </span>
            </div>

            {/* Content (Front vs Back) */}
            <div className="my-8 space-y-3">
              {!isFlipped ? (
                /* FRONT: Japanese */
                <div className="space-y-2 animate-fade-in">
                  <div className="text-4xl sm:text-5xl font-kanji font-bold text-[#0F1D38] dark:text-white">
                    {currentCard.frontJapanese}
                  </div>
                  {currentCard.frontSub && (
                    <div className="text-xs font-mono text-stone-400">
                      {currentCard.frontSub}
                    </div>
                  )}
                  <div className="pt-2">
                    <AudioButton text={currentCard.frontJapanese} size="sm" />
                  </div>
                </div>
              ) : (
                /* BACK: Indonesian Meaning & Example */
                <div className="space-y-3 animate-fade-in">
                  <div className="text-2xl sm:text-3xl font-bold text-[#C8102E]">
                    {currentCard.backIndonesian}
                  </div>

                  {currentCard.exampleSentence && (
                    <div className="p-3 bg-stone-50 dark:bg-[#18233C] rounded-xl border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 font-jp leading-relaxed max-w-sm mx-auto">
                      {currentCard.exampleSentence}
                    </div>
                  )}

                  <div className="text-[11px] text-stone-400 font-mono">
                    Interval SRS berikutnya: {currentCard.intervalDays} hari · Repetisi: {currentCard.repetitions}x
                  </div>
                </div>
              )}
            </div>

            {/* Bottom prompt */}
            <div className="text-xs text-stone-400 font-medium">
              {!isFlipped ? 'Klik kartu untuk melihat arti' : 'Pilih tingkat kemudahan di bawah:'}
            </div>
          </div>

          {/* SRS Rating Action Buttons */}
          {isFlipped ? (
            <div className="grid grid-cols-3 gap-3 animate-fade-in-up">
              <button
                type="button"
                onClick={() => handleSRSReview('difficult')}
                className="p-3 text-xs font-semibold rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 transition-all flex flex-col items-center gap-1 card-hover-effect btn-interactive active:scale-95"
              >
                <AlertCircle size={16} />
                <span>Sulit (1 Hari)</span>
              </button>

              <button
                type="button"
                onClick={() => handleSRSReview('learning')}
                className="p-3 text-xs font-semibold rounded-xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 transition-all flex flex-col items-center gap-1 card-hover-effect btn-interactive active:scale-95"
              >
                <RotateCw size={16} />
                <span>Cukup Hafal</span>
              </button>

              <button
                type="button"
                onClick={() => handleSRSReview('mastered')}
                className="p-3 text-xs font-semibold rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-all flex flex-col items-center gap-1 card-hover-effect btn-interactive active:scale-95"
              >
                <CheckCircle2 size={16} />
                <span>Sangat Mudah</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="w-full py-3 text-xs font-semibold text-white bg-[#0F1D38] hover:bg-[#0A1224] rounded-xl shadow-xs transition-all btn-interactive active:scale-98 animate-pulse-subtle"
            >
              Buka Arti Jawaban
            </button>
          )}
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-[#131B2E] rounded-2xl border border-stone-200 dark:border-stone-800 max-w-md mx-auto animate-fade-in card-hover-effect">
          <Layers size={36} className="mx-auto text-stone-300 dark:text-stone-600 mb-3" />
          <h3 className="text-base font-semibold text-stone-800 dark:text-white">Deck Kosong</h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Belum ada kartu di deck ini. Tambahkan kartu dari daftar kosakata atau klik tombol Buat Kartu Baru.
          </p>
        </div>
      )}

      {/* Create Card Modal */}
      {isAddModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 border border-stone-200 animate-in zoom-in-95 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="text-base font-bold text-stone-900">
                Tambah Flashcard Baru
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateCard} className="space-y-3.5 text-xs">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Sisi Depan (Bahasa Jepang)*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 毎朝 (まいあさ)"
                  value={newFront}
                  onChange={(e) => setNewFront(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#C8102E]/20"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Bacaan / Romaji
                </label>
                <input
                  type="text"
                  placeholder="Contoh: maiasa"
                  value={newSub}
                  onChange={(e) => setNewSub(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#C8102E]/20"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Sisi Belakang (Arti Bahasa Indonesia)*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Setiap pagi"
                  value={newBack}
                  onChange={(e) => setNewBack(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#C8102E]/20"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Nama Deck Kategori
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kosakata Utama"
                  value={newDeck}
                  onChange={(e) => setNewDeck(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#C8102E]/20"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Contoh Kalimat (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: 毎朝六時に起きます。"
                  value={newSentence}
                  onChange={(e) => setNewSentence(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#C8102E]/20"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#C8102E] hover:bg-[#A00C24] text-white font-semibold shadow-xs"
                >
                  Simpan Kartu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
