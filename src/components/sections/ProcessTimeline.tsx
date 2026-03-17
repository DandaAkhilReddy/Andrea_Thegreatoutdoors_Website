import { motion } from 'framer-motion';
import { ClipboardList, Palette, Hammer, PartyPopper } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '@/design-system/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface Step {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    description:
      'We visit your property, discuss your vision, and provide a detailed estimate — completely free.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Our team creates a custom design tailored to your space, style preferences, and budget.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description:
      'Expert craftsmen bring your design to life with premium materials and meticulous attention to detail.',
  },
  {
    icon: PartyPopper,
    title: 'Enjoy',
    description:
      'Your dream outdoor space is complete. We do a final walkthrough to ensure your total satisfaction.',
  },
];

export function ProcessTimeline() {
  const { ref, animate } = useScrollAnimation();

  return (
    <section className="section-padding bg-sand">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="How We Work"
          subtitle="From first call to final walkthrough, our process is designed to make your project stress-free."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={animate}
          variants={staggerContainer}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-cedar/20 -translate-x-1/2" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Desktop: alternating layout */}
                <div
                  className={`hidden md:flex w-full items-center gap-8 ${isLeft ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-display text-2xl tracking-wider text-darkwood uppercase">
                      {step.title}
                    </h3>
                    <p className="font-body text-stone text-sm mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-cedar text-white flex items-center justify-center shadow-lg shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1" />
                </div>

                {/* Mobile: left-aligned */}
                <div className="flex md:hidden items-start gap-6 pl-0">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-cedar text-white flex items-center justify-center shadow-lg shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl tracking-wider text-darkwood uppercase">
                      {step.title}
                    </h3>
                    <p className="font-body text-stone text-sm mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
