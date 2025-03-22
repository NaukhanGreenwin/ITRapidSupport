import React from 'react';
import { Calendar, ChevronRight, Cookie } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
            <p className="text-slate-300 text-lg mb-4">
              Learn about how we use cookies and similar technologies on our website.
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
                <a href="#what-are-cookies" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  What Are Cookies
                </a>
                <a href="#types-of-cookies" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Types of Cookies
                </a>
                <a href="#how-we-use-cookies" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  How We Use Cookies
                </a>
                <a href="#managing-cookies" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Managing Cookies
                </a>
                <a href="#privacy" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Privacy Policy
                </a>
                <a href="#updates" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                  Updates to Policy
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
                  IT Rapid Support ("we", "our", or "us") uses cookies and similar technologies on our website. This Cookie Policy explains how we use cookies, how they help us provide you with a better experience, and how you can manage cookies on your device.
                </p>
                <p className="text-gray-700 mb-4">
                  By using our website, you consent to the use of cookies as described in this Cookie Policy.
                </p>
              </section>

              <section id="what-are-cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and to provide information to the owners of the site.
                </p>
                <p className="text-gray-700 mb-4">
                  Cookies may be either "persistent" cookies or "session" cookies. A persistent cookie will remain on your device for a predetermined period unless you delete it. A session cookie, on the other hand, will be deleted when you close your browser.
                </p>
              </section>

              <section id="types-of-cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas of the website, and maintaining user preferences. The website cannot function properly without these cookies.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Performance Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to recognize and count the number of visitors and see how they move around our website when using it. This helps us improve the way our website works.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Functionality Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Targeting Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information, but are based on uniquely identifying your browser and internet device.
                </p>
              </section>

              <section id="how-we-use-cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies for a variety of reasons, including:
                </p>
                
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To authenticate and identify you when you use our website, so we can provide you with the services you requested</li>
                  <li>To remember preferences you have set during previous visits</li>
                  <li>To understand how you use our website, which enables us to improve our services</li>
                  <li>To measure the effectiveness of our marketing campaigns</li>
                  <li>To provide relevant advertising based on your browsing activities</li>
                  <li>To analyze traffic patterns on our website, which helps us optimize user experience</li>
                </ul>
              </section>

              <section id="managing-cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can usually find these settings in the "options" or "preferences" menu of your browser. You can set your browser to refuse all cookies, to alert you when a cookie is being sent, or to accept cookies from certain websites only.
                </p>
                <p className="text-gray-700 mb-4">
                  Please note that if you choose to block or delete cookies, you may not be able to use all of the features of our website.
                </p>
                <p className="text-gray-700 mb-4">
                  For more information about how to manage cookies in different browsers, you can visit:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-red-600 hover:text-red-700 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-red-600 hover:text-red-700 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-red-600 hover:text-red-700 hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-red-600 hover:text-red-700 hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                <a href="/privacy" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                  Privacy Policy
                </a>
                <a href="/terms" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  Terms of Service
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
                  <Cookie className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Questions about our cookie usage?</h3>
                  <p className="text-gray-600">
                    Our team can provide more information about how we use cookies and how to manage them.
                  </p>
                </div>
              </div>
              <a 
                href="/contact" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies; 