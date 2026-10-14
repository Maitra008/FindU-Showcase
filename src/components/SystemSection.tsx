import React from 'react';
import { ArrowUpRight, Cpu, Layers, GitFork } from 'lucide-react';
import { PORTAL_URL } from '../constants/scenes';
import { ScrollReveal } from './ui/ScrollReveal';
import { PerspectiveCard } from './ui/PerspectiveCard';
import { MagneticButton } from './ui/MagneticButton';

export const SystemSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#0B0C0E] text-[#F5F5F3] py-28 sm:py-36 px-6 sm:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C84B31] uppercase mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
            <span>04 / The Computer Vision Pipeline</span>
          </div>
        </ScrollReveal>

        {/* Headline & Abstract */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl font-display font-light leading-[1.12] tracking-tight mb-6">
              From scattered footage <br />
              to <em className="italic font-normal text-[#C84B31]">candidate sightings.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-[#8F949E] font-sans font-light leading-relaxed">
              FindU does not perform opaque facial recognition. It computes invariant visual metric embeddings from pedestrian silhouettes and couples them with strict spatial-temporal velocity bounds.
            </p>
          </ScrollReveal>
        </div>

        {/* Visual Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Panel 1: Candidate Detection */}
          <ScrollReveal delay={0.2} direction="up">
            <PerspectiveCard maxTilt={4} dataCursor="view">
              <div className="group relative rounded-lg overflow-hidden border border-white/10 bg-[#12151B] p-2 sm:p-3 transition-all duration-300 hover:border-[#C84B31]/40 shadow-xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-black">
                  <img
                    src="/assets/frames/02_detection.jpg"
                    alt="FindU candidate detection bounding box in transit concourse"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B0C0E]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#F5F5F3] border border-white/10">
                    <span className="text-[#C84B31]">DETECTION</span> · CONCOURSE B
                  </div>
                </div>
                <div className="p-3 pt-4">
                  <h3 className="text-sm font-mono text-[#F5F5F3] uppercase tracking-wide mb-1">
                    01 / Person Detection & Cropping
                  </h3>
                  <p className="text-xs text-[#8F949E] leading-relaxed">
                    Pedestrian silhouettes are localized and isolated at frame rate, filtering out ambient luggage, architectural shadows, and reflection artifacts.
                  </p>
                </div>
              </div>
            </PerspectiveCard>
          </ScrollReveal>

          {/* Panel 2: Reference Record Comparison */}
          <ScrollReveal delay={0.35} direction="up">
            <PerspectiveCard maxTilt={4} dataCursor="view">
              <div className="group relative rounded-lg overflow-hidden border border-white/10 bg-[#12151B] p-2 sm:p-3 transition-all duration-300 hover:border-[#C84B31]/40 shadow-xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-black">
                  <img
                    src="/assets/frames/03_reference_match.jpg"
                    alt="FindU reference record matching with cosine similarity"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B0C0E]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#F5F5F3] border border-white/10">
                    <span className="text-[#C84B31]">SIMILARITY</span> · RECORD SIM-0001
                  </div>
                </div>
                <div className="p-3 pt-4">
                  <h3 className="text-sm font-mono text-[#F5F5F3] uppercase tracking-wide mb-1">
                    02 / Metric Re-Identification
                  </h3>
                  <p className="text-xs text-[#8F949E] leading-relaxed">
                    Extracted visual features (outerwear coloration, texture distribution, geometry) are mapped into a high-dimensional cosine similarity space.
                  </p>
                </div>
              </div>
            </PerspectiveCard>
          </ScrollReveal>
        </div>

        {/* 3-Pillar Technical Architecture Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          <ScrollReveal delay={0.1} direction="up">
            <div className="flex flex-col gap-2 p-3 rounded bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C84B31]">
                <Cpu className="w-4 h-4" />
                <span>Multi-Scale Detection</span>
              </div>
              <p className="text-xs text-[#8F949E] leading-relaxed">
                Detects full-body profiles across diverse camera elevations, oblique angles, and optical distances.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <div className="flex flex-col gap-2 p-3 rounded bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C84B31]">
                <Layers className="w-4 h-4" />
                <span>Cosine Embedding</span>
              </div>
              <p className="text-xs text-[#8F949E] leading-relaxed">
                Constructs normalized feature vectors resistant to illumination shifts between incandescent and fluorescent corridors.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <div className="flex flex-col gap-2 p-3 rounded bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C84B31]">
                <GitFork className="w-4 h-4" />
                <span>Spatial-Temporal Bounds</span>
              </div>
              <p className="text-xs text-[#8F949E] leading-relaxed">
                Enforces physical velocity constraints between cameras, pruning impossible matches across remote zones.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Editorial Action with Magnetic Interaction */}
        <div className="mt-12 text-right">
          <ScrollReveal delay={0.4}>
            <MagneticButton
              asAnchor
              href={`${PORTAL_URL}#methodology`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-widest text-[#8F949E] hover:text-[#C84B31] transition-all"
            >
              <span>Review Mathematical Pipeline in Technical Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
