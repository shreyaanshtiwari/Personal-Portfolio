'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Globe,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Lock,
  Copy,
  Check,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { portfolioData } from '@/data/content';
import { InstagramIcon } from './Icons';

export const SwaddeshPrelaunchSection: React.FC = () => {
  const { swaddesh } = portfolioData;
  const prelaunch = swaddesh.prelaunch;
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(prelaunch.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="swaddesh"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-[1440px] mx-auto w-full border-t border-[#2A161E]/60 overflow-hidden"
    >
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_04_swaddesh.jpg"
          alt="SwadDesh pre-launch atmosphere"
          fill
          className="object-cover object-top opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709] via-[#0C0709]/85 to-[#0C0709]" />
      </div>

      {/* Atmospheric Glow Highlights */}
      <div className="absolute top-1/4 right-[-8%] w-[500px] h-[500px] bg-[#5A0F1C]/35 rounded-full blur-[170px] pointer-events-none -z-10 animate-subtle-pulse" />
      <div className="absolute bottom-10 left-[-8%] w-[420px] h-[420px] bg-[#D4AF37]/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Eyebrow Header */}
      <div className="flex items-center gap-3 mb-8 sm:mb-12 relative z-10">
        <div className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
        <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest bg-[#150D11]/90 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          {prelaunch.eyebrow}
        </span>
      </div>

      {/* Main Grid Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Vision, Headline & Pre-Launch Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-700/50 text-emerald-300 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold">{prelaunch.badge}</span>
              <span className="text-emerald-500/70">•</span>
              <span className="text-[#F3E5AB]">{prelaunch.domain}</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-[#FAF7F2] uppercase tracking-tight leading-[0.96]">
              SWADDESH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#ECC865] to-[#F3E5AB]">
                PRE-LAUNCH LIVE
              </span>
            </h2>

            <p className="font-editorial italic text-lg sm:text-xl text-[#D4AF37] pt-1">
              &quot;{prelaunch.tagline}&quot;
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#F5E6D3]/85 leading-relaxed font-light">
            {prelaunch.description}
          </p>

          {/* Key Pre-Launch Pillars */}
          <div className="space-y-2.5 pt-2">
            <span className="font-mono text-[10px] text-[#8E7B74] uppercase tracking-widest block">
              PRE-LAUNCH HIGHLIGHTS
            </span>
            <div className="grid grid-cols-1 gap-2">
              {prelaunch.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-[#150D11]/80 border border-[#2A161E] text-xs text-[#F5E6D3]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action Button Cluster */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={prelaunch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#5A0F1C] to-[#7C1729] hover:from-[#7C1729] hover:to-[#5A0F1C] text-[#FAF7F2] font-mono text-xs tracking-wider border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all shadow-[0_0_25px_rgba(90,15,28,0.6)] group cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-bold">VISIT PRE-LAUNCH WEBSITE</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={swaddesh.instagram || 'https://instagram.com/swaddesh.in'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#150D11]/90 hover:bg-[#1F1218] text-[#F5E6D3] hover:text-[#FAF7F2] font-mono text-xs tracking-wider border border-[#2A161E] hover:border-[#D4AF37]/50 transition-all group"
            >
              <InstagramIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>@swaddesh.in</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Browser Mockup Window */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl overflow-hidden glass-panel-elevated border border-[#D4AF37]/35 shadow-2xl space-y-0">
            {/* Browser Window Chrome Top Header */}
            <div className="bg-[#150D11] px-4 py-3 border-b border-[#2A161E] flex items-center justify-between gap-4">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-md mx-auto flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#0C0709] border border-[#2A161E] font-mono text-xs text-[#FAF7F2]">
                <div className="flex items-center gap-2 truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-[#8E7B74]">https://</span>
                  <span className="text-[#F3E5AB] font-semibold">{prelaunch.domain}</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyLink}
                    className="text-[#8E7B74] hover:text-[#D4AF37] transition-colors p-0.5 cursor-pointer"
                    title="Copy URL"
                    aria-label="Copy website URL"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href={prelaunch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:text-[#FAF7F2] transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Live Ping Beacon */}
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 shrink-0 hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Browser Window Body Content */}
            <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-[#150D11]/90 to-[#0C0709]">
              {/* Teaser Banner Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2A161E] pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-mono text-[10px] text-[#D4AF37] tracking-widest uppercase">
                      OFFICIAL PRE-LAUNCH PORTAL
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                    SwadDesh • Regional Taste Portal
                  </h3>
                  <p className="font-mono text-xs text-[#8E7B74] mt-0.5">
                    Connecting heritage food craftsmanship with modern digital distribution.
                  </p>
                </div>

                <a
                  href={prelaunch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2 rounded-xl bg-[#5A0F1C] hover:bg-[#7C1729] text-[#FAF7F2] font-mono text-xs border border-[#D4AF37]/40 flex items-center gap-2 transition-all group/sub shadow-md self-start sm:self-center"
                >
                  <span>VISIT SWADDESH.IN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Live Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {prelaunch.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 rounded-xl bg-[#0C0709] border border-[#2A161E] text-center space-y-1"
                  >
                    <span className="font-mono text-[9px] text-[#8E7B74] uppercase block truncate">
                      {metric.label}
                    </span>
                    <span className="font-editorial text-sm sm:text-base font-bold text-[#F3E5AB] block truncate">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Teaser Visual Card */}
              <div className="p-5 rounded-xl bg-[#0C0709]/90 border border-[#D4AF37]/25 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#D4AF37] font-semibold tracking-wider uppercase">
                    PRE-LAUNCH EXPERIENCE
                  </span>
                  <span className="font-mono text-[10px] text-[#8E7B74]">
                    Web Portal • swaddesh.in
                  </span>
                </div>

                <p className="text-xs text-[#F5E6D3]/90 leading-relaxed font-light">
                  Explore how we are eliminating artificial preservatives and enabling authentic halwais and artisans across regional India to reach urban doorsteps in under 48 hours.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <a
                    href="#swaddesh-ecosystem"
                    className="text-[#8E7B74] hover:text-[#D4AF37] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read 4-Portal Architecture Below</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={prelaunch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:text-[#F3E5AB] font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>swaddesh.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
