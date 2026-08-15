import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { locations } from '../data/locations';
import { industries } from '../data/industries';

function FooterAccordionSection({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={className}>
      <h3 className="text-white font-semibold text-base">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between text-left group"
        >
          <span>{title}</span>
          <ChevronDown
            className={`h-4 w-4 text-slate-400 group-hover:text-white transition-transform duration-200 flex-shrink-0 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      {/* Links stay in the server-rendered DOM when collapsed; hidden only toggles visibility */}
      <div id={id} hidden={!open} className="mt-4">
        {children}
      </div>
    </div>
  );
}

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
                Enterprise-grade cybersecurity and IT management solutions for Canadian businesses.
              </p>
            </div>
          </div>

          {/* Quick links - Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services/managed-security/" className="text-slate-300 hover:text-white text-sm block">Managed Security</Link></li>
              <li><Link to="/services/threat-detection/" className="text-slate-300 hover:text-white text-sm block">Threat Detection</Link></li>
              <li><Link to="/services/cloud-security/" className="text-slate-300 hover:text-white text-sm block">Cloud Security</Link></li>
              <li><Link to="/services/it-support/" className="text-slate-300 hover:text-white text-sm block">24/7 IT Support</Link></li>
              <li><Link to="/services/high-net-worth/" className="text-slate-300 hover:text-white text-sm block">Elite Security</Link></li>
              <li><Link to="/services/canada-wide-managed-it/" className="text-slate-300 hover:text-white text-sm block">Canada-Wide Managed IT</Link></li>
              <li><Link to="/services/it-outsourcing-services/" className="text-slate-300 hover:text-white text-sm block">IT Outsourcing Services</Link></li>
              <li><Link to="/services/microsoft-365-managed-services/" className="text-slate-300 hover:text-white text-sm block">Microsoft 365 Managed Services</Link></li>
              <li><Link to="/services/co-managed-it-services/" className="text-slate-300 hover:text-white text-sm block">Co-Managed IT Services</Link></li>
              <li><Link to="/services/business-continuity-disaster-recovery/" className="text-slate-300 hover:text-white text-sm block">Business Continuity &amp; Disaster Recovery</Link></li>
              <li><Link to="/services/network-security-services/" className="text-slate-300 hover:text-white text-sm block">Network Security Services</Link></li>
              <li><Link to="/services/it-helpdesk/" className="text-slate-300 hover:text-white text-sm block">24/7 IT Help Desk</Link></li>
              <li><Link to="/services/network-management/" className="text-slate-300 hover:text-white text-sm block">Network Management</Link></li>
              <li><Link to="/services/microsoft-365-azure-migration/" className="text-slate-300 hover:text-white text-sm block">Microsoft 365 &amp; Azure Migration</Link></li>
              <li><Link to="/services/vcio-it-strategy/" className="text-slate-300 hover:text-white text-sm block">vCIO &amp; IT Strategy</Link></li>
              <li><Link to="/services/emergency-it-services/" className="text-slate-300 hover:text-white text-sm block">Emergency IT Services</Link></li>
              <li><Link to="/tools/email-spoof-check/" className="text-slate-300 hover:text-white text-sm block">Free Email Spoofing Check</Link></li>
            </ul>
          </div>

          {/* Quick links - Solutions & Company */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              <li><Link to="/security-assessment/" className="text-slate-300 hover:text-white text-sm block">Security Evaluation</Link></li>
              <li><Link to="/it-risk-calculator/" className="text-slate-300 hover:text-white text-sm block">Free IT Risk Calculator</Link></li>
              <li><Link to="/managed-it-plans/" className="text-slate-300 hover:text-white text-sm block">Managed IT Plans</Link></li>
              <li><Link to="/cyber-incident/" className="text-slate-300 hover:text-white text-sm block">Breach Services</Link></li>
              <li><Link to="/solutions/" className="text-slate-300 hover:text-white text-sm block">Industry Solutions</Link></li>
              <li><Link to="/faq/" className="text-slate-300 hover:text-white text-sm block">IT Support FAQ</Link></li>
              <li><Link to="/resources/" className="text-slate-300 hover:text-white text-sm block">Guides &amp; Resources</Link></li>
              <li><Link to="/case-studies/" className="text-slate-300 hover:text-white text-sm block">Client Case Studies</Link></li>
              <li><Link to="/partners/" className="text-slate-300 hover:text-white text-sm block">Technology Partners</Link></li>
              <li><Link to="/support/" className="text-slate-300 hover:text-white text-sm block">Technical Support</Link></li>
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
        <FooterAccordionSection
          id="footer-locations"
          title="IT Support by Location"
          className="border-t border-gray-800 pt-8"
        >
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-2.5">
            <li>
              <Link to="/it-support/gta/" className="text-slate-400 hover:text-white text-sm block truncate">
                IT Support GTA
              </Link>
            </li>
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  to={`/it-support/${loc.slug}/`}
                  className="text-slate-400 hover:text-white text-sm block truncate"
                >
                  IT Support {loc.city}
                </Link>
              </li>
            ))}
          </ul>
        </FooterAccordionSection>

        {/* Industries */}
        <FooterAccordionSection
          id="footer-industries"
          title="IT Support by Industry"
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2.5">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <Link
                  to={`/industries/${ind.slug}/`}
                  className="text-slate-400 hover:text-white text-sm block truncate"
                >
                  IT for {ind.industry}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/services/cottage-it-support/"
                className="text-slate-400 hover:text-white text-sm block truncate"
              >
                IT for Cottages & Seasonal Properties
              </Link>
            </li>
            {/* Added 2026-08-15. The Starlink page is the deepest page in the
                cottage cluster and had only 6 inbound internal links against 134
                for every other member, because it was the one cluster page not
                carried by the sitewide footer. */}
            <li>
              <Link
                to="/services/starlink-installation-muskoka/"
                className="text-slate-400 hover:text-white text-sm block truncate"
              >
                Starlink Installation in Muskoka
              </Link>
            </li>
          </ul>
        </FooterAccordionSection>

        {/* Footer Links */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
              <Link to="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms/" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/accessibility/" className="hover:text-white transition-colors">Accessibility</Link>
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
