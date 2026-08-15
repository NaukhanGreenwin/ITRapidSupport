import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ClipboardCheck, FileText, Phone, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO, { generateFAQSchema, generateServiceSchema } from '../components/SEO';
import { trackEvent, trackFormSubmission } from '../components/AnalyticsTracker';

interface FormData {
  name: string;
  email: string;
  phone: string;
  worry: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | '';
  message: string;
}

const WORRIES = [
  'Cybersecurity / ransomware risk',
  'Slow response from our current IT provider',
  'Backups — not sure they would survive a failure',
  'Microsoft 365 problems',
  'IT costs keep climbing',
  'No dedicated IT support at all right now',
  'Something else',
];

const CHECK_AREAS = [
  {
    title: 'Backups & recovery',
    description:
      'Whether your data — including Microsoft 365 mail, OneDrive, SharePoint and Teams — is actually backed up, and whether anyone has ever tested a restore.',
  },
  {
    title: 'Identity & access',
    description:
      'Multi-factor authentication coverage, admin-account hygiene, and whether departed staff still have working logins.',
  },
  {
    title: 'Email security',
    description:
      'Whether your domain publishes SPF, DKIM and DMARC, and whether DMARC is enforcing — the setting that decides if your domain can be impersonated.',
  },
  {
    title: 'Endpoint protection & patching',
    description:
      'What is actually installed on your machines, whether updates are applied on a cycle, and whether anything is running an operating system past its end-of-support date.',
  },
  {
    title: 'Microsoft 365 configuration',
    description:
      'Tenant ownership, licence sprawl, mail-forwarding rules and the security defaults that most tenants never have switched on.',
  },
  {
    title: 'Support model & response',
    description:
      'Who you call when something breaks, what your current agreement actually covers, and where the gaps are between the two.',
  },
];

const faqs = [
  {
    question: 'What does the free IT Health Check include?',
    answer:
      'A 15-minute assessment with an IT Rapid Support engineer covering backups, multi-factor authentication, email authentication (SPF, DKIM, DMARC), endpoint protection, patching, Microsoft 365 configuration and your current support model, followed by a short written report listing what we found and what we would fix first. There is no charge and no obligation.',
  },
  {
    question: 'Is the IT Health Check really free, and what is the catch?',
    answer:
      'It is free and there is no catch: no invoice, no contract, and the written report is yours to keep whether or not you ever work with us. We offer it because most businesses that see their gaps in writing want help closing them, and some of those choose IT Rapid Support.',
  },
  {
    question: 'Do I have to switch IT providers to get the health check?',
    answer:
      'No. Many businesses use the health check as an independent second opinion on their current provider or internal setup. The report is written so you can hand it to whoever manages your IT today.',
  },
  {
    question: 'How do I choose the best IT support company in Vaughan or the GTA?',
    answer:
      'Get the inclusions in writing and compare them line by line: unlimited versus capped helpdesk, what "24/7" actually means, whether MFA is deployed and enforced, whether backups are restore-tested, who owns your Microsoft 365 tenant, and the exit terms. IT Rapid Support publishes a free Managed IT Quote Checker that scores any provider\'s proposal — including ours — against 22 items, and this free IT Health Check gives you a written baseline of your current environment to compare quotes against.',
  },
];

