import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, CheckCircle, ChevronRight, MapPin, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, { generateLocalBusinessSchema } from '../components/SEO';
import { getCaseStudy } from '../data/caseStudies';
import NotFound from './NotFound';

interface CaseStudyDetailProps {
  slug: string;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ slug }) => {
  const cs = getCaseStudy(slug);

  if (!cs) {
    return <NotFound />;
  }

  const url = `/case-studies/${cs.slug}`;

  const schema = [
    generateLocalBusinessSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `https://itrapidsupport.com${url}/`,
      headline: cs.h1,
      description: cs.description,
      url: `https://itrapidsupport.com${url}/`,
      author: { '@id': 'https://itrapidsupport.com/#organization' },
      publisher: { '@id': 'https://itrapidsupport.com/#organization' },
      about: {
        '@type': 'Organization',
        name: cs.client,
        location: cs.location,
      },
      articleSection: 'Case Study',
      datePublished: '2026-07-19',
      dateModified: '2026-07-19',
      mainEntityOfPage: `https://itrapidsupport.com${url}/`,
    },
  ];

  return (
    <PageTransition>
      <SEO
        title={cs.title}
        description={cs.description}
        keywords={cs.keywords}
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies/' },
          { name: cs.client, url: `${url}/` },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <nav className="flex items-center text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
              <Link to="/case-studies/" className="hover:text-white transition-colors">
                Case Studies
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-slate-300">{cs.client}</span>
            </nav>
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <span className="text-red-200 text-sm font-medium">Client Case Study</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{cs.h1}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-300">
              <span className="inline-flex items-center">
                <Briefcase className="h-4 w-4 mr-2 text-red-400" />
                {cs.industry}
              </span>
              <span className="inline-flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-red-400" />
                {cs.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* At a glance */}
          <div className="bg-slate-50 rounded-xl p-8 mb-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Client</div>
                <div className="text-gray-900 font-semibold">{cs.client}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Industry</div>
                <div className="text-gray-900 font-semibold">{cs.industry}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Location</div>
                <div className="text-gray-900 font-semibold">{cs.location}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Services</div>
                <div className="text-gray-900 font-semibold">{cs.services.join(', ')}</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
          {cs.challenge.map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed mb-8">
              {p}
            </p>
          ))}

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What We Did</h2>
          <ul className="space-y-4 mb-12">
            {cs.actions.map((a, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-lg leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Result</h2>
          <div className="bg-slate-50 border-l-4 border-red-600 rounded-r-xl p-8 mb-12">
            <div className="flex items-start">
              <ShieldCheck className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg leading-relaxed">{cs.result}</p>
            </div>
          </div>

          {/* Related links */}
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Services & Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {cs.related.map((r) => (
                <Link
                  key={r.href}
                  to={r.href}
                  className="group bg-slate-50 rounded-lg p-5 hover:bg-slate-100 transition-colors"
                >
                  <span className="text-gray-900 font-medium group-hover:text-red-600 transition-colors">
                    {r.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-red-600 mt-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Facing something similar in your business?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            We handle engagements like this every week for businesses across the GTA — from email
            security audits to full Microsoft 365 management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact/"
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Request a Consultation
            </Link>
            <Link
              to="/case-studies/"
              className="bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition-colors font-medium"
            >
              More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CaseStudyDetail;
