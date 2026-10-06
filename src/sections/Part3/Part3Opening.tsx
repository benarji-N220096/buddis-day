import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const Part3Opening: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLParagraphElement>(null);
  const word2Ref = useRef<HTMLParagraphElement>(null);
  const leadRef = useRef<HTMLHeadingElement>(null);
  const prefersReduced = useReducedMotion();

  const { bridge, subBridge, lead } = storyData.part3.opening;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' }
      )
        .fromTo(
          word1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          word2Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
          '+=0.3'
        )
        .fromTo(
          leadRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1.4, ease: 'power2.out' },
          '+=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={containerRef}
      id="section-part3"
      className="relative min-h-[90vh] w-full py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center z-10 bg-linear-to-b from-[#FAF8F5] via-[#FAF6F0] to-[#F5F2EC] transition-colors duration-1000"
    >
      {/* Subtle warm luminous aura symbolizing returning light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-linear-to-tr from-[#B45340]/6 via-[#C9913D]/8 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center space-y-12 sm:space-y-16">
        {/* Chapter 03 Badge */}
        <div ref={tagRef} className="space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EAE5DB]/70 border border-[#171717]/8 text-[11px] font-mono tracking-widest uppercase text-[#77736C]">
            PART 03 — WHAT I WANTED YOU TO KNOW
          </span>
          <div className="text-[11px] font-mono tracking-widest text-[#B45340]">
            03 / 03
          </div>
        </div>

        {/* Intimate conversational opening */}
        <div className="space-y-6 sm:space-y-8">
          <p
            ref={word1Ref}
            className="font-serif-editorial italic text-3xl sm:text-5xl text-[#77736C]"
          >
            “{bridge}”
          </p>

          <p
            ref={word2Ref}
            className="font-serif-editorial text-2xl sm:text-4xl text-[#171717]/85"
          >
            {subBridge}
          </p>
        </div>

        {/* The Lead: Things I genuinely wish for you */}
        <div className="pt-6 sm:pt-10 max-w-2xl mx-auto px-4">
          <div className="w-12 h-px bg-[#B45340]/40 mx-auto mb-8" />
          <h2
            ref={leadRef}
            className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl text-[#171717] leading-snug sm:leading-tight"
          >
            {lead}
          </h2>
        </div>

        {/* Quiet vertical accent line */}
        <div className="pt-10 flex justify-center">
          <div className="w-px h-16 bg-linear-to-b from-[#171717]/15 to-transparent" />
        </div>
      </div>
    </section>
  );
};
