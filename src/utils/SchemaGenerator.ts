/**
 * Schema Generator
 * 
 * A utility for generating optimized JSON-LD schema markup for SEO.
 * This centralized approach ensures consistency and allows for more complex schema relationships.
 */

// Generate comprehensive WebPage schema
export const generateWebPageSchema = (props: {
  title: string;
  description: string;
  url: string;
  lastModified?: string;
  primaryImage?: string;
  pageType?: 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ItemPage' | 'FAQPage' | 'WebPage';
}) => {
  const pageType = props.pageType || 'WebPage';
  
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": props.title,
    "description": props.description,
    "url": props.url.startsWith('http') ? props.url : `https://itrapidsupport.com${props.url}`,
    "mainEntity": {
      "@type": "WebSite",
      "name": "IT Rapid Support",
      "url": "https://itrapidsupport.com"
    },
    ...(props.lastModified ? { "dateModified": props.lastModified } : {}),
    ...(props.primaryImage ? { 
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": props.primaryImage.startsWith('http') ? props.primaryImage : `https://itrapidsupport.com${props.primaryImage}`
      }
    } : {})
  };
};

// Generate professional service specific schema for IT services
export const generateProfessionalServiceSchema = (props: {
  name: string;
  description: string;
  provider: string;
  serviceArea: string;
  url: string;
  image?: string;
  offers?: any[];
  keywords?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": props.name,
    "description": props.description,
    "provider": {
      "@type": "Organization",
      "name": props.provider
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "name": props.serviceArea
    },
    "url": props.url.startsWith('http') ? props.url : `https://itrapidsupport.com${props.url}`,
    ...(props.image ? { 
      "image": props.image.startsWith('http') ? props.image : `https://itrapidsupport.com${props.image}`
    } : {}),
    ...(props.offers ? { "offers": props.offers } : {}),
    ...(props.keywords ? { "keywords": props.keywords.join(", ") } : {})
  };
};

