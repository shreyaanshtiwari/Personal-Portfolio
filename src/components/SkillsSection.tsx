import React from 'react';
import { Section } from './Section';
import { SkillCard } from './SkillCard';
import { portfolioData } from '@/data/content';

export const SkillsSection = () => {
    const { skills } = portfolioData;

    // Flatten all skills into a single array for a dense, unified cloud display
    const allSkills = [
        ...skills.programming.map(s => ({ name: s, category: 'programming' })),
        ...skills.web.map(s => ({ name: s, category: 'web' })),
        ...skills.tools.map(s => ({ name: s, category: 'tools' })),
    ];

    return (
        <Section id="skills" title="Technical Skills" className="bg-slate-950">
            {/* Category Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                    <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Programming</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Web / App</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                    <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Tools & DBs</span>
                </div>
            </div>

            {/* Interactive dense bubble grid */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {allSkills.map((skill, index) => {
                    // Determine border/glow color based on the category
                    let colorStyles = '';
                    if (skill.category === 'programming') {
                        colorStyles = 'border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 text-blue-100';
                    } else if (skill.category === 'web') {
                        colorStyles = 'border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-500/10 text-emerald-100';
                    } else {
                        colorStyles = 'border-purple-500/30 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:bg-purple-500/10 text-purple-100';
                    }

                    return (
                        <div
                            key={`${skill.name}-${index}`}
                            className={`
                                cursor-default px-6 py-3 rounded-full border bg-slate-900/50 backdrop-blur-sm
                                transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-110
                                font-medium text-lg tracking-wide select-none
                                ${colorStyles}
                            `}
                        >
                            {skill.name}
                        </div>
                    );
                })}
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        </Section>
    );
};
