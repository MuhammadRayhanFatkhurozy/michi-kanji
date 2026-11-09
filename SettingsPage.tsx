/**
 * Settings & Configuration Page
 * Configures display defaults (Furigana, Romaji), audio speed & voice test,
 * Supabase backend connection setup guide, and progress data reset.
 */

import React, { useState } from 'react';
import { AppSettings, storageService } from '../../services/storageService';
import { audioService } from '../../services/audioService';
import {
  Settings,
  Volume2,
  Database,
  Trash2,
  CheckCircle2,
  Sparkles,
  Info,
  Server,
} from 'lucide-react';

interface SettingsPageProps {
  settings: AppSettings;
  onSettingsUpdated: (newSettings: AppSettings) => void;
  onResetProgress: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  settings,
  onSettingsUpdated,
  onResetProgress,
}) => {
  const [localSettings, setLocalSettings] = useState<AppSettings>(settings);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [voiceTestStatus, setVoiceTestStatus] = useState<string | null>(null);

  const hasVoice = audioService.hasJapaneseVoice();
  const availableVoices = audioService.getJapaneseVoices();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    storageService.saveSettings(localSettings);
    onSettingsUpdated(localSettings);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleTestAudio = () => {
    setVoiceTestStatus('Memutar audio...');
    audioService.speak('漢字道へようこそ！日本語の勉強を一緒に頑張りましょう。', {
      rate: localSettings.defaultAudioSpeed,
      onEnd: () => setVoiceTestStatus('Audio berhasil diputar!'),
      onError: (err) => setVoiceTestStatus(`Gagal memutar audio: ${err.message}`),
    });
  };

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleExecuteReset = () => {
    onResetProgress();
    setShowResetConfirm(false);
  };

  return (
    <div className="space-y-6 max-w-3xl animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs animate-fade-in-up">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0F1D38] dark:bg-[#18233C] text-white">
            Konfigurasi Sistem
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">Preferensi Belajar & Database</span>
        </div>
        <h1 className="text-2xl font-bold text-[#0F1D38] dark:text-white mt-1">
          Pengaturan Aplikasi Kanji Michi
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
          Sesuaikan tampilan aksara Furigana/Romaji, kecepatan suara default, dan konfigurasi persistensi backend Supabase.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Visual & Typography Preferences */}
        <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-4 card-hover-effect animate-fade-in-up">
          <h2 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
            <Sparkles size={16} className="text-[#C8102E]" />
            <span>Tampilan Aksara & Teks</span>
          </h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-[#18233C] transition-all cursor-pointer card-hover-effect">
              <div>
                <div className="text-xs font-semibold text-stone-900 dark:text-white">
                  Tampilkan Romaji Secara Default
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400">
                  Membantu pembaca pemula membaca pelafalan huruf latin di bawah kanji/kana.
                </div>
              </div>
              <input
                type="checkbox"
                checked={localSettings.showRomaji}
                onChange={(e) =>
                  setLocalSettings({ ...localSettings, showRomaji: e.target.checked })
                }
                className="w-4 h-4 text-[#C8102E] rounded focus:ring-[#C8102E] transition-transform active:scale-95"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-[#18233C] transition-all cursor-pointer card-hover-effect">
              <div>
                <div className="text-xs font-semibold text-stone-900 dark:text-white">
                  Tampilkan Furigana (Bacaan Hiragana di Atas Kanji)
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400">
                  Menampilkan bantuan cara baca kanji pada kalimat contoh.
                </div>
              </div>
              <input
                type="checkbox"
                checked={localSettings.showFurigana}
                onChange={(e) =>
                  setLocalSettings({ ...localSettings, showFurigana: e.target.checked })
                }
                className="w-4 h-4 text-[#C8102E] rounded focus:ring-[#C8102E] transition-transform active:scale-95"
              />
            </label>
          </div>
        </div>

        {/* Audio & SpeechSynthesis Preferences */}
        <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-4 card-hover-effect animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
            <Volume2 size={16} className="text-[#0F1D38] dark:text-white" />
            <span>Pengaturan Suara & Audio (ja-JP)</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div>
              <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                Kecepatan Pelafalan Standar (Speed)
              </label>
              <div className="flex items-center gap-2">
                {[0.5, 0.75, 1.0].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() =>
                      setLocalSettings({ ...localSettings, defaultAudioSpeed: rate })
                    }
                    className={`px-3 py-1.5 font-mono font-bold rounded-lg border transition-all btn-interactive active:scale-95 ${
                      localSettings.defaultAudioSpeed === rate
                        ? 'bg-[#0F1D38] text-white border-[#0F1D38]'
                        : 'bg-white dark:bg-[#18233C] text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                  >
                    {rate}x {rate < 1.0 ? '(Lambat)' : '(Normal)'}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
              <div>
                <span className="font-semibold text-stone-800 dark:text-white block">Status Mesin Suara Browser:</span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400">
                  {hasVoice
                    ? `Ditemukan ${availableVoices.length} suara bahasa Jepang (ja-JP) aktif.`
                    : 'Menggunakan synthesizer suara bawaan browser.'}
                </span>
              </div>

              <button
                type="button"
                onClick={handleTestAudio}
                className="px-3.5 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold btn-interactive active:scale-95 transition-all shadow-xs"
              >
                Uji Coba Suara
              </button>
            </div>

            {voiceTestStatus && (
              <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-[11px] text-stone-700 dark:text-stone-300 animate-fade-in">
                {voiceTestStatus}
              </div>
            )}
          </div>
        </div>

        {/* Database & Supabase Persistence Architecture (Section 14) */}
        <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-4 card-hover-effect animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
              <Database size={16} className="text-emerald-600" />
              <span>Persistensi & Integrasi Database Supabase</span>
            </h2>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              Mode Aktif: Offline LocalStorage
            </span>
          </div>

          <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-stone-700 dark:text-stone-300 space-y-2 card-hover-effect">
            <div className="font-semibold text-emerald-950 dark:text-emerald-300 flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>Data Anda Tersimpan Aman di Browser Anda</span>
            </div>
            <p className="leading-relaxed">
              Semua progres belajar, streak harian, kartu flashcard SRS, dan hasil kuis tersimpan secara otomatis dan persisten di memori lokal peramban (LocalStorage).
            </p>
          </div>

          <div className="p-4 bg-stone-50 dark:bg-[#18233C] rounded-xl border border-stone-200 dark:border-stone-700 text-xs space-y-2 card-hover-effect">
            <span className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1">
              <Server size={14} className="text-stone-500" />
              <span>Panduan Menghubungkan ke Supabase (Produksi):</span>
            </span>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Untuk menghubungkan aplikasi ke backend database PostgreSQL Supabase multi-pengguna:
            </p>
            <ol className="list-decimal list-inside text-stone-600 dark:text-stone-400 space-y-1 font-mono text-[11px]">
              <li>Buat project baru di <code>supabase.com</code></li>
              <li>Dapatkan <code>SUPABASE_URL</code> dan <code>SUPABASE_ANON_KEY</code> di menu Project Settings &gt; API</li>
              <li>Masukkan URL dan Anon Key pada input opsional di bawah untuk sinkronisasi cloud real-time</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                Supabase Project URL (Opsional)
              </label>
              <input
                type="text"
                placeholder="https://xyz.supabase.co"
                value={localSettings.supabaseUrl || ''}
                onChange={(e) =>
                  setLocalSettings({ ...localSettings, supabaseUrl: e.target.value })
                }
                className="w-full px-3 py-2 bg-stone-50 dark:bg-[#18233C] border border-stone-200 dark:border-stone-700 rounded-xl focus:bg-white dark:focus:bg-[#131B2E] transition-all"
              />
            </div>
            <div>
              <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                Supabase Anon Key (Opsional)
              </label>
              <input
                type="password"
                placeholder="eyJhbGciOi..."
                value={localSettings.supabaseAnonKey || ''}
                onChange={(e) =>
                  setLocalSettings({ ...localSettings, supabaseAnonKey: e.target.value })
                }
                className="w-full px-3 py-2 bg-stone-50 dark:bg-[#18233C] border border-stone-200 dark:border-stone-700 rounded-xl focus:bg-white dark:focus:bg-[#131B2E] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Save button & Reset */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#0F1D38] hover:bg-[#0A1224] rounded-xl shadow-xs transition-all btn-interactive active:scale-95"
          >
            {saveSuccess ? 'Pengaturan Tersimpan!' : 'Simpan Pengaturan'}
          </button>

          {!showResetConfirm ? (
            <button
              type="button"
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-semibold p-2 btn-interactive active:scale-95"
            >
              <Trash2 size={14} />
              <span>Reset Semua Progres Belajar</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 animate-scale-up">
              <span className="text-xs text-rose-800 dark:text-rose-300 font-medium">Hapus semua data progres?</span>
              <button
                type="button"
                onClick={handleExecuteReset}
                className="px-3 py-1 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs btn-interactive active:scale-95"
              >
                Ya, Hapus
              </button>
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-3 py-1 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-white bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg btn-interactive active:scale-95"
              >
                Batal
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
