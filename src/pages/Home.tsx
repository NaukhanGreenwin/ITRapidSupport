import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Key, Brain, ChevronRight, Globe, Clock, Shield as ShieldIcon, Server, Code, FileCode } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ClientLogos from '../components/ClientLogos';
import TestimonialSlider from '../components/TestimonialSlider';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import SEO, { generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema, generateWebsiteSchema } from '../components/SEO';
import { motion } from 'framer-motion';

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
      generateWebsiteSchema(),
      generateOrganizationSchema(),
      generateLocalBusinessSchema("toronto"),
      generateLocalBusinessSchema("vaughan"),
      generateLocalBusinessSchema("mississauga"),
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
        description="Top-rated IT security services in Toronto: 24/7 local cybersecurity, managed IT support, and enterprise protection for businesses across GTA, Vaughan, Mississauga, and Brampton. 100% compliance guarantee."
        keywords="IT security Toronto, managed IT services GTA, cybersecurity Ontario, Toronto IT support, Vaughan IT services, Mississauga cybersecurity, Brampton IT support, enterprise security"
        schema={combinedSchema}
        breadcrumbs={[{ name: 'Home', url: '/' }]}
        primaryKeyword="Toronto Cybersecurity"
        secondaryKeywords={[
          "Managed IT Toronto",
          "24/7 IT Support GTA",
          "Cybersecurity Ontario",
          "IT Security Vaughan",
          "Mississauga IT Services",
          "Enterprise Security Solutions",
          "Canadian Cybersecurity Compliance",
          "Toronto IT Security Company"
        ]}
        pageType="home"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900" aria-label="Toronto IT Security Hero">
        {/* Abstract geometric shapes background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-10 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <AnimateOnScroll variant="fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/20 rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-red-100 text-sm font-medium">#1 Rated IT Security in Toronto</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Toronto's Premier <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Cybersecurity</span> Solutions
                </h1>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
                  Protect your Greater Toronto Area business with advanced threat detection, 24/7 monitoring, and expert-led security operations from Toronto's most trusted leader in IT security excellence.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center font-medium">
                    Get Protected Today <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/contact" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/15 transition-colors flex items-center justify-center font-medium">
                    Schedule Free Consultation
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5 hidden md:block relative h-full min-h-[400px]">
                {/* Abstract line art */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {/* Animated grid lines */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    
                    {/* Floating 3D objects */}
                    <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-red-600/80 rounded-lg transform rotate-45 animate-float"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-blue-600/80 rounded-full animate-float-delay"></div>
                    <div className="absolute top-1/3 left-1/4 w-24 h-24 border-2 border-white/30 rounded-lg transform -rotate-15 animate-float-slow"></div>
                    
                    {/* Data visualization element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 border-4 border-red-600/40 rounded-full flex items-center justify-center animate-pulse-slow">
                        <div className="w-48 h-48 border-4 border-white/30 rounded-full flex items-center justify-center">
                          <div className="w-32 h-32 bg-gradient-to-br from-red-600/80 to-purple-600/80 rounded-full shadow-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Trust Bar */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-red-400" />
                <span className="text-white font-medium">Greater Toronto Area</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-red-400" />
                <span className="text-white font-medium">24/7 Local Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldIcon className="h-6 w-6 text-red-400" />
                <span className="text-white font-medium">100% SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-red-400" />
                <span className="text-white font-medium">Ontario-Based Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="toronto-it-services" aria-label="Toronto IT Security Services">
        <AnimateOnScroll variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade IT Security Solutions for Toronto Businesses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Protect your Toronto organization with our comprehensive suite of IT security services designed for modern Ontario enterprises and backed by our 100% security guarantee.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimateOnScroll variant="fadeInUp" delay={0.1}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow group h-full">
                  <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Toronto Managed Security Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    24/7 monitoring and response by our Toronto-based expert security team, ensuring your business stays protected around the clock with real-time threat detection.
                  </p>
                  <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fadeInUp" delay={0.2}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow group h-full">
                  <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                    <Key className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Identity & Access Management</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Secure your digital assets with advanced identity verification and access control solutions tailored for GTA businesses.
                  </p>
                  <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fadeInUp" delay={0.3}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow group h-full">
                  <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                    <Brain className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Threat Intelligence</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Stay ahead of cyber threats with AI-powered threat detection and proactive security measures for Ontario enterprises.
                  </p>
                  <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fadeInUp" delay={0.4}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow group h-full">
                  <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                    <Server className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Security</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Protect your cloud infrastructure with comprehensive security controls, monitoring, and compliance solutions for Toronto businesses.
                  </p>
                  <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fadeInUp" delay={0.5}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow group h-full">
                  <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                    <Code className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Application Security</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Secure your applications from development to deployment with code analysis, penetration testing, and runtime protection for Mississauga organizations.
                  </p>
                  <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fadeInUp" delay={0.6}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow group h-full">
                  <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                    <FileCode className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Governance</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Meet Canadian regulatory requirements with our compliance frameworks, audit support, and policy management services for Ontario enterprises.
                  </p>
                  <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
            
            <div className="mt-14 text-center">
              <Link to="/services" className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                View All Services <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
      
      {/* Client Logos Section */}
      <ClientLogos className="bg-gray-50 py-12 border-t border-gray-100" />

      {/* Testimonial Section */}
      <section className="py-20 bg-white" id="toronto-security-testimonials" aria-label="Toronto IT Security Reviews">
        <AnimateOnScroll variant="fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Toronto Businesses Say About Our IT Security</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. See what leading organizations in the Greater Toronto Area have to say about their experience with IT Rapid Support's cybersecurity expertise.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <TestimonialSlider testimonials={testimonials} />
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/case-studies" className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                View All Toronto Case Studies <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to secure your Toronto business?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Contact our Toronto security team today for a free consultation and security assessment. Find out how our enterprise-grade solutions can protect your business.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Get Your Free Toronto Security Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home; 