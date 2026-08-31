import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0C0709] text-[#FAF7F2] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#5A0F1C]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full glass-panel-elevated p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/30 text-center space-y-6 shadow-2xl">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#150D11] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <Compass className="w-7 h-7 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
            404 • ROUTE UNCHARTED
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#FAF7F2]">
            Destination Not Found
          </h1>
          <p className="font-mono text-xs text-[#8E7B74] leading-relaxed">
            The requested transmission coordinate does not exist within Shreyansh Kumar Tiwari&apos;s digital system architecture.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#5A0F1C] to-[#7C1729] hover:from-[#7C1729] hover:to-[#5A0F1C] text-[#FAF7F2] font-mono text-xs tracking-wider border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all shadow-[0_0_20px_rgba(90,15,28,0.5)]"
          >
            <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
            <span>RETURN TO BASE</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
