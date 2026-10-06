import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MemoryConnectorProps {
  type?: 1 | 2 | 3;
  side: 'left' | 'right';
  className?: string;
}

export const MemoryConnector: React.FC<MemoryConnectorProps> = ({
  type = 1,
  side,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState(() => prefersReduced);

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
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [prefersReduced]);

  // Different organic bezier path variations inspired by reference 6.webp
  // Path 1: Gentle S-curve with loop
  // Path 2: Flowing organic loop-the-loop curve
  // Path 3: Subtle elegant double wave
  const renderPath = () => {
    if (side === 'left') {
      if (type === 1) {
        // Curve swinging slightly right then looping down
        return (
          <>
            <path
              d="M 50 10 C 65 35, 80 55, 60 70 C 40 85, 30 65, 55 90 C 68 105, 55 125, 50 140"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.45"
              strokeWidth="1.75"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            {/* Arrowhead pointing down */}
            <path
              d="M 43 132 L 50 142 L 57 132"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.55"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      } else if (type === 2) {
        // Organic loop in the middle
        return (
          <>
            <path
              d="M 50 10 C 30 35, 20 60, 45 70 C 70 80, 75 55, 45 90 C 30 110, 45 125, 50 140"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.45"
              strokeWidth="1.75"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M 43 132 L 50 142 L 57 132"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.55"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      } else {
        // Flowing natural curve
        return (
          <>
            <path
              d="M 50 10 C 70 40, 25 75, 65 105 C 75 115, 60 130, 50 140"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.45"
              strokeWidth="1.75"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M 43 132 L 50 142 L 57 132"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.55"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      }
    } else {
      // Right side mirrored variations
      if (type === 1) {
        return (
          <>
            <path
              d="M 50 10 C 35 35, 20 55, 40 70 C 60 85, 70 65, 45 90 C 32 105, 45 125, 50 140"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.45"
              strokeWidth="1.75"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M 43 132 L 50 142 L 57 132"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.55"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      } else if (type === 2) {
        return (
          <>
            <path
              d="M 50 10 C 70 35, 80 60, 55 70 C 30 80, 25 55, 55 90 C 70 110, 55 125, 50 140"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.45"
              strokeWidth="1.75"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M 43 132 L 50 142 L 57 132"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.55"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      } else {
        return (
          <>
            <path
              d="M 50 10 C 30 40, 75 75, 35 105 C 25 115, 40 130, 50 140"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.45"
              strokeWidth="1.75"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M 43 132 L 50 142 L 57 132"
              fill="none"
              stroke="#B45340"
              strokeOpacity="0.55"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-24 sm:h-32 flex items-center justify-center pointer-events-none my-1 sm:my-2 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: 'opacity 0.9s ease-out, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 150"
        className="w-16 sm:w-20 h-full overflow-visible"
        preserveAspectRatio="none"
      >
        {renderPath()}
      </svg>
    </div>
  );
};
