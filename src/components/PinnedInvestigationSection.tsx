import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { VIDEO_ASSET_PATH, PORTAL_URL } from '../constants/scenes';
import { ArrowUpRight, Activity, ShieldCheck, Cpu, GitFork } from 'lucide-react';
import { PerspectiveCard } from './ui/PerspectiveCard';
import { MagneticButton } from './ui/MagneticButton';

interface NarrativeStep {
  stepNumber: string;
  title: string;
  headline: string;
  headlineAccent: string;
  description: string;
  telemetry: { label: string; value: string }[];
  timeRange: [number, number]; // in video seconds
  frameImage: string;
  cameraLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NARRATIVE_STEPS: NarrativeStep[] = [
  {
    stepNumber: '01',
    title: 'Multi-Camera Feed Ingestion',
    headline: 'Thousands of hours of footage.',
    headlineAccent: 'Seconds of sight.',
    description:
      'High-traffic transit hubs record across dozens of asynchronous video channels. Disparate illumination, independent clock drifts, and occluded sightlines fragment the subject trail into fleeting moments.',
    telemetry: [
      { label: 'CONCURRENT FEEDS', value: '24 STREAMS' },
      { label: 'SIGHT DURATION', value: '< 4.2 SECONDS' },
      { label: 'CLOCK DRIFT', value: '±3.8s UNSYNCHRONIZED' },
    ],
    timeRange: [0.0, 7.5],
    frameImage: '/assets/frames/01_grid.jpg',
    cameraLabel: 'CAM-01 / FEED MATRIX',
    icon: Activity,
  },
  {
    stepNumber: '02',
    title: 'Pedestrian Silhouette Localization',
    headline: 'Candidate extraction',
    headlineAccent: 'at frame rate.',
    description:
      'The multi-scale detector localizes full-body silhouettes across varying camera elevations and distances, separating human subjects from transit luggage, shadows, and architectural glare.',
    telemetry: [
      { label: 'BOUNDING REGION', value: '[x: 412, y: 188]' },
      { label: 'CONFIDENCE', value: '0.942' },
      { label: 'ZONE', value: 'CONCOURSE B NORTH' },
    ],
    timeRange: [7.5, 15.5],
    frameImage: '/assets/frames/02_detection.jpg',
    cameraLabel: 'CAM-02 / CONCOURSE B',
    icon: Cpu,
  },
  {
    stepNumber: '03',
    title: 'Visual Metric Re-Identification',
    headline: 'Invariant visual metrics,',
    headlineAccent: 'not facial scans.',
    description:
      'Rather than intrusive facial recognition, FindU projects outer clothing distribution, geometry, and texture into a normalized embedding space invariant to shifting transit lighting.',
    telemetry: [
      { label: 'REFERENCE PROFILE', value: 'SIM-0001' },
      { label: 'COSINE SIMILARITY', value: '0.884 MATCH' },
      { label: 'EMBEDDING DIM', value: '512-D VECTOR' },
    ],
    timeRange: [15.5, 25.5],
    frameImage: '/assets/frames/03_reference_match.jpg',
    cameraLabel: 'CAM-03 / RE-ID EMBED',
    icon: ShieldCheck,
  },
  {
    stepNumber: '04',
    title: 'Spatiotemporal Trajectory Synthesis',
    headline: 'Synthesizing sightings into',
    headlineAccent: 'an investigative path.',
    description:
      'Isolated detections are correlated across camera topologies using strict walking velocity constraints (1.2 m/s), eliminating physically impossible matches and revealing the subject journey.',
    telemetry: [
      { label: 'CORRELATED SIGHTINGS', value: '3 NODES' },
      { label: 'TRANSIT DURATION', value: '00:12 ELAPSED' },
      { label: 'WALKING VELOCITY', value: '1.2 m/s BOUNDED' },
    ],
    timeRange: [25.5, 36.0],
    frameImage: '/assets/frames/04_trajectory.jpg',
    cameraLabel: 'CAM-04 / TRAJECTORY',
    icon: GitFork,
  },
];

export const PinnedInvestigationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Preload all narrative keyframe images immediately so they are in memory
  useEffect(() => {
    NARRATIVE_STEPS.forEach((step) => {
      const img = new Image();
      img.src = step.frameImage;
    });
  }, []);

