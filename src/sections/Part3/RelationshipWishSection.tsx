import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const RelationshipWishSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prayerBlockRef = useRef<HTMLDivElement>(null);
  const prayerWishRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const ilaaneRef = useRef<HTMLParagraphElement>(null);
  const confidenceRef = useRef<HTMLParagraphElement>(null);
  const philosopherRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const {
    prayerLead,
    prayerWish,
    comfortCraziness,
    beLikeThis,
    confidence,
  } = storyData.part3.relationshipWish;

  const {
    pauseWord,
    tooEmotional,
    philosopherJoke,
    stopHere,
  } = storyData.part3.philosopher;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Prayer block reveal
      gsap.fromTo(
        prayerBlockRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: prayerBlockRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        prayerWishRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: prayerWishRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Sequential reveal of: Maarakunda, dooram kaakunda, mana madhya ee comfort...
      if (listRef.current) {
        const items = listRef.current.querySelectorAll('.wish-point');
        gsap.fromTo(
          items,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.25,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. ilaane undaali & 200% confidence
      gsap.fromTo(
        ilaaneRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ilaaneRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        confidenceRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: confidenceRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 4. Playful Philosopher Break Reveal
      gsap.fromTo(
        philosopherRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: philosopherRef.current,
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
      id="section-relationship-wish"
      className="relative min-h-screen w-full py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center z-10 bg-[#F5F2EC]"
    >
      <div className="w-full max-w-3xl mx-auto space-y-28 sm:space-y-36">
        {/* The Prayer Lead */}
        <div ref={prayerBlockRef} className="text-center space-y-6">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#77736C]">
            A QUIET PRAYER
          </span>

          <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#77736C] leading-relaxed max-w-2xl mx-auto">
            “{prayerLead}”
          </p>
        </div>

        {/* The Core Wish */}
        <div className="text-center space-y-8">
          <p
            ref={prayerWishRef}
            className="font-serif-editorial italic text-2xl sm:text-4xl md:text-5xl text-[#171717] leading-snug sm:leading-relaxed"
          >
            “{prayerWish}”
          </p>
        </div>

        {/* The Sequence: Maarakunda, dooram kaakunda... */}
        <div className="max-w-xl mx-auto py-4">
          <div
            ref={listRef}
            className="space-y-4 sm:space-y-5 pl-4 sm:pl-8 border-l-2 border-[#B45340]/40 text-left"
          >
            {comfortCraziness.map((text, i) => (
              <p
                key={i}
                className="wish-point font-serif-editorial text-xl sm:text-2xl text-[#171717]/85"
              >
                {text}
              </p>
            ))}
          </div>

          {/* ilaane undaali */}
          <div className="pt-8 text-center sm:text-left sm:pl-8">
            <p
              ref={ilaaneRef}
              className="font-serif-editorial text-2xl sm:text-3xl text-[#171717] font-medium"
            >
              {beLikeThis}
            </p>
          </div>

          {/* Untundani 200% nammuthunna 🤞❤️ */}
          <div className="pt-8 text-center sm:text-left sm:pl-8">
            <p
              ref={confidenceRef}
              className="inline-block px-5 py-2.5 rounded-full bg-[#FAF8F5] border border-[#B45340]/20 text-lg sm:text-2xl font-serif-editorial text-[#B45340] shadow-xs"
            >
              {confidence}
            </p>
          </div>
        </div>

        {/* Subtle separator */}
        <div className="w-12 h-px bg-[#171717]/10 mx-auto" />

        {/* ====================================================
            THE PHILOSOPHER MOMENT (Playful tension-breaker)
            ==================================================== */}
        <div
          ref={philosopherRef}
          className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#171717]/8 shadow-sm space-y-4 text-center transition-transform hover:scale-[1.01]"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-[#77736C]">
            <span>{pauseWord}</span>
            <span>•</span>
            <span className="text-[#B45340]">{tooEmotional}</span>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#171717]/80 leading-relaxed">
            {philosopherJoke}
          </p>

          <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#171717] font-medium pt-1">
            {stopHere}
          </p>
        </div>
      </div>
    </section>
  );
};
