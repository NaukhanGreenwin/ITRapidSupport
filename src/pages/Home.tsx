import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Key, Brain, ChevronRight, Globe, Clock, Shield as ShieldIcon, Server, Code, FileCode } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ClientLogos from '../components/ClientLogos';
import TestimonialSlider from '../components/TestimonialSlider';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import SEO, { generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from '../components/SEO';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Microsoft365CopilotSection from '../components/Microsoft365CopilotSection';
import ServicesGrid from '../components/ServicesGrid';
import CtaSection from '../components/CtaSection';
import IndustrySecuritySolutions from '../components/IndustrySecuritySolutions';

const Home: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Michael Chen',
      role: 'CIO',
      company: 'Global Financial Services',
      quote: 'IT Rapid Support transformed our security posture. Their team quickly identified vulnerabilities our previous provider missed and implemented a robust protection strategy that gives us peace of mind.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'CISO',
      company: 'HealthTech Innovations',
      quote: 'We needed a security partner who understood healthcare compliance requirements. IT Rapid Support delivered a custom solution that not only protects our sensitive data but also ensures we stay fully compliant.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: '3',
      name: 'David Williams',
      role: 'IT Director',
      company: 'Retail Chain Corp',
      quote: 'After experiencing a significant breach with our previous provider, we switched to IT Rapid Support. Their 24/7 monitoring caught several attempted attacks that could have been devastating to our business.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/46.jpg'
    }
  ];

  // FAQ data for schema
  const faqs = [
    {
      question: "What IT security services do you offer in Toronto?",
      answer: "We offer comprehensive IT security services in Toronto including managed security services, network security, cloud security, identity management, threat detection, and 24/7 monitoring and incident response."
    },
    {
      question: "How can your managed IT support help my Mississauga business?",
      answer: "Our managed IT support services help Mississauga businesses by providing proactive monitoring, maintenance, helpdesk support, strategic IT planning, and cybersecurity protection - all designed to minimize downtime and maximize productivity."
    },
    {
      question: "Do you provide cybersecurity services for businesses in Vaughan?",
      answer: "Yes, we provide specialized cybersecurity services for Vaughan businesses including vulnerability assessments, penetration testing, security monitoring, incident response, and compliance management tailored to your industry requirements."
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
        "name": "IT Rapid Support - Toronto's Premier IT Security Services",
        "url": "https://itrapidsupport.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://itrapidsupport.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "description": "IT Rapid Support provides enterprise-grade cybersecurity solutions and managed IT services for businesses across the Greater Toronto Area, including Vaughan, Mississauga, Brampton, Woodbridge, and Concord.",
        "publisher": {
          "@type": "Organization",
          "name": "IT Rapid Support",
          "logo": {
            "@type": "ImageObject",
            "url": "https://itrapidsupport.com/ITRapid-logo.svg"
          }
        }
      },
      generateOrganizationSchema(),
      generateLocalBusinessSchema("toronto"),
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
              "@type": "City",
              "name": "Vaughan"
            },
            {
              "@type": "City",
              "name": "Mississauga"
            },
            {
              "@type": "City",
              "name": "Brampton"
            },
            {
              "@type": "City",
              "name": "Woodbridge"
            },
            {
              "@type": "City",
              "name": "Concord"
            }
          ]
        },
        "provider": {
          "@type": "Organization",
          "name": "IT Rapid Support"
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
        title="Toronto Cybersecurity & Managed IT Services | GTA Support" 
        description="IT Rapid Support provides enterprise-grade cybersecurity and managed IT services for businesses in Toronto, Vaughan, Mississauga, Brampton, Woodbridge and Concord. 24/7 local support." 
        keywords="IT security Toronto, managed IT services GTA, cybersecurity Ontario, Toronto IT support, Vaughan IT services, Mississauga cybersecurity, Brampton IT support, enterprise security"
        schema={combinedSchema}
        breadcrumbs={[{ name: 'Home', url: '/' }]}
      />
      
      {/* Main content starts here */}
      <div className="space-y-8 md:space-y-16">
        {/* Hero section - back as first section */}
        <HeroSection />
        
        {/* Services grid - now second */}
        <ServicesGrid />

        {/* Industry-specific security solutions */}
        <IndustrySecuritySolutions />

        {/* Trusted by section */}
        <div className="bg-gray-50 py-2 md:py-3">
          <div className="container mx-auto text-center mb-2 sm:mb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Trusted by Industry Leaders</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Join hundreds of organizations that rely on our security expertise
            </p>
          </div>
          <ClientLogos />
        </div>

        {/* Microsoft 365 Copilot section */}
        <Microsoft365CopilotSection />
        
        {/* Call to action */}
        <CtaSection />
      </div>
    </PageTransition>
  );
};

export default Home; 