import React from 'react';
import { Section } from './Section';
import { portfolioData } from '@/data/content';

export const AboutSection = () => {
    const { bio } = portfolioData.about;

    return (
        <Section id="about" title="About Me" className="bg-slate-900 text-slate-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>{bio}</p>
                    <p>
                        When I'm not coding, you'll find me exploring new features in modern frameworks, reading about the latest tech trends, or ideating my next project.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Decorative Highlight Cards */}
                    <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-blue-500/50 transition-colors shadow-lg shadow-blue-900/10">
                        <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-2">2+</span>
                        <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Years of Coding</span>
                    </div>
                    <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-emerald-500/50 transition-colors shadow-lg shadow-emerald-900/10 mt-6 lg:mt-8">
                        <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-600 mb-2">10+</span>
                        <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Projects Built</span>
                    </div>
                    <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-purple-500/50 transition-colors shadow-lg shadow-purple-900/10 -mt-6 lg:-mt-8">
                        <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600 mb-2">100%</span>
                        <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Commitment</span>
                    </div>
                    <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-blue-500/50 transition-colors shadow-lg shadow-blue-900/10">
                        <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-blue-600 mb-2">∞</span>
                        <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Learning</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};
