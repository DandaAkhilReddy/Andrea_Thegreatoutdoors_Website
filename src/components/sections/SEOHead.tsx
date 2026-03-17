import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

export function SEOHead({ title, description, path = '' }: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.fullName}`
    : `${siteConfig.fullName} | ${siteConfig.tagline}`;
  const fullDescription = description ?? siteConfig.description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={`https://${siteConfig.website}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://${siteConfig.website}${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
    </Helmet>
  );
}
