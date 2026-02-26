'use client';
import React from 'react';
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
        <Section id="hero" className="bg-slate-950 text-white min-h-screen relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-start max-w-3xl">
                <h2 className="text-blue-500 font-medium tracking-wide mb-4">{subtitle}</h2>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                    {heading}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                    {introduction}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                    <Button onClick={handleScrollToProjects}>
                        View Projects
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Download Resume
                        </a>
                    </Button>
                </div>

                <SocialLinks />
            </div>
        </Section>
    );
};
