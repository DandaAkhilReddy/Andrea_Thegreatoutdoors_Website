import { SEOHead } from '@/components/sections/SEOHead';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { StatsBar } from '@/components/sections/StatsBar';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CTABanner } from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <SEOHead />
      <HeroSection />
      <ServicesGrid />
      <StatsBar />
      <FeaturedProjects />
      <TestimonialCarousel />
      <ProcessTimeline />
      <CTABanner />
    </>
  );
}
