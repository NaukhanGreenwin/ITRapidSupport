import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Share2, Award, Briefcase, ChevronRight, ArrowRight, Lock, Server } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import ClientLogos from '../components/ClientLogos';

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  partnerType: string;
  benefits: string[];
  website: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, logo, description, partnerType, benefits, website }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
      <div className="p-6 sm:p-8 flex-grow">
        <div className="flex flex-col items-start sm:flex-row sm:items-center mb-6">
          <div className="bg-white rounded-xl p-4 mb-4 sm:mb-0 sm:mr-6 border border-gray-100 h-16 w-40 flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="max-h-10 max-w-full object-contain"
            />
          </div>
          <div>
            <span className="text-sm font-medium text-red-600 mb-1 block">{partnerType}</span>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <ShieldCheck className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-50 p-4 sm:p-6 border-t border-gray-100">
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
        >
          Visit Partner Website
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const Partners: React.FC = () => {
  // Featured partner data
  const featuredPartners: PartnerCardProps[] = [
    {
      name: "Microsoft",
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
      description: "As a Microsoft Gold Partner, IT Rapid Support has demonstrated expertise in delivering high-quality solutions across the Microsoft platform, enabling us to provide comprehensive security and IT management solutions.",
      partnerType: "Gold Security Partner",
      benefits: [
        "Advanced implementation of Microsoft Security solutions",
        "Early access to Microsoft product roadmaps and features",
        "Direct escalation channels for critical issues",
        "Microsoft-certified consultants for seamless deployments"
      ],
      website: "https://www.microsoft.com/security"
    },
    {
      name: "Cisco",
      logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
      description: "Our advanced partnership with Cisco enables us to architect and implement enterprise-grade networking and security solutions that form the backbone of a resilient IT infrastructure.",
      partnerType: "Premier Security Partner",
      benefits: [
        "Enterprise-grade network security architecture",
        "Advanced Cisco SecureX platform integration",
        "Certified Cisco Security specialists",
        "Tailored network and endpoint protection solutions"
      ],
      website: "https://www.cisco.com/security"
    },
  ];
  
  // All partners data
  const allPartners: PartnerCardProps[] = [
    {
      name: "IBM",
      logo: "https://cdn.worldvectorlogo.com/logos/ibm.svg",
      description: "Our partnership with IBM enables us to deliver advanced AI-driven security solutions and enterprise-grade infrastructure management for our clients.",
      partnerType: "Security Partner",
      benefits: [
        "IBM Security Suite integration expertise",
        "Watson AI-powered threat detection",
        "Advanced infrastructure management",
        "Comprehensive cloud security solutions"
      ],
      website: "https://www.ibm.com/security"
    },
    {
      name: "Oracle",
      logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
      description: "As an Oracle partner, we offer specialized expertise in securing database environments and ensuring robust data protection for mission-critical information.",
      partnerType: "Database Security Partner",
      benefits: [
        "Oracle Database security hardening",
        "Data encryption and compliance solutions",
        "Performance-optimized security controls",
        "Oracle Cloud Infrastructure security"
      ],
      website: "https://www.oracle.com/security"
    },
    {
      name: "Dell Technologies",
      logo: "https://cdn.worldvectorlogo.com/logos/dell-technologies-logo.svg",
      description: "Our Dell partnership enables us to provide cutting-edge hardware solutions with integrated security features that form the foundation of a robust IT infrastructure.",
      partnerType: "Infrastructure Partner",
      benefits: [
        "Secure-by-design hardware deployments",
        "Dell Data Protection solutions",
        "Infrastructure optimization services",
        "End-to-end device lifecycle security"
      ],
      website: "https://www.dell.com/security"
    },
    {
      name: "HP",
      logo: "https://cdn.worldvectorlogo.com/logos/hp-2.svg",
      description: "Working closely with HP, we deliver secure endpoint solutions with advanced protection features to safeguard your business at every device touchpoint.",
      partnerType: "Endpoint Security Partner",
      benefits: [
        "HP Sure Click and Sure Sense implementation",
        "Secure endpoint deployment and management",
        "Hardware-enforced security solutions",
        "Zero-trust architecture implementation"
      ],
      website: "https://www.hp.com/security"
    },
    {
      name: "SAP",
      logo: "https://cdn.worldvectorlogo.com/logos/sap-3.svg",
      description: "Our SAP partnership ensures we can secure business-critical applications and implement robust identity and access management across your enterprise systems.",
      partnerType: "Business Applications Partner",
      benefits: [
        "SAP application security hardening",
        "Identity and access governance",
        "Secure business process implementation",
        "Compliance automation for SAP environments"
      ],
      website: "https://www.sap.com/security"
    },
    {
      name: "Salesforce",
      logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
      description: "As a Salesforce partner, we specialize in securing CRM environments and implementing robust data protection for sensitive customer information.",
      partnerType: "Customer Data Security Partner",
      benefits: [
        "Salesforce Shield implementation",
        "Customer data protection solutions",
        "CRM security assessments and hardening",
        "Secure API integration architecture"
      ],
      website: "https://www.salesforce.com/security"
    }
  ];

  return (
    <PageTransition>
      <SEO 
        title="Strategic Technology Partners | IT Rapid Support" 
        description="Our strategic partnerships with leading technology providers enable us to deliver comprehensive security and IT management solutions for businesses of all sizes." 
        keywords="IT security partners, technology partnerships, cybersecurity solutions, Microsoft partner, Cisco partner, IBM security partner"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Partners', url: '/partners' }]}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-3/5">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-300 mb-6">
                <Share2 className="mr-2 h-4 w-4" />
                Strategic Alliances
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Technology Partnerships <br />
                <span className="text-red-500">That Deliver Results</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                IT Rapid Support maintains strategic partnerships with leading technology providers to deliver comprehensive security and IT management solutions for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors">
                  Partner With Us
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-base font-medium rounded-lg text-white bg-white/5 hover:bg-white/10 transition-colors">
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl"></div>
                <img 
                  src="/images/partners-illustration.svg"
                  alt="Strategic partnerships"
                  className="relative z-10 max-w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/500x400?text=Strategic+Partnerships";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partners Logos Scroll */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Trusted Technology Partners</h2>
            <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
              We work with industry-leading technology providers to deliver cutting-edge security solutions
            </p>
          </div>
          <ClientLogos showHeader={false} />
        </div>
      </div>
      
      {/* Featured Partners */}
      <AnimateOnScroll variant="fadeInUp">
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600/10 text-red-700 mb-3">
                <Award className="mr-2 h-4 w-4" />
                Premier Partnerships
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Strategic Partnerships</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our highest-tier partnerships that enable us to deliver industry-leading security solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPartners.map((partner, index) => (
                <PartnerCard key={index} {...partner} />
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      
      {/* All Partners */}
      <AnimateOnScroll variant="fadeInUp">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-600/10 text-slate-700 mb-3">
                <Briefcase className="mr-2 h-4 w-4" />
                Technology Ecosystem
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Complete Partner Network</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Together with our partners, we build robust security solutions that protect your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPartners.map((partner, index) => (
                <PartnerCard key={index} {...partner} />
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      
      {/* Partnership Benefits */}
      <AnimateOnScroll variant="fadeInUp">
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Value of Our Partnerships</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                How our strategic technology alliances benefit your business
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-red-600/10 rounded-full p-3 w-fit mb-4">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Security Expertise</h3>
                <p className="text-gray-600">
                  Our partnerships provide us with specialized training and certifications in advanced security technologies, allowing us to deliver cutting-edge protection.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-red-600/10 rounded-full p-3 w-fit mb-4">
                  <Server className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise-Grade Solutions</h3>
                <p className="text-gray-600">
                  Through our partnerships, we gain access to enterprise-level technologies that we can deploy for businesses of all sizes, providing top-tier protection.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-red-600/10 rounded-full p-3 w-fit mb-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognition</h3>
                <p className="text-gray-600">
                  Our partner certifications and recognition demonstrate our commitment to excellence and validate our expertise in security and IT management.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-red-600/10 rounded-full p-3 w-fit mb-4">
                  <ChevronRight className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Vendor Support</h3>
                <p className="text-gray-600">
                  Our partnerships provide us with direct access to vendor support channels, enabling faster resolution of issues and access to specialized knowledge.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-red-600/10 rounded-full p-3 w-fit mb-4">
                  <Share2 className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated Solutions</h3>
                <p className="text-gray-600">
                  We can seamlessly integrate multiple partner technologies to create comprehensive security solutions tailored to your specific business needs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-red-600/10 rounded-full p-3 w-fit mb-4">
                  <ShieldCheck className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Early Access to Updates</h3>
                <p className="text-gray-600">
                  Our partnerships often provide early access to security updates and new features, allowing us to keep your protection ahead of emerging threats.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      
      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to experience the benefits of our technology partnerships?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our strategic partnerships can help secure your business with enterprise-grade solutions.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-red-900 bg-white hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Partners; 