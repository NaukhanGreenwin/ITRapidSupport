import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { locations } from '../data/locations';
import { industries } from '../data/industries';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold text-base mb-3">IT Rapid Support</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Enterprise-grade cybersecurity and IT management solutions for Ontario businesses.
              </p>
            </div>
          </div>

          {/* Quick links - Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services/managed-security" className="text-slate-300 hover:text-white text-sm block">Managed Security</Link></li>
              <li><Link to="/services/threat-detection" className="text-slate-300 hover:text-white text-sm block">Threat Detection</Link></li>
              <li><Link to="/services/cloud-security" className="text-slate-300 hover:text-white text-sm block">Cloud Security</Link></li>
              <li><Link to="/services/it-support" className="text-slate-300 hover:text-white text-sm block">24/7 IT Support</Link></li>
              <li><Link to="/services/high-net-worth" className="text-slate-300 hover:text-white text-sm block">Elite Security</Link></li>
              <li><Link to="/services/it-helpdesk" className="text-slate-300 hover:text-white text-sm block">24/7 IT Help Desk</Link></li>
              <li><Link to="/services/network-management" className="text-slate-300 hover:text-white text-sm block">Network Management</Link></li>
              <li><Link to="/services/microsoft-365-azure-migration" className="text-slate-300 hover:text-white text-sm block">Microsoft 365 &amp; Azure Migration</Link></li>
              <li><Link to="/services/vcio-it-strategy" className="text-slate-300 hover:text-white text-sm block">vCIO &amp; IT Strategy</Link></li>
            </ul>
          </div>

          {/* Quick links - Solutions & Company */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              <li><Link to="/security-assessment" className="text-slate-300 hover:text-white text-sm block">Security Evaluation</Link></li>
              <li><Link to="/it-risk-calculator" className="text-slate-300 hover:text-white text-sm block">Free IT Risk Calculator</Link></li>
              <li><Link to="/managed-it-plans" className="text-slate-300 hover:text-white text-sm block">Managed IT Plans</Link></li>
              <li><Link to="/cyber-incident" className="text-slate-300 hover:text-white text-sm block">Breach Services</Link></li>
              <li><Link to="/partners" className="text-slate-300 hover:text-white text-sm block">Technology Partners</Link></li>
              <li><Link to="/support" className="text-slate-300 hover:text-white text-sm block">Technical Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@itrapidsupport.com" className="flex items-center group">
                  <Mail className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 hover:text-white text-sm">info@itrapidsupport.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+12895829930" className="flex items-center group">
                  <Phone className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 hover:text-white text-sm">+1-289-582-9930</span>
                </a>
              </li>
              <li>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">7810 Keele St,<br />Vaughan, ON</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-white font-semibold text-base mb-4">IT Support by Location</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  to={`/it-support/${loc.slug}`}
                  className="text-slate-300 hover:text-white text-sm"
                >
                  IT Support {loc.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <h3 className="text-white font-semibold text-base mb-4">IT Support by Industry</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="text-slate-300 hover:text-white text-sm"
                >
                  IT for {ind.industry}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} IT Rapid Support. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 