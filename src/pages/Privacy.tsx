import React from 'react';
import { Calendar, ChevronRight, Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-slate-300 text-lg mb-4">
              IT Rapid Support is committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <div className="flex items-center text-slate-400 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last Updated: March 22, 2023
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Sidebar */}
            <div className="md:w-64 bg-slate-50 p-6 border-r border-slate-200">
              <nav className="space-y-1">
                <a href="#introduction" className="block py-2 px-3 rounded-lg bg-red-50 text-red-700 font-medium">
                  Introduction
                </a>
                <a href="#information-collection" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Information Collection
                </a>
                <a href="#information-usage" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  How We Use Information
                </a>
                <a href="#information-sharing" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Information Sharing
                </a>
                <a href="#data-security" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Data Security
                </a>
                <a href="#user-rights" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Your Rights
                </a>
                <a href="#cookies" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Cookies
                </a>
                <a href="#changes" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Changes to Policy
                </a>
                <a href="#contact" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Main Content */}
            <div className="p-8 md:flex-1">
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  IT Rapid Support ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or otherwise interact with us.
                </p>
                <p className="text-gray-700 mb-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              <section id="information-collection" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection</h2>
                <p className="text-gray-700 mb-4">
                  We may collect information about you in a variety of ways. The information we may collect via the website includes:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Data</h3>
                <p className="text-gray-700 mb-4">
                  Personally identifiable information, such as your name, email address, telephone number, and company affiliation that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website, such as online chat, submitting contact forms, or subscribing to newsletters.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Derivative Data</h3>
                <p className="text-gray-700 mb-4">
                  Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Financial Data</h3>
                <p className="text-gray-700 mb-4">
                  Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the website.
                </p>
              </section>

              <section id="information-usage" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We may use the information we collect about you for various purposes, including to:
                </p>
                
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide, operate, and maintain our website and services</li>
                  <li>Improve, personalize, and expand our website and services</li>
                  <li>Understand and analyze how you use our website and services</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                  <li>Process your transactions</li>
                  <li>Send you text messages and push notifications</li>
                  <li>Find and prevent fraud</li>
                  <li>For compliance with legal obligations</li>
                </ul>
              </section>

              <section id="information-sharing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">By Law or to Protect Rights</h3>
                <p className="text-gray-700 mb-4">
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Business Transfers</h3>
                <p className="text-gray-700 mb-4">
                  We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                </p>
              </section>

              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                <a href="/terms" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                  Terms of Service
                </a>
                <a href="/cookies" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  Cookie Policy
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-start mb-6 md:mb-0">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Have questions about data privacy?</h3>
                  <p className="text-gray-600">
                    Our team is here to help you understand how we protect your information.
                  </p>
                </div>
              </div>
              <a 
                href="/contact" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center font-medium"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 