import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTAL_URL } from '../constants/scenes';
import { MagneticButton } from './ui/MagneticButton';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 py-4 sm:py-5 flex items-center justify-between ${
        isScrolled
          ? 'bg-[#07080A]/85 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Brand Wordmark */}
      <div className="flex items-center gap-6">
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 focus:outline-none"
          aria-label="FindU — Return to top"
          data-cursor="hover"
        >
          <span className="font-sans font-semibold text-lg sm:text-xl tracking-tight text-[#F5F5F3] group-hover:text-white transition-colors">
            Find<span className="text-[#C84B31]">U</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31] ml-0.5 opacity-80" />
        </button>

        {/* Narrative Chapter Indicator */}
        <div className="hidden md:flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#8F949E] pl-4 border-l border-white/10">
          <span className="text-[#C84B31] font-semibold">{activeSection}</span>
        </div>
      </div>

      {/* Right Link with Magnetic Button */}
      <div className="flex items-center gap-4">
        <MagneticButton
          asAnchor
          href={PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#F5F5F3] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all shadow-sm"
        >
          <span>Technical Portal</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#8F949E] group-hover:text-[#C84B31] transition-colors" />
        </MagneticButton>
      </div>
    </header>
  );
};
