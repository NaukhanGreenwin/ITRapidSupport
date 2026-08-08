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
    question: 'How much does IT support cost in the GTA?',
    answer:
      'We do not publish a one-size-fits-all rate card, because a quoted price without scope is not comparable to anything. GTA managed IT pricing is a fixed monthly fee set by user and device count, the security tier included, server and cloud infrastructure, and whether after-hours coverage and on-site work are in scope. Our managed IT plans page lays out exactly what each tier includes, line by line, so you can compare it against any other quote.',
  },
  {
    question: 'Can you work alongside our internal IT team?',
    answer:
      'Yes. Co-managed IT is a standard arrangement for larger GTA organizations: your internal team keeps the day-to-day knowledge and priorities, and we add 24/7 helpdesk coverage, security tooling and monitoring, patching, backup oversight, and specialist depth for projects. The split of responsibilities is written down so nothing falls between the two teams.',
  },
  {
    question: 'How do we switch IT providers without downtime?',
    answer:
      'A proper transition runs in parallel: we document your environment, take over monitoring and backups, verify we hold the Microsoft 365 tenant access, domain records, passwords, and vendor contacts, and only then does the old provider step away. Staff keep working throughout — the helpdesk number changes, their tools do not. Before signing with anyone, confirm in writing who owns your tenant, credentials, and documentation if you leave.',
  },
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
        title="IT Support Services GTA | 24/7 Helpdesk"
        description="24/7 helpdesk, managed IT, and cybersecurity with on-site support across the entire Greater Toronto Area. Talk to a GTA IT team now — call (289) 582-9930."
        keywords="IT support services GTA, IT support GTA, managed IT services GTA, GTA IT company, IT services Greater Toronto Area, cybersecurity services GTA"
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'IT Support', url: '/services/it-support/' },
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
              <Link to="/services/it-outsourcing-services/" className="text-red-200 hover:text-white underline underline-offset-4">
                IT outsourcing services
              </Link>{' '}
              give you a complete IT department, while our{' '}
              <Link to="/services/microsoft-365-managed-services/" className="text-red-200 hover:text-white underline underline-offset-4">
                Microsoft 365 managed services
              </Link>{' '}
              keep cloud users supported. For organizations with internal IT, our{' '}
              <Link to="/services/co-managed-it-services/" className="text-red-200 hover:text-white underline underline-offset-4">
                co-managed IT services
              </Link>{' '}
              add 24/7 coverage and specialist capacity. Our{' '}
              <Link to="/services/business-continuity-disaster-recovery/" className="text-red-200 hover:text-white underline underline-offset-4">
                business continuity and disaster recovery services
              </Link>{' '}
              help protect critical operations, and our{' '}
              <Link to="/services/network-security-services/" className="text-red-200 hover:text-white underline underline-offset-4">
                network security services
              </Link>{' '}
              secure firewalls, connectivity, and access — from our Vaughan headquarters to every corner of the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact/"
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
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              If you are still working out what your business needs, start with our free{' '}
              <Link to="/it-risk-calculator/" className="text-red-600 hover:text-red-700 font-medium">
                IT risk calculator for GTA businesses
              </Link>
              . It scores fourteen weighted security control areas — backups, multi-factor authentication, endpoint
              protection, patching, email authentication and more — and ranks your gaps in priority order. No sign-up
              and no gate: it runs entirely in your browser and nothing you enter is sent to us or stored anywhere.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our own office is at 7810 Keele St, so the northwest of the region is home ground rather than an outer
              service area. Businesses there should start with{' '}
              <Link to="/it-support/vaughan/" className="text-red-600 hover:text-red-700 font-medium">
                IT support in Vaughan
              </Link>
              , which also covers Concord, Woodbridge, Maple, Thornhill, and Kleinburg. Peel Region is a short run west
              along the 407 and 401, and it is covered by the same helpdesk and the same dispatch —{' '}
              <Link to="/it-support/mississauga/" className="text-red-600 hover:text-red-700 font-medium">
                IT services in Mississauga
              </Link>{' '}
              and{' '}
              <Link to="/it-support/brampton/" className="text-red-600 hover:text-red-700 font-medium">
                IT support in Brampton
              </Link>{' '}
              set out the local detail for each.
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

      {/* GTA depth: regions, research, security, pricing, choosing */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">IT Support Coverage Across the GTA, Region by Region</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                "The GTA" is a big promise. The Greater Toronto Area covers the City of Toronto plus the regional
                municipalities of York, Peel, Halton, and Durham — thousands of square kilometres and very different
                business landscapes, from downtown professional firms to industrial units along the 400-series highways.
                A provider that treats it all as one generic service area usually means remote-only support with no real
                plan for the day someone has to show up.
              </p>
              <p>
                Our head office is at 7810 Keele Street, in Vaughan's Concord business area close to Highway 407 and
                the 400 corridor, which is why the northwest GTA is home ground rather than the edge of a coverage map. In{' '}
                <Link to="/it-support/york-region/" className="text-red-600 hover:text-red-700 font-medium">
                  York Region
                </Link>{' '}
                that includes{' '}
                <Link to="/it-support/markham/" className="text-red-600 hover:text-red-700 font-medium">
                  Markham
                </Link>
                ,{' '}
                <Link to="/it-support/richmond-hill/" className="text-red-600 hover:text-red-700 font-medium">
                  Richmond Hill
                </Link>
                ,{' '}
                <Link to="/it-support/stouffville/" className="text-red-600 hover:text-red-700 font-medium">
                  Stouffville
                </Link>{' '}
                and up to{' '}
                <Link to="/it-support/bradford/" className="text-red-600 hover:text-red-700 font-medium">
                  Bradford
                </Link>
                . In the city itself we support offices from the downtown core through midtown and{' '}
                <Link to="/it-support/north-york/" className="text-red-600 hover:text-red-700 font-medium">
                  North York
                </Link>{' '}
                — the{' '}
                <Link to="/it-support/toronto/" className="text-red-600 hover:text-red-700 font-medium">
                  Toronto IT support
                </Link>{' '}
                page covers that in detail. West of the city, Halton businesses in{' '}
                <Link to="/it-support/oakville/" className="text-red-600 hover:text-red-700 font-medium">
                  Oakville
                </Link>{' '}
                and{' '}
                <Link to="/it-support/burlington/" className="text-red-600 hover:text-red-700 font-medium">
                  Burlington
                </Link>{' '}
                are covered by the same helpdesk and dispatch, as is{' '}
                <Link to="/it-support/hamilton/" className="text-red-600 hover:text-red-700 font-medium">
                  Hamilton
                </Link>{' '}
                at the western end of the lakeshore.
              </p>
              <p>
                Remote support does not care about geography — most tickets are resolved the same way whether the user
                is on Bay Street or in a Brampton warehouse. Where the region matters is hands-on work: failed network
                hardware, cabling and Wi-Fi problems, server rooms, office moves, and new-site setups. That work is
                scheduled or dispatched from Vaughan, and it is scoped honestly in the agreement rather than promised
                vaguely on a website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Have Actually Measured About GTA Business IT</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Most IT support pages tell you the provider is trusted and experienced. We would rather show our work.
                Since mid-2026 we have been running our own original research on a fixed sample of real GTA business
                domains — the same sample re-scanned each time, so the numbers can be compared across studies — and
                publishing the results in full, including the findings that surprised us.
              </p>
              <p>
                Our{' '}
                <Link to="/resources/gta-smb-cybersecurity-report-2026/" className="text-red-600 hover:text-red-700 font-medium">
                  GTA small-business cybersecurity report
                </Link>{' '}
                measured email authentication across 481 GTA business domains: SPF adoption is high at 91.7%, but only
                20.6% of domains enforce DMARC — meaning the large majority of GTA businesses still leave their domain
                open to convincing impersonation. Our{' '}
                <Link to="/resources/gta-business-email-platforms-2026/" className="text-red-600 hover:text-red-700 font-medium">
                  GTA email platform study
                </Link>{' '}
                found 46.8% of mail-enabled GTA business domains run Microsoft 365 and 25.1% run Google Workspace, with
                sharply different security postures between the two populations. And our{' '}
                <Link to="/resources/gta-business-website-security-2026/" className="text-red-600 hover:text-red-700 font-medium">
                  GTA website security study
                </Link>{' '}
                of 470 business websites found 45.5% send zero of the five basic security headers and 18.3% do not even
                force HTTPS.
              </p>
              <p>
                We publish these because they are the honest baseline for the region. When we say a security control is
                unusual or overdue for a GTA business, it is because we measured the region — not because a vendor
                brochure said so.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">One Team for the Helpdesk and the Security Work</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The helpdesk is where security problems show up first: a user reporting a suspicious email, repeated
                account lockouts, an odd Microsoft 365 sign-in prompt, a failed backup notification. When support and
                security are two different vendors, those early signals become handoffs. When they are one team, the
                person who takes the call can also check the sign-in logs, isolate the endpoint, and escalate to{' '}
                <Link to="/services/threat-detection/" className="text-red-600 hover:text-red-700 font-medium">
                  managed detection and response
                </Link>{' '}
                without a second contract getting in the way.
              </p>
              <p>
                That is why the security baseline is built into our managed service rather than sold as add-ons:
                multi-factor authentication, endpoint protection, patching, secure Microsoft 365 configuration, SPF,
                DKIM and DMARC on your domain, and monitored backups. Our{' '}
                <Link to="/services/managed-security/" className="text-red-600 hover:text-red-700 font-medium">
                  managed security services
                </Link>{' '}
                page explains the full stack, and the{' '}
                <Link to="/it-risk-calculator/" className="text-red-600 hover:text-red-700 font-medium">
                  IT risk calculator
                </Link>{' '}
                will show you where your current setup stands before you talk to anyone.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Managed IT Pricing Works in the GTA</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We work on fixed monthly pricing, set after scope is clear — not published as a teaser rate that grows
                once you are signed. The price is driven by the things that actually change the work: how many users and
                devices you have, which security tier you need, what servers and cloud infrastructure are in play, and
                whether after-hours and on-site work are inside the agreement. Fixed pricing matters because it puts the
                incentive in the right place: we make money by preventing problems, not by billing hours to fix them.
              </p>
              <p>
                The{' '}
                <Link to="/managed-it-plans/" className="text-red-600 hover:text-red-700 font-medium">
                  managed IT plans
                </Link>{' '}
                page publishes the full inclusion matrix for every tier — line by line — so you can hold our scope, or
                any competitor's, up against a quote and see what is missing. If a GTA provider will not put their
                inclusions in writing, that is the answer to whether the low price is real.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing an IT Support Provider in the GTA</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The GTA has hundreds of IT providers, and their websites are largely interchangeable. The differences
                that matter show up in the details: whether 24/7 means a technician or an answering service, whether
                security is included or an upsell, whether your environment is documented before the first ticket, who
                owns your Microsoft 365 tenant and domain records if you leave, and what triggers an on-site visit. Our{' '}
                <Link to="/resources/it-support-services-gta-buyers-guide/" className="text-red-600 hover:text-red-700 font-medium">
                  IT support services GTA buyer's guide
                </Link>{' '}
                walks through the full evaluation, and{' '}
                <Link to="/resources/choosing-managed-it-provider-toronto/" className="text-red-600 hover:text-red-700 font-medium">
                  how to choose a managed IT provider
                </Link>{' '}
                covers the questions to put in front of every candidate — including us.
              </p>
            </div>
          </section>
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
                to={`/it-support/${loc.slug}/`}
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

export default GTALanding;
