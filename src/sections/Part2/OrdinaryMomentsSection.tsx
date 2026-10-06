import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const OrdinaryMomentsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const resetCardRef = useRef<HTMLDivElement>(null);
  const busyBoreBlockRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { resetExclamation, simplicity, smallMoment, busyBore } =
    storyData.part2.ordinaryMoments;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Emotional reset card reveal
      gsap.fromTo(
        resetCardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: resetCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Busy bore block reveal
      gsap.fromTo(
        busyBoreBlockRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: busyBoreBlockRef.current,
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
      id="section-ordinary-moments"
      className="relative min-h-[90vh] w-full py-32 sm:py-44 px-6 sm:px-12 flex flex-col items-center justify-center z-10"
    >
      <div className="w-full max-w-3xl mx-auto space-y-28 sm:space-y-36">
        {/* Emotional Reset: Natural warmth & conversational comfort */}
        <div
          ref={resetCardRef}
          className="relative max-w-xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#171717]/8 shadow-sm text-center space-y-6"
        >
          <div className="font-serif-editorial text-3xl sm:text-4xl text-[#171717] tracking-tight">
            “{resetExclamation}”
          </div>

          <div className="w-8 h-px bg-[#B45340]/40 mx-auto" />

          <div className="space-y-3 font-sans text-sm sm:text-base text-[#77736C] leading-relaxed">
            <p>{simplicity}</p>
            <p className="text-[#171717] font-serif-editorial text-xl sm:text-2xl italic">
              {smallMoment}
            </p>
          </div>
        </div>

        {/* The Contrast: Busy & Bore vs. 2 Minutes of Real Presence */}
        <div ref={busyBoreBlockRef} className="text-center space-y-10 max-w-2xl mx-auto">
          <div className="space-y-4">
            <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#77736C]">
              EVERYDAY REALITY
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-serif-editorial text-xl sm:text-2xl text-[#171717]/70 italic">
              <span>{busyBore.busy}</span>
              <span className="hidden sm:inline text-xs font-mono text-[#77736C]">•</span>
              <span>{busyBore.bore}</span>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#EAE5DB]/40 border border-[#171717]/6 space-y-4">
            <p className="font-serif-editorial text-2xl sm:text-3xl text-[#171717] leading-relaxed">
              {busyBore.presence}
            </p>
            <div className="font-serif-editorial italic text-3xl sm:text-4xl text-[#B45340] pt-2">
              “{busyBore.feeling}”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
