'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';
import { portfolioData } from '@/data/content';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt physics for profile card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#2A161E]/60 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_02_manifesto.jpg"
          alt="Architectural drafting and flowing gold thread"
          fill
          className="object-cover object-top opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709] via-[#0C0709]/85 to-[#0C0709]" />
      </div>

      {/* Atmospheric Maroon Glow */}
      <div className="absolute top-1/3 left-[-5%] w-[400px] h-[400px] bg-[#5A0F1C]/20 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Header Connector */}
      <div className="flex items-center gap-3 mb-10 sm:mb-14 relative z-10">
        <div className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
        <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest bg-[#150D11]/80 px-3 py-1 rounded-full border border-[#D4AF37]/25">
          {about.eyebrow}
        </span>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        {/* Left Column: 3D Interactive Profile Card & Floating Tech Badges */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="relative w-full max-w-sm group cursor-pointer"
          >
            {/* Ambient Gold Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 via-[#5A0F1C]/40 to-[#D4AF37]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative rounded-2xl overflow-hidden glass-panel-elevated p-3 border border-[#D4AF37]/35 shadow-2xl transition-all duration-200"
            >
              {/* Profile Image Frame */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden bg-[#150D11]">
                <Image
                  src={about.imagePath}
                  alt={about.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover object-top sm:object-[center_15%] group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0709] via-transparent to-transparent opacity-80" />

                {/* Profile Card Footer Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                  <span className="font-mono text-[10px] text-[#D4AF37] tracking-widest uppercase block">
                    FOUNDER & BUILDER
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#FAF7F2]">
                    Shreyansh Tiwari
                  </h3>
                  <p className="font-mono text-[11px] text-[#F5E6D3]/75">
                    B.Tech CSE • Full Stack Vibe Coder
                  </p>
                </div>
              </div>

              {/* Floating Technology Badges on 3D Plane - Positioned cleanly away from bottom text */}
              <div
                style={{ transform: 'translateZ(30px)' }}
                className="absolute top-6 -left-3 sm:-left-5 bg-[#150D11]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 shadow-xl flex items-center gap-2 z-20"
              >
                <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono text-[10px] text-[#FAF7F2] font-semibold">Next.js &amp; React</span>
              </div>

              <div
                style={{ transform: 'translateZ(35px)' }}
                className="absolute top-20 -right-3 sm:-right-5 bg-[#150D11]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 shadow-xl flex items-center gap-2 z-20"
              >
                <Server className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono text-[10px] text-[#FAF7F2] font-semibold">Java &amp; Spring Boot</span>
              </div>

              <div
                style={{ transform: 'translateZ(25px)' }}
                className="absolute top-[215px] sm:top-[255px] -left-3 sm:-left-5 bg-[#150D11]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 shadow-xl flex items-center gap-2 z-20"
              >
                <Database className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono text-[10px] text-[#FAF7F2] font-semibold">Postgres &amp; Supabase</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative & Principles */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-[#FAF7F2] leading-[1.05] tracking-tight">
              &quot;{about.heading}&quot;
            </h2>
            <p className="text-lg sm:text-xl text-[#F3E5AB] font-light leading-relaxed">
              {about.bioLeading}
            </p>
          </div>

          {/* Narrative Paragraphs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-[#F5E6D3]/85 leading-relaxed font-light">
                {about.bioParagraph1}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-[#8E7B74] leading-relaxed">
                {about.bioParagraph2}
              </p>
            </div>
          </div>

          {/* 3 Core Principles */}
          <div className="pt-6 border-t border-[#2A161E] grid grid-cols-1 sm:grid-cols-3 gap-6">
            {about.principles.map((item) => (
              <div
                key={item.number}
                className="glass-card p-4 sm:p-5 rounded-xl space-y-2 hover:border-[#D4AF37]/40 transition-colors"
              >
                <span className="font-mono text-xs text-[#D4AF37] font-bold block">
                  {item.number} / {item.title.toUpperCase()}
                </span>
                <p className="text-xs text-[#F5E6D3]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Verified Engineering Stats */}
          <div className="pt-6 border-t border-[#2A161E] grid grid-cols-2 sm:grid-cols-4 gap-4">
            {about.verifiedStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-editorial text-3xl sm:text-4xl font-black text-[#D4AF37] block">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] font-semibold text-[#FAF7F2] block">
                  {stat.label}
                </span>
                <span className="font-mono text-[9px] text-[#8E7B74] block leading-tight">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
