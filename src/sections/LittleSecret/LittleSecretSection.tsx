import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface LittleSecretSectionProps {
  onProceed: () => void;
}

export const LittleSecretSection: React.FC<LittleSecretSectionProps> = ({ onProceed }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const line3Ref = useRef<HTMLParagraphElement>(null);
  const noteCardRef = useRef<HTMLDivElement>(null);
  const readyBoxRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Line 1 reveal
      gsap.fromTo(
        line1Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line1Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Line 2 reveal
      gsap.fromTo(
        line2Ref.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line2Ref.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Line 3 reveal
      gsap.fromTo(
        line3Ref.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line3Ref.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Conversational Note Card Reveal
      gsap.fromTo(
        noteCardRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: noteCardRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Ready Prompt & Button Reveal
      gsap.fromTo(
        readyBoxRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: readyBoxRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const { introLines, wishes, prompt, buttonText } = storyData.secret;

  return (
    <section
      ref={containerRef}
      id="section-secret"
      className="relative min-h-screen w-full py-28 sm:py-36 px-6 sm:px-12 flex flex-col items-center justify-center z-10"
    >
      <div className="w-full max-w-3xl mx-auto space-y-28 sm:space-y-36">
        {/* Line 1: Before you start reading */}
        <div className="text-center pt-8">
          <p
            ref={line1Ref}
            className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#77736C]"
          >
            {introLines[0]}
          </p>
        </div>

        {/* Line 2: I didn't want to wish you the usual way this year */}
        <div className="text-center">
          <p
            ref={line2Ref}
            className="font-serif-editorial italic text-2xl sm:text-4xl md:text-5xl text-[#171717] leading-snug sm:leading-tight max-w-2xl mx-auto text-balance"
          >
            “{introLines[1]}”
          </p>
        </div>

        {/* Line 3: So I made you a little story */}
        <div className="text-center">
          <p
            ref={line3Ref}
            className="text-sm sm:text-base md:text-lg font-sans tracking-wide text-[#77736C] max-w-lg mx-auto"
          >
            {introLines[2]}
          </p>
        </div>

        {/* Personal Note Card with Birthday Greeting */}
        <div
          ref={noteCardRef}
          className="relative max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#FAF8F5]/90 border border-[#171717]/8 shadow-[0_12px_45px_rgb(0,0,0,0.04)] backdrop-blur-sm"
        >
          {/* Subtle top stamp */}
          <div className="flex items-center justify-between pb-6 border-b border-[#171717]/6 text-[11px] font-mono tracking-widest text-[#77736C]">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B45340]" />
              SPECIAL WISH
            </span>
            <span>OCTOBER 2026</span>
          </div>

          <div className="pt-6 space-y-6 text-left">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#171717]">
              {wishes.greeting}
            </h2>

            <p className="text-sm sm:text-base text-[#171717]/85 font-sans leading-relaxed">
              {wishes.busyJoke}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F2EC]/80 border-l-2 border-[#B45340]">
              <p className="font-serif-editorial text-lg sm:text-xl italic text-[#171717] leading-relaxed">
                {wishes.wish}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#77736C] font-sans leading-relaxed">
              {wishes.futureWish}
            </p>
          </div>
        </div>

        {/* Micro-Interaction: Ready? Let's go -> */}
        <div
          ref={readyBoxRef}
          className="pt-6 flex flex-col items-center justify-center gap-4 text-center"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#77736C]">
            {prompt}
          </span>

          <button
            onClick={onProceed}
            type="button"
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#171717] text-[#F5F2EC] text-xs sm:text-sm font-sans tracking-wide hover:bg-[#B45340] active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B45340] focus-visible:ring-offset-2"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
