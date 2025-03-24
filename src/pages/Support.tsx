import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Headset, Server, Shield, ExternalLink, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';

const Support: React.FC = () => {
  return (
    <PageTransition>
      <SEO 
        title="Technical Support | IT Rapid Support" 
        description="Get remote technical support from IT Rapid Support. Download our remote assistance tools to allow our technicians to help you quickly and securely."
        keywords="remote support, technical support, TeamViewer, AnyDesk, IT help desk, remote assistance"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Support', url: '/support' }
        ]}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Support
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get immediate help from our expert technicians with our remote assistance tools
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fadeIn">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Remote Assistance Support</h2>
              <p className="text-gray-700 mb-6">
                Remote Assistance Support from IT Rapid Support allows an IT Rapid Support technician professional in another location to view your computer screen and work on your computer over a secure connection.
              </p>
              <p className="text-gray-700 mb-6">
                By using Remote Assistance support from IT Rapid Support, you agree that during this session, the support professional may start the recording function. This will result in your communications being recorded and logged by the Remote Assistance session. You may request that a link to this recording be e-mailed to you after the session. If you do not agree to the possibility of recording, please let the technician know.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                <a 
                  href="tel:+12895829930"
                  className="inline-flex items-center justify-center bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-base font-medium"
                >
                  Call Support: (289) 582-9930
                </a>
              </div>
            </div>
          </AnimateOnScroll>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Download Remote Support Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimateOnScroll variant="fadeInUp" delay={0.1}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="p-6">
                  <div className="bg-blue-600/10 w-fit rounded-full p-3 mb-4">
                    <Download className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">TeamViewer</h3>
                  <p className="text-gray-600 mb-4">
                    TeamViewer is our primary remote assistance tool. Download and run this application to receive immediate support from our technicians.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Fast and secure connection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>No installation required</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>End-to-end encryption</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-gray-200 p-6 bg-gray-50">
                  <a 
                    href="https://get.teamviewer.com/itrapidsupport" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium"
                  >
                    Download TeamViewer
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <div className="flex justify-between mt-3">
                    <a 
                      href="https://get.teamviewer.com/itrapidsupport" 
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Mac Version
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.teamviewer.teamviewer.market.mobile" 
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Mobile Version
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fadeInUp" delay={0.2}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="p-6">
                  <div className="bg-green-600/10 w-fit rounded-full p-3 mb-4">
                    <Server className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Client Portal</h3>
                  <p className="text-gray-600 mb-4">
                    Access our client portal to submit tickets, view your support history, manage subscriptions, and access documentation.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Submit and track support tickets</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>View support history and invoices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Manage subscriptions and services</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-gray-200 p-6 bg-gray-50">
                  <a 
                    href="https://invoice.zohosecure.com/portal/itrapidsupport" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors text-base font-medium"
                  >
                    Client Login
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <div className="flex justify-between mt-3">
                    <a 
                      href="/contact" 
                      className="text-sm text-green-600 hover:text-green-800"
                    >
                      Need Access?
                    </a>
                    <a 
                      href="/faq" 
                      className="text-sm text-green-600 hover:text-green-800"
                    >
                      Help & FAQ
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fadeInUp" delay={0.3}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                <div className="p-6">
                  <div className="bg-red-600/10 w-fit rounded-full p-3 mb-4">
                    <Download className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AnyDesk</h3>
                  <p className="text-gray-600 mb-4">
                    AnyDesk is our alternative remote support solution. Small, fast and secure - perfect for quick support sessions.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-red-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Lightweight application</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-red-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>High performance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-red-600 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Banking-standard TLS 1.2 encryption</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto border-t border-gray-200 p-6 bg-gray-50">
                  <a 
                    href="https://anydesk.com/en/downloads/windows" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors text-base font-medium"
                  >
                    Download AnyDesk
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <div className="flex justify-between mt-3">
                    <a 
                      href="https://anydesk.com/en/downloads/mac-os" 
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Mac Version
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid" 
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Mobile Version
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          {/* Additional Support Information */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll variant="fadeIn">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How Remote Support Works</h3>
                  <ol className="space-y-4 text-gray-700">
                    <li className="flex">
                      <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <p>Download and run one of our remote support tools (TeamViewer or AnyDesk)</p>
                    </li>
                    <li className="flex">
                      <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <p>When prompted, provide the connection ID and password to our support technician</p>
                    </li>
                    <li className="flex">
                      <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <p>Accept the incoming connection request from our technician</p>
                    </li>
                    <li className="flex">
                      <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <p>Our technician will now be able to view and control your screen to provide assistance</p>
                    </li>
                  </ol>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll variant="fadeIn" delay={0.1}>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Support Hours</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="font-medium">Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM - 1:00 PM EST</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-bold text-gray-900 mb-2">24/7 Emergency Support</h4>
                    <p className="text-gray-700 mb-3">
                      For emergency after-hours support, please call our emergency line:
                    </p>
                    <a 
                      href="tel:+12895829930" 
                      className="inline-flex items-center text-red-600 font-medium hover:text-red-800"
                    >
                      <Headset className="h-5 w-5 mr-2" />
                      (289) 582-9930
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need More Assistance?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team is ready to help with any IT issue your business is facing. Reach out to us today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-base font-medium"
              >
                Contact Our Team
              </Link>
              <Link 
                to="/book-online" 
                className="inline-flex items-center justify-center bg-transparent text-white border border-white/20 px-6 py-3 rounded-lg hover:bg-white/5 transition-colors text-base font-medium"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Support; 