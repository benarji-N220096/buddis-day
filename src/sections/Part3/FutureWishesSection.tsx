import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const FutureWishesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const strengthBlockRef = useRef<HTMLDivElement>(null);
  const wordsContainerRef = useRef<HTMLDivElement>(null);
  const returnClimaxRef = useRef<HTMLParagraphElement>(null);
  const blessing1Ref = useRef<HTMLQuoteElement>(null);
  const blessing2Ref = useRef<HTMLQuoteElement>(null);
  const prefersReduced = useReducedMotion();

  const {
    strengthLead,
    strengthNeed,
    qualities,
    returnDouble,
    personalBlessing1,
    personalBlessing2,
  } = storyData.part3.futureWishes;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Strength reciprocity block reveal
      gsap.fromTo(
        strengthBlockRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: strengthBlockRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Staggered reveal of qualities: care, support, happiness
      if (wordsContainerRef.current) {
        const qualityItems = wordsContainerRef.current.querySelectorAll('.quality-pill');
        gsap.fromTo(
          qualityItems,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.25,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: wordsContainerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Double return climax statement
      gsap.fromTo(
        returnClimaxRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: returnClimaxRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 4. Personal Blessings with high visual elegance
      gsap.fromTo(
        blessing1Ref.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: blessing1Ref.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        blessing2Ref.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: blessing2Ref.current,
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
      id="section-future-wishes"
      className="relative min-h-screen w-full py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center z-10 bg-[#F5F2EC]"
    >
      {/* Subtle warm ambient light gradient */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#B45340]/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto space-y-28 sm:space-y-40">
        {/* The Strength Reciprocity Thought */}
        <div ref={strengthBlockRef} className="space-y-8 sm:space-y-12 text-center">
          <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#77736C] leading-relaxed">
            {strengthLead}
          </p>

          <div className="w-8 h-px bg-[#171717]/10 mx-auto" />

          <p className="font-serif-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#171717] leading-relaxed">
            kaani konni saarlu…
          </p>

          <p className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#171717] leading-snug font-medium max-w-2xl mx-auto">
            “{strengthNeed}”
          </p>
        </div>

        {/* The Care, Support, Happiness Breakdown */}
        <div className="space-y-8 sm:space-y-10 text-center">
          <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#77736C]">
            Nuvvu andariki iche…
          </p>

          <div
            ref={wordsContainerRef}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2"
          >
            {qualities.map((quality) => (
              <span
                key={quality}
                className="quality-pill inline-flex items-center px-5 py-2.5 rounded-full bg-[#FAF8F5] border border-[#171717]/10 text-base sm:text-xl font-serif-editorial text-[#171717] shadow-xs"
              >
                {quality}…
              </span>
            ))}
          </div>

          <div className="pt-6 sm:pt-8 max-w-xl mx-auto">
            <p
              ref={returnClimaxRef}
              className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#B45340] leading-snug font-medium"
            >
              “{returnDouble}”
            </p>
          </div>
        </div>

        {/* The Editorial Personal Blessings */}
        <div className="space-y-16 sm:space-y-24 border-t border-[#171717]/8 pt-20 sm:pt-28">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#77736C]">
              A GENUINE WISH FOR YOU
            </span>
          </div>

          {/* Blessing 1 */}
          <blockquote
            ref={blessing1Ref}
            className="relative p-8 sm:p-12 rounded-3xl bg-[#FAF8F5]/80 backdrop-blur-xs border border-[#171717]/8 shadow-sm text-center"
          >
            <p className="font-serif-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#171717] leading-relaxed">
              “{personalBlessing1}”
            </p>
          </blockquote>

          {/* Blessing 2 */}
          <blockquote
            ref={blessing2Ref}
            className="relative p-8 sm:p-12 rounded-3xl bg-[#FAF8F5]/80 backdrop-blur-xs border border-[#171717]/8 shadow-sm text-center"
          >
            <p className="font-serif-editorial text-xl sm:text-2xl md:text-3xl text-[#171717]/90 leading-relaxed font-normal">
              “{personalBlessing2}”
            </p>
          </blockquote>
        </div>

        {/* Subtle separator */}
        <div className="flex justify-center pt-8">
          <div className="w-16 h-px bg-[#171717]/10" />
        </div>
      </div>
    </section>
  );
};
