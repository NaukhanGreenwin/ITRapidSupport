import React from 'react';
import { Calendar, ChevronRight, Accessibility as AccessibilityIcon } from 'lucide-react';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Accessibility Statement</h1>
            <p className="text-slate-300 text-lg mb-4">
              IT Rapid Support is committed to ensuring digital accessibility for people of all abilities.
            </p>
            <div className="flex items-center text-slate-400 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last Updated: March 22, 2024
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
                <a href="#commitment" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Our Commitment
                </a>
                <a href="#conformance" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Conformance Status
                </a>
                <a href="#technologies" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Technologies Used
                </a>
                <a href="#assessment" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Assessment Methods
                </a>
                <a href="#feedback" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Feedback Process
                </a>
                <a href="#contact" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Contact Information
                </a>
              </nav>
            </div>

            {/* Main Content */}
            <div className="p-8 md:flex-1">
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  IT Rapid Support is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
                </p>
              </section>

              <section id="commitment" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
                <p className="text-gray-700 mb-4">
                  IT Rapid Support is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.
                </p>
                <p className="text-gray-700 mb-4">
                  This website strives to conform to level AA of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web content more accessible for people with disabilities. Conformance with these guidelines will help make the web more user-friendly for everyone.
                </p>
              </section>

              <section id="conformance" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conformance Status</h2>
                <p className="text-gray-700 mb-4">
                  The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. IT Rapid Support's website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
                </p>
              </section>

              <section id="technologies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
                <p className="text-gray-700 mb-4">
                  Our website relies on the following technologies, which all support accessibility:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>HTML5</li>
                  <li>WAI-ARIA</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  These technologies are relied upon for conformance with the accessibility standards used.
                </p>
              </section>

              <section id="assessment" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Assessment Methods</h2>
                <p className="text-gray-700 mb-4">
                  IT Rapid Support assesses the accessibility of our website in the following ways:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Self-evaluation</li>
                  <li>External evaluation</li>
                  <li>User testing with assistive technologies</li>
                  <li>Automated testing tools</li>
                </ul>
              </section>

              <section id="feedback" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback Process</h2>
                <p className="text-gray-700 mb-4">
                  We welcome your feedback on the accessibility of the IT Rapid Support website. Please let us know if you encounter accessibility barriers on our website:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Phone: +1-289-582-9930</li>
                  <li>E-mail: accessibility@itrapidsupport.com</li>
                  <li>Visitor address: 7810 Keele St, Vaughan, ON L4K4G7</li>
                  <li>Contact form: Available on our Contact page</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We try to respond to feedback within 5 business days.
                </p>
              </section>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                <a href="/terms" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                  Terms of Service
                </a>
                <a href="/privacy" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  Privacy Policy
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
                  <AccessibilityIcon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need accessibility assistance?</h3>
                  <p className="text-gray-600">
                    Our team is here to help with any accessibility requirements or questions you may have.
                  </p>
                </div>
              </div>
              <a 
                href="/contact" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center font-medium"
              >
                Contact Accessibility Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility; 