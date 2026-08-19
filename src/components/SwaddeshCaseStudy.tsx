'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Store,
  Truck,
  ShoppingBag,
  Layers,
  Box,
} from 'lucide-react';
import { portfolioData } from '@/data/content';

export const SwaddeshCaseStudy: React.FC = () => {
  const { swaddesh } = portfolioData;
  const [activeStep, setActiveStep] = useState<string>(swaddesh.journeySteps[0].id);

  const getStepIcon = (id: string) => {
    switch (id) {
      case 'vendor':
        return <Store className="w-5 h-5" />;
      case 'logistics':
        return <Truck className="w-5 h-5" />;
      case 'customer':
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return <Box className="w-5 h-5" />;
    }
  };

  const selectedStepData =
    swaddesh.journeySteps.find((s) => s.id === activeStep) || swaddesh.journeySteps[0];

  return (
    <section
      id="swaddesh"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-[1440px] mx-auto w-full border-t border-[#2A161E]/60 overflow-hidden"
    >
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_04_swaddesh.jpg"
          alt="Artisanal geometric Indian architectural vault"
          fill
          className="object-cover object-top opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709] via-[#0C0709]/80 to-[#0C0709]" />
      </div>

      {/* Atmospheric Maroon & Saffron Amber Glow */}
      <div className="absolute top-10 right-[-10%] w-[550px] h-[550px] bg-[#5A0F1C]/30 rounded-full blur-[180px] pointer-events-none -z-10 animate-subtle-pulse" />
      <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header & Tagline */}
      <div className="mb-12 sm:mb-16 space-y-6 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
          <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest bg-[#150D11]/90 px-3 py-1 rounded-full border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {swaddesh.eyebrow}
          </span>
        </div>

        <div className="space-y-3">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#FAF7F2] uppercase tracking-tight leading-[0.95] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            ONE HERITAGE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#ECC865] to-[#F3E5AB]">
              ENGINEERED FOR SCALE.
            </span>
          </h2>

          <div className="flex flex-wrap items-baseline gap-4 pt-2">
            <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              {swaddesh.title}
            </span>
            <span className="font-editorial italic text-lg sm:text-xl text-[#D4AF37]">
              &quot;{swaddesh.motto}&quot;
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-[#F5E6D3]/90 font-light leading-relaxed max-w-3xl pt-2">
            {swaddesh.headline}
          </p>
        </div>
      </div>

      {/* Cultural & Technological Philosophy Quote */}
      <div className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl glass-panel-elevated border-l-4 border-l-[#D4AF37] relative z-10">
        <p className="font-editorial italic text-lg sm:text-2xl text-[#FAF7F2] leading-relaxed">
          &quot;{swaddesh.philosophy}&quot;
        </p>
        <span className="font-mono text-xs text-[#D4AF37] block mt-3 uppercase tracking-wider">
          — Core Product Thesis
        </span>
      </div>

      {/* Centerpiece: 3-Stage Interactive Product Journey */}
      <div className="mb-16 sm:mb-20 space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2A161E] pb-4">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block mb-1">
              THE PRODUCT LIFECYCLE
            </span>
            <h3 className="font-editorial text-2xl sm:text-4xl font-bold text-[#FAF7F2]">
              From Artisan Kitchens to Urban Doorsteps
            </h3>
          </div>
          <span className="font-mono text-xs text-[#8E7B74]">
            Select a stage to trace the supply chain &amp; engineering logic.
          </span>
        </div>

        {/* 3 Step Interactive Selector Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {swaddesh.journeySteps.map((step) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-5 rounded-xl text-left border transition-all duration-300 relative cursor-pointer group ${
                  isSelected
                    ? 'bg-[#1F1218] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)]'
                    : 'bg-[#150D11]/85 border-[#2A161E] hover:border-[#5A0F1C]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected
                        ? 'bg-[#D4AF37] text-[#0C0709]'
                        : 'bg-[#0C0709] text-[#D4AF37] group-hover:text-[#F3E5AB]'
                    }`}
                  >
                    {getStepIcon(step.id)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#D4AF37]">
                    STAGE {step.stepNumber}
                  </span>
                </div>

                <h4 className="font-editorial text-lg font-bold text-[#FAF7F2] mb-1">
                  {step.title}
                </h4>
                <p className="font-mono text-xs text-[#8E7B74] truncate">
                  {step.subtitle}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#D4AF37]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Expanded Stage Inspection Card with AnimatePresence */}
        <div className="glass-panel-elevated p-6 sm:p-10 rounded-2xl relative shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStepData.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2A161E] pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-[#D4AF37] font-bold">
                      STAGE {selectedStepData.stepNumber}
                    </span>
                    <span className="text-[#8E7B74]">•</span>
                    <span className="font-mono text-xs text-emerald-400">
                      {selectedStepData.status}
                    </span>
                  </div>
                  <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                    {selectedStepData.title}
                  </h4>
                </div>

                <div className="p-2.5 rounded-lg bg-[#0C0709] border border-[#2A161E] font-mono text-xs text-[#F3E5AB]">
                  {selectedStepData.flowDirection}
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#F5E6D3]/90 leading-relaxed font-light">
                {selectedStepData.description}
              </p>

              {/* Key Features & Tech Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#2A161E]">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider block">
                    ENGINEERED CAPABILITIES
                  </span>
                  <div className="space-y-1.5">
                    {selectedStepData.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#F5E6D3]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider block">
                    SYSTEM IMPLEMENTATION
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedStepData.techDetails.map((td, tdIdx) => (
                      <span
                        key={tdIdx}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#0C0709] text-[#F3E5AB] border border-[#2A161E]"
                      >
                        {td}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Multi-Portal Architecture Tier Breakdown */}
      <div className="space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2A161E] pb-4">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block mb-1">
              SYSTEM TIERS
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              SwadDesh Architecture Tiers
            </h3>
          </div>
          <a
            href={swaddesh.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#FAF7F2] bg-[#5A0F1C] hover:bg-[#7C1729] px-5 py-2.5 rounded-full transition-all border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-lg group"
          >
            <span>VIEW CODEBASE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {swaddesh.architectureTiers.map((tier, idx) => (
            <div
              key={tier.id}
              className="glass-panel p-5 rounded-xl space-y-3 border border-[#2A161E] hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#D4AF37] font-bold">
                  0{idx + 1}
                </span>
                <Layers className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <h4 className="font-editorial text-lg font-bold text-[#FAF7F2]">
                {tier.name}
              </h4>
              <span className="font-mono text-[10px] text-[#F3E5AB] bg-[#0C0709] px-2 py-0.5 rounded block border border-[#2A161E] truncate">
                {tier.tech}
              </span>
              <p className="text-xs text-[#F5E6D3]/80 leading-relaxed font-light">
                {tier.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
