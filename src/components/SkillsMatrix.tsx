'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Server,
  Smartphone,
  Bot,
  Database,
  Cloud,
  Sparkles,
  Layers,
} from 'lucide-react';
import { portfolioData } from '@/data/content';

export const SkillsMatrix: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4" />;
      case 'Bot':
        return <Bot className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const currentCategoryData =
    skills.categories.find((c) => c.id === activeCategory) || skills.categories[0];

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-[1440px] mx-auto w-full border-t border-[#2A161E]/60 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_06_builds.jpg"
          alt="Technical workshop and engineering framing"
          fill
          className="object-cover object-top opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709] via-[#0C0709]/85 to-[#0C0709]" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 right-[-5%] w-[420px] h-[420px] bg-[#5A0F1C]/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-6 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest bg-[#150D11]/80 px-3 py-1 rounded-full border border-[#D4AF37]/25">
              {skills.eyebrow}
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#FAF7F2] tracking-tight">
            {skills.heading}
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8E7B74] max-w-md leading-relaxed">
          {skills.description}
        </p>
      </div>

      {/* Interactive Category Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8 relative z-10">
        {skills.categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative cursor-pointer group ${
                isActive
                  ? 'bg-[#1F1218] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                  : 'bg-[#150D11]/80 border-[#2A161E] hover:border-[#5A0F1C] text-[#8E7B74] hover:text-[#FAF7F2]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`p-1.5 rounded-lg ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#0C0709]'
                      : 'bg-[#0C0709] text-[#D4AF37] group-hover:text-[#F3E5AB]'
                  }`}
                >
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="font-mono text-[10px] text-[#8E7B74]">
                  {cat.skills.length}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[9px] text-[#D4AF37] uppercase block tracking-wider">
                  {cat.label}
                </span>
                <span className="font-editorial text-sm font-bold text-[#FAF7F2] block truncate">
                  {cat.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Category Display Panel & Glowing Cards */}
      <div className="relative z-10 space-y-6">
        {/* Category Description Banner */}
        <div className="p-4 sm:p-5 rounded-xl glass-panel flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#D4AF37]/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#5A0F1C] text-[#F3E5AB] border border-[#D4AF37]/30">
              {getCategoryIcon(currentCategoryData.iconName)}
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#FAF7F2]">
                {currentCategoryData.name}
              </h3>
              <p className="text-xs text-[#F5E6D3]/75 font-light">
                {currentCategoryData.description}
              </p>
            </div>
          </div>
          <span className="font-mono text-xs text-[#D4AF37] bg-[#0C0709] px-3 py-1.5 rounded-full border border-[#2A161E] w-fit">
            DOMAIN: {currentCategoryData.label}
          </span>
        </div>

        {/* Skills Cards Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentCategoryData.skills.map((skill, idx) => (
              <div
                key={skill.name}
                className={`p-5 rounded-xl glass-card space-y-3 relative group overflow-hidden ${
                  skill.highlight
                    ? 'border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                    : 'border-[#2A161E] hover:border-[#5A0F1C]'
                }`}
              >
                {/* Subtle top border glow for highlighted skills */}
                {skill.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                )}

                {/* Skill Name & Capability Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-editorial text-lg font-bold text-[#FAF7F2] group-hover:text-[#F3E5AB] transition-colors block">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider block mt-0.5">
                      CAPABILITY: {skill.capabilityTag}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#5A0F1C] text-[#F3E5AB] border border-[#D4AF37]/40">
                    CAN BUILD
                  </span>
                </div>

                {/* Practical Capability Description */}
                <p className="text-xs text-[#F5E6D3]/90 leading-relaxed font-light">
                  {skill.description}
                </p>

                {/* Micro tech terminal indicator */}
                <div className="pt-2 border-t border-[#2A161E]/60 flex items-center justify-between font-mono text-[10px] text-[#8E7B74]">
                  <span className="flex items-center gap-1 text-[#D4AF37]">
                    <Sparkles className="w-3 h-3" />
                    <span>I Can Build &amp; Ship</span>
                  </span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
