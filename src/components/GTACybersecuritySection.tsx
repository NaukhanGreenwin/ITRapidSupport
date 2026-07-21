import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Mail, AlertTriangle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const GTACybersecuritySection: React.FC = () => {
  return (
    <div className="py-10 bg-slate-50">
      <AnimateOnScroll variant="fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Cybersecurity Services for the GTA</h2>
            <p className="text-gray-700 mb-3">
              IT Rapid Support delivers <Link to="/services/managed-security/" className="text-red-600 hover:text-red-700 font-medium">managed cybersecurity services</Link> for
              businesses in Toronto, Vaughan, Mississauga, Brampton, and across the Greater Toronto Area. Our security team handles
              managed firewalls, endpoint protection, multi-factor authentication, and <Link to="/services/threat-detection/" className="text-red-600 hover:text-red-700 font-medium">24/7 threat detection and response (MDR)</Link> —
              so threats get caught and contained around the clock, not the next business day.
            </p>
            <p className="text-gray-700 mb-6">
              That includes hardening the attack surfaces GTA businesses get hit through most: email security with SPF, DKIM, and DMARC
              enforcement, monitored backups you can actually restore from, and security awareness for your staff. Already dealing with an
              incident? Our <Link to="/cyber-incident/" className="text-red-600 hover:text-red-700 font-medium">cyber incident response</Link> line
              is available 24/7 — new clients welcome. Not sure what your business needs? Start with our plain-language guide
              to <Link to="/resources/cybersecurity-services-toronto-guide/" className="text-red-600 hover:text-red-700 font-medium">cybersecurity services in Toronto</Link>.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <Shield className="h-6 w-6 text-red-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Managed Security</p>
              <p className="text-xs text-gray-600">Firewalls, endpoint, MFA</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <Eye className="h-6 w-6 text-red-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">24/7 MDR</p>
              <p className="text-xs text-gray-600">Threat detection & response</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <Mail className="h-6 w-6 text-red-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Email Security</p>
              <p className="text-xs text-gray-600">SPF, DKIM & DMARC</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <AlertTriangle className="h-6 w-6 text-red-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Incident Response</p>
              <p className="text-xs text-gray-600">24/7, new clients welcome</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default GTACybersecuritySection;
