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

                {/* Fake IDE Code Block */}
                <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-slate-700/50 shadow-2xl relative">
                    {/* Mac window controls */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-slate-700/50">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-xs text-slate-400 font-mono">shreyansh.ts</span>
                    </div>
                    {/* Code Content */}
                    <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto text-slate-300">
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">1</span>
                            <span><span className="text-blue-400">const</span> <span className="text-blue-300">developer</span> = {'{'}</span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">2</span>
                            <span>&nbsp;&nbsp;name: <span className="text-orange-300">'Shreyansh Kumar Tiwari'</span>,</span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">3</span>
                            <span>&nbsp;&nbsp;role: <span className="text-orange-300">'Full Stack Developer'</span>,</span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">4</span>
                            <span>&nbsp;&nbsp;hobby: <span className="text-orange-300">'Building scalable web products'</span>,</span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">5</span>
                            <span>&nbsp;&nbsp;skills: [</span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">6</span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">'Next.js'</span>, <span className="text-orange-300">'React'</span>, <span className="text-orange-300">'TypeScript'</span>,</span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">7</span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">'Python'</span>, <span className="text-orange-300">'TailwindCSS'</span>, <span className="text-orange-300">'Supabase'</span></span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">8</span>
                            <span>&nbsp;&nbsp;],</span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">9</span>
                            <span>&nbsp;&nbsp;drinkOfChoice: <span className="text-orange-300">'Coffee ☕'</span></span>
                        </div>
                        <div className="flex">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">10</span>
                            <span>{'};'}</span>
                        </div>
                        <div className="flex mt-2">
                            <span className="text-slate-500 select-none pr-4 text-right w-8">11</span>
                            <span className="text-slate-500 animate-pulse">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
