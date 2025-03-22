import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ChevronRight, 
  ArrowRight, 
  Shield, 
  Star, 
  BarChart, 
  Building, 
  Stethoscope, 
  Landmark, 
  Globe, 
  Database,
  Award
} from 'lucide-react';

interface CaseStudyProps {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  icon: React.ReactNode;
  id: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ 
  title, client, industry, challenge, solution, results, testimonial, icon, id 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-red-600/10 p-3 rounded-lg">
            {icon}
          </div>
          <div>
            <div className="text-sm text-red-600 font-medium mb-1">{industry}</div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <div className="text-sm text-gray-500 mt-1">Client: {client}</div>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-gray-900 font-medium mb-2">Challenge</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-gray-900 font-medium mb-2">Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-gray-900 font-medium mb-2">Results</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <BarChart className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {testimonial && (
          <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-red-600 mb-6">
            <p className="text-gray-600 italic mb-3">"{testimonial.quote}"</p>
            <div className="text-sm font-medium">
              <span className="text-gray-900">{testimonial.author}</span>
              <span className="text-gray-500 ml-1">— {testimonial.position}</span>
            </div>
          </div>
        )}
        
        <Link to={`/case-studies/${id}`} className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
          Read full case study <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

function CaseStudies() {
  const caseStudies: CaseStudyProps[] = [
    {
      id: "financial-security",
      title: "Financial Institution Strengthens Security Posture",
      client: "Major North American Bank",
      industry: "Financial Services",
      challenge: "After experiencing several security incidents, this major financial institution needed to transform its security operations center (SOC) to detect and respond to threats more effectively and meet strict regulatory requirements.",
      solution: "We implemented a comprehensive security solution including 24/7 threat monitoring, advanced threat detection using AI-powered analytics, and automated incident response workflows. We also helped the client establish a robust governance framework for security operations.",
      results: [
        "85% reduction in mean time to detect threats",
        "60% faster incident response times", 
        "Successful compliance with all relevant financial regulations including PCI-DSS and SOX"
      ],
      testimonial: {
        quote: "IT Rapid Support transformed our security operations from reactive to proactive. Their platform provided visibility we never had before, and their team has become an extension of our security department.",
        author: "Chief Information Security Officer"
      },
      icon: <Landmark className="h-6 w-6 text-red-600" />
    },
    {
      id: "healthcare-security",
      title: "Healthcare Provider Secures Patient Data",
      client: "Regional Hospital Network",
      industry: "Healthcare",
      challenge: "With the rise in healthcare breaches, this hospital network needed to strengthen their data protection measures while ensuring HIPAA compliance. They faced challenges securing both traditional IT systems and medical devices.",
      solution: "We deployed a comprehensive healthcare security solution including network segmentation for medical devices, enhanced access controls, continuous monitoring, and compliance automation specifically designed for healthcare environments.",
      results: [
        "100% compliance with HIPAA security requirements",
        "Successfully protected patient records during two attempted ransomware attacks",
        "Reduced unauthorized access attempts by 85%",
        "Implemented secure telehealth capabilities to support remote patient care"
      ],
      testimonial: {
        quote: "In healthcare, security isn't just about protecting data—it's about patient safety. IT Rapid Support understood this and delivered a solution that protects our patients, staff, and operations.",
        author: "Dr. Michael Chen",
        position: "CIO, Regional Hospital Network"
      },
      icon: <Stethoscope className="h-6 w-6 text-red-600" />
    },
    {
      id: "retail-security",
      title: "Retail Chain Secures E-commerce Platform",
      client: "International Retail Brand",
      industry: "Retail",
      challenge: "This global retailer experienced a significant breach in their e-commerce platform, resulting in compromised customer payment data. They needed to quickly rebuild customer trust and implement robust security across both online and in-store operations.",
      solution: "We implemented a comprehensive retail security program including PCI DSS compliance automation, real-time fraud detection, secure payment processing, and employee security awareness training.",
      results: [
        "Zero payment data breaches in the 3 years since implementation",
        "PCI DSS compliance achieved and maintained consistently",
        "Customer confidence restored, leading to 22% increase in online sales",
        "98% reduction in fraudulent transactions, saving millions annually"
      ],
      testimonial: {
        quote: "After our breach, we didn't just need a security vendor—we needed a partner who could help us rebuild trust. IT Rapid Support delivered on both the technical and business fronts, turning security into a competitive advantage.",
        author: "Robert Miller",
        position: "VP of Digital, International Retail Brand"
      },
      icon: <Globe className="h-6 w-6 text-red-600" />
    },
    {
      id: "tech-zero-trust",
      title: "Technology Company Implements Zero Trust",
      client: "Enterprise Software Provider",
      industry: "Technology",
      challenge: "With a distributed workforce, cloud-first infrastructure, and valuable intellectual property, this software company needed to modernize their security approach from traditional perimeter-based security to a Zero Trust architecture.",
      solution: "We designed and implemented a comprehensive Zero Trust framework including identity-based access control, micro-segmentation, continuous validation, and end-to-end encryption across all environments.",
      results: [
        "80% reduction in the potential attack surface",
        "Successfully transitioned to a fully remote workforce with enhanced security",
        "Security incidents reduced by 65% despite increased attack attempts",
        "Developer productivity improved by 30% through streamlined secure access"
      ],
      testimonial: {
        quote: "IT Rapid Support helped us transform our security from a barrier to an enabler. Our developers can work from anywhere with the right level of access, while our IP remains protected. It's security that scales with our business.",
        author: "Jennifer Williams",
        position: "CTO, Enterprise Software Provider"
      },
      icon: <Database className="h-6 w-6 text-red-600" />
    },
    {
      id: "government-security",
      title: "Government Agency Modernizes Security Operations",
      client: "Federal Government Department",
      industry: "Government",
      challenge: "This government agency faced evolving nation-state threats while dealing with legacy systems, complex compliance requirements, and limited cybersecurity resources. They needed to modernize their security operations while working within budget constraints.",
      solution: "We established a modern Security Operations Center with custom threat intelligence, automated compliance workflows for government standards (FISMA, FedRAMP), and a phased approach to legacy system security enhancement.",
      results: [
        "Successfully defended against multiple nation-state attacks",
        "Reduced mean time to detect threats from months to hours",
        "Achieved FISMA compliance ahead of deadline",
        "Optimized security operations saving $2.5M in annual costs"
      ],
      testimonial: {
        quote: "After the breach, we faced an existential threat. IT Rapid Support didn't just help us recover—they transformed us into a security leader in our industry. Three years later, our security program is now referenced as a gold standard.",
        author: "James Anderson",
        position: "Chief Information Security Officer"
      },
      icon: <Building className="h-6 w-6 text-red-600" />
    },
    {
      id: "manufacturing-security",
      title: "Manufacturer Secures Industrial Systems",
      client: "Global Manufacturing Company",
      industry: "Manufacturing",
      challenge: "This manufacturer needed to secure their industrial control systems and operational technology (OT) environments against the rising tide of attacks targeting critical infrastructure, while ensuring production continuity.",
      solution: "We implemented a specialized OT security solution with passive monitoring, secure OT/IT connectivity, industrial protocol security, and incident response procedures designed specifically for manufacturing environments.",
      results: [
        "No security-related production downtime for over 2 years",
        "Successfully prevented a targeted attack on industrial control systems",
        "Reduced cyber insurance premiums by 40% through improved security posture",
        "Seamlessly integrated security into the production environment without disruption"
      ],
      testimonial: {
        quote: "Securing manufacturing environments requires specialists who understand both cybersecurity and industrial operations. IT Rapid Support provided expertise across both domains, giving us security without sacrificing production efficiency.",
        author: "Thomas Anderson",
        position: "VP of Operations, Global Manufacturing Company"
      },
      icon: <Shield className="h-6 w-6 text-red-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-red-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <span className="text-red-200 text-sm font-medium">Client Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Real World Security Transformations
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Discover how organizations across industries have strengthened their security posture, achieved compliance, and protected their most critical assets with IT Rapid Support.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#case-studies" 
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center font-medium"
              >
                View Case Studies
              </a>
              <a 
                href="/contact" 
                className="border border-white/20 bg-white/5 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center font-medium"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Results Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-700">Clients Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">75%</div>
              <div className="text-gray-700">Average Reduction in Security Incidents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-700">Compliance Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">$3.2M</div>
              <div className="text-gray-700">Average Client Cost Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Case Study */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full mb-6">
              <span className="text-sm font-medium">Featured Success Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How a global retail chain recovered from a major breach</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              After suffering a devastating ransomware attack, this Fortune 500 retailer protected their most critical assets with IT Rapid Support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">Implemented Zero Trust architecture across global operations</div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">Established 24/7 global Security Operations Centers</div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">Created comprehensive security governance framework</div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">Deployed advanced threat detection across all environments</div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-5 rounded-lg border-l-4 border-red-600 mb-8">
                <p className="text-slate-300 italic mb-3">"After the breach, we faced an existential threat. IT Rapid Support didn't just help us recover—they transformed us into a security leader in our industry. Three years later, our security program is now referenced as a gold standard."</p>
                <div className="text-sm">
                  <span className="text-white font-medium">James Anderson</span>
                  <span className="text-slate-400 ml-1">— Chief Information Security Officer</span>
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Read Full Case Study <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-2xl backdrop-blur-sm transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d475d7c8301?auto=format&fit=crop&w=800&q=80" 
                alt="Security Operations Center" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div id="case-studies" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories by Industry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore how organizations across different sectors have transformed their security posture with IT Rapid Support solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudy key={index} {...caseStudy} />
            ))}
          </div>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our approach to client success has earned recognition from leading industry analysts and organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <div className="font-bold text-gray-900 mb-1">Leader</div>
              <div className="text-gray-600 text-sm">Gartner Magic Quadrant for Managed Security Services</div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Star className="h-10 w-10 text-red-600" />
              </div>
              <div className="font-bold text-gray-900 mb-1">Top Rated</div>
              <div className="text-gray-600 text-sm">Forrester Wave for Managed Detection and Response</div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <div className="font-bold text-gray-900 mb-1">Excellence Award</div>
              <div className="text-gray-600 text-sm">SC Media Security Innovation</div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <FileText className="h-10 w-10 text-red-600" />
              </div>
              <div className="font-bold text-gray-900 mb-1">Certified</div>
              <div className="text-gray-600 text-sm">ISO 27001 & SOC 2 Type II</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to become our next success story?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Contact our team today to discuss your security challenges and how we can help transform your organization's security posture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/contact" 
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Request a Consultation
            </a>
            <a 
              href="/services" 
              className="bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition-colors font-medium"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies; 