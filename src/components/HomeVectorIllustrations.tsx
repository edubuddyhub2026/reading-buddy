import React from 'react';

/**
 * Cohesive Cute Vector Illustrations matching the EduBuddy purple and yellow reference design
 */

// EduBuddy Purple Owl Mascot matching reference image
export const VectorEduOwl: React.FC<{ size?: number; className?: string }> = ({ size = 96, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      {/* Body Gradient - Rich EduBuddy Purple */}
      <linearGradient id="owlBodyGrad" x1="50" y1="18" x2="50" y2="88" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9333EA" />
        <stop offset="0.5" stopColor="#7E22CE" />
        <stop offset="1" stopColor="#581C87" />
      </linearGradient>

      {/* Belly Gradient - Soft Lavender */}
      <linearGradient id="owlBellyGrad" x1="50" y1="46" x2="50" y2="82" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5F3FF" />
        <stop offset="1" stopColor="#DDD6FE" />
      </linearGradient>

      {/* Eye Rim - Bright Yellow */}
      <linearGradient id="owlEyeRimGrad" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#FEF08A" />
        <stop offset="1" stopColor="#EAB308" />
      </linearGradient>

      {/* Beak / Feet - Warm Orange */}
      <linearGradient id="owlOrangeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#FB923C" />
        <stop offset="1" stopColor="#EA580C" />
      </linearGradient>

      <filter id="owlShadow" x="-15%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#3B0764" floodOpacity="0.25" />
      </filter>
    </defs>

    {/* Owl Body & Wings */}
    <g filter="url(#owlShadow)">
      {/* Left Ear Tufts */}
      <path d="M22 28L30 14L40 26Z" fill="#6B21A8" stroke="#4C1D95" strokeWidth="2" strokeLinejoin="round" />
      <path d="M26 26L31 17L37 25Z" fill="#9333EA" />

      {/* Right Ear Tufts */}
      <path d="M78 28L70 14L60 26Z" fill="#6B21A8" stroke="#4C1D95" strokeWidth="2" strokeLinejoin="round" />
      <path d="M74 26L69 17L63 25Z" fill="#9333EA" />

      {/* Main Oval Body */}
      <ellipse cx="50" cy="54" rx="36" ry="34" fill="url(#owlBodyGrad)" stroke="#4C1D95" strokeWidth="2.5" />

      {/* Left Wing */}
      <path d="M16 44C13 54 16 68 24 74C23 64 22 52 26 42C23 42 18 43 16 44Z" fill="#6B21A8" stroke="#4C1D95" strokeWidth="2" strokeLinejoin="round" />

      {/* Right Wing */}
      <path d="M84 44C87 54 84 68 76 74C77 64 78 52 74 42C77 42 82 43 84 44Z" fill="#6B21A8" stroke="#4C1D95" strokeWidth="2" strokeLinejoin="round" />

      {/* Lavender Belly */}
      <ellipse cx="50" cy="63" rx="22" ry="19" fill="url(#owlBellyGrad)" stroke="#C4B5FD" strokeWidth="1.5" />

      {/* Cute Belly Feather Marks */}
      <path d="M44 57Q47 60 50 57" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 57Q53 60 56 57" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 64Q44 67 48 64" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 64Q56 67 60 64" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 71Q50 74 54 71" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />

      {/* Left Eye */}
      <circle cx="36" cy="38" r="13" fill="url(#owlEyeRimGrad)" stroke="#CA8A04" strokeWidth="2" />
      <circle cx="36" cy="38" r="10" fill="#FFFFFF" />
      <circle cx="37" cy="38" r="6" fill="#1E1B4B" />
      <circle cx="39" cy="35" r="2.5" fill="#FFFFFF" />
      <circle cx="34" cy="40" r="1.2" fill="#FFFFFF" />

      {/* Right Eye */}
      <circle cx="64" cy="38" r="13" fill="url(#owlEyeRimGrad)" stroke="#CA8A04" strokeWidth="2" />
      <circle cx="64" cy="38" r="10" fill="#FFFFFF" />
      <circle cx="63" cy="38" r="6" fill="#1E1B4B" />
      <circle cx="65" cy="35" r="2.5" fill="#FFFFFF" />
      <circle cx="60" cy="40" r="1.2" fill="#FFFFFF" />

      {/* Golden Eyeglasses Bridge connecting eyes */}
      <path d="M48 37C49 35 51 35 52 37" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round" />

      {/* Orange Beak */}
      <path d="M45 42L55 42L50 51Z" fill="url(#owlOrangeGrad)" stroke="#C2410C" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Orange Feet */}
      <path d="M38 85C36 88 34 91 30 91M38 85C38 89 38 92 38 92M38 85C40 88 42 91 46 91" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
      <path d="M62 85C60 88 58 91 54 91M62 85C62 89 62 92 62 92M62 85C64 88 66 91 70 91" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

// 3D Golden Star
export const VectorStar3D: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="starGrad" x1="18" y1="2" x2="18" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="0.5" stopColor="#FACC15" />
        <stop offset="1" stopColor="#EAB308" />
      </linearGradient>
      <linearGradient id="starShadow" x1="18" y1="20" x2="18" y2="35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#CA8A04" />
        <stop offset="1" stopColor="#A16207" />
      </linearGradient>
      <filter id="starGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#CA8A04" floodOpacity="0.4" />
      </filter>
    </defs>
    <path
      d="M18 2.5L22.6 12.2L33.3 13.6L25.4 21L27.4 31.6L18 26.4L8.6 31.6L10.6 21L2.7 13.6L13.4 12.2L18 2.5Z"
      fill="url(#starGrad)"
      stroke="#CA8A04"
      strokeWidth="1.5"
      strokeLinejoin="round"
      filter="url(#starGlow)"
    />
    <path
      d="M18 6L21 13.5L29 14.5L23 20L24.5 28L18 24L11.5 28L13 20L7 14.5L15 13.5L18 6Z"
      fill="white"
      fillOpacity="0.25"
    />
  </svg>
);

