'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Globe2 } from 'lucide-react';
import { portfolioData } from '@/data/content';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const { footer, personal } = portfolioData;
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-3 sm:px-6 border-t border-[#2A161E] bg-[#0C0709] text-[#8E7B74] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Column: Identity & Motto */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-mono text-sm font-bold text-[#FAF7F2]">
              {footer.name}
            </span>
            <span className="text-[#D4AF37]">•</span>
            <span className="font-mono text-xs text-[#D4AF37]">
              {footer.identity}
            </span>
          </div>
          <p className="font-editorial italic text-xs text-[#F5E6D3]/70">
            &quot;{footer.motto}&quot;
          </p>
        </div>

        {/* Middle Column: Live India Time Clock */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#150D11] border border-[#2A161E] font-mono text-xs text-[#F3E5AB]">
          <Globe2 className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>INDIA (IST):</span>
          <span className="font-bold text-[#FAF7F2]">{currentTime || '11:30 AM'}</span>
        </div>

        {/* Right Column: Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full bg-[#150D11] hover:bg-[#1F1218] text-[#8E7B74] hover:text-[#D4AF37] border border-[#2A161E] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full bg-[#150D11] hover:bg-[#1F1218] text-[#8E7B74] hover:text-[#D4AF37] border border-[#2A161E] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded-full bg-[#150D11] hover:bg-[#1F1218] text-[#8E7B74] hover:text-[#D4AF37] border border-[#2A161E] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#150D11] hover:bg-[#1F1218] text-[#FAF7F2] hover:text-[#D4AF37] font-mono text-xs border border-[#2A161E] hover:border-[#D4AF37]/40 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>

      {/* Bottom Copyright & Tech signature */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#2A161E]/40 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-[#8E7B74]">
        <span>© {footer.copyrightYear} {footer.name}. All rights reserved.</span>
        <span>{footer.note}</span>
      </div>
    </footer>
  );
};