// Generate local business schema with service options
export const generateLocalBusinessWithServicesSchema = (location: string) => {
  // Different locations and their details
  const locations: Record<string, any> = {
    toronto: {
      name: "IT Rapid Support - Toronto",
      streetAddress: "123 Bay Street",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M5J2T3",
      latitude: 43.6532,
      longitude: -79.3832,
      areaServed: "Toronto, North York, Scarborough, Etobicoke, East York",
      telephone: "+1-800-123-4567",
      description: "Toronto's premier IT security provider offering enterprise-grade cybersecurity solutions and managed IT services.",
      image: "https://itrapidsupport.com/images/toronto-office.jpg"
    },
    vaughan: {
      name: "IT Rapid Support - Vaughan HQ",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: "L4K4G7",
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Vaughan, Richmond Hill, Maple, Woodbridge, Concord",
      telephone: "+1-800-123-4567",
      description: "IT Rapid Support's headquarters providing comprehensive cybersecurity and IT management services to Vaughan and surrounding areas.",
      image: "https://itrapidsupport.com/images/vaughan-office.jpg"
    },
    mississauga: {
      name: "IT Rapid Support - Mississauga",
      streetAddress: "100 City Centre Dr",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L5B2C9",
      latitude: 43.5938,
      longitude: -79.6433,
      areaServed: "Mississauga, Brampton, Oakville, Milton, Georgetown",
      telephone: "+1-800-123-4567",
      description: "Providing specialized IT security and managed services to Mississauga businesses with local expertise and 24/7 support.",
      image: "https://itrapidsupport.com/images/mississauga-office.jpg"
    },
    default: {
      name: "IT Rapid Support",
      streetAddress: "7810 Keele St",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: "L4K4G7",
      latitude: 43.7944,
      longitude: -79.5279,
      areaServed: "Greater Toronto Area, Vaughan, Mississauga, Brampton, Woodbridge, Concord",
      telephone: "+1-800-123-4567",
      description: "Enterprise-grade cybersecurity solutions and managed IT services for businesses across the Greater Toronto Area.",
      image: "https://itrapidsupport.com/images/headquarters.jpg"
    }
  };

  const loc = location && locations[location] ? locations[location] : locations.default;

  // Common services offered across all locations
  const services = [
    {
      "@type": "Service",
      "name": "Managed Security Services",
      "description": "24/7 security monitoring and incident response services to protect your business around the clock.",
      "offers": {
        "@type": "Offer",
        "price": "1000.00",
        "priceCurrency": "CAD"
      }
    },
    {
      "@type": "Service",
      "name": "Cloud Security Solutions",
      "description": "Comprehensive protection for cloud infrastructure and applications with continuous monitoring and compliance.",
      "offers": {
        "@type": "Offer",
        "price": "1500.00",
        "priceCurrency": "CAD"
      }
    },
    {
      "@type": "Service",
      "name": "Identity Access Management",
      "description": "Enterprise identity and access control solutions to secure your digital assets and prevent unauthorized access.",
      "offers": {
        "@type": "Offer",
        "price": "1200.00",
        "priceCurrency": "CAD"
      }
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://itrapidsupport.com/#location-${location}`,
    "name": loc.name,
    "description": loc.description,
    "image": loc.image,
    "url": "https://itrapidsupport.com",
    "telephone": loc.telephone,
    "priceRange": "$$$",
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
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Security Services",
      "itemListElement": services
    },
    "areaServed": loc.areaServed,
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

// Generate comprehensive review aggregate schema
export const generateAggregateRatingSchema = (props: {
  itemName: string;
  ratingValue: string;
  reviewCount: string;
  itemType?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": props.itemName,
    "description": `${props.itemName} by IT Rapid Support - Toronto's leading IT security provider`,
    "brand": {
      "@type": "Brand",
      "name": "IT Rapid Support"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": props.ratingValue,
      "reviewCount": props.reviewCount,
      "bestRating": "5"
    }
  };
};

// Generate comprehensive FAQ schema with more structured data
export const generateEnhancedFAQSchema = (faqs: {
  question: string;
  answer: string;
  category?: string;
}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      },
      ...(faq.category ? { "about": { "@type": "Thing", "name": faq.category } } : {})
    }))
  };
};

// Generate combined service area schema
export const generateServiceAreaSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Toronto & GTA IT Security Services",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.7417,
        "longitude": -79.3733
      },
      "geoRadius": "50000"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Toronto",
        "containsPlace": [
          { "@type": "Place", "name": "North York" },
          { "@type": "Place", "name": "Etobicoke" },
          { "@type": "Place", "name": "Scarborough" },
          { "@type": "Place", "name": "East York" },
          { "@type": "Place", "name": "Downtown Toronto" }
        ]
      },
      {
        "@type": "City",
        "name": "Mississauga"
      },
      {
        "@type": "City",
        "name": "Vaughan"
      },
      {
        "@type": "City",
        "name": "Brampton"
      },
      {
        "@type": "City",
        "name": "Markham"
      },
      {
        "@type": "City",
        "name": "Richmond Hill"
      }
    ]
  };
};

// Generate combined schema for location-specific pages
export const generateLocationSpecificSchema = (location: string, serviceName: string, serviceDescription: string) => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessWithServicesSchema(location),
      {
        "@type": "Service",
        "name": `${serviceName} in ${location.charAt(0).toUpperCase() + location.slice(1)}`,
        "description": serviceDescription,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `https://itrapidsupport.com/#location-${location}`
        },
        "areaServed": {
          "@type": "City",
          "name": location.charAt(0).toUpperCase() + location.slice(1)
        }
      }
    ]
  };
};

export default {
  generateWebPageSchema,
  generateProfessionalServiceSchema,
  generateLocalBusinessWithServicesSchema,
  generateAggregateRatingSchema,
  generateEnhancedFAQSchema,
  generateServiceAreaSchema,
  generateLocationSpecificSchema
}; 