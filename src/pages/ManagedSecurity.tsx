import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Check, CheckCircle, Server, Users, Clock, ChevronRight } from 'lucide-react';

const ManagedSecurity = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
                <span className="text-red-200 text-sm font-medium">Security Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Managed Security Services
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                24/7 monitoring, threat detection, and incident response from our team of security experts to keep your organization protected around the clock.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-2xl backdrop-blur-sm transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=800&q=80" 
                alt="Security Operations Center" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Managed Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our managed security services provide complete protection for your critical systems, networks, and data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Server className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Security Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Around-the-clock monitoring of your network, systems, and applications to detect threats in real-time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Real-time threat detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Log analysis & correlation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Anomaly detection</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Incident Response</h3>
              <p className="text-gray-600 mb-6">
                Rapid response to security incidents with clear remediation steps and detailed reporting.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">15-minute response SLA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Incident containment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Root cause analysis</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Security Team</h3>
              <p className="text-gray-600 mb-6">
                Expert security analysts and engineers working as an extension of your team.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Certified security experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Industry specialization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Executive reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Why Choose Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Managed Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover how our managed security services provide value, protection, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced Response Time</h3>
                  <p className="text-gray-600">
                    Minimize the impact of security incidents with immediate detection and rapid response protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Security Posture</h3>
                  <p className="text-gray-600">
                    Strengthen your overall security with proactive monitoring and continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Access to Expertise</h3>
                  <p className="text-gray-600">
                    Leverage our team of security experts without the cost of building an in-house team.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Server className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Predictable Costs</h3>
                  <p className="text-gray-600">
                    Transform variable security costs into fixed monthly expenses with transparent pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Security Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A comprehensive methodology designed to protect your organization.
            </p>
          </div>

          <div className="flex flex-col space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                  <span className="text-sm font-medium">Step 1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Assessment</h3>
                <p className="text-gray-600 mb-6">
                  We begin with a comprehensive assessment of your current security posture, identifying vulnerabilities and gaps in your existing defenses.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Infrastructure evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Vulnerability scanning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Risk analysis</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80" 
                  alt="Security Assessment" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                  <span className="text-sm font-medium">Step 2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Based on the assessment findings, we design and implement a custom security solution tailored to your specific needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Tool deployment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Security controls configuration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Integration with existing systems</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                  alt="Security Implementation" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                  <span className="text-sm font-medium">Step 3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Monitoring</h3>
                <p className="text-gray-600 mb-6">
                  Our security operations center (SOC) provides 24/7 monitoring of your environment to detect and respond to threats.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Real-time alerting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Threat hunting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Security dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                  alt="Continuous Monitoring" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to enhance your security?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Contact our team today to learn how our managed security services can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium border border-red-500"
            >
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
            >
              Explore All Services <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedSecurity; 