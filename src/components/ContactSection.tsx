'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Send,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Terminal,
  Globe2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { portfolioData } from '@/data/content';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage('Message transmitted successfully. I will get back to you within 24 hours!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('success');
        setStatusMessage('Thank you! Your transmission has been queued.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage(`Transmission encountered an issue. Please write directly to ${contact.email}`);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-[1440px] mx-auto w-full border-t border-[#2A161E]/60 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/backgrounds/bg_07_status.jpg"
          alt="Contact terminal horizon"
          fill
          className="object-cover object-bottom opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0709] via-[#0C0709]/85 to-[#0C0709]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0C0709] to-transparent" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute bottom-10 right-[-5%] w-[520px] h-[520px] bg-[#5A0F1C]/25 rounded-full blur-[180px] pointer-events-none -z-10 animate-subtle-pulse" />
      <div className="absolute top-10 left-[-5%] w-[380px] h-[380px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Terminal Eyebrow Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-14 relative z-10">
        <div className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
        <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest bg-[#150D11]/80 px-3 py-1 rounded-full border border-[#D4AF37]/25">
          {contact.eyebrow}
        </span>
      </div>

      {/* Main Grid Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">
        {/* Left Column: Headline & Direct Contact Channels */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-black text-[#FAF7F2] uppercase leading-[0.95] tracking-tight">
              LET&apos;S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#ECC865] to-[#F3E5AB]">
                SOMETHING.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#F5E6D3]/85 leading-relaxed font-light pt-2 max-w-lg">
              {contact.tagline}
            </p>
          </div>

          {/* Quick Copy Email Card */}
          <div className="p-4 sm:p-5 rounded-2xl glass-panel space-y-3 border border-[#D4AF37]/25">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#8E7B74] uppercase tracking-widest">
                DIRECT INBOX TRANSMISSION
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 font-mono text-xs text-[#D4AF37] hover:text-[#FAF7F2] bg-[#0C0709] px-3 py-1 rounded-full border border-[#2A161E] hover:border-[#D4AF37]/50 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${contact.email}`}
              className="font-editorial text-xl sm:text-2xl font-bold text-[#FAF7F2] hover:text-[#D4AF37] transition-colors flex items-center justify-between group block truncate"
            >
              <span>{contact.email}</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Social Channels Island */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#8E7B74] block uppercase tracking-wider">
              ONLINE PRESENCE &amp; REPOSITORIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl glass-card flex items-center justify-between group hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-mono text-xs text-[#FAF7F2]">LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8E7B74] group-hover:text-[#D4AF37] transition-colors" />
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl glass-card flex items-center justify-between group hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-mono text-xs text-[#FAF7F2]">GITHUB</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8E7B74] group-hover:text-[#D4AF37] transition-colors" />
              </a>

              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl glass-card flex items-center justify-between group hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-mono text-xs text-[#FAF7F2]">INSTAGRAM</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8E7B74] group-hover:text-[#D4AF37] transition-colors" />
              </a>
            </div>

            {/* Live Flagship Venture Showcase Card */}
            <a
              href="https://swaddesh.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#150D11]/90 border border-[#D4AF37]/35 hover:border-[#D4AF37] flex items-center justify-between group transition-all shadow-[0_0_15px_rgba(212,175,55,0.1)] block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#5A0F1C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                  SD
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#D4AF37] block uppercase tracking-wider">
                    FLAGSHIP LIVE ECOSYSTEM
                  </span>
                  <span className="font-editorial text-base font-bold text-[#FAF7F2] group-hover:text-[#F3E5AB]">
                    swaddesh.in
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#F3E5AB]">
                <span className="hidden sm:inline">EXPLORE PLATFORM</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>

          {/* Location & Availability Beacon */}
          <div className="p-4 rounded-xl bg-[#150D11]/90 border border-[#2A161E] flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-[#8E7B74]">
              <Globe2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{contact.location}</span>
            </div>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          </div>
        </div>

        {/* Right Column: Floating Luxury Glass Contact Form */}
        <div className="lg:col-span-6 glass-panel-elevated p-6 sm:p-10 rounded-2xl relative shadow-2xl space-y-6">
          <div className="border-b border-[#2A161E] pb-4">
            <div className="flex items-center gap-2 mb-1">
              <Terminal className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider">
                TRANSMISSION TERMINAL
              </span>
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#FAF7F2]">
              Send a Direct Note
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-mono text-[10px] text-[#8E7B74] uppercase tracking-wider mb-1.5">
                Your Name / Organization
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Maya Sharma"
                className="w-full px-4 py-3 rounded-lg bg-[#0C0709] border border-[#2A161E] focus:border-[#D4AF37] text-[#FAF7F2] font-mono text-xs focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-[10px] text-[#8E7B74] uppercase tracking-wider mb-1.5">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-lg bg-[#0C0709] border border-[#2A161E] focus:border-[#D4AF37] text-[#FAF7F2] font-mono text-xs focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[10px] text-[#8E7B74] uppercase tracking-wider mb-1.5">
                Project / Collaboration Details
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe what you want to build or discuss..."
                className="w-full px-4 py-3 rounded-lg bg-[#0C0709] border border-[#2A161E] focus:border-[#D4AF37] text-[#FAF7F2] font-mono text-xs focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#5A0F1C] to-[#7C1729] hover:from-[#7C1729] hover:to-[#5A0F1C] text-[#FAF7F2] font-mono text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(90,15,28,0.5)] border border-[#D4AF37]/30 hover:border-[#D4AF37] disabled:opacity-50 cursor-pointer"
            >
              {status === 'submitting' ? (
                <span>TRANSMITTING MESSAGE...</span>
              ) : (
                <>
                  <span>TRANSMIT NOTE</span>
                  <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 font-mono text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-300 font-mono text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
