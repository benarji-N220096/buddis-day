import React from 'react';

interface MemoryImageProps {
  src?: string;
  alt?: string;
  caption?: string;
  semesterTag?: string;
  dateTag?: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export const MemoryImage: React.FC<MemoryImageProps> = ({
  src,
  alt = 'A memory with Buddi',
  caption = 'An archival space reserved for a real photograph.',
  semesterTag = '2023 — 2026',
  dateTag = 'ARCHIVE NOTE',
  className = '',
  aspectRatio = 'portrait',
}) => {
  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'landscape'
      ? 'aspect-[4/3]'
      : 'aspect-[3/4]';

  return (
    <figure
      className={`relative w-full max-w-sm mx-auto group ${className}`}
    >
      <div
        className={`relative ${aspectClass} w-full rounded-2xl overflow-hidden border border-[#171717]/10 bg-[#FAF8F5] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]`}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          // Sophisticated typographic composition when no image is provided
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between select-none">
            {/* Top metadata */}
            <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase font-mono text-[#77736C]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B45340]" />
                {dateTag}
              </span>
              <span>{semesterTag}</span>
            </div>

            {/* Middle Typographic Monogram */}
            <div className="my-auto text-center space-y-2">
              <span className="font-serif-editorial italic text-5xl sm:text-6xl text-[#171717]/25 tracking-wider block">
                b.
              </span>
              <p className="text-xs uppercase tracking-widest text-[#77736C]/70 font-mono">
                Memory in progress
              </p>
            </div>

            {/* Bottom details */}
            <div className="pt-4 border-t border-[#171717]/8 text-left">
              <p className="text-xs font-serif-editorial italic text-[#171717]/70 leading-relaxed">
                “Some memories don’t need a camera to stay timeless.”
              </p>
            </div>
          </div>
        )}

        {/* Delicate inner border */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#171717]/5 pointer-events-none" />
      </div>

      {caption && (
        <figcaption className="mt-3 text-center text-xs text-[#77736C] font-mono tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
