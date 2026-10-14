import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { PerspectiveCard } from './ui/PerspectiveCard';
import { AnimatedCounter } from './ui/AnimatedCounter';

export const ChallengeSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#FAF8F5] text-[#141414] py-24 sm:py-36 px-6 sm:px-16 transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C84B31] uppercase mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
            <span>02 / The Investigative Crisis</span>
          </div>
        </ScrollReveal>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-6xl font-display font-light leading-[1.12] tracking-tight mb-8">
                Hours of footage. <br />
                <em className="italic font-normal text-[#C84B31]">Seconds of sight.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-[#3A3D42] font-sans leading-relaxed mb-6 font-normal">
                When a vulnerable person disappears in a high-traffic transit terminal, investigators are confronted with dozens of disconnected video feeds. Each camera operates on an independent clock, under disparate lighting, with no shared coordinate space.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-sm sm:text-base text-[#5A5E66] font-sans leading-relaxed mb-10">
                A subject may pass through a camera cone for less than five seconds over an eight-hour search period. Inspecting 24 concurrent streams in real time requires 192 investigator-hours — an impossible arithmetic during the critical early window.
              </p>
            </ScrollReveal>

            {/* Editorial Metric Strip with Animated Numbers */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#141414]/10">
                <div>
                  <span className="block text-2xl sm:text-3xl font-display font-medium text-[#141414]">
                    <AnimatedCounter value={24} suffix="+" duration={1.2} />
                  </span>
                  <span className="text-[11px] font-mono text-[#7A7E85] uppercase tracking-wide">
                    Disjointed Streams
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-display font-medium text-[#141414]">
                    <AnimatedCounter value={4.2} decimals={1} suffix="s" duration={1.5} />
                  </span>
                  <span className="text-[11px] font-mono text-[#7A7E85] uppercase tracking-wide">
                    Average Sight Window
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-display font-medium text-[#C84B31]">
                    <AnimatedCounter value={0} duration={0.8} />
                  </span>
                  <span className="text-[11px] font-mono text-[#7A7E85] uppercase tracking-wide">
                    Automated Trust
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Archival Plate with 3D tilt */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.25} direction="left">
              <PerspectiveCard maxTilt={4} dataCursor="view">
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#141414]/15 bg-[#0B0C0E] p-2 sm:p-3">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-black">
                    <img
                      src="/assets/frames/01_grid.jpg"
                      alt="Multi-camera surveillance feeds across airport terminal zones"
                      className="w-full h-full object-cover filter contrast-[1.05]"
                      loading="eager"
                      decoding="async"
                    />
                    {/* Subtle camera label overlay */}
                    <div className="absolute top-3 left-3 bg-[#0B0C0E]/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-mono text-[#F5F5F3] border border-white/10">
                      <span className="text-[#C84B31]">FEED MATRIX</span> · 6 CONCURRENT SOURCES
                    </div>
                  </div>

                  {/* Archival Caption */}
                  <div className="p-3 pt-4 flex items-center justify-between text-xs font-mono text-[#8F949E]">
                    <span>EXHIBIT A: SYNCHRONOUS RECORDINGS</span>
                    <span className="text-[#525760]">CONCOURSE B / TRANSIT HALL</span>
                  </div>
                </div>
              </PerspectiveCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
