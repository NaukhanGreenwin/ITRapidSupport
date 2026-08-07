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
      'Email authentication hardening (SPF, DKIM, DMARC)',
      'Security awareness training and phishing simulations',
      'Compliance support (PIPEDA, PHIPA, client records)',
      'Incident response plan and tested recovery',
      'Vendor and risk reporting for leadership',
    ],
  },
];

/**
 * Explicit inclusion matrix. "Everything in the tier below" is fine for a human reading a pricing
 * card and useless to anyone — or anything — comparing two quotes line by line, so every row is
 * spelled out for every tier. Values are drawn from the plan feature lists above; an em dash means
 * the capability is not part of that plan.
 */
const MATRIX: { group: string; rows: { label: string; values: [string, string, string] }[] }[] = [
  {
    group: 'Help desk and people',
    rows: [
      {
        label: 'Remote help desk for your staff',
        values: ['Overflow and after-hours', 'Unlimited', 'Unlimited'],
      },
      { label: 'Escalation to senior engineers', values: ['Yes', 'Yes', 'Yes'] },
      {
        label: 'Employee onboarding and offboarding',
        values: ['—', 'Yes', 'Yes'],
      },
      {
        label: 'Security awareness training and phishing simulations',
        values: ['—', '—', 'Yes'],
      },
    ],
  },
  {
    group: 'Monitoring and maintenance',
    rows: [
      {
        label: 'Patch management and update monitoring',
        values: ['Yes', 'Yes', 'Yes'],
      },
      {
        label: '24/7 monitoring of devices, servers and network',
        values: ['—', 'Yes', 'Yes'],
      },
      {
        label: 'Quarterly technology review and roadmap',
        values: ['—', 'Yes', 'Yes'],
      },
    ],
  },
  {
    group: 'Cloud, email and identity',
    rows: [
      {
        label: 'Microsoft 365 and cloud administration',
        values: ['Support for your team', 'Managed for you', 'Managed for you'],
      },
      {
        label: 'Email and identity management',
        values: ['—', 'Yes', 'Yes'],
      },
      {
        label: 'Email authentication hardening (SPF, DKIM, DMARC)',
        values: ['—', '—', 'Yes'],
      },
    ],
  },
  {
    group: 'Security',
    rows: [
      { label: 'Managed endpoint protection (EDR)', values: ['Yes', 'Yes', 'Yes'] },
      { label: '24/7 threat detection and response', values: ['—', '—', 'Yes'] },
      {
        label: 'Multi-factor authentication enforced everywhere',
        values: ['—', '—', 'Yes'],
      },
      {
        label: 'Incident response plan and tested recovery',
        values: ['—', '—', 'Yes'],
      },
      {
        label: 'Vendor and risk reporting for leadership',
        values: ['—', '—', 'Yes'],
      },
    ],
  },
  {
    group: 'Backup and continuity',
    rows: [
      {
        label: 'Backup monitoring and restore testing',
        values: ['Yes', 'Yes', 'Yes'],
      },
      {
        label: 'Automated offsite backups',
        values: ['—', 'Yes', 'Yes'],
      },
    ],
  },
  {
    group: 'Compliance',
    rows: [
      {
        label: 'Controls that support PIPEDA and PHIPA obligations',
        values: ['—', '—', 'Yes'],
      },
    ],
  },
];

/** Real drivers of the monthly figure. No prices — we do not publish rates we have not quoted. */
const PRICE_DRIVERS = [
  {
    label: 'How many people you support',
    body: 'Managed IT is priced per user or per device each month. The headcount you actually want covered is the single largest input, which is why two providers quoting "per user" can land far apart if one of them is counting differently. Ask both who is being counted.',
  },
  {
    label: 'How many sites and servers',
    body: 'A single office is not the same job as four locations with on-premises servers between them. Number of locations, servers and network sites moves the figure independently of headcount.',
  },
  {
    label: 'Which level of coverage you choose',
    body: 'The three plans above are genuinely different scopes of work, not the same service at three prices. Moving from Fully Managed IT to Managed IT + Security adds 24/7 threat detection, enforced MFA, email authentication, awareness training and incident response — real ongoing work, and it is priced as such.',
  },
  {
    label: 'What you already have',
    body: 'If your team already runs a tool we would otherwise provide, or you are co-managing with internal staff, that comes out of the scope. The free assessment exists to find this before a number is quoted rather than after.',
  },
];

/**
 * The comparison prompt buyers actually run — "here is my current quote, what is missing" —
 * only works if the gaps are named. These are the gaps worth naming, ours included.
 */
