import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldAlert, Clock, Shield, FileWarning, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/PageHeroSection';
import AnimateOnScroll from '../components/AnimateOnScroll';

const CyberIncident: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cyber Incident Response | IT Rapid Support</title>
        <meta name="description" content="24/7 Expert cyber incident response services. Immediate assistance for data breaches, ransomware, and other cyber emergencies. Work with breach coaches and cyber insurance." />
      </Helmet>

      <HeroSection
        title="Cyber Incident Response"
        subtitle="Immediate Expert Assistance When Every Minute Counts"
        description="Our 24/7 incident response team provides rapid containment, thorough investigation, and complete recovery services for organizations experiencing cyber attacks."
        image="/images/cyber-incident-hero.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll variant="fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Cyber Incident Response</h2>
              <p className="text-xl text-gray-600 mb-8">
                When a cyber incident occurs, having the right partner can make all the difference between a 
                minor disruption and a major catastrophe. IT Rapid Support provides comprehensive cyber 
                incident response services to help organizations navigate through the crisis.
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-base font-medium shadow-lg group">
                  Get Emergency Assistance 
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fadeIn">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Incident Response Services</h2>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ShieldAlert className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Response</h3>
                <p className="text-gray-600">
                  Our 24/7 rapid response team deploys immediately to contain the incident, prevent further damage, and begin recovery procedures.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">24/7 incident hotline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">Remote and on-site support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">Rapid containment actions</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Service 2 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileWarning className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Forensic Investigation</h3>
                <p className="text-gray-600">
                  Our forensic experts thoroughly investigate the incident to determine scope, impact, and root cause while preserving evidence.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">Digital evidence collection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">Malware analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">Attack vector identification</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Service 3 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.3}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Recovery & Remediation</h3>
                <p className="text-gray-600">
                  We help restore systems and data while implementing security improvements to prevent future incidents.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">System restoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">Data recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">Security enhancements</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Service 4 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.4}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Breach Coach Coordination</h3>
                <p className="text-gray-600">
                  We work seamlessly with your legal breach coach to ensure proper handling of the incident from legal and compliance perspectives.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-600">Legal coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-600">Notification assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-600">Compliance documentation</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Service 5 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.5}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cyber Insurance Support</h3>
                <p className="text-gray-600">
                  We assist with cyber insurance claims by providing detailed documentation and working directly with insurers.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-600">Claims assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-600">Incident documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-600">Cost analysis reports</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Service 6 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.6}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Incident Support</h3>
                <p className="text-gray-600">
                  We provide comprehensive post-incident services to help your organization fully recover and improve security posture.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-600">Lessons learned analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-600">Security improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-600">Staff security training</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fadeIn">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Incident Response Process</h2>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.1}>
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 pt-8 mt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Initial Response</h3>
                  <p className="text-gray-600 text-center">
                    24/7 hotline activation, initial assessment and immediate containment measures.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Step 2 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.2}>
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 pt-8 mt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Investigation</h3>
                  <p className="text-gray-600 text-center">
                    Forensic analysis, scope determination, and root cause identification.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Step 3 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.3}>
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 pt-8 mt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Remediation</h3>
                  <p className="text-gray-600 text-center">
                    System restoration, data recovery, and security improvements.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Step 4 */}
            <AnimateOnScroll variant="fadeInUp" delay={0.4}>
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 pt-8 mt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Post-Incident</h3>
                  <p className="text-gray-600 text-center">
                    Documentation, lessons learned, and long-term security enhancements.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll variant="fadeIn">
              <h2 className="text-3xl font-bold mb-6">Experiencing a Cyber Incident?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is available 24/7 to provide immediate assistance. 
                Don't wait - every minute counts during a cyber incident.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-base font-medium shadow-lg">
                  Contact Emergency Response Team
                </Link>
                <a href="tel:+12895829930" className="inline-flex items-center justify-center bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-base font-medium">
                  Call Hotline: (289) 582-9930
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default CyberIncident; 