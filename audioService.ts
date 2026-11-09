/**
 * Reusable Audio & Speech Service for Kanji Michi
 * Optimized for Japanese phonetic clarity (ja-JP), sanitizing okurigana dots (・),
 * selecting natural Japanese voices, and handling mobile browser audio unmuting.
 */

export interface VoiceOption {
  voice: SpeechSynthesisVoice;
  name: string;
  lang: string;
}

/**
 * Clean Japanese reading strings for speech synthesis:
 * e.g. "はたら・く" -> "はたらく"
 * e.g. "-び, -か" -> "び、か"
 * e.g. "私 (わたし)" -> "わたし"
 */
export function sanitizeJapaneseText(raw: string): string {
  if (!raw) return '';
  let cleaned = raw;

  // Extract kana inside parenthesis if format is "Kanji (kana)"
  const parenKanaMatch = cleaned.match(/[（(]([ぁ-んァ-ヶー]+)[）)]/);
  if (parenKanaMatch && parenKanaMatch[1]) {
    cleaned = parenKanaMatch[1];
  }

  // Remove empty or lingering parentheses and brackets
  cleaned = cleaned.replace(/[（()）\[\]【】]/g, ' ');

  // Remove okurigana separation dots like ・ or · or •
  cleaned = cleaned.replace(/[・·•]/g, '');

  // Remove leading/trailing hyphens or tildes e.g. "-び" -> "び", "~masu" -> "masu"
  cleaned = cleaned.replace(/^[-~〜]/g, '').replace(/[-~〜]/g, '');

  // Remove isolated latin characters if Japanese characters exist
  const hasJapanese = /[ぁ-んァ-ヶ一-龯]/.test(cleaned);
  if (hasJapanese) {
    cleaned = cleaned.replace(/[a-zA-Z]/g, '');
  }

  // Remove extra whitespace
  cleaned = cleaned.replace(/\s+/g, ' ').trim();

  return cleaned || raw;
}

class AudioService {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking: boolean = false;
  private cachedVoices: SpeechSynthesisVoice[] = [];
  private onEndCallbacks: Set<() => void> = new Set();
  private sampleAudio: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.loadVoices();
      };
      this.loadVoices();
    }
  }

  private loadVoices(): SpeechSynthesisVoice[] {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
    this.cachedVoices = window.speechSynthesis.getVoices();
    return this.cachedVoices;
  }

  public getJapaneseVoices(): SpeechSynthesisVoice[] {
    const voices = this.cachedVoices.length > 0 ? this.cachedVoices : this.loadVoices();
    // Prioritize high-quality Japanese voices (Google, Kyoko, Otoya, Nanami, etc.)
    return voices.filter(
      (v) =>
        v.lang === 'ja-JP' ||
        v.lang === 'ja' ||
        v.lang.startsWith('ja') ||
        v.lang.includes('JP') ||
        v.name.toLowerCase().includes('japan')
    );
  }

  public hasJapaneseVoice(): boolean {
    return this.getJapaneseVoices().length > 0;
  }

  /**
   * Speak Japanese text with clean phonetic sanitization and speed control
   */
  public speak(
    text: string,
    options: {
      rate?: number; // 0.5, 0.75, 1.0
      pitch?: number;
      voiceIndex?: number;
      onEnd?: () => void;
      onError?: (err: any) => void;
    } = {}
  ): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (options.onError) {
        options.onError(new Error('Browser Anda tidak mendukung Web Speech API'));
      }
      return;
    }

    // Cancel ongoing speech and resume if paused by mobile browser
    this.stop();
    try {
      window.speechSynthesis.resume();
    } catch {}

    const cleanText = sanitizeJapaneseText(text);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = options.rate ?? 1.0;
    utterance.pitch = options.pitch ?? 1.0;
    utterance.volume = 1.0;

    const jaVoices = this.getJapaneseVoices();
    if (jaVoices.length > 0) {
      // Pick preferred Japanese voice
      const selectedIndex =
        options.voiceIndex !== undefined && options.voiceIndex < jaVoices.length
          ? options.voiceIndex
          : 0;
      utterance.voice = jaVoices[selectedIndex];
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
      this.onEndCallbacks.forEach((cb) => cb());
      this.onEndCallbacks.clear();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (options.onError) options.onError(e);
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  public stop(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      this.currentUtterance = null;
    }
    if (this.sampleAudio) {
      this.sampleAudio.pause();
      this.sampleAudio.currentTime = 0;
    }
  }

  public pause(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    if (this.sampleAudio) {
      this.sampleAudio.pause();
    }
  }

  public resume(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
    if (this.sampleAudio) {
      this.sampleAudio.play().catch(() => {});
    }
  }

  public getSpeakingState(): boolean {
    return this.isSpeaking || (this.sampleAudio ? !this.sampleAudio.paused : false);
  }

  /**
   * Play external audio asset or sample demo audio
   */
  public playAudioUrl(
    url: string,
    options: {
      rate?: number;
      onEnd?: () => void;
      onError?: (err: any) => void;
    } = {}
  ): HTMLAudioElement {
    this.stop();
    const audio = new Audio(url);
    audio.playbackRate = options.rate ?? 1.0;
    audio.onended = () => {
      if (options.onEnd) options.onEnd();
    };
    audio.onerror = (e) => {
      if (options.onError) options.onError(e);
    };
    audio.play().catch((err) => {
      if (options.onError) options.onError(err);
    });
    this.sampleAudio = audio;
    return audio;
  }
}

export const audioService = new AudioService();

/**
 * Japanese Speech Recognition Helper
 */
export function createSpeechRecognizer(
  onResult: (transcript: string) => void,
  onError: (error: string) => void,
  onEnd: () => void
) {
  if (typeof window === 'undefined') return null;

  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'ja-JP';
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: any) => {
    let finalTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        finalTranscript += event.results[i][0].transcript;
      }
    }
    onResult(finalTranscript);
  };

  recognition.onerror = (event: any) => {
    onError(event.error || 'Terjadi kesalahan pengenalan suara');
  };

  recognition.onend = () => {
    onEnd();
  };

  return recognition;
}
