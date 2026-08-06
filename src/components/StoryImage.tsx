import React, { useState, useEffect } from 'react';
import { Image, RefreshCw, Sparkles } from 'lucide-react';

interface StoryImageProps {
  src?: string;
  title?: string;
  className?: string;
}

export const StoryImage: React.FC<StoryImageProps> = ({ src, title = 'Story', className = '' }) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    setCurrentSrc(src);
    setLoading(true);
    setError(false);
    setRetryCount(0);
  }, [src]);

  const handleError = () => {
    if (retryCount === 0 && src) {
      setRetryCount(1);
      const separator = src.includes('?') ? '&' : '?';
      setCurrentSrc(`${src}${separator}retry=${Date.now()}`);
    } else if (retryCount === 1 && title) {
      setRetryCount(2);
      const cleanTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '_');
      setCurrentSrc(`https://pollinations.ai/p/cute_3d_pixar_style_illustration_of_${cleanTitle}?width=800&height=800&nologo=true&seed=${Math.floor(Math.random() * 100000)}`);
    } else if (retryCount === 2 && title) {
      setRetryCount(3);
      const cleanKeyword = title.toLowerCase().replace(/[^a-z0-9]/g, '');
      setCurrentSrc(`https://loremflickr.com/800/800/${cleanKeyword || 'toy'},3d`);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  const handleManualRetry = () => {
    setLoading(true);
    setError(false);
    setRetryCount(0);
    if (src) {
      const separator = src.includes('?') ? '&' : '?';
      setCurrentSrc(`${src}${separator}manual_retry=${Date.now()}`);
    }
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-orange-50 ${className}`}>
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-50/90 text-orange-400 z-10 p-2 text-center animate-pulse">
          <Sparkles className="w-6 h-6 mb-1.5 animate-spin text-orange-400" />
          <span className="text-xs font-bold text-orange-500">Loading picture...</span>
        </div>
      )}

      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-100/90 p-3 text-center">
          <Image className="w-7 h-7 text-orange-400 mb-1" />
          <p className="text-xs font-bold text-slate-600 mb-2">Picture loading slow</p>
          <button
            onClick={handleManualRetry}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white rounded-full text-xs font-bold shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reload Picture
          </button>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={title}
          onLoad={() => setLoading(false)}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
    </div>
  );
};
