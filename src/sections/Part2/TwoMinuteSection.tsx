import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const TwoMinuteSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timerPinRef = useRef<HTMLDivElement>(null);
  const convBlockRef = useRef<HTMLDivElement>(null);
  const coreThoughtRef = useRef<HTMLDivElement>(null);
  const memoryPhilosophyRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const personalValidationRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const [timeDisplay, setTimeDisplay] = useState('02:00');

  const {
    durationBadge,
    conversations,
    corePhilosophy,
    englishEditorialQuote,
    personalValidation,
  } = storyData.part2.twoMinutes;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Scroll-driven symbolic countdown from 02:00 to 00:00
      ScrollTrigger.create({
        trigger: timerPinRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        scrub: true,
        onUpdate: (self) => {
          const totalSeconds = 120;
          const remainingSeconds = Math.max(0, Math.floor(totalSeconds * (1 - self.progress)));
          const mins = Math.floor(remainingSeconds / 60);
          const secs = remainingSeconds % 60;
          const formatted = `0${mins}:${secs < 10 ? '0' : ''}${secs}`;
          setTimeDisplay(formatted);
        },
      });

      // Conversation beats reveal
      gsap.fromTo(
        convBlockRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: convBlockRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Core thought reveal (time ni create cheskodam)
      gsap.fromTo(
        coreThoughtRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: coreThoughtRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Memory philosophy reveal
      gsap.fromTo(
        memoryPhilosophyRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: memoryPhilosophyRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Major English quote lines reveal
      const quoteLines = quoteRef.current?.querySelectorAll('.quote-line');
      if (quoteLines && quoteLines.length > 0) {
        gsap.fromTo(
          quoteLines,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Personal validation reveal
      gsap.fromTo(
        personalValidationRef.current,
        { opacity: 0, y: 25, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: personalValidationRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={containerRef}
      id="section-two-minutes"
      className="relative min-h-screen w-full py-36 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center z-10"
    >
      <div className="w-full max-w-4xl mx-auto space-y-36 sm:space-y-48">
        {/* Signature Interactive Two-Minute Countdown Display */}
        <div
          ref={timerPinRef}
          className="relative text-center space-y-8 select-none py-12"
        >
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#B45340]">
            {durationBadge}
          </span>

          {/* Large Editorial Clock Typography */}
          <div className="relative inline-block">
            <h2 className="font-serif-editorial text-[clamp(4.5rem,15vw,11rem)] font-light tracking-tight text-[#171717] leading-none">
              {timeDisplay}
            </h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-px bg-[#171717]/10" />
          </div>

          <p className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase text-[#77736C]">
            Two minutes. That's all.
          </p>
        </div>

        {/* Conversation Beats */}
        <div
          ref={convBlockRef}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#171717]/80 leading-relaxed">
            {conversations.noBigWords}
          </p>

          <p className="font-serif-editorial italic text-3xl sm:text-4xl text-[#171717]">
            “{conversations.simpleWords}”
          </p>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#171717]/8 space-y-4 max-w-lg mx-auto">
            <p className="font-sans text-sm sm:text-base text-[#77736C]">
              {conversations.whileThere}
            </p>
            <p className="font-serif-editorial text-2xl sm:text-3xl text-[#171717] italic">
              {conversations.smile}
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B45340]">
                {conversations.climax} {conversations.heartFull}
              </span>
            </div>
          </div>
        </div>

        {/* Core Philosophy: Time ivvadam kanna... time ni create cheskodam */}
        <div
          ref={coreThoughtRef}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#77736C]">
            {corePhilosophy.intro}
          </span>

          <h3 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl text-[#171717] leading-snug sm:leading-tight">
            mana kosam{' '}
            <span className="font-semibold text-[#B45340] underline decoration-[#B45340]/30 decoration-2 underline-offset-8">
              {corePhilosophy.createTimeHighlight}
            </span>{' '}
            lo unna love veru.
          </h3>
        </div>

        {/* Memory Philosophy & Abstract Floating Time Fragments */}
        <div
          ref={memoryPhilosophyRef}
          className="relative max-w-3xl mx-auto p-8 sm:p-14 rounded-3xl bg-[#FAF8F5]/80 border border-[#171717]/8 text-center space-y-6"
        >
          {/* Abstract time watermark tags in corners */}
          <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#77736C]/60 uppercase border-b border-[#171717]/6 pb-4">
            <span>MOMENTS • ARCHIVE</span>
            <span>NOT MEASURED IN HOURS</span>
          </div>

          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#77736C]">
            {corePhilosophy.memoryNote}
          </p>

          <p className="font-serif-editorial italic text-3xl sm:text-4xl md:text-5xl text-[#171717] leading-snug">
            “{corePhilosophy.memoryClimax}”
          </p>
        </div>

        {/* Major English Editorial Quote (No cards, pure editorial typography) */}
        <div
          ref={quoteRef}
          className="max-w-3xl mx-auto py-12 sm:py-16 text-center space-y-6 sm:space-y-8 border-y border-[#171717]/10"
        >
          <p className="quote-line font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#171717] leading-snug">
            {englishEditorialQuote.part1}
          </p>

          <p className="quote-line font-serif-editorial italic text-2xl sm:text-4xl md:text-5xl text-[#B45340] leading-snug">
            {englishEditorialQuote.part2}
          </p>

          <p className="quote-line font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#171717] leading-snug">
            {englishEditorialQuote.part3}
          </p>
        </div>

        {/* Personal Validation: adhi nuvve Buddiii. ❤️ */}
        <div
          ref={personalValidationRef}
          className="text-center max-w-2xl mx-auto space-y-6 pt-8 select-none"
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#77736C]">
            {personalValidation.lead}
          </p>

          <h2 className="font-serif-editorial italic text-4xl sm:text-6xl md:text-7xl text-[#171717] tracking-tight">
            “{personalValidation.recipient}”
          </h2>
        </div>
      </div>
    </section>
  );
};
