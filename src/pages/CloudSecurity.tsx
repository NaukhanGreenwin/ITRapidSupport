import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, ArrowRight, Check, CheckCircle, Lock, Shield, Database, ChevronRight } from 'lucide-react';

const CloudSecurity = () => {
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
                Cloud Security Solutions
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Comprehensive protection for your cloud infrastructure, applications, and data across AWS, Azure, Google Cloud, and multi-cloud environments.
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
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" 
                alt="Cloud Security" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Cloud Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our cloud security solutions provide robust protection for your entire cloud ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Cloud className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure Security</h3>
              <p className="text-gray-600 mb-6">
                Secure your cloud infrastructure with comprehensive protection for compute, storage, and network resources.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Configuration audits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Network security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Compute protection</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Lock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Application Security</h3>
              <p className="text-gray-600 mb-6">
                Protect your cloud-based applications against threats and vulnerabilities throughout the application lifecycle.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">CI/CD pipeline security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">API protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Serverless security</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Database className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Data Security</h3>
              <p className="text-gray-600 mb-6">
                Secure your sensitive data in the cloud with encryption, access controls, and data loss prevention.
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
                  <span className="text-gray-600">Access control management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Cloud Support */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Platform Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multi-Cloud Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Unified security across all major cloud platforms to ensure consistent protection for your entire cloud ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AWS */}
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                alt="AWS" 
                className="h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Amazon Web Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive security solutions for AWS services including EC2, S3, Lambda, and more.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">AWS CloudTrail monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">S3 bucket protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">IAM security best practices</span>
                </li>
              </ul>
            </div>

            {/* Azure */}
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" 
                alt="Microsoft Azure" 
                className="h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Microsoft Azure</h3>
              <p className="text-gray-600 mb-6">
                End-to-end security for Azure environments, including VMs, Storage, and Azure AD.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Azure Security Center integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Azure AD protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Azure Policy compliance</span>
                </li>
              </ul>
            </div>

            {/* Google Cloud */}
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" 
                alt="Google Cloud" 
                className="h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Google Cloud Platform</h3>
              <p className="text-gray-600 mb-6">
                Robust security controls for GCP services, including Compute Engine, Cloud Storage, and BigQuery.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">GCP Security Command Center</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">IAM best practices</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Network security controls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Security Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Cloud Security Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A comprehensive methodology to secure your cloud environments at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your current cloud security posture, identifying gaps and vulnerabilities.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                Custom security architecture design based on your specific cloud environment and security requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Deployment of security controls, tools, and policies across your cloud infrastructure.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Management</h3>
              <p className="text-gray-600">
                Ongoing monitoring, maintenance, and optimization of your cloud security environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                <span className="text-sm font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits of Our Cloud Security</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our comprehensive cloud security solutions provide multiple advantages for your organization.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Enhanced Security Posture</h3>
                    <p className="text-gray-600">Improve your overall security with comprehensive protection across all cloud assets.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Compliance Adherence</h3>
                    <p className="text-gray-600">Meet regulatory requirements with security controls mapped to compliance frameworks.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Cost Optimization</h3>
                    <p className="text-gray-600">Reduce the cost of security breaches and optimize cloud resource utilization.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Scalable Security</h3>
                    <p className="text-gray-600">Security that grows with your cloud environment, automatically adapting to changes.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80" 
                alt="Cloud Security Benefits" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to secure your cloud environment?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Contact our team today to learn how our cloud security services can protect your organization's cloud infrastructure.
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

export default CloudSecurity; 