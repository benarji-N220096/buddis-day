import React from 'react';
import { MinimalNav } from './components/Navigation/MinimalNav';
import { AmbientBackground } from './components/Intro/AmbientBackground';
import { OpeningSection } from './sections/Opening/OpeningSection';
import { LittleSecretSection } from './sections/LittleSecret/LittleSecretSection';
import { ThreeYearsSection } from './sections/ThreeYears/ThreeYearsSection';
import { FunnyMemorySection } from './sections/FunnyMemory/FunnyMemorySection';
import { TransitionSection } from './sections/TransitionToPart2/TransitionSection';
import { Part2Opening } from './sections/Part2/Part2Opening';
import { SafePlaceSection } from './sections/Part2/SafePlaceSection';
import { OrdinaryMomentsSection } from './sections/Part2/OrdinaryMomentsSection';
import { TwoMinuteSection } from './sections/Part2/TwoMinuteSection';
import { RelationshipReflectionSection } from './sections/Part2/RelationshipReflectionSection';
import { Part2EndingSection } from './sections/Part2/Part2EndingSection';
import { Part3Opening } from './sections/Part3/Part3Opening';
import { FutureWishesSection } from './sections/Part3/FutureWishesSection';
import { PhotoChapterSection } from './sections/Part3/PhotoChapterSection';
import { PermanentStorySection } from './sections/Part3/PermanentStorySection';
import { RelationshipWishSection } from './sections/Part3/RelationshipWishSection';
import { FinalBirthdaySection } from './sections/Part3/FinalBirthdaySection';
import { DesktopMemoryThreads } from './components/MemoryThreads/DesktopMemoryThreads';
import { MobileMemoryBreak } from './components/MemoryThreads/MobileMemoryBreak';
import { sisterMemories } from './data/sisterMemories';
import { useAmbientAudio } from './hooks/useAmbientAudio';

export const App: React.FC = () => {
  const { isPlaying, toggle } = useAmbientAudio();

  const handleScrollToSecret = () => {
    const el = document.getElementById('section-secret');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToThreeYears = () => {
    const el = document.getElementById('section-three-years');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F5F2EC] text-[#171717] selection:bg-[#B45340]/20 selection:text-[#B45340]">
      {/* Film grain and delicate ambient warm light */}
      <AmbientBackground />

      {/* Unobtrusive Minimal Navigation */}
      <MinimalNav isPlayingAudio={isPlaying} onToggleAudio={toggle} />

      {/* Main Experience Flow */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* Desktop Photographic Memory Threads (Left & Right columns flanking the story) */}
        <DesktopMemoryThreads />

        {/* =========================================
            PART 01 — THE STORY
            ========================================= */}
        {/* Section A: The Opening */}
        <OpeningSection onScrollDown={handleScrollToSecret} />
        <MobileMemoryBreak memory={sisterMemories[0]} />

        {/* Section B: The Little Secret & Wishes */}
        <LittleSecretSection onProceed={handleScrollToThreeYears} />
        <MobileMemoryBreak memory={sisterMemories[1]} />

        {/* Section C: Three Years & Semester Progression */}
        <ThreeYearsSection />
        <MobileMemoryBreak memory={sisterMemories[2]} />

        {/* Section D: The Funny Memory & Inside Joke */}
        <FunnyMemorySection />
        <MobileMemoryBreak memory={sisterMemories[3]} />

        {/* Part 1 Transition: Akka? Friend? Teacher? Guide? */}
        <TransitionSection />
        <MobileMemoryBreak memory={sisterMemories[4]} />

        {/* =========================================
            PART 02 — THE SAFE PLACE
            ========================================= */}
        {/* Opening Bridge: Strong ga undadam antey... */}
        <Part2Opening />
        <MobileMemoryBreak memory={sisterMemories[5]} />

        {/* The Safe Place Concept, Light Sanctuary & Personal Reveal */}
        <SafePlaceSection />
        <MobileMemoryBreak memory={sisterMemories[6]} />

        {/* Ordinary Moments & Emotional Reset */}
        <OrdinaryMomentsSection />
        <MobileMemoryBreak memory={sisterMemories[7]} />

        {/* The Signature Two-Minute Experience */}
        <TwoMinuteSection />
        <MobileMemoryBreak memory={sisterMemories[8]} />

        {/* Relationship Reflection & The Akka Moment */}
        <RelationshipReflectionSection />
        <MobileMemoryBreak memory={sisterMemories[9]} />

        {/* Part 2 Ending & Transition to Part 3 */}
        <Part2EndingSection />
        <MobileMemoryBreak memory={sisterMemories[10]} />

        {/* =========================================
            PART 03 — WHAT I WANTED YOU TO KNOW
            ========================================= */}
        {/* Opening Bridge: Actually... there are a few things */}
        <Part3Opening />
        <MobileMemoryBreak memory={sisterMemories[11]} />

        {/* Future Wishes, Strength Reciprocity & Personal Blessings */}
        <FutureWishesSection />
        <MobileMemoryBreak memory={sisterMemories[12]} />

        {/* Authentic Photo Chapter: Both Rakhi Memories */}
        <PhotoChapterSection />
        <MobileMemoryBreak memory={sisterMemories[13]} />

        {/* Permanent Part of the Story & College to Life */}
        <PermanentStorySection />
        <MobileMemoryBreak memory={sisterMemories[14]} />

        {/* The Relationship Wish & Playful Philosopher Moment */}
        <RelationshipWishSection />
        <MobileMemoryBreak memory={sisterMemories[15]} />

        {/* Final Birthday Letter, Closing Scene & Read It Again */}
        <FinalBirthdaySection />
        <MobileMemoryBreak memory={sisterMemories[16]} showConnector={false} />
      </main>

      {/* Subtle Editorial Footer Note */}
      <footer className="relative z-10 w-full py-16 px-6 text-center border-t border-[#171717]/6 text-[#77736C] font-mono text-[11px] tracking-widest uppercase">
        <p>A Personal Story • Chapters 01, 02 & 03 • For Buddi</p>
      </footer>
    </div>
  );
};

export default App;
