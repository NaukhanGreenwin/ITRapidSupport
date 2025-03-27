import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Check, CheckCircle, HeadphonesIcon, Laptop, Server, ChevronRight } from 'lucide-react';

const ITSupport = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
                <span className="text-red-200 text-sm font-medium">Support Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                24/7 IT Support Services
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Around-the-clock IT support and monitoring to ensure your systems are always operational, with rapid response to any issues that arise.
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="IT Support" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive IT Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our 24/7 IT support services ensure your business operations continue without interruption through proactive monitoring and rapid response.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Service 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <HeadphonesIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Helpdesk Support</h3>
              <p className="text-gray-600 mb-6">
                Round-the-clock technical support for your users, available via phone, email, and chat to resolve issues quickly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Multi-channel support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">15-minute response SLA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Skilled IT specialists</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Server className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Continuous monitoring of servers, networks, and systems to detect and prevent issues before they impact your business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Real-time alerting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Performance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Proactive maintenance</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Laptop className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Endpoint Management</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive management of all your desktop, laptop, and mobile devices to ensure security and optimal performance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Software deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Patch management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Device security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Support Tiers */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Support Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Tiers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Flexible support options designed to match your organization's unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-slate-400">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Support</h3>
              <p className="text-gray-500 text-sm mb-6">Ideal for small businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Basic</span>
                <span className="text-gray-600 ml-2">plan</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">8am-6pm helpdesk support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Basic infrastructure monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Monthly maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">4-hour response SLA</span>
                </li>
              </ul>
              <Link 
                to="/contact?plan=standard" 
                className="block w-full text-center bg-slate-100 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-red-600 transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Support</h3>
              <p className="text-gray-500 text-sm mb-6">Ideal for medium businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Standard</span>
                <span className="text-gray-600 ml-2">plan</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">24/7 helpdesk support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Advanced monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Weekly maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">1-hour response SLA</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Quarterly security audits</span>
                </li>
              </ul>
              <Link 
                to="/contact?plan=premium" 
                className="block w-full text-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-slate-800">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Support</h3>
              <p className="text-gray-500 text-sm mb-6">Ideal for large organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
                <span className="text-gray-600 ml-2">solution</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">24/7 dedicated support team</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Enterprise-grade monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Continuous maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">15-minute response SLA</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">On-site support available</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Monthly security audits</span>
                </li>
              </ul>
              <Link 
                to="/contact?plan=enterprise" 
                className="block w-full text-center bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition-colors font-medium"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Support Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our streamlined support process ensures fast resolution for your IT issues.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-6 relative z-10">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div className="absolute top-8 left-full w-full h-1 bg-red-200 hidden md:block" style={{ width: 'calc(100% - 4rem)' }}></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Report Issue</h3>
              <p className="text-gray-600">
                Contact our helpdesk via phone, email, or our online portal to report an IT issue.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-6 relative z-10">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div className="absolute top-8 left-full w-full h-1 bg-red-200 hidden md:block" style={{ width: 'calc(100% - 4rem)' }}></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Triage</h3>
              <p className="text-gray-600">
                Our support team assesses the issue, assigns priority, and routes it to the appropriate specialist.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-6 relative z-10">
                <span className="text-2xl font-bold">3</span>
              </div>
              <div className="absolute top-8 left-full w-full h-1 bg-red-200 hidden md:block" style={{ width: 'calc(100% - 4rem)' }}></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resolution</h3>
              <p className="text-gray-600">
                Technical specialists diagnose and resolve the issue, keeping you informed throughout the process.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-up</h3>
              <p className="text-gray-600">
                We verify the solution and document the issue to prevent recurrence and improve our service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Client Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from organizations that rely on our IT support services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Client" 
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Michael Reynolds</h3>
                  <p className="text-gray-600 text-sm">CIO, Global Financial</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The 24/7 support team has been a game-changer for our operations. Response times are lightning-fast, and their proactive monitoring has prevented several potential outages."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Client" 
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm">IT Director, HealthTech</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We needed support that understood healthcare compliance requirements. IT Rapid Support not only resolved our technical issues but ensured we remained compliant throughout."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/46.jpg" 
                    alt="Client" 
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">David Chen</h3>
                  <p className="text-gray-600 text-sm">CEO, Retail Chain</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "After experiencing constant IT issues with our previous provider, switching to IT Rapid Support was a relief. Their 24/7 monitoring caught several potential problems before they impacted our stores."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for reliable IT support?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss how our 24/7 IT support services can help keep your business running smoothly.
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

export default ITSupport; 