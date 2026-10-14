import React from 'react';
import { ShieldCheck, Eye, ArrowUpRight } from 'lucide-react';
import { PORTAL_URL } from '../constants/scenes';
import { ScrollReveal } from './ui/ScrollReveal';
import { PerspectiveCard } from './ui/PerspectiveCard';
import { MagneticButton } from './ui/MagneticButton';

export const VerificationSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#07080A] text-[#F5F5F3] py-28 sm:py-36 px-6 sm:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C84B31] uppercase mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
            <span>06 / Sovereign Human Oversight</span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <div className="max-w-4xl mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.1] tracking-tight mb-8">
              Technology finds candidates. <br />
              <em className="italic font-normal text-[#C84B31]">People verify.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-[#8F949E] font-sans font-light leading-relaxed">
              Algorithmic candidate ranking is not proof. It is an attentional filter. In missing-person investigations, automated systems must never execute autonomous actions. Human judgment remains the sole authorized arbiter of truth.
            </p>
          </ScrollReveal>
        </div>

        {/* Visual Plate: Human Review Panel with 3D perspective */}
        <ScrollReveal delay={0.25} direction="up">
          <PerspectiveCard maxTilt={3} dataCursor="view" className="mb-16">
            <div className="rounded-lg overflow-hidden border border-white/10 bg-[#12151B] p-2 sm:p-4 shadow-2xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-black">
                <img
                  src="/assets/frames/05_human_review.jpg"
                  alt="FindU candidate review interface with Under Human Review status"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-[#C84B31]/20 border border-[#C84B31]/50 backdrop-blur-md px-3.5 py-1.5 rounded text-xs font-mono text-[#F5F5F3] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C84B31] animate-pulse" />
                  <span>UNDER HUMAN REVIEW</span>
                </div>
              </div>
              <div className="p-3 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#8F949E] gap-2">
                <span>EXHIBIT C: AUTHORIZED INVESTIGATIVE DASHBOARD</span>
                <span className="text-[#525760]">MANDATORY TWO-EXAMINER VERIFICATION PROTOCOL</span>
              </div>
            </div>
          </PerspectiveCard>
        </ScrollReveal>

        {/* Two-Column Division of Responsibility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-white/10">
          {/* Column 1: Machine Subsystem */}
          <ScrollReveal delay={0.1} direction="right">
            <div className="p-6 sm:p-8 rounded-lg bg-[#0D0F13] border border-white/5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8F949E] mb-4">
                  <Eye className="w-4 h-4 text-[#8F949E]" />
                  <span>The Computational Role</span>
                </div>
                <h3 className="text-xl font-display text-[#F5F5F3] mb-4">
                  High-Throughput Candidate Surfacing
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#8F949E] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C84B31] font-bold">—</span>
                    <span>Parses thousands of hours of video across uncoordinated DVR archives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C84B31] font-bold">—</span>
                    <span>Extracts metric visual feature vectors invariant to light and perspective.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C84B31] font-bold">—</span>
                    <span>Prunes physically impossible transit paths based on maximum walking velocity.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-[#525760]">
                BOUNDS: DOES NOT ISSUE ACCUSATIONS OR CONCLUSIVE IDENTIFICATIONS.
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2: Human Authority */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="p-6 sm:p-8 rounded-lg bg-[#14181F] border border-[#C84B31]/30 flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C84B31] mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#C84B31]" />
                  <span>The Sovereign Human Role</span>
                </div>
                <h3 className="text-xl font-display text-[#F5F5F3] mb-4">
                  Contextual Assessment & Decision
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#A8ACB4] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C84B31] font-bold">—</span>
                    <span>Interprets subtle behavioral context, clothing seams, and gait particulars.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C84B31] font-bold">—</span>
                    <span>Cross-references witness testimonies, cell tower telemetry, and ticket records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C84B31] font-bold">—</span>
                    <span>Authorizes the deployment of search personnel and physical search perimeters.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#C84B31]/20 text-[11px] font-mono text-[#C84B31]">
                PRINCIPIUM: SOVEREIGN HUMAN OVERSIGHT AT EVERY INVESTIGATIVE JUNCTURE.
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Link to Safeguards with MagneticButton */}
        <div className="mt-12 text-right">
          <ScrollReveal delay={0.3}>
            <MagneticButton
              asAnchor
              href={`${PORTAL_URL}#validation`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-widest text-[#8F949E] hover:text-[#C84B31] transition-all"
            >
              <span>Review Human-in-the-Loop Protocol in Technical Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
