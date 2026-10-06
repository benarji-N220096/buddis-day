import React from 'react';
import type { SisterMemory } from '../../data/sisterMemories';
import { MemoryCard } from './MemoryCard';
import { MemoryConnector } from './MemoryConnector';

interface MobileMemoryBreakProps {
  memory: SisterMemory;
  showConnector?: boolean;
}

export const MobileMemoryBreak: React.FC<MobileMemoryBreakProps> = ({
  memory,
  showConnector = true,
}) => {
  const isLeft = memory.side === 'left';

  return (
    <div
      className="block lg:hidden w-full py-8 sm:py-12 px-6 sm:px-12 relative z-10 pointer-events-none"
      aria-label={`Sister memory: ${memory.caption}`}
    >
      <div
        className={`max-w-md mx-auto flex flex-col ${
          isLeft ? 'items-start' : 'items-end'
        }`}
      >
        {/* The Polaroid Card */}
        <div className="w-[155px] sm:w-[185px]">
          <MemoryCard
            memory={memory}
            isMobile={true}
            className="w-full"
          />
        </div>

        {/* Dotted Organic Connector down to next story section */}
        {showConnector && (
          <div
            className={`w-[155px] sm:w-[185px] flex ${
              isLeft ? 'justify-center' : 'justify-center'
            }`}
          >
            <MemoryConnector
              type={memory.connectorType}
              side={memory.side}
              className="h-20 sm:h-24 my-1"
            />
          </div>
        )}
      </div>
    </div>
  );
};
