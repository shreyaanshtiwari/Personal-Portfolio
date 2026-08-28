'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '@/data/content';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-[1440px] mx-auto w-full border-t border-[#2A161E]/60 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_05_system.jpg"
          alt="Architectural system matrix and circuitry"
          fill
          className="object-cover object-top opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709] via-[#0C0709]/85 to-[#0C0709]" />
      </div>

      {/* Ambient Maroon Glow */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#5A0F1C]/20 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest bg-[#150D11]/80 px-3 py-1 rounded-full border border-[#D4AF37]/25">
              05 / SELECTED BUILDS • CASE STUDIES
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#FAF7F2] tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8E7B74] max-w-sm leading-relaxed">
          Production software and open-source systems engineered with performance, clear boundaries, and purpose.
        </p>
      </div>

      {/* Editorial Chapter Showcase Cards */}
      <div className="space-y-12 sm:space-y-16 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative glass-panel-elevated p-6 sm:p-10 md:p-12 rounded-2xl hover:border-[#D4AF37]/45 transition-all duration-300 shadow-2xl space-y-8"
          >
            {/* Top Bar: Chapter Number, Role, Category & Live Status */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#2A161E] pb-6 gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-3xl sm:text-4xl font-black text-[#D4AF37]">
                  {project.number}
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#D4AF37] tracking-widest uppercase">
                    CHAPTER / {project.category}
                  </span>
                  <span className="font-mono text-xs text-[#8E7B74]">
                    ROLE: {project.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border ${
                    project.status.toLowerCase().includes('in progress')
                      ? 'text-amber-300 bg-amber-950/40 border-amber-700/50'
                      : 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      project.status.toLowerCase().includes('in progress')
                        ? 'bg-amber-400'
                        : 'bg-emerald-400'
                    }`}
                  />
                  {project.status}
                </span>
              </div>
            </div>

            {/* Main Composition Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Title, Subtitle, Problem & Solution */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF7F2] group-hover:text-[#F3E5AB] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-editorial italic text-lg sm:text-xl text-[#D4AF37]">
                    &quot;{project.tagline}&quot;
                  </p>
                </div>

                {/* Problem Statement Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#0C0709]/80 border border-[#2A161E] space-y-1.5">
                  <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider block font-semibold">
                    THE CHALLENGE &amp; PROBLEM
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5E6D3]/85 leading-relaxed font-light">
                    {project.problem}
                  </p>
                </div>

                {/* Engineering Solution Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#150D11] border border-[#5A0F1C]/60 space-y-1.5">
                  <span className="font-mono text-[10px] text-[#ECC865] uppercase tracking-wider block font-semibold">
                    ENGINEERING SOLUTION
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5E6D3]/90 leading-relaxed font-light">
                    {project.solution}
                  </p>
                </div>

                {/* Measurable Outcome */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#0C0709]/60 border border-[#2A161E] space-y-1.5">
                  <span className="font-mono text-[10px] text-[#8E7B74] uppercase tracking-wider block font-semibold">
                    MEASURABLE OUTCOME &amp; ARCHITECTURE
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5E6D3]/80 leading-relaxed font-light">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Metrics, Tech Stack & Action Links */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2 lg:pt-0">
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-[#0C0709] border border-[#2A161E] space-y-1 text-center"
                    >
                      <span className="font-mono text-[10px] text-[#8E7B74] uppercase block">
                        {metric.label}
                      </span>
                      <span className="font-editorial text-base sm:text-lg font-bold text-[#F3E5AB] block">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-2.5">
                  <span className="font-mono text-xs text-[#8E7B74] block uppercase tracking-wider">
                    ENGINEERED WITH
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#0C0709] text-[#F5E6D3] border border-[#2A161E] hover:border-[#D4AF37]/40 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-6 border-t border-[#2A161E] flex flex-wrap items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#FAF7F2] bg-[#5A0F1C] hover:bg-[#7C1729] px-5 py-3 rounded-full transition-all border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-lg group/btn"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW REPOSITORY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#F5E6D3] hover:text-[#FAF7F2] border border-[#D4AF37]/30 hover:border-[#D4AF37] px-4 py-3 rounded-full transition-all bg-[#150D11]/90 shadow-[0_0_12px_rgba(212,175,55,0.15)] group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span className="font-semibold text-[#F3E5AB]">
                        {project.id === 'swaddesh' ? 'PRE-LAUNCH (swaddesh.in)' : 'LIVE DEMO'}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
