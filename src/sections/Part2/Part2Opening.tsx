import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const Part2Opening: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const prefersReduced = useReducedMotion();

  const { bridgeHint, quote } = storyData.part2.opening;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Bridge hint slow reveal
      gsap.fromTo(
        hintRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: hintRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Quote slow line-by-line reveal
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: quoteRef.current,
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
      id="section-part2"
      className="relative min-h-[85vh] w-full py-32 sm:py-44 px-6 sm:px-12 flex flex-col items-center justify-center z-10"
    >
      <div className="w-full max-w-3xl mx-auto text-center space-y-16 sm:space-y-24">
        {/* Subtle Part 2 Marker */}
        <div className="space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EAE5DB]/70 border border-[#171717]/8 text-[11px] font-mono tracking-widest uppercase text-[#77736C]">
            PART 02 — THE SAFE PLACE
          </span>
          <p
            ref={hintRef}
            className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#77736C]"
          >
            {bridgeHint}
          </p>
        </div>

        {/* The Philosophy Quote */}
        <div className="max-w-2xl mx-auto px-4">
          <h2
            ref={quoteRef}
            className="font-serif-editorial italic text-2xl sm:text-4xl md:text-5xl text-[#171717] leading-snug sm:leading-relaxed text-balance"
          >
            “{quote}”
          </h2>
        </div>

        {/* Quiet breathing space indicator */}
        <div className="pt-6 flex justify-center">
          <div className="w-px h-16 bg-linear-to-b from-[#171717]/15 to-transparent" />
        </div>
      </div>
    </section>
  );
};
