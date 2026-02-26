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

                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 relative z-10">
                        {/* Placeholder for profile image */}
                        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                            Profile Image Placeholder
                        </div>
                    </div>
                    {/* Decorative offset border */}
                    <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl translate-x-4 translate-y-4 -z-0"></div>
                </div>
            </div>
        </Section>
    );
};
