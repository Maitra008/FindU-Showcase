import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { PORTAL_URL, REPO_URL } from '../constants/scenes';
import { ScrollReveal } from './ui/ScrollReveal';
import { PerspectiveCard } from './ui/PerspectiveCard';
import { MagneticButton } from './ui/MagneticButton';

export const ClosingSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#07080A] text-[#F5F5F3] py-28 sm:py-36 px-6 sm:px-16 flex flex-col justify-between border-t border-white/5 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(200,75,49,0.09),transparent)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto w-full my-auto text-center flex flex-col items-center">
        {/* Title plate artifact with 3D tilt */}
        <ScrollReveal delay={0.1} direction="up">
          <PerspectiveCard maxTilt={3} dataCursor="view" className="w-full max-w-xl mb-12">
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#0D0F12] p-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-black">
                <img
                  src="/assets/frames/06_title_card.jpg"
                  alt="FindU resolution: Connecting sightings, supporting investigations"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </PerspectiveCard>
        </ScrollReveal>

        {/* Brand Chapter Tag */}
        <ScrollReveal delay={0.2}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12151B] border border-white/10 text-xs font-mono text-[#8F949E] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
            <span>08 / ARCHITECTURE & EVALUATION GATEWAY</span>
          </div>
        </ScrollReveal>

        {/* Editorial Headline */}
        <ScrollReveal delay={0.25}>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light text-[#F5F5F3] leading-[1.1] tracking-tight mb-8">
            Connecting sightings. <br />
            <em className="italic font-normal text-white/90">Supporting investigations.</em>
          </h2>
        </ScrollReveal>

        {/* Supporting Copy */}
        <ScrollReveal delay={0.3}>
          <p className="text-base sm:text-xl text-[#8F949E] font-sans font-light max-w-2xl leading-relaxed mb-12">
            Explore the mathematical pipeline, empirical evaluation metrics, and the interactive simulated multi-camera investigation experience.
          </p>
        </ScrollReveal>

        {/* Call to Action Group with Magnetic Buttons */}
        <ScrollReveal delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <MagneticButton
              asAnchor
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C84B31] hover:bg-[#E35639] text-white font-medium text-sm tracking-wide transition-all shadow-[0_4px_25px_rgba(200,75,49,0.35)] hover:shadow-[0_6px_30px_rgba(200,75,49,0.5)]"
            >
              <span>Explore FindU Public Portal</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              asAnchor
              href={`${PORTAL_URL}#methodology`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#14181F] hover:bg-[#1E232E] text-[#F5F5F3] border border-white/10 hover:border-white/20 font-medium text-sm transition-all"
            >
              <BookOpen className="w-4 h-4 text-[#8F949E] group-hover:text-[#C84B31] transition-colors" />
              <span>Methodology</span>
            </MagneticButton>

            <MagneticButton
              asAnchor
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#14181F] hover:bg-[#1E232E] text-[#F5F5F3] border border-white/10 hover:border-white/20 font-medium text-sm transition-all"
            >
              <svg className="w-4 h-4 text-[#8F949E] group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Source Code</span>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <footer className="relative max-w-6xl mx-auto w-full pt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#525760]">
        <div>
          <span>FindU Showcase · Synthetic footage · Fictional records · Illustrative simulation only</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`${PORTAL_URL}#architecture`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8F949E] transition-colors"
            data-cursor="hover"
          >
            Architecture
          </a>
          <span>·</span>
          <a
            href={`${PORTAL_URL}#validation`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8F949E] transition-colors"
            data-cursor="hover"
          >
            Human Safeguards
          </a>
          <span>·</span>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8F949E] transition-colors"
            data-cursor="hover"
          >
            GitHub
          </a>
        </div>
      </footer>
    </section>
  );
};
