import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '../components/SEO';
import { locations } from '../data/locations';

const highlights = [
  {
    title: 'Managed IT & 24/7 Helpdesk',
    description:
      'Round-the-clock helpdesk for your team via phone, email, and chat, with proactive monitoring that catches issues before they cause downtime — anywhere in the GTA.',
  },
  {
    title: 'Cybersecurity & MDR',
    description:
      'Multi-layered protection for GTA organizations: managed firewalls, endpoint protection, email security, MFA, and 24/7 managed detection and response.',
  },
  {
    title: 'Cloud & Microsoft 365',
    description:
      'Cloud migration, Microsoft 365, and Azure/AWS management to keep your team secure, mobile, and productive across every GTA office and remote location.',
  },
];

const faqs = [
  {
    question: 'Which areas of the GTA do you provide IT support in?',
    answer:
      'We provide managed IT support and cybersecurity services across the entire Greater Toronto Area from our Vaughan headquarters — including Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington, Hamilton, and the surrounding York, Peel, Halton, and Durham regions. Remote support is immediate, and certified technicians provide scheduled or emergency on-site support GTA-wide.',
  },
  {
    question: 'What IT support services do you offer GTA businesses?',
    answer:
      'We act as a complete IT department for GTA businesses: 24/7 helpdesk, proactive monitoring and maintenance, managed cybersecurity with detection and response, cloud and Microsoft 365 management, network management, data backup and disaster recovery, vCIO strategy, and on-site support when an issue is best resolved in person.',
  },
  {
    question: 'How fast can you respond to IT issues in the GTA?',
    answer:
      'Remote support starts immediately — our 24/7 helpdesk answers around the clock, every day of the year. For issues that need hands-on work, we dispatch certified technicians on-site across the GTA, with our Vaughan head office centrally located to reach Toronto, York Region, Peel, and beyond quickly.',
  },
  {
    question: 'Do you support businesses with multiple offices across the GTA?',
    answer:
      'Yes. Many GTA businesses operate from more than one location. We manage multi-site networks, standardize security across offices, and support hybrid and remote staff, so every location gets the same level of IT support and protection.',
  },
];

const GTALanding: React.FC = () => {
  const url = '/it-support/gta';

  const schema = [
    generateLocalBusinessSchema('vaughan'),
    generateServiceSchema({
      name: 'IT Support Services GTA',
      description:
        'Managed IT support services for businesses across the Greater Toronto Area: 24/7 helpdesk, cybersecurity, cloud, and on-site support.',
      url,
      areaServed: 'Greater Toronto Area, Ontario',
      serviceType: 'Managed IT Services',
    }),
    generateFAQSchema(faqs),
  ];

  return (
    <PageTransition>
      <SEO
        title="IT Support Services GTA | 24/7 Helpdesk & On-Site Support"
        description="24/7 helpdesk, managed IT, and cybersecurity with on-site support across the entire Greater Toronto Area. Talk to a GTA IT team now — call (289) 582-9930."
        keywords="IT support services GTA, IT support GTA, managed IT services GTA, GTA IT company, IT services Greater Toronto Area, cybersecurity services GTA"
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'IT Support', url: '/services/it-support' },
          { name: 'GTA', url },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-red-200 mr-2" />
              <span className="text-red-200 text-sm font-medium">Serving the entire Greater Toronto Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              IT Support Services GTA
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              IT Rapid Support delivers enterprise-grade managed IT services and cybersecurity to businesses across the
              Greater Toronto Area. From 24/7 helpdesk and proactive monitoring to managed detection and response,
              cloud, and on-site support, our{' '}
              <Link to="/services/it-outsourcing-services" className="text-red-200 hover:text-white underline underline-offset-4">
                IT outsourcing services
              </Link>{' '}
              give you a complete IT department, while our{' '}
              <Link to="/services/microsoft-365-managed-services" className="text-red-200 hover:text-white underline underline-offset-4">
                Microsoft 365 managed services
              </Link>{' '}
              keep cloud users supported. For organizations with internal IT, our{' '}
              <Link to="/services/co-managed-it-services" className="text-red-200 hover:text-white underline underline-offset-4">
                co-managed IT services
              </Link>{' '}
              add 24/7 coverage and specialist capacity — from our Vaughan headquarters to every corner of the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+12895829930"
                className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
              >
                <Phone className="mr-2 h-5 w-5" /> (289) 582-9930
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Managed IT Services for GTA Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Managed IT, cybersecurity, and 24/7 support built around the needs of Greater Toronto Area organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {highlights.map((h) => (
              <div key={h.title} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                  <CheckCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{h.title}</h3>
                <p className="text-gray-600">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cities served */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Local, On-Demand Support</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Support Across the GTA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Fast remote support everywhere, plus scheduled and emergency on-site service in every GTA community we
            serve:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/it-support/${loc.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm hover:text-red-600 hover:shadow transition-all"
              >
                {loc.city}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">GTA IT Support FAQs</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need reliable IT support in the GTA?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Talk to our team about managed IT, cybersecurity, and 24/7 support for your Greater Toronto Area business.
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
    </PageTransition>
  );
};

export default GTALanding;