const ITHealthCheck: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', worry: '' });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const body = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body,
        headers: { Accept: 'application/json' },
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Request received. We will reach out within one business day to run your health check.',
        });

        // Only fires on a confirmed 2xx from the form endpoint, so the GA4
        // key events count real submissions and not attempts. trackFormSubmission
        // emits form_submission + generate_lead (the sitewide lead key event);
        // health_check_submit stays for this page's own reporting.
        const leadDetail = {
          worry: (body.get('worry') as string) || '',
          phone_provided: !!body.get('phone'),
          page_location: window.location.pathname,
        };

        trackFormSubmission('it_health_check', leadDetail);
        trackEvent('health_check_submit', { conversion: true, ...leadDetail });

        setFormData({ name: '', email: '', phone: '', worry: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'There was a problem sending your request. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'There was a problem sending your request. Please call (289) 582-9930 instead.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = [
    generateServiceSchema({
      name: 'Free IT Health Check',
      description:
        'A free 15-minute IT and security assessment for Toronto and GTA businesses with a written report covering backups, MFA, email authentication, patching, Microsoft 365 and support model. No cost, no obligation.',
      url: '/it-health-check/',
      areaServed: 'Greater Toronto Area, Ontario',
      serviceType: 'IT Assessment',
    }),
    generateFAQSchema(faqs),
  ];

  return (
    <PageTransition>
      <SEO
        title="Free IT Health Check for GTA Businesses"
        description="Free IT health check for Toronto & GTA businesses: a 15-minute assessment plus a written report on backups, security and Microsoft 365. No cost, no obligation."
        keywords="free IT health check, IT assessment Toronto, IT audit GTA, free IT assessment Vaughan, IT security check, managed IT assessment"
        canonicalUrl="/it-health-check"
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Free IT Health Check', url: '/it-health-check/' },
        ]}
      />

      {/* Hero + form */}
      <div className="relative pt-20 bg-gradient-to-r from-slate-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
                <ClipboardCheck className="h-4 w-4 text-red-200 mr-2" />
                <span className="text-red-200 text-sm font-medium">Free · 15 minutes · No obligation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Free IT Health Check for Your Business
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                A 15-minute assessment with an engineer, then a short written report on where your
                backups, security and Microsoft 365 setup actually stand — and what we would fix
                first. No cost, no contract, and the report is yours either way.
              </p>
              <ul className="space-y-3">
                {[
                  '15-minute assessment with an engineer, not a salesperson',
                  'Written report: what we found, ranked by what to fix first',
                  'No obligation — use it as a second opinion on your current IT',
                ].map((line) => (
                  <li key={line} className="flex items-start text-slate-200">
                    <CheckCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Book your free health check</h2>
              <p className="text-gray-600 mb-6">
                Tell us where to reach you and we will be in touch within one business day.
              </p>

              <form
                className="space-y-5"
                action="https://formspree.io/f/xjkyyqjv"
                method="POST"
                onSubmit={handleSubmit}
              >
                {submitStatus.type === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">{submitStatus.message}</p>
                  </div>
                )}
                {submitStatus.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <input
                  type="hidden"
                  name="_subject"
                  value="IT Health Check Request from itrapidsupport.com"
                />
                <input type="hidden" name="form_name" value="it_health_check" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                    placeholder="you@yourcompany.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                    placeholder="(289) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="worry" className="block text-sm font-medium text-gray-700 mb-1">
                    Biggest IT worry right now
                  </label>
                  <select
                    id="worry"
                    name="worry"
                    value={formData.worry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                    required
                  >
                    <option value="">Select one</option>
                    {WORRIES.map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending…' : 'Get My Free IT Health Check'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Prefer to talk now? Call{' '}
                  <a href="tel:+12895829930" className="text-red-600 font-medium">
                    (289) 582-9930
                  </a>
                  . We never share your details with anyone.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What we check */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What the Health Check Covers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Six areas where small and mid-sized businesses most often have gaps they cannot see —
              the same control areas scored by our free IT risk calculator.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {CHECK_AREAS.map((area) => (
              <div key={area.title} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                  <ShieldCheck className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: '1. Book it',
                text: 'Send the form above or call (289) 582-9930. We schedule a 15-minute call at a time that suits you — no prep needed on your side.',
              },
              {
                icon: ClipboardCheck,
                title: '2. The assessment',
                text: 'An engineer walks through the six areas above with you. Plain questions about how your IT runs today — nothing is installed and nothing is scanned without your say-so.',
              },
              {
                icon: FileText,
                title: '3. Your written report',
                text: 'You get a short written report: what looks solid, what has gaps, and what we would fix first and why. It is yours to keep and to show anyone, including your current provider.',
              },
            ].map((step) => (
              <div key={step.title} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <div className="bg-red-600/10 rounded-xl p-3 mr-5 flex-shrink-0">
                  <step.icon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mt-8 text-center">
            Want to check yourself first? Our{' '}
            <Link to="/it-risk-calculator/" className="text-red-600 hover:text-red-700 font-medium">
              free IT risk calculator
            </Link>{' '}
            scores the same control areas in your browser — no sign-up, and nothing you enter is
            sent to us.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Health Check FAQs
            </h2>
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

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Fifteen minutes now beats a bad week later
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Book the free health check, get the written report, and know exactly where your IT
            stands — whatever you decide to do next.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#top"
              data-cta="health_check_bottom_scroll_to_form"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium border border-red-500"
            >
              Get My Free IT Health Check <ArrowRight className="ml-2 h-5 w-5" />
            </a>
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

export default ITHealthCheck;
