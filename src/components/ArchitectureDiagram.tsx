'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Shield,
  Cpu,
  Database,
  Bot,
  Layers,
} from 'lucide-react';
import { portfolioData } from '@/data/content';

export const ArchitectureDiagram: React.FC = () => {
  const { architecture } = portfolioData;
  const [selectedNodeId, setSelectedNodeId] = useState<string>(architecture.nodes[0].id);

  const getNodeIcon = (category: string) => {
    switch (category) {
      case 'FRONTEND':
        return <Layout className="w-5 h-5" />;
      case 'GATEWAY':
        return <Shield className="w-5 h-5" />;
      case 'COMPUTE':
        return <Cpu className="w-5 h-5" />;
      case 'DATA':
        return <Database className="w-5 h-5" />;
      case 'INTELLIGENCE':
        return <Bot className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const selectedNode =
    architecture.nodes.find((n) => n.id === selectedNodeId) || architecture.nodes[0];

  return (
    <section
      id="architecture"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-[1440px] mx-auto w-full border-t border-[#2A161E]/60 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_05_system.jpg"
          alt="System architecture and computational blueprints"
          fill
          className="object-cover object-top opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709] via-[#0C0709]/85 to-[#0C0709]" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/3 left-[-5%] w-[450px] h-[450px] bg-[#5A0F1C]/20 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest bg-[#150D11]/80 px-3 py-1 rounded-full border border-[#D4AF37]/25">
              {architecture.eyebrow}
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#FAF7F2] tracking-tight">
            {architecture.heading}
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8E7B74] max-w-sm leading-relaxed">
          {architecture.description}
        </p>
      </div>

      {/* Architecture System Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
        {/* Left Column: Interactive Vertical Flow Node Bus */}
        <div className="lg:col-span-6 space-y-3 relative">
          {architecture.nodes.map((node, index) => {
            const isSelected = selectedNodeId === node.id;
            const isLast = index === architecture.nodes.length - 1;

            return (
              <div key={node.id} className="relative">
                <button
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer group flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#1F1218] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.25)]'
                      : 'bg-[#150D11]/85 border-[#2A161E] hover:border-[#5A0F1C]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-[#D4AF37] text-[#0C0709]'
                          : 'bg-[#0C0709] text-[#D4AF37] group-hover:text-[#F3E5AB]'
                      }`}
                    >
                      {getNodeIcon(node.category)}
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[#D4AF37] font-bold">
                          LAYER {node.layer}
                        </span>
                        <span className="text-[#8E7B74] text-xs">•</span>
                        <span className="font-mono text-[10px] text-[#8E7B74] uppercase">
                          {node.category}
                        </span>
                      </div>
                      <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#FAF7F2]">
                        {node.title}
                      </h4>
                    </div>
                  </div>

                  {/* Active Beacon */}
                  <div className="flex items-center gap-2">
                    {isSelected ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] animate-pulse" />
                    ) : (
                      <span className="font-mono text-[10px] text-[#8E7B74] group-hover:text-[#FAF7F2]">
                        INSPECT
                      </span>
                    )}
                  </div>
                </button>

                {/* Flow Connector Line & Animated Data Pulse */}
                {!isLast && (
                  <div className="py-1 flex justify-center items-center relative h-5">
                    <div className="w-[1px] h-full bg-[#2A161E]" />
                    <motion.div
                      animate={{ y: [-4, 6, -4], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_6px_#D4AF37]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Node Detailed Telemetry & Specs Panel */}
        <div className="lg:col-span-6 glass-panel-elevated p-6 sm:p-8 rounded-2xl relative shadow-2xl space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2A161E] pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-[#D4AF37] font-bold">
                      LAYER {selectedNode.layer} / 05
                    </span>
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      OPERATIONAL
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                    {selectedNode.title}
                  </h3>
                </div>

                {selectedNode.latencyTarget && (
                  <div className="p-2.5 rounded-lg bg-[#0C0709] border border-[#2A161E] text-right">
                    <span className="font-mono text-[9px] text-[#8E7B74] block uppercase">
                      BENCHMARK
                    </span>
                    <span className="font-mono text-xs font-bold text-[#F3E5AB]">
                      {selectedNode.latencyTarget}
                    </span>
                  </div>
                )}
              </div>

              {/* Functional Role */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider block">
                  LAYER PURPOSE &amp; ROLE
                </span>
                <p className="text-sm sm:text-base text-[#F5E6D3]/90 leading-relaxed font-light">
                  {selectedNode.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="p-4 rounded-xl bg-[#0C0709]/80 border border-[#2A161E] space-y-1">
                <span className="font-mono text-[10px] text-[#8E7B74] uppercase block">
                  PRIMARY RESPONSIBILITY
                </span>
                <p className="text-xs sm:text-sm text-[#FAF7F2] font-medium leading-relaxed">
                  {selectedNode.role}
                </p>
              </div>

              {/* Technologies in this layer */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider block">
                  DEPLOYED TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-xs px-3 py-1 rounded bg-[#0C0709] text-[#F3E5AB] border border-[#2A161E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Protocols & Contracts */}
              <div className="pt-4 border-t border-[#2A161E] flex items-center justify-between text-xs font-mono text-[#8E7B74]">
                <span>PROTOCOLS:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.protocols.map((proto, pIdx) => (
                    <span key={pIdx} className="text-[#D4AF37]">
                      {proto}
                      {pIdx < selectedNode.protocols.length - 1 ? ' •' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
