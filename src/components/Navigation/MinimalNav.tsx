import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MinimalNavProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const MinimalNav: React.FC<MinimalNavProps> = ({
  isPlayingAudio,
  onToggleAudio,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPart, setCurrentPart] = useState<'PART 01' | 'PART 02' | 'PART 03'>('PART 01');
  const [chapterTag, setChapterTag] = useState('THE OPENING');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);

      // Check Part 3 first (closest to bottom)
      const part3El = document.getElementById('section-part3');
      if (part3El && part3El.getBoundingClientRect().top <= window.innerHeight * 0.4) {
        setCurrentPart('PART 03');

        const finalBdayEl = document.getElementById('section-final-birthday');
        const relWishEl = document.getElementById('section-relationship-wish');
        const permEl = document.getElementById('section-permanent-story');
        const photoEl = document.getElementById('section-photo-chapter');

        if (finalBdayEl && finalBdayEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setChapterTag('HAPPY BIRTHDAY');
        } else if (relWishEl && relWishEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setChapterTag('RELATIONSHIP WISH');
        } else if (permEl && permEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setChapterTag('PERMANENT STORY');
        } else if (photoEl && photoEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setChapterTag('PHOTO MEMORIES');
        } else {
          setChapterTag('FUTURE WISHES');
        }
        return;
      }

      // Check Part 2
      const part2El = document.getElementById('section-part2');
      if (part2El && part2El.getBoundingClientRect().top <= window.innerHeight * 0.4) {
        setCurrentPart('PART 02');

        const twoMinEl = document.getElementById('section-two-minutes');
        const reflectionEl = document.getElementById('section-reflection');
        if (reflectionEl && reflectionEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setChapterTag('ALWAYS SPECIAL');
        } else if (twoMinEl && twoMinEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setChapterTag('THE 2 MINUTES');
        } else {
          setChapterTag('THE SAFE PLACE');
        }
        return;
      }

      // Default Part 1
      setCurrentPart('PART 01');
      if (progress < 15) {
        setChapterTag('THE OPENING');
      } else if (progress < 30) {
        setChapterTag('LITTLE SECRET');
      } else if (progress < 45) {
        setChapterTag('THREE YEARS');
      } else {
        setChapterTag('INSIDE JOKE');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top thin progress line */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#B45340] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating unobtrusive minimal nav controls */}
      <header className="fixed top-5 left-5 right-5 sm:top-8 sm:left-8 sm:right-8 z-40 flex items-center justify-between pointer-events-none">
        {/* Left: Story tag */}
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF8F5]/85 backdrop-blur-md border border-[#171717]/8 text-[#171717] text-[11px] font-mono tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B45340] animate-pulse" />
            <span>{currentPart}</span>
            <span className="text-[#77736C]/60 text-[10px] hidden xs:inline">
              ({currentPart === 'PART 01' ? '01 / 03' : currentPart === 'PART 02' ? '02 / 03' : '03 / 03'})
            </span>
          </div>

          <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#77736C]">
            {chapterTag}
          </span>

          {scrollProgress >= 98 && (
            <span className="text-[10px] font-mono text-[#B45340] tracking-widest font-semibold px-2 py-0.5 rounded-full bg-[#FAF8F5]/85 border border-[#B45340]/20">
              100%
            </span>
          )}
        </div>

        {/* Right: Music toggle */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={onToggleAudio}
            type="button"
            aria-label={isPlayingAudio ? 'Mute ambient melody' : 'Play subtle ambient melody'}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF8F5]/85 hover:bg-[#FAF8F5] backdrop-blur-md border border-[#171717]/8 text-[#171717] text-xs font-mono transition-all duration-300 shadow-xs hover:border-[#B45340]/40"
          >
            <span
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isPlayingAudio ? 'bg-[#B45340] ring-4 ring-[#B45340]/20' : 'bg-[#77736C]/40 group-hover:bg-[#77736C]'
              }`}
            />
            {isPlayingAudio ? (
              <span className="flex items-center gap-1.5 text-[11px] tracking-wider text-[#B45340]">
                <Volume2 className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">AMBIENT ON</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-[11px] tracking-wider text-[#77736C]">
                <VolumeX className="w-3.5 h-3.5 opacity-60" />
                <span className="hidden xs:inline">SOUND</span>
              </span>
            )}
          </button>
        </div>
      </header>
    </>
  );
};
