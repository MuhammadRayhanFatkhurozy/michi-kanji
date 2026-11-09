/**
 * Interactive Audio Player Button with Speed Selector & Web Speech API ja-JP
 * Supports spokenText override, chip style, and responsive states.
 */

import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { audioService } from '../../services/audioService';

interface AudioButtonProps {
  text: string;
  spokenText?: string; // Explicit pure kana pronunciation
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showSpeedControl?: boolean;
  label?: string;
  variant?: 'icon' | 'chip' | 'compact';
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  spokenText,
  className = '',
  size = 'md',
  showSpeedControl = false,
  label,
  variant = 'icon',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<number>(1.0);
  const [hasError, setHasError] = useState(false);

  const textToSpeak = spokenText || text;

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasError(false);
    setIsPlaying(true);

    audioService.speak(textToSpeak, {
      rate: speed,
      onEnd: () => setIsPlaying(false),
      onError: () => {
        setIsPlaying(false);
        setHasError(true);
      },
    });
  };

  const cycleSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const speeds = [1.0, 0.75, 0.5];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  };

  const iconSizes = {
    xs: 12,
    sm: 14,
    md: 18,
    lg: 22,
  };

  if (variant === 'chip') {
    return (
      <button
        type="button"
        onClick={handlePlay}
        title={`Dengarkan: ${textToSpeak}`}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all btn-interactive active:scale-95 border ${
          isPlaying
            ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-xs animate-pulse-subtle'
            : 'bg-stone-50 dark:bg-stone-800 hover:bg-[#FDF2F4] text-stone-700 dark:text-stone-300 hover:text-[#C8102E] border-stone-200 dark:border-stone-700 hover:border-[#FCE7EB]'
        } ${className}`}
      >
        <Volume2
          size={13}
          className={isPlaying ? 'animate-pulse text-white' : 'text-stone-400 group-hover:text-[#C8102E]'}
        />
        <span>{label || text}</span>
      </button>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        onClick={handlePlay}
        title={hasError ? 'Audio error' : `Dengarkan pelafalan: ${textToSpeak} (${speed}x)`}
        className={`inline-flex items-center justify-center rounded-full transition-all duration-200 btn-interactive ${
          isPlaying
            ? 'bg-[#C8102E] text-white shadow-md scale-105 animate-pulse'
            : 'bg-stone-100 dark:bg-stone-800 hover:bg-[#FDF2F4] text-stone-700 dark:text-stone-300 hover:text-[#C8102E] active:scale-90 border border-stone-200 dark:border-stone-700 hover:border-[#FCE7EB] hover:scale-105'
        } ${sizeClasses[size]} ${className}`}
        aria-label={`Dengarkan audio: ${textToSpeak}`}
      >
        {isPlaying ? (
          <Volume2 size={iconSizes[size]} className="animate-pulse" />
        ) : hasError ? (
          <VolumeX size={iconSizes[size]} className="text-amber-600" />
        ) : (
          <Volume2 size={iconSizes[size]} />
        )}
      </button>

      {label && (
        <span className="text-xs text-stone-600 dark:text-stone-300 font-medium cursor-pointer hover:text-[#C8102E] transition-colors" onClick={handlePlay}>
          {label}
        </span>
      )}

      {showSpeedControl && (
        <button
          type="button"
          onClick={cycleSpeed}
          title="Ubah kecepatan audio"
          className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 transition-colors btn-interactive active:scale-95"
        >
          {speed}x
        </button>
      )}
    </div>
  );
};
