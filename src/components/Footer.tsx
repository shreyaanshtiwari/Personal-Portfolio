import React from 'react';
import { SocialLinks } from './SocialLinks';
import { portfolioData } from '@/data/content';

export const Footer = () => {
    const { name, tagline } = portfolioData.footer;
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">{name}</h4>
                    <p className="text-slate-500 text-sm max-w-sm">{tagline}</p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                    <SocialLinks />
                    <p className="text-slate-600 text-sm">
                        © {year} {name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
