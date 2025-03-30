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
    "@id": "https://itrapidsupport.com/#organization",
    "name": "IT Rapid Support",
    "url": "https://itrapidsupport.com",
    "logo": "https://itrapidsupport.com/ITRapid-logo.svg",
    "email": "info@itrapidsupport.com",
    "telephone": "+1-289-582-9930",
    "description": "Enterprise-grade cybersecurity and IT management solutions for businesses across the Greater Toronto Area.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7810 Keele St",
      "addressLocality": "Vaughan",
      "addressRegion": "ON",
      "postalCode": "L4K4G7",
      "addressCountry": "CA"
    },
    "location": {
      "@type": "Place",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.7944,
        "longitude": -79.5279
      }
    },
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-289-582-9930",
      "contactType": "customer service",
      "email": "info@itrapidsupport.com",
      "availableLanguage": ["English", "French"]
    },
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "IT Rapid Support Founder"
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
    toronto: {
      name: "IT Rapid Support",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: "L4K4G7",
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Greater Toronto Area, Toronto, Vaughan, Mississauga, Brampton, Woodbridge, Concord"
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

  // Define service areas with postal codes
  const serviceAreas = [
    {
      "@type": "City",
      "name": "Vaughan",
      "postalCode": ["L4K", "L4L", "L4H", "L4J", "L6A"]
    },
    {
      "@type": "City",
      "name": "Toronto",
      "postalCode": ["M5V", "M5T", "M5S", "M5R", "M5P", "M5N", "M5M", "M5L", "M5K", "M5J", "M5H", "M5G", "M5E", "M5C", "M5B", "M5A"]
    },
    {
      "@type": "City",
      "name": "Mississauga",
      "postalCode": ["L5A", "L5B", "L5C", "L5E", "L5G", "L5H", "L5J", "L5K", "L5L", "L5M", "L5N", "L5P", "L5R", "L5S", "L5T", "L5V", "L5W"]
    },
    {
      "@type": "City",
      "name": "Brampton",
      "postalCode": ["L6P", "L6R", "L6S", "L6T", "L6V", "L6W", "L6X", "L6Y", "L6Z", "L7A"]
    },
    {
      "@type": "City",
      "name": "Woodbridge",
      "postalCode": ["L4L", "L4H"]
    },
    {
      "@type": "City",
      "name": "Concord",
      "postalCode": ["L4K"]
    }
  ];

  // Define services offered
  const services = [
    {
      "@type": "Service",
      "name": "Managed Security Services",
      "description": "24/7 security monitoring and threat management for businesses in the Greater Toronto Area."
    },
    {
      "@type": "Service",
      "name": "Threat Detection & Intelligence",
      "description": "AI-powered threat detection and proactive security monitoring for Ontario enterprises."
    },
    {
      "@type": "Service",
      "name": "Cloud Security",
      "description": "Comprehensive protection for AWS, Azure, Google Cloud, and multi-cloud environments."
    },
    {
      "@type": "Service",
      "name": "24/7 IT Support",
      "description": "Round-the-clock technical support and issue resolution for business technology systems."
    },
    {
      "@type": "Service",
      "name": "High Net Worth Security",
      "description": "Specialized security solutions for high net worth individuals and their properties."
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://itrapidsupport.com/#LocalBusiness",
    "name": loc.name,
    "image": "https://itrapidsupport.com/images/ITRapid-headquarters.jpg",
    "logo": "https://itrapidsupport.com/ITRapid-logo.svg",
    "description": "Enterprise-grade cybersecurity and IT management solutions for businesses across the Greater Toronto Area with 24/7 local support.",
    "slogan": "Securing Your Business. Simplifying Technology.",
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
    "telephone": "+1-289-582-9930",
    "email": "info@itrapidsupport.com",
    "priceRange": "$$$",
    "currenciesAccepted": "CAD",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Invoice",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": loc.latitude,
        "longitude": loc.longitude
      },
      "geoRadius": "50000"
    },
    "areaServed": {
      "@type": "State",
      "name": "Ontario",
      "containsPlace": serviceAreas
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Security Services",
      "itemListElement": services
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "IT Security & Support",
        "description": "Enterprise-grade security solutions for businesses across the Greater Toronto Area with 24/7 support."
      },
      "areaServed": {
        "@type": "State",
        "name": "Ontario",
        "containsPlace": serviceAreas
      }
    },
    "keywords": "IT security Toronto, managed IT services GTA, cybersecurity Ontario, Toronto IT support, Vaughan IT services, Mississauga cybersecurity, Brampton IT support, enterprise security",
    "hasMap": "https://goo.gl/maps/k8R5vD9Xvf9K4NE77",
    "sameAs": [],
    "additionalType": ["https://schema.org/ITService", "https://schema.org/ProfessionalService"],
    "knowsLanguage": ["en", "fr"],
    "availableLanguage": ["en", "fr"]
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
      <meta name="google-site-verification" content="ff538a12ef81de89" />

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