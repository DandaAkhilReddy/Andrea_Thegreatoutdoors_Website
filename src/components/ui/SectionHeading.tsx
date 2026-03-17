import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp } from '@/design-system/animations';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  const { ref, animate } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      variants={fadeInUp}
      className={cn('mb-12 md:mb-16', centered && 'text-center', className)}
    >
      <h2
        className={cn(
          'font-display text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase',
          light ? 'text-white' : 'text-darkwood'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 font-body text-lg md:text-xl max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-stone'
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-20 rounded-full',
          centered && 'mx-auto',
          light ? 'bg-cedar-light' : 'bg-cedar'
        )}
      />
    </motion.div>
  );
}
