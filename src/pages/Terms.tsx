import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Scale, ArrowRight } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-slate-300 text-lg mb-4">
              These terms govern your use of our website and services. Please read them carefully.
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
                <a href="#agreement" className="block py-2 px-3 rounded-lg bg-red-50 text-red-700 font-medium">
                  Agreement to Terms
                </a>
                <a href="#intellectual" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Intellectual Property
                </a>
                <a href="#user-representations" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  User Representations
                </a>
                <a href="#prohibited" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Prohibited Activities
                </a>
                <a href="#user-generated" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  User Generated Content
                </a>
                <a href="#services" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Services
                </a>
                <a href="#termination" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Termination
                </a>
                <a href="#governing-law" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Governing Law
                </a>
                <a href="#contact" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Main Content */}
            <div className="p-8 md:flex-1">
              <section id="agreement" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and IT Rapid Support ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
                <p className="text-gray-700 mb-4">
                  You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
                <p className="text-gray-700 mb-4">
                  Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
                </p>
              </section>

              <section id="intellectual" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
                <p className="text-gray-700 mb-4">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
                </p>
                <p className="text-gray-700 mb-4">
                  The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </section>

              <section id="user-representations" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Representations</h2>
                <p className="text-gray-700 mb-4">
                  By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
                </p>
                <p className="text-gray-700 mb-4">
                  If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                </p>
              </section>

              <section id="prohibited" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
                <p className="text-gray-700 mb-4">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
                <p className="text-gray-700 mb-4">
                  As a user of the Site, you agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
                  <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                  <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                  <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                  <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
                  <li>Engage in unauthorized framing of or linking to the Site.</li>
                  <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
                </ul>
              </section>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
                <Link to="/privacy" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  Privacy Policy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/cookies" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  Cookie Policy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
                  <Scale className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Have questions about these terms?</h3>
                  <p className="text-gray-600">
                    Our legal team is available to clarify any part of our terms of service.
                  </p>
                </div>
              </div>
              <a 
                href="/contact" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center font-medium"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 