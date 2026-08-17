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

// Verified entity profiles for schema.org sameAs. These consolidate the ITRS
// entity for search and answer engines, so every URL here must be a profile we
// have actually loaded and confirmed belongs to IT Rapid Support Inc.
// Do not add a profile on assumption — an unresolvable sameAs is a worse signal
// than a short list. Last verified 2026-08-04.
export const ITRS_SAME_AS = [
  "https://ca.linkedin.com/company/itrapidsupportinc",
  "https://www.instagram.com/itrapidsupport/",
  "https://www.youtube.com/channel/UC6lKN4mHAm0tEtOJTtCh5_w",
  "https://clutch.co/profile/it-rapid-support"
];

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

// Canonical postal code for the Vaughan head office. Keep the space — this is
// the NAP string used on GBP and every directory listing, and structured data
// that disagrees with the citation set weakens entity matching. Do not collapse
// it to "L4K4G7"; that variant was live in two schema blocks until 2026-08-15.
export const ITRS_POSTAL_CODE = "L4K 4G7";

// Topics the ITRS entity is actually in business for. knowsAbout is one of the
// few properties that lets an answer engine resolve "who does managed IT in the
// GTA" to this organization rather than to a page that merely contains the
// words. Every entry must map to a service we genuinely deliver and describe
// elsewhere on the site — this is an entity claim, not a keyword list.
export const ITRS_KNOWS_ABOUT = [
  "Managed IT services",
  "Cybersecurity",
  "Managed security services",
  "Threat detection and response",
  "Cloud security",
  "Microsoft 365 administration",
  "Network security",
  "IT helpdesk support",
  "Backup and disaster recovery",
  "Endpoint protection",
  "Incident response",
  "IT outsourcing"
];

// Helper function to generate organization schema
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://itrapidsupport.com/#organization",
    "name": "IT Rapid Support Inc.",
    "alternateName": "IT Rapid Support",
    "url": "https://itrapidsupport.com",
    "logo": "https://itrapidsupport.com/images/logo.png",
    "image": "https://itrapidsupport.com/images/og-image.jpg",
    "email": "info@itrapidsupport.com",
    "telephone": "+1-289-582-9930",
    "foundingDate": "2018",
    "knowsAbout": ITRS_KNOWS_ABOUT,
    "knowsLanguage": ["en", "fr"],
    "description": "Enterprise-grade cybersecurity and IT management solutions for businesses across the Greater Toronto Area.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7810 Keele St",
      "addressLocality": "Vaughan",
      "addressRegion": "ON",
      "postalCode": ITRS_POSTAL_CODE,
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
    "sameAs": ITRS_SAME_AS,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-289-582-9930",
      "contactType": "customer service",
      "email": "info@itrapidsupport.com",
      "availableLanguage": ["English", "French"]
    }
  };
};

// Helper function to generate LocalBusiness schema
export const generateLocalBusinessSchema = (location?: string) => {
  const locations = {
    vaughan: {
      name: "IT Rapid Support Inc.",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: ITRS_POSTAL_CODE,
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Greater Toronto Area, Vaughan, Mississauga, Brampton, Woodbridge, Concord"
    },
    toronto: {
      name: "IT Rapid Support Inc.",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: ITRS_POSTAL_CODE,
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Greater Toronto Area, Toronto, Vaughan, Mississauga, Brampton, Woodbridge, Concord"
    },
    default: {
      name: "IT Rapid Support Inc.",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: ITRS_POSTAL_CODE,
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Greater Toronto Area, Vaughan, Mississauga, Brampton, Woodbridge, Concord"
    }
  };

  const loc = location && locations[location as keyof typeof locations] 
    ? locations[location as keyof typeof locations] 
    : locations.default;

  // Service-area cities. schema.org City does not accept a postalCode property
  // (only PostalAddress and GeoShape do) — listing codes here fails schema.org
  // validation on every page that embeds this block, so cities are named only.
  // Muskoka was added 2026-08-15. The cottage cluster shipped 2026-08-14 with
  // page-level Service nodes claiming Muskoka while the business entity's
  // areaServed listed GTA cities only — a direct contradiction for local and
  // AI-search entity resolution. Muskoka is a District Municipality, not a
  // city, so it is typed AdministrativeArea.
  const serviceAreas = [
    { "@type": "City", "name": "Vaughan" },
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "Mississauga" },
    { "@type": "City", "name": "Brampton" },
    { "@type": "City", "name": "Woodbridge" },
    { "@type": "City", "name": "Concord" },
    { "@type": "AdministrativeArea", "name": "District Municipality of Muskoka" },
    { "@type": "City", "name": "Bracebridge" },
    { "@type": "City", "name": "Huntsville" },
    { "@type": "City", "name": "Gravenhurst" },
    { "@type": "Place", "name": "Port Carling" }
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

  // @id is deliberately "#localbusiness" (lowercase) to match the static
  // ProfessionalService node in index.html. Until 2026-08-15 this block used
  // "#LocalBusiness" while index.html used "#localbusiness"; @id matching is
  // case-sensitive, so every page shipped TWO local-business entities for the
  // same company and split its signals. Same @id merges them into one node.
  // The @type is widened to match the static block for the same reason.
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://itrapidsupport.com/#localbusiness",
    "parentOrganization": {
      "@id": "https://itrapidsupport.com/#organization"
    },
    "name": loc.name,
    "image": "https://itrapidsupport.com/images/og-image.jpg",
    "logo": "https://itrapidsupport.com/images/logo.png",
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
    "sameAs": ITRS_SAME_AS,
    "additionalType": ["https://schema.org/ITService", "https://schema.org/ProfessionalService"],
    "knowsLanguage": ["en", "fr"]
  };
};

