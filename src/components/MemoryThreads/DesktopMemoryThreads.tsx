import React, { useEffect, useState, useCallback } from 'react';
import { sisterMemories, type SisterMemory } from '../../data/sisterMemories';
import { MemoryCard } from './MemoryCard';
import { MemoryConnector } from './MemoryConnector';

interface CardPosition {
  memory: SisterMemory;
  top: number;
}

export const DesktopMemoryThreads: React.FC = () => {
  const [leftPositions, setLeftPositions] = useState<CardPosition[]>([]);
  const [rightPositions, setRightPositions] = useState<CardPosition[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  const calculatePositions = useCallback(() => {
    const leftMems = sisterMemories.filter((m) => m.side === 'left');
    const rightMems = sisterMemories.filter((m) => m.side === 'right');

    const getPositionsForMemories = (memories: SisterMemory[]) => {
      const positions: CardPosition[] = [];
      let lastTop = 0;

      memories.forEach((mem, index) => {
        const el = document.getElementById(mem.targetSectionId);
        let top = 0;

        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollTop = window.scrollY;
          const elementTop = rect.top + scrollTop;
          const elementHeight = el.offsetHeight;

          // Position card approximately 25-35% into the section height
          // with slight organic variation for each card
          const organicJitter = ((mem.id * 17) % 60) - 30; // -30px to +30px
          const targetOffset = Math.min(280, elementHeight * 0.28) + organicJitter;
          top = Math.max(lastTop + 360, elementTop + targetOffset);
        } else {
          // Fallback if section element not found yet
          top = index === 0 ? 350 : lastTop + 850;
        }

        lastTop = top;
        positions.push({ memory: mem, top });
      });

      return positions;
    };

    const left = getPositionsForMemories(leftMems);
    const right = getPositionsForMemories(rightMems);

    setLeftPositions(left);
    setRightPositions(right);
    setIsCalculated(true);
  }, []);

  useEffect(() => {
    // Initial measurement after elements have settled
    const timer = setTimeout(calculatePositions, 300);

    const handleResize = () => {
      calculatePositions();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculatePositions]);

  if (!isCalculated) return null;

  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {/* =========================================================
          LEFT MEMORY THREAD (Only connects Left Photo -> Left Photo)
          ========================================================= */}
      <div
        className="absolute top-0 bottom-0 left-2 xl:left-6 2xl:left-12 w-[165px] xl:w-[195px] pointer-events-none"
        aria-label="Left photographic memories thread"
      >
        {leftPositions.map((item, index) => {
          const nextItem = leftPositions[index + 1];
          const connectorHeight = nextItem ? nextItem.top - (item.top + 230) : 0;

          return (
            <React.Fragment key={item.memory.id}>
              {/* Photo Card */}
              <div
                style={{ top: `${item.top}px` }}
                className="absolute left-0 w-full"
              >
                <MemoryCard
                  memory={item.memory}
                  className="w-full max-w-[185px] mx-auto"
                />
              </div>

              {/* Dotted Organic Connector down to next photo on the left */}
              {nextItem && connectorHeight > 40 && (
                <div
                  style={{
                    top: `${item.top + 235}px`,
                    height: `${connectorHeight}px`,
                  }}
                  className="absolute left-0 w-full flex items-center justify-center overflow-hidden"
                >
                  <MemoryConnector
                    type={item.memory.connectorType}
                    side="left"
                    className="h-full max-h-48"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* =========================================================
          RIGHT MEMORY THREAD (Only connects Right Photo -> Right Photo)
          ========================================================= */}
      <div
        className="absolute top-0 bottom-0 right-2 xl:right-6 2xl:right-12 w-[165px] xl:w-[195px] pointer-events-none"
        aria-label="Right photographic memories thread"
      >
        {rightPositions.map((item, index) => {
          const nextItem = rightPositions[index + 1];
          const connectorHeight = nextItem ? nextItem.top - (item.top + 230) : 0;

          return (
            <React.Fragment key={item.memory.id}>
              {/* Photo Card */}
              <div
                style={{ top: `${item.top}px` }}
                className="absolute right-0 w-full"
              >
                <MemoryCard
                  memory={item.memory}
                  className="w-full max-w-[185px] mx-auto"
                />
              </div>

              {/* Dotted Organic Connector down to next photo on the right */}
              {nextItem && connectorHeight > 40 && (
                <div
                  style={{
                    top: `${item.top + 235}px`,
                    height: `${connectorHeight}px`,
                  }}
                  className="absolute right-0 w-full flex items-center justify-center overflow-hidden"
                >
                  <MemoryConnector
                    type={item.memory.connectorType}
                    side="right"
                    className="h-full max-h-48"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
