import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, { generateLocalBusinessSchema } from '../components/SEO';
import { caseStudies } from '../data/caseStudies';

const CaseStudies: React.FC = () => {
  const url = '/case-studies';

  const schema = [
    generateLocalBusinessSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://itrapidsupport.com/case-studies/',
      name: 'IT Rapid Support Client Case Studies',
      description:
        'Real, documented managed IT and cybersecurity engagements for businesses in Vaughan, Mississauga, and across the Greater Toronto Area.',
      url: 'https://itrapidsupport.com/case-studies/',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: caseStudies.map((cs, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: cs.h1,
          url: `https://itrapidsupport.com/case-studies/${cs.slug}/`,
        })),
      },
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Client Case Studies: Real GTA Results"
        description="Real, documented case studies from IT Rapid Support: email security and DMARC enforcement, Microsoft 365 tenant cleanup, and email authentication."
        keywords="managed IT case studies Toronto, cybersecurity case study GTA, Microsoft 365 case study, DMARC case study, IT support results Vaughan"
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies/' },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <span className="text-red-200 text-sm font-medium">Client Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Real Work for Real GTA Businesses
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              These are documented engagements — named clients, the actual problems they brought
              us, and exactly what we did about them. No stock stories, no invented numbers.
            </p>
            <Link
              to="/contact/"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center font-medium"
            >
              Talk to Us About Your Environment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Case study cards */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}/`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-2 bg-red-600" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-red-600 font-medium mb-3">
                    <Briefcase className="h-4 w-4" />
                    {cs.industry}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {cs.h1}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {cs.client} · {cs.location}
                  </div>
                  <p className="text-gray-600 mb-6 flex-1">{cs.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.services.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-red-600 font-medium">
                    Read the case study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              Every case study on this page is published with the client’s knowledge and describes
              documented work. Client staff names are omitted for privacy.
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want results like these for your business?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Tell us what’s not working — email security, Microsoft 365, day-to-day support — and
            we’ll show you exactly how we’d fix it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact/"
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Request a Consultation
            </Link>
            <Link
              to="/services/"
              className="bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition-colors font-medium"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CaseStudies;
