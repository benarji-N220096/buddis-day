import React, { useEffect, useRef, useState } from 'react';
import type { SisterMemory } from '../../data/sisterMemories';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MemoryCardProps {
  memory: SisterMemory;
  className?: string;
  isMobile?: boolean;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({
  memory,
  className = '',
  isMobile = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState(() => prefersReduced);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentEl = cardRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [prefersReduced]);

  const rotationStyle = prefersReduced
    ? 'rotate(0deg)'
    : `rotate(${memory.rotation}deg)`;

  return (
    <div
      ref={cardRef}
      style={{
        transform: isVisible ? rotationStyle : `translateY(24px) scale(0.96) ${rotationStyle}`,
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out',
      }}
      className={`group relative pointer-events-auto select-none transition-shadow duration-300 ${className}`}
    >
      {/* Polaroid Card Body */}
      <div className="relative rounded-xl bg-[#FCFAF7] p-2.5 sm:p-3 pb-3 sm:pb-4 border border-[#171717]/10 shadow-md shadow-[#171717]/6 hover:shadow-xl hover:border-[#B45340]/25 hover:rotate-0 hover:scale-105 transition-all duration-300 ease-out">
        {/* Subtle decorative tape or pin motif at the top center */}
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#EAE5DB]/75 backdrop-blur-xs border-x border-[#171717]/10 rounded-xs rotate-[-1deg] opacity-70 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />

        {/* Inner Framed Photo */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#EAE5DB]/50 border border-[#171717]/8">
          <img
            src={memory.image}
            alt={memory.alt}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            style={{ objectPosition: memory.objectPosition }}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-108`}
          />

          {/* Very delicate warm vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none rounded-lg shadow-[inset_0_0_20px_rgba(23,23,23,0.04)]"
            aria-hidden="true"
          />
        </div>

        {/* Card Caption / Memory Note */}
        <div className="pt-2.5 sm:pt-3 px-1 text-center">
          <p className="font-handwriting text-lg sm:text-xl text-[#171717]/85 tracking-wide leading-none group-hover:text-[#B45340] transition-colors">
            {memory.caption}
          </p>
          {memory.note && !isMobile && (
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#77736C]/70 pt-1 leading-tight">
              {memory.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
