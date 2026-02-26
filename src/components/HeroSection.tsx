'use client';
import React from 'react';
import Image from 'next/image';
import { Section } from './Section';
import { Button } from './Button';
import { SocialLinks } from './SocialLinks';
import { portfolioData } from '@/data/content';

export const HeroSection = () => {
    const { heading, subtitle, introduction } = portfolioData.hero;

    const handleScrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Section id="hero" className="min-h-[90vh] flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-5xl">
                {/* Text Content */}
                <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                    <p className="text-blue-500 font-medium tracking-wide uppercase mb-4">{subtitle}</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        {heading.split(' ').map((word, i) => (
                            <span key={i} className={i >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400' : ''}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
                        {introduction}
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
                        <Button onClick={handleScrollToProjects}>
                            View Projects
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        </Button>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <span className="text-slate-500 font-medium">Connect with me:</span>
                        <SocialLinks />
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-800 p-2 border-4 border-slate-800 shadow-2xl">
                        <Image
                            src="/Shreyansh Tiwari.png"
                            alt="Shreyansh Kumar Tiwari"
                            fill
                            priority
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 256px, 320px"
                        />
                        <div className="absolute inset-0 rounded-full border border-slate-700/50"></div>

                        {/* Decorative glow behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-2xl -z-10"></div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
