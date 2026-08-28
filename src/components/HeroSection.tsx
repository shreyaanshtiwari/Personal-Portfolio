'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal, Globe2 } from 'lucide-react';
import { portfolioData } from '@/data/content';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { hero, personal } = portfolioData;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.75], [0, 40]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-3 sm:px-6 max-w-[1440px] mx-auto w-full overflow-hidden"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_01_hero.jpg"
          alt="Atmospheric architectural workspace"
          fill
          priority
          className="object-cover object-top opacity-35"
          sizes="100vw"
        />
        {/* Editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709]/70 via-[#0C0709]/85 to-[#0C0709]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0C0709]/40 to-[#0C0709]" />
      </div>

      {/* Atmospheric Maroon & Gold Ambient Orbs */}
      <div className="absolute top-16 right-[-10%] w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] bg-[#5A0F1C]/25 rounded-full blur-[140px] pointer-events-none -z-10 animate-subtle-pulse" />
      <div className="absolute bottom-10 left-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Hero Grid Composition */}
      <motion.div
        style={{ opacity, y }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full relative z-10"
      >
        {/* Left Column: Bold Editorial Typography */}
        <div className="lg:col-span-8 space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#150D11]/90 border border-[#D4AF37]/30 text-[11px] font-mono text-[#D4AF37] tracking-widest uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span>{hero.eyebrow}</span>
          </div>

          {/* Massive Display Headline */}
          <div className="space-y-1">
            <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[5.8rem] xl:text-[6.8rem] font-black tracking-tight text-[#FAF7F2] leading-[0.92] uppercase select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F2] via-[#F5E6D3] to-[#ECC865]">
                {hero.namePart1}
              </span>
              <span className="block text-[#FAF7F2] hover:text-[#D4AF37] transition-colors duration-500">
                {hero.namePart2}
              </span>
            </h1>

            {/* Sub-headline / Primary Role */}
            <div className="pt-2">
              <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] drop-shadow-md">
                {hero.role}
              </p>
            </div>
          </div>

          {/* Positioning Statement */}
          <p className="text-base sm:text-lg md:text-xl text-[#F5E6D3]/85 font-light leading-relaxed max-w-2xl">
            {hero.tagline}
          </p>

          {/* Action Island */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#5A0F1C] to-[#7C1729] hover:from-[#7C1729] hover:to-[#5A0F1C] text-[#FAF7F2] font-mono text-xs tracking-wider border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all shadow-[0_0_20px_rgba(90,15,28,0.5)] group cursor-pointer"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowDown className="w-4 h-4 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#150D11]/90 hover:bg-[#1F1218] text-[#F5E6D3] hover:text-[#FAF7F2] font-mono text-xs tracking-wider border border-[#2A161E] hover:border-[#D4AF37]/50 transition-all shadow-md group"
            >
              <span>{hero.ctaSecondary}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Live Status & Systems Terminal Card */}
        <div className="lg:col-span-4 flex flex-col justify-between pt-4 lg:pt-0">
          <div className="glass-panel-elevated p-6 sm:p-7 rounded-2xl relative shadow-2xl space-y-5">
            {/* Header / Live Pulse */}
            <div className="flex items-center justify-between border-b border-[#2A161E] pb-3.5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-mono text-xs text-[#8E7B74] uppercase tracking-widest">
                  LIVE STATUS
                </span>
              </div>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                {personal.status.badge}
              </span>
            </div>

            {/* Structured Insights */}
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] text-[#8E7B74] block uppercase tracking-wider">
                  FLAGSHIP VENTURE
                </span>
                <div className="flex items-center justify-between pt-0.5">
                  <a
                    href="#swaddesh"
                    className="font-editorial text-2xl font-bold text-[#FAF7F2] hover:text-[#D4AF37] transition-colors"
                  >
                    SwadDesh Ecosystem
                  </a>
                  <a
                    href="https://swaddesh.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[10px] text-[#D4AF37] hover:text-[#FAF7F2] bg-[#0C0709] border border-[#D4AF37]/40 hover:border-[#D4AF37] px-2.5 py-1 rounded-full transition-all shadow-[0_0_10px_rgba(212,175,55,0.15)] group"
                  >
                    <span>swaddesh.in</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[#2A161E]">
                <span className="font-mono text-[10px] text-[#8E7B74] block uppercase tracking-wider">
                  ACTIVE FOCUS
                </span>
                <p className="text-xs sm:text-sm text-[#F5E6D3] font-medium leading-relaxed mt-0.5">
                  {personal.status.focus}
                </p>
              </div>

              <div className="pt-2 border-t border-[#2A161E]">
                <span className="font-mono text-[10px] text-[#8E7B74] block uppercase tracking-wider">
                  ORIGIN & LOCATION
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Globe2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-xs font-mono text-[#F5E6D3]">
                    {personal.location} [{personal.timezone}]
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Specs Pill Row */}
            <div className="pt-3 border-t border-[#2A161E] grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-[#0C0709]/80 border border-[#2A161E] text-center">
                <span className="font-mono text-[10px] text-[#8E7B74] block">CAPABILITY</span>
                <span className="font-mono text-xs font-bold text-[#D4AF37]">Full Stack Vibe Coder</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0C0709]/80 border border-[#2A161E] text-center">
                <span className="font-mono text-[10px] text-[#8E7B74] block">EXECUTION</span>
                <span className="font-mono text-xs font-bold text-[#F3E5AB]">I Build &amp; Ship</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
