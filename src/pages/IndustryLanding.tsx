import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, Building2, Phone, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '../components/SEO';
import { getIndustry } from '../data/industries';
import NotFound from './NotFound';

interface IndustryLandingProps {
  slug: string;
}

const IndustryLanding: React.FC<IndustryLandingProps> = ({ slug }) => {
  const data = getIndustry(slug);

  if (!data) {
    return <NotFound />;
  }

  const url = `/industries/${data.slug}`;

  const schema = [
    generateLocalBusinessSchema(),
    generateServiceSchema({
      name: `Managed IT Services for ${data.industry}`,
      description: data.description,
      url,
      areaServed: 'Greater Toronto Area, Ontario',
      serviceType: 'Managed IT Services',
    }),
    generateFAQSchema(data.faqs),
  ];

  return (
    <PageTransition>
      <SEO
        title={data.seoTitle ?? data.title}
        description={data.description}
        keywords={data.keywords}
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: data.industry, url },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <Building2 className="h-4 w-4 text-red-200 mr-2" />
              <span className="text-red-200 text-sm font-medium">Industry IT Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {data.title}
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
              IT Built for {data.industry}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Managed IT, cybersecurity, and 24/7 support tailored to the way {data.industry.toLowerCase()} actually work.
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

      {/* What we cover */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
            <ShieldCheck className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">What We Cover</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Focused on What Matters to {data.industry}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            The capabilities and protections that {data.industry.toLowerCase()} rely on, managed end to end.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Industry FAQ */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {data.industry} IT FAQs
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
            IT support built for {data.industry.toLowerCase()}.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Talk to our team about managed IT, cybersecurity, and 24/7 support tailored to your {data.industry.toLowerCase().replace(/s$/, '')} business.
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

export default IndustryLanding;
