import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold text-base mb-3">{t('footer.company')}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-3 pt-1">
              <a href="https://linkedin.com/itrapidsupport" target="_blank" rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-md hover:bg-slate-700 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/itrapidsupport" target="_blank" rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-md hover:bg-slate-700 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com/itrapidsupport" target="_blank" rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-md hover:bg-slate-700 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick links - Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services/managed-security" className="text-slate-300 hover:text-white text-sm block">{t('footer.managedSecurity')}</Link></li>
              <li><Link to="/services/threat-detection" className="text-slate-300 hover:text-white text-sm block">{t('footer.threatDetection')}</Link></li>
              <li><Link to="/services/cloud-security" className="text-slate-300 hover:text-white text-sm block">{t('footer.cloudSecurity')}</Link></li>
              <li><Link to="/services/it-support" className="text-slate-300 hover:text-white text-sm block">{t('footer.itSupport')}</Link></li>
            </ul>
          </div>

          {/* Quick links - Solutions & Company */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">{t('footer.solutions')}</h3>
            <ul className="space-y-2.5">
              <li><Link to="/security-assessment" className="text-slate-300 hover:text-white text-sm block">{t('footer.securityEvaluation')}</Link></li>
              <li><Link to="/cyber-incident" className="text-slate-300 hover:text-white text-sm block">{t('footer.breachServices')}</Link></li>
              <li><Link to="/partners" className="text-slate-300 hover:text-white text-sm block">{t('footer.technologyPartners')}</Link></li>
              <li><Link to="/support" className="text-slate-300 hover:text-white text-sm block">{t('footer.technicalSupport')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@itrapidsupport.com" className="flex items-center group">
                  <Mail className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 hover:text-white text-sm">{t('footer.email')}</span>
                </a>
              </li>
              <li>
                <a href="tel:+12895829930" className="flex items-center group">
                  <Phone className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 hover:text-white text-sm">{t('footer.phone')}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{t('footer.address')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section - Copyright and legal */}
        <div className="pt-5 border-t border-slate-800">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-slate-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex space-x-6 mt-3 sm:mt-0">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm">{t('footer.privacy')}</Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm">{t('footer.terms')}</Link>
              <Link to="/accessibility" className="text-slate-400 hover:text-white text-sm">{t('footer.accessibility')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 