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
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  pageType?: 'home' | 'service' | 'blog' | 'contact' | 'about' | 'case-study' | 'resources';
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
    "alternateName": "Toronto's Premier IT Security Provider",
    "url": "https://itrapidsupport.com",
    "logo": "https://itrapidsupport.com/images/ITRapid-logo.svg",
    "sameAs": [
      "https://www.facebook.com/ITRapidSupport",
      "https://www.linkedin.com/company/itrapidsupport",
      "https://twitter.com/ITRapidSupport"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-123-4567",
        "contactType": "customer service",
        "areaServed": "Greater Toronto Area",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-123-4567",
        "contactType": "technical support",
        "areaServed": "Greater Toronto Area",
        "availableLanguage": ["English"]
      }
    ],
    "description": "IT Rapid Support provides enterprise-grade cybersecurity solutions and managed IT services for businesses across the Greater Toronto Area, including Vaughan, Mississauga, Brampton, Woodbridge, and Concord.",
    "foundingDate": "2012",
    "founders": [
      {
        "@type": "Person",
        "name": "John Smith",
        "jobTitle": "Founder & CEO"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50+"
    },
    "award": "Best IT Security Provider in Toronto 2023"
  };
};

// Helper function to generate LocalBusiness schema
export const generateLocalBusinessSchema = (location?: string) => {
  const locations = {
    toronto: {
      name: "IT Rapid Support - Toronto",
      streetAddress: "123 Bay Street",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M5J2T3",
      latitude: 43.6532,
      longitude: -79.3832,
      areaServed: "Toronto, North York, Scarborough, Etobicoke, East York"
    },
    vaughan: {
      name: "IT Rapid Support - Vaughan Headquarters",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: "L4K4G7",
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Vaughan, Richmond Hill, Maple, Woodbridge, Concord"
    },
    mississauga: {
      name: "IT Rapid Support - Mississauga Office",
      streetAddress: "100 City Centre Dr",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L5B2C9",
      latitude: 43.5938,
      longitude: -79.6433,
      areaServed: "Mississauga, Brampton, Oakville, Milton, Georgetown"
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
    "areaServed": loc.areaServed,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Security Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Security Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Security Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Identity & Access Management"
          }
        }
      ]
    },
    "paymentAccepted": ["Credit Card", "Debit Card", "Invoice"],
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Michael Chen"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
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
  image?: string;
  offers?: any[];
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
    "serviceType": service.serviceType || "IT Security Services",
    "areaServed": service.areaServed || "Greater Toronto Area, Ontario",
    "url": service.url.startsWith("http") ? service.url : `https://itrapidsupport.com${service.url}`,
    "image": service.image || "https://itrapidsupport.com/images/services/default-service.jpg",
    "offers": service.offers || [
      {
        "@type": "Offer",
        "price": "1000.00",
        "priceCurrency": "CAD"
      }
    ]
  };
};

// New schema for WebSite
export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IT Rapid Support - Toronto Cybersecurity & Managed IT Services",
    "alternateName": "IT Rapid Support",
    "url": "https://itrapidsupport.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://itrapidsupport.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};

// Helper function to generate review schema
export const generateReviewSchema = (reviews: {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished: string;
}[]) => {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "IT Rapid Support",
      "@id": "https://itrapidsupport.com/#business"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.reviewRating,
      "bestRating": "5"
    },
    "name": `Review by ${review.author}`,
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }));
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
  primaryKeyword,
  secondaryKeywords = [],
  pageType = 'home',
}) => {
  // Base domain for absolute URLs
  const baseUrl = 'https://itrapidsupport.com';
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  // Generate breadcrumb schema if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs ? generateBreadcrumbSchema(breadcrumbs) : null;

  // Enhanced title with primary keyword when available
  const enhancedTitle = primaryKeyword 
    ? `${title} | ${primaryKeyword} | IT Rapid Support` 
    : `${title} | IT Rapid Support`;
  
  // Combine keywords with secondary keywords
  const enhancedKeywords = keywords 
    ? secondaryKeywords.length > 0 
      ? `${keywords}, ${secondaryKeywords.join(', ')}` 
      : keywords
    : secondaryKeywords.join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags with Enhanced SEO */}
      <title>{enhancedTitle}</title>
      <meta name="description" content={description} />
      {enhancedKeywords && <meta name="keywords" content={enhancedKeywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="IT Rapid Support" />
      <meta name="theme-color" content="#E11D48" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Toronto" />

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
      <meta name="twitter:site" content="@ITRapidSupport" />
      
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

      {/* Preconnect to critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://randomuser.me" />
    </Helmet>
  );
};

export default SEO; 