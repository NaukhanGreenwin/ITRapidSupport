import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileSearch,
  Phone,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '../components/SEO';

interface Plan {
  name: string;
  tagline: string;
  bestFor: string;
  highlighted?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    name: 'Co-Managed IT',
    tagline: 'Back up your internal team',
    bestFor: 'Businesses with an internal IT person or team that needs extra coverage and senior expertise.',
    features: [
      'Help desk overflow and after-hours coverage',
      'Patch management and update monitoring',
      'Managed endpoint protection (EDR)',
      'Cloud and Microsoft 365 administration support',
      'Backup monitoring and restore testing',
      'Escalation path to senior engineers',
    ],
  },
  {
    name: 'Fully Managed IT',
    tagline: 'Your complete outsourced IT department',
    bestFor: 'Small and mid-sized teams that want IT handled end to end with predictable monthly support.',
    highlighted: true,
    features: [
      'Unlimited remote help desk for your staff',
      '24/7 monitoring of devices, servers, and network',
      'Managed EDR plus security patching',
      'Microsoft 365, email, and identity management',
      'Automated offsite backups with tested restores',
      'Onboarding and offboarding of employees',
      'Quarterly technology reviews and roadmap',
    ],
  },
  {
    name: 'Managed IT + Security',
    tagline: 'Managed IT with a security-first layer',
    bestFor: 'Regulated or higher-risk businesses — law, accounting, healthcare, financial services.',
    features: [
      'Everything in Fully Managed IT',
      '24/7 threat detection and response',
      'Multi-factor authentication enforced everywhere',
      'Security awareness training and phishing simulations',
      'Compliance support (PIPEDA, PHIPA, client records)',
      'Incident response plan and tested recovery',
      'Vendor and risk reporting for leadership',
    ],
  },
];

const STEPS = [
  {
    icon: <FileSearch className="h-7 w-7 text-red-600" />,
    title: 'Free IT assessment',
    body: 'We review your systems, security, and support gaps — no cost, no obligation, no pressure.',
  },
  {
    icon: <ClipboardCheck className="h-7 w-7 text-red-600" />,
    title: 'Findings and plan',
    body: 'You get a clear report of your risks and a recommended plan with the right level of coverage.',
  },
  {
    icon: <Rocket className="h-7 w-7 text-red-600" />,
    title: 'Onboard and run',
    body: 'We take over the day-to-day with a flat monthly plan, so IT just works while you focus on the business.',
  },
];

const FAQS = [
  {
    question: 'How much do managed IT services cost in Toronto?',
    answer:
      'Managed IT is priced per user or per device each month, based on how many people and locations you support and the level of security you need. Because every business is different, we quote after a free assessment so you only pay for the coverage that fits — no padded packages. Book the free assessment and we will give you an exact monthly figure.',
  },
  {
    question: 'What is the difference between co-managed and fully managed IT?',
    answer:
      'Co-managed IT supports an internal IT person or team with extra coverage, tools, and senior expertise. Fully managed IT is your complete outsourced IT department — we handle the help desk, monitoring, security, backups, and strategy end to end. If you are not sure which fits, the free assessment will tell you.',
  },
  {
    question: 'Is there a long-term contract?',
    answer:
      'We start with a free assessment and a plan you can say yes or no to. Our managed plans are month-to-month focused on earning your business every month, with clear terms laid out before you commit. There are no surprise lock-ins.',
  },
  {
    question: 'Do you support businesses across the Greater Toronto Area?',
    answer:
      'Yes. IT Rapid Support provides managed IT and cybersecurity to businesses across Toronto, Vaughan, Mississauga, Oakville, Markham, and the wider GTA, with 24/7 remote support and on-site help when needed.',
  },
];

const ManagedITPlans: React.FC = () => {
  const url = '/managed-it-plans';
  const title = 'Managed IT Service Plans & Pricing Toronto';
  const description =
    'Compare managed IT service plans for Ontario businesses — co-managed, fully managed, and managed IT with security. Get a clear monthly quote.';

  const schema = [
    generateLocalBusinessSchema(),
    generateServiceSchema({
      name: 'Managed IT Services',
      description,
      url,
      areaServed: 'Greater Toronto Area, Ontario',
      serviceType: 'Managed IT Services',
    }),
    generateFAQSchema(FAQS),
  ];

  return (
    <PageTransition>
      <SEO
        title={title}
        description={description}
        keywords="managed IT services pricing Toronto, managed IT plans Ontario, co-managed IT, fully managed IT services GTA, managed IT cost, IT support plans small business, managed services provider Toronto"
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Managed IT Plans', url },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <ShieldCheck className="h-4 w-4 text-red-200 mr-2" />
              <span className="text-red-200 text-sm font-medium">Flat monthly IT support</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Managed IT plans built around your business
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Predictable monthly IT support, security, and strategy for Ontario businesses. Pick the
              level of coverage you need — we quote after a free assessment so you only pay for what
              fits.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium border border-red-500"
              >
                Book a free IT assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+12895829930"
                className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
              >
                <Phone className="mr-2 h-5 w-5" /> (289) 582-9930
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose your level of coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every plan is delivered by our GTA team with 24/7 support. Not sure which one fits? The
              free assessment will tell you exactly where you stand.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 bg-white shadow-sm flex flex-col h-full ${
                  plan.highlighted ? 'ring-2 ring-red-600 relative' : 'border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-red-600 text-sm font-medium mt-1">{plan.tagline}</p>
                <p className="text-gray-600 text-sm mt-4">{plan.bestFor}</p>
                <ul className="space-y-3 mt-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <div className="text-sm text-gray-500 mb-3">Custom monthly pricing</div>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                      plan.highlighted
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Get a quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Pricing is quoted per user or per device after a free assessment, so it matches your team
            size and security needs.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No hard sell. We start by understanding your business, then recommend the right plan.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.title} className="bg-slate-50 p-8 rounded-2xl">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">{s.icon}</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-red-600 mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/it-risk-calculator"
              className="inline-flex items-center justify-center text-red-600 hover:text-red-700 font-medium"
            >
              Not ready to talk? Try the free IT risk calculator first{' '}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Managed IT plan FAQs</h2>
          </div>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-lg p-6">
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
          <h2 className="text-3xl font-bold text-white mb-6">Get a plan and a price that fit</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Book a free, no-obligation IT assessment and we will show you exactly what your business
            needs and what it costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium border border-red-500"
            >
              Book a free assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+12895829930"
              className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
            >
              <Phone className="mr-2 h-5 w-5" /> (289) 582-9930
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ManagedITPlans;
