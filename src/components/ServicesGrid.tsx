import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Key, Brain, Server, Code, FileCode } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const ServicesGrid: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50">
      <AnimateOnScroll variant="fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">IT Security Solutions for Ontario Businesses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Protect your Toronto organization with our full suite of IT security services designed for modern Ontario enterprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimateOnScroll variant="fadeInUp" delay={0.1}>
              <div className="bg-white p-5 md:p-6 rounded-xl hover:shadow-lg transition-shadow group h-full">
                <div className="bg-red-600/10 rounded-lg p-2 w-fit mb-3 group-hover:bg-red-600/20 transition-colors">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Managed Security Services</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  24/7 monitoring and response by our Toronto-based expert security team, ensuring your business stays protected around the clock.
                </p>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto text-sm">
                  Learn more <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeInUp" delay={0.2}>
              <div className="bg-white p-5 md:p-6 rounded-xl hover:shadow-lg transition-shadow group h-full">
                <div className="bg-red-600/10 rounded-lg p-2 w-fit mb-3 group-hover:bg-red-600/20 transition-colors">
                  <Key className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Identity & Access Management</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Secure your digital assets with advanced identity verification and access control solutions tailored for GTA businesses.
                </p>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto text-sm">
                  Learn more <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeInUp" delay={0.3}>
              <div className="bg-white p-5 md:p-6 rounded-xl hover:shadow-lg transition-shadow group h-full">
                <div className="bg-red-600/10 rounded-lg p-2 w-fit mb-3 group-hover:bg-red-600/20 transition-colors">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Threat Intelligence</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Stay ahead of cyber threats with AI-powered threat detection and proactive security measures for Ontario enterprises.
                </p>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto text-sm">
                  Learn more <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeInUp" delay={0.4}>
              <div className="bg-white p-5 md:p-6 rounded-xl hover:shadow-lg transition-shadow group h-full">
                <div className="bg-red-600/10 rounded-lg p-2 w-fit mb-3 group-hover:bg-red-600/20 transition-colors">
                  <Server className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud Security</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Protect your cloud infrastructure with comprehensive security controls, monitoring, and compliance solutions for Toronto businesses.
                </p>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto text-sm">
                  Learn more <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeInUp" delay={0.5}>
              <div className="bg-white p-5 md:p-6 rounded-xl hover:shadow-lg transition-shadow group h-full">
                <div className="bg-red-600/10 rounded-lg p-2 w-fit mb-3 group-hover:bg-red-600/20 transition-colors">
                  <Code className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Application Security</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Secure your applications from development to deployment with code analysis, penetration testing, and runtime protection for Mississauga organizations.
                </p>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto text-sm">
                  Learn more <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeInUp" delay={0.6}>
              <div className="bg-white p-5 md:p-6 rounded-xl hover:shadow-lg transition-shadow group h-full">
                <div className="bg-red-600/10 rounded-lg p-2 w-fit mb-3 group-hover:bg-red-600/20 transition-colors">
                  <FileCode className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance & Governance</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Meet Canadian regulatory requirements with our compliance frameworks, audit support, and policy management services for Ontario enterprises.
                </p>
                <Link to="/services" className="text-red-600 flex items-center hover:text-red-700 font-medium mt-auto text-sm">
                  Learn more <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/services" className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm">
              View All Services <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default ServicesGrid; 