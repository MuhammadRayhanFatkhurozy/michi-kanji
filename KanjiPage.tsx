/**
 * Interactive Kanji Learning Module (JLPT N5, N4, N3)
 * Expanded with authentic verified kanji, dedicated audio buttons for Onyomi & Kunyomi,
 * interactive card view/drawer, stroke order practice canvas, and vocabulary examples.
 */

import React, { useState, useMemo } from 'react';
import { KanjiItem, JLPTLevel, UserProgress } from '../../types';
import { AudioButton } from '../common/AudioButton';
import { CanvasWriter } from '../common/CanvasWriter';
import { storageService } from '../../services/storageService';
import {
  Search,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Layers,
  X,
  Volume2,
  Edit3,
  BookOpen,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface KanjiPageProps {
  kanjiList: KanjiItem[];
  progress: UserProgress;
  onProgressUpdated: (newProgress: UserProgress) => void;
  showRomajiDefault?: boolean;
}

export const KanjiPage: React.FC<KanjiPageProps> = ({
  kanjiList,
  progress,
  onProgressUpdated,
  showRomajiDefault = true,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | JLPTLevel>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);
  const [quickCanvasKanji, setQuickCanvasKanji] = useState<KanjiItem | null>(null);
  const [showRomaji, setShowRomaji] = useState<boolean>(showRomajiDefault);
  const [activeModalTab, setActiveModalTab] = useState<'detail' | 'canvas'>('detail');

  // Filter logic
  const filteredKanji = useMemo(() => {
    return kanjiList.filter((k) => {
      if (selectedLevel !== 'ALL' && k.level !== selectedLevel) return false;
      if (showBookmarksOnly && !progress.bookmarkedKanji.includes(k.id)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchChar = k.kanji.toLowerCase().includes(q);
        const matchMeaning = k.meaningId.toLowerCase().includes(q);
        const matchOnyomi = k.onyomi.some((o) => o.toLowerCase().includes(q));
        const matchKunyomi = k.kunyomi.some((ku) => ku.toLowerCase().includes(q));
        const matchRadical =
          k.radical.includes(q) || k.radicalName.toLowerCase().includes(q);
        if (!matchChar && !matchMeaning && !matchOnyomi && !matchKunyomi && !matchRadical) {
          return false;
        }
      }

      return true;
    });
  }, [kanjiList, selectedLevel, showBookmarksOnly, searchQuery, progress.bookmarkedKanji]);

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    storageService.toggleBookmark('kanji', id);
    onProgressUpdated(storageService.getProgress());
  };

  const handleToggleMastered = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    storageService.markMastered('kanji', id);
    onProgressUpdated(storageService.getProgress());
  };

  const handleSelectRelatedKanji = (char: string) => {
    const found = kanjiList.find((k) => k.kanji === char);
    if (found) {
      setSelectedKanji(found);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Overview */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#C8102E] text-white">
                Modul Aksara Kanji
              </span>
              <span className="text-xs text-stone-500 font-medium">
                Koleksi Lengkap JLPT N5 · N4 · N3 ({kanjiList.length} Karakter)
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F1D38] mt-1">
              Daftar Kanji Terstruktur & Interaktif
            </h1>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Dengarkan pelafalan resmi <strong>Onyomi</strong> dan <strong>Kunyomi</strong> secara terpisah, lihat urutan goresan, latih penulisan pada kanvas bergaris (田字格), serta pelajari kosakata nyata dunia kerja di Jepang.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
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
              <Bookmark
                size={14}
                className={showBookmarksOnly ? 'fill-amber-500 text-amber-500' : ''}
              />
              <span>Disimpan ({progress.bookmarkedKanji.length})</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Level Filter Tabs (ALL, N5, N4, N3) */}
          <div className="w-full sm:w-auto overflow-x-auto pb-1 -mb-1 scrollbar-none">
            <div className="inline-flex items-center gap-1 p-1 bg-stone-100 rounded-xl min-w-max">
              {(['ALL', 'N5', 'N4', 'N3'] as const).map((lvl) => {
                const isActive = selectedLevel === lvl;
                const count =
                  lvl === 'ALL'
                    ? kanjiList.length
                    : kanjiList.filter((k) => k.level === lvl).length;

                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-white text-[#0F1D38] shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {lvl === 'ALL' ? 'Semua Level' : `JLPT ${lvl}`}
                    <span className="ml-1 text-[10px] text-stone-400 font-normal">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kanji, arti, onyomi, kunyomi..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] transition-all"
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

      {/* Kanji Cards Grid - Interactive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredKanji.map((item) => {
          const isBookmarked = progress.bookmarkedKanji.includes(item.id);
          const isMastered = progress.masteredKanji.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => setSelectedKanji(item)}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs card-hover-effect active:scale-98 animate-fade-in cursor-pointer flex flex-col justify-between group relative overflow-hidden space-y-3"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.level === 'N5'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200/60'
                        : item.level === 'N4'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        : 'bg-purple-50 text-purple-700 border border-purple-200/60'
                    }`}
                  >
                    JLPT {item.level}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {item.strokeCount} Goresan
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(e) => handleToggleBookmark(item.id, e)}
                    className="p-1 text-stone-400 hover:text-amber-500 rounded-md transition-colors"
                    title={isBookmarked ? 'Hapus bookmark' : 'Simpan kanji'}
                  >
                    <Bookmark
                      size={15}
                      className={isBookmarked ? 'fill-amber-500 text-amber-500' : ''}
                    />
                  </button>
                </div>
              </div>

              {/* Main Kanji Character & Indonesian Meaning */}
              <div className="text-center py-1">
                <div className="text-6xl font-kanji text-[#0F1D38] group-hover:scale-105 transition-transform font-bold leading-tight">
                  {item.kanji}
                </div>
                <div className="text-sm font-bold text-stone-900 mt-2 truncate">
                  {item.meaningId}
                </div>
                <div className="text-[11px] text-stone-400 font-mono mt-0.5 truncate">
                  Radikal: {item.radical} ({item.radicalName})
                </div>
              </div>

              {/* Interactive Audio Chips for Onyomi & Kunyomi */}
              <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-stone-200/70 space-y-1.5 text-xs">
                {/* Onyomi Chip */}
                {item.onyomi.length > 0 && (
                  <div className="flex items-center justify-between gap-1 text-[11px]">
                    <span className="text-stone-400 font-medium shrink-0">On:</span>
                    <AudioButton
                      text={item.onyomi.join('、')}
                      spokenText={item.cleanOnyomi || item.onyomi[0]}
                      variant="chip"
                      size="xs"
                      className="text-[11px] py-0.5 px-2 bg-white"
                      label={`On: ${item.onyomi.join(', ')}`}
                    />
                  </div>
                )}

                {/* Kunyomi Chip */}
                {item.kunyomi.length > 0 && (
                  <div className="flex items-center justify-between gap-1 text-[11px]">
                    <span className="text-stone-400 font-medium shrink-0">Kun:</span>
                    <AudioButton
                      text={item.kunyomi.join('、')}
                      spokenText={item.cleanKunyomi || item.kunyomi[0]}
                      variant="chip"
                      size="xs"
                      className="text-[11px] py-0.5 px-2 bg-white"
                      label={`Kun: ${item.kunyomi.join(', ')}`}
                    />
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                {/* Quick Practice Canvas Trigger */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickCanvasKanji(item);
                  }}
                  className="flex items-center gap-1 text-stone-600 hover:text-[#C8102E] font-medium transition-colors"
                  title="Latihan tulis goresan"
                >
                  <Edit3 size={13} />
                  <span>Tulis</span>
                </button>

                <span className="text-[#C8102E] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Detail</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredKanji.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-stone-200">
          <Layers size={36} className="mx-auto text-stone-300 mb-3" />
          <h3 className="text-base font-semibold text-stone-800">
            Tidak ada karakter Kanji yang cocok
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Coba ubah kata kunci pencarian atau sesuaikan filter level JLPT di atas.
          </p>
        </div>
      )}

      {/* Quick Stroke Canvas Modal (Quick Practice) */}
      {quickCanvasKanji && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setQuickCanvasKanji(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 border border-stone-200 animate-in zoom-in-95 space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#0F1D38] text-white">
                  JLPT {quickCanvasKanji.level}
                </span>
                <span className="text-sm font-bold text-stone-900 font-kanji">
                  {quickCanvasKanji.kanji} · {quickCanvasKanji.meaningId}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setQuickCanvasKanji(null)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            <CanvasWriter
              character={quickCanvasKanji.kanji}
              strokeCount={quickCanvasKanji.strokeCount}
              onCompletePractice={() => handleToggleMastered(quickCanvasKanji.id)}
            />

            <div className="pt-2 flex items-center justify-between text-xs">
              <AudioButton
                text={quickCanvasKanji.primaryReading || quickCanvasKanji.kanji}
                size="sm"
                label="Dengarkan Lafal"
              />
              <button
                type="button"
                onClick={() => {
                  setSelectedKanji(quickCanvasKanji);
                  setQuickCanvasKanji(null);
                }}
                className="text-[#C8102E] font-semibold hover:underline"
              >
                Lihat Contoh Kosakata →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Kanji Detail Modal */}
      {selectedKanji && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedKanji(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden border border-stone-200 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded ${
                    selectedKanji.level === 'N5'
                      ? 'bg-blue-100 text-blue-800'
                      : selectedKanji.level === 'N4'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  JLPT {selectedKanji.level}
                </span>
                <div>
                  <h2 className="text-lg font-bold text-[#0F1D38] flex items-center gap-2">
                    <span className="text-2xl font-kanji">{selectedKanji.kanji}</span>
                    <span>· {selectedKanji.meaningId}</span>
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleBookmark(selectedKanji.id)}
                  className="p-1.5 text-stone-500 hover:text-amber-500 rounded-lg hover:bg-stone-200 transition-colors"
                  title="Simpan ke Bookmark"
                >
                  <Bookmark
                    size={18}
                    className={
                      progress.bookmarkedKanji.includes(selectedKanji.id)
                        ? 'fill-amber-500 text-amber-500'
                        : ''
                    }
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedKanji(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Tabs */}
            <div className="px-5 border-b border-stone-200 flex items-center gap-4 bg-white text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveModalTab('detail')}
                className={`py-3 border-b-2 transition-colors ${
                  activeModalTab === 'detail'
                    ? 'border-[#C8102E] text-[#C8102E]'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Informasi & Contoh Kalimat
              </button>
              <button
                type="button"
                onClick={() => setActiveModalTab('canvas')}
                className={`py-3 border-b-2 transition-colors ${
                  activeModalTab === 'canvas'
                    ? 'border-[#C8102E] text-[#C8102E]'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Latihan Menulis Goresan (田字格)
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {activeModalTab === 'detail' ? (
                <>
                  {/* Top Details Card */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-stone-200 shadow-xs">
                      <span className="text-7xl font-kanji font-bold text-[#0F1D38]">
                        {selectedKanji.kanji}
                      </span>
                      <div className="mt-2 flex items-center gap-2">
                        <AudioButton
                          text={selectedKanji.primaryReading || selectedKanji.kanji}
                          spokenText={selectedKanji.primaryReading}
                          size="sm"
                        />
                        <span className="text-xs text-stone-500 font-mono">
                          {selectedKanji.strokeCount} goresan
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-2.5 text-xs">
                      <div>
                        <span className="font-semibold text-stone-400 uppercase tracking-wider text-[10px]">
                          Arti Bahasa Indonesia:
                        </span>
                        <div className="text-base font-bold text-[#0F1D38] mt-0.5">
                          {selectedKanji.meaningId}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {/* Onyomi Box with Audio */}
                        <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                          <span className="font-semibold text-stone-400 uppercase tracking-wider text-[10px] block">
                            Onyomi (Bacaan On):
                          </span>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="font-jp text-sm font-bold text-stone-800">
                              {selectedKanji.onyomi.length > 0
                                ? selectedKanji.onyomi.join(', ')
                                : '-'}
                            </span>
                            {selectedKanji.onyomi.length > 0 && (
                              <AudioButton
                                text={selectedKanji.cleanOnyomi || selectedKanji.onyomi[0]}
                                size="xs"
                              />
                            )}
                          </div>
                        </div>

                        {/* Kunyomi Box with Audio */}
                        <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                          <span className="font-semibold text-stone-400 uppercase tracking-wider text-[10px] block">
                            Kunyomi (Bacaan Kun):
                          </span>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="font-jp text-sm font-bold text-stone-800">
                              {selectedKanji.kunyomi.length > 0
                                ? selectedKanji.kunyomi.join(', ')
                                : '-'}
                            </span>
                            {selectedKanji.kunyomi.length > 0 && (
                              <AudioButton
                                text={selectedKanji.cleanKunyomi || selectedKanji.kunyomi[0]}
                                size="xs"
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-1">
                        <span className="font-semibold text-stone-400 uppercase tracking-wider text-[10px]">
                          Radikal (Bushu):
                        </span>
                        <div className="text-stone-800 font-medium mt-0.5">
                          {selectedKanji.radical} — {selectedKanji.radicalName}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stroke Order Visual Guide Steps */}
                  <div>
                    <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                      Urutan Goresan (Stroke Order Steps):
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedKanji.strokeOrderGuide.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 font-medium"
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vocabulary Examples */}
                  <div>
                    <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                      Contoh Kosakata yang Menggunakan Kanji Ini:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedKanji.examples.map((ex, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl border border-stone-200 bg-white flex items-center justify-between"
                        >
                          <div>
                            <div className="font-semibold text-stone-900 font-jp text-sm">
                              {ex.word}
                            </div>
                            <div className="text-xs text-stone-500 font-jp">{ex.reading}</div>
                            <div className="text-xs text-[#0F1D38] font-medium mt-0.5">
                              {ex.meaningId}
                            </div>
                          </div>
                          <AudioButton text={ex.word} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Example Sentences */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                        Contoh Kalimat Penggunaan:
                      </h3>
                      <button
                        type="button"
                        onClick={() => setShowRomaji(!showRomaji)}
                        className="text-[11px] text-stone-500 hover:text-stone-800 font-medium"
                      >
                        {showRomaji ? 'Sembunyikan Romaji' : 'Tampilkan Romaji'}
                      </button>
                    </div>

                    <div className="space-y-2">
                      {selectedKanji.sentences.map((st, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl border border-stone-200 bg-white flex items-center justify-between"
                        >
                          <div className="space-y-0.5">
                            <div className="font-semibold text-stone-900 font-jp text-sm">
                              {st.japanese}
                            </div>
                            <div className="text-xs text-stone-500 font-jp">
                              {st.furigana}
                            </div>
                            {showRomaji && (
                              <div className="text-xs text-stone-400 font-mono">
                                {st.romaji}
                              </div>
                            )}
                            <div className="text-xs text-stone-700 font-medium pt-1">
                              {st.indonesian}
                            </div>
                          </div>
                          <AudioButton text={st.japanese} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Kanji and Radicals */}
                  {selectedKanji.relatedKanji && selectedKanji.relatedKanji.length > 0 && (
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                        Kanji & Radikal Terkait:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedKanji.relatedKanji.map((rel, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelectRelatedKanji(rel)}
                            className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 hover:border-[#C8102E] text-stone-800 font-kanji font-bold text-base hover:text-[#C8102E] transition-all"
                            title={`Lihat kanji ${rel}`}
                          >
                            {rel}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Interactive Canvas Writer Tab */
                <div className="flex flex-col items-center py-4 space-y-4">
                  <div className="text-center max-w-sm">
                    <h3 className="text-base font-bold text-stone-900">
                      Latihan Menulis: {selectedKanji.kanji}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Ikuti garis bantuan pada kotak bergaris (田字格). Tarik goresan dengan jari atau mouse sesuai urutan resmi.
                    </p>
                  </div>

                  <CanvasWriter
                    character={selectedKanji.kanji}
                    strokeCount={selectedKanji.strokeCount}
                    onCompletePractice={() => handleToggleMastered(selectedKanji.id)}
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleToggleMastered(selectedKanji.id)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  progress.masteredKanji.includes(selectedKanji.id)
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                <CheckCircle2 size={16} />
                <span>
                  {progress.masteredKanji.includes(selectedKanji.id)
                    ? 'Sudah Dikuasai'
                    : 'Tandai Dikuasai'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedKanji(null)}
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
