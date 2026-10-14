import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export type CursorMode = 'default' | 'hover' | 'view' | 'text';

export const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast inner tracking
  const innerX = useSpring(mouseX, { stiffness: 500, damping: 35 });
  const innerY = useSpring(mouseY, { stiffness: 500, damping: 35 });

  // Smooth outer trailing ring
  const trailX = useSpring(mouseX, { stiffness: 160, damping: 24 });
  const trailY = useSpring(mouseY, { stiffness: 160, damping: 24 });

  useEffect(() => {
    // Only enable on desktop pointer devices without reduced motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest('[data-cursor]');
      if (el) {
        const mode = el.getAttribute('data-cursor') as CursorMode;
        if (mode) setCursorState(mode);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related && related.closest && related.closest('[data-cursor]')) {
        return;
      }
      setCursorState('default');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isEnabled || !isVisible) return null;

  const innerVariants = {
    default: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: '#C84B31',
      opacity: 1,
    },
    hover: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      backgroundColor: '#FAF8F5',
      opacity: 1,
    },
    view: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      border: '1.5px solid #C84B31',
      opacity: 1,
    },
    text: {
      width: 3,
      height: 24,
      borderRadius: '2px',
      backgroundColor: '#C84B31',
      opacity: 0.9,
    },
  };

  const trailVariants = {
    default: {
      width: 32,
      height: 32,
      opacity: 0.4,
      borderColor: 'rgba(200, 75, 49, 0.4)',
      scale: 1,
    },
    hover: {
      width: 48,
      height: 48,
      opacity: 0,
      scale: 1.2,
    },
    view: {
      width: 76,
      height: 76,
      opacity: 0.35,
      borderColor: '#C84B31',
      scale: 1.1,
    },
    text: {
      width: 16,
      height: 16,
      opacity: 0,
      scale: 0.5,
    },
  };

  return (
    <>
      {/* Inner Active Center */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 overflow-hidden font-mono text-[9px] tracking-widest font-bold uppercase select-none text-[#141414]"
        style={{
          x: innerX,
          y: innerY,
          mixBlendMode: cursorState === 'hover' ? 'difference' : 'normal',
        }}
        variants={innerVariants}
        animate={cursorState}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
      >
        {cursorState === 'hover' && <span className="text-[#07080A]">OPEN</span>}
        {cursorState === 'view' && <span className="text-[#C84B31]">EXAMINE</span>}
      </motion.div>

      {/* Trailing Ambient Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C84B31]/50 pointer-events-none"
        style={{
          x: trailX,
          y: trailY,
        }}
        variants={trailVariants}
        animate={cursorState}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  );
};

