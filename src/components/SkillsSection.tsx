import React from 'react';
import { Section } from './Section';
import { SkillCard } from './SkillCard';
import { portfolioData } from '@/data/content';

export const SkillsSection = () => {
    const { skills } = portfolioData;

    return (
        <Section id="skills" title="Technical Skills" className="bg-slate-950">
            <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                    <SkillCard key={category} category={category} skills={skillList} />
                ))}
            </div>
        </Section>
    );
};