  // Track scroll progress to update narrative state and video scrubbing
  useEffect(() => {
    let isSeeking = false;
    let seekTimeout: ReturnType<typeof setTimeout> | null = null;

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const stepIdx = Math.min(
        Math.floor(clampedProgress * NARRATIVE_STEPS.length),
        NARRATIVE_STEPS.length - 1
      );
      setActiveStepIndex(stepIdx);

      // Scrub video continuously if enabled and video is loaded
      const video = videoRef.current;
      if (video && video.readyState >= 2 && !shouldReduceMotion) {
        const targetTime = Math.min(Math.max(clampedProgress * 38.0, 0), 38.0);
        if (!isSeeking && Math.abs(video.currentTime - targetTime) > 0.06) {
          isSeeking = true;
          video.currentTime = targetTime;

          const onSeeked = () => {
            isSeeking = false;
            setIsVideoReady(true);
            if (seekTimeout) clearTimeout(seekTimeout);
            video.removeEventListener('seeked', onSeeked);
          };

          seekTimeout = setTimeout(() => {
            isSeeking = false;
            video.removeEventListener('seeked', onSeeked);
          }, 250);

          video.addEventListener('seeked', onSeeked, { once: true });
        }
      }
    });

    return () => {
      unsubscribe();
      if (seekTimeout) clearTimeout(seekTimeout);
    };
  }, [scrollYProgress, shouldReduceMotion]);

  const activeStep = NARRATIVE_STEPS[activeStepIndex];
  const StepIcon = activeStep.icon;

  // Transform continuous progress bar for the narrative sequence
  const narrativeProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#07080A] text-[#F5F5F3] min-h-[380vh] border-t border-white/5"
      id="section-investigation-pinned"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-10 lg:px-16 py-16 sm:py-20 z-10">
        
        {/* Restrained Chapter Header */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C84B31] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
            <span>03 / Multi-Camera Investigation Sequence</span>
          </div>

          {/* Clean Stage Counter */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F949E]">
            <span className="text-[#F5F5F3] font-semibold">Stage 0{activeStepIndex + 1}</span>
            <span className="text-white/20">/</span>
            <span>04</span>
            <span className="text-[#525760] hidden sm:inline">· {activeStep.title}</span>
          </div>
        </div>

        {/* Center Main Stage: Split Grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          
          {/* Left Column: Narrative & Progressive Fact Reveal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            {/* Technical Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C84B31] mb-4">
              <StepIcon className="w-4 h-4 text-[#C84B31]" />
              <span>{activeStep.title}</span>
            </div>

            {/* Morphing Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-display font-light leading-[1.12] tracking-tight text-[#F5F5F3] mb-5">
              {activeStep.headline}{' '}
              <em className="italic font-normal text-[#C84B31] block sm:inline">
                {activeStep.headlineAccent}
              </em>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#8F949E] font-sans font-light leading-relaxed mb-6">
              {activeStep.description}
            </p>

            {/* Telemetry Matrix */}
            <div className="grid grid-cols-3 gap-2.5 p-3 rounded-lg bg-[#0E1117] border border-white/10 mb-6">
              {activeStep.telemetry.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#525760]">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-medium text-[#F5F5F3] truncate">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Deep dive link */}
            <div>
              <MagneticButton
                asAnchor
                href={`${PORTAL_URL}#methodology`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-widest text-[#8F949E] hover:text-[#C84B31] transition-colors"
              >
                <span>Examine Technical Formulation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Cinematic Video & Synchronized Visual Canvas (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <PerspectiveCard maxTilt={3} dataCursor="view" className="w-full">
              <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#0B0C0E] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* Visual Viewport with 16:9 Aspect */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black">
                  
                  {/* High-res keyframe background (guarantees zero black frames during seek) */}
                  <img
                    key={activeStep.frameImage}
                    src={activeStep.frameImage}
                    alt={activeStep.title}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05]"
                  />

                  {/* Primary Cinematic Video Layer synced with scroll */}
                  <video
                    ref={videoRef}
                    src={VIDEO_ASSET_PATH}
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsVideoReady(true)}
                    onCanPlay={() => setIsVideoReady(true)}
                    onSeeked={() => setIsVideoReady(true)}
                    onError={() => setIsVideoReady(false)}
                    className={`absolute inset-0 w-full h-full object-cover filter contrast-[1.05] transition-opacity duration-300 ${
                      isVideoReady ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Restrained Camera Identification Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#07080A]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-[#F5F5F3] border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
                    <span>SURVEILLANCE FEED · CONCOURSE B</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-[#07080A]/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-[#8F949E] border border-white/10">
                    <span>{activeStep.cameraLabel}</span>
                  </div>
                </div>

                {/* Archival Sub-Plate Caption */}
                <div className="p-2.5 pt-3 flex items-center justify-between text-xs font-mono text-[#7A7E85]">
                  <span>EXHIBIT ARCHIVE · MULTI-CAMERA CORRELATION</span>
                  <span className="text-[#525760]">CONCOURSE B TRANSIT HUB</span>
                </div>
              </div>
            </PerspectiveCard>
          </div>
        </div>

        {/* Minimal Progress Line */}
        <div className="max-w-7xl mx-auto w-full pt-4">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C84B31] to-[#E35639] origin-left"
              style={{ width: narrativeProgress }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