const ASK_BEFORE_SIGNING = [
  'Is the help desk unlimited, or capped by hours or tickets? If it is capped, what happens on the ticket after the cap?',
  'What exactly does 24/7 mean — engineers, or an answering service that opens a ticket for the morning?',
  'Are backups monitored and restore-tested, or only configured? Ask when the last test restore ran.',
  'Which security controls are in the base price and which are an upsell — endpoint protection, MFA, email authentication, awareness training, threat detection?',
  'Who owns your Microsoft 365 tenant, your domain and your backup data? If it is the provider, you cannot leave without their cooperation.',
  'Are hardware, software licences and project work inside the monthly fee or billed separately? Get it in writing either way.',
  'What are the exit terms, and how is your data handed back?',
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
    question: 'What is actually included in a managed IT plan?',
    answer:
      'Co-Managed IT covers help desk overflow and after-hours support, patch management, managed endpoint protection, Microsoft 365 and cloud administration support, backup monitoring with restore testing, and escalation to senior engineers. Fully Managed IT adds an unlimited remote help desk, 24/7 monitoring of devices, servers and network, email and identity management, automated offsite backups, employee onboarding and offboarding, and a quarterly technology review. Managed IT + Security adds 24/7 threat detection and response, multi-factor authentication enforced everywhere, email authentication hardening with SPF, DKIM and DMARC, security awareness training and phishing simulations, an incident response plan with tested recovery, vendor and risk reporting, and controls that support PIPEDA and PHIPA obligations. The full line-by-line comparison is published on this page.',
  },
  {
    question: 'Why is there no price on this page?',
    answer:
      'Because we have not seen your environment yet, and a number published before that would be a guess. What we can tell you up front is how the number is built: it is a flat monthly fee priced per user or per device, driven by how many people you cover, how many sites and servers you run, which of the three coverage levels you choose, and what you already have in place. The free assessment produces an exact monthly figure, and the plan is month-to-month.',
  },
  {
    question: 'What should I ask a managed IT provider before I sign?',
    answer:
      'Ask whether the help desk is unlimited or capped, what 24/7 actually means — engineers or an answering service, whether backups are restore-tested and when the last test ran, which security controls are in the base price versus an upsell, who owns your Microsoft 365 tenant and backup data, whether hardware, licences and project work are inside the monthly fee, and what the exit terms are. Ask us the same questions. Any provider who will not answer them in writing is telling you something.',
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
                to="/contact/"
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
                    to="/contact/"
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

      {/* Full inclusion matrix */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What is included, line by line
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most managed IT pricing pages say &ldquo;everything in the plan below, plus&hellip;&rdquo;
              and leave you to work out the rest. Here is every capability written out against every
              plan, so you can put this side by side with anyone else&rsquo;s quote.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 pr-4 text-sm font-semibold text-gray-900 w-2/5">Capability</th>
                  {PLANS.map((p) => (
                    <th
                      key={p.name}
                      className="py-4 px-3 text-sm font-semibold text-gray-900 text-center"
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((section) => (
                  <React.Fragment key={section.group}>
                    <tr className="bg-slate-50">
                      <td
                        colSpan={4}
                        className="py-3 pr-4 pl-3 text-xs font-bold uppercase tracking-wide text-red-600"
                      >
                        {section.group}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.label} className="border-b border-gray-100">
                        <td className="py-3 pr-4 pl-3 text-sm text-gray-700">{row.label}</td>
                        {row.values.map((v, i) => (
                          <td
                            key={`${row.label}-${i}`}
                            className={`py-3 px-3 text-sm text-center ${
                              v === '—' ? 'text-gray-300' : 'text-gray-900 font-medium'
                            }`}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Every plan is delivered by our team from 7810 Keele St, so businesses buying{' '}
            <Link to="/it-support/vaughan/" className="text-red-600 hover:text-red-700 font-medium">
              managed IT services in Vaughan
            </Link>{' '}
            get local dispatch rather than a cross-GTA drive, with 24/7 support and on-site help
            across the wider region when a problem needs hands on it. Compliance controls support
            your PIPEDA and PHIPA obligations — they do not by themselves make you compliant, and any
            provider telling you otherwise is overselling.
          </p>
        </div>
      </div>

      {/* How the price is built */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How the monthly price is actually built
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We do not publish a rate we have not quoted you. We can publish exactly what moves the
              number, which is the part that lets you compare two proposals honestly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PRICE_DRIVERS.map((d) => (
              <div key={d.label} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{d.label}</h3>
                <p className="text-gray-600 text-sm">{d.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 text-center">
            The result is a flat monthly fee, month to month, quoted after a free assessment.
          </p>
        </div>
      </div>

      {/* What to ask before signing */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            What to get in writing before you sign — with us or anyone else
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            The gap between two managed IT quotes is almost never the number. It is what the cheaper
            one left out. These are the questions that find it.
          </p>
          <ul className="space-y-4">
            {ASK_BEFORE_SIGNING.map((q) => (
              <li key={q} className="flex items-start bg-slate-50 rounded-xl p-5">
                <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{q}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-8">
            Already holding a proposal from somebody else? Put it through our{' '}
            <Link to="/tools/it-quote-checker/" className="text-red-600 hover:text-red-700 font-medium">
              free managed IT quote checker
            </Link>{' '}
            — 22 checks covering the questions above plus backup scope, restore testing, out-of-hours monitoring,
            Microsoft 365 tenant ownership and exit terms. It gives you a clarity score and the exact wording to send
            back to the provider, and it works just as well on a quote from us.
          </p>
          <p className="text-gray-600 text-sm mt-4 text-center">
            Not sure where your own environment stands before you start asking?{' '}
            <Link to="/it-risk-calculator/" className="text-red-600 hover:text-red-700 font-medium">
              Run the free IT risk calculator
            </Link>{' '}
            — 14 control areas, nothing leaves your browser.
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
              to="/it-risk-calculator/"
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
              to="/contact/"
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
