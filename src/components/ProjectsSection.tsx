import React from 'react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import { portfolioData } from '@/data/content';

export const ProjectsSection = () => {
    const { projects } = portfolioData;

    return (
        <Section id="projects" title="Featured Projects" className="bg-slate-900">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </Section>
    );
};
