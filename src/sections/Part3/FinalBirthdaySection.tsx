import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { RotateCcw, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const FinalBirthdaySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const newYearListRef = useRef<HTMLDivElement>(null);
  const timelessRef = useRef<HTMLParagraphElement>(null);
  const threeWordsRef = useRef<HTMLDivElement>(null);
  const closingCardRef = useRef<HTMLDivElement>(null);
  const restartButtonRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const {
    mainWish,
    newYearWishes,
    timelessBond,
    threeWords,
    closingHeart,
  } = storyData.part3.birthdayLetter;

  const {
    thanksNote,
    sender,
    readAgainText,
    reflectionFootnote,
  } = storyData.part3.closingSignOff;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Headline reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. New year wishes lines staggered
      if (newYearListRef.current) {
        const lines = newYearListRef.current.querySelectorAll('.wish-line');
        gsap.fromTo(
          lines,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: newYearListRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Timeless bond quote reveal
      gsap.fromTo(
        timelessRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelessRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 4. Staggered reveal of three words: special, comfortable, and ours
      if (threeWordsRef.current) {
        const words = threeWordsRef.current.querySelectorAll('.final-word');
        gsap.fromTo(
          words,
          { opacity: 0, scale: 0.9, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: threeWordsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 5. Final closing card & restart button reveal
      gsap.fromTo(
        closingCardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: closingCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        restartButtonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: restartButtonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const handleRestart = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={containerRef}
      id="section-final-birthday"
      className="relative min-h-screen w-full py-36 sm:py-56 px-6 sm:px-12 flex flex-col items-center justify-center z-10 bg-linear-to-b from-[#F5F2EC] via-[#FAF6F0] to-[#FAF8F5]"
    >
      {/* Warm celebratory radiant aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-linear-to-tr from-[#B45340]/6 via-[#D97706]/6 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto space-y-28 sm:space-y-40 text-center">
        {/* The Birthday Wish Headline */}
        <div className="space-y-6">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#B45340]">
            THE FINAL LETTER
          </span>

          <h2
            ref={headlineRef}
            className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#171717] tracking-tight font-normal leading-tight"
          >
            {mainWish}
          </h2>
        </div>

        {/* New Year Wishes Breakdown */}
        <div className="space-y-8 max-w-xl mx-auto">
          <p className="font-serif-editorial text-xl sm:text-2xl text-[#77736C]">
            I hope this new year of your life brings you…
          </p>

          <div ref={newYearListRef} className="space-y-3 sm:space-y-4">
            {newYearWishes.map((wish, index) => (
              <p
                key={index}
                className="wish-line font-serif-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#171717]"
              >
                {wish}
              </p>
            ))}
          </div>
        </div>

        {/* Timeless Bond Statement */}
        <div className="space-y-12 max-w-2xl mx-auto">
          <div className="w-12 h-px bg-[#171717]/10 mx-auto" />

          <p
            ref={timelessRef}
            className="font-serif-editorial text-2xl sm:text-3xl text-[#171717]/85 leading-relaxed"
          >
            “{timelessBond}”
          </p>

          {/* Three emphasized words: special, comfortable, and ours */}
          <div
            ref={threeWordsRef}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2"
          >
            {threeWords.map((word, i) => (
              <span
                key={i}
                className="final-word px-6 py-3 rounded-full bg-[#FAF8F5] border border-[#B45340]/20 text-xl sm:text-3xl font-serif-editorial text-[#B45340] shadow-sm"
              >
                {word}
              </span>
            ))}
          </div>

          <div className="pt-2 text-2xl text-[#B45340]">
            {closingHeart}
          </div>
        </div>

        {/* ====================================================
            THE FINAL CLOSING CARD (A private digital letter)
            ==================================================== */}
        <div
          ref={closingCardRef}
          className="relative max-w-lg mx-auto p-10 sm:p-14 rounded-3xl bg-[#FAF8F5] border border-[#171717]/10 shadow-xl shadow-[#171717]/5 space-y-8"
        >
          {/* Subtle envelope stamp/seal motif */}
          <div className="w-10 h-10 rounded-full bg-[#B45340]/10 text-[#B45340] flex items-center justify-center mx-auto">
            <Heart className="w-4 h-4 fill-current" />
          </div>

          <div className="space-y-3">
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#171717]">
              Happy Birthday, Buddiii.
            </h3>

            <p className="font-serif-editorial italic text-lg sm:text-xl text-[#77736C] leading-relaxed pt-2">
              “{thanksNote}”
            </p>
          </div>

          {/* Sender sign-off: from your gundu gaadu */}
          <div className="pt-4 border-t border-[#171717]/8">
            <p className="font-serif-editorial text-base sm:text-lg text-[#171717]/90 tracking-wide font-medium">
              {sender}
            </p>
          </div>
        </div>

        {/* ====================================================
            FINAL INTERACTION: Read it again ↻
            ==================================================== */}
        <div ref={restartButtonRef} className="pt-6 space-y-4">
          <button
            onClick={handleRestart}
            type="button"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#171717] hover:bg-[#B45340] active:scale-95 text-[#F5F2EC] text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B45340]"
          >
            <RotateCcw className="w-3.5 h-3.5 transition-transform duration-500 group-hover:-rotate-180" />
            <span>{readAgainText}</span>
          </button>

          <p className="text-[11px] font-mono tracking-wider text-[#77736C]/70">
            {reflectionFootnote}
          </p>
        </div>
      </div>
    </section>
  );
};
