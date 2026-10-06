import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Part2EndingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const closingBlockRef = useRef<HTMLDivElement>(null);
  const curiosityRef = useRef<HTMLDivElement>(null);
  const ctaBlockRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const [modalOpen, setModalOpen] = useState(false);

  const {
    memoriesLine,
    bestPartLine,
    destinedLine,
    curiosityHook,
    nextChapterTag,
  } = storyData.part2.ending;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Closing thoughts reveal
      gsap.fromTo(
        closingBlockRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: closingBlockRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Curiosity line reveal
      gsap.fromTo(
        curiosityRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: curiosityRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA block reveal
      gsap.fromTo(
        ctaBlockRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaBlockRef.current,
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
      id="section-part2-ending"
      className="relative min-h-[90vh] w-full py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center z-10 bg-linear-to-b from-transparent via-[#F5F2EC]/60 to-[#FAF8F5] transition-colors duration-700"
    >
      <div className="w-full max-w-3xl mx-auto space-y-24 sm:space-y-36 text-center">
        {/* Three years memories -> best part */}
        <div ref={closingBlockRef} className="space-y-6">
          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#77736C]">
            “{memoriesLine}”
          </p>

          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#171717]">
            {bestPartLine}
          </p>

          <h3 className="font-serif-editorial italic text-3xl sm:text-5xl md:text-6xl text-[#171717] leading-snug sm:leading-tight pt-4">
            “{destinedLine}”
          </h3>
        </div>

        {/* Curiosity Hook: There's one more thing I want to tell you */}
        <div ref={curiosityRef} className="space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-px bg-[#B45340]/40 mx-auto mb-6" />
          <p className="font-serif-editorial italic text-2xl sm:text-4xl text-[#171717] leading-snug">
            “{curiosityHook}”
          </p>
        </div>

        {/* Part 3 Teaser Indicator */}
        <div
          ref={ctaBlockRef}
          className="pt-6 flex flex-col items-center justify-center gap-4 text-center pb-12"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B45340]">
            COMING IN THE FINAL CHAPTER
          </span>

          <button
            onClick={() => {
              const el = document.getElementById('section-part3');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            type="button"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#171717] text-[#F5F2EC] text-xs sm:text-sm font-sans tracking-widest uppercase hover:bg-[#B45340] active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B45340]"
          >
            <span>{nextChapterTag}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          <p className="text-[11px] font-mono tracking-wider text-[#77736C]/70 pt-2">
            CHAPTER 02 OF 03 COMPLETE • SCROLL DOWN FOR FINAL CHAPTER
          </p>
        </div>
      </div>

      {/* Part 3 Teaser Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#171717]/40 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full p-8 rounded-3xl bg-[#FAF8F5] border border-[#171717]/10 shadow-2xl space-y-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#B45340]/10 text-[#B45340] flex items-center justify-center mx-auto">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#B45340]">
                THE FINAL CHAPTER
              </span>
              <h3 className="font-serif-editorial text-3xl text-[#171717]">
                Part 3 Ahead
              </h3>
              <p className="text-sm font-sans text-[#77736C] leading-relaxed pt-2">
                “Part 2 explored what you mean to me and the quiet safety you bring. The final chapter holds the heartfelt wishes for your future, the permanent place you hold in my life, and one final birthday message.”
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="w-full py-3 rounded-full bg-[#171717] text-[#F5F2EC] text-xs font-mono uppercase tracking-widest hover:bg-[#B45340] transition-colors duration-200"
              >
                Close & Savor Part 2
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
