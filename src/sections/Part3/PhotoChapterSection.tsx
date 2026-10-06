import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyData } from '../../data/story';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import photoDaytime from '../../assets/photos/rakhi_daytime.jpg';
import photoNighttime from '../../assets/photos/rakhi_nighttime.jpg';

gsap.registerPlugin(ScrollTrigger);

export const PhotoChapterSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introBlockRef = useRef<HTMLDivElement>(null);
  const photo1FrameRef = useRef<HTMLDivElement>(null);
  const photo1ImgRef = useRef<HTMLImageElement>(null);
  const caption1Ref = useRef<HTMLDivElement>(null);
  const photo2FrameRef = useRef<HTMLDivElement>(null);
  const photo2ImgRef = useRef<HTMLImageElement>(null);
  const caption2Ref = useRef<HTMLDivElement>(null);

  const [photo1Loaded, setPhoto1Loaded] = useState(false);
  const [photo2Loaded, setPhoto2Loaded] = useState(false);

  const prefersReduced = useReducedMotion();

  const {
    introLead,
    introProof,
    introReveal,
    photo1,
    photo2,
  } = storyData.part3.photoChapter;

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Photo Chapter Introduction Reveal
      gsap.fromTo(
        introBlockRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: introBlockRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Photo 1 Cinematic Reveal (soft blur to sharp)
      if (photo1FrameRef.current) {
        gsap.fromTo(
          photo1FrameRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: photo1FrameRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (photo1ImgRef.current) {
        gsap.fromTo(
          photo1ImgRef.current,
          { filter: 'blur(8px) brightness(0.95)', scale: 1.03 },
          {
            filter: 'blur(0px) brightness(1)',
            scale: 1,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: photo1FrameRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Caption 1 reveal
      if (caption1Ref.current) {
        gsap.fromTo(
          caption1Ref.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: caption1Ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Photo 2 Scroll-Driven Sequential Reveal
      if (photo2FrameRef.current) {
        gsap.fromTo(
          photo2FrameRef.current,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: photo2FrameRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (photo2ImgRef.current) {
        gsap.fromTo(
          photo2ImgRef.current,
          { filter: 'blur(8px) brightness(0.95)', scale: 1.03 },
          {
            filter: 'blur(0px) brightness(1)',
            scale: 1,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: photo2FrameRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Caption 2 reveal
      if (caption2Ref.current) {
        gsap.fromTo(
          caption2Ref.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: caption2Ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={containerRef}
      id="section-photo-chapter"
      className="relative min-h-screen w-full py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center z-10 bg-[#FAF8F5] transition-colors duration-700"
    >
      {/* Background warm radial light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B45340]/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-28 sm:space-y-40">
        {/* Intro to Memories */}
        <div ref={introBlockRef} className="max-w-2xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DB]/70 border border-[#171717]/8 text-[11px] font-mono tracking-widest uppercase text-[#77736C]">
            <span>A CHAPTER OF MEMORIES</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#171717] leading-snug">
              “{introLead}”
            </h2>
            <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#77736C] leading-relaxed">
              {introProof}
            </p>
          </div>

          <div className="pt-2">
            <p className="font-sans text-xs sm:text-sm font-medium tracking-widest uppercase text-[#B45340]">
              {introReveal}
            </p>
          </div>
        </div>

        {/* ====================================================
            PHOTO 1: Daytime Rakhi Memory (Primary vertical portrait)
            ==================================================== */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Photograph Container */}
          <div className="w-full lg:col-span-7 flex justify-center lg:justify-end">
            <div
              ref={photo1FrameRef}
              className="group relative max-w-md w-full rounded-3xl p-3 sm:p-4 bg-[#FAF8F5] border border-[#171717]/10 shadow-xl shadow-[#171717]/5 transition-transform duration-500 hover:scale-[1.01]"
            >
              {/* Subtle top metadata / handwritten accent */}
              <div className="flex items-center justify-between px-2 pb-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#77736C]">
                <span className="italic font-serif-editorial lowercase text-xs tracking-normal text-[#B45340]">
                  a little memory
                </span>
                <span>Rakhi • 01</span>
              </div>

              {/* Framed Image with natural crop boundary that leaves watermark safely out of view */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#EAE5DB]/50">
                <img
                  ref={photo1ImgRef}
                  src={photoDaytime}
                  alt="Rakhi memory with Buddi"
                  loading="lazy"
                  onLoad={() => setPhoto1Loaded(true)}
                  className={`w-full h-full object-cover object-[50%_12%] transition-opacity duration-700 ${
                    photo1Loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    filter: 'contrast(1.02) saturate(1.03)',
                  }}
                />
                {/* Subtle warm photo vignette overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_40px_rgba(23,23,23,0.06)]"
                  aria-hidden="true"
                />
              </div>

              {/* Frame bottom subtle signature line */}
              <div className="pt-3 px-2 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#77736C]/60">
                <span>AUTHENTIC MOMENT</span>
                <span>PART 03</span>
              </div>
            </div>
          </div>

          {/* Photo 1 Playful Caption & Telugu Callback */}
          <div
            ref={caption1Ref}
            className="w-full lg:col-span-5 space-y-6 text-center lg:text-left px-2 sm:px-4"
          >
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#77736C]">
                THE CALLBACK
              </span>

              <h3 className="font-serif-editorial italic text-2xl sm:text-3xl text-[#171717] leading-snug">
                “{photo1.captionLead}”
              </h3>

              <div className="p-4 rounded-2xl bg-[#F5F2EC] border border-[#171717]/6 text-sm sm:text-base font-sans text-[#77736C] italic">
                {photo1.captionReaction}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <p className="font-mono text-xs uppercase tracking-widest text-[#B45340]">
                ippudu chudu…
              </p>
              <p className="font-serif-editorial text-xl sm:text-2xl text-[#171717] leading-relaxed">
                “{photo1.captionPunchline}”
              </p>
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#77736C] leading-relaxed pt-2">
              {photo1.captionFollowup}
            </p>
          </div>
        </div>

        {/* Subtle breathing divider */}
        <div className="flex justify-center py-6">
          <div className="w-12 h-px bg-[#171717]/10" />
        </div>

        {/* ====================================================
            PHOTO 2: Nighttime Rakhi Memory (Scroll-driven reveal)
            ==================================================== */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Photo 2 Caption */}
          <div
            ref={caption2Ref}
            className="w-full lg:col-span-5 space-y-6 text-center lg:text-right px-2 sm:px-4"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#B45340]">
                {photo2.tag}
              </span>

              <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#171717] leading-snug">
                “{photo2.line1}”
              </h3>
            </div>

            <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#77736C] leading-relaxed max-w-sm lg:ml-auto">
              “{photo2.line2}”
            </p>

            <div className="pt-2">
              <div className="inline-block w-8 h-px bg-[#B45340]/40" />
            </div>
          </div>

          {/* Photograph 2 Container */}
          <div className="w-full lg:col-span-7 flex justify-center lg:justify-start">
            <div
              ref={photo2FrameRef}
              className="group relative max-w-md w-full rounded-3xl p-3 sm:p-4 bg-[#FAF8F5] border border-[#171717]/10 shadow-xl shadow-[#171717]/5 transition-transform duration-500 hover:scale-[1.01]"
            >
              {/* Subtle top metadata */}
              <div className="flex items-center justify-between px-2 pb-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#77736C]">
                <span className="italic font-serif-editorial lowercase text-xs tracking-normal text-[#B45340]">
                  a little memory
                </span>
                <span>Rakhi • 02</span>
              </div>

              {/* Framed Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#EAE5DB]/50">
                <img
                  ref={photo2ImgRef}
                  src={photoNighttime}
                  alt="Rakhi memory with Buddi three years later"
                  loading="lazy"
                  onLoad={() => setPhoto2Loaded(true)}
                  className={`w-full h-full object-cover object-[50%_15%] transition-opacity duration-700 ${
                    photo2Loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    filter: 'contrast(1.03) saturate(1.02)',
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_40px_rgba(23,23,23,0.06)]"
                  aria-hidden="true"
                />
              </div>

              {/* Frame bottom subtle signature line */}
              <div className="pt-3 px-2 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#77736C]/60">
                <span>STORY CONTINUES</span>
                <span>PART 03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
