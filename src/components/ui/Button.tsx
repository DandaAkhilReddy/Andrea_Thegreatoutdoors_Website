import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-body font-semibold tracking-wide transition-all duration-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-cedar/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-cedar text-white hover:bg-cedar-dark shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
      secondary:
        'bg-forest text-white hover:bg-pine shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
      ghost:
        'bg-transparent text-white border-2 border-white/80 hover:bg-white/10 hover:border-white',
      outline:
        'bg-transparent text-cedar border-2 border-cedar hover:bg-cedar hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
export type { ButtonProps };
