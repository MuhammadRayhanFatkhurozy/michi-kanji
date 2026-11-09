/**
 * Vocabulary (Kotoba) Learning Module
 * Complete database with 1,020+ items categorized by JLPT N5/N4/N3 and functional living & workplace domains in Japan.
 * Search, filters, romaji toggle, example sentences, audio speeds, pagination, and flashcards integration.
 */

import React, { useState, useMemo, useEffect } from 'react';
import { VocabItem, VocabCategory, JLPTLevel, UserProgress } from '../../types';
import { AudioButton } from '../common/AudioButton';
import { storageService } from '../../services/storageService';
import {
  Search,
  Bookmark,
  CheckCircle2,
  Layers,
  X,
  Plus,
  Check,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

interface VocabularyPageProps {
  vocabList: VocabItem[];
  progress: UserProgress;
  onProgressUpdated: (newProgress: UserProgress) => void;
  showRomajiDefault?: boolean;
}

export const VocabularyPage: React.FC<VocabularyPageProps> = ({
  vocabList,
  progress,
  onProgressUpdated,
  showRomajiDefault = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<VocabCategory | 'all'>('all');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | JLPTLevel>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [showRomaji, setShowRomaji] = useState(showRomajiDefault);
  const [addedCardId, setAddedCardId] = useState<string | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 24;

  const categories: { id: VocabCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Semua Tema' },
    { id: 'percakapan-harian', label: 'Percakapan Harian' },
    { id: 'dunia-kerja', label: 'Dunia Kerja & Hou-Ren-So' },
    { id: 'kaigo', label: 'Kaigo (Caregiver Lansia)' },
    { id: 'makanan-restoran', label: 'Makanan & Restoran' },
    { id: 'transportasi', label: 'Transportasi & Stasiun' },
    { id: 'belanja', label: 'Belanja & Kasir' },
    { id: 'kesehatan', label: 'Kesehatan & Rumah Sakit' },
    { id: 'budaya-jepang', label: 'Budaya & Etika' },
  ];

  const filteredVocab = useMemo(() => {
    return vocabList.filter((v) => {
      if (selectedCategory !== 'all' && v.category !== selectedCategory) return false;
      if (selectedLevel !== 'ALL' && v.level !== selectedLevel) return false;
      if (showBookmarksOnly && !progress.bookmarkedVocab.includes(v.id)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchJp = (v.kanji || '').toLowerCase().includes(q);
        const matchHira = v.hiragana.toLowerCase().includes(q);
        const matchRomaji = v.romaji.toLowerCase().includes(q);
        const matchId = v.meaningId.toLowerCase().includes(q);
        if (!matchJp && !matchHira && !matchRomaji && !matchId) return false;
      }

      return true;
    });
  }, [vocabList, selectedCategory, selectedLevel, showBookmarksOnly, searchQuery, progress.bookmarkedVocab]);

  // Reset to page 1 whenever filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedLevel, searchQuery, showBookmarksOnly]);

  const totalPages = Math.max(1, Math.ceil(filteredVocab.length / pageSize));
  const currentOffsetStart = (currentPage - 1) * pageSize;
  const currentOffsetEnd = Math.min(currentOffsetStart + pageSize, filteredVocab.length);
  const paginatedVocab = useMemo(() => {
    return filteredVocab.slice(currentOffsetStart, currentOffsetEnd);
  }, [filteredVocab, currentOffsetStart, currentOffsetEnd]);

  const handleToggleBookmark = (id: string) => {
    storageService.toggleBookmark('vocab', id);
    onProgressUpdated(storageService.getProgress());
  };

  const handleToggleMastered = (id: string) => {
    storageService.markMastered('vocab', id);
    onProgressUpdated(storageService.getProgress());
  };

  const handleAddToFlashcards = (v: VocabItem) => {
    storageService.addFlashcard({
      type: 'vocab',
      frontJapanese: v.kanji ? `${v.kanji} (${v.hiragana})` : v.hiragana,
      frontSub: v.romaji,
      backIndonesian: v.meaningId,
      exampleSentence: `${v.sentence.japanese} (${v.sentence.indonesian})`,
      level: v.level,
      deckName: v.category === 'kaigo' ? 'Kerja & Kaigo' : 'Kosakata Utama',
    });
    setAddedCardId(v.id);
    setTimeout(() => setAddedCardId(null), 1800);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#C8102E] text-white">
                Bank Kosakata (1.020+ Kata)
              </span>
              <span className="text-xs text-stone-500 font-medium">
                JLPT N5–N3 • Minna no Nihongo 1–25 • Kaigo & Hou-Ren-So
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] mt-1.5 flex items-center gap-2">
              <BookOpen className="text-[#C8102E]" size={26} />
              Kosakata Praktis & Kontekstual
            </h1>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Koleksi lengkap lebih dari 1.000 kosakata terverifikasi bahasa Jepang untuk pembelajar Indonesia. Dilengkapi audio pelafalan asli (kana murni), kalimat contoh, furigana otomatis, dan integrasi Flashcards SRS.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowRomaji(!showRomaji)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                showRomaji
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              {showRomaji ? 'Romaji: AKTIF' : 'Romaji: NONAKTIF'}
            </button>

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
              <span>Tersimpan ({progress.bookmarkedVocab.length})</span>
            </button>
          </div>
        </div>

        {/* Level & Category Filters */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Level tabs */}
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
                  {lvl === 'ALL' ? 'Semua Level' : `JLPT ${lvl}`}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kanji, hiragana, atau arti..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#C8102E]/20"
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

        {/* Category Horizontal Chips */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all border ${
                selectedCategory === c.id
                  ? 'bg-[#0F1D38] text-white border-[#0F1D38]'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Quick Pagination Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-600 px-1">
        <div>
          Menampilkan <span className="font-bold text-stone-900">{filteredVocab.length > 0 ? currentOffsetStart + 1 : 0}–{currentOffsetEnd}</span> dari total <span className="font-bold text-stone-900">{filteredVocab.length.toLocaleString('id-ID')}</span> kosakata
          {vocabList.length >= 1000 && <span className="ml-2 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">✓ 1.020+ Kosakata Siap</span>}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 120, behavior: 'smooth' });
              }}
              className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Halaman sebelumnya"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-medium text-stone-700 px-2">
              Halaman {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 120, behavior: 'smooth' });
              }}
              className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Halaman berikutnya"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedVocab.map((item) => {
          const isBookmarked = progress.bookmarkedVocab.includes(item.id);
          const isMastered = progress.masteredVocab.includes(item.id);
          const isAdded = addedCardId === item.id;

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs card-hover-effect animate-fade-in flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {item.level && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60">
                        {item.level}
                      </span>
                    )}
                    <span className="text-[10px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {item.partOfSpeech}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleToggleBookmark(item.id)}
                      className="p-1 text-stone-400 hover:text-amber-500 rounded-md transition-colors"
                      title={isBookmarked ? 'Hapus bookmark' : 'Simpan kosakata'}
                    >
                      <Bookmark
                        size={15}
                        className={isBookmarked ? 'fill-amber-500 text-amber-500' : ''}
                      />
                    </button>
                  </div>
                </div>

                {/* Main Word */}
                <div className="mt-3 flex items-start justify-between">
                  <div>
                    <div className="text-2xl font-bold font-jp text-stone-900 leading-tight">
                      {item.kanji || item.hiragana}
                    </div>
                    {item.kanji && (
                      <div className="text-xs font-jp text-stone-500 font-medium">
                        {item.hiragana}
                      </div>
                    )}
                    {showRomaji && (
                      <div className="text-xs font-mono text-stone-400 mt-0.5">
                        {item.romaji}
                      </div>
                    )}
                  </div>
                  <AudioButton
                    text={item.kanji || item.hiragana}
                    spokenText={item.hiragana}
                    size="md"
                    showSpeedControl
                  />
                </div>

                {/* Indonesian Meaning */}
                <div className="mt-2 text-sm font-semibold text-[#0F1D38]">
                  {item.meaningId}
                </div>

                {/* Example Sentence */}
                <div className="mt-3 p-3 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-semibold text-stone-900 font-jp text-xs leading-relaxed">
                      {item.sentence.japanese}
                    </div>
                    <AudioButton
                      text={item.sentence.japanese}
                      spokenText={item.sentence.furigana || item.sentence.japanese}
                      size="sm"
                    />
                  </div>
                  {showRomaji && (
                    <div className="text-[11px] font-mono text-stone-400">
                      {item.sentence.romaji}
                    </div>
                  )}
                  <div className="text-xs text-stone-600 font-medium pt-0.5">
                    {item.sentence.indonesian}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => handleAddToFlashcards(item)}
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    isAdded ? 'text-emerald-600 font-bold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {isAdded ? <Check size={14} /> : <Plus size={14} />}
                  <span>{isAdded ? 'Tersimpan ke Flashcard' : 'Tambah ke Flashcard'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleToggleMastered(item.id)}
                  className={`flex items-center gap-1 font-semibold transition-colors ${
                    isMastered
                      ? 'text-emerald-600'
                      : 'text-stone-400 hover:text-emerald-600'
                  }`}
                >
                  <CheckCircle2 size={14} className={isMastered ? 'fill-emerald-50' : ''} />
                  <span>{isMastered ? 'Dikuasai' : 'Tandai Hafal'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Pagination Bar */}
      {totalPages > 1 && (
        <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-600">
            Halaman <span className="font-semibold text-stone-900">{currentPage}</span> dari <span className="font-semibold text-stone-900">{totalPages}</span> (24 kartu per halaman)
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(1);
                window.scrollTo({ top: 120, behavior: 'smooth' });
              }}
              className="px-2.5 py-1 text-xs rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Awal
            </button>
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 120, behavior: 'smooth' });
              }}
              className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Page number chips */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = idx + 1;
              } else if (currentPage <= 3) {
                pageNum = idx + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + idx;
              } else {
                pageNum = currentPage - 2 + idx;
              }

              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => {
                    setCurrentPage(pageNum);
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                    currentPage === pageNum
                      ? 'bg-[#C8102E] text-white shadow-xs'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 120, behavior: 'smooth' });
              }}
              className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage(totalPages);
                window.scrollTo({ top: 120, behavior: 'smooth' });
              }}
              className="px-2.5 py-1 text-xs rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Akhir
            </button>
          </div>
        </div>
      )}

      {filteredVocab.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-stone-200">
          <Layers size={36} className="mx-auto text-stone-300 mb-3" />
          <h3 className="text-base font-semibold text-stone-800">
            Tidak ada kosakata yang ditemukan
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Ubah kata kunci pencarian atau ganti kategori tema filter di atas.
          </p>
        </div>
      )}
    </div>
  );
};