// Floating Decorative Illustrated Storybook for Background
export const VectorFloatingStorybook: React.FC<{ color?: 'purple' | 'gold'; size?: number; className?: string }> = ({ 
  color = 'purple', 
  size = 64, 
  className = '' 
}) => {
  const isPurple = color === 'purple';
  const coverColor = isPurple ? '#7C3AED' : '#F59E0B';
  const coverShade = isPurple ? '#5B21B6' : '#B45309';
  
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={`bookCover_${color}`} x1="40" y1="5" x2="40" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor={isPurple ? '#A78BFA' : '#FDE047'} />
          <stop offset="1" stopColor={coverColor} />
        </linearGradient>
        <filter id={`bookGlow_${color}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor={coverShade} floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Outer Cover */}
      <path
        d="M6 48C18 42 36 44 40 48C44 44 62 42 74 48L72 16C60 11 44 13 40 18C36 13 20 11 8 16L6 48Z"
        fill={`url(#bookCover_${color})`}
        stroke={coverShade}
        strokeWidth="2.5"
        strokeLinejoin="round"
        filter={`url(#bookGlow_${color})`}
      />
      {/* Left Page Layers */}
      <path
        d="M10 44C20 39 34 41 38 45L38 15C34 11 20 9 10 14L10 44Z"
        fill="#FFFDF7"
        stroke="#E2E8F0"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Right Page Layers */}
      <path
        d="M42 45C46 41 60 39 70 44L70 14C60 9 46 11 42 15L42 45Z"
        fill="#FFFDF7"
        stroke="#E2E8F0"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Spine / Center Binding */}
      <line x1="40" y1="16" x2="40" y2="47" stroke={coverShade} strokeWidth="2" strokeLinecap="round" />
      {/* Subtle lines on pages */}
      <line x1="16" y1="22" x2="32" y2="24" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="28" x2="30" y2="30" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="24" x2="64" y2="22" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50" y1="30" x2="64" y2="28" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

// Stage 1: Cute Open Storybook Vector
export const VectorStageOpenBook: React.FC<{ size?: number; className?: string }> = ({ size = 52, className = '' }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="stg1Cover" x1="32" y1="8" x2="32" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <filter id="stg1Shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0369A1" floodOpacity="0.25" />
      </filter>
    </defs>
    {/* Blue Back Cover */}
    <path
      d="M5 42C16 37 28 39 32 43C36 39 48 37 59 42L57 14C46 9 35 11 32 16C29 11 18 9 7 14L5 42Z"
      fill="url(#stg1Cover)"
      stroke="#0369A1"
      strokeWidth="2"
      strokeLinejoin="round"
      filter="url(#stg1Shadow)"
    />
    {/* Left Page (White/Cream) */}
    <path
      d="M8 38C17 34 27 36 30 40V14C27 10 17 8 8 12V38Z"
      fill="#FFFFFF"
      stroke="#0284C7"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Right Page (White/Cream) */}
    <path
      d="M34 40C37 36 47 34 56 38V12C47 8 37 10 34 14V40Z"
      fill="#FFFFFF"
      stroke="#0284C7"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Little Red Ribbon Bookmark */}
    <path
      d="M32 15V32L34.5 29L37 32V15"
      fill="#EF4444"
      stroke="#B91C1C"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
    {/* Page Content Detail */}
    <circle cx="18" cy="20" r="3" fill="#38BDF8" />
    <path d="M14 28H24" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 32H22" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="46" cy="20" r="3" fill="#FBBF24" />
    <path d="M40 28H50" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M42 32H50" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Stage 2: Colourful Stack of 3 Books Vector
