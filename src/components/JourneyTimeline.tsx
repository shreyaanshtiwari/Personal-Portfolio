'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/content';

export const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { journey } = portfolioData;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-[1440px] mx-auto w-full border-t border-[#2A161E]/60 overflow-hidden"
    >
      {/* Cinematic Continuous Background Layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_03_journey.jpg"
          alt="Timeline path and topographic contours"
          fill
          className="object-cover object-top opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709] via-[#0C0709]/85 to-[#0C0709]" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest bg-[#150D11]/80 px-3 py-1 rounded-full border border-[#D4AF37]/25">
              03 / CHRONOLOGY • THE EVOLUTION
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#FAF7F2] tracking-tight">
            The Journey Path
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8E7B74] max-w-sm leading-relaxed">
          From low-level computational systems to architecting full-stack production platforms and founding SwadDesh.
        </p>
      </div>

      {/* Flowing Path & Timeline Milestones */}
      <div className="relative space-y-12 sm:space-y-16 z-10">
        {/* Background Track Line - Continuous from top to bottom */}
        <div className="absolute left-3 sm:left-4 md:left-6 -translate-x-1/2 top-3 bottom-3 w-[2px] bg-[#2A161E]" />

        {/* Dynamic Glowing Gold Scroll Progress Line - Continuous Flowing */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-3 sm:left-4 md:left-6 -translate-x-1/2 top-3 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#ECC865] to-[#D4AF37] shadow-[0_0_14px_#D4AF37] z-0"
        />

        {journey.map((item) => (
          <div
            key={item.number}
            className="relative pl-8 sm:pl-12 md:pl-14 group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
          >
            {/* Timeline Glowing Node Point on the line - Pixel Perfect Centered on Flow Line */}
            <div className="absolute left-3 sm:left-4 md:left-6 -translate-x-1/2 top-1.5 w-5 h-5 rounded-full bg-[#0C0709] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.6)] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ECC865] group-hover:bg-[#0C0709]" />
            </div>

            {/* Left Column: Number, Year, Phase & Role */}
            <div className="lg:col-span-4 space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#D4AF37]">
                  {item.number}
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#1F1218] text-[#F3E5AB] border border-[#D4AF37]/30">
                  {item.year}
                </span>
                <span className="font-mono text-[10px] text-[#8E7B74] uppercase tracking-wider">
                  [{item.phase}]
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF7F2] group-hover:text-[#F3E5AB] transition-colors leading-tight pt-1">
                {item.title}
              </h3>

              <p className="font-mono text-xs text-[#D4AF37]/90 font-medium">
                {item.role}
              </p>
            </div>

            {/* Right Column: Detailed Card with Highlights & Tech Stack */}
            <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl space-y-5 hover:border-[#D4AF37]/40 transition-colors shadow-xl">
              <p className="text-sm sm:text-base text-[#F5E6D3]/90 leading-relaxed font-light">
                {item.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 pt-2 border-t border-[#2A161E]">
                <span className="font-mono text-[10px] text-[#8E7B74] uppercase tracking-wider block">
                  KEY MILESTONES &amp; OUTPUT
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F5E6D3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3 border-t border-[#2A161E] flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] text-[#8E7B74] uppercase tracking-wider mr-1">
                  TOOLS:
                </span>
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#0C0709] text-[#F3E5AB] border border-[#2A161E]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
