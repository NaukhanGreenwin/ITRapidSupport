import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Key, Brain, ChevronRight, Globe, Clock, Shield as ShieldIcon, Server, Code, FileCode } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ClientLogos from '../components/ClientLogos';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import SEO, { generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from '../components/SEO';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Microsoft365CopilotSection from '../components/Microsoft365CopilotSection';
import ServicesGrid from '../components/ServicesGrid';
import CtaSection from '../components/CtaSection';
import IndustrySecuritySolutions from '../components/IndustrySecuritySolutions';
import GTACybersecuritySection from '../components/GTACybersecuritySection';

const Home: React.FC = () => {

  // FAQ data for schema.
  //
  // Deliberately region-level, not city-level. The homepage was ranking at or
  // near position 1 for city-specific queries ("cybersecurity services vaughan",
  // "it help desk services vaughan") that belong to the purpose-built city pages,
  // which sat on page 3 for the same terms. City-named questions here were the
  // strongest cannibalisation signal on the page, so every question is now
  // answered at Toronto/GTA level and the city work is handed off by link.
  const faqs = [
    {
      question: "What IT security services do you offer across Toronto and the GTA?",
      answer: "We offer comprehensive IT security services across the Greater Toronto Area including managed security services, network security, cloud security, identity management, threat detection, and 24/7 monitoring and incident response."
    },
    {
      question: "How does managed IT support work for a business in the Greater Toronto Area?",
      answer: "Our managed IT support provides proactive monitoring, maintenance, 24/7 helpdesk, strategic IT planning, and cybersecurity protection under one fixed monthly fee - all designed to minimize downtime and maximize productivity. Each city we cover has its own page with the local detail, listed on our IT support across the GTA page."
    },
    {
      question: "Do you provide cybersecurity services for businesses across the Greater Toronto Area?",
      answer: "Yes. We provide managed cybersecurity across the GTA including vulnerability assessments, security monitoring, managed detection and response, incident response, and email authentication with SPF, DKIM and DMARC, tailored to your industry requirements."
    },
    {
      question: "What makes your IT support different from other providers in the Greater Toronto Area?",
      answer: "Our IT support stands out in the GTA through our comprehensive security-first approach, 24/7 availability, rapid response times, experienced certified engineers, and personalized service plans designed for your specific business needs."
    }
  ];

  // Enhanced structured data combining multiple schemas with location focus
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://itrapidsupport.com/#website",
        "name": "IT Rapid Support",
        "alternateName": "IT Rapid Support Inc.",
        "url": "https://itrapidsupport.com/",
        "description": "IT Rapid Support provides enterprise-grade cybersecurity solutions and managed IT services for businesses across Toronto and the Greater Toronto Area.",
        "publisher": {
          "@id": "https://itrapidsupport.com/#organization"
        }
      },
      generateOrganizationSchema(),
      // Note: the profile argument only selects NAP + geo, which are identical
      // for every GTA profile, and the emitted areaServed city list is
      // hardcoded site-wide in generateLocalBusinessSchema. Changing it here
      // does nothing — the homepage/city-page LocalBusiness blocks are
      // identical by construction, which is the open entity-graph item.
      generateLocalBusinessSchema("vaughan"),
      generateFAQSchema(faqs),
      {
        "@type": "Service",
        "name": "Toronto Cybersecurity Solutions",
        "serviceType": "IT Security Services",
        "areaServed": {
          "@type": "State",
          "name": "Ontario",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Toronto"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Greater Toronto Area"
            }
          ]
        },
        "provider": {
          "@type": "Organization",
          "name": "IT Rapid Support Inc."
        },
        "description": "Enterprise-grade cybersecurity solutions for businesses across Ontario, including threat detection, incident response, and security assessments.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "CAD"
          }
        }
      }
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title="Managed IT & Cybersecurity, Toronto & GTA"
        description="Your IT and your security handled by one team, not two vendors. 24/7 helpdesk, on-site across Toronto and the GTA, fixed monthly fee. Call (289) 582-9930."
        keywords="IT security Toronto, managed IT services GTA, cybersecurity Ontario, Toronto IT support, GTA managed security, Greater Toronto Area IT company, enterprise security"
        schema={combinedSchema}
        breadcrumbs={[{ name: 'Home', url: '/' }]}
      />
      
      {/* Main content starts here - Optimize for mobile loading */}
      <div className="space-y-8 md:space-y-16">
        {/* Critical path components */}
        <div data-preload="true">
          {/* Hero section - always preload */}
          <HeroSection />
        </div>
        
        {/* Secondary components */}
        <div data-preload="deferred">
          {/* Services grid */}
          <ServicesGrid />
        </div>

        {/* Below-fold components */}
        <IndustrySecuritySolutions />
        <GTACybersecuritySection />
        <Microsoft365CopilotSection />
        <CtaSection />
      </div>
    </PageTransition>
  );
};

export default Home; 
