import React, { useState } from 'react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Landing } from '@/components/Landing';
import { StoryTimeline } from '@/components/StoryTimeline';
import { DateProposal } from '@/components/DateProposal';
import { Celebration } from '@/components/Celebration';
import { BackgroundMusic } from '@/components/BackgroundMusic';

type Page = 'landing' | 'story' | 'proposal' | 'celebration';

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleLandingContinue = () => {
    setCurrentPage('story');
  };

  const handleStoryContinue = () => {
    setCurrentPage('proposal');
  };

  const handleYes = () => {
    setCurrentPage('celebration');
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Background music toggle */}
      <BackgroundMusic />

      {/* Main content */}
      <main className="relative z-10">
        {currentPage === 'landing' && (
          <Landing onContinue={handleLandingContinue} />
        )}
        {currentPage === 'story' && (
          <StoryTimeline onContinue={handleStoryContinue} />
        )}
        {currentPage === 'proposal' && (
          <DateProposal onYes={handleYes} />
        )}
        {currentPage === 'celebration' && (
          <Celebration />
        )}
      </main>
    </div>
  );
}
