import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any>;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  locale?: string;
  alternateLanguages?: {locale: string; url: string}[];
  noIndex?: boolean;
  articleTags?: string[];
  breadcrumbs?: {name: string; url: string}[];
}

// Helper function to generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs: {name: string; url: string}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `https://itrapidsupport.com${crumb.url}`
    }))
  };
};

// Helper function to generate organization schema
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT Rapid Support",
    "url": "https://itrapidsupport.com",
    "logo": "https://itrapidsupport.com/images/ITRapid-logo.svg",
    "sameAs": [
      "https://www.facebook.com/ITRapidSupport",
      "https://www.linkedin.com/company/itrapidsupport",
      "https://twitter.com/ITRapidSupport"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  };
};

// Helper function to generate LocalBusiness schema
export const generateLocalBusinessSchema = (location?: string) => {
  const locations = {
    vaughan: {
      name: "IT Rapid Support",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: "L4K4G7",
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Greater Toronto Area, Vaughan, Mississauga, Brampton, Woodbridge, Concord"
    },
    default: {
      name: "IT Rapid Support",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: "L4K4G7",
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Greater Toronto Area, Vaughan, Mississauga, Brampton, Woodbridge, Concord"
    }
  };

  const loc = location && locations[location as keyof typeof locations] 
    ? locations[location as keyof typeof locations] 
    : locations.default;

  return {
    "@context": "https://schema.org",
    "@type": "ITService",
    "name": loc.name,
    "image": "https://itrapidsupport.com/images/ITRapid-headquarters.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": loc.streetAddress,
      "addressLocality": loc.addressLocality,
      "addressRegion": loc.addressRegion,
      "postalCode": loc.postalCode,
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.latitude,
      "longitude": loc.longitude
    },
    "url": "https://itrapidsupport.com",
    "telephone": "+1-800-123-4567",
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": loc.latitude,
        "longitude": loc.longitude
      },
      "geoRadius": "50000"
    },
    "areaServed": loc.areaServed
  };
};

// Helper function to generate FAQ schema
export const generateFAQSchema = (faqs: {question: string; answer: string}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Helper function to generate Service schema
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider || "IT Rapid Support"
    },
    "serviceType": service.serviceType || "IT Services",
    "areaServed": service.areaServed || "Greater Toronto Area, Ontario",
    "url": service.url.startsWith("http") ? service.url : `https://itrapidsupport.com${service.url}`
  };
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = window.location.href,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  schema,
  publishedDate,
  modifiedDate,
  author = 'IT Rapid Support',
  locale = 'en_US',
  alternateLanguages = [],
  noIndex = false,
  articleTags = [],
  breadcrumbs,
}) => {
  // Base domain for absolute URLs
  const baseUrl = 'https://itrapidsupport.com';
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  // Generate breadcrumb schema if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs ? generateBreadcrumbSchema(breadcrumbs) : null;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | IT Rapid Support</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Robots Control */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Canonical Link */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="IT Rapid Support" />
      <meta property="og:locale" content={locale} />
      
      {/* Article Specific Meta Tags */}
      {ogType === 'article' && (
        <>
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          <meta property="article:author" content={author} />
          {articleTags.map((tag, index) => (
            <meta key={`article-tag-${index}`} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@ITRapidSupport" />
      
      {/* Alternate Languages for International SEO */}
      {alternateLanguages.map((altLang) => (
        <link 
          key={altLang.locale} 
          rel="alternate" 
          hrefLang={altLang.locale} 
          href={altLang.url.startsWith('http') ? altLang.url : `${baseUrl}${altLang.url}`} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      
      {/* Structured Data Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Breadcrumb Schema if provided */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 