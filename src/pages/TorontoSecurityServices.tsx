import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Key, Brain, ChevronRight, Globe, Clock, Shield as ShieldIcon, Server, Building, FileCode } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ClientLogos from '../components/ClientLogos';
import TestimonialSlider from '../components/TestimonialSlider';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import SchemaGenerator from '../utils/SchemaGenerator';
import { Landmark, Stethoscope, CheckCircle } from 'lucide-react';

/**
 * Toronto Security Services Page
 * 
 * A location-specific landing page targeting Toronto IT security services that's optimized for local SEO
 */
const TorontoSecurityServices: React.FC = () => {
  // Toronto-specific testimonials
  const testimonials = [
    {
      id: '1',
      name: 'Michael Chen',
      role: 'CIO',
      company: 'Toronto Financial Services',
      quote: 'As a Toronto-based financial institution, security is paramount for our business. IT Rapid Support understood our local regulatory requirements and implemented a comprehensive security solution that gives us complete peace of mind.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'CISO',
      company: 'Toronto Healthcare Solutions',
      quote: 'Finding a security partner who understands Toronto\'s healthcare compliance landscape was crucial. IT Rapid Support delivered a tailored solution that protects our patient data while ensuring we meet all regulatory standards.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: '3',
      name: 'David Williams',
      role: 'IT Director',
      company: 'Downtown Toronto Retail',
      quote: 'After a security incident with our previous provider, we switched to IT Rapid Support. Their Toronto-based team quickly identified vulnerabilities and implemented enhanced security that has protected our business for over three years.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/46.jpg'
    }
  ];

  // Toronto-specific FAQs for schema
  const torontoFaqs = [
    {
      question: "What IT security services do you offer specifically for Toronto businesses?",
      answer: "We offer comprehensive Toronto-focused IT security services including managed SOC services, network security monitoring, cloud security solutions, identity management, threat intelligence, and 24/7 incident response with local Toronto-based expertise.",
      category: "Toronto Services"
    },
    {
      question: "How does your Toronto cybersecurity team respond to security incidents?",
      answer: "Our Toronto cybersecurity team provides 24/7 monitoring and rapid incident response with an average response time of under 15 minutes. We maintain a local presence with security experts who understand Toronto's business environment and regulatory requirements.",
      category: "Incident Response"
    },
    {
      question: "What makes your Toronto IT security services different from other providers?",
      answer: "Our Toronto IT security services stand out through our comprehensive security-first approach, 24/7 local availability, Toronto-based security operations center, certified security engineers, and personalized service plans designed for specific Toronto industries.",
      category: "Competitive Advantage"
    },
    {
      question: "Do you provide cybersecurity compliance services for Toronto financial institutions?",
      answer: "Yes, we provide specialized compliance services for Toronto financial institutions including OSFI guideline implementation, PCI DSS compliance, SOC 2 certification support, and comprehensive security frameworks tailored to the Canadian financial services sector.",
      category: "Compliance"
    },
    {
      question: "Can you help Toronto healthcare organizations secure patient data?",
      answer: "Absolutely. We help Toronto healthcare organizations secure patient data with PHIPA-compliant security solutions, healthcare-specific threat monitoring, secure telehealth implementations, medical device security, and comprehensive data protection strategies.",
      category: "Healthcare Security"
    }
  ];

  // Schema for Toronto page using the new schema generator
  const torontoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      SchemaGenerator.generateWebPageSchema({
        title: "Toronto IT Security Services | Local Cybersecurity Experts",
        description: "Toronto's premier cybersecurity provider offering enterprise-grade IT security services, managed SOC, and compliance solutions for Toronto businesses.",
        url: "/toronto-security-services",
        pageType: "WebPage"
      }),
      SchemaGenerator.generateLocalBusinessWithServicesSchema("toronto"),
      SchemaGenerator.generateProfessionalServiceSchema({
        name: "Toronto IT Security Services",
        description: "Enterprise-grade cybersecurity and managed security services for Toronto businesses with 24/7 local support and expertise.",
        provider: "IT Rapid Support",
        serviceArea: "Toronto and Greater Toronto Area",
        url: "/toronto-security-services",
        keywords: [
          "Toronto IT security", 
          "cybersecurity Toronto", 
          "managed security services Toronto", 
          "Toronto SOC services", 
          "Toronto network security"
        ]
      }),
      SchemaGenerator.generateEnhancedFAQSchema(torontoFaqs),
      SchemaGenerator.generateAggregateRatingSchema({
        itemName: "Toronto IT Security Services",
        ratingValue: "4.9",
        reviewCount: "78"
      })
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title="Toronto IT Security Services | Local Cybersecurity Experts" 
        description="Toronto's premier cybersecurity provider offering enterprise-grade IT security services, managed SOC, compliance solutions, and 24/7 local support for Toronto businesses."
        keywords="Toronto IT security services, cybersecurity Toronto, managed security Toronto, Toronto SOC services, IT security company Toronto, Toronto network security, local cybersecurity Toronto, Toronto data protection"
        schema={torontoSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Toronto Security Services', url: '/toronto-security-services' }
        ]}
        primaryKeyword="Toronto IT Security Services"
        secondaryKeywords={[
          "Local Toronto Cybersecurity",
          "Toronto Managed SOC",
          "Downtown Toronto IT Security",
          "Toronto Network Protection",
          "Financial Security Toronto",
          "Toronto Healthcare Cybersecurity",
          "Toronto Business Data Protection"
        ]}
        pageType="service"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900" aria-label="Toronto IT Security Hero">
        {/* Toronto skyline silhouette in the background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,154.7C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#E11D48" fillOpacity="0.2"/>
            <path d="M1300,200V320H1440V200H1420V300H1400V220H1380V280H1360V240H1340V300H1320V260H1300Z" fill="#475569"/>
            <path d="M0,260V320H200V260H180V300H160V280H140V300H120V270H100V310H80V290H60V310H40V280H20V300H0V260Z" fill="#475569"/>
            <path d="M720,220L720,320L740,320L740,240L760,240L760,320L780,320L780,240L800,240L800,280L820,280L820,320L840,320L840,200L720,200L720,220Z" fill="#475569"/>
            <path d="M600,160V320H620V200H640V240H660V320H680V180H600V160Z" fill="#475569"/>
            <path d="M900,180V320H920V220H940V320H960V260H980V320H1000V200H900V180Z" fill="#475569"/>
            <path d="M1100,220V320H1140V240H1160V320H1200V220H1180V300H1160V220H1140V300H1120V220H1100Z" fill="#475569"/>
            <path d="M500,240V320H520V260H540V320H560V240H500Z" fill="#475569"/>
            <path d="M400,220V320H420V260H440V320H460V220H400Z" fill="#475569"/>
          </svg>
        </div>

        <AnimateOnScroll variant="fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/20 rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-red-100 text-sm font-medium">Toronto's #1 IT Security Provider</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Toronto <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">IT Security</span> Services
                </h1>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
                  Protect your Toronto business with enterprise-grade cybersecurity solutions, 24/7 local monitoring, and expert-led security operations from Toronto's most trusted IT security provider.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center font-medium">
                    Get Toronto Protection <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/contact" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/15 transition-colors flex items-center justify-center font-medium">
                    Schedule Toronto Consultation
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5 hidden md:block relative h-full min-h-[400px]">
                {/* Toronto-themed security graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {/* Animated grid lines */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    
                    {/* CN Tower silhouette */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-64 bg-gradient-to-b from-red-600/80 to-transparent"></div>
                    <div className="absolute left-1/2 top-40 transform -translate-x-1/2 w-16 h-16 bg-red-600/30 rounded-full"></div>
                    
                    {/* Security shield overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 border-4 border-red-600/40 rounded-full flex items-center justify-center animate-pulse-slow">
                        <div className="w-48 h-48 border-4 border-white/30 rounded-full flex items-center justify-center">
                          <div className="w-32 h-32 bg-gradient-to-br from-red-600/80 to-purple-600/80 rounded-full shadow-lg flex items-center justify-center">
                            <Shield className="h-16 w-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Toronto Trust Bar */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="flex items-center space-x-3">
                <Building className="h-6 w-6 text-red-400" />
                <span className="text-white font-medium">Toronto-Based Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-red-400" />
                <span className="text-white font-medium">15-Minute Response</span>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldIcon className="h-6 w-6 text-red-400" />
                <span className="text-white font-medium">Toronto SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-red-400" />
                <span className="text-white font-medium">Toronto Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Toronto Services Section */}
      <section className="py-20 bg-gray-50" id="toronto-it-services" aria-label="Toronto IT Security Services">
        <AnimateOnScroll variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">IT Security Services for Toronto Businesses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Protect your Toronto organization with our comprehensive suite of local IT security services designed for Toronto's unique business landscape and compliance requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimateOnScroll variant="fadeInUp" delay={0.1}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow group h-full">
                  <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Toronto Managed SOC Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    24/7 monitoring and response by our Toronto-based security operations center, ensuring your business has industry-leading protection around the clock.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Toronto Identity & Access Solutions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Secure your Toronto business's digital assets with advanced identity verification and access control solutions tailored for the Toronto corporate environment.
                  </p>
                  <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fadeInUp" delay={0.3}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow group h-full">
                  <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                    <Server className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Toronto Cloud Security</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive protection for your Toronto business's cloud infrastructure with data residency compliance for Canadian regulatory requirements.
                  </p>
                  <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
      
      {/* Toronto Industries We Serve */}
      <section className="py-20 bg-white" id="toronto-industries" aria-label="Toronto Industries We Serve">
        <AnimateOnScroll variant="fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Toronto Industries We Protect</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our specialized security solutions are tailored to the unique needs of Toronto's diverse business sectors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                  <Landmark className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Toronto Financial Services</h3>
                <p className="text-gray-600">
                  Specialized security for Toronto's financial district, including banks, investment firms, and fintech companies with OSFI compliance support.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                  <Stethoscope className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Toronto Healthcare</h3>
                <p className="text-gray-600">
                  Secure solutions for Toronto hospitals, clinics, and healthcare providers with PHIPA-compliant data protection and medical device security.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                  <Building className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Toronto Professional Services</h3>
                <p className="text-gray-600">
                  Tailored security for Toronto law firms, accounting practices, and consulting agencies with client confidentiality protection.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-50" id="toronto-testimonials" aria-label="Toronto Security Testimonials">
        <AnimateOnScroll variant="fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Toronto Businesses Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from leading Toronto organizations about their experience with our local IT security services.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Toronto Map Section */}
      <section className="py-20 bg-white" id="toronto-coverage" aria-label="Toronto Coverage Area">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Local Toronto IT Security Coverage</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Toronto-based security team provides comprehensive coverage across the entire Toronto metropolitan area, including:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Downtown Toronto</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">North York</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Scarborough</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Etobicoke</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">East York</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">York</span>
                </div>
              </div>
              
              <p className="text-gray-600">
                With our Toronto headquarters and local security operations center, we provide rapid response times and personalized service to businesses throughout the Toronto area.
              </p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-96 md:h-full">
              {/* We would add a Toronto map here in production */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Toronto Coverage Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toronto Contact Section */}
      <section className="py-20 bg-slate-900" id="toronto-contact" aria-label="Toronto Security Contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Our Toronto Security Team</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Ready to protect your Toronto business with enterprise-grade security? Our local Toronto team is here to help. Contact us today for a free security assessment and consultation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Toronto Office</span>
                    <span className="text-slate-300">123 Bay Street, Toronto, ON M5J 2T3</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Phone</span>
                    <span className="text-slate-300">+1 (800) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Hours</span>
                    <span className="text-slate-300">24/7 Emergency Response</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Schedule a Toronto Consultation <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Toronto Security Assessment</h3>
              <ContactForm 
                sourcePage="Toronto Security Services" 
                ctaLocation="Toronto page contact form"
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TorontoSecurityServices; 