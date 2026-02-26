import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', asChild = false, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

        const variants = {
            primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
            secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-700',
            outline: 'border-2 border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 focus:ring-slate-500',
        };

        const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

        if (asChild && React.isValidElement(children)) {
            const childNode = children as React.ReactElement<any>;
            return React.cloneElement(childNode, {
                ref,
                className: `${combinedClassName} ${childNode.props.className || ''}`.trim(),
                ...props
            });
        }

        return (
            <button ref={ref} className={combinedClassName} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