export const VectorStageBookStack: React.FC<{ size?: number; className?: string }> = ({ size = 52, className = '' }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="stackShadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Bottom Book (Green / Emerald) */}
    <g filter="url(#stackShadow)">
      <rect x="8" y="34" width="48" height="11" rx="3.5" fill="#10B981" stroke="#047857" strokeWidth="1.8" />
      <rect x="13" y="36.5" width="40" height="6" rx="1.5" fill="#FFFDF5" />
      <rect x="8" y="34" width="7" height="11" rx="2" fill="#34D399" />
      <path d="M42 41V47L44.5 45L47 47V41" fill="#F59E0B" stroke="#B45309" strokeWidth="0.6" />
    </g>

    {/* Middle Book (Coral / Pink-Red) */}
    <g>
      <rect x="12" y="22" width="43" height="11" rx="3.5" fill="#F43F5E" stroke="#BE123C" strokeWidth="1.8" />
      <rect x="17" y="24.5" width="35" height="6" rx="1.5" fill="#FFFDF5" />
      <rect x="12" y="22" width="6.5" height="11" rx="2" fill="#FB7185" />
      <line x1="22" y1="27.5" x2="38" y2="27.5" stroke="#CBD5E1" strokeWidth="1" strokeLinecap="round" />
    </g>

    {/* Top Book (Purple / Sky Blue) */}
    <g>
      <rect x="16" y="10" width="38" height="11" rx="3.5" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1.8" />
      <rect x="21" y="12.5" width="30" height="6" rx="1.5" fill="#FFFDF5" />
      <rect x="16" y="10" width="6" height="11" rx="2" fill="#A78BFA" />
      <circle cx="34" cy="15.5" r="2" fill="#FDE047" />
    </g>
  </svg>
);

// Stage 3: Shiny Golden Trophy Vector
export const VectorStageGoldTrophy: React.FC<{ size?: number; className?: string }> = ({ size = 52, className = '' }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="trophyGold" x1="32" y1="6" x2="32" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="0.4" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="trophyHighlight" x1="26" y1="8" x2="32" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" stopOpacity="0.7" />
        <stop offset="1" stopColor="#FDE047" stopOpacity="0.1" />
      </linearGradient>
      <filter id="trophyShadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#B45309" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Left Handle */}
    <path
      d="M20 12C12 12 11 22 20 25"
      stroke="#D97706"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M20 12C14 12 13 22 20 25"
      stroke="#FDE047"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Right Handle */}
    <path
      d="M44 12C52 12 53 22 44 25"
      stroke="#D97706"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M44 12C50 12 51 22 44 25"
      stroke="#FDE047"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Trophy Cup Body */}
    <g filter="url(#trophyShadow)">
      <path
        d="M19 8H45C45 8 45 27 32 28C19 27 19 8 19 8Z"
        fill="url(#trophyGold)"
        stroke="#B45309"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M22 10H30C30 10 29 23 25 24C22 21 22 10 22 10Z"
        fill="url(#trophyHighlight)"
      />
      <path
        d="M32 14L33.5 17.5L37 18L34.5 20.5L35 24L32 22L29 24L29.5 20.5L27 18L30.5 17.5L32 14Z"
        fill="#FFFBEB"
        stroke="#CA8A04"
        strokeWidth="0.8"
      />
    </g>

    {/* Stem */}
    <path d="M30 28H34V35H30V28Z" fill="#D97706" stroke="#92400E" strokeWidth="1" />
    <path d="M28 35H36V37H28V35Z" fill="#F59E0B" stroke="#92400E" strokeWidth="1" />

    {/* Pedestal Base */}
    <rect x="23" y="37" width="18" height="8" rx="2" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
    <rect x="25" y="39" width="14" height="4" rx="1" fill="#F59E0B" />
  </svg>
);

// 3 Gold Stars Badge Component
export const VectorStarRow: React.FC<{ filledCount?: number; maxStars?: number }> = ({ filledCount = 3, maxStars = 3 }) => {
  return (
    <div className="flex items-center justify-center gap-1 my-0.5">
      {Array.from({ length: maxStars }).map((_, idx) => {
        const isFilled = idx < filledCount;
        return (
          <svg key={idx} width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 1L12.7 6.5L18.7 7.4L14.3 11.6L15.4 17.6L10 14.7L4.6 17.6L5.7 11.6L1.3 7.4L7.3 6.5L10 1Z"
              fill={isFilled ? "#FBBF24" : "#E2E8F0"}
              stroke={isFilled ? "#D97706" : "#CBD5E1"}
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </div>
  );
};

// Cute Vector Question Speech Bubble for "Understand" Card (EduBuddy Purple)
export const VectorUnderstandBubble: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="bubblePurple" x1="18" y1="4" x2="18" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#7E22CE" />
      </linearGradient>
    </defs>
    {/* Speech Bubble */}
    <path
      d="M7 8C7 5.79 8.79 4 11 4H25C27.21 4 29 5.79 29 8V20C29 22.21 27.21 24 25 24H15L9 29V24H11C8.79 24 7 22.21 7 20V8Z"
      fill="url(#bubblePurple)"
      stroke="#581C87"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Question Mark */}
    <path
      d="M15.5 12C15.5 10.6 16.6 9.5 18 9.5C19.4 9.5 20.5 10.6 20.5 12C20.5 13.4 19.4 14.2 18 15V16.5"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="18" cy="19.5" r="1.3" fill="#FFFFFF" />
  </svg>
);


