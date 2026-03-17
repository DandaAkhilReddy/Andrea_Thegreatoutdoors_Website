import { Star } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { cn } from '@/utils/cn';
import type { Testimonial } from '@/config/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <GlassCard dark className={cn('flex flex-col h-full', className)}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-cedar text-cedar" />
        ))}
      </div>
      <blockquote className="flex-1 text-white/90 font-body text-base leading-relaxed italic mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="border-t border-white/10 pt-4">
        <p className="font-body font-semibold text-white">{testimonial.name}</p>
        <p className="font-body text-sm text-cedar-light">{testimonial.location}</p>
        <p className="font-body text-xs text-white/50 mt-1">{testimonial.service}</p>
      </div>
    </GlassCard>
  );
}
