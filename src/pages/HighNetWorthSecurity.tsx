import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Home, Plane, Smartphone, Sailboat, Clock, Lock, Eye, Building, Users, FileText, BarChart3, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

export default function HighNetWorthSecurity() {
  const [activeTab, setActiveTab] = useState('family');
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white pt-8 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-600/20 rounded-full mb-6">
              <span className="text-red-200 text-sm font-medium">Premium Security Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Elite Security for High-Profile Individuals
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Comprehensive digital protection for your private estates, family offices, aircraft, vessels, and digital assets.
              Our discreet security services safeguard what matters most.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="lg">Schedule a Consultation</Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-6 border-t border-slate-700">
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">24/7</p>
                <p className="text-slate-400 text-sm">Continuous Protection</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">100%</p>
                <p className="text-slate-400 text-sm">Confidential Service</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">15min</p>
                <p className="text-slate-400 text-sm">Alert Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">Global</p>
                <p className="text-slate-400 text-sm">Network Coverage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Key Assets Protection */}
      <section id="services" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Protection for Critical Assets</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our specialized security teams safeguard your most valuable assets with advanced cybersecurity protocols and continuous monitoring.
            </p>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              <button 
                className={`px-4 py-3 rounded-lg font-medium transition ${activeTab === 'family' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('family')}
              >
                Family Offices
              </button>
              <button 
                className={`px-4 py-3 rounded-lg font-medium transition ${activeTab === 'aircraft' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('aircraft')}
              >
                Aircraft & Helicopters
              </button>
              <button 
                className={`px-4 py-3 rounded-lg font-medium transition ${activeTab === 'vessels' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('vessels')}
              >
                Yachts & Vessels
              </button>
              <button 
                className={`px-4 py-3 rounded-lg font-medium transition ${activeTab === 'digital' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('digital')}
              >
                Digital Assets
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              {activeTab === 'family' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Building className="mr-3 text-red-600" /> Family Office Protection
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Family offices manage significant wealth and sensitive information that require 
                      specialized cybersecurity solutions to protect against targeted threats and sophisticated attacks.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Advanced threat protection for wealth management systems</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Multi-factor authentication and identity management</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Secure virtual data rooms for sensitive document sharing</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Executive communications protection and encryption</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Anti-fraud measures for financial transactions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3">Family Office Cybersecurity</h4>
                    <p className="text-gray-700 mb-4">
                      Our family office cybersecurity team specializes in creating comprehensive security frameworks 
                      that address the unique risks associated with managing significant family wealth and legacies.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We implement custom security protocols for investment operations, philanthropic activities, 
                      and inter-generational wealth transfer, with particular focus on preventing targeted attacks.
                    </p>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100 mb-4">
                      <h5 className="font-bold text-red-700 mb-2">Specialized Protection</h5>
                      <p className="text-gray-700">
                        Our team includes certified financial security experts who understand both the technical 
                        and regulatory aspects of family office protection.
                      </p>
                    </div>
                    <Link to="/contact" className="text-red-600 font-medium hover:underline inline-flex items-center">
                      Schedule a family office security consultation <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              )}
              
              {activeTab === 'aircraft' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Plane className="mr-3 text-red-600" /> Aircraft & Helicopter Security
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Modern private aircraft contain sophisticated avionics and connectivity systems that 
                      require specialized security expertise. Our solutions protect all digital aspects of your air travel.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Secure in-flight connectivity and communication systems</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Avionics systems security assessment and hardening</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Pre-flight and post-flight security scanning</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Secure device usage protocols for crew and passengers</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3">Our Expertise</h4>
                    <p className="text-gray-700 mb-4">
                      Our aviation cybersecurity specialists understand the unique challenges of 
                      securing private aircraft systems while maintaining operational efficiency and passenger comfort.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We work closely with your flight operations team to implement security measures 
                      that safeguard critical systems without impacting your travel experience.
                    </p>
                    <Link to="/contact" className="text-red-600 font-medium hover:underline inline-flex items-center">
                      Schedule an aircraft assessment <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              )}
              
              {activeTab === 'vessels' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Sailboat className="mr-3 text-red-600" /> Yacht & Vessel Protection
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Modern yachts and vessels are equipped with sophisticated navigation, 
                      communication, and entertainment systems that can be vulnerable to cyber threats.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Maritime navigation and communication systems security</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Secure satellite and coastal connectivity</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Onboard entertainment and guest network isolation</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Crew device management and security protocols</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3">Our Maritime Approach</h4>
                    <p className="text-gray-700 mb-4">
                      Our maritime security specialists understand the unique challenges of securing vessels 
                      that operate in international waters with varying connectivity options.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We implement security measures that ensure your vessel remains protected 
                      whether docked in a marina or navigating remote waters.
                    </p>
                    <Link to="/contact" className="text-red-600 font-medium hover:underline inline-flex items-center">
                      Request a vessel assessment <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              )}
              
              {activeTab === 'digital' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Smartphone className="mr-3 text-red-600" /> Digital Asset Protection
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your digital footprint extends beyond physical properties. We provide comprehensive 
                      protection for your personal devices, online accounts, and digital investments.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Personal device security hardening and monitoring</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Secure digital communications and encryption</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Cryptocurrency and digital investment protection</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Digital privacy management and social media protection</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3">Our Digital Protection</h4>
                    <p className="text-gray-700 mb-4">
                      We provide customized security solutions that protect your digital life without 
                      compromising convenience or accessibility.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our team implements advanced authentication measures, encrypted communications, 
                      and proactive monitoring to ensure your digital assets remain secure.
                    </p>
                    <Link to="/contact" className="text-red-600 font-medium hover:underline inline-flex items-center">
                      Schedule a digital security review <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Family Office Cybersecurity Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-4">
                <span className="text-sm font-medium">Specialized Protection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Family Office Security Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic safeguarding frameworks for family wealth management, privacy protection, and multi-generational data security.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <Building className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Family Office Protection</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">Wealth Management System Security</h4>
                      <p className="text-gray-600">Secure protection for portfolio management platforms, financial reporting systems, and investment tracking tools.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">Multi-Family Data Protection</h4>
                      <p className="text-gray-600">Advanced encryption and access controls for sensitive family information, trust documents, and estate planning.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">Staff Security Training</h4>
                      <p className="text-gray-600">Comprehensive security awareness training for family office staff to prevent social engineering and phishing attacks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">Secure Communications</h4>
                      <p className="text-gray-600">End-to-end encrypted communication channels for sensitive family and business discussions.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button to="/contact" variant="primary" size="lg">Schedule Family Office Assessment</Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-red-600 mr-3" />
                    <h4 className="font-bold text-lg">Multi-Generational Security</h4>
                  </div>
                  <p className="text-gray-700">
                    Our family office security solutions address the unique challenges of protecting wealth across generations, including digital literacy training for family members of all ages.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                  <div className="flex items-center mb-3">
                    <FileText className="h-6 w-6 text-red-600 mr-3" />
                    <h4 className="font-bold text-lg">Regulatory Compliance</h4>
                  </div>
                  <p className="text-gray-700">
                    We ensure your family office maintains compliance with relevant financial regulations while implementing security measures that protect sensitive information.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="h-6 w-6 text-red-600 mr-3" />
                    <h4 className="font-bold text-lg">Investment Security</h4>
                  </div>
                  <p className="text-gray-700">
                    Protect your investment activities with secure transaction verification, third-party vendor assessment, and fraud prevention measures tailored to high-value transactions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Luxury Residential Security Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-800 rounded-full mb-4">
                <span className="text-sm font-medium">Private Properties</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Residential & Vacation Property Security</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive protection for all your private spaces, from urban residences to remote island retreats.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="mb-5">
                  <Home className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Primary Residences</h3>
                <p className="text-gray-600 mb-4">
                  Our holistic approach to securing primary residences integrates cybersecurity with physical security systems for complete protection.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Smart home system fortification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Network security with segregated guest access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Surveillance system evaluation and hardening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Staff device management and policies</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/contact" className="text-red-600 font-medium hover:underline inline-flex items-center">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cottages & Vacation Homes</h3>
                <p className="text-gray-600 mb-4">
                  Specialized security for properties that see intermittent use, ensuring protection even when you're away.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Remote monitoring and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Seasonal security protocols</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Off-grid security solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Caretaker and rental management security</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/contact" className="text-red-600 font-medium hover:underline inline-flex items-center">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Island & Remote Properties</h3>
                <p className="text-gray-600 mb-4">
                  Custom security solutions for isolated properties with unique connectivity and infrastructure challenges.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Satellite and alternative connectivity security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Self-sufficient security infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Emergency response coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Private dock and waterfront monitoring</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/contact" className="text-red-600 font-medium hover:underline inline-flex items-center">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Case Study */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 mt-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full mb-4 text-xs font-medium">
                    CLIENT SUCCESS
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Multi-Property Security Integration</h3>
                  <p className="text-gray-700 mb-4">
                    For a client with multiple residences across North America, we implemented a unified security approach that provided seamless protection while traveling between properties.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 mb-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Centralized monitoring dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Consistent security protocols</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Shared biometric access systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Staff security training across properties</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center text-amber-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-gray-600">"The peace of mind across all our properties is invaluable."</span>
                  </div>
                </div>
                <div className="md:w-1/3 bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex flex-col justify-center">
                  <h4 className="font-bold text-lg mb-3 text-red-600">Our Approach</h4>
                  <p className="text-gray-700 mb-4">
                    We develop integrated security solutions across all property types, providing consistent protection regardless of location or property characteristics.
                  </p>
                  <Button to="/contact" variant="primary" size="sm">Request Property Assessment</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Elite Security Approach</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We understand the unique security requirements of high net worth individuals and provide discreet, thorough protection.
            </p>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Discreet Assessment</h3>
                <p className="text-gray-600">
                  Our security experts conduct thorough yet unobtrusive assessments of your properties and digital assets,
                  identifying vulnerabilities without disrupting your lifestyle.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Implementation</h3>
                <p className="text-gray-600">
                  We develop and implement tailored security solutions that balance robust protection with usability,
                  ensuring your digital systems remain both secure and convenient.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Protection</h3>
                <p className="text-gray-600">
                  Our team provides ongoing monitoring, regular security updates, and rapid response to emerging threats,
                  ensuring your protection evolves with the changing threat landscape.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Discerning Clients</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our clients value our discretion, expertise, and commitment to excellence.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 shadow-md border border-slate-100">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-slate-200 rounded-full w-20 h-20 flex-shrink-0 flex items-center justify-center">
                  <Users className="h-10 w-10 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-700 italic mb-4 text-lg">
                    "IT Rapid Support's family office security program has been invaluable for protecting our multi-generational assets. 
                    Their team understands the unique challenges we face and provides solutions that are both robust and unobtrusive."
                  </p>
                  <p className="font-semibold">— Family Office Director</p>
                  <p className="text-sm text-slate-500">Global Family Office, Ontario</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discreet, Comprehensive Security for Your Lifestyle</h2>
            <p className="text-xl mb-8">
              Schedule a confidential consultation with our elite security team to discuss your unique requirements.
            </p>
            <Button to="/contact" variant="primary" size="lg">Request Consultation</Button>
          </div>
        </div>
      </section>

      {/* Enhanced Cybersecurity Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-800 rounded-full mb-4">
                <span className="text-sm font-medium">Enterprise-Grade Protection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Cybersecurity Technologies</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deploy sophisticated security technologies typically reserved for enterprise environments, tailored for the unique needs of high net worth individuals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Threat Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Proactive monitoring using AI-powered threat intelligence systems that identify and mitigate potential threats before they impact your security.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dark web monitoring for personal information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Social engineering threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Predictive security analytics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Zero Trust Security</h3>
                <p className="text-gray-600 mb-4">
                  Implementation of zero trust architecture that verifies every access request regardless of source, providing superior protection against unauthorized access.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Continuous authentication protocols</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Micro-segmentation of networks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Least privilege access control</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Secure Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed secure cloud environments that protect your sensitive data while providing accessibility from anywhere in the world.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>End-to-end encrypted storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Geo-restricted access controls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Disaster recovery protocols</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-100 p-8 rounded-xl border border-slate-200">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Cybersecurity Risk Assessment</h3>
                  <p className="text-gray-700 mb-4">
                    Our comprehensive security assessment evaluates your current security posture across all properties, assets, and digital systems. We identify vulnerabilities and provide actionable recommendations specific to high net worth threat models.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Executive threat profiling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Physical security integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Security awareness training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Technical vulnerability testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Privacy exposure analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Incident response readiness</span>
                    </li>
                  </ul>
                  <Button to="/contact" variant="primary">Schedule a Risk Assessment</Button>
                </div>
                <div className="md:w-1/3 bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                  <h4 className="font-bold text-lg mb-3 text-red-600">Why Elite Cybersecurity?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Targeted threats require specialized protection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Standard solutions lack the necessary sophistication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Personal privacy requires comprehensive protection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Discreet service preserves your reputation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 