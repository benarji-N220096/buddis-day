import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface OpeningSectionProps {
  onScrollDown?: () => void;
}

export const OpeningSection: React.FC<OpeningSectionProps> = ({ onScrollDown }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const forRef = useRef<HTMLSpanElement>(null);
  const titleContainerRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const letters = titleContainerRef.current?.querySelectorAll('.letter');

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
      });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.2 }
      )
        .fromTo(
          forRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          letters || [],
          { opacity: 0, y: 25, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.06,
          },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          indicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.2'
        );

      // Subtle slow oscillation for scroll hint
      gsap.to(indicatorRef.current, {
        y: 6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const handleScrollClick = () => {
    if (onScrollDown) {
      onScrollDown();
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: 'smooth',
      });
    }
  };

  const recipientLetters = storyData.opening.recipient.split('');

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 sm:px-12 py-20 md:py-24 z-10 select-none"
    >
      {/* Top spacer to balance layout */}
      <div className="w-full pt-8 flex justify-center">
        <p
          ref={eyebrowRef}
          className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#77736C] text-center"
        >
          {storyData.opening.eyebrow}
        </p>
      </div>

      {/* Main Cinematic Title */}
      <div className="w-full max-w-4xl text-center my-auto py-8">
        <span
          ref={forRef}
          className="block font-mono text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase text-[#77736C] mb-3 sm:mb-4"
        >
          FOR
        </span>

        <h1
          ref={titleContainerRef}
          className="font-serif-editorial text-[clamp(3.5rem,14vw,9.5rem)] font-normal tracking-tight text-[#171717] leading-[0.95] flex justify-center items-center flex-wrap"
          aria-label="FOR BUDDIII"
        >
          {recipientLetters.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="letter inline-block transition-transform duration-300 hover:text-[#B45340] hover:-translate-y-1"
            >
              {char}
            </span>
          ))}
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 sm:mt-8 font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-[#77736C]"
        >
          {storyData.opening.scrollHint}
        </p>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        ref={indicatorRef}
        onClick={handleScrollClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleScrollClick()}
        aria-label="Scroll down to begin story"
        className="cursor-pointer group flex flex-col items-center gap-2.5 pb-2 text-[#77736C] hover:text-[#171717] transition-colors duration-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B45340] rounded-full p-2"
      >
        <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#77736C] group-hover:text-[#B45340] transition-colors duration-300">
          {storyData.opening.storyHint}
        </span>
        <div className="w-6 h-9 rounded-full border border-[#171717]/20 flex items-start justify-center p-1.5 transition-colors duration-300 group-hover:border-[#B45340]/60">
          <span className="w-1 h-2 rounded-full bg-[#171717]/50 group-hover:bg-[#B45340] transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};
