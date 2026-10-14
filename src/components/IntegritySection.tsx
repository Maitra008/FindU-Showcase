import React from 'react';
import { Shield, FileCheck, Lock, ArrowRight } from 'lucide-react';
import { PORTAL_URL } from '../constants/scenes';
import { ScrollReveal } from './ui/ScrollReveal';
import { MagneticButton } from './ui/MagneticButton';

export const IntegritySection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#FAF8F5] text-[#141414] py-24 sm:py-36 px-6 sm:px-16 transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C84B31] uppercase mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
            <span>07 / Empirical Grounding & Ethical Boundaries</span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl font-display font-light leading-[1.12] tracking-tight mb-6">
              Demonstrated capabilities. <br />
              <em className="italic font-normal text-[#C84B31]">Defined boundaries.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-[#3A3D42] font-sans font-normal leading-relaxed">
              Responsible forensic engineering demands honesty regarding accuracy, data integrity, and operational limits. FindU establishes explicit architectural boundaries to safeguard fundamental rights.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Pillars of Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.1} direction="up">
            <div className="p-6 rounded-lg bg-white/80 border border-[#141414]/10 shadow-sm flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center mb-4">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#141414] mb-2 font-display">
                  Synthetic Benchmark Validation
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5E66] leading-relaxed">
                  All showcase footage, person tracks, and investigation records are synthetically generated and anonymized. No private citizens or real surveillance archives are exposed or utilized.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#141414]/5 text-[11px] font-mono text-[#7A7E85]">
                PRIVACY COMPLIANT EVALUATION
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <div className="p-6 rounded-lg bg-white/80 border border-[#141414]/10 shadow-sm flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center mb-4">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#141414] mb-2 font-display">
                  Post-Event Search Only
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5E66] leading-relaxed">
                  FindU is designed exclusively as an authenticated, retrospective search tool for active missing-person inquiries. It cannot be connected to live mass-monitoring or persistent facial recognition.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#141414]/5 text-[11px] font-mono text-[#7A7E85]">
                RESTRICTED FORENSIC SCOPE
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <div className="p-6 rounded-lg bg-white/80 border border-[#141414]/10 shadow-sm flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center mb-4">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#141414] mb-2 font-display">
                  Immutable Audit Trails
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5E66] leading-relaxed">
                  Every candidate query, visual similarity computation, and investigator review action is cryptographically logged to prevent evidence tampering or unauthorized access.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#141414]/5 text-[11px] font-mono text-[#7A7E85]">
                FORENSIC ACCOUNTABILITY
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Technical Portal Callout with Magnetic CTA */}
        <ScrollReveal delay={0.35} direction="up">
          <div className="p-6 sm:p-8 rounded-xl bg-[#141414] text-[#F5F5F3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl border border-white/5">
            <div className="max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C84B31] block mb-1">
                Architecture & Mathematical Evaluation
              </span>
              <p className="text-sm sm:text-base text-[#8F949E]">
                Review the complete empirical benchmark evaluation, loss formulation, and cross-camera performance statistics.
              </p>
            </div>
            <MagneticButton
              asAnchor
              href={`${PORTAL_URL}#validation`}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-[#C84B31] hover:bg-[#E35639] text-white transition-all shadow-[0_4px_20px_rgba(200,75,49,0.3)]"
            >
              <span>Review Empirical Data</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
