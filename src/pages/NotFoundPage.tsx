import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { SEOHead } from '@/components/sections/SEOHead';
import { Button } from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="min-h-screen flex items-center justify-center bg-sand px-4">
        <div className="text-center">
          <h1 className="font-display text-8xl md:text-9xl text-cedar tracking-wider">404</h1>
          <p className="font-display text-3xl text-darkwood tracking-wider uppercase mt-4">Page Not Found</p>
          <p className="font-body text-stone mt-4 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to building backyard destinations.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg" className="gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
