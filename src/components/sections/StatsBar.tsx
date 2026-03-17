import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp } from '@/design-system/animations';
import { siteConfig } from '@/config/site';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { end: siteConfig.stats.projectsCompleted, suffix: '+', label: 'Projects Completed' },
  { end: siteConfig.stats.yearsExperience, suffix: '+', label: 'Years Experience' },
  { end: siteConfig.stats.satisfactionRate, suffix: '%', label: 'Satisfaction Rate' },
  { end: siteConfig.stats.serviceAreas, suffix: '', label: 'Service Areas' },
];

export function StatsBar() {
  const { ref, animate } = useScrollAnimation();

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-darkwood" />
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=60')`,
        }}
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={animate}
        variants={fadeInUp}
        className="relative z-10 max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              className="font-display text-5xl md:text-6xl text-white tracking-wide"
              labelClassName="font-body text-sm md:text-base text-cedar-light mt-2 uppercase tracking-wider"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
