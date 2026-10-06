import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const SafePlaceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introBlockRef = useRef<HTMLDivElement>(null);
  const pillarsBlockRef = useRef<HTMLDivElement>(null);
  const metaphorAuraRef = useRef<HTMLDivElement>(null);
  const safePlaceNeedsRef = useRef<HTMLDivElement>(null);
  const vulnerabilitiesRef = useRef<HTMLDivElement>(null);
  const editorialQuoteRef = useRef<HTMLDivElement>(null);
  const personalRevealRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const {
    intro,
    comfortLines,
    pillarItems,
    strengthConclusion,
    necessity,
    unmasking,
    authenticity,
    vulnerabilities,
    editorialQuote,
    personalRevealLead,
    personalReveal,
  } = storyData.part2.safePlace;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Intro lines reveal
      gsap.fromTo(
        introBlockRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: introBlockRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Pillar items (shoulder, hug, nenu unna)
      const pillarEls = pillarsBlockRef.current?.querySelectorAll('.pillar-item');
      if (pillarEls && pillarEls.length > 0) {
        gsap.fromTo(
          pillarEls,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillarsBlockRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Safe space metaphor aura expansion
      gsap.fromTo(
        metaphorAuraRef.current,
        { scale: 0.85, opacity: 0.2 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: metaphorAuraRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Safe place core needs
      gsap.fromTo(
        safePlaceNeedsRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: safePlaceNeedsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Vulnerabilities list stagger
      const vulnEls = vulnerabilitiesRef.current?.querySelectorAll('.vuln-item');
      if (vulnEls && vulnEls.length > 0) {
        gsap.fromTo(
          vulnEls,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.25,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: vulnerabilitiesRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Editorial quote reveal
      gsap.fromTo(
        editorialQuoteRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: editorialQuoteRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // The Personal Reveal: Slow focus/blur transition
      gsap.fromTo(
        personalRevealRef.current,
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: personalRevealRef.current,
            start: 'top 70%',
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
      id="section-safe-place"
      className="relative min-h-screen w-full py-36 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center z-10"
    >
      <div className="w-full max-w-4xl mx-auto space-y-36 sm:space-y-48">
        {/* Intro beats */}
        <div ref={introBlockRef} className="text-center space-y-8 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#77736C]">
            {intro}
          </p>

          <p className="font-serif-editorial text-2xl sm:text-4xl text-[#171717] leading-snug">
            {comfortLines[0]}
          </p>

          <p className="font-serif-editorial italic text-2xl sm:text-4xl text-[#171717]/80 leading-snug">
            {comfortLines[1]}
          </p>
        </div>

        {/* Pillars revealed one by one */}
        <div
          ref={pillarsBlockRef}
          className="flex flex-col items-center space-y-8 sm:space-y-10 text-center max-w-xl mx-auto"
        >
          {pillarItems.map((item, idx) => (
            <div
              key={idx}
              className="pillar-item font-serif-editorial text-3xl sm:text-5xl text-[#171717] font-normal tracking-tight"
            >
              {item}
            </div>
          ))}

          <div className="pt-6">
            <span className="px-5 py-2.5 rounded-full bg-[#EAE5DB]/60 border border-[#171717]/8 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#77736C]">
              {strengthConclusion}
            </span>
          </div>
        </div>

        {/* Visual Metaphor for Safety: A soft circular warm light sanctuary */}
        <div
          ref={metaphorAuraRef}
          className="relative max-w-3xl mx-auto p-10 sm:p-20 rounded-[2.5rem] bg-[#FAF8F5] border border-[#171717]/8 shadow-[0_20px_60px_rgba(0,0,0,0.03)] text-center overflow-hidden transition-all duration-700"
        >
          {/* Inner gentle ambient warm glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[2.5rem]"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(245, 237, 227, 0.9) 0%, rgba(250, 248, 245, 0.4) 70%)',
            }}
          />

          <div ref={safePlaceNeedsRef} className="relative z-10 space-y-8">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#B45340]">
              SANCTUARY
            </span>

            <h3 className="font-serif-editorial italic text-3xl sm:text-5xl md:text-6xl text-[#171717] leading-tight">
              “{necessity}”
            </h3>

            <div className="w-12 h-px bg-[#171717]/15 mx-auto" />

            <div className="space-y-4 max-w-xl mx-auto text-sm sm:text-base md:text-lg font-sans text-[#77736C]">
              <p>{unmasking}</p>
              <p className="text-[#171717] font-medium font-serif-editorial text-xl sm:text-2xl italic">
                {authenticity}
              </p>
            </div>
          </div>
        </div>

        {/* Individual vulnerability thoughts */}
        <div
          ref={vulnerabilitiesRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
        >
          {vulnerabilities.map((vuln, idx) => (
            <div
              key={idx}
              className="vuln-item p-6 rounded-2xl bg-[#FAF8F5]/80 border border-[#171717]/6 text-center font-serif-editorial italic text-xl sm:text-2xl text-[#171717]/85 shadow-2xs hover:border-[#B45340]/30 transition-colors duration-300"
            >
              {vuln}
            </div>
          ))}
        </div>

        {/* Editorial Reflection Quote */}
        <div
          ref={editorialQuoteRef}
          className="text-center max-w-2xl mx-auto px-4 py-8 border-y border-[#171717]/8"
        >
          <p className="font-serif-editorial italic text-xl sm:text-2xl md:text-3xl text-[#171717] leading-relaxed text-balance">
            “{editorialQuote}”
          </p>
        </div>

        {/* THE PERSONAL REVEAL (Generous empty space, emotional peak) */}
        <div
          ref={personalRevealRef}
          className="pt-16 sm:pt-28 pb-12 text-center max-w-2xl mx-auto space-y-8 select-none"
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#77736C]">
            {personalRevealLead}
          </p>

          <h2 className="font-serif-editorial italic text-4xl sm:text-6xl md:text-7xl text-[#171717] tracking-tight leading-tight">
            “{personalReveal}”
          </h2>

          <div className="w-16 h-px bg-[#B45340]/40 mx-auto pt-2" />
        </div>
      </div>
    </section>
  );
};
