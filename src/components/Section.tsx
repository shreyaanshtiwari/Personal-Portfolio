import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '', ...props }) => {
    return (
        <section id={id} className={`py-20 flex flex-col items-center min-h-screen justify-center px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
            <div className="max-w-5xl w-full mx-auto">
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 relative inline-block">
                        {title}
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};
