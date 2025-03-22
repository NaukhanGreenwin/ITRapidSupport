import React from 'react';
import { Users, Award, Rocket, CheckCircle, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About IT Rapid Support</h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Leading the future of IT security with innovative solutions, expert talent, and a mission to protect.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Years of IT security excellence</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded with a simple mission: to make enterprise-grade IT security accessible to organizations of all sizes. What started as a small team of security analysts has grown into a respected force in the security landscape.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Today, we protect businesses throughout Canada and the United States, with our headquarters in Vaughan, Ontario. Our team of security professionals continues to push the boundaries of what's possible in threat detection and response.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-600/10 rounded-full p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Strong Data Privacy Practices</h3>
                    <p className="text-gray-600">Highest security standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-600/10 rounded-full p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">SOC 2 Compliant</h3>
                    <p className="text-gray-600">Trust and transparency</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-2xl transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
                alt="IT Rapid Support team meeting" 
                className="rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The principles that guide us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              At IT Rapid Support, our values are the foundation of everything we do—from how we build our products to how we serve our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-600/10 rounded-full p-3 w-fit mb-6">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">
                We never compromise on security. It's in our DNA and at the core of every decision we make.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-600/10 rounded-full p-3 w-fit mb-6">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, constantly raising the bar for ourselves.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-600/10 rounded-full p-3 w-fit mb-6">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Success</h3>
              <p className="text-gray-600">
                Our clients' success is our success. We're partners in their security journey.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-600/10 rounded-full p-3 w-fit mb-6">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                We prioritize quick and effective responses to security incidents and client needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The collective strength behind IT Rapid Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our team combines decades of specialized experience across critical security domains to deliver comprehensive protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-3 bg-red-600"></div>
              <div className="p-8">
                <div className="bg-red-600/10 rounded-full p-4 w-fit mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Threat Intelligence</h3>
                <p className="text-gray-600 mb-5">
                  Our threat intelligence team continually monitors global security landscapes to identify emerging threats before they impact your business.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">Advanced threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">Real-time monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">Predictive analysis</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-3 bg-red-600"></div>
              <div className="p-8">
                <div className="bg-red-600/10 rounded-full p-4 w-fit mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    <path d="M18 14h-8"></path>
                    <path d="M15 18h-5"></path>
                    <path d="M10 6h8v4h-8V6Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security Architecture</h3>
                <p className="text-gray-600 mb-5">
                  Our security architects design comprehensive systems that protect your digital assets against evolving threats and vulnerabilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">Zero Trust frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">Cloud security solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">Secure infrastructure design</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-3 bg-red-600"></div>
              <div className="p-8">
                <div className="bg-red-600/10 rounded-full p-4 w-fit mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Incident Response</h3>
                <p className="text-gray-600 mb-5">
                  Our incident response team delivers rapid, effective resolution to security incidents, minimizing damage and restoring operations quickly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">24/7 emergency response</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">Forensic investigation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-2 mt-1">
                      <path d="m5 12 5 5L20 7"></path>
                    </svg>
                    <span className="text-gray-700">Recovery planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-red-600/10 text-red-600 rounded-full">
              <span className="font-medium">Combined experience: 75+ years in cybersecurity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join our team of security experts</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals passionate about IT security to join our growing team.
          </p>
          <a 
            href="/careers" 
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors font-medium"
          >
            View open positions
          </a>
        </div>
      </div>
    </>
  );
};

export default About; 