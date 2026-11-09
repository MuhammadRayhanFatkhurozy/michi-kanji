/**
 * Draggable Floating AI Sensei Mascot & Chat Panel
 * 
 * Features:
 * - Fully draggable floating mascot supporting mouse and touch pointer events.
 * - Pointer capture for reliable, zero-jitter tracking across the viewport.
 * - Boundary constraints ensuring the mascot never disappears off-screen.
 * - Distance threshold (6px) to cleanly separate clicks from drag gestures.
 * - Smart edge-snapping to left or right screen edge on release.
 * - Preserves animated GIF running during drag (never replaced with static image).
 * - Connected to server-side Gemini 3.8 Flash AI endpoint for fast, accurate Japanese tutoring.
 * - Integrated Text-to-Speech audio button for Japanese pronunciation.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Volume2,
  Bot,
  User,
  Compass,
  CheckCircle2,
  BookA,
  Languages,
} from 'lucide-react';
import { audioService } from '../../services/audioService';
import { generateSenseiResponse } from '../../services/senseiKnowledgeEngine';
import mascotGif from '../../assets/ai_sensei_mascot.gif';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const STORAGE_KEY_MASCOT_POS = 'kanjimichi_mascot_position_v1';

function cleanDisplaySymbols(raw: string): string {
  if (!raw) return '';
  return raw
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/^\s*\*\s+/gm, '- ')
    .replace(/\*/g, '')
    .trim();
}

const INITIAL_WELCOME_MSG: ChatMessage = {
  id: 'welcome-1',
  role: 'model',
  text: `Konnichiwa! Watashi wa Kanji Michi Sensei desu (こんにちは！私は漢字道先生です). 🌸

Sensei siap membantu belajar bahasa Jepang:
- Aksara & Kanji: Onyomi, Kunyomi, goresan & radikal (N5-N3)
- Tata Bahasa (Bunpou): Pola Minna no Nihongo, partikel, & bentuk kata kerja
- Kosakata Kerja: Dunia kantor, Hou-Ren-So, hingga istilah Kaigo (Caregiver)

Silakan tanyakan apa saja atau pilih topik cepat di bawah ini!`,
  timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
};

const QUICK_TOPICS = [
  '🌸 Beda partikel は (wa) vs が (ga)',
  '🏯 Kanji 日 dan contoh katanya',
  '🤝 Budaya kerja Hou-Ren-So',
  '💡 Tips cepat hafal kosakata',
  '🎌 Contoh salam di tempat kerja Jepang',
];

