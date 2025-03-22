import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4 border-b border-red-600 pb-2 inline-block">
              IT Rapid Support
            </h3>
            <p className="text-slate-400 mb-6">
              Your trusted partner in enterprise IT security. Protecting businesses in the digital age.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 border-b border-red-600 pb-2 inline-block">Services & Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Managed Security</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Threat Detection</Link></li>
              <li><Link to="/solutions" className="text-slate-400 hover:text-white transition-colors">Industry Solutions</Link></li>
              <li><Link to="/security-assessment" className="text-slate-400 hover:text-white transition-colors">Security Assessment</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 border-b border-red-600 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white transition-colors">Resource Center</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 border-b border-red-600 pb-2 inline-block">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400 hover:text-white transition-colors group">
                <Mail className="h-5 w-5 mr-2 group-hover:text-red-500 transition-colors" />
                info@itrapidsupport.com
              </li>
              <li className="flex items-center text-slate-400 hover:text-white transition-colors group">
                <Phone className="h-5 w-5 mr-2 group-hover:text-red-500 transition-colors" />
                +1-289-582-9930
              </li>
              <li className="flex items-center text-slate-400 hover:text-white transition-colors group">
                <MapPin className="h-5 w-5 mr-2 group-hover:text-red-500 transition-colors" />
                7810 Keele St, Vaughan, ON L4K4G7
              </li>
              <li className="mt-4">
                <Link to="/contact" className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors inline-block font-medium shadow-md hover:shadow-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 <span className="text-white">IT Rapid Support</span>. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline">Terms of Service</Link>
              <Link to="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline">Cookie Policy</Link>
              <Link to="/accessibility" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 