// Separate branch schema for the verified Vancouver office. Keep this distinct
// from the Vaughan LocalBusiness so the two phone numbers and addresses never
// get mixed in Google's local entity signals.
export const generateVancouverLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://itrapidsupport.com/it-support/vancouver/#localbusiness",
    "name": "IT Rapid Support",
    "url": "https://itrapidsupport.com/it-support/vancouver/",
    "logo": "https://itrapidsupport.com/images/logo.png",
    "email": "info@itrapidsupport.com",
    "telephone": "+1-778-803-7215",
    "description": "Remote-first managed IT services, cybersecurity, Microsoft 365 support, and a 24/7 helpdesk for Vancouver businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1066 West Hastings Street, Suite 2000",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "postalCode": "V6E 3X2",
      "addressCountry": "CA"
    },
    "areaServed": [
      { "@type": "City", "name": "Vancouver" },
      { "@type": "AdministrativeArea", "name": "Metro Vancouver" },
      { "@type": "State", "name": "British Columbia" }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://itrapidsupport.com/#organization",
      "name": "IT Rapid Support Inc."
    },
    "additionalType": "https://schema.org/ITService"
  };
};

// Helper function to generate FAQ schema.
// `pageUrl` is optional and backward compatible: when supplied the FAQPage gets
// a stable @id and is attributed to the ITRS organization, which is what lets an
// answer engine treat the Q&A as this company's statement rather than as
// unattributed page text.
export const generateFAQSchema = (
  faqs: {question: string; answer: string}[],
  pageUrl?: string
) => {
  const absoluteUrl = pageUrl
    ? (pageUrl.startsWith("http") ? pageUrl : `https://itrapidsupport.com${pageUrl}`).replace(/\/*$/, "/")
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(absoluteUrl
      ? {
          "@id": `${absoluteUrl}#faq`,
          "url": absoluteUrl,
          "publisher": { "@id": "https://itrapidsupport.com/#organization" }
        }
      : {}),
    "inLanguage": "en-CA",
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
  // Structured place for areaServed. A bare string is valid but weak; a City
  // node with a sameAs pointing at the canonical entity is what lets Google and
  // the AI crawlers resolve "Mississauga" to the actual municipality rather
  // than to a token on the page.
  areaServedPlace?: { name: string; province?: string; sameAs?: string[] };
  serviceType?: string;
}) => {
  const place = service.areaServedPlace;
  const absoluteUrl = service.url.startsWith("http")
    ? service.url
    : `https://itrapidsupport.com${service.url}`;
  // The provider carries the organization's @id so the Service resolves to the
  // ITRS entity in the page graph instead of to a loose Organization stub that
  // happens to share a name. Without the @id an answer engine has no reliable
  // way to attribute the service to the same company described everywhere else.
  const provider = service.provider
    ? { "@type": "Organization", "name": service.provider }
    : { "@id": "https://itrapidsupport.com/#organization" };
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl.replace(/\/*$/, "/")}#service`,
    "name": service.name,
    "description": service.description,
    "provider": provider,
    "serviceType": service.serviceType || "IT Services",
    "areaServed": place
      ? {
          "@type": "City",
          "name": place.name,
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": place.province || "Ontario, Canada"
          },
          ...(place.sameAs && place.sameAs.length ? { "sameAs": place.sameAs } : {})
        }
      : service.areaServed || "Greater Toronto Area, Ontario",
    "url": absoluteUrl
  };
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = window.location.pathname,
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
  // GitHub Pages serves each prerendered route as a directory and 301-redirects
  // the bare path to the trailing-slash URL; the canonical must be the final
  // 200 URL, so normalize every extensionless path to end with "/".
  const rawCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
  const fullCanonicalUrl = /\.[a-z0-9]+$/i.test(rawCanonicalUrl) ? rawCanonicalUrl : rawCanonicalUrl.replace(/\/*$/, '/');
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
      <meta name="application-name" content="IT Rapid Support" />

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
      
      {/* Hreflang: single-language site (English, Canada). Every page must carry
          a self-referencing en-ca annotation, and x-default must point at the
          page's own canonical URL — not the homepage, which makes every hreflang
          group invalid for lacking a self-reference. */}
      <link rel="alternate" hrefLang="en-ca" href={fullCanonicalUrl} />
      {alternateLanguages.map((altLang) => (
        <link
          key={altLang.locale}
          rel="alternate"
          hrefLang={altLang.locale}
          href={altLang.url.startsWith('http') ? altLang.url : `${baseUrl}${altLang.url}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={fullCanonicalUrl} />
      
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
