import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { MemoryImage } from '../../components/UI/MemoryImage';
import { MessageSquareQuote, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const FunnyMemorySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const setupRef = useRef<HTMLDivElement>(null);
  const cardReactionRef = useRef<HTMLDivElement>(null);
  const punchlineRef = useRef<HTMLDivElement>(null);
  const aftermathRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const [tappedReaction, setTappedReaction] = useState(false);

  const { setup, reaction, reactionSub, punchlineIntro, aftermath } =
    storyData.funnyMemory;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Setup reveal
      gsap.fromTo(
        setupRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: setupRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Reaction card reveal with playful subtle bounce
      gsap.fromTo(
        cardReactionRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardReactionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Punchline reveal
      gsap.fromTo(
        punchlineRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: punchlineRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Aftermath reveal
      gsap.fromTo(
        aftermathRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aftermathRef.current,
            start: 'top 80%',
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
      id="section-funny-memory"
      className="relative min-h-screen w-full py-28 sm:py-36 px-6 sm:px-12 flex flex-col items-center justify-center z-10"
    >
      <div className="w-full max-w-4xl mx-auto space-y-24 sm:space-y-32">
        {/* Section eyebrow */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B45340]">
            CHAPTER 03 — INSIDE JOKE ARCHIVE
          </span>
          <p className="text-xs font-mono tracking-widest uppercase text-[#77736C]">
            AN UNFORGETTABLE INCIDENT
          </p>
        </div>

        {/* The Setup */}
        <div ref={setupRef} className="text-center max-w-2xl mx-auto space-y-3">
          <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#171717] leading-snug">
            “{setup}”
          </p>
        </div>

        {/* The Playful Reaction Note Card */}
        <div
          ref={cardReactionRef}
          onClick={() => setTappedReaction(!tappedReaction)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setTappedReaction(!tappedReaction)}
          aria-label="Toggle reaction commentary"
          className="relative max-w-xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#B45340]/25 shadow-[0_12px_40px_rgba(180,83,64,0.06)] -rotate-1 hover:rotate-0 transition-transform duration-300 cursor-pointer select-none group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B45340]"
        >
          {/* Handwritten tape tag */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-sm bg-[#EAE5DB] border border-[#171717]/10 text-[11px] font-mono tracking-wider uppercase text-[#77736C] shadow-xs">
            HER EXACT WORDS
          </div>

          <div className="text-center space-y-4 pt-2">
            <MessageSquareQuote className="w-8 h-8 mx-auto text-[#B45340]/60 group-hover:text-[#B45340] transition-colors duration-300" />
            <h3 className="font-serif-editorial italic text-3xl sm:text-5xl text-[#171717] tracking-tight leading-tight">
              {reaction}
            </h3>

            <p className="font-handwriting text-xl sm:text-2xl text-[#B45340] tracking-wide pt-1">
              {reactionSub}
            </p>
          </div>

          {/* Micro hint */}
          <div className="mt-6 pt-4 border-t border-[#171717]/6 flex items-center justify-center gap-1.5 text-[10px] font-mono tracking-widest text-[#77736C]/80 uppercase">
            <span>TAP TO HEAR THE ECHO</span>
          </div>
        </div>

        {/* The Punchline & Contrast */}
        <div
          ref={punchlineRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-3xl mx-auto"
        >
          {/* Typographic Story Column */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#77736C]">
              <ShieldAlert className="w-3.5 h-3.5 text-[#B45340]" />
              <span>{punchlineIntro}</span>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#171717]/8 space-y-3">
              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#171717] leading-relaxed">
                ee{' '}
                <span className="font-semibold text-[#B45340] underline decoration-[#B45340]/40 decoration-2 underline-offset-4">
                  gundu gaadike
                </span>{' '}
                ippatiki 2 times rakhi kaataav...
              </p>
            </div>
          </div>

          {/* Reserved Memory Image slot component */}
          <div className="md:col-span-5 flex justify-center">
            <MemoryImage
              dateTag="RAKHI RECORD"
              semesterTag="ARCHIVE"
              caption="Reserved for the rakhi photo"
              aspectRatio="portrait"
            />
          </div>
        </div>

        {/* The Aftermath */}
        <div
          ref={aftermathRef}
          className="text-center max-w-lg mx-auto p-6 rounded-2xl bg-[#FAF8F5]/60 border border-[#171717]/6"
        >
          <p className="font-serif-editorial italic text-lg sm:text-xl text-[#77736C] leading-relaxed">
            “{aftermath}”
          </p>
        </div>
      </div>
    </section>
  );
};
