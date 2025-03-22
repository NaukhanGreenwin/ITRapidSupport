import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Building, 
  Landmark, 
  Stethoscope, 
  Globe, 
  ShoppingCart, 
  Cpu, 
  ChevronRight, 
  CheckCircle, 
  Server, 
  Lock, 
  LineChart, 
  Network,
  Briefcase
} from 'lucide-react';
import SEO, { generateServiceSchema, generateFAQSchema } from '../components/SEO';
import PageTransition from '../components/PageTransition';

function Solutions() {
  // FAQ data for Solutions page
  const solutionsFaqs = [
    {
      question: "What industry-specific cybersecurity solutions do you offer in Toronto?",
      answer: "We offer tailored cybersecurity solutions for multiple industries in Toronto including financial services, healthcare, retail, manufacturing, government, and technology sectors - each designed to address industry-specific threats and compliance requirements."
    },
    {
      question: "How do your financial security solutions protect banking institutions in the GTA?",
      answer: "Our financial security solutions protect GTA banking institutions through advanced fraud detection, secure transaction monitoring, SWIFT security protocols, PCI DSS compliance frameworks, and 24/7 security operations specifically designed for the financial sector."
    },
    {
      question: "What healthcare security solutions do you provide for Ontario medical facilities?",
      answer: "For Ontario medical facilities, we provide comprehensive healthcare security solutions including PHIPA-compliant data protection, medical device security, telehealth security infrastructure, patient data encryption, and specialized healthcare threat monitoring services."
    },
    {
      question: "Can your enterprise security solutions scale for large corporations in Mississauga?",
      answer: "Yes, our enterprise security solutions are designed to scale seamlessly for large corporations in Mississauga, offering enterprise-wide protection that grows with your business while maintaining consistent security posture across all locations and departments."
    }
  ];

  // Create schema for the solutions page
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema({
        name: "Enterprise Security Solutions Toronto",
        description: "Industry-specific cybersecurity solutions for Toronto businesses including financial services, healthcare, retail, government, and technology sectors.",
        url: "/solutions",
        areaServed: "Greater Toronto Area, Vaughan, Mississauga, Brampton",
        serviceType: "Enterprise Security Solutions"
      }),
      generateFAQSchema(solutionsFaqs)
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title="Enterprise Security Solutions Toronto | Industry-Specific Cybersecurity" 
        description="Industry-tailored enterprise security solutions for Toronto businesses. Specialized cybersecurity for financial, healthcare, retail, manufacturing and technology sectors across the GTA."
        keywords="enterprise security solutions Toronto, financial cybersecurity GTA, healthcare security Ontario, retail data protection, manufacturing security solutions, technology sector cybersecurity, industry-specific security"
        schema={solutionsSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/solutions' }
        ]}
        primaryKeyword="Enterprise Security Solutions Toronto"
        secondaryKeywords={[
          "Industry-Specific Cybersecurity GTA",
          "Financial Security Toronto",
          "Healthcare Data Protection Ontario",
          "Retail Cybersecurity Solutions",
          "Manufacturing Security Mississauga",
          "Technology Sector Protection",
          "Enterprise-Grade Security GTA"
        ]}
        pageType="service"
      />
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-red-900 to-slate-900" aria-label="Enterprise Security Solutions Toronto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
                  <span className="text-red-200 text-sm font-medium">Toronto's Industry-Leading Protection</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Enterprise Security Solutions for Toronto Businesses
                </h1>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Tailored cybersecurity solutions designed for your industry's specific challenges across the Greater Toronto Area. Protect your business with enterprise-grade security and compliance expertise.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/contact?subject=Demo%20Request" 
                    className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center font-medium"
                  >
                    Request a Demo <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/services" 
                    className="border border-white/20 bg-white/5 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center font-medium"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-red-600/20 rounded-2xl backdrop-blur-sm transform rotate-3"></div>
                <img 
                  src="/images/solutions/enterprise-security.jpg" 
                  alt="Enterprise Security" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solutions by Industry</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Every industry faces unique security challenges. Our solutions are tailored to address specific requirements and compliance needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Landmark className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Secure banking systems, protect customer data, and comply with financial regulations like SOX, PCI DSS, and GDPR.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Fraud detection systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Secure payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Regulatory compliance</span>
                  </li>
                </ul>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Stethoscope className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Protect patient data, secure medical devices, and ensure HIPAA compliance while maintaining operational efficiency.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">HIPAA compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Medical device security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Telehealth protection</span>
                  </li>
                </ul>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Building className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Safeguard operational technology, protect intellectual property, and secure supply chains from cyber threats.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">OT/IT convergence security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">IP protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Supply chain security</span>
                  </li>
                </ul>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Landmark className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Government</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Protect critical infrastructure, secure sensitive data, and comply with stringent government regulations.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">FISMA compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Critical infrastructure protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Classified data security</span>
                  </li>
                </ul>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                  <ShoppingCart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Retail</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Secure e-commerce platforms, protect customer data, and prevent payment fraud while maintaining smooth operations.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">PCI DSS compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Point-of-sale security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">E-commerce protection</span>
                  </li>
                </ul>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Cpu className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technology</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Protect intellectual property, secure development pipelines, and implement DevSecOps for continuous security.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">DevSecOps integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cloud security posture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Application security</span>
                  </li>
                </ul>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Solution */}
        <div className="py-24 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-red-600 rounded-full mb-6">
                  <span className="text-white text-sm font-medium">Featured Solution</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Enterprise Security Platform
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our flagship solution combines advanced threat detection, identity management, and 24/7 monitoring in one unified platform, tailored for enterprise needs.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                        <Shield className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Integrated Protection</h3>
                      <p className="mt-2 text-gray-600">
                        Seamlessly combines endpoint security, network protection, and cloud security in one management console.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                        <Lock className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Identity-Centric Security</h3>
                      <p className="mt-2 text-gray-600">
                        Advanced identity verification and access management to control who can access your systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                        <LineChart className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Actionable Intelligence</h3>
                      <p className="mt-2 text-gray-600">
                        Real-time threat intelligence and security analytics to identify and respond to emerging threats.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/contact?subject=Schedule%20a%20Demo" 
                  className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium inline-flex items-center"
                >
                  Schedule a Demo <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/solutions/security-dashboard.jpg" 
                  alt="Enterprise Security Platform Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8">
                    <span className="text-white/80 text-sm font-medium">Enterprise Security Platform</span>
                    <h3 className="text-white text-xl font-bold mt-2">Unified security management dashboard</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compliance & Standards</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our solutions are designed to help you meet industry regulations and security standards with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="font-bold text-xl text-gray-900 mb-2">ISO 27001</div>
                <p className="text-gray-600">International standard for information security management</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="font-bold text-xl text-gray-900 mb-2">GDPR</div>
                <p className="text-gray-600">European Union data protection and privacy regulation</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="font-bold text-xl text-gray-900 mb-2">HIPAA</div>
                <p className="text-gray-600">Health Insurance Portability and Accountability Act</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="font-bold text-xl text-gray-900 mb-2">PCI DSS</div>
                <p className="text-gray-600">Payment Card Industry Data Security Standard</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="font-bold text-xl text-gray-900 mb-2">SOC 2</div>
                <p className="text-gray-600">Service Organization Control reporting standard</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="font-bold text-xl text-gray-900 mb-2">NIST CSF</div>
                <p className="text-gray-600">National Institute of Standards and Technology Cybersecurity Framework</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="font-bold text-xl text-gray-900 mb-2">CCPA</div>
                <p className="text-gray-600">California Consumer Privacy Act</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="font-bold text-xl text-gray-900 mb-2">FISMA</div>
                <p className="text-gray-600">Federal Information Security Management Act</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                  Ready to secure your business?
                </h2>
                <p className="text-red-100 text-lg mb-8 leading-relaxed">
                  Contact our security experts today for a personalized consultation and discover how our solutions can protect your organization.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/contact" 
                    className="bg-white text-red-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-medium"
                  >
                    Contact Us <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/contact?subject=Pricing%20Information" 
                    className="border border-white/40 bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center font-medium"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm w-full max-w-md">
                  <h3 className="text-white font-bold text-xl mb-4">Our Security Partners</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/20 h-16 rounded-lg flex items-center justify-center">
                      <Server className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-white/20 h-16 rounded-lg flex items-center justify-center">
                      <Network className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-white/20 h-16 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-white/20 h-16 rounded-lg flex items-center justify-center">
                      <Lock className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-white/20 h-16 rounded-lg flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-white/20 h-16 rounded-lg flex items-center justify-center">
                      <Cpu className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Solutions; 