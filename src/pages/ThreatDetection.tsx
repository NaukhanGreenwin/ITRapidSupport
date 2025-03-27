import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, Check, CheckCircle, Eye, Target, AlertTriangle, ChevronRight } from 'lucide-react';

const ThreatDetection = () => {
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
                Threat Detection & Intelligence
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Advanced threat detection powered by AI and human expertise to identify and neutralize security threats before they impact your business.
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="Threat Detection" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Capabilities Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Threat Detection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our threat detection and intelligence services combine advanced technology with expert analysis to identify and neutralize threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Capability 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Brain className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Threat Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Leverage artificial intelligence and machine learning to identify patterns and detect anomalies that indicate potential threats.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Behavioral analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Anomaly detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Pattern recognition</span>
                </li>
              </ul>
            </div>

            {/* Capability 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Eye className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Monitoring</h3>
              <p className="text-gray-600 mb-6">
                24/7 monitoring of your network, endpoints, and cloud environments to detect suspicious activities in real-time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Network traffic analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Endpoint monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Cloud security monitoring</span>
                </li>
              </ul>
            </div>

            {/* Capability 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Response</h3>
              <p className="text-gray-600 mb-6">
                Immediate response to identified threats with automated containment and expert-led remediation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Automated containment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Expert-led investigation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Incident recovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Threat Intelligence Platform */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                <span className="text-sm font-medium">Our Platform</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Advanced Threat Intelligence Platform</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our proprietary threat intelligence platform combines multiple data sources, AI analysis, and expert insights to provide comprehensive threat protection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Global Threat Intelligence</h3>
                    <p className="text-gray-600">Access to real-time global threat intelligence from multiple sources.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Behavioral Analytics</h3>
                    <p className="text-gray-600">Advanced behavioral analytics to detect abnormal patterns and activities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Real-Time Alerting</h3>
                    <p className="text-gray-600">Instant notifications and alerts for critical security events.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="Threat Intelligence Platform" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg">
                <span className="font-medium">99.8% Threat Detection Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Threats */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Comprehensive Protection</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Threats We Detect</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our advanced threat detection services identify and mitigate a wide range of security threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Persistent Threats</h3>
              <p className="text-gray-600">
                Detection of sophisticated, targeted attacks designed to remain undetected for extended periods.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ransomware</h3>
              <p className="text-gray-600">
                Early detection of ransomware activities before encryption can take place.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Insider Threats</h3>
              <p className="text-gray-600">
                Identification of suspicious behavior from users with legitimate access to systems.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phishing Attacks</h3>
              <p className="text-gray-600">
                Detection of sophisticated phishing campaigns targeting your organization.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zero-Day Exploits</h3>
              <p className="text-gray-600">
                Protection against previously unknown vulnerabilities through behavioral analysis.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <Target className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Supply Chain Attacks</h3>
              <p className="text-gray-600">
                Monitoring third-party connections and software for potential compromise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Threat Detection Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A comprehensive approach to identifying, analyzing, and responding to security threats.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-red-200 transform md:translate-x-[-50%] hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                  <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-4">
                    <span className="text-sm font-medium">Step 1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Collection</h3>
                  <p className="text-gray-600">
                    Continuous collection of security telemetry from networks, endpoints, cloud environments, and applications.
                  </p>
                </div>
                
                <div className="relative flex items-center justify-center md:w-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-16 md:text-left hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80" 
                    alt="Data Collection" 
                    className="rounded-xl shadow-md mx-auto md:mx-0 max-w-[200px]"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0 md:text-left">
                  <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-4">
                    <span className="text-sm font-medium">Step 2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Analysis & Correlation</h3>
                  <p className="text-gray-600">
                    Advanced analytics engines process data to identify patterns, anomalies, and potential threats.
                  </p>
                </div>
                
                <div className="relative flex items-center justify-center md:w-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80" 
                    alt="Analysis & Correlation" 
                    className="rounded-xl shadow-md mx-auto md:ml-auto max-w-[200px]"
                  />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                  <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-4">
                    <span className="text-sm font-medium">Step 3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Threat Detection</h3>
                  <p className="text-gray-600">
                    Identification of potential threats based on behavioral analysis, known indicators, and machine learning.
                  </p>
                </div>
                
                <div className="relative flex items-center justify-center md:w-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-16 md:text-left hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80" 
                    alt="Threat Detection" 
                    className="rounded-xl shadow-md mx-auto md:mx-0 max-w-[200px]"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0 md:text-left">
                  <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-4">
                    <span className="text-sm font-medium">Step 4</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h3>
                  <p className="text-gray-600">
                    Rapid response to confirmed threats with automated containment and expert-led remediation.
                  </p>
                </div>
                
                <div className="relative flex items-center justify-center md:w-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80" 
                    alt="Incident Response" 
                    className="rounded-xl shadow-md mx-auto md:ml-auto max-w-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to strengthen your threat detection?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Contact our team today to learn how our advanced threat detection services can protect your organization.
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

export default ThreatDetection; 