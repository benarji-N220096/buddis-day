import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const ThreeYearsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const transitionBlockRef = useRef<HTMLDivElement>(null);
  const timelineRailRef = useRef<HTMLDivElement>(null);
  const finalStatementRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { highlightQuote, firstSem, fifthSem, travelQuote, semesters, timePassed, realization } =
    storyData.threeYears;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Semester transition block
      gsap.fromTo(
        transitionBlockRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: transitionBlockRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Timeline cards staggered reveal
      const cards = containerRef.current?.querySelectorAll('.timeline-node');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRailRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Final emotional realization
      gsap.fromTo(
        finalStatementRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: finalStatementRef.current,
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
      id="section-three-years"
      className="relative min-h-screen w-full py-28 sm:py-36 px-6 sm:px-12 flex flex-col items-center justify-center z-10"
    >
      <div className="w-full max-w-5xl mx-auto space-y-24 sm:space-y-36">
        {/* Section Tag & Emotional Statement */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B45340]">
            CHAPTER 02 — THE PASSAGE OF TIME
          </span>
          <h2
            ref={headlineRef}
            className="font-serif-editorial italic text-3xl sm:text-5xl md:text-6xl text-[#171717] tracking-tight max-w-3xl mx-auto leading-tight"
          >
            “{highlightQuote}”
          </h2>
        </div>

        {/* 1st SEM -> 5th SEM Typographic Flow */}
        <div
          ref={transitionBlockRef}
          className="relative max-w-3xl mx-auto rounded-3xl p-8 sm:p-14 bg-[#FAF8F5] border border-[#171717]/8 shadow-sm flex flex-col items-center text-center"
        >
          {/* 1st SEM */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#77736C]">
              THE BEGINNING
            </span>
            <div className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl text-[#171717]/35 tracking-tight font-normal">
              {firstSem}
            </div>
          </div>

          {/* Center Connector & Travel Quote */}
          <div className="my-8 sm:my-10 flex flex-col items-center gap-3">
            <div className="w-px h-8 sm:h-12 bg-linear-to-b from-[#171717]/20 via-[#B45340] to-[#171717]/20" />
            <span className="px-5 py-2 rounded-full bg-[#F5F2EC] text-xs sm:text-sm font-sans tracking-wide text-[#171717] border border-[#171717]/8">
              “{travelQuote}”
            </span>
            <div className="w-px h-8 sm:h-12 bg-linear-to-b from-[#171717]/20 via-[#B45340] to-[#171717]/20" />
          </div>

          {/* 5th SEM */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#B45340]">
              WHERE WE ARE TODAY
            </span>
            <div className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl text-[#171717] tracking-tight font-normal">
              {fifthSem}
            </div>
          </div>
        </div>

        {/* TIMELINE PROGRESSION:
            - Desktop: refined horizontal progression
            - Mobile: vertical progression */}
        <div ref={timelineRailRef} className="w-full pt-4">
          <div className="text-center mb-10">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#77736C]">
              SEMESTER PROGRESSION
            </p>
          </div>

          {/* Desktop Horizontal Timeline (>= md) */}
          <div className="hidden md:block relative w-full">
            {/* Connecting Horizontal Line */}
            <div
              className="absolute top-1/2 left-8 right-8 h-px bg-[#171717]/10 -translate-y-1/2 z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {semesters.map((sem, idx) => {
                const isStart = idx === 0;
                const isCurrent = idx === semesters.length - 1;

                return (
                  <div
                    key={sem.id}
                    className="timeline-node group relative flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs mb-4 border transition-colors duration-300 ${
                        isCurrent
                          ? 'bg-[#171717] text-[#F5F2EC] border-[#171717]'
                          : isStart
                          ? 'bg-[#FAF8F5] text-[#B45340] border-[#B45340]'
                          : 'bg-[#FAF8F5] text-[#77736C] border-[#171717]/15 group-hover:border-[#171717]/40'
                      }`}
                    >
                      {sem.roman}
                    </div>

                    <h3 className="font-serif-editorial text-xl text-[#171717] font-medium">
                      {sem.semester}
                    </h3>

                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#77736C] mt-1">
                      {sem.label}
                    </span>

                    {sem.subtitle && (
                      <span className="text-xs text-[#77736C]/80 mt-2 font-sans">
                        {sem.subtitle}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Timeline (< md) */}
          <div className="block md:hidden relative pl-6 border-l border-[#171717]/15 ml-4 space-y-8">
            {semesters.map((sem, idx) => {
              const isCurrent = idx === semesters.length - 1;

              return (
                <div
                  key={sem.id}
                  className="timeline-node relative pl-4 transition-transform duration-200"
                >
                  {/* Indicator Dot */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      isCurrent
                        ? 'bg-[#B45340] border-[#F5F2EC] ring-4 ring-[#B45340]/20'
                        : 'bg-[#FAF8F5] border-[#171717]/30'
                    }`}
                  />

                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono text-[#77736C]">
                      {sem.roman}
                    </span>
                    <h3 className="font-serif-editorial text-2xl text-[#171717]">
                      {sem.semester}
                    </h3>
                  </div>

                  <p className="text-xs text-[#77736C] font-mono tracking-wider uppercase mt-0.5">
                    {sem.label}
                  </p>
                  {sem.subtitle && (
                    <p className="text-xs text-[#77736C]/80 font-sans mt-1">
                      {sem.subtitle}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing realization of this section */}
        <div
          ref={finalStatementRef}
          className="text-center pt-8 sm:pt-14 space-y-6 max-w-2xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#77736C]">
            {timePassed}
          </p>

          <p className="font-serif-editorial italic text-3xl sm:text-4xl md:text-5xl text-[#171717] leading-snug sm:leading-tight">
            “{realization}”
          </p>
        </div>
      </div>
    </section>
  );
};
