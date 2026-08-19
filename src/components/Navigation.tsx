'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/content';

interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
  chapter: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'HERO', shortLabel: '01', href: '#hero', chapter: '01' },
  { id: 'about', label: 'ABOUT', shortLabel: '02', href: '#about', chapter: '02' },
  { id: 'journey', label: 'JOURNEY', shortLabel: '03', href: '#journey', chapter: '03' },
  { id: 'skills', label: 'SKILLS', shortLabel: '04', href: '#skills', chapter: '04' },
  { id: 'projects', label: 'PROJECTS', shortLabel: '05', href: '#projects', chapter: '05' },
  { id: 'swaddesh', label: 'SWADDESH', shortLabel: '06', href: '#swaddesh', chapter: '06' },
  { id: 'architecture', label: 'ARCHITECTURE', shortLabel: '07', href: '#architecture', chapter: '07' },
  { id: 'contact', label: 'CONTACT', shortLabel: '08', href: '#contact', chapter: '08' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionElements = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPos = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIdx = navItems.findIndex((item) => item.id === activeSection);
  const formattedIndex = `0${currentIdx >= 0 ? currentIdx + 1 : 1} / 08`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0C0709]/85 backdrop-blur-xl border-b border-[#D4AF37]/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'py-5 sm:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 flex items-center justify-between">
          {/* Brand Identity & Founder Badge */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-left cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/40 bg-[#150D11] flex items-center justify-center text-[#D4AF37] font-editorial font-bold text-sm shadow-[0_0_12px_rgba(212,175,55,0.2)] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_18px_rgba(212,175,55,0.4)] transition-all">
              S
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#FAF7F2] group-hover:text-[#F3E5AB] transition-colors">
                  SHREYANSH
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60"></span>
                <span className="hidden sm:inline font-mono text-[10px] text-[#D4AF37] tracking-wider uppercase">
                  SWADDESH
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#8E7B74] uppercase tracking-wider hidden sm:block">
                Full Stack Vibe Coder &amp; Founder
              </span>
            </div>
          </a>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden xl:flex items-center gap-1 p-1.5 rounded-full bg-[#150D11]/90 backdrop-blur-md border border-[#D4AF37]/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-[#0C0709] font-bold'
                      : 'text-[#8E7B74] hover:text-[#FAF7F2]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillNav"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#ECC865] to-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    <span className="opacity-60">{item.chapter}</span>
                    <span>{item.label}</span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Island: Chapter Tracker & Status Beacon */}
          <div className="flex items-center gap-3">
            {/* Live Chapter Indicator */}
            <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-[#D4AF37] bg-[#150D11]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[#8E7B74] uppercase text-[10px]">CH</span>
              <span className="font-bold text-[#F3E5AB]">{formattedIndex}</span>
            </div>

            {/* Resume Action */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#FAF7F2] bg-[#5A0F1C] hover:bg-[#7C1729] border border-[#D4AF37]/30 hover:border-[#D4AF37] px-3.5 py-1.5 rounded-full transition-all shadow-[0_0_12px_rgba(90,15,28,0.4)]"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#FAF7F2] hover:text-[#D4AF37] bg-[#150D11]/80 rounded-full border border-[#D4AF37]/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0C0709]/98 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between xl:hidden border-b border-[#D4AF37]/20"
          >
            <div className="space-y-6 max-w-lg mx-auto w-full">
              <div className="flex items-center justify-between border-b border-[#2A161E] pb-3">
                <span className="font-mono text-xs text-[#8E7B74] tracking-widest uppercase">
                  CHAPTER INDEX
                </span>
                <span className="font-mono text-xs text-[#D4AF37] font-bold">
                  {formattedIndex}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        isActive
                          ? 'bg-[#1F1218] border-[#D4AF37] text-[#FAF7F2] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : 'bg-[#150D11]/60 border-[#2A161E] text-[#8E7B74] hover:text-[#FAF7F2]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#D4AF37]">
                          {item.chapter}
                        </span>
                        <span className="font-editorial text-lg font-bold">
                          {item.label}
                        </span>
                      </div>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Status */}
            <div className="max-w-lg mx-auto w-full pt-6 border-t border-[#2A161E] flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8E7B74]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active • SwadDesh Platform
                </span>
                <span className="text-[#D4AF37]">India (IST)</span>
              </div>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#5A0F1C] hover:bg-[#7C1729] text-[#FAF7F2] rounded-lg font-mono text-xs tracking-wider flex items-center justify-center gap-2 border border-[#D4AF37]/30"
              >
                <span>DOWNLOAD RESUME PDF</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
