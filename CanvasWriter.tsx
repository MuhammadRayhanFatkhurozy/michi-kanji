/**
 * Interactive Writing Practice Canvas (Stroke Order & Tracing)
 * Rice grid (田) layout with stroke clearing, guideline toggle, and trace mode.
 */

import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Eye, EyeOff, Sparkles, Check } from 'lucide-react';

interface CanvasWriterProps {
  character: string;
  charType?: 'kana' | 'kanji';
  strokeCount?: number;
  onCompletePractice?: () => void;
}

export const CanvasWriter: React.FC<CanvasWriterProps> = ({
  character,
  charType = 'kanji',
  strokeCount,
  onCompletePractice,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [userStrokeCounter, setUserStrokeCounter] = useState(0);
  const [isDoneFeedback, setIsDoneFeedback] = useState(false);

  useEffect(() => {
    clearCanvas();
  }, [character]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setUserStrokeCounter(0);
    setIsDoneFeedback(false);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
    ctx.strokeStyle = isDark ? '#F8FAFC' : '#0F1D38';

    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e?: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (e) e.stopPropagation();
    if (isDrawing) {
      setIsDrawing(false);
      setUserStrokeCounter((prev) => prev + 1);
    }
  };

  const handleVerify = () => {
    setIsDoneFeedback(true);
    if (onCompletePractice) {
      onCompletePractice();
    }
    setTimeout(() => {
      setIsDoneFeedback(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center select-none w-full">
      {/* Canvas Container with Traditional Grid Guidelines - Compact on mobile */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-white dark:bg-[#131B2E] rounded-2xl border-2 border-stone-300 dark:border-stone-700 shadow-inner overflow-hidden cursor-crosshair">
        {/* Rice grid dashed lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full border border-dashed border-stone-200 dark:border-stone-800">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-stone-300 dark:border-stone-700" />
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-stone-300 dark:border-stone-700" />
            {/* Diagonals */}
            <svg className="w-full h-full opacity-30 text-stone-300 dark:text-stone-600" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        {/* Character watermark guide if enabled */}
        {showGuide && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-7xl sm:text-8xl font-kanji text-stone-200/90 dark:text-stone-700/80 font-bold select-none leading-none">
              {character}
            </span>
          </div>
        )}

        {/* Drawing Canvas */}
        <canvas
          ref={canvasRef}
          width={240}
          height={240}
          className="relative z-10 w-full h-full touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>

      {/* Control bar */}
      <div className="flex items-center justify-between w-full max-w-[240px] sm:max-w-xs mt-2.5 gap-1.5 sm:gap-2">
        <button
          type="button"
          onClick={() => setShowGuide(!showGuide)}
          className="flex-1 flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium text-stone-700 dark:text-stone-200 bg-white dark:bg-[#18233C] border border-stone-200 dark:border-stone-700 rounded-lg hover:bg-stone-50 dark:hover:bg-[#1E2D4A] transition-colors btn-interactive"
        >
          {showGuide ? <EyeOff size={13} /> : <Eye size={13} />}
          <span className="truncate">{showGuide ? 'Panduan' : 'Tampilkan'}</span>
        </button>

        <button
          type="button"
          onClick={clearCanvas}
          className="flex items-center justify-center gap-1 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium text-stone-700 dark:text-stone-200 bg-white dark:bg-[#18233C] border border-stone-200 dark:border-stone-700 rounded-lg hover:bg-stone-50 dark:hover:bg-[#1E2D4A] transition-colors btn-interactive"
        >
          <RotateCcw size={13} />
          <span>Hapus</span>
        </button>

        <button
          type="button"
          disabled={!hasDrawn}
          onClick={handleVerify}
          className={`flex items-center justify-center gap-1 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium rounded-lg transition-all btn-interactive ${
            hasDrawn
              ? isDoneFeedback
                ? 'bg-emerald-600 text-white'
                : 'bg-[#0F1D38] dark:bg-[#C8102E] text-white hover:bg-[#0A1224] dark:hover:bg-[#A00C24] shadow-xs'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-400 dark:text-stone-500 cursor-not-allowed'
          }`}
        >
          {isDoneFeedback ? <Check size={13} /> : <Sparkles size={13} />}
          <span>{isDoneFeedback ? 'Selesai!' : 'Simpan'}</span>
        </button>
      </div>

      {strokeCount && (
        <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-2 font-mono">
          Jumlah goresan resmi: <strong className="text-stone-800 dark:text-stone-200">{strokeCount} goresan</strong>
          {userStrokeCounter > 0 && ` · Anda menarik: ${userStrokeCounter} goresan`}
        </p>
      )}
    </div>
  );
};
