import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function GlassCard({ children, className, dark = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8',
        dark ? 'glass-dark' : 'glass',
        'shadow-[0_8px_32px_rgba(74,44,29,0.1)]',
        className
      )}
    >
      {children}
    </div>
  );
}
