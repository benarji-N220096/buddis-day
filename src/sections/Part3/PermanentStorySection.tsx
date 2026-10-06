import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const PermanentStorySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const line3Ref = useRef<HTMLParagraphElement>(null);
  const climaxRef = useRef<HTMLHeadingElement>(null);
  const collegeBlockRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const {
    memories,
    chapters,
    permanent,
    permanenceClimax,
  } = storyData.part3.permanentStory;

  const {
    intro,
    moreThanCollege,
    keepInLife,
  } = storyData.part3.collegeToLife;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Timeline for the Major Typographic Climax
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power2.out' }
      )
        .fromTo(
          line2Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.1, ease: 'power2.out' },
          '+=0.3'
        )
        .fromTo(
          line3Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
          '+=0.3'
        )
        .fromTo(
          climaxRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power2.out' },
          '+=0.5'
        );

      // College to Life Transition block reveal
      gsap.fromTo(
        collegeBlockRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: collegeBlockRef.current,
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
      id="section-permanent-story"
      className="relative min-h-screen w-full py-36 sm:py-56 px-6 sm:px-12 flex flex-col items-center justify-center z-10 bg-[#FAF8F5]"
    >
      {/* Generous empty space, NO card, pure editorial typography */}
      <div className="w-full max-w-4xl mx-auto space-y-36 sm:space-y-48 text-center">
        {/* The 3-tier definition of people in our lives */}
        <div className="space-y-10 sm:space-y-14">
          <p
            ref={line1Ref}
            className="font-serif-editorial text-2xl sm:text-4xl text-[#77736C] font-light"
          >
            {memories}
          </p>

          <p
            ref={line2Ref}
            className="font-serif-editorial text-2xl sm:text-4xl text-[#77736C] font-light"
          >
            {chapters}
          </p>

          <p
            ref={line3Ref}
            className="font-serif-editorial italic text-2xl sm:text-4xl text-[#171717] font-normal"
          >
            {permanent}
          </p>

          <div className="pt-8 sm:pt-14 max-w-3xl mx-auto">
            <h2
              ref={climaxRef}
              className="font-serif-editorial italic text-3xl sm:text-5xl md:text-6xl text-[#171717] leading-snug sm:leading-tight font-medium"
            >
              “{permanenceClimax}”
            </h2>
          </div>
        </div>

        {/* Breathing accent */}
        <div className="w-16 h-px bg-[#B45340]/30 mx-auto" />

        {/* College → Life Transition Reflection */}
        <div
          ref={collegeBlockRef}
          className="max-w-2xl mx-auto space-y-8 sm:space-y-10 text-center px-4"
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#77736C]">
            BEYOND THESE THREE YEARS
          </span>

          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#77736C] leading-relaxed">
            “{intro}”
          </p>

          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#171717]/80 leading-relaxed">
            {moreThanCollege}
          </p>

          <p className="font-serif-editorial italic text-2xl sm:text-4xl text-[#171717] leading-snug sm:leading-relaxed font-normal pt-2">
            “{keepInLife}”
          </p>
        </div>
      </div>
    </section>
  );
};
