import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const RelationshipReflectionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leadBlockRef = useRef<HTMLDivElement>(null);
  const crowdFewRef = useRef<HTMLDivElement>(null);
  const akkaTreatmentRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { repetitionLead, repetitionFollow, crowdVsFew, akkaMoment } =
    storyData.part2.reflection;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Repetition lead reveal
      gsap.fromTo(
        leadBlockRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leadBlockRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Crowd vs few lines reveal
      gsap.fromTo(
        crowdFewRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: crowdFewRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Akka moment visual treatment reveal
      gsap.fromTo(
        akkaTreatmentRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: akkaTreatmentRef.current,
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
      id="section-reflection"
      className="relative min-h-[85vh] w-full py-32 sm:py-44 px-6 sm:px-12 flex flex-col items-center justify-center z-10"
    >
      <div className="w-full max-w-3xl mx-auto space-y-24 sm:space-y-36">
        {/* Lead repetition lines */}
        <div ref={leadBlockRef} className="text-center space-y-4">
          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#77736C]">
            “{repetitionLead}”
          </p>
          <p className="font-serif-editorial italic text-3xl sm:text-4xl text-[#171717]">
            “{repetitionFollow}”
          </p>
        </div>

        {/* Crowd vs Few lines */}
        <div
          ref={crowdFewRef}
          className="max-w-xl mx-auto text-center space-y-4 font-serif-editorial text-xl sm:text-2xl text-[#171717]/85 leading-relaxed"
        >
          <p className="text-[#77736C]">{crowdVsFew.crowd}</p>
          <p className="text-[#171717]">{crowdVsFew.few}</p>
        </div>

        {/* The Akka Moment: Elegant typographical hierarchy */}
        <div
          ref={akkaTreatmentRef}
          className="p-10 sm:p-16 rounded-3xl bg-[#FAF8F5] border border-[#171717]/8 shadow-sm text-center space-y-6 max-w-2xl mx-auto select-none"
        >
          {/* Subtle label */}
          <div className="text-[11px] font-mono tracking-widest uppercase text-[#B45340]">
            ALWAYS UNCHANGED
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#77736C]">
              {akkaMoment.you}
            </span>

            <span className="font-serif-editorial italic text-4xl sm:text-6xl text-[#171717]">
              {akkaMoment.special}
            </span>

            <span className="px-4 py-1 rounded-full bg-[#EAE5DB]/70 text-xs sm:text-sm font-mono tracking-wider uppercase text-[#B45340] border border-[#171717]/6 mt-2">
              {akkaMoment.akka}
            </span>
          </div>

          <div className="pt-4 border-t border-[#171717]/6">
            <p className="font-serif-editorial text-lg sm:text-xl text-[#77736C] italic">
              “{akkaMoment.fullSentence}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
