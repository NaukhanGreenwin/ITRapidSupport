import React from 'react';
import { Shield, Users, Key, Brain, Lock, Cloud, Database, FileCode, Server, CheckCircle, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
                <span className="text-red-200 text-sm font-medium">Enterprise Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Comprehensive Security Services
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                From 24/7 monitoring to advanced threat intelligence, our suite of services is designed to protect your organization at every level.
              </p>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-2xl backdrop-blur-sm transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                alt="Security Operations" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Security Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              IT Rapid Support offers a comprehensive suite of IT security services tailored to your organization's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Service 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Managed Security Services</h3>
              <p className="text-gray-600 mb-6">
                24/7 monitoring and response to security incidents by our expert team of analysts, ensuring your business stays protected around the clock.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Continuous monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Incident response</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Threat hunting</span>
                </li>
              </ul>
              <a href="/contact" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Key className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Identity & Access Management</h3>
              <p className="text-gray-600 mb-6">
                Secure your digital assets with advanced identity verification, multi-factor authentication, and access control solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Multi-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Privileged access management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Single sign-on solutions</span>
                </li>
              </ul>
              <a href="/contact" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Brain className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Threat Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Stay ahead of cyber threats with AI-powered threat detection, proactive security measures, and real-time intelligence feeds.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">AI-driven threat detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Threat intelligence feeds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Proactive threat hunting</span>
                </li>
              </ul>
              <a href="/contact" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Cloud className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Security</h3>
              <p className="text-gray-600 mb-6">
                Secure your cloud infrastructure with comprehensive protection for AWS, Azure, Google Cloud, and multi-cloud environments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Cloud configuration audits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Workload protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Data loss prevention</span>
                </li>
              </ul>
              <a href="/contact" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Lock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security Testing</h3>
              <p className="text-gray-600 mb-6">
                Identify vulnerabilities before attackers do with our comprehensive penetration testing, vulnerability scanning, and security assessments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Penetration testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Vulnerability assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Red team exercises</span>
                </li>
              </ul>
              <a href="/contact" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Database className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-600 mb-6">
                Protect your sensitive data with encryption, data loss prevention, and robust data governance frameworks that ensure compliance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Data encryption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Data loss prevention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Data access governance</span>
                </li>
              </ul>
              <a href="/contact" className="text-red-600 flex items-center hover:text-red-700 font-medium">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Service */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-red-900 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                  <span className="text-white text-sm font-medium">Featured Service</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Managed Detection & Response</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Our flagship MDR service provides 24/7 threat monitoring, detection, and response capabilities, powered by our expert security analysts and advanced AI.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-white">24/7 monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-white">15-minute response</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-white">AI-powered detection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-white">Expert remediation</span>
                  </div>
                </div>
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors font-medium"
                >
                  Get a demo
                </a>
              </div>
              <div className="hidden md:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="Security Operations Center" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Framework */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Security Framework</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our comprehensive security methodology ensures protection at every level of your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-8">
              <div className="bg-red-600/10 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Identify</h3>
              <p className="text-gray-600">
                Comprehensive assessment of your infrastructure, assets, and security posture.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-red-600/10 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Lock className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Protect</h3>
              <p className="text-gray-600">
                Implementation of security controls and safeguards to prevent threats.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-red-600/10 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Server className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detect</h3>
              <p className="text-gray-600">
                Continuous monitoring and advanced analytics to identify security events.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-red-600/10 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <FileCode className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respond</h3>
              <p className="text-gray-600">
                Rapid incident response and recovery to minimize impact and restore operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to strengthen your security posture?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Contact our security experts today for a personalized consultation and discover how IT Rapid Support can protect your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors font-medium"
          >
            Schedule a consultation
          </a>
        </div>
      </div>
    </>
  );
};

export default Services; 