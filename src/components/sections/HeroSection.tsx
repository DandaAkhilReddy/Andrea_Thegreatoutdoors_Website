import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { heroTextReveal } from '@/design-system/animations';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darkwood/40 via-darkwood/50 to-darkwood/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroTextReveal}
          className="font-body text-cedar-light text-sm md:text-base tracking-[0.4em] uppercase mb-4"
        >
          Outdoor Living Specialists
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={heroTextReveal}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wider leading-none"
        >
          THE GREAT
          <br />
          OUTDOORS
        </motion.h1>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={heroTextReveal}
          className="mt-2 mb-2"
        >
          <span className="font-display text-xl md:text-2xl text-cedar-light tracking-[0.5em] uppercase">
            Patios and More
          </span>
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={heroTextReveal}
          className="font-body text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
        >
          Building Backyard Destinations
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={heroTextReveal}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/gallery">
            <Button variant="ghost" size="lg">
              View Our Work
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Get Free Estimate
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
