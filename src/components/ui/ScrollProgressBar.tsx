import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#C84B31] via-[#E35639] to-[#C84B31] origin-left shadow-[0_0_8px_rgba(200,75,49,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};

