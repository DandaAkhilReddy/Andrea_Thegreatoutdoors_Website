import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '@/design-system/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface Project {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
}

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Backyard Transformation',
    description: 'Complete patio and pergola installation',
    before: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 'p2',
    title: 'Outdoor Kitchen Build',
    description: 'Full outdoor kitchen with granite island',
    before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
];

export function FeaturedProjects() {
  const { ref, animate } = useScrollAnimation();

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Transformations"
          subtitle="See the dramatic before and after results of our outdoor living projects."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={animate}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={project.before}
                      alt={`${project.title} - Before`}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={project.after}
                      alt={`${project.title} - After`}
                    />
                  }
                  style={{ height: '400px' }}
                  className="w-full"
                />
                <div className="bg-white p-6">
                  <h3 className="font-display text-2xl tracking-wider text-darkwood uppercase">
                    {project.title}
                  </h3>
                  <p className="font-body text-stone text-sm mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
