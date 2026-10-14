import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { VIDEO_ASSET_PATH } from '../constants/scenes';
import { MagneticButton } from './ui/MagneticButton';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-linked depth and smooth transition (never leaves a black void)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.95], [1, 0.2]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);

  // Subtle pointer-following ambient glow
  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate(${e.clientX - 350}px, ${e.clientY - 350}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const headlineLine1 = 'Every missing person'.split(' ');
  const headlineLine2 = 'leaves a trail.'.split(' ');

  let wordCount = 0;
  const renderStaggeredWords = (words: string[], isItalic = false) => {
    return words.map((word, i) => {
      const delay = 0.2 + wordCount++ * 0.08;
      return (
        <motion.span
          key={i}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 45, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`inline-block mr-[0.25em] ${
            isItalic ? 'italic font-normal text-[#C84B31]' : 'font-light text-[#F5F5F3]'
          }`}
          style={{ transformOrigin: 'bottom center' }}
        >
          {word}
        </motion.span>
      );
    });
  };

  const scrollToNext = () => {
    const el = document.getElementById('section-challenge');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 pt-32 pb-16 overflow-hidden bg-[#07080A]"
    >
      {/* Dynamic Pointer Glow (restrained editorial accent) */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-[700px] h-[700px] bg-[#C84B31]/10 rounded-full blur-[140px] z-0 transition-transform duration-700 ease-out hidden md:block"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0" />

      {/* Ambient background footage - silent, atmospheric */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <motion.video
          src={VIDEO_ASSET_PATH}
          autoPlay
          loop
          muted
          playsInline
          style={shouldReduceMotion ? {} : { scale: videoScale }}
          className="w-full h-full object-cover opacity-25 filter blur-[0.6px]"
          aria-hidden="true"
        />
        {/* Editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/60 to-transparent" />
      </div>

      {/* Top Chapter Tag */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C84B31] uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
          <span>01 / Purpose</span>
        </motion.div>
      </div>

      {/* Center Main Editorial Composition */}
      <motion.div
        style={shouldReduceMotion ? {} : { opacity: contentOpacity, scale: contentScale, y: contentY }}
        className="relative z-10 max-w-5xl mx-auto w-full my-auto"
      >
        <h1
          className="text-4xl sm:text-7xl lg:text-8xl font-display font-light text-[#F5F5F3] leading-[1.08] tracking-tight mb-8"
          data-cursor="hover"
        >
          <div className="overflow-hidden pb-1">{renderStaggeredWords(headlineLine1)}</div>
          <div className="overflow-hidden pb-1">{renderStaggeredWords(headlineLine2, true)}</div>
        </h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="text-lg sm:text-2xl text-[#8F949E] font-sans font-light max-w-2xl leading-relaxed mb-10"
          data-cursor="text"
        >
          Across transit hubs, urban concourses, and public spaces, thousands of hours of footage contain scattered fragments of a journey. FindU transforms disconnected surveillance recordings into structured candidate timelines.
        </motion.p>

        {/* Archival metadata note & action */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <div className="inline-flex items-center gap-3 py-1.5 px-3 rounded border border-white/10 bg-[#0D0F12]/80 text-xs font-mono text-[#525760] backdrop-blur-sm">
            <span className="text-[#C84B31]">SIMULATED INVESTIGATION</span>
            <span className="text-white/20">|</span>
            <span>RESEARCH ARCHITECTURE FOR SEARCH ASSISTANCE</span>
          </div>

          <MagneticButton
            onClick={scrollToNext}
            className="px-5 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#F5F5F3] uppercase tracking-wider transition-all"
          >
            Explore Investigation ↓
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Bottom Editorial Scroll Cue */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto w-full pt-8 flex items-center justify-between text-xs font-mono text-[#525760] border-t border-white/5"
      >
        <span>MULTI-CAMERA CANDIDATE SYNTHESIS</span>
        <button
          onClick={scrollToNext}
          className="flex items-center gap-2 text-[#8F949E] hover:text-[#C84B31] transition-colors focus:outline-none"
          data-cursor="hover"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C84B31]" />
        </button>
      </motion.div>
    </section>
  );
};
