/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Square, RotateCcw, Home, BookOpen, Headphones, Brain, Sparkles, ArrowLeft, ArrowRight, Eye, EyeOff, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { BOOKS, Book } from './data';
import { StoryImage } from './components/StoryImage';
import edyReadImage from './EDY READ.png';
import edyWaveImage from './EDY WAVE.png';
import edyPialaImage from './EDY PIALA.png';

const DEFAULT_RATE = 0.75;

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'reading' | 'congrats'>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState<Record<number, boolean>>({});
  const [questionsExpanded, setQuestionsExpanded] = useState(false);
  const [direction, setDirection] = useState(0);

  const [progress, setProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('readingBuddyProgress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('readingBuddyProgress', JSON.stringify(progress));
  }, [progress]);
  
  const currentStoryContent = selectedBook?.stories[currentStoryIndex]?.content || [];
  const currentStory = selectedBook?.stories[currentStoryIndex];
  
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [playbackState, setPlaybackState] = useState<'idle' | 'playing' | 'paused'>('idle');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  const sentenceRefs = useRef<(HTMLElement | null)[]>([]);
  const timeoutRef = useRef<number | undefined>(undefined);
  const playbackStateRef = useRef<'idle' | 'playing' | 'paused'>('idle');
  const nextIndexToPlay = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize Voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        const ukVoices = availableVoices.filter(v => v.lang.includes('en-GB') || v.lang.includes('en_GB'));
        const options = ukVoices.length > 0 ? ukVoices : availableVoices.filter(v => v.lang.startsWith('en'));
        
        // Try to pick a high-quality known voice if available, otherwise just the first UK voice
        const preferred = options.find(v => v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Enhanced')) || options[0] || availableVoices[0];
          
        setVoices(options.length > 0 ? options : availableVoices);
        setSelectedVoice(preferred);
      }
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      window.speechSynthesis.cancel();
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // Celebration Effect
  useEffect(() => {
    if (currentView === 'congrats') {
      const duration = 4000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6'],
          shapes: ['star', 'circle']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6'],
          shapes: ['star', 'circle']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();

      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const playTone = (freq: number, startTime: number, duration: number) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime + startTime);
          gain.gain.setValueAtTime(0.1, audioCtx.currentTime + startTime);
          gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + startTime + duration);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(audioCtx.currentTime + startTime);
          osc.stop(audioCtx.currentTime + startTime + duration);
        };

        // Cheerful arpeggio (C major)
        [
          [523.25, 0],    // C5
          [659.25, 0.1],  // E5
          [783.99, 0.2],  // G5
          [1046.50, 0.3], // C6
          [1046.50, 0.45] // C6
        ].forEach(([freq, time], i) => {
          playTone(freq, time, i === 4 ? 0.6 : 0.15);
        });
      } catch (e) {
        console.error('Audio play failed', e);
      }
    }
  }, [currentView]);

  const playSentence = useCallback((index: number) => {
    if (index >= currentStoryContent.length) {
      handleStop();
      return;
    }

    setCurrentIndex(index);
    nextIndexToPlay.current = index;

    const utterance = new SpeechSynthesisUtterance(currentStoryContent[index]);
    utterance.lang = 'en-GB';
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.rate = DEFAULT_RATE;
    utterance.pitch = 1.15; // Slightly higher pitch for child-friendly tone

    utterance.onstart = () => {
      // Smooth scroll the current sentence into view
      sentenceRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    utterance.onend = () => {
      nextIndexToPlay.current = index + 1;
      
      if (playbackStateRef.current === 'playing') {
        // Pause 1 second before reading the next sentence
        timeoutRef.current = window.setTimeout(() => {
          if (playbackStateRef.current === 'playing') {
            playSentence(index + 1);
          }
        }, 1000);
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn("Speech synthesis error:", e.error);
      }
    };

    window.speechSynthesis.speak(utterance);
  }, [selectedVoice, currentStoryContent]);

  const playStandaloneText = useCallback((text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.rate = DEFAULT_RATE;
    utterance.pitch = 1.15;
    
    utterance.onerror = (e) => {
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn("Speech synthesis error:", e.error);
      }
    };
    
    window.speechSynthesis.speak(utterance);
  }, [selectedVoice]);

  const handlePlayResume = () => {
    if (playbackStateRef.current === 'playing') return;
    
    if (nextIndexToPlay.current >= currentStoryContent.length) {
      setCurrentIndex(-1);
      nextIndexToPlay.current = 0;
    }

    const wasPaused = playbackStateRef.current === 'paused';
    setPlaybackState('playing');
    playbackStateRef.current = 'playing';

    if (wasPaused && nextIndexToPlay.current !== 0) {
      window.speechSynthesis.resume();
    } else {
      playSentence(nextIndexToPlay.current);
    }
  };

  const handleStop = () => {
    setPlaybackState('idle');
    playbackStateRef.current = 'idle';
    window.speechSynthesis.cancel();
    clearTimeout(timeoutRef.current);
  };

  // Allow clicking a sentence to play from there
  const handleSentenceClick = (idx: number) => {
    handleStop();
    nextIndexToPlay.current = idx;
    // Slight delay to ensure cancel is processed before playing new sentence
    setTimeout(() => handlePlayResume(), 50);
  };

  const handleReadAgain = () => {
    handleStop();
    setTimeout(() => {
      setCurrentIndex(-1);
      nextIndexToPlay.current = 0;
      handlePlayResume();
    }, 100);
  };

  const handleOpenBook = (book: Book, resetProgress: boolean = false) => {
    setSelectedBook(book);
    
    let targetIndex = 0;
    if (resetProgress) {
      setProgress(prev => ({ ...prev, [book.id]: 0 }));
    } else {
      targetIndex = progress[book.id] || 0;
      if (targetIndex >= book.stories.length) {
        targetIndex = 0; // if completed, restart or remain at 0
      }
    }

    setCurrentStoryIndex(targetIndex);
    setCurrentView('reading');
    setShowAnswer({});
    setQuestionsExpanded(false);
    handleStop();
    setCurrentIndex(-1);
    nextIndexToPlay.current = 0;
  };

  const handleGoHome = () => {
    handleStop();
    setCurrentView('home');
    setSelectedBook(null);
    setCurrentIndex(-1);
    nextIndexToPlay.current = 0;
  };

  const handleNextStory = () => {
    handleStop();
    if (!selectedBook) return;
    
    const nextIndex = currentStoryIndex + 1;
    setProgress(prev => ({ ...prev, [selectedBook.id]: nextIndex }));

    const isLevel1 = selectedBook.id === 'little';
    const isStage1End = nextIndex === 10;
    const isStage2End = nextIndex === 20;
    const isBookEnd = nextIndex >= selectedBook.stories.length;

    if (isStage1End || isStage2End || isBookEnd) {
      setCurrentView('congrats');
    } else {
      setDirection(1);
      setCurrentStoryIndex(nextIndex);
      setShowAnswer({});
      setQuestionsExpanded(false);
      setCurrentIndex(-1);
      nextIndexToPlay.current = 0;
    }
  };

  const handlePreviousStory = () => {
    handleStop();
    if (currentStoryIndex > 0 && selectedBook) {
      setDirection(-1);
      const prevIndex = currentStoryIndex - 1;
      setProgress(prev => ({ ...prev, [selectedBook.id]: prevIndex }));
      setCurrentStoryIndex(prevIndex);
      setShowAnswer({});
      setQuestionsExpanded(false);
      setCurrentIndex(-1);
      nextIndexToPlay.current = 0;
    }
  };

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-green-200 p-4 sm:p-8 flex flex-col font-sans text-slate-800 relative overflow-hidden">
        {/* Cute Decorative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
          <div className="absolute top-10 left-10 text-6xl animate-pulse">☁️</div>
          <div className="absolute top-20 right-20 text-6xl animate-bounce">🎈</div>
          <div className="absolute top-40 left-1/4 text-4xl">⭐</div>
          <div className="absolute top-1/4 right-10 text-7xl">🌈</div>
          <div className="absolute bottom-20 left-20 text-5xl">🌸</div>
          <div className="absolute bottom-40 right-1/4 text-5xl">📚</div>
          <div className="absolute top-1/2 left-5 text-5xl">🎈</div>
          <div className="absolute bottom-10 right-10 text-6xl">🏡</div>
          <div className="absolute top-1/3 left-1/3 text-3xl">✨</div>
          <div className="absolute top-2/3 right-1/3 text-5xl">☁️</div>
        </div>

        <div className="max-w-5xl w-full mx-auto flex flex-col bg-white/95 backdrop-blur-md rounded-[28px] sm:rounded-[36px] md:rounded-[48px] shadow-2xl border-[3px] sm:border-[4px] md:border-[6px] border-white/80 relative p-3.5 sm:p-6 md:p-10 z-10 overflow-hidden">
          
          {/* Hero Header */}
          <div className="mb-[8px] relative flex flex-col items-center w-full text-center">
            {/* Title Row */}
            <div className="relative flex items-center justify-center mb-[8px]">
              <div className="flex flex-col items-center leading-none">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 drop-shadow-sm mb-1">
                  READING
                </h1>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 drop-shadow-sm">
                  BUDDY
                </h1>
              </div>
            </div>

            {/* Purple Pill */}
            <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-extrabold text-[11px] sm:text-sm md:text-base px-5 sm:px-8 py-2 sm:py-2.5 rounded-full shadow-md tracking-wide mb-[8px] inline-block max-w-[95%]">
              Read • Listen • Understand
            </div>

            {/* Greeting Bubble & Edy Waving Container */}
            <div className="flex flex-col md:flex-row items-center justify-center relative mx-auto w-full max-w-full px-2">
              <img 
                src={edyWaveImage} 
                alt="Edy Waving" 
                className="w-48 sm:w-64 md:w-[400px] max-w-[85vw] md:max-w-none h-auto drop-shadow-md shrink-0 md:-mr-28 z-10" 
              />
              <div className="relative bg-white text-slate-700 font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm border border-slate-200 shadow-md flex items-center text-center md:text-left shrink-0 z-0 mt-3 md:mt-0 w-auto max-w-[90%] sm:max-w-md break-words whitespace-normal h-auto">
                <div className="absolute left-1/2 -top-[6px] -translate-x-1/2 border-b-[6px] border-b-white border-x-[6px] border-x-transparent border-t-0 md:left-[-6px] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:border-r-[7px] md:border-r-white md:border-y-[6px] md:border-y-transparent md:border-l-0 drop-shadow-sm" />
                <span className="leading-tight flex flex-col justify-center w-full">
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base">Hi, friend!</span>
                  <span className="text-slate-600 text-xs sm:text-sm font-medium">Let's start today's reading adventure!</span>
                </span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6 sm:mb-8">
            <div className="bg-[#ECFDF5] rounded-[24px] p-4 border border-[#A7F3D0] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl bg-white w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">📖</div>
              <div className="flex-grow text-left">
                <h3 className="text-lg font-black text-[#047857]">Read</h3>
                <p className="text-[#059669] text-xs font-semibold leading-tight">Read exciting stories.</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#00C853] text-white flex items-center justify-center shadow-md shrink-0 font-bold">
                <ArrowRight size={18} />
              </div>
            </div>
            
            <div className="bg-[#F5F3FF] rounded-[24px] p-4 border border-[#DDD6FE] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl bg-white w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">🎧</div>
              <div className="flex-grow text-left">
                <h3 className="text-lg font-black text-[#6D28D9]">Listen</h3>
                <p className="text-[#7C3AED] text-xs font-semibold leading-tight">Listen to British English.</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#A855F7] text-white flex items-center justify-center shadow-md shrink-0 font-bold">
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="bg-[#EFF6FF] rounded-[24px] p-4 border border-[#BFDBFE] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl bg-white w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">🧠</div>
              <div className="flex-grow text-left">
                <h3 className="text-lg font-black text-[#1E40AF]">Understand</h3>
                <p className="text-[#2563EB] text-xs font-semibold leading-tight">Answer fun questions.</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0091EA] text-white flex items-center justify-center shadow-md shrink-0 font-bold">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          {/* Books */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            {/* Level 1 */}
            <div className="bg-emerald-100 rounded-[32px] p-4 sm:p-6 border-4 border-emerald-300 flex flex-col transition-transform hover:scale-[1.02] shadow-md relative overflow-hidden text-left">
              <div className="mb-4 mt-1 relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-emerald-800 mb-1.5">READING BUDDY LEVEL 1</h3>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="bg-white/80 px-3 py-0.5 rounded-full text-xs font-bold text-emerald-900 shadow-sm">Year 1–3</span>
                  <span className="text-emerald-800 font-bold text-xs">30 Interactive Storybooks</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-4 relative z-10">
                {/* Stage 1 */}
                {(() => {
                  const isCompleted = (progress['little'] || 0) >= 10;
                  if (isCompleted) {
                    return (
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-3 flex flex-col items-center text-center border-2 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] relative overflow-hidden">
                        <div className="absolute -right-8 top-3 bg-emerald-500 text-white text-[10px] font-black px-8 py-1 rotate-45 shadow-sm z-10">
                          ✅ COMPLETED
                        </div>
                        <div className="font-black text-emerald-900 text-base mb-0.5">⭐ Stage 1</div>
                        <div className="text-xs font-bold text-emerald-700 mb-1">Books 1–10</div>
                        <img src={edyPialaImage} alt="Completed Stage" className="w-18 h-18 sm:w-20 sm:h-20 object-contain mb-1 drop-shadow-sm" />
                        <div className="text-[10px] font-black text-emerald-600 tracking-widest">⭐⭐⭐</div>
                      </div>
                    );
                  }
                  return (
                    <div className="bg-white/80 rounded-2xl p-3 flex flex-col items-center text-center shadow-sm">
                      <div className="font-black text-emerald-900 text-base mb-0.5">⭐ Stage 1</div>
                      <div className="text-xs font-bold text-emerald-700 mb-2">Books 1–10</div>
                      <div className="text-[10px] font-black text-emerald-700 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">BEGINNER</div>
                    </div>
                  );
                })()}
                
                {/* Stage 2 */}
                {(() => {
                  const isCompleted = (progress['little'] || 0) >= 20;
                  if (isCompleted) {
                    return (
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-3 flex flex-col items-center text-center border-2 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] relative overflow-hidden">
                        <div className="absolute -right-8 top-3 bg-emerald-500 text-white text-[10px] font-black px-8 py-1 rotate-45 shadow-sm z-10">
                          ✅ COMPLETED
                        </div>
                        <div className="font-black text-emerald-900 text-base mb-0.5">⭐⭐ Stage 2</div>
                        <div className="text-xs font-bold text-emerald-700 mb-1">Books 11–20</div>
                        <img src={edyPialaImage} alt="Completed Stage" className="w-18 h-18 sm:w-20 sm:h-20 object-contain mb-1 drop-shadow-sm" />
                        <div className="text-[10px] font-black text-emerald-600 tracking-widest">⭐⭐⭐</div>
                      </div>
                    );
                  }
                  return (
                    <div className="bg-white/80 rounded-2xl p-3 flex flex-col items-center text-center shadow-sm">
                      <div className="font-black text-emerald-900 text-base mb-0.5">⭐⭐ Stage 2</div>
                      <div className="text-xs font-bold text-emerald-700 mb-2">Books 11–20</div>
                      <div className="text-[10px] font-black text-emerald-700 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">INTERMEDIATE</div>
                    </div>
                  );
                })()}

                {/* Stage 3 */}
                {(() => {
                  const isCompleted = (progress['little'] || 0) >= 30;
                  if (isCompleted) {
                    return (
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-3 flex flex-col items-center text-center border-2 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] relative overflow-hidden">
                        <div className="absolute -right-8 top-3 bg-emerald-500 text-white text-[10px] font-black px-8 py-1 rotate-45 shadow-sm z-10">
                          ✅ COMPLETED
                        </div>
                        <div className="font-black text-emerald-900 text-base mb-0.5">⭐⭐⭐ Stage 3</div>
                        <div className="text-xs font-bold text-emerald-700 mb-1">Books 21–30</div>
                        <img src={edyPialaImage} alt="Completed Stage" className="w-18 h-18 sm:w-20 sm:h-20 object-contain mb-1 drop-shadow-sm" />
                        <div className="text-[10px] font-black text-emerald-600 tracking-widest">⭐⭐⭐</div>
                      </div>
                    );
                  }
                  return (
                    <div className="bg-white/80 rounded-2xl p-3 flex flex-col items-center text-center shadow-sm">
                      <div className="font-black text-emerald-900 text-base mb-0.5">⭐⭐⭐ Stage 3</div>
                      <div className="text-xs font-bold text-emerald-700 mb-2">Books 21–30</div>
                      <div className="text-[10px] font-black text-emerald-700 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">ADVANCED</div>
                    </div>
                  );
                })()}
              </div>

              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2 relative z-10">
                <button 
                  onClick={() => handleOpenBook(BOOKS.find(b => b.id === 'little') || BOOKS[0], true)}
                  className="w-full py-2 rounded-xl text-white font-black text-base shadow-sm transition-transform active:scale-95 bg-emerald-500 hover:bg-emerald-600 flex justify-center items-center gap-1.5"
                >
                  📖 Start Reading
                </button>
                
                {((progress['little'] || 0) > 0 && (progress['little'] || 0) < (BOOKS.find(b => b.id === 'little')?.stories.length || 30)) && (
                  <button 
                    onClick={() => handleOpenBook(BOOKS.find(b => b.id === 'little') || BOOKS[0], false)}
                    className="w-full py-1.5 rounded-xl text-emerald-700 font-black text-sm shadow-sm border-2 border-emerald-300 transition-transform active:scale-95 bg-emerald-100 hover:bg-emerald-200 flex flex-col justify-center items-center gap-0.5"
                  >
                    <div className="flex items-center gap-1.5 leading-none">📚 Continue Reading</div>
                    <div className="text-[10px] font-black bg-emerald-200 px-2 py-0.5 rounded-full leading-none mt-0.5">Book {(progress['little'] || 0) + 1} / {BOOKS.find(b => b.id === 'little')?.stories.length || 30}</div>
                  </button>
                )}
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-blue-100 rounded-[32px] p-4 sm:p-6 border-4 border-blue-300 flex flex-col transition-transform hover:scale-[1.02] shadow-md relative overflow-hidden text-left">
              <div className="mb-4 mt-1 relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-blue-800 mb-1.5">READING BUDDY LEVEL 2</h3>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="bg-white/80 px-3 py-0.5 rounded-full text-xs font-bold text-blue-900 shadow-sm">Year 4–6</span>
                  <span className="text-blue-800 font-bold text-xs">30 Interactive Storybooks</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-4 relative z-10">
                {/* Stage 1 */}
                {(() => {
                  const isCompleted = (progress['growing'] || 0) >= 10;
                  if (isCompleted) {
                    return (
                      <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl p-3 flex flex-col items-center text-center border-2 border-blue-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] relative overflow-hidden">
                        <div className="absolute -right-8 top-3 bg-blue-500 text-white text-[10px] font-black px-8 py-1 rotate-45 shadow-sm z-10">
                          ✅ COMPLETED
                        </div>
                        <div className="font-black text-blue-900 text-base mb-0.5">⭐ Stage 1</div>
                        <div className="text-xs font-bold text-blue-700 mb-1">Books 1–10</div>
                        <img src={edyPialaImage} alt="Completed Stage" className="w-18 h-18 sm:w-20 sm:h-20 object-contain mb-1 drop-shadow-sm" />
                        <div className="text-[10px] font-black text-blue-600 tracking-widest">⭐⭐⭐</div>
                      </div>
                    );
                  }
                  return (
                    <div className="bg-white/80 rounded-2xl p-3 flex flex-col items-center text-center shadow-sm">
                      <div className="font-black text-blue-900 text-base mb-0.5">⭐ Stage 1</div>
                      <div className="text-xs font-bold text-blue-700 mb-2">Books 1–10</div>
                      <div className="text-[10px] font-black text-blue-700 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">BEGINNER</div>
                    </div>
                  );
                })()}

                {/* Stage 2 */}
                {(() => {
                  const isCompleted = (progress['growing'] || 0) >= 20;
                  if (isCompleted) {
                    return (
                      <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl p-3 flex flex-col items-center text-center border-2 border-blue-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] relative overflow-hidden">
                        <div className="absolute -right-8 top-3 bg-blue-500 text-white text-[10px] font-black px-8 py-1 rotate-45 shadow-sm z-10">
                          ✅ COMPLETED
                        </div>
                        <div className="font-black text-blue-900 text-base mb-0.5">⭐⭐ Stage 2</div>
                        <div className="text-xs font-bold text-blue-700 mb-1">Books 11–20</div>
                        <img src={edyPialaImage} alt="Completed Stage" className="w-18 h-18 sm:w-20 sm:h-20 object-contain mb-1 drop-shadow-sm" />
                        <div className="text-[10px] font-black text-blue-600 tracking-widest">⭐⭐⭐</div>
                      </div>
                    );
                  }
                  return (
                    <div className="bg-white/80 rounded-2xl p-3 flex flex-col items-center text-center shadow-sm">
                      <div className="font-black text-blue-900 text-base mb-0.5">⭐⭐ Stage 2</div>
                      <div className="text-xs font-bold text-blue-700 mb-2">Books 11–20</div>
                      <div className="text-[10px] font-black text-blue-700 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">INTERMEDIATE</div>
                    </div>
                  );
                })()}

                {/* Stage 3 */}
                {(() => {
                  const isCompleted = (progress['growing'] || 0) >= 30;
                  if (isCompleted) {
                    return (
                      <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl p-3 flex flex-col items-center text-center border-2 border-blue-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] relative overflow-hidden">
                        <div className="absolute -right-8 top-3 bg-blue-500 text-white text-[10px] font-black px-8 py-1 rotate-45 shadow-sm z-10">
                          ✅ COMPLETED
                        </div>
                        <div className="font-black text-blue-900 text-base mb-0.5">⭐⭐⭐ Stage 3</div>
                        <div className="text-xs font-bold text-blue-700 mb-1">Books 21–30</div>
                        <img src={edyPialaImage} alt="Completed Stage" className="w-18 h-18 sm:w-20 sm:h-20 object-contain mb-1 drop-shadow-sm" />
                        <div className="text-[10px] font-black text-blue-600 tracking-widest">⭐⭐⭐</div>
                      </div>
                    );
                  }
                  return (
                    <div className="bg-white/80 rounded-2xl p-3 flex flex-col items-center text-center shadow-sm">
                      <div className="font-black text-blue-900 text-base mb-0.5">⭐⭐⭐ Stage 3</div>
                      <div className="text-xs font-bold text-blue-700 mb-2">Books 21–30</div>
                      <div className="text-[10px] font-black text-blue-700 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">ADVANCED</div>
                    </div>
                  );
                })()}
              </div>

              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2 relative z-10">
                <button 
                  onClick={() => handleOpenBook(BOOKS.find(b => b.id === 'growing') || BOOKS[1], true)}
                  className="w-full py-2 rounded-xl text-white font-black text-base shadow-sm transition-transform active:scale-95 bg-blue-500 hover:bg-blue-600 flex justify-center items-center gap-1.5"
                >
                  📖 Start Reading
                </button>
                
                {((progress['growing'] || 0) > 0 && (progress['growing'] || 0) < (BOOKS.find(b => b.id === 'growing')?.stories.length || 30)) && (
                  <button 
                    onClick={() => handleOpenBook(BOOKS.find(b => b.id === 'growing') || BOOKS[1], false)}
                    className="w-full py-1.5 rounded-xl text-blue-700 font-black text-sm shadow-sm border-2 border-blue-300 transition-transform active:scale-95 bg-blue-100 hover:bg-blue-200 flex flex-col justify-center items-center gap-0.5"
                  >
                    <div className="flex items-center gap-1.5 leading-none">📚 Continue Reading</div>
                    <div className="text-[10px] font-black bg-blue-200 px-2 py-0.5 rounded-full leading-none mt-0.5">Book {(progress['growing'] || 0) + 1} / {BOOKS.find(b => b.id === 'growing')?.stories.length || 30}</div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full text-center mt-auto pt-4 pb-2 text-[#9CA3AF] text-[10px] sm:text-xs z-10 relative">
          EduBuddy©
        </div>
      </div>
    );
  }

  if (currentView === 'congrats' && selectedBook) {
    const isLevel1 = selectedBook.id === 'little';
    
    let titleElement = (
      <p className="text-xl sm:text-2xl font-bold text-slate-600 mb-6 sm:mb-8 whitespace-pre-line px-2">
        You have completed <span className="text-sky-600">{selectedBook.title}</span>!
      </p>
    );
    let subtitleElement = `⭐ ${selectedBook.stories.length} / ${selectedBook.stories.length} Stories Completed`;
    let primaryButtonText = `📘 Continue to ${BOOKS[BOOKS.findIndex(b => b.id === selectedBook.id) + 1]?.title || 'Home'}`;
    let primaryButtonColor = 'bg-sky-500 hover:bg-sky-600';
    let handlePrimaryClick = () => {
       const nextBookIndex = BOOKS.findIndex(b => b.id === selectedBook.id) + 1;
       if (nextBookIndex < BOOKS.length) {
         handleOpenBook(BOOKS[nextBookIndex]);
       } else {
         handleGoHome();
       }
    };

    if (isLevel1) {
      if (currentStoryIndex === 9) {
        titleElement = (
          <p className="text-xl sm:text-2xl font-bold text-slate-600 mb-6 sm:mb-8 whitespace-pre-line px-2">
            You have completed{'\n'}<span className="text-emerald-600">⭐ Level 1 • Stage 1</span>
          </p>
        );
        subtitleElement = "10 / 10 Stories Completed";
        primaryButtonText = "Continue to Stage 2";
        primaryButtonColor = "bg-emerald-500 hover:bg-emerald-600";
        handlePrimaryClick = () => {
          setDirection(1);
          setProgress(prev => ({ ...prev, [selectedBook.id]: 10 }));
          setCurrentStoryIndex(10);
          setShowAnswer({});
          setQuestionsExpanded(false);
          setCurrentIndex(-1);
          nextIndexToPlay.current = 0;
          setCurrentView('reading');
        };
      } else if (currentStoryIndex === 19) {
        titleElement = (
          <p className="text-xl sm:text-2xl font-bold text-slate-600 mb-6 sm:mb-8 whitespace-pre-line px-2">
            <span className="text-emerald-600">⭐⭐ Level 1 • Stage 2</span>
          </p>
        );
        subtitleElement = "20 / 30 Stories Completed";
        primaryButtonText = "Continue to Stage 3";
        primaryButtonColor = "bg-emerald-500 hover:bg-emerald-600";
        handlePrimaryClick = () => {
          setDirection(1);
          setProgress(prev => ({ ...prev, [selectedBook.id]: 20 }));
          setCurrentStoryIndex(20);
          setShowAnswer({});
          setQuestionsExpanded(false);
          setCurrentIndex(-1);
          nextIndexToPlay.current = 0;
          setCurrentView('reading');
        };
      } else if (currentStoryIndex === 29) {
        titleElement = (
          <p className="text-xl sm:text-2xl font-bold text-slate-600 mb-6 sm:mb-8 whitespace-pre-line px-2">
            You have completed{'\n'}<span className="text-emerald-600">⭐⭐⭐ Reading Buddy Level 1</span>
          </p>
        );
        subtitleElement = "30 / 30 Stories Completed";
        primaryButtonText = "Start Reading Buddy Level 2";
        primaryButtonColor = "bg-blue-500 hover:bg-blue-600";
      }
    } else if (selectedBook.id === 'growing') {
      if (currentStoryIndex === 9) {
        titleElement = (
          <p className="text-xl sm:text-2xl font-bold text-slate-600 mb-6 sm:mb-8 whitespace-pre-line px-2">
            You have completed{'\n'}<span className="text-blue-600">⭐ Level 2 • Stage 1</span>
          </p>
        );
        subtitleElement = "10 / 10 Stories Completed";
        primaryButtonText = "Continue to Stage 2";
        primaryButtonColor = "bg-blue-500 hover:bg-blue-600";
        handlePrimaryClick = () => {
          setDirection(1);
          setProgress(prev => ({ ...prev, [selectedBook.id]: 10 }));
          setCurrentStoryIndex(10);
          setShowAnswer({});
          setQuestionsExpanded(false);
          setCurrentIndex(-1);
          nextIndexToPlay.current = 0;
          setCurrentView('reading');
        };
      } else if (currentStoryIndex === 19) {
        titleElement = (
          <p className="text-xl sm:text-2xl font-bold text-slate-600 mb-6 sm:mb-8 whitespace-pre-line px-2">
            <span className="text-blue-600">⭐⭐ Level 2 • Stage 2</span>
          </p>
        );
        subtitleElement = "20 / 30 Stories Completed";
        primaryButtonText = "Continue to Stage 3";
        primaryButtonColor = "bg-blue-500 hover:bg-blue-600";
        handlePrimaryClick = () => {
          setDirection(1);
          setProgress(prev => ({ ...prev, [selectedBook.id]: 20 }));
          setCurrentStoryIndex(20);
          setShowAnswer({});
          setQuestionsExpanded(false);
          setCurrentIndex(-1);
          nextIndexToPlay.current = 0;
          setCurrentView('reading');
        };
      } else if (currentStoryIndex === 29) {
        titleElement = (
          <p className="text-xl sm:text-2xl font-bold text-slate-600 mb-6 sm:mb-8 whitespace-pre-line px-2">
            You have completed{'\n'}<span className="text-blue-600">⭐⭐⭐ Reading Buddy Level 2</span>
          </p>
        );
        subtitleElement = "30 / 30 Stories Completed";
        primaryButtonText = "Back to Home";
        primaryButtonColor = "bg-blue-500 hover:bg-blue-600";
        handlePrimaryClick = () => {
          handleGoHome();
        };
      }
    }

    return (
      <div className="min-h-screen bg-sky-100 p-4 sm:p-8 flex flex-col items-center justify-center font-sans text-slate-800 relative">
        <div className="max-w-2xl w-full bg-white rounded-[24px] sm:rounded-[36px] shadow-2xl border-b-[6px] sm:border-b-8 border-slate-200 p-6 sm:p-10 text-center relative overflow-hidden flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
            className="mb-4 drop-shadow-md flex justify-center items-center"
          >
            <img src={edyPialaImage} alt="Edy Celebrating" className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-xl" />
          </motion.div>
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[clamp(1.5rem,8vw,3rem)] leading-tight font-black text-amber-500 mb-6 drop-shadow-sm flex items-center justify-center gap-2 sm:gap-3 w-full"
          >
            <Sparkles className="text-amber-400 w-8 h-8 sm:w-12 sm:h-12 shrink-0" />
            <span className="text-center break-words">Congratulations!</span>
            <Sparkles className="text-amber-400 w-8 h-8 sm:w-12 sm:h-12 shrink-0" />
          </motion.h1>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.4, bounce: 0.5 }}
          >
            {titleElement}
          </motion.div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-amber-100 text-amber-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-xl font-black mb-8 sm:mb-10 border-2 border-amber-200 shadow-sm text-center"
          >
            {subtitleElement}
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-3 sm:gap-4 w-full max-w-sm mx-auto"
          >
            <motion.button 
              onClick={handlePrimaryClick}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
              className={`w-full py-3 sm:py-4 rounded-2xl text-white font-black text-lg sm:text-xl shadow-lg transition-transform active:scale-95 ${primaryButtonColor}`}
            >
              {primaryButtonText}
            </motion.button>
            
            {primaryButtonText !== "Back to Home" && (
              <button 
                onClick={handleGoHome}
                className="w-full py-3 sm:py-4 rounded-2xl text-slate-500 font-bold text-base sm:text-lg hover:bg-slate-50 border-2 border-slate-100 transition-colors"
              >
                Back to Home
              </button>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-0 right-0 w-full text-center text-[#9CA3AF] text-[10px] sm:text-xs z-10">
          EduBuddy©
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100dvh] w-full bg-sky-100 p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col font-sans text-slate-800 overflow-hidden">
      {/* App Container (The Book) */}
      <div className="max-w-5xl w-full h-full mx-auto flex flex-col flex-1 bg-white rounded-[24px] sm:rounded-[36px] md:rounded-[48px] shadow-2xl border-b-[6px] sm:border-b-8 border-slate-200 overflow-hidden relative">
        {/* Header Controls */}
        <div className="flex items-center justify-between px-4 py-2 sm:py-3 sm:px-6 bg-white shrink-0 border-b-2 border-slate-100 z-10 shadow-sm">
          <button 
            onClick={handleGoHome} 
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors shadow-sm active:scale-95 shrink-0"
            title="Home"
          >
            <Home size={18} />
          </button>
          
          {selectedBook && (
            <div className="flex items-center bg-slate-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-slate-100 shadow-inner">
              <span className="text-xs sm:text-sm font-black text-slate-600 tracking-wide">
                {selectedBook.id === 'little' ? '📚 Level 1' : selectedBook.id === 'growing' ? '📘 Level 2' : `📚 ${selectedBook.title}`} 
                {' • '} 
                {currentStoryIndex < 10 ? '⭐ Stage 1' : currentStoryIndex < 20 ? '⭐⭐ Stage 2' : '⭐⭐⭐ Stage 3'}
              </span>
            </div>
          )}
        </div>

        {/* The Page Container with Animation */}
        <div className="flex-1 flex flex-col relative overflow-hidden bg-slate-50/50" style={{ perspective: 1500 }}>
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentStoryIndex}
              custom={direction}
              variants={{
                enter: { 
                  opacity: 1, 
                  x: "0%",
                  y: "0%",
                  rotateZ: 0,
                  transformOrigin: "bottom left",
                  boxShadow: "none",
                  zIndex: 1
                },
                center: { 
                  opacity: 1, 
                  x: "0%",
                  y: "0%",
                  rotateZ: 0,
                  boxShadow: "none",
                  zIndex: 1
                },
                exit: { 
                  opacity: 1, 
                  x: "-100%",
                  y: "-10%",
                  rotateZ: -15,
                  transformOrigin: "bottom left",
                  boxShadow: "25px 25px 50px rgba(0,0,0,0.4)",
                  zIndex: 2
                }
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.3, 0.8, 0.2, 1] }}
              className="flex-1 flex flex-col min-h-0 w-full h-full absolute inset-0 bg-white border-l border-slate-100"
            >
              {/* Main Content Area */}
              <div className="flex flex-col items-center px-4 sm:px-8 py-2 sm:py-4 flex-1 min-h-0 relative">
                {/* Illustration - Resizable */}
                <div className="flex-shrink flex-grow min-h-[80px] max-h-[120px] sm:max-h-[160px] md:max-h-[200px] w-full flex justify-center mb-1 sm:mb-3">
                  <div className="aspect-square h-full bg-orange-50 rounded-2xl border-4 border-orange-100 p-1 shadow-md">
                    <StoryImage 
                      src={currentStory?.image} 
                      title={currentStory?.title} 
                    />
                  </div>
                </div>

                {/* Story Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-700 mb-1 sm:mb-2 text-center shrink-0">
                  {currentStory?.title}
                </h2>

                {/* Story Paragraph Container */}
                <div 
                   ref={containerRef}
                   className="relative text-[clamp(1rem,2.5vh,1.5rem)] sm:text-[clamp(1.25rem,3.5vh,2rem)] leading-[1.6] sm:leading-[1.8] text-left md:text-justify max-w-4xl flex-1 overflow-y-auto p-4 sm:p-6"
                >
                  <div className="inline">
                    {currentStoryContent.map((sentence, idx) => {
                      const isCurrent = currentIndex === idx;
                      
                      return (
                        <span key={idx}>
                          <span
                            ref={el => sentenceRefs.current[idx] = el}
                            className={`transition-all duration-300 cursor-pointer rounded-md px-1 py-0.5 ${
                              isCurrent 
                                ? 'bg-yellow-200 text-[1.08em] font-black text-slate-900 shadow-sm relative z-10' 
                                : 'text-slate-700 font-medium hover:bg-slate-50'
                            }`}
                            onClick={() => handleSentenceClick(idx)}
                          >
                            {sentence}
                          </span>
                          {" "}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Play Controls */}
                <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-5 mb-4 shrink-0">
                  <button 
                    onClick={handlePlayResume} 
                    className="flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-sm hover:shadow transition-all active:scale-95"
                    title="Play"
                  >
                    <Play size={18} className="fill-current" />
                    <span className="font-bold text-sm sm:text-base">Play</span>
                  </button>
                  <button 
                    onClick={handleReadAgain} 
                    className="flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full shadow-sm hover:shadow transition-all active:scale-95"
                    title="Read Again"
                  >
                    <RotateCcw size={16} className="stroke-[2.5px]" />
                    <span className="font-bold text-sm sm:text-base">Read Again</span>
                  </button>
                </div>

                {/* Progress Controls */}
                <div className="mb-4 flex flex-col items-center shrink-0">
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Reading {currentIndex >= 0 ? currentIndex + 1 : 0} of {currentStoryContent.length}
                  </p>
                </div>
              </div>

                {/* Questions Footer */}
              <div className="bg-sky-50 shrink-0 border-t-2 border-sky-100 flex flex-col z-10">
                <button 
                  onClick={() => setQuestionsExpanded(!questionsExpanded)}
                  className="w-full py-1.5 sm:py-2 md:py-3 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-black text-sky-600 hover:bg-sky-100 transition-colors"
                >
                  Questions {questionsExpanded ? '▲' : '▼'}
                </button>
                <AnimatePresence>
                  {questionsExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col"
                    >
                      <div className="p-2 sm:p-4 pt-0 flex flex-col gap-2 sm:gap-3 max-w-3xl mx-auto w-full">
                        {currentStory?.questions.map((q, i) => (
                          <div key={i} className="flex flex-col gap-1 sm:gap-2 bg-white p-2 sm:p-3 rounded-xl shadow-sm border border-sky-100">
                            <div className="flex items-center justify-between gap-2 sm:gap-4">
                              <div className="flex items-start gap-2">
                                <p className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                                  <span className="text-sky-500 mr-1">{i + 1}.</span> 
                                  {q.question}
                                </p>
                                <button
                                  onClick={() => playStandaloneText(q.question)}
                                  className="shrink-0 text-sky-500 hover:text-sky-700 transition-colors p-1"
                                  title="Listen to question"
                                >
                                  <Volume2 size={16} />
                                </button>
                              </div>
                              <button 
                                onClick={() => setShowAnswer(prev => ({ ...prev, [i]: !prev[i] }))}
                                className={`shrink-0 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-colors active:scale-95 ${showAnswer[i] ? 'bg-sky-500 text-white shadow-inner' : 'bg-sky-100 text-sky-600 hover:bg-sky-200'}`}
                                title={showAnswer[i] ? "Hide Answer" : "Show Answer"}
                              >
                                {showAnswer[i] ? <EyeOff size={14} /> : <Eye size={14} />}
                              </button>
                            </div>
                            
                            <AnimatePresence>
                              {showAnswer[i] && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                  animate={{ height: 'auto', opacity: 1, marginTop: 4 }}
                                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex items-center justify-between bg-green-50 text-green-800 text-[10px] sm:text-xs font-bold py-1.5 px-2 sm:px-3 rounded-lg border border-green-200 shadow-sm">
                                    <span>{q.answer}</span>
                                    <button
                                      onClick={() => playStandaloneText(q.answer)}
                                      className="shrink-0 text-green-600 hover:text-green-800 transition-colors p-1 ml-2"
                                      title="Listen to answer"
                                    >
                                      <Volume2 size={14} />
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white p-2 sm:p-3 md:p-4 flex items-center justify-between border-t-2 border-slate-100 shrink-0 z-10 relative shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
          <button 
            onClick={handlePreviousStory}
            disabled={currentStoryIndex === 0}
            className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-xl font-bold transition-all ${
              currentStoryIndex === 0 
                ? 'opacity-50 cursor-not-allowed bg-slate-50 text-slate-400' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95 shadow-sm'
            }`}
          >
            <ArrowLeft size={18} /> <span className="hidden sm:inline">Previous</span>
          </button>
          
          <div className="font-bold text-slate-500 text-xs sm:text-sm md:text-base">
            📖 Story {currentStoryIndex + 1} / {selectedBook?.stories.length}
          </div>

          <button 
            onClick={handleNextStory}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-xl font-bold bg-sky-500 text-white hover:bg-sky-600 transition-all active:scale-95 shadow-sm"
          >
            <span className="hidden sm:inline">{currentStoryIndex + 1 === selectedBook?.stories.length ? 'Finish' : 'Next'}</span> <ArrowRight size={18} />
          </button>
        </div>

      </div>

      {/* Footer */}
      <div className="w-full text-center mt-1 sm:mt-2 text-[#9CA3AF] text-[10px] sm:text-xs z-10 shrink-0">
        EduBuddy©
      </div>
    </div>
  );
}