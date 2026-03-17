import { motion } from 'framer-motion';
import { Shield, Heart, Award } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/design-system/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SEOHead } from '@/components/sections/SEOHead';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatsBar } from '@/components/sections/StatsBar';
import { CTABanner } from '@/components/sections/CTABanner';

const values = [
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Every project is built with premium materials and meticulous attention to detail. We never cut corners because your outdoor space deserves the best.',
  },
  {
    icon: Shield,
    title: 'Integrity & Trust',
    description: 'Transparent pricing, honest timelines, and open communication from start to finish. We treat your home the way we\'d treat our own.',
  },
  {
    icon: Heart,
    title: 'Passion for Outdoors',
    description: 'We love what we do, and it shows in every project. Our passion for outdoor living drives us to create spaces that bring families together.',
  },
];

export default function AboutPage() {
  const storyAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();

  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about The Great Outdoors - Patios and More. Over 15 years of expert outdoor living construction in the Greater Houston area."
        path="/about"
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-darkwood/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider uppercase">
            About Us
          </h1>
          <p className="font-body text-lg text-white/80 mt-4">
            Building Backyard Destinations Since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-sand">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={storyAnimation.ref}
            initial="hidden"
            animate={storyAnimation.animate}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-darkwood uppercase mb-6">
                Our Story
              </h2>
              <div className="h-1 w-16 bg-cedar rounded-full mb-6" />
              <div className="space-y-4 font-body text-stone leading-relaxed">
                <p>
                  The Great Outdoors was founded with a simple belief: every family deserves a beautiful outdoor space where memories are made. What started as a small patio-building operation has grown into one of Houston&apos;s most trusted outdoor living companies.
                </p>
                <p>
                  With over 15 years of experience and 500+ completed projects, we&apos;ve built a reputation for exceptional craftsmanship, honest communication, and designs that transform ordinary backyards into extraordinary destinations.
                </p>
                <p>
                  From custom patios and handcrafted cedar pergolas to full outdoor kitchens and fire features, we handle every aspect of outdoor construction with the care and expertise your home deserves.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Beautiful outdoor patio with pergola"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-darkwood relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cedar rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading title="Our Values" subtitle="The principles that guide every project we build." light />
          <motion.div
            ref={valuesAnimation.ref}
            initial="hidden"
            animate={valuesAnimation.animate}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={staggerItem}>
                  <GlassCard dark className="h-full text-center">
                    <div className="w-14 h-14 rounded-full bg-cedar/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-cedar-light" />
                    </div>
                    <h3 className="font-display text-xl tracking-wider text-white uppercase mb-3">
                      {value.title}
                    </h3>
                    <p className="font-body text-sm text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <StatsBar />
      <CTABanner title="Let's Build Something Amazing" subtitle="Ready to start your outdoor living project? Contact us for a free consultation." />
    </>
  );
}
