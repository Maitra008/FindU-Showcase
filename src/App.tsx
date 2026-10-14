import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ChallengeSection } from './components/ChallengeSection';
import { PinnedInvestigationSection } from './components/PinnedInvestigationSection';
import { SystemSection } from './components/SystemSection';
import { TrajectorySection } from './components/TrajectorySection';
import { VerificationSection } from './components/VerificationSection';
import { IntegritySection } from './components/IntegritySection';
import { ClosingSection } from './components/ClosingSection';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';

export function App() {
  const [activeSection, setActiveSection] = useState('01 / PURPOSE');

  useEffect(() => {
    const sectionIds = [
      { id: 'section-purpose', label: '01 / PURPOSE' },
      { id: 'section-challenge', label: '02 / THE CHALLENGE' },
      { id: 'section-investigation-pinned', label: '03 / INVESTIGATION' },
      { id: 'section-system', label: '04 / THE SYSTEM' },
      { id: 'section-trajectory', label: '05 / TRAJECTORY' },
      { id: 'section-verification', label: '06 / HUMAN OVERSIGHT' },
      { id: 'section-integrity', label: '07 / INTEGRITY' },
      { id: 'section-resolution', label: '08 / RESOLUTION' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sectionIds.find((s) => s.id === entry.target.id);
            if (match) {
              setActiveSection(match.label);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -25% 0px', // Trigger when section occupies middle 50% of viewport
        threshold: 0.05,
      }
    );

    sectionIds.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#07080A] text-[#F5F5F3] font-sans antialiased selection:bg-[#C84B31]/30 selection:text-white">
        {/* Persistent Scroll Progress Indicator */}
        <ScrollProgressBar />

        {/* Context-Aware Custom Cursor on Desktop */}
        <CustomCursor />

        {/* Editorial Minimal Header */}
        <Header activeSection={activeSection} />

        <main>
          {/* Chapter 01: Purpose (Hero) */}
          <div id="section-purpose" className="scroll-mt-20 sm:scroll-mt-24">
            <HeroSection />
          </div>

          {/* Chapter 02: The Challenge (Warm Paper) */}
          <div id="section-challenge" className="scroll-mt-20 sm:scroll-mt-24">
            <ChallengeSection />
          </div>

          {/* Signature Pinned Storytelling Sequence (Continuous Scroll Video & Narrative) */}
          <PinnedInvestigationSection />

          {/* Chapter 04: The System (Dark Ink) */}
          <div id="section-system" className="scroll-mt-20 sm:scroll-mt-24">
            <SystemSection />
          </div>

          {/* Chapter 05: Trajectory & Timeline Synthesis (Warm Paper) */}
          <div id="section-trajectory" className="scroll-mt-20 sm:scroll-mt-24">
            <TrajectorySection />
          </div>

          {/* Chapter 06: Sovereign Human Verification (Dark Ink) */}
          <div id="section-verification" className="scroll-mt-20 sm:scroll-mt-24">
            <VerificationSection />
          </div>

          {/* Chapter 07: Empirical Integrity & Ethical Boundaries (Warm Paper) */}
          <div id="section-integrity" className="scroll-mt-20 sm:scroll-mt-24">
            <IntegritySection />
          </div>

          {/* Chapter 08: Resolution & Portal Gateway (Dark Ink) */}
          <div id="section-resolution" className="scroll-mt-20 sm:scroll-mt-24">
            <ClosingSection />
          </div>
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
