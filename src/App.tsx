/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Square, RotateCcw, Home, BookOpen, Headphones, Brain, Sparkles, ArrowLeft, ArrowRight, Eye, EyeOff, Volume2, Trophy, Star, CheckCircle2, Bookmark, Library, Award, Pencil, Heart, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOKS, Book } from './data';
import { VectorStar3D, VectorFloatingStorybook, VectorStageOpenBook, VectorStageBookStack, VectorStageGoldTrophy, VectorStarRow, VectorEduOwl, VectorUnderstandBubble } from './components/HomeVectorIllustrations';


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
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn("Speech synthesis warning:", e.error);
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
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn("Speech synthesis warning:", e.error);
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
    
    const currentBookIndex = BOOKS.findIndex(b => b.id === selectedBook.id);
    const nextIndex = currentStoryIndex + 1;

    const isStage1End = nextIndex === 10;
    const isStage2End = nextIndex === 20;
    const isBookEnd = nextIndex >= selectedBook.stories.length;

    if (isBookEnd) {
      if (currentBookIndex + 1 < BOOKS.length) {
        // Cross from Level 1 Story 30 forward to Level 2 Story 1
        const nextBook = BOOKS[currentBookIndex + 1];
        setDirection(1);
        setSelectedBook(nextBook);
        setProgress(prev => ({ ...prev, [selectedBook.id]: selectedBook.stories.length, [nextBook.id]: 0 }));
        setCurrentStoryIndex(0);
        setShowAnswer({});
        setQuestionsExpanded(false);
        setCurrentIndex(-1);
        nextIndexToPlay.current = 0;
      } else {
        // Final story of Level 2 (overall end of app)
        setProgress(prev => ({ ...prev, [selectedBook.id]: nextIndex }));
        setCurrentView('congrats');
      }
    } else if (isStage1End || isStage2End) {
      setProgress(prev => ({ ...prev, [selectedBook.id]: nextIndex }));
      setCurrentView('congrats');
    } else {
      setProgress(prev => ({ ...prev, [selectedBook.id]: nextIndex }));
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
    if (!selectedBook) return;

    if (currentStoryIndex > 0) {
      setDirection(-1);
      const prevIndex = currentStoryIndex - 1;
      setProgress(prev => ({ ...prev, [selectedBook.id]: prevIndex }));
      setCurrentStoryIndex(prevIndex);
      setShowAnswer({});
      setQuestionsExpanded(false);
      setCurrentIndex(-1);
      nextIndexToPlay.current = 0;
    } else {
      // At Story 1 (index 0) of the current book
      const currentBookIndex = BOOKS.findIndex(b => b.id === selectedBook.id);
      if (currentBookIndex > 0) {
        // Cross from Level 2 Story 1 backward to Level 1 Story 30
        const prevBook = BOOKS[currentBookIndex - 1];
        const prevStoryIndex = prevBook.stories.length - 1;
        setDirection(-1);
        setSelectedBook(prevBook);
        setProgress(prev => ({ ...prev, [prevBook.id]: prevStoryIndex }));
        setCurrentStoryIndex(prevStoryIndex);
        setShowAnswer({});
        setQuestionsExpanded(false);
        setCurrentIndex(-1);
        nextIndexToPlay.current = 0;
      }
    }
  };

  if (currentView === 'home') {
    const littleProgress = progress['little'] || 0;
    const growingProgress = progress['growing'] || 0;
    const totalLittle = BOOKS.find(b => b.id === 'little')?.stories.length || 30;
    const totalGrowing = BOOKS.find(b => b.id === 'growing')?.stories.length || 30;

    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-[#fefce8] via-[#fffdf0] to-[#fefce8] p-2.5 sm:p-4 md:p-6 lg:p-7 flex flex-col justify-center items-center font-sans text-slate-800 relative overflow-x-hidden select-none">
        
        {/* Subtle Background Atmosphere & Decorative Pastel Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Soft Warm Glow in Center Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-100/20 via-amber-100/30 to-transparent rounded-full blur-3xl"></div>

          {/* Soft Pastel Clouds in Corners */}
          <div className="absolute top-5 left-10 flex items-center gap-1 opacity-60 animate-float hidden md:flex">
            <div className="w-28 h-12 bg-white/80 rounded-full shadow-xs"></div>
            <div className="w-16 h-16 bg-white/80 rounded-full -ml-9 -mt-4 shadow-xs"></div>
            <div className="w-20 h-13 bg-white/80 rounded-full -ml-6 -mt-1 shadow-xs"></div>
          </div>
          <div className="absolute top-6 right-12 flex items-center gap-1 opacity-60 animate-float-reverse hidden md:flex">
            <div className="w-26 h-11 bg-white/80 rounded-full shadow-xs"></div>
            <div className="w-15 h-15 bg-white/80 rounded-full -ml-8 -mt-4 shadow-xs"></div>
            <div className="w-20 h-12 bg-white/80 rounded-full -ml-6 -mt-1 shadow-xs"></div>
          </div>

          {/* Floating Illustrated Open Storybooks Framing the Board */}
          <div className="absolute top-8 left-4 sm:left-8 opacity-75 animate-float hidden sm:block">
            <VectorFloatingStorybook color="purple" size={72} />
          </div>
          <div className="absolute bottom-10 right-4 sm:right-8 opacity-75 animate-float-reverse hidden sm:block">
            <VectorFloatingStorybook color="gold" size={72} />
          </div>

          {/* Cohesive Golden & Pastel Stars around the outer perimeter */}
          <div className="absolute top-12 left-1/4 opacity-70 animate-gentle-pulse">
            <VectorStar3D size={26} />
          </div>
          <div className="absolute top-14 right-1/4 opacity-70 animate-gentle-pulse" style={{ animationDelay: '1s' }}>
            <VectorStar3D size={28} />
          </div>
          <div className="absolute top-1/2 left-3 sm:left-6 opacity-70 animate-float-gentle">
            <VectorStar3D size={28} />
          </div>
          <div className="absolute top-1/2 right-3 sm:right-6 opacity-70 animate-gentle-pulse" style={{ animationDelay: '0.5s' }}>
            <VectorStar3D size={28} />
          </div>
          <div className="absolute bottom-16 left-8 opacity-70 animate-gentle-pulse">
            <VectorStar3D size={24} />
          </div>
          <div className="absolute bottom-14 right-1/4 opacity-70 animate-float-gentle">
            <VectorStar3D size={26} />
          </div>
        </div>

        {/* MAIN GAME BOARD (Clean, Soft Pastel, Rounded, Dimensional) */}
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col bg-[#fffefc] rounded-[36px] sm:rounded-[44px] shadow-[0_15px_40px_-15px_rgba(107,33,168,0.08),0_2px_12px_rgba(0,0,0,0.02)] border-[3px] sm:border-[4px] border-purple-200/80 relative p-4 sm:p-6 md:p-8 z-10 my-auto">
          
          {/* ILLUSTRATED HEADER ZONE */}
          <div className="text-center mb-3 sm:mb-5 relative flex flex-col items-center">
            
            {/* Title & Integrated Owl Mascot Container */}
            <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-8 mb-1.5 sm:mb-2 relative">
              {/* Sparkles around READING */}
              <div className="absolute -top-4 left-4 sm:left-10 flex gap-1 text-amber-400 text-xl sm:text-2xl animate-gentle-pulse">
                <span>✨</span>
              </div>
              <div className="absolute -top-4 right-28 sm:right-40 flex gap-1 text-amber-400 text-xl sm:text-2xl animate-gentle-pulse">
                <span>✨</span>
              </div>

              {/* 3D Bubble Text Logo: READING = Purple, BUDDY = Yellow */}
              <div className="flex flex-col items-center justify-center select-none">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-3d-reading rotate-[-1.5deg] leading-none tracking-tight">
                  READING
                </h1>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-3d-buddy rotate-[1.5deg] leading-none tracking-tight mt-0.5 sm:mt-1">
                  BUDDY
                </h1>
              </div>

              {/* Naturally Integrated EduBuddy Vector Owl Mascot */}
              <div className="relative flex items-center justify-center select-none shrink-0">
                <div className="animate-float drop-shadow-[0_6px_14px_rgba(109,40,217,0.18)]">
                  <VectorEduOwl size={100} />
                </div>
                {/* Energy sparkles */}
                <div className="absolute -top-2 -right-3 text-amber-400 font-black text-xl sm:text-2xl animate-gentle-pulse">
                  ⚡
                </div>
                <div className="absolute -bottom-2 -left-3 text-purple-400 font-black text-base sm:text-xl animate-gentle-pulse">
                  ✨
                </div>
              </div>
            </div>

            {/* Soft Pastel Lavender Tagline Capsule: ⭐ Read • Listen • Understand ⭐ */}
            <div className="relative inline-flex items-center gap-2 sm:gap-2.5 bg-gradient-to-r from-purple-100 via-[#ede9fe] to-purple-100 text-purple-900 font-black text-xs sm:text-sm md:text-base px-6 sm:px-8 py-1.5 sm:py-2 rounded-full border border-purple-200/90 shadow-xs mt-1 sm:mt-2 tracking-wide">
              <span className="text-amber-400 text-sm sm:text-base animate-gentle-pulse">⭐</span>
              <span>Read • Listen • Understand</span>
              <span className="text-amber-400 text-sm sm:text-base animate-gentle-pulse">⭐</span>
            </div>

            {/* Integrated Owl Welcome Speech Bubble (Small, Neat & Compact) */}
            <div className="flex justify-center mt-2.5 sm:mt-3 w-full max-w-lg px-2">
              <div className="flex items-center gap-2.5 max-w-full">
                <span className="text-2xl sm:text-3xl drop-shadow-xs shrink-0 animate-bounce" style={{ animationDuration: '3.5s' }}>
                  🦉
                </span>
                <div className="relative bg-[#fffdfb] text-slate-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm border border-purple-100 shadow-xs flex items-center shrink">
                  <span className="leading-tight text-left flex flex-col sm:flex-row sm:items-center sm:gap-1.5 justify-center">
                    <span className="text-purple-950 font-black">Hi, friend!</span>
                    <span className="text-purple-900/80 font-bold">Let's start today's reading adventure!</span>
                  </span>
                  <div className="absolute top-1/2 -left-2 w-3.5 h-3.5 bg-[#fffdfb] border-l border-b border-purple-100 transform rotate-45 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* READ / LISTEN / UNDERSTAND — ALL 3 USE THE SAME SOFT LAVENDER COLOR FAMILY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* Read Tile */}
            <div className="bg-gradient-to-r from-[#faf7ff] to-[#f4eeff] rounded-[24px] p-3 sm:p-4 border border-purple-200/80 shadow-[0_2px_0_#ede9fe] flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-[0_2px_0_#6b21a8] group-hover:scale-105 transition-transform p-2.5">
                <BookOpen size={26} className="stroke-[2.5]" />
              </div>
              <div className="flex-grow text-left">
                <h3 className="text-lg sm:text-xl font-black text-purple-950 leading-tight">Read</h3>
                <p className="text-purple-800/80 text-xs sm:text-sm font-bold leading-tight mt-0.5">Read exciting stories.</p>
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-[0_2px_0_#6b21a8] shrink-0 font-bold group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} className="stroke-[3]" />
              </div>
            </div>

            {/* Listen Tile (Same Matching Soft-Purple/Lavender Theme) */}
            <div className="bg-gradient-to-r from-[#faf7ff] to-[#f4eeff] rounded-[24px] p-3 sm:p-4 border border-purple-200/80 shadow-[0_2px_0_#ede9fe] flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-[0_2px_0_#6b21a8] group-hover:scale-105 transition-transform p-2.5">
                <Headphones size={26} className="stroke-[2.5]" />
              </div>
              <div className="flex-grow text-left">
                <h3 className="text-lg sm:text-xl font-black text-purple-950 leading-tight">Listen</h3>
                <p className="text-purple-800/80 text-xs sm:text-sm font-bold leading-tight mt-0.5">Listen to British English.</p>
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-[0_2px_0_#6b21a8] shrink-0 font-bold group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} className="stroke-[3]" />
              </div>
            </div>

            {/* Understand Tile (Same Matching Soft-Purple/Lavender Theme) */}
            <div className="bg-gradient-to-r from-[#faf7ff] to-[#f4eeff] rounded-[24px] p-3 sm:p-4 border border-purple-200/80 shadow-[0_2px_0_#ede9fe] flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-[0_2px_0_#6b21a8] group-hover:scale-105 transition-transform p-2.5">
                <HelpCircle size={26} className="stroke-[2.5]" />
              </div>
              <div className="flex-grow text-left">
                <h3 className="text-lg sm:text-xl font-black text-purple-950 leading-tight">Understand</h3>
                <p className="text-purple-800/80 text-xs sm:text-sm font-bold leading-tight mt-0.5">Answer fun questions.</p>
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-[0_2px_0_#6b21a8] shrink-0 font-bold group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} className="stroke-[3]" />
              </div>
            </div>
          </div>

          {/* LEVEL SECTION — BOTH LEVEL 1 AND LEVEL 2 USE THE SAME SOFT LAVENDER STYLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
            
            {/* LEVEL 1 GAME ZONE (Soft Lavender Background) */}
            <div className="bg-gradient-to-b from-[#faf7ff] via-[#f5efff] to-[#eee4ff] rounded-[30px] sm:rounded-[34px] p-4 sm:p-5 md:p-6 border-2 border-purple-200/90 flex flex-col shadow-[0_4px_16px_rgba(147,51,234,0.06)] relative overflow-hidden text-left">
              {/* Level 1 Header */}
              <div className="mb-3 sm:mb-4 relative z-10 flex items-start gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-[0_2px_0_#6b21a8] mt-0.5">
                  <Star size={20} className="fill-amber-300 text-amber-300 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-purple-950 mb-1 tracking-tight">READING BUDDY LEVEL 1</h3>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-purple-500 text-white px-3 py-0.5 rounded-full text-xs sm:text-sm font-black shadow-xs">Year 1–3</span>
                    <span className="text-purple-900 font-extrabold text-xs sm:text-sm">30 Interactive Storybooks</span>
                  </div>
                </div>
              </div>

              {/* 3 Stage Cards (Clean White Background) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-4 sm:mb-5 relative z-10">
                {/* Stage 1 */}
                {(() => {
                  const isCompleted = littleProgress >= 10;
                  return (
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 flex flex-col items-center text-center border border-purple-100 shadow-xs hover:-translate-y-0.5 transition-transform relative overflow-hidden">
                      {isCompleted && (
                        <div className="corner-ribbon-completed">
                          COMPLETED
                        </div>
                      )}
                      <div className="my-1.5 flex items-center justify-center h-14">
                        <VectorStageOpenBook size={54} />
                      </div>
                      <VectorStarRow filledCount={isCompleted ? 3 : (littleProgress > 0 ? 1 : 0)} />
                      <div className="font-black text-slate-800 text-sm sm:text-base leading-tight mt-1">Stage 1</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-500 mb-2 leading-tight">Books 1–10</div>
                      <div className="text-[10px] sm:text-xs font-black text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 mt-auto">
                        BEGINNER
                      </div>
                    </div>
                  );
                })()}

                {/* Stage 2 */}
                {(() => {
                  const isCompleted = littleProgress >= 20;
                  return (
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 flex flex-col items-center text-center border border-purple-100 shadow-xs hover:-translate-y-0.5 transition-transform relative overflow-hidden">
                      {isCompleted && (
                        <div className="corner-ribbon-completed">
                          COMPLETED
                        </div>
                      )}
                      <div className="my-1.5 flex items-center justify-center h-14">
                        <VectorStageBookStack size={54} />
                      </div>
                      <VectorStarRow filledCount={isCompleted ? 3 : (littleProgress >= 10 ? 2 : 0)} />
                      <div className="font-black text-slate-800 text-sm sm:text-base leading-tight mt-1">Stage 2</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-500 mb-2 leading-tight">Books 11–20</div>
                      <div className="text-[10px] sm:text-xs font-black text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100 mt-auto">
                        INTERMEDIATE
                      </div>
                    </div>
                  );
                })()}

                {/* Stage 3 */}
                {(() => {
                  const isCompleted = littleProgress >= 30;
                  return (
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 flex flex-col items-center text-center border border-purple-100 shadow-xs hover:-translate-y-0.5 transition-transform relative overflow-hidden">
                      {isCompleted && (
                        <div className="corner-ribbon-completed">
                          COMPLETED
                        </div>
                      )}
                      <div className="my-1.5 flex items-center justify-center h-14">
                        <VectorStageGoldTrophy size={54} />
                      </div>
                      <VectorStarRow filledCount={isCompleted ? 3 : (littleProgress >= 20 ? 2 : 0)} />
                      <div className="font-black text-slate-800 text-sm sm:text-base leading-tight mt-1">Stage 3</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-500 mb-2 leading-tight">Books 21–30</div>
                      <div className="text-[10px] sm:text-xs font-black text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 mt-auto">
                        ADVANCED
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Soft Lavender / Light Purple Start Reading Button */}
              <div className="mt-auto relative z-10 flex flex-col sm:flex-row gap-2.5">
                <button 
                  onClick={() => handleOpenBook(BOOKS.find(b => b.id === 'little') || BOOKS[0], true)}
                  className="w-full py-3 sm:py-3.5 px-6 rounded-2xl text-white font-black text-base sm:text-lg bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-500 hover:brightness-105 shadow-[0_3px_0_#6b21a8,0_6px_14px_rgba(147,51,234,0.2)] active:translate-y-0.5 active:shadow-[0_1px_0_#6b21a8] transition-all flex justify-center items-center gap-2.5 cursor-pointer"
                >
                  <BookOpen size={22} className="stroke-[2.5]" />
                  <span>Start Reading</span>
                </button>

                {littleProgress > 0 && littleProgress < totalLittle && (
                  <button 
                    onClick={() => handleOpenBook(BOOKS.find(b => b.id === 'little') || BOOKS[0], false)}
                    className="w-full sm:w-auto py-2 px-4 rounded-2xl text-purple-950 font-black text-xs sm:text-sm bg-white hover:bg-purple-50 border border-purple-200 shadow-xs active:translate-y-0.5 transition-all flex flex-col justify-center items-center gap-0.5 cursor-pointer shrink-0"
                  >
                    <div className="flex items-center gap-1.5 leading-none">
                      <Bookmark size={15} className="text-purple-600 fill-purple-100" />
                      <span>Continue</span>
                    </div>
                    <div className="text-[10px] font-black bg-purple-100 text-purple-900 px-2 py-0.5 rounded-full leading-none border border-purple-200 mt-0.5">
                      Book {littleProgress + 1} / {totalLittle}
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* LEVEL 2 GAME ZONE (SAME Soft Lavender Background & Styling as Level 1) */}
            <div className="bg-gradient-to-b from-[#faf7ff] via-[#f5efff] to-[#eee4ff] rounded-[30px] sm:rounded-[34px] p-4 sm:p-5 md:p-6 border-2 border-purple-200/90 flex flex-col shadow-[0_4px_16px_rgba(147,51,234,0.06)] relative overflow-hidden text-left">
              {/* Level 2 Header */}
              <div className="mb-3 sm:mb-4 relative z-10 flex items-start gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-[0_2px_0_#6b21a8] mt-0.5">
                  <Star size={20} className="fill-amber-300 text-amber-300 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-purple-950 mb-1 tracking-tight">READING BUDDY LEVEL 2</h3>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-purple-500 text-white px-3 py-0.5 rounded-full text-xs sm:text-sm font-black shadow-xs">Year 4–6</span>
                    <span className="text-purple-900 font-extrabold text-xs sm:text-sm">30 Interactive Storybooks</span>
                  </div>
                </div>
              </div>

              {/* 3 Stage Cards (Clean White Background, exactly like Level 1) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-4 sm:mb-5 relative z-10">
                {/* Stage 1 */}
                {(() => {
                  const isCompleted = growingProgress >= 10;
                  return (
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 flex flex-col items-center text-center border border-purple-100 shadow-xs hover:-translate-y-0.5 transition-transform relative overflow-hidden">
                      {isCompleted && (
                        <div className="corner-ribbon-completed">
                          COMPLETED
                        </div>
                      )}
                      <div className="my-1.5 flex items-center justify-center h-14">
                        <VectorStageOpenBook size={54} />
                      </div>
                      <VectorStarRow filledCount={isCompleted ? 3 : (growingProgress > 0 ? 1 : 0)} />
                      <div className="font-black text-slate-800 text-sm sm:text-base leading-tight mt-1">Stage 1</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-500 mb-2 leading-tight">Books 1–10</div>
                      <div className="text-[10px] sm:text-xs font-black text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 mt-auto">
                        BEGINNER
                      </div>
                    </div>
                  );
                })()}

                {/* Stage 2 */}
                {(() => {
                  const isCompleted = growingProgress >= 20;
                  return (
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 flex flex-col items-center text-center border border-purple-100 shadow-xs hover:-translate-y-0.5 transition-transform relative overflow-hidden">
                      {isCompleted && (
                        <div className="corner-ribbon-completed">
                          COMPLETED
                        </div>
                      )}
                      <div className="my-1.5 flex items-center justify-center h-14">
                        <VectorStageBookStack size={54} />
                      </div>
                      <VectorStarRow filledCount={isCompleted ? 3 : (growingProgress >= 10 ? 2 : 0)} />
                      <div className="font-black text-slate-800 text-sm sm:text-base leading-tight mt-1">Stage 2</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-500 mb-2 leading-tight">Books 11–20</div>
                      <div className="text-[10px] sm:text-xs font-black text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100 mt-auto">
                        INTERMEDIATE
                      </div>
                    </div>
                  );
                })()}

                {/* Stage 3 */}
                {(() => {
                  const isCompleted = growingProgress >= 30;
                  return (
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 flex flex-col items-center text-center border border-purple-100 shadow-xs hover:-translate-y-0.5 transition-transform relative overflow-hidden">
                      {isCompleted && (
                        <div className="corner-ribbon-completed">
                          COMPLETED
                        </div>
                      )}
                      <div className="my-1.5 flex items-center justify-center h-14">
                        <VectorStageGoldTrophy size={54} />
                      </div>
                      <VectorStarRow filledCount={isCompleted ? 3 : (growingProgress >= 20 ? 2 : 0)} />
                      <div className="font-black text-slate-800 text-sm sm:text-base leading-tight mt-1">Stage 3</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-500 mb-2 leading-tight">Books 21–30</div>
                      <div className="text-[10px] sm:text-xs font-black text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 mt-auto">
                        ADVANCED
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Soft Lavender / Light Purple Start Reading Button (Unified with Level 1) */}
              <div className="mt-auto relative z-10 flex flex-col sm:flex-row gap-2.5">
                <button 
                  onClick={() => handleOpenBook(BOOKS.find(b => b.id === 'growing') || BOOKS[1], true)}
                  className="w-full py-3 sm:py-3.5 px-6 rounded-2xl text-white font-black text-base sm:text-lg bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-500 hover:brightness-105 shadow-[0_3px_0_#6b21a8,0_6px_14px_rgba(147,51,234,0.2)] active:translate-y-0.5 active:shadow-[0_1px_0_#6b21a8] transition-all flex justify-center items-center gap-2.5 cursor-pointer"
                >
                  <BookOpen size={22} className="stroke-[2.5]" />
                  <span>Start Reading</span>
                </button>

                {growingProgress > 0 && growingProgress < totalGrowing && (
                  <button 
                    onClick={() => handleOpenBook(BOOKS.find(b => b.id === 'growing') || BOOKS[1], false)}
                    className="w-full sm:w-auto py-2 px-4 rounded-2xl text-purple-950 font-black text-xs sm:text-sm bg-white hover:bg-purple-50 border border-purple-200 shadow-xs active:translate-y-0.5 transition-all flex flex-col justify-center items-center gap-0.5 cursor-pointer shrink-0"
                  >
                    <div className="flex items-center gap-1.5 leading-none">
                      <Bookmark size={15} className="text-purple-600 fill-purple-100" />
                      <span>Continue</span>
                    </div>
                    <div className="text-[10px] font-black bg-purple-100 text-purple-900 px-2 py-0.5 rounded-full leading-none border border-purple-200 mt-0.5">
                      Book {growingProgress + 1} / {totalGrowing}
                    </div>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* EduBuddy Sub-Footer inside board */}
          <div className="text-center mt-4 sm:mt-5 text-purple-900/60 font-bold text-[11px] sm:text-xs">
            EduBuddy©
          </div>

        </div>

      </div>
    );
  }


  if (currentView === 'congrats' && selectedBook) {
    const isLevel1 = selectedBook.id === 'little';
    
    let titleElement = (
      <p className="text-xl sm:text-2xl font-black text-purple-950 mb-6 whitespace-pre-line leading-snug">
        You have completed <span className="text-purple-700">{selectedBook.title}</span>!
      </p>
    );
    let subtitleElement = `⭐ ${selectedBook.stories.length} / ${selectedBook.stories.length} Stories Completed`;
    let primaryButtonText = `📘 Continue to ${BOOKS[BOOKS.findIndex(b => b.id === selectedBook.id) + 1]?.title || 'Home'}`;
    let primaryButtonColor = 'bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:brightness-105 shadow-[0_4px_0_#4c1d95]';
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
          <p className="text-xl sm:text-2xl font-black text-purple-950 mb-6 whitespace-pre-line leading-snug">
            You have completed{'\n'}<span className="text-purple-700">⭐ Level 1 • Stage 1</span>
          </p>
        );
        subtitleElement = "10 / 10 Stories Completed";
        primaryButtonText = "Continue to Stage 2";
        primaryButtonColor = "bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:brightness-105 shadow-[0_4px_0_#4c1d95]";
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
          <p className="text-xl sm:text-2xl font-black text-purple-950 mb-6 whitespace-pre-line leading-snug">
            You have completed{'\n'}<span className="text-purple-700">⭐⭐ Level 1 • Stage 2</span>
          </p>
        );
        subtitleElement = "20 / 30 Stories Completed";
        primaryButtonText = "Continue to Stage 3";
        primaryButtonColor = "bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:brightness-105 shadow-[0_4px_0_#4c1d95]";
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
          <p className="text-xl sm:text-2xl font-black text-purple-950 mb-6 whitespace-pre-line leading-snug">
            You have completed{'\n'}<span className="text-purple-700">⭐⭐⭐ Reading Buddy Level 1</span>
          </p>
        );
        subtitleElement = "30 / 30 Stories Completed";
        primaryButtonText = "Start Reading Buddy Level 2";
        primaryButtonColor = "bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:brightness-105 shadow-[0_4px_0_#4c1d95]";
      }
    } else if (selectedBook.id === 'growing') {
      if (currentStoryIndex === 9) {
        titleElement = (
          <p className="text-xl sm:text-2xl font-black text-amber-950 mb-6 whitespace-pre-line leading-snug">
            You have completed{'\n'}<span className="text-amber-600">⭐ Level 2 • Stage 1</span>
          </p>
        );
        subtitleElement = "10 / 10 Stories Completed";
        primaryButtonText = "Continue to Stage 2";
        primaryButtonColor = "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:brightness-105 shadow-[0_4px_0_#b45309] text-slate-900";
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
          <p className="text-xl sm:text-2xl font-black text-amber-950 mb-6 whitespace-pre-line leading-snug">
            You have completed{'\n'}<span className="text-amber-600">⭐⭐ Level 2 • Stage 2</span>
          </p>
        );
        subtitleElement = "20 / 30 Stories Completed";
        primaryButtonText = "Continue to Stage 3";
        primaryButtonColor = "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:brightness-105 shadow-[0_4px_0_#b45309] text-slate-900";
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
          <p className="text-xl sm:text-2xl font-black text-purple-950 mb-6 whitespace-pre-line leading-snug">
            You have completed{'\n'}<span className="text-purple-700">⭐⭐⭐ Reading Buddy Level 2</span>
          </p>
        );
        subtitleElement = "30 / 30 Stories Completed";
        primaryButtonText = "Back to Home";
        primaryButtonColor = "bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:brightness-105 shadow-[0_4px_0_#4c1d95]";
        handlePrimaryClick = () => {
          handleGoHome();
        };
      }
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] via-[#faf5ff] to-[#fefce8] p-4 sm:p-8 flex flex-col items-center justify-center font-sans text-slate-800 select-none relative">
        <div className="max-w-2xl w-full bg-[#fffefc] rounded-[36px] sm:rounded-[44px] shadow-[0_25px_60px_-15px_rgba(107,33,168,0.18)] border-b-[8px] border-purple-200 border-2 border-purple-100 p-6 sm:p-10 text-center relative overflow-hidden">
          
          <div className="my-2 flex justify-center">
            <VectorStageGoldTrophy size={80} />
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-amber-500 mb-4 drop-shadow-xs flex items-center justify-center gap-3">
            <Sparkles className="text-amber-400 w-8 h-8 sm:w-10 sm:h-10 animate-gentle-pulse" /> 
            <span>Congratulations!</span>
            <Sparkles className="text-amber-400 w-8 h-8 sm:w-10 sm:h-10 animate-gentle-pulse" />
          </h1>
          {titleElement}
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-950 px-5 sm:px-7 py-2.5 rounded-full text-base sm:text-lg font-black mb-8 border-2 border-amber-300 shadow-xs">
            {subtitleElement}
          </div>
          
          <div className="flex flex-col gap-3.5 max-w-sm mx-auto">
            <button 
              onClick={handlePrimaryClick}
              className={`w-full py-3.5 sm:py-4 rounded-2xl text-white font-black text-lg sm:text-xl transition-transform active:scale-95 btn-gloss cursor-pointer ${primaryButtonColor}`}
            >
              {primaryButtonText}
            </button>
            
            {primaryButtonText !== "Back to Home" && (
              <button 
                onClick={handleGoHome}
                className="w-full py-3 sm:py-3.5 rounded-2xl text-purple-800 font-black text-base hover:bg-purple-50 border-2 border-purple-200 transition-colors cursor-pointer"
              >
                Back to Home
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-0 right-0 w-full text-center text-purple-900/60 font-black text-[10px] sm:text-xs z-10">
          EduBuddy©
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f5f3ff] via-[#faf5ff] to-[#fefce8] p-2.5 sm:p-4 md:p-6 flex flex-col items-center justify-center font-sans text-slate-800 relative overflow-x-hidden select-none">
      
      {/* Subtle Background Decorative Atmosphere (Outside edges, low opacity) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-6 left-6 opacity-35 animate-float hidden sm:block">
          <VectorStar3D size={24} color="gold" />
        </div>
        <div className="absolute top-10 right-8 opacity-35 animate-float-reverse hidden sm:block">
          <VectorStar3D size={20} color="purple" />
        </div>
        <div className="absolute bottom-12 left-8 opacity-30 animate-float hidden sm:block">
          <VectorStar3D size={22} color="gold" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-35 animate-float-reverse hidden sm:block">
          <VectorStar3D size={24} color="purple" />
        </div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-200/25 rounded-full blur-3xl"></div>
      </div>

      {/* Main Reading Storybook Container */}
      <div className="w-full max-w-3xl lg:max-w-4xl mx-auto flex flex-col bg-[#fffefc] rounded-[28px] sm:rounded-[36px] shadow-[0_15px_40px_-10px_rgba(107,33,168,0.12),0_4px_16px_rgba(0,0,0,0.04)] border-[3px] border-purple-200/85 relative p-3.5 sm:p-5 md:p-6 z-10 my-auto">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 border-b border-purple-100 mb-2.5 sm:mb-3.5">
          <button 
            onClick={handleGoHome} 
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-white text-purple-700 rounded-full hover:bg-purple-50 border border-purple-200 shadow-xs active:scale-95 transition-all cursor-pointer shrink-0"
            title="Home"
          >
            <Home size={17} />
          </button>
          
          {selectedBook && (
            <div className="flex items-center bg-white px-3.5 py-1 sm:py-1.5 rounded-full border border-purple-200 shadow-xs">
              <span className="text-xs sm:text-sm font-black text-purple-950 tracking-wide flex items-center gap-1.5">
                <span>{selectedBook.id === 'little' ? '📚 Level 1' : selectedBook.id === 'growing' ? '📘 Level 2' : `📚 ${selectedBook.title}`}</span>
                <span className="text-purple-300">•</span>
                <span className="text-amber-500">★</span>
                <span>{currentStoryIndex < 10 ? 'Stage 1' : currentStoryIndex < 20 ? 'Stage 2' : 'Stage 3'}</span>
              </span>
            </div>
          )}
        </div>

        {/* Story Visual Header: Centered Image + Speaker Button + Story Title */}
        <div className="flex flex-col items-center mb-2 sm:mb-3 relative">
          {/* Image Frame */}
          <div className="relative flex items-center justify-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl sm:rounded-3xl border-[3.5px] border-amber-300 bg-amber-50/60 p-1 shadow-[0_6px_20px_rgba(107,33,168,0.1)] overflow-hidden">
              <img 
                src={currentStory?.image ? encodeURI(currentStory.image) : undefined} 
                alt={currentStory?.title || "Story illustration"} 
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* Speaker / Audio Button Attached Neatly to Image Header */}
            <button 
              onClick={handlePlayResume}
              className="absolute -right-2.5 sm:-right-3.5 top-1 sm:top-2 bg-purple-100 hover:bg-purple-200 text-purple-700 p-2 sm:p-2.5 rounded-full border border-purple-200 shadow-xs active:scale-95 transition-all cursor-pointer flex items-center justify-center"
              title="Listen to story"
            >
              <Volume2 size={18} />
            </button>
          </div>

          {/* Story Title Pill: ⭐ TITLE ⭐ */}
          <div className="mt-2.5 sm:mt-3">
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white font-black text-xs sm:text-sm md:text-base px-5 sm:px-6 py-1 sm:py-1.5 rounded-full shadow-[0_2px_0_#4c1d95,0_4px_10px_rgba(109,40,217,0.2)] tracking-wide uppercase">
              <span className="text-amber-300 text-xs sm:text-sm">★</span>
              <span>{currentStory?.title}</span>
              <span className="text-amber-300 text-xs sm:text-sm">★</span>
            </div>
          </div>
        </div>

        {/* STORY READING CARD (Warm cream/subtle lavender background, comfortable reading) */}
        <div className="w-full bg-[#fffefb] bg-gradient-to-b from-[#fffefc] to-[#faf6ff] rounded-2xl sm:rounded-3xl border border-purple-200/80 shadow-[0_4px_16px_rgba(107,33,168,0.05)] p-4 sm:p-6 md:p-7 my-2 sm:my-2.5 flex flex-col items-center">
          
          {/* Story Paragraph Container */}
          <div 
            ref={containerRef}
            className="w-full max-w-2xl text-[1.12rem] sm:text-[1.28rem] md:text-[1.4rem] leading-[1.75] sm:leading-[1.85] text-left md:text-justify text-slate-800 font-normal px-2 py-1 select-text"
          >
            <div className="inline">
              {currentStoryContent.map((sentence, idx) => {
                const isCurrent = currentIndex === idx;
                
                return (
                  <span key={idx}>
                    <span
                      ref={el => sentenceRefs.current[idx] = el}
                      className={`transition-all duration-200 cursor-pointer rounded-md px-1.5 py-0.5 ${
                        isCurrent 
                          ? 'bg-amber-200/90 text-purple-950 font-medium shadow-xs ring-2 ring-amber-300/80 relative z-10' 
                          : 'text-slate-800 font-normal hover:bg-purple-50/80'
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

          {/* Play + Read Again Controls (Directly under paragraph) */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-5 mb-2 shrink-0">
            <button 
              onClick={handlePlayResume} 
              className="flex items-center justify-center gap-2 h-10 sm:h-11 px-6 sm:px-8 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:brightness-105 text-white font-black rounded-full shadow-[0_3px_0_#4c1d95,0_6px_14px_rgba(109,40,217,0.25)] active:translate-y-0.5 active:shadow-[0_1px_0_#4c1d95] btn-gloss transition-all cursor-pointer text-sm sm:text-base"
              title="Play"
            >
              <Play size={17} className="fill-current" />
              <span>Play</span>
            </button>
            <button 
              onClick={handleReadAgain} 
              className="flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-7 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:brightness-105 text-purple-950 font-black rounded-full shadow-[0_3px_0_#b45309,0_6px_14px_rgba(245,158,11,0.25)] active:translate-y-0.5 active:shadow-[0_1px_0_#b45309] btn-gloss transition-all cursor-pointer text-sm sm:text-base"
              title="Read Again"
            >
              <RotateCcw size={16} className="stroke-[2.5px]" />
              <span>Read Again</span>
            </button>
          </div>

          {/* Progress Controls: Dots + Text */}
          <div className="flex flex-col items-center gap-1.5 mt-1 shrink-0">
            <div className="flex items-center gap-1.5">
              {currentStoryContent.map((_, dotIdx) => (
                <div 
                  key={dotIdx}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    dotIdx === currentIndex
                      ? 'bg-amber-400 ring-2 ring-purple-600 scale-110'
                      : dotIdx < currentIndex
                      ? 'bg-purple-600'
                      : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-[10px] sm:text-xs font-black text-purple-900/70 uppercase tracking-widest">
              Reading {currentIndex >= 0 ? currentIndex + 1 : 0} of {currentStoryContent.length}
            </p>
          </div>
        </div>

        {/* Questions Section */}
        <div className="w-full bg-[#f8f4ff] rounded-2xl border border-purple-200/90 overflow-hidden flex flex-col mb-2 sm:mb-3">
          <button 
            onClick={() => setQuestionsExpanded(!questionsExpanded)}
            className="w-full py-2 sm:py-2.5 px-4 flex items-center justify-between text-xs sm:text-sm font-black text-purple-900 hover:bg-purple-100/70 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <span>❓</span>
              <span>Questions</span>
            </span>
            <span className="text-purple-600 text-xs">{questionsExpanded ? '▲' : '▼'}</span>
          </button>
          
          <AnimatePresence>
            {questionsExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden flex flex-col"
              >
                <div className="p-3 sm:p-4 pt-1 flex flex-col gap-2.5 max-w-2xl mx-auto w-full">
                  {currentStory?.questions.map((q, i) => (
                    <div key={i} className="flex flex-col gap-1.5 bg-white p-3 sm:p-3.5 rounded-2xl shadow-xs border border-purple-100">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-start gap-2">
                          <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                            <span className="text-purple-600 font-black mr-1">{i + 1}.</span> 
                            {q.question}
                          </p>
                          <button
                            onClick={() => playStandaloneText(q.question)}
                            className="shrink-0 text-purple-600 hover:text-purple-800 transition-colors p-1 cursor-pointer"
                            title="Listen to question"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                        <button 
                          onClick={() => setShowAnswer(prev => ({ ...prev, [i]: !prev[i] }))}
                          className={`shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-colors active:scale-95 cursor-pointer ${showAnswer[i] ? 'bg-purple-600 text-white shadow-inner' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
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
                            <div className="flex items-center justify-between bg-amber-50 text-amber-950 text-[11px] sm:text-xs font-bold py-1.5 px-3 rounded-xl border border-amber-200 shadow-xs">
                              <span>{q.answer}</span>
                              <button
                                onClick={() => playStandaloneText(q.answer)}
                                className="shrink-0 text-amber-700 hover:text-amber-900 transition-colors p-1 ml-2 cursor-pointer"
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

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between pt-2 border-t border-purple-100">
          {(() => {
            const isFirstStoryInApp = (selectedBook?.id === BOOKS[0]?.id) && currentStoryIndex === 0;
            const isLastStoryInApp = (selectedBook?.id === BOOKS[BOOKS.length - 1]?.id) && (currentStoryIndex + 1 === selectedBook?.stories.length);

            return (
              <>
                <button 
                  onClick={handlePreviousStory}
                  disabled={isFirstStoryInApp}
                  className={`flex items-center gap-1 sm:gap-2 px-3.5 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-xl font-black text-xs sm:text-sm transition-all ${
                    isFirstStoryInApp 
                      ? 'opacity-40 cursor-not-allowed bg-purple-50/50 text-purple-300 border border-purple-100' 
                      : 'bg-white hover:bg-purple-50 text-purple-800 border border-purple-200 active:scale-95 shadow-xs cursor-pointer'
                  }`}
                >
                  <ArrowLeft size={16} /> <span>Previous</span>
                </button>
                
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 text-amber-950 font-black text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 rounded-full shadow-xs">
                  📖 Story {currentStoryIndex + 1} / {selectedBook?.stories.length}
                </div>

                <button 
                  onClick={handleNextStory}
                  className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:brightness-105 text-white transition-all active:scale-95 shadow-[0_2px_0_#4c1d95] btn-gloss cursor-pointer"
                >
                  <span>{isLastStoryInApp ? 'Finish' : 'Next'}</span> <ArrowRight size={16} />
                </button>
              </>
            );
          })()}
        </div>

      </div>

      {/* EduBuddy Footer */}
      <div className="w-full text-center mt-2.5 text-purple-900/60 font-black text-[10px] sm:text-xs z-10 shrink-0">
        EduBuddy©
      </div>
    </div>
  );
}