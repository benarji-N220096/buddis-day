import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ArrowRight, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const TransitionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const calmIntroRef = useRef<HTMLParagraphElement>(null);
  const bondShiftRef = useRef<HTMLParagraphElement>(null);
  const labelQuestionRef = useRef<HTMLHeadingElement>(null);
  const rolesContainerRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLParagraphElement>(null);
  const climaxRef = useRef<HTMLDivElement>(null);
  const part2PromptRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const [part2ModalOpen, setPart2ModalOpen] = useState(false);

  const {
    calmIntro,
    bondShift,
    labelQuestion,
    roles,
    reflection,
    deepRealization,
    teluguClimax,
    nextPartHint,
    nextPartCta,
  } = storyData.transition;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Calm intro lines reveal
      gsap.fromTo(
        calmIntroRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: calmIntroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        bondShiftRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bondShiftRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Label question reveal
      gsap.fromTo(
        labelQuestionRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: labelQuestionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Roles reveal sequentially: Akka? Friend? Teacher? Guide?
      const roleItems = rolesContainerRef.current?.querySelectorAll('.role-item');
      if (roleItems && roleItems.length > 0) {
        gsap.fromTo(
          roleItems,
          { opacity: 0, y: 25, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.25,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rolesContainerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Reflection & climax reveals
      gsap.fromTo(
        reflectionRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: reflectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        climaxRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: climaxRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Part 2 CTA prompt reveal
      gsap.fromTo(
        part2PromptRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: part2PromptRef.current,
            start: 'top 85%',
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
      id="section-transition"
      className="relative min-h-screen w-full py-32 sm:py-44 px-6 sm:px-12 flex flex-col items-center justify-center z-10 bg-[#EFECE5]/60 transition-colors duration-700"
    >
      <div className="w-full max-w-3xl mx-auto space-y-24 sm:space-y-36">
        {/* Calm Intro lines */}
        <div className="text-center space-y-6">
          <p
            ref={calmIntroRef}
            className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#77736C]"
          >
            {calmIntro}
          </p>

          <p
            ref={bondShiftRef}
            className="font-serif-editorial italic text-2xl sm:text-4xl text-[#171717] leading-relaxed max-w-xl mx-auto"
          >
            “{bondShift}”
          </p>
        </div>

        {/* The Question: Ee relation ki oka label pettali ante... */}
        <div className="text-center space-y-12">
          <h2
            ref={labelQuestionRef}
            className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl text-[#171717] tracking-tight"
          >
            “{labelQuestion}”
          </h2>

          {/* Sequential 4 Roles: Akka? Friend? Teacher? Guide? */}
          <div
            ref={rolesContainerRef}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4"
          >
            {roles.map((role) => (
              <div
                key={role}
                className="role-item px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FAF8F5] border border-[#171717]/10 text-base sm:text-xl font-serif-editorial italic text-[#171717] shadow-xs"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Reflection & Climax */}
        <div className="text-center space-y-10 max-w-2xl mx-auto">
          <p
            ref={reflectionRef}
            className="text-sm sm:text-base font-sans tracking-wide text-[#77736C]"
          >
            {reflection}
          </p>

          {/* Deep Climax Card */}
          <div
            ref={climaxRef}
            className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#B45340]/25 shadow-[0_12px_45px_rgba(180,83,64,0.06)] text-center space-y-6"
          >
            <p className="font-serif-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#171717] leading-snug">
              “{deepRealization}”
            </p>

            <div className="w-12 h-px bg-[#B45340]/40 mx-auto" />

            <p className="font-sans text-sm sm:text-base md:text-lg text-[#171717]/90 leading-relaxed font-normal">
              {teluguClimax}
            </p>
          </div>
        </div>

        {/* Part 1 Ending: Teaser for Part 2 */}
        <div
          ref={part2PromptRef}
          className="pt-10 flex flex-col items-center justify-center gap-4 text-center pb-12"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#77736C]">
            {nextPartHint}
          </span>

          <button
            onClick={() => {
              const el = document.getElementById('section-part2');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            type="button"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#171717] text-[#F5F2EC] text-xs sm:text-sm font-sans tracking-widest uppercase hover:bg-[#B45340] active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B45340]"
          >
            <span>{nextPartCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          <p className="text-[11px] font-mono tracking-wider text-[#77736C]/70 pt-2">
            CHAPTER 01 OF 03 COMPLETE • SCROLL DOWN FOR PART 02
          </p>
        </div>
      </div>

      {/* Part 2 Teaser Modal / Toast */}
      {part2ModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#171717]/40 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full p-8 rounded-3xl bg-[#FAF8F5] border border-[#171717]/10 shadow-2xl space-y-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#B45340]/10 text-[#B45340] flex items-center justify-center mx-auto">
              <BookOpen className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#B45340]">
                TO BE CONTINUED
              </span>
              <h3 className="font-serif-editorial text-3xl text-[#171717]">
                Part 1 Complete
              </h3>
              <p className="text-sm font-sans text-[#77736C] leading-relaxed pt-2">
                “This is just the opening chapter of the journey. Part 2 — with the safe place, the deeper words, and the moments that matter most — is waiting ahead.”
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setPart2ModalOpen(false)}
                type="button"
                className="w-full py-3 rounded-full bg-[#171717] text-[#F5F2EC] text-xs font-mono uppercase tracking-widest hover:bg-[#B45340] transition-colors duration-200"
              >
                Close & Keep Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
