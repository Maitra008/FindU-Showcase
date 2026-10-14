import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { PORTAL_URL } from '../constants/scenes';
import { ScrollReveal } from './ui/ScrollReveal';
import { PerspectiveCard } from './ui/PerspectiveCard';
import { MagneticButton } from './ui/MagneticButton';

export const TrajectorySection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#FAF8F5] text-[#141414] py-24 sm:py-36 px-6 sm:px-16 transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C84B31] uppercase mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
            <span>05 / Timeline & Spatial Synthesis</span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl font-display font-light leading-[1.12] tracking-tight mb-6">
              One sighting becomes <br />
              <em className="italic font-normal text-[#C84B31]">a coherent path.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-[#3A3D42] font-sans font-normal leading-relaxed">
              An isolated camera detection is merely a coordinate in time and space. An investigation demands a continuous trajectory. FindU connects candidate sightings into structured timelines across multi-camera physical topologies.
            </p>
          </ScrollReveal>
        </div>

        {/* Centered Archival Visual Plate with 3D tilt */}
        <ScrollReveal delay={0.25} direction="up">
          <PerspectiveCard maxTilt={3} dataCursor="view" className="mb-14">
            <div className="rounded-lg overflow-hidden border border-[#141414]/15 bg-[#0B0C0E] p-2 sm:p-4 shadow-xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-black">
                <img
                  src="/assets/frames/04_trajectory.jpg"
                  alt="FindU candidate timeline mapping across terminal concourses"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                {/* Top metadata tag */}
                <div className="absolute top-4 left-4 bg-[#0B0C0E]/85 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] font-mono text-[#F5F5F3] border border-white/10">
                  <span className="text-[#C84B31]">TRAJECTORY RECONSTRUCTION</span> · 3 CORRELATED SIGHTINGS
                </div>
              </div>
              <div className="p-3 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#7A7E85] gap-2">
                <span>EXHIBIT B: TIMELINE CORRELATION GRAPH</span>
                <span className="text-[#141414]/60">CONCOURSE B → TRANSIT HALL → EAST ENTRANCE</span>
              </div>
            </div>
          </PerspectiveCard>
        </ScrollReveal>

        {/* Narrative Milestone Progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#141414]/10">
          <ScrollReveal delay={0.1} direction="up">
            <div className="flex flex-col gap-2 p-5 rounded-lg bg-white/80 border border-[#141414]/10 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B31]">
                <Clock className="w-3.5 h-3.5" />
                <span>00:08 · INITIAL SIGHTING</span>
              </div>
              <h3 className="text-sm font-semibold text-[#141414]">Concourse B North</h3>
              <p className="text-xs text-[#5A5E66] leading-relaxed">
                Subject candidate surfaced moving southeast toward central escalators. Reference profile confidence: 88.4%.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <div className="flex flex-col gap-2 p-5 rounded-lg bg-white/80 border border-[#141414]/10 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B31]">
                <Clock className="w-3.5 h-3.5" />
                <span>00:14 · TRANSIT CORRELATION</span>
              </div>
              <h3 className="text-sm font-semibold text-[#141414]">Central Transit Hall</h3>
              <p className="text-xs text-[#5A5E66] leading-relaxed">
                Secondary candidate matched 6 minutes later. Pedestrian walking velocity of 1.2 m/s aligns with physical distance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <div className="flex flex-col gap-2 p-5 rounded-lg bg-white/80 border border-[#141414]/10 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B31]">
                <MapPin className="w-3.5 h-3.5" />
                <span>00:20 · CANDIDATE EXIT EVENT</span>
              </div>
              <h3 className="text-sm font-semibold text-[#141414]">East Entrance Vestibule</h3>
              <p className="text-xs text-[#5A5E66] leading-relaxed">
                Third sighting near street egress. Trajectory continuity verified, establishing the last recorded visual presence.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Link to Simulated Portal Workflow with Magnetic Interaction */}
        <div className="mt-12 text-right">
          <ScrollReveal delay={0.4}>
            <MagneticButton
              asAnchor
              href={`${PORTAL_URL}#investigation`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#141414]/15 bg-black/5 hover:bg-black/10 text-xs font-mono uppercase tracking-widest text-[#141414] hover:text-[#C84B31] transition-all"
            >
              <span>Explore Simulated Investigation in Technical Portal</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
