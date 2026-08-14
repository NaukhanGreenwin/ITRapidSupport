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
import { getLocation, locations } from '../data/locations';
import { getCityGuides } from '../data/guideLinks';
import RelatedGuides from '../components/RelatedGuides';
import NotFound from './NotFound';

interface LocationLandingProps {
  slug: string;
}

// Section paragraphs in locations.ts may carry `[text](/path)` links so city
// pages can link in copy without every sentence being hardcoded in JSX. Plain
// paragraphs are returned untouched.
const renderInlineLinks = (text: string): React.ReactNode => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    return href.startsWith('/') ? (
      <Link key={i} to={href} className="text-red-600 hover:text-red-700 font-medium">{label}</Link>
    ) : (
      <a key={i} href={href} className="text-red-600 hover:text-red-700 font-medium">{label}</a>
    );
  });
};

const LocationLanding: React.FC<LocationLandingProps> = ({ slug }) => {
  const data = getLocation(slug);

  if (!data) {
    return <NotFound />;
  }

  const url = `/it-support/${data.slug}`;
  const isVancouver = data.schemaLocation === 'vancouver';
  const phoneDisplay = data.phoneDisplay ?? '(289) 582-9930';
  const phoneHref = data.phoneHref ?? 'tel:+12895829930';

  // Rotate through the GTA city list so every city page receives keyword
  // anchors from six sibling pages (striking-distance "managed it services
  // {city}" queries). Vancouver stays out of the GTA link wheel.
  //
  // The blind rotation alone gave every city the same ~6 inbound links, which is
  // why Mississauga and Brampton sat level with tier-3 pages. GEO_NEIGHBOURS
  // pins the genuinely adjacent cities to the front of each list, so the Peel
  // corridor links to itself the way a reader would expect. It is real
  // geography, not a boost — Mississauga and Brampton border or sit one city
  // away from every page listed here.
  // Canonical entity URLs for areaServed. Verified against the Wikidata API on
  // 2026-08-07: Q50816 "Mississauga, city in Ontario, Canada", Q44198
  // "Brampton, city in Ontario, Canada". Do not add an entry here without
  // checking the QID actually resolves to the Ontario municipality.
  const CITY_ENTITIES: Record<string, string[]> = {
    mississauga: [
      'https://en.wikipedia.org/wiki/Mississauga',
      'https://www.wikidata.org/wiki/Q50816',
    ],
    brampton: [
      'https://en.wikipedia.org/wiki/Brampton',
      'https://www.wikidata.org/wiki/Q44198',
    ],
  };

  const GEO_NEIGHBOURS: Record<string, string[]> = {
    mississauga: ['brampton', 'oakville', 'etobicoke', 'milton', 'toronto'],
    brampton: ['mississauga', 'caledon', 'georgetown', 'vaughan', 'milton'],
    toronto: ['etobicoke', 'north-york', 'scarborough', 'mississauga', 'vaughan'],
    etobicoke: ['mississauga', 'toronto', 'brampton', 'north-york'],
    oakville: ['mississauga', 'burlington', 'milton', 'brampton'],
    milton: ['mississauga', 'oakville', 'brampton', 'georgetown'],
    burlington: ['oakville', 'hamilton', 'mississauga', 'milton'],
    georgetown: ['brampton', 'milton', 'caledon', 'mississauga'],
    caledon: ['brampton', 'georgetown', 'vaughan', 'mississauga'],
    vaughan: ['woodbridge', 'concord', 'maple', 'brampton', 'north-york'],
    woodbridge: ['vaughan', 'brampton', 'concord', 'etobicoke'],
    'north-york': ['toronto', 'vaughan', 'etobicoke', 'markham'],
    hamilton: ['burlington', 'oakville', 'mississauga'],
  };

  const gtaCities = locations.filter((l) => l.slug !== 'vancouver');
  const selfIndex = gtaCities.findIndex((l) => l.slug === data.slug);
  const rotation =
    selfIndex === -1
      ? []
      : [...gtaCities.slice(selfIndex + 1), ...gtaCities.slice(0, selfIndex)];
  const neighbourSlugs = GEO_NEIGHBOURS[data.slug] ?? [];
  const bySlug = new Map(gtaCities.map((l) => [l.slug, l]));
  const pinned = neighbourSlugs
    .map((slug) => bySlug.get(slug))
    .filter((l): l is (typeof gtaCities)[number] => Boolean(l));
  const nearbyCityLinks = isVancouver || selfIndex === -1
    ? []
    : [...pinned, ...rotation.filter((l) => !neighbourSlugs.includes(l.slug))].slice(0, 6);

  // Vary the anchor by position instead of publishing six identical
  // "Managed IT Services {city}" exact-match phrases on all 30 city pages.
  const nearbyAnchorForms = [
    (city: string) => `Managed IT Services ${city}`,
    (city: string) => `IT Support ${city}`,
    (city: string) => `Managed IT in ${city}`,
    (city: string) => `IT Services in ${city}`,
  ];

  const schema = [
    isVancouver ? generateVancouverLocalBusinessSchema() : generateLocalBusinessSchema(data.schemaLocation),
    generateServiceSchema({
      name: `Managed IT Services & IT Support in ${data.city}`,
      description: data.description,
      url,
      areaServed: `${data.city}, ${data.province ?? 'Ontario'}`,
      areaServedPlace: {
        name: data.city,
        province: `${data.province ?? 'Ontario'}, Canada`,
        // sameAs only where the entity has been verified against Wikidata.
        // Everything else gets the structured City node without it rather than
        // a guessed identifier.
        sameAs: CITY_ENTITIES[data.slug],
      },
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
          { name: 'IT Support', url: '/services/it-support/' },
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
                to="/contact/"
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

      {/* Community pages point up at their parent city page rather than competing with it */}
      {data.parentCity && (
        <div className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-600 leading-relaxed">
              {data.city} is part of {data.parentCity.city}, and the same team covers both from our office at 7810 Keele
              St. For the full picture — what the day-to-day support looks like, which neighbourhoods and business
              districts we cover, cybersecurity, IT consulting, and how taking over from an existing provider works —
              see{' '}
              <Link
                to={`/it-support/${data.parentCity.slug}/`}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                {data.parentCity.anchor}
              </Link>
              .
            </p>
          </div>
        </div>
      )}

      {/* Optional in-depth local content */}
      {data.sections && data.sections.length > 0 && (
        <div className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {data.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-gray-600 leading-relaxed mb-4">
                    {renderInlineLinks(p)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Free self-assessment */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Check your IT risk before you call anyone
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most {data.city} businesses we speak to already suspect something is weak — they just cannot say which
            thing to fix first. Our free{' '}
            <Link to="/it-risk-calculator/" className="text-red-600 hover:text-red-700 font-medium">
              IT risk calculator
            </Link>{' '}
            answers that in a few minutes. It scores fifteen weighted security control areas — backups, multi-factor
            authentication, endpoint protection, admin accounts, patching, staff offboarding, email authentication,
            Microsoft 365 settings, encryption and more — then ranks your gaps by how much each one is costing your
            score and gives plain-English remediation for each.
          </p>
          <p className="text-gray-600 leading-relaxed">
            There is no sign-up, no email gate and no report to wait for: it runs entirely in your browser and nothing
            you enter is sent to us or stored anywhere. If you want a person to look at the results with you
            afterwards, call {phoneDisplay} or{' '}
            <Link to="/contact/" className="text-red-600 hover:text-red-700 font-medium">
              get in touch
            </Link>
            .
          </p>
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

      <RelatedGuides
        heading={`IT Guides for ${data.city} Businesses`}
        intro="Plain-language guides from our team on choosing and running managed IT."
        guides={getCityGuides(data.slug)}
      />

      {/* Managed IT in nearby cities */}
      {nearbyCityLinks.length > 0 && (
        <div className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Managed IT Services Near {data.city}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCityLinks.map((loc, i) => (
                <Link
                  key={loc.slug}
                  to={`/it-support/${loc.slug}/`}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm hover:text-red-600 transition-colors"
                >
                  {nearbyAnchorForms[i % nearbyAnchorForms.length](loc.city)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

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
              to="/contact/"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium border border-red-500"
            >
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/"
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
