import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Building2, Building, HardHat, GraduationCap, HeartPulse, ShieldCheck } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const IndustrySecuritySolutions: React.FC = () => {
  const industries = [
    {
      name: 'Healthcare',
      icon: <HeartPulse className="h-6 w-6 text-red-600" />,
      description: 'PHIPA-compliant security solutions protecting patient data with specialized healthcare security controls.',
      features: ['Medical records protection', 'PHIPA compliance', 'Connected devices security'],
      color: 'from-red-500/20 to-red-500/5'
    },
    {
      name: 'Financial Services',
      icon: <Briefcase className="h-6 w-6 text-red-600" />,
      description: 'Advanced protection for financial institutions meeting strict Canadian regulatory requirements.',
      features: ['Fraud prevention', 'Transaction monitoring', 'Secure client portals'],
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      name: 'Manufacturing',
      icon: <HardHat className="h-6 w-6 text-red-600" />,
      description: 'Protecting operational technology and industrial control systems across Ontario facilities.',
      features: ['OT/ICS security', 'Supply chain protection', 'IP safeguarding'],
      color: 'from-yellow-500/20 to-yellow-500/5'
    },
    {
      name: 'Education',
      icon: <GraduationCap className="h-6 w-6 text-red-600" />,
      description: 'Comprehensive security for educational institutions safeguarding student data and research.',
      features: ['Student data protection', 'Campus network security', 'Research safeguards'],
      color: 'from-green-500/20 to-green-500/5'
    },
    {
      name: 'Real Estate',
      icon: <Building className="h-6 w-6 text-red-600" />,
      description: 'Property management security solutions protecting tenant data and building systems.',
      features: ['Building system security', 'Tenant data protection', 'Smart building security'],
      color: 'from-purple-500/20 to-purple-500/5'
    },
    {
      name: 'Professional Services',
      icon: <Building2 className="h-6 w-6 text-red-600" />,
      description: 'Tailored security for law firms, accounting practices, and consulting agencies across the GTA.',
      features: ['Client confidentiality', 'IP protection', 'Secure client collaboration'],
      color: 'from-indigo-500/20 to-indigo-500/5'
    }
  ];

  return (
    <div className="py-10 bg-white">
      <AnimateOnScroll variant="fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 bg-red-600/10 rounded-full mb-3 backdrop-blur-sm">
                <span className="text-red-600 text-sm font-medium">Industry-Specific Solutions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Security Tailored for Your Industry</h2>
              <p className="text-gray-600 max-w-2xl text-base">
                We understand the unique security challenges faced by different industries in Ontario and provide specialized solutions designed to address industry-specific threats.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/industries" className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm">
                All Industries <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, index) => (
              <AnimateOnScroll key={industry.name} variant="fadeInUp" delay={index * 0.1}>
                <div className="bg-gradient-to-br border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className={`bg-gradient-to-br ${industry.color} pt-5 px-5 pb-8`}>
                    <div className="flex items-center mb-2">
                      <div className="bg-white/90 rounded-lg p-2 mr-3">
                        {industry.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{industry.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {industry.description}
                    </p>
                  </div>
                  <div className="px-5 py-4 bg-white">
                    <ul className="space-y-2">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`} className="mt-4 inline-flex items-center text-red-600 text-sm font-medium hover:text-red-700">
                      Learn more <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default IndustrySecuritySolutions; 