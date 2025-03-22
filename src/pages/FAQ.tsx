import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, { generateFAQSchema } from '../components/SEO';
import { trackEvent } from '../components/AnalyticsTracker';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  location?: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<Record<number, boolean>>({0: true});
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  
  const faqItems: FAQItem[] = [
    {
      question: "What IT security services do you offer in Toronto?",
      answer: "We offer comprehensive IT security services in Toronto including managed security operations, network security monitoring, cloud security implementation, identity and access management, threat detection and response, vulnerability assessments, penetration testing, security awareness training, and 24/7 incident response. Our services are tailored to meet the specific needs of Toronto businesses across various industries.",
      category: "Services",
      location: "Toronto"
    },
    {
      question: "How can your managed IT support help my Mississauga business?",
      answer: "Our managed IT support services help Mississauga businesses by providing proactive monitoring and maintenance, 24/7 helpdesk support, strategic IT planning, hardware and software management, network administration, cloud services management, data backup and recovery, and comprehensive cybersecurity protection. We serve as your complete IT department, allowing you to focus on your core business while we handle all your technology needs.",
      category: "Services",
      location: "Mississauga"
    },
    {
      question: "Do you provide on-site support for businesses in Vaughan?",
      answer: "Yes, we provide dedicated on-site support for businesses in Vaughan. Our team of certified IT professionals can be scheduled for regular on-site visits or respond quickly to emergency situations. We understand that some IT issues are best resolved in person, and our Vaughan-based technicians are always ready to provide hands-on assistance when needed.",
      category: "Services",
      location: "Vaughan"
    },
    {
      question: "What industries do you serve in the Greater Toronto Area?",
      answer: "We serve a wide range of industries in the Greater Toronto Area including healthcare, finance, legal, manufacturing, professional services, retail, education, non-profit organizations, and government agencies. Our expertise spans across various sectors, and we customize our IT solutions to meet industry-specific compliance requirements and operational needs.",
      category: "Services",
      location: "GTA"
    },
    {
      question: "How quickly can you respond to IT emergencies in Brampton?",
      answer: "For our Brampton clients, we offer rapid emergency response with guaranteed response times based on your service level agreement. Our standard response for critical issues is under 1 hour, and we maintain a dedicated team that can provide remote support immediately and on-site support within 2-4 hours when needed. We understand that downtime costs money, so our priority is getting your systems operational as quickly as possible.",
      category: "Support",
      location: "Brampton"
    },
    {
      question: "What makes your IT support different from other providers in Woodbridge?",
      answer: "Our IT support stands out in Woodbridge through our comprehensive security-first approach, 24/7 local availability, rapid response times, experienced certified engineers, and personalized service plans. We also offer fixed monthly pricing with no hidden fees, proactive rather than reactive monitoring, strategic IT planning, and a deep understanding of the local Woodbridge business environment.",
      category: "Support",
      location: "Woodbridge"
    },
    {
      question: "Do you offer cloud services for Concord businesses?",
      answer: "Yes, we offer comprehensive cloud services for Concord businesses including cloud migration, Microsoft 365 implementation and management, Azure and AWS cloud infrastructure setup, cloud security, cloud backup solutions, hybrid cloud configurations, and ongoing cloud optimization. Our cloud services help Concord businesses improve flexibility, reduce capital expenditure, and enhance collaboration capabilities.",
      category: "Services",
      location: "Concord"
    },
    {
      question: "How do you handle data backup and disaster recovery for Ontario businesses?",
      answer: "For Ontario businesses, we implement comprehensive data backup and disaster recovery solutions that include automated local and cloud backups, regular testing of backup integrity, customized retention policies, point-in-time recovery options, business continuity planning, and rapid restoration capabilities. We ensure your critical data is protected against ransomware, hardware failures, natural disasters, and human error.",
      category: "Security",
      location: "Ontario"
    },
    {
      question: "What cybersecurity measures do you recommend for small businesses in Toronto?",
      answer: "For small businesses in Toronto, we recommend a multi-layered cybersecurity approach that includes enterprise-grade firewalls, endpoint protection, email security with anti-phishing capabilities, regular security awareness training, multi-factor authentication, data encryption, managed detection and response, regular vulnerability scanning, and automated security updates. Our affordable security packages make enterprise-level protection accessible to Toronto small businesses.",
      category: "Security",
      location: "Toronto"
    },
    {
      question: "Can you help with IT compliance requirements for healthcare organizations in the GTA?",
      answer: "Yes, we specialize in helping healthcare organizations in the GTA meet their IT compliance requirements including PHIPA compliance, security risk assessments, implementation of required safeguards, documentation of security policies and procedures, staff training, vendor management, incident response planning, and regular compliance audits. We understand the unique regulatory challenges facing healthcare providers and ensure your IT infrastructure supports compliance objectives.",
      category: "Compliance",
      location: "GTA"
    },
    {
      question: "Do you offer IT consulting for businesses expanding to multiple locations across Ontario?",
      answer: "Yes, we provide specialized IT consulting for businesses expanding to multiple locations across Ontario. Our services include multi-site network design, standardized IT infrastructure planning, centralized management solutions, secure inter-office connectivity, consistent security policies, scalable cloud solutions, unified communications systems, and strategic technology roadmapping to support your growth throughout the province.",
      category: "Services",
      location: "Ontario"
    },
    {
      question: "What is your approach to IT project management for Mississauga companies?",
      answer: "Our approach to IT project management for Mississauga companies follows industry best practices with clear project scoping, detailed planning, transparent communication, milestone tracking, risk management, quality assurance, and post-implementation support. We assign dedicated project managers who understand the local Mississauga business environment to ensure your IT initiatives are delivered on time, within budget, and meet your business objectives.",
      category: "Services",
      location: "Mississauga"
    }
  ];
  
  const categories = ['all', ...Array.from(new Set(faqItems.map(item => item.category)))];
  const locations = ['all', ...Array.from(new Set(faqItems.map(item => item.location).filter(Boolean) as string[]))];
  
  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    
    // Track FAQ expansion for analytics
    if (!openItems[index]) {
      trackEvent('faq_expanded', {
        question: filteredItems[index].question,
        category: filteredItems[index].category,
        location: filteredItems[index].location
      });
    }
  };
  
  // Generate FAQ schema for rich snippets
  const faqSchema = generateFAQSchema(faqItems);
  
  return (
    <PageTransition>
      <SEO 
        title="IT Support FAQs for Toronto & GTA Businesses" 
        description="Find answers to common questions about our IT support, cybersecurity, and managed services for businesses in Toronto, Vaughan, Mississauga, Brampton, Woodbridge, and Concord."
        keywords="IT support FAQ Toronto, cybersecurity questions GTA, managed services FAQ, Toronto IT help, Mississauga IT support questions, Vaughan IT services FAQ"
        schema={faqSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' }
        ]}
      />
      
      <div className="bg-white dark:bg-slate-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our IT support and security services across the Greater Toronto Area
            </p>
          </div>
          
          <div className="mt-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Location Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              <span className="self-center text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Filter by location:</span>
              {locations.map(location => (
                <button
                  key={location}
                  onClick={() => setActiveCategory(location)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activeCategory === location
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
            
            {/* FAQ Items */}
            <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
              {filteredItems.map((item, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center space-x-2 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex-1">
                      <span className="font-medium text-gray-900 dark:text-white">{item.question}</span>
                      {item.location && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {item.location}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">
                      {openItems[index] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </span>
                  </button>
                  
                  {openItems[index] && (
                    <div className="px-6 py-4 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-100 dark:border-slate-700">
                      <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our team is ready to help you with any specific questions about our IT services in the Greater Toronto Area
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FAQ; 