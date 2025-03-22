import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ChevronDown, ChevronUp } from 'lucide-react';

export default function Footer() {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    services: false,
    company: false,
    contact: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Company info section - always visible */}
        <div className="mb-8">
          <h3 className="text-white font-bold text-xl mb-4 border-b border-red-600 pb-2 inline-block">
            IT Rapid Support
          </h3>
          <p className="text-slate-400 mb-6">
            Your trusted partner in enterprise IT security. Protecting businesses in the digital age.
          </p>
          <div className="flex space-x-5 mb-6">
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
        
        {/* Collapsible sections for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12 mb-8">
          {/* Services Section */}
          <div className="border-b border-slate-800 md:border-0 py-2 md:py-0">
            <button 
              onClick={() => toggleSection('services')}
              className="flex items-center justify-between w-full text-left md:hidden py-3"
              aria-expanded={openSections.services}
            >
              <h3 className="text-white font-bold">Services & Solutions</h3>
              {openSections.services ? 
                <ChevronUp className="h-5 w-5 text-slate-400" /> : 
                <ChevronDown className="h-5 w-5 text-slate-400" />
              }
            </button>
            <h3 className="text-white font-bold mb-4 border-b border-red-600 pb-2 inline-block hidden md:block">Services & Solutions</h3>
            
            <ul className={`space-y-3 mt-2 ${openSections.services ? 'block' : 'hidden'} md:block`}>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">Managed Security</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">Threat Detection</Link></li>
              <li><Link to="/solutions" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">Industry Solutions</Link></li>
              <li><Link to="/security-assessment" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">Security Assessment</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">Case Studies</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="border-b border-slate-800 md:border-0 py-2 md:py-0">
            <button 
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full text-left md:hidden py-3"
              aria-expanded={openSections.company}
            >
              <h3 className="text-white font-bold">Company</h3>
              {openSections.company ? 
                <ChevronUp className="h-5 w-5 text-slate-400" /> : 
                <ChevronDown className="h-5 w-5 text-slate-400" />
              }
            </button>
            <h3 className="text-white font-bold mb-4 border-b border-red-600 pb-2 inline-block hidden md:block">Company</h3>
            
            <ul className={`space-y-3 mt-2 ${openSections.company ? 'block' : 'hidden'} md:block`}>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">Careers</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">Blog</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">Resource Center</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors block py-2 md:py-1">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="py-2 md:py-0">
            <button 
              onClick={() => toggleSection('contact')}
              className="flex items-center justify-between w-full text-left md:hidden py-3"
              aria-expanded={openSections.contact}
            >
              <h3 className="text-white font-bold">Contact</h3>
              {openSections.contact ? 
                <ChevronUp className="h-5 w-5 text-slate-400" /> : 
                <ChevronDown className="h-5 w-5 text-slate-400" />
              }
            </button>
            <h3 className="text-white font-bold mb-4 border-b border-red-600 pb-2 inline-block hidden md:block">Contact</h3>
            
            <ul className={`space-y-3 mt-2 ${openSections.contact ? 'block' : 'hidden'} md:block`}>
              <li>
                <a href="mailto:info@itrapidsupport.com" className="flex items-center text-slate-400 hover:text-white transition-colors group py-2 md:py-1">
                  <Mail className="h-5 w-5 mr-3 group-hover:text-red-500 transition-colors" />
                  <span>info@itrapidsupport.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+12895829930" className="flex items-center text-slate-400 hover:text-white transition-colors group py-2 md:py-1">
                  <Phone className="h-5 w-5 mr-3 group-hover:text-red-500 transition-colors" />
                  <span>+1-289-582-9930</span>
                </a>
              </li>
              <li className="flex items-start text-slate-400 py-2 md:py-1">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-slate-400" />
                <span>7810 Keele St, Vaughan, ON L4K4G7</span>
              </li>
              <li className="mt-4 mb-6">
                <Link to="/contact" className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition-colors inline-block font-medium shadow-md hover:shadow-lg w-full md:w-auto text-center">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-900 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm mb-4 sm:mb-0 text-center sm:text-left">
              © 2025 <span className="text-white">IT Rapid Support</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline py-2 px-1">Privacy</Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline py-2 px-1">Terms</Link>
              <Link to="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline py-2 px-1">Cookies</Link>
              <Link to="/accessibility" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline py-2 px-1">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 