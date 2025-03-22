import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-3 border-b border-red-600 pb-2 inline-block">
              IT Rapid Support
            </h3>
            <p className="text-slate-400 mb-4">
              Your trusted partner in enterprise IT security. Protecting businesses in the digital age.
            </p>
            <div className="flex space-x-4 mb-3">
              <a href="https://www.linkedin.com/company/itrapidsupport" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-3 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/itrapidsupport" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-3 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com/itrapidsupport" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-3 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-3 border-b border-red-600 pb-2 inline-block">Services & Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors block py-1">Managed Security</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors block py-1">Threat Detection</Link></li>
              <li><Link to="/solutions" className="text-slate-400 hover:text-white transition-colors block py-1">Industry Solutions</Link></li>
              <li><Link to="/security-assessment" className="text-slate-400 hover:text-white transition-colors block py-1">Security Assessment</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors block py-1">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 border-b border-red-600 pb-2 inline-block">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors block py-1">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors block py-1">Careers</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white transition-colors block py-1">Resource Center</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors block py-1">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 border-b border-red-600 pb-2 inline-block">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@itrapidsupport.com" className="flex items-center text-slate-400 hover:text-white transition-colors group py-1">
                  <Mail className="h-5 w-5 mr-2 group-hover:text-red-500 transition-colors" />
                  <span>info@itrapidsupport.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+12895829930" className="flex items-center text-slate-400 hover:text-white transition-colors group py-1">
                  <Phone className="h-5 w-5 mr-2 group-hover:text-red-500 transition-colors" />
                  <span>+1-289-582-9930</span>
                </a>
              </li>
              <li className="flex items-start text-slate-400 hover:text-white transition-colors group py-1">
                <MapPin className="h-5 w-5 mr-2 mt-1 group-hover:text-red-500 transition-colors" />
                <span>7810 Keele St, Vaughan, ON L4K4G7</span>
              </li>
              <li className="mt-3">
                <Link to="/contact" className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors inline-block font-medium shadow-md hover:shadow-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-slate-400 text-sm mb-3 sm:mb-0 text-center sm:text-left">
              © 2025 <span className="text-white">IT Rapid Support</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline py-1">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline py-1">Terms of Service</Link>
              <Link to="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline py-1">Cookie Policy</Link>
              <Link to="/accessibility" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline py-1">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 