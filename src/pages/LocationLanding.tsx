import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, {
  generateLocalBusinessSchema,
  generateVancouverLocalBusinessSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '../components/SEO';
import { getLocation } from '../data/locations';
import NotFound from './NotFound';

interface LocationLandingProps {
  slug: string;
}

const LocationLanding: React.FC<LocationLandingProps> = ({ slug }) => {
  const data = getLocation(slug);

  if (!data) {
    return <NotFound />;
  }

  const url = `/it-support/${data.slug}`;
  const isVancouver = data.schemaLocation === 'vancouver';
  const phoneDisplay = data.phoneDisplay ?? '(289) 582-9930';
  const phoneHref = data.phoneHref ?? 'tel:+12895829930';

  const schema = [
    isVancouver ? generateVancouverLocalBusinessSchema() : generateLocalBusinessSchema(data.schemaLocation),
    generateServiceSchema({
      name: `Managed IT Services & IT Support in ${data.city}`,
      description: data.description,
      url,
      areaServed: `${data.city}, ${data.province ?? 'Ontario'}`,
      serviceType: 'Managed IT Services',
    }),
    generateFAQSchema(data.faqs),
  ];

  return (
    <PageTransition>
      <SEO
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'IT Support', url: '/services/it-support' },
          { name: data.city, url },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-red-200 mr-2" />
              <span className="text-red-200 text-sm font-medium">
                {data.heroEyebrow ?? `Serving ${data.city} & the GTA`}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {data.h1 ?? `IT Support & Managed IT Services in ${data.city}`}
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
              >
                <Phone className="mr-2 h-5 w-5" /> {phoneDisplay}
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
              IT Services for {data.city} Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {data.sectionIntro ?? `Managed IT, cybersecurity, and 24/7 support built around the needs of ${data.city} organizations.`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {data.highlights.map((h) => (
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

      {/* Areas served */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">{isVancouver ? 'Remote-First Support' : 'Local, On-Demand Support'}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {data.areaHeading ?? `Areas We Serve Around ${data.city}`}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {data.areasIntro ?? `Fast remote support and scheduled on-site service across ${data.city} and nearby communities.`}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {data.nearbyAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
          {data.officeAddress && (
            <div className="inline-flex items-start mt-8 px-5 py-4 bg-white rounded-xl shadow-sm text-left">
              <MapPin className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Vancouver office</p>
                <p className="text-sm text-gray-600">{data.officeAddress}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Local FAQ */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {data.city} IT Support FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {data.faqs.map((faq) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">
            Need reliable IT support in {data.city}?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            {data.ctaIntro ?? `Talk to our team about managed IT, cybersecurity, and 24/7 support for your ${data.city} business.`}
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

export default LocationLanding;