export const DraggableFloatingAiButton: React.FC = () => {
  // Positioning state: x, y in pixels
  const [position, setPosition] = useState<{ x: number; y: number }>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_MASCOT_POS);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
            return parsed;
          }
        }
      } catch {}
      // Default to bottom-right corner with safe margin
      const defaultX = Math.max(20, window.innerWidth - 100);
      const defaultY = Math.max(100, window.innerHeight - 180);
      return { x: defaultX, y: defaultY };
    }
    return { x: 300, y: 500 };
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_WELCOME_MSG]);
  const [inputText, setInputText] = useState('');
  const [isLoadingReply, setIsLoadingReply] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Drag tracking refs
  const dragStartRef = useRef<{
    pointerX: number;
    pointerY: number;
    posX: number;
    posY: number;
    hasMoved: boolean;
  }>({ pointerX: 0, pointerY: 0, posX: 0, posY: 0, hasMoved: false });

  const mascotRef = useRef<HTMLDivElement | null>(null);
  const chatPanelRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Dimensions
  const MASCOT_WIDTH = 76;
  const MASCOT_HEIGHT = 92;
  const MARGIN_X = 16;
  const MARGIN_TOP = 72; // Below sticky header
  const MARGIN_BOTTOM = 24;

  // Clamp and optionally snap position to viewport edges
  const snapToEdge = useCallback((currX: number, currY: number): { x: number; y: number } => {
    if (typeof window === 'undefined') return { x: currX, y: currY };
    const winW = window.innerWidth;
    const winH = window.innerHeight;

    const minX = MARGIN_X;
    const maxX = Math.max(minX, winW - MASCOT_WIDTH - MARGIN_X);
    const minY = MARGIN_TOP;
    const maxY = Math.max(minY, winH - MASCOT_HEIGHT - MARGIN_BOTTOM);

    const clampedY = Math.min(Math.max(currY, minY), maxY);

    // Snap to nearest screen edge (left or right)
    const snapX = currX + MASCOT_WIDTH / 2 < winW / 2 ? minX : maxX;

    return { x: snapX, y: clampedY };
  }, []);

  // Window resize handler ensures mascot stays inside viewport
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => snapToEdge(prev.x, prev.y));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [snapToEdge]);

  // Click outside to close chat panel
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (!isChatOpen) return;
      const target = e.target as Node;
      if (
        chatPanelRef.current &&
        !chatPanelRef.current.contains(target) &&
        mascotRef.current &&
        !mascotRef.current.contains(target)
      ) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isChatOpen]);

  // Auto scroll chat to bottom
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  // Hide idle tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // --- Pointer Drag Events ---
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary mouse button or touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    // Capture pointer
    e.currentTarget.setPointerCapture(e.pointerId);

    dragStartRef.current = {
      pointerX: e.clientX,
      pointerY: e.clientY,
      posX: position.x,
      posY: position.y,
      hasMoved: false,
    };

    setIsDragging(true);
    setShowTooltip(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartRef.current.pointerX;
    const dy = e.clientY - dragStartRef.current.pointerY;

    // 6px movement threshold to distinguish intentional drag from a stationary click
    if (!dragStartRef.current.hasMoved && Math.hypot(dx, dy) > 6) {
      dragStartRef.current.hasMoved = true;
    }

    if (dragStartRef.current.hasMoved) {
      const winW = window.innerWidth;
      const winH = window.innerHeight;

      const minX = MARGIN_X;
      const maxX = Math.max(minX, winW - MASCOT_WIDTH - MARGIN_X);
      const minY = MARGIN_TOP;
      const maxY = Math.max(minY, winH - MASCOT_HEIGHT - MARGIN_BOTTOM);

      const newX = Math.min(Math.max(dragStartRef.current.posX + dx, minX), maxX);
      const newY = Math.min(Math.max(dragStartRef.current.posY + dy, minY), maxY);

      setPosition({ x: newX, y: newY });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    setIsDragging(false);

    if (!dragStartRef.current.hasMoved) {
      // It was a click without dragging! Toggle chat panel
      setIsChatOpen((prev) => !prev);
    } else {
      // It was a drag: Snap to nearest edge smoothly and preserve position
      const snapped = snapToEdge(position.x, position.y);
      setPosition(snapped);
      try {
        localStorage.setItem(STORAGE_KEY_MASCOT_POS, JSON.stringify(snapped));
      } catch {}
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      setIsDragging(false);
      const snapped = snapToEdge(position.x, position.y);
      setPosition(snapped);
    }
  };

  // --- Send Message to AI Sensei Backend ---
  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = (customPrompt || inputText).trim();
    if (!textToSend || isLoadingReply) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoadingReply(true);

    try {
      const historyPayload = messages.slice(-5).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      // Abort controller with 3.5s timeout for fast response
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      let senseiReply = '';
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: textToSend,
            history: historyPayload,
          }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          senseiReply = data.reply || '';
        }
      } catch (networkOrTimeoutErr) {
        clearTimeout(timeoutId);
        console.info('Switching to instant client Sensei Knowledge Engine');
      }

      // If server was offline or timed out, use intelligent client-side Sensei response
      if (!senseiReply || !senseiReply.trim()) {
        senseiReply = generateSenseiResponse(textToSend);
      }

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: senseiReply,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      // Ultimate safety fallback: always provide a helpful response
      const fallbackMsg: ChatMessage = {
        id: `fallback-${Date.now()}`,
        role: 'model',
        text: generateSenseiResponse(textToSend),
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoadingReply(false);
    }
  };

  // Speak Japanese text from AI responses
  const handleSpeakJapanese = (text: string) => {
    // Extract Japanese portions or speak entire sanitized text
    audioService.speak(text, {
      rate: 0.9,
    });
  };

  // Determine smart chat panel position (left or right side depending on mascot position)
  const isRightSided = typeof window !== 'undefined' ? position.x > window.innerWidth / 2 : true;

  return (
    <>
      {/* Draggable Mascot Button */}
      <div
        ref={mascotRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isDragging ? 'none' : 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          touchAction: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
        className={`fixed top-0 left-0 z-50 flex flex-col items-center select-none group ${
          isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'
        }`}
        title="Klik untuk membuka AI Sensei, atau seret ke mana saja"
        role="button"
        tabIndex={0}
        aria-label="Tutor AI Sensei Kanji Michi"
      >
        {/* Floating Speech Bubble Tooltip when idle */}
        {showTooltip && !isChatOpen && !isDragging && (
          <div className="absolute -top-9 px-2.5 py-1 bg-[#0F1D38] dark:bg-white text-white dark:text-[#0F1D38] text-[11px] font-bold rounded-full shadow-lg whitespace-nowrap animate-bounce pointer-events-none border border-stone-200/20">
            <span>Tanya Sensei AI! ✨</span>
            <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0F1D38] dark:bg-white rotate-45" />
          </div>
        )}

        {/* Mascot Wrapper - Natural Original Silhouette without enclosing square box */}
        <div className="relative flex items-center justify-center filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] group-hover:scale-108 active:scale-95 transition-transform duration-200">
          {/* Subtle natural glow following character without box */}
          <div className="absolute inset-0 -m-1 rounded-full bg-[#C8102E]/20 dark:bg-[#C8102E]/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Mascot GIF - Always running in its original transparent shape */}
          <img
            src={mascotGif}
            alt="AI Sensei Mascot"
            className="w-16 h-20 sm:w-20 sm:h-24 object-contain pointer-events-none select-none"
            draggable={false}
          />

          {/* Subtle online indicator dot attached naturally near mascot shoulder */}
          <div className="absolute top-1 right-1 flex h-3.5 w-3.5 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-[#090D16] shadow-xs" />
          </div>
        </div>
      </div>

      {/* Floating AI Chat Panel */}
      {isChatOpen && (
        <div
          ref={chatPanelRef}
          style={{
            zIndex: 60,
          }}
          className={`fixed inset-x-3 bottom-3 sm:bottom-6 sm:inset-x-auto w-auto sm:w-[420px] max-w-[calc(100vw-24px)] h-[560px] max-h-[82vh] bg-white dark:bg-[#131B2E] rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-700/90 flex flex-col overflow-hidden animate-scale-up duration-200 ${
            isRightSided ? 'sm:right-6' : 'sm:left-6'
          }`}
        >
          {/* Panel Header */}
          <div className="p-3.5 sm:p-4 bg-linear-to-r from-[#0F1D38] to-[#1E2D4A] text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-0.5 border border-white/20 shrink-0">
                <img
                  src={mascotGif}
                  alt="Sensei"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm tracking-tight leading-tight">Sensei Kanji Michi</h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#C8102E] text-white rounded font-bold">
                    AI 3.8
                  </span>
                </div>
                <p className="text-[11px] text-stone-300 font-normal leading-tight">
                  Tutor Bahasa Jepang Cepat & Akurat (JLPT & Kerja)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMessages([INITIAL_WELCOME_MSG])}
                className="p-1.5 text-stone-300 hover:text-white hover:bg-white/15 rounded-lg transition-colors"
                title="Bersihkan riwayat chat"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="p-1.5 text-stone-300 hover:text-white hover:bg-white/15 rounded-lg transition-colors"
                title="Tutup panel chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Suggestions Horizontal Scroll */}
          <div className="px-3 py-2 bg-stone-50 dark:bg-[#18233C] border-b border-stone-200 dark:border-stone-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
            <span className="text-[10px] font-bold text-stone-400 dark:text-stone-400 uppercase tracking-wider shrink-0 pl-1">
              Topik:
            </span>
            {QUICK_TOPICS.map((topic, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(topic)}
                className="text-xs px-2.5 py-1 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-[#FDF2F4] dark:hover:bg-stone-700 hover:text-[#C8102E] dark:hover:text-rose-400 border border-stone-200 dark:border-stone-700 rounded-full whitespace-nowrap transition-all shrink-0 shadow-2xs hover:scale-102"
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3.5 bg-[#FAF8F5]/60 dark:bg-[#0E1524]">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 mt-0.5 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                      <img src={mascotGif} alt="Sensei" className="w-full h-full object-contain" />
                    </div>
                  )}

                  <div className={`max-w-[85%] space-y-1`}>
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                        isUser
                          ? 'bg-[#0F1D38] dark:bg-[#C8102E] text-white rounded-tr-none'
                          : 'bg-white dark:bg-[#18233C] text-stone-800 dark:text-stone-100 border border-stone-200/90 dark:border-stone-700/80 rounded-tl-none'
                      }`}
                    >
                      <div className="whitespace-pre-wrap font-sans space-y-1.5">
                        {cleanDisplaySymbols(msg.text)}
                      </div>

                      {/* Listen audio action for AI answers */}
                      {!isUser && (
                        <div className="pt-2 mt-2 border-t border-stone-100 dark:border-stone-700/70 flex items-center justify-between text-[11px] text-stone-400">
                          <button
                            type="button"
                            onClick={() => handleSpeakJapanese(msg.text)}
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 transition-colors font-medium"
                            title="Dengarkan pelafalan bahasa Jepang"
                          >
                            <Volume2 size={13} className="text-[#C8102E]" />
                            <span>Dengarkan Pelafalan</span>
                          </button>
                          <span className="font-mono text-[10px]">{msg.timestamp}</span>
                        </div>
                      )}
                    </div>

                    {isUser && (
                      <div className="text-[10px] text-stone-400 text-right font-mono pr-1">
                        {msg.timestamp}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isLoadingReply && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <img src={mascotGif} alt="Sensei" className="w-full h-full object-contain" />
                </div>
                <div className="p-3 bg-white dark:bg-[#18233C] border border-stone-200 dark:border-stone-700 rounded-2xl rounded-tl-none shadow-2xs">
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#C8102E] animate-ping" />
                    <span>Sensei sedang menyusun penjelasan tercepat & paling akurat...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div className="p-3 bg-white dark:bg-[#131B2E] border-t border-stone-200 dark:border-stone-800 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tanya kanji, tata bahasa, atau arti kata..."
                disabled={isLoadingReply}
                className="flex-1 px-3.5 py-2.5 bg-stone-100 dark:bg-stone-800/80 text-stone-900 dark:text-white rounded-xl text-xs sm:text-sm border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition-all"
              />

              <button
                type="submit"
                disabled={!inputText.trim() || isLoadingReply}
                className={`p-2.5 rounded-xl transition-all flex items-center justify-center shrink-0 ${
                  inputText.trim() && !isLoadingReply
                    ? 'bg-[#C8102E] hover:bg-[#A00C24] text-white shadow-md active:scale-95'
                    : 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 cursor-not-allowed'
                }`}
                title="Kirim pertanyaan"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
