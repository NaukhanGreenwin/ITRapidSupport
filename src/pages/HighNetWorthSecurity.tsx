import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Home, Plane, Smartphone, Sailboat, PieChart, Clock, Lock, Eye } from 'lucide-react';
import Button from '../components/Button';

export default function HighNetWorthSecurity() {
  const [activeTab, setActiveTab] = useState('residences');

  return (
    <div className="bg-white pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Elite Cybersecurity for High Net Worth Individuals
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive digital protection for your private estates, aircraft, vessels, and digital assets.
            Our discreet security services safeguard what matters most.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/contact" variant="primary" size="lg">Schedule a Consultation</Button>
            <Button to="#services" variant="secondary" size="lg">Explore Services</Button>
          </div>
        </div>
      </section>
      
      {/* Key Assets Protection */}
      <section id="services" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Comprehensive Asset Protection</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our specialized security teams safeguard your digital presence across all environments.
            </p>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              <button 
                className={`px-4 py-3 rounded-lg font-medium transition ${activeTab === 'residences' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('residences')}
              >
                Private Residences
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
              {activeTab === 'residences' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Home className="mr-3 text-red-600" /> Private Residence Protection
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Our comprehensive security solutions for high-value properties include advanced network protection, 
                      smart home system security, and discreet monitoring of all connected devices.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Secure network architecture design and implementation</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Smart home system vulnerability assessment and hardening</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>24/7 monitoring of connected devices and security systems</span>
                      </li>
                      <li className="flex">
                        <Shield className="h-6 w-6 mr-3 text-red-600 flex-shrink-0" />
                        <span>Regular security sweeps for unauthorized devices and signals</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3">Our Approach</h4>
                    <p className="text-gray-700 mb-4">
                      We conduct a thorough assessment of your property's digital infrastructure, 
                      identifying vulnerabilities and implementing tailored security measures that 
                      balance protection with convenience.
                    </p>
                    <p className="text-gray-700 mb-4">
                      All our residence security solutions include regular updates, proactive monitoring, 
                      and rapid response protocols to ensure your home remains secure against evolving threats.
                    </p>
                    <Link to="/contact" className="text-red-600 font-medium hover:underline inline-flex items-center">
                      Request a property assessment <span className="ml-2">→</span>
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
      
      {/* Approach Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Elite Security Approach</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We understand the unique security requirements of high net worth individuals and provide discreet, thorough protection.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Discreet Assessment</h3>
                <p className="text-gray-600">
                  Our security experts conduct thorough yet unobtrusive assessments of your properties and digital assets,
                  identifying vulnerabilities without disrupting your lifestyle.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Implementation</h3>
                <p className="text-gray-600">
                  We develop and implement tailored security solutions that balance robust protection with usability,
                  ensuring your digital systems remain both secure and convenient.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Protection</h3>
                <p className="text-gray-600">
                  Our team provides ongoing monitoring, regular security updates, and rapid response to emerging threats,
                  ensuring your protection evolves with the changing threat landscape.
                </p>
              </div>
            </div>
          </div>
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
    </div>
  );
} 