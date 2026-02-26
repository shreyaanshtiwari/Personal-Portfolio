import React from 'react';

interface SkillCardProps {
    category: string;
    skills: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
    return (
        <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 capitalize border-b border-slate-700 pb-2 inline-block">
                {category}
            </h3>
            <ul className="flex flex-wrap gap-3 mt-4">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-950 transition-colors border border-slate-800"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};
