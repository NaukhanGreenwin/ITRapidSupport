import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, { generateLocalBusinessSchema } from '../components/SEO';

const LegacyBookOnline: React.FC = () => (
  <PageTransition>
    <SEO
      title="Book an IT Support Appointment"
      description="Book an IT support appointment with IT Rapid Support in Vaughan. For urgent support, call (289) 582-9930 or contact our team online."
      keywords="book IT support appointment Vaughan, contact IT Rapid Support, IT support booking GTA"
      canonicalUrl="/contact"
      schema={generateLocalBusinessSchema('vaughan')}
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]}
    />

    <div className="pt-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-600/20 mb-6">
          <Calendar className="h-7 w-7 text-red-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book an IT Support Appointment</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          This booking link now routes through our contact desk so the right IT support person can respond quickly.
        </p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href="tel:+12895829930"
          className="flex items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-4 text-white font-semibold hover:bg-red-700 transition-colors"
        >
          <Phone className="h-5 w-5" />
          Call (289) 582-9930
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-3 rounded-lg border border-slate-300 px-6 py-4 text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
        >
          <Mail className="h-5 w-5" />
          Contact Our Team
        </Link>
      </div>
      <p className="mt-8 text-center text-slate-600">
        IT Rapid Support, 7810 Keele St, Vaughan ON. 24/7 managed IT support and cybersecurity for Toronto and the GTA.
      </p>
    </div>
  </PageTransition>
);

export default LegacyBookOnline;
