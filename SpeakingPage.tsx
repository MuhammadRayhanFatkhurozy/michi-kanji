/**
 * Speaking Practice & Voice Recording Module
 * Features reference native Japanese pronunciation, microphone recording (MediaRecorder),
 * user audio playback, Web Speech API speech recognition (ja-JP), and pitch accent tips.
 */

import React, { useState, useRef, useEffect } from 'react';
import { SpeakingItem } from '../../types';
import { SPEAKING_DATA } from '../../data/speakingData';
import { AudioButton } from '../common/AudioButton';
import { audioService, createSpeechRecognizer } from '../../services/audioService';
import {
  Mic,
  Square,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  CheckCircle2,
  AlertCircle,
  Radio,
} from 'lucide-react';

export const SpeakingPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SpeakingItem>(SPEAKING_DATA[0]);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingRecording, setIsPlayingRecording] = useState<boolean>(false);
  const [recognizedText, setRecognizedText] = useState<string>('');
  const [micError, setMicError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const recognizerRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Reset recording when changing sentence
    handleResetRecording();
  }, [selectedItem]);

  // Cleanup microphone streams on unmount
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        try {
          mediaRecorderRef.current.stop();
        } catch {}
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (recognizerRef.current) {
        try {
          recognizerRef.current.stop();
        } catch {}
      }
    };
  }, []);

  const handleStartRecording = async () => {
    setMicError(null);
    setRecognizedText('');
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // Select supported audio MIME type across Chrome, Firefox, Safari
      let options: MediaRecorderOptions | undefined = undefined;
      let recordedType = 'audio/webm';

      if (typeof MediaRecorder.isTypeSupported === 'function') {
        if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
          options = { mimeType: 'audio/webm;codecs=opus' };
          recordedType = 'audio/webm;codecs=opus';
        } else if (MediaRecorder.isTypeSupported('audio/webm')) {
          options = { mimeType: 'audio/webm' };
          recordedType = 'audio/webm';
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
          options = { mimeType: 'audio/mp4' };
          recordedType = 'audio/mp4';
        } else if (MediaRecorder.isTypeSupported('audio/ogg')) {
          options = { mimeType: 'audio/ogg' };
          recordedType = 'audio/ogg';
        }
      }

      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const typeToUse = mediaRecorder.mimeType || recordedType;
        const audioBlob = new Blob(audioChunksRef.current, { type: typeToUse });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);

        // Stop all audio tracks to free mic
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Start Japanese Speech Recognition if supported
      const recognizer = createSpeechRecognizer(
        (text) => setRecognizedText(text),
        (err) => console.log('Speech recognition error:', err),
        () => {}
      );
      if (recognizer) {
        try {
          recognizer.start();
          recognizerRef.current = recognizer;
        } catch {}
      }
    } catch (err: any) {
      setMicError(
        'Izin mikrofon diperlukan untuk merekam suara Anda. Silakan izinkan akses mikrofon di browser.'
      );
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    if (recognizerRef.current) {
      try {
        recognizerRef.current.stop();
      } catch {}
    }
  };

  const handlePlayRecording = () => {
    if (!recordedAudioUrl) return;

    if (isPlayingRecording && audioElementRef.current) {
      audioElementRef.current.pause();
      setIsPlayingRecording(false);
      return;
    }

    const audio = new Audio(recordedAudioUrl);
    audioElementRef.current = audio;
    setIsPlayingRecording(true);

    audio.onended = () => {
      setIsPlayingRecording(false);
    };
    audio.onerror = () => {
      setIsPlayingRecording(false);
    };

    audio.play();
  };

  const handleResetRecording = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current = null;
    }
    if (recordedAudioUrl) {
      URL.revokeObjectURL(recordedAudioUrl);
    }
    setRecordedAudioUrl(null);
    setIsRecording(false);
    setIsPlayingRecording(false);
    setRecognizedText('');
    setMicError(null);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-xs animate-fade-in-up">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#C8102E] text-white">
              Modul Berbicara (発音 / スピーキング)
            </span>
            <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
              Rekam Suara & Bandingkan dengan Penutur Asli
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#0F1D38] dark:text-white mt-1">
            Praktik Percakapan & Pengucapan Alami
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 max-w-2xl leading-relaxed">
            Dengarkan pelafalan referensi, rekam suara Anda sendiri menggunakan mikrofon, putar ulang rekaman, dan lihat teks yang dikenali oleh sistem pengenal suara bahasa Jepang (ja-JP).
          </p>
        </div>

        {/* Sentence Selection List */}
        <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {SPEAKING_DATA.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all border text-left card-hover-effect btn-interactive active:scale-95 ${
                selectedItem.id === item.id
                  ? 'bg-[#0F1D38] text-white border-[#0F1D38] shadow-xs'
                  : 'bg-white dark:bg-[#18233C] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/20">
                  {item.level}
                </span>
                <span>{item.category}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Practice Card */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#131B2E] rounded-2xl p-6 md:p-8 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-6 animate-fade-in-up">
        {/* Context badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
            Konteks: {selectedItem.context}
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">Level {selectedItem.level}</span>
        </div>

        {/* Target Sentence Display */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-[#18233C] border border-stone-200 dark:border-stone-700 text-center space-y-2 card-hover-effect">
          <div className="text-xs text-stone-500 dark:text-stone-400 font-semibold uppercase tracking-wider">
            Kalimat yang Dipraktikkan:
          </div>
          <div className="text-2xl sm:text-3xl font-jp font-bold text-stone-900 dark:text-white leading-relaxed">
            {selectedItem.sentence}
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 font-jp">{selectedItem.furigana}</div>
          <div className="text-xs text-stone-400 font-mono">{selectedItem.romaji}</div>
          <div className="text-sm text-[#0F1D38] dark:text-[#FB7185] font-semibold pt-2">
            "{selectedItem.meaningId}"
          </div>
        </div>

        {/* Action Controls: Reference vs Record */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Reference Audio Player */}
          <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50/70 dark:bg-[#18233C]/60 flex flex-col items-center justify-center space-y-3 text-center card-hover-effect">
            <span className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
              1. Audio Referensi Jepang (ja-JP)
            </span>
            <AudioButton text={selectedItem.sentence} size="lg" showSpeedControl />
            <span className="text-[11px] text-stone-500 dark:text-stone-400">
              Dengarkan ritme & intonasi alami
            </span>
          </div>

          {/* User Voice Recorder */}
          <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50/70 dark:bg-[#18233C]/60 flex flex-col items-center justify-center space-y-3 text-center card-hover-effect relative">
            <span className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
              2. Rekam Suara Anda
            </span>

            <div className="relative">
              {isRecording && (
                <div className="absolute inset-0 rounded-full bg-rose-500 opacity-75 animate-ping pointer-events-none" />
              )}
              {!isRecording ? (
                <button
                  type="button"
                  onClick={handleStartRecording}
                  className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8102E] hover:bg-[#A00C24] text-white font-semibold text-xs shadow-md transition-all btn-interactive active:scale-95"
                >
                  <Mic size={16} />
                  <span>Mulai Rekam Suara</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleStopRecording}
                  className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 dark:bg-rose-600 text-white font-semibold text-xs shadow-md animate-pulse active:scale-95 btn-interactive ring-4 ring-rose-500/30"
                >
                  <Square size={16} />
                  <span>Selesai Merekam (Stop)</span>
                </button>
              )}
            </div>

            {isRecording && (
              <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 font-medium animate-pulse">
                <Radio size={14} className="animate-spin" />
                <span>Mendengarkan ucapan Anda...</span>
              </div>
            )}

            {recordedAudioUrl && !isRecording && (
              <div className="flex items-center gap-2 pt-1 animate-scale-up">
                <button
                  type="button"
                  onClick={handlePlayRecording}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 btn-interactive active:scale-95 transition-all shadow-xs"
                >
                  <Play size={13} />
                  <span>{isPlayingRecording ? 'Jeda' : 'Putar Rekaman Saya'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetRecording}
                  className="p-1.5 text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-white rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 btn-interactive active:scale-95"
                  title="Rekam ulang"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Microphone Error Banner */}
        {micError && (
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5 animate-fade-in">
            <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <span>{micError}</span>
          </div>
        )}

        {/* Speech Recognition Feedback (ja-JP) */}
        {recognizedText && (
          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-1 text-xs animate-scale-up">
            <span className="font-bold text-blue-900 dark:text-blue-300">
              Teks yang Berhasil Dikenali (Speech-to-Text):
            </span>
            <div className="text-base font-jp font-bold text-blue-950 dark:text-blue-100">
              "{recognizedText}"
            </div>
            <p className="text-[11px] text-blue-700 dark:text-blue-400">
              Jika teks terdeteksi mendekati kalimat asli, pengucapan konsonan dan vokal Anda sudah sangat tepat!
            </p>
          </div>
        )}

        {/* Pronunciation Notes */}
        <div className="p-4 rounded-xl bg-stone-50 dark:bg-[#18233C] border border-stone-200 dark:border-stone-700 space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
          <div className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-600 animate-pulse" />
            <span>Panduan Pengucapan & Aksen Nada (Pitch Accent):</span>
          </div>
          <p className="leading-relaxed">{selectedItem.pronunciationNotes}</p>
        </div>
      </div>
    </div>
  );
};
