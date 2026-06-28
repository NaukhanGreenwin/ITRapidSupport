import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Phone,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '../components/SEO';

interface Option {
  label: string;
  risk: number; // 0 = best posture, higher = more risk
}

interface Question {
  id: string;
  category: string;
  question: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: 'backups',
    category: 'Data Backup & Recovery',
    question: 'How are your business data and systems backed up?',
    options: [
      { label: 'Automated, offsite, and we test restores regularly', risk: 0 },
      { label: 'Automated backups, but we never test restores', risk: 6 },
      { label: 'Manual or occasional backups only', risk: 9 },
      { label: 'No backups, or I am not sure', risk: 12 },
    ],
  },
  {
    id: 'mfa',
    category: 'Access Security',
    question: 'Is multi-factor authentication (MFA) enforced on email and key apps?',
    options: [
      { label: 'Yes, enforced everywhere for all staff', risk: 0 },
      { label: 'Enabled for some accounts or admins only', risk: 7 },
      { label: 'Available but not required', risk: 9 },
      { label: 'No MFA, or I am not sure', risk: 12 },
    ],
  },
  {
    id: 'endpoint',
    category: 'Endpoint Protection',
    question: 'What protects your computers and servers from malware and ransomware?',
    options: [
      { label: 'Managed EDR with 24/7 monitoring', risk: 0 },
      { label: 'Standard antivirus on every device', risk: 5 },
      { label: 'Only built-in / free antivirus', risk: 8 },
      { label: 'Nothing consistent, or I am not sure', risk: 12 },
    ],
  },
  {
    id: 'patching',
    category: 'Patching & Updates',
    question: 'How do you keep operating systems and software updated?',
    options: [
      { label: 'Centrally managed and verified monthly', risk: 0 },
      { label: 'Mostly automatic updates, not tracked', risk: 5 },
      { label: 'Staff update their own machines when prompted', risk: 8 },
      { label: 'Updates are often delayed, or I am not sure', risk: 11 },
    ],
  },
  {
    id: 'training',
    category: 'People & Phishing',
    question: 'Do employees receive security awareness / phishing training?',
    options: [
      { label: 'Yes, ongoing training plus simulated phishing', risk: 0 },
      { label: 'A one-time session at onboarding', risk: 6 },
      { label: 'Informal reminders only', risk: 8 },
      { label: 'No training, or I am not sure', risk: 10 },
    ],
  },
  {
    id: 'monitoring',
    category: 'Threat Monitoring',
    question: 'Is your network and email monitored for threats around the clock?',
    options: [
      { label: 'Yes, 24/7 monitoring with alerting', risk: 0 },
      { label: 'Business-hours monitoring only', risk: 6 },
      { label: 'We react when something breaks', risk: 9 },
      { label: 'No monitoring, or I am not sure', risk: 12 },
    ],
  },
  {
    id: 'incident',
    category: 'Incident Response',
    question: 'Do you have a tested plan for a cyber attack or outage?',
    options: [
      { label: 'Documented plan, tested at least yearly', risk: 0 },
      { label: 'A plan exists but is never tested', risk: 6 },
      { label: 'Only an informal idea of what we would do', risk: 8 },
      { label: 'No plan, or I am not sure', risk: 10 },
    ],
  },
  {
    id: 'support',
    category: 'IT Support Model',
    question: 'How is your day-to-day IT handled today?',
    options: [
      { label: 'Proactive managed IT provider (co-managed or full)', risk: 0 },
      { label: 'One internal person or a part-timer', risk: 5 },
      { label: 'We call someone only when it breaks (break-fix)', risk: 8 },
      { label: 'No real IT support, or I am not sure', risk: 11 },
    ],
  },
  {
    id: 'compliance',
    category: 'Compliance & Data',
    question: 'Do you handle data with compliance obligations (PIPEDA, PHIPA, client/financial records)?',
    options: [
      { label: 'Yes, and controls are documented and reviewed', risk: 0 },
      { label: 'Yes, but controls are informal', risk: 7 },
      { label: 'Some sensitive data, no formal controls', risk: 9 },
      { label: 'Unsure what we hold or how it is protected', risk: 11 },
    ],
  },
  {
    id: 'breach',
    category: 'History & Exposure',
    question: 'Have you had a security incident or close call in the last 24 months?',
    options: [
      { label: 'No, and we actively watch for them', risk: 0 },
      { label: 'A minor scare we handled', risk: 5 },
      { label: 'Yes, at least one real incident', risk: 9 },
      { label: 'Not sure we would even know', risk: 10 },
    ],
  },
];

const MAX_RISK = QUESTIONS.reduce(
  (sum, q) => sum + Math.max(...q.options.map((o) => o.risk)),
  0
);

interface Tier {
  label: string;
  range: string;
  color: string;
  bg: string;
  ring: string;
  summary: string;
  icon: React.ReactNode;
}

function getTier(score: number): Tier {
  if (score <= 20) {
    return {
      label: 'Low Risk',
      range: '0–20',
      color: 'text-green-700',
      bg: 'bg-green-50',
      ring: 'ring-green-200',
      summary:
        'Your fundamentals are strong. The opportunity now is to stay ahead with continuous monitoring and regular testing so a small gap never becomes a breach.',
      icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
    };
  }
  if (score <= 45) {
    return {
      label: 'Moderate Risk',
      range: '21–45',
      color: 'text-yellow-700',
      bg: 'bg-yellow-50',
      ring: 'ring-yellow-200',
      summary:
        'You have meaningful protections, but there are real gaps an attacker could use. A focused remediation plan would close most of your exposure quickly.',
      icon: <ShieldAlert className="h-10 w-10 text-yellow-600" />,
    };
  }
  if (score <= 70) {
    return {
      label: 'High Risk',
      range: '46–70',
      color: 'text-orange-700',
      bg: 'bg-orange-50',
      ring: 'ring-orange-200',
      summary:
        'Several critical controls are missing. Your business is exposed to ransomware, data loss, and downtime. This needs attention soon — not after an incident.',
      icon: <AlertTriangle className="h-10 w-10 text-orange-600" />,
    };
  }
  return {
    label: 'Critical Risk',
    range: '71–100',
    color: 'text-red-700',
    bg: 'bg-red-50',
    ring: 'ring-red-200',
    summary:
      'Your business is highly exposed. A single phishing email or failed device could cause major data loss or extended downtime. We recommend an urgent assessment.',
    icon: <AlertTriangle className="h-10 w-10 text-red-600" />,
  };
}

const FAQS = [
  {
    question: 'How does the IT risk calculator work?',
    answer:
      'You answer ten quick questions about your backups, access security, endpoint protection, patching, staff training, monitoring, incident response, support model, compliance, and incident history. Each answer is weighted by how much risk it adds, and we convert your responses into a 0–100 risk score with a clear tier and a list of your biggest gaps.',
  },
  {
    question: 'Is the IT security risk assessment really free?',
    answer:
      'Yes. The calculator is completely free and takes about two minutes. If you want a deeper review, IT Rapid Support offers a no-obligation consultation for businesses across the Greater Toronto Area.',
  },
  {
    question: 'What should I do with my risk score?',
    answer:
      'Your score highlights where your business is most exposed. The fastest path to lowering it is closing the highest-weighted gaps first — usually MFA, tested backups, managed endpoint protection, and 24/7 monitoring. Our team can turn your results into a prioritized remediation plan.',
  },
  {
    question: 'Who is this assessment for?',
    answer:
      'It is built for small and mid-sized Ontario businesses — law firms, accounting and financial services, healthcare, real estate, and professional services — that want a fast, honest read on their cybersecurity and IT posture.',
  },
];

const RiskCalculator: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [lead, setLead] = useState({ name: '', email: '', company: '' });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const rawRisk = useMemo(
    () => Object.values(answers).reduce((a, b) => a + b, 0),
    [answers]
  );
  const score = Math.round((rawRisk / MAX_RISK) * 100);
  const tier = getTier(score);

  const gaps = useMemo(
    () =>
      QUESTIONS.filter((q) => (answers[q.id] ?? 0) >= 6)
        .sort((a, b) => (answers[b.id] ?? 0) - (answers[a.id] ?? 0))
        .map((q) => q.category),
    [answers]
  );

  const url = '/it-risk-calculator';
  const title = 'Free IT Security Risk Calculator for Ontario Businesses';
  const description =
    'Take our free 2-minute IT security risk assessment. Answer 10 questions and get an instant cybersecurity risk score, your biggest gaps, and a prioritized plan from IT Rapid Support in the Greater Toronto Area.';

  const schema = [
    generateLocalBusinessSchema(),
    generateServiceSchema({
      name: 'IT Security Risk Assessment',
      description,
      url,
      areaServed: 'Greater Toronto Area, Ontario',
      serviceType: 'Cybersecurity Risk Assessment',
    }),
    generateFAQSchema(FAQS),
  ];

  const handleSelect = (qid: string, risk: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: risk }));
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
    setLead({ name: '', email: '', company: '' });
    setSubmitState('idle');
    window.scrollTo(0, 0);
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('sending');
    try {
      const payload = new FormData();
      payload.append('name', lead.name);
      payload.append('email', lead.email);
      payload.append('company', lead.company);
      payload.append('_subject', `IT Risk Assessment lead — score ${score}/100 (${tier.label})`);
      payload.append('risk_score', `${score}/100`);
      payload.append('risk_tier', tier.label);
      payload.append('top_gaps', gaps.join(', ') || 'None flagged');
      QUESTIONS.forEach((q) => {
        const r = answers[q.id] ?? 0;
        const chosen = q.options.find((o) => o.risk === r);
        payload.append(q.category, chosen ? chosen.label : 'No answer');
      });

      const res = await fetch('https://formspree.io/f/xjkyyqjv', {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitState('sent');
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <PageTransition>
      <SEO
        title={title}
        description={description}
        keywords="IT security risk calculator, free IT risk assessment Toronto, cybersecurity risk assessment Ontario, IT risk score, managed IT services GTA, cyber risk assessment small business"
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'IT Risk Calculator', url },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <ShieldAlert className="h-4 w-4 text-red-200 mr-2" />
              <span className="text-red-200 text-sm font-medium">Free 2-Minute Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How exposed is your business to a cyber attack?
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Answer 10 quick questions and get an instant IT security risk score, a breakdown of
              your biggest gaps, and a prioritized plan to fix them — built for Ontario businesses by
              IT Rapid Support.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showResult ? (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Your IT Risk Assessment</span>
                  <span>
                    {answeredCount} of {QUESTIONS.length} answered
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 transition-all duration-300"
                    style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                {QUESTIONS.map((q, idx) => (
                  <div key={q.id} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-red-600 mb-2">
                      {idx + 1}. {q.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{q.question}</h3>
                    <div className="space-y-3">
                      {q.options.map((o) => {
                        const selected = answers[q.id] === o.risk;
                        return (
                          <button
                            key={o.label}
                            type="button"
                            onClick={() => handleSelect(q.id, o.risk)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center justify-between ${
                              selected
                                ? 'border-red-600 bg-red-50 text-gray-900'
                                : 'border-gray-200 hover:border-red-300 text-gray-700'
                            }`}
                          >
                            <span>{o.label}</span>
                            {selected && <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 ml-3" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                disabled={!allAnswered}
                onClick={() => {
                  setShowResult(true);
                  window.scrollTo(0, 0);
                }}
                className={`mt-8 w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-medium transition-colors ${
                  allAnswered
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {allAnswered
                  ? 'See my IT risk score'
                  : `Answer all ${QUESTIONS.length} questions to continue`}
                {allAnswered && <ArrowRight className="ml-2 h-5 w-5" />}
              </button>
            </>
          ) : (
            <>
              {/* Result */}
              <div className={`rounded-2xl p-8 ${tier.bg} ring-1 ${tier.ring} mb-8`}>
                <div className="flex items-center gap-4 mb-6">
                  {tier.icon}
                  <div>
                    <div className={`text-sm font-semibold uppercase tracking-wide ${tier.color}`}>
                      {tier.label}
                    </div>
                    <div className="text-4xl font-bold text-gray-900">{score}/100</div>
                  </div>
                </div>
                <div className="h-3 bg-white/70 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-600"
                    style={{ width: `${score}%` }}
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">{tier.summary}</p>
              </div>

              {gaps.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Your biggest gaps</h3>
                  <ul className="space-y-3">
                    {gaps.map((g) => (
                      <li key={g} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lead capture */}
              {submitState !== 'sent' ? (
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Get your full report and remediation plan
                  </h3>
                  <p className="text-gray-600 mb-5 text-sm">
                    Tell us where to send a prioritized action plan based on your results. No
                    obligation, no spam.
                  </p>
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={lead.name}
                      onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Work email"
                      value={lead.email}
                      onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Company (optional)"
                      value={lead.company}
                      onChange={(e) => setLead((p) => ({ ...p, company: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                    />
                    {submitState === 'error' && (
                      <p className="text-sm text-red-600">
                        Something went wrong. Please try again or call us at (289) 582-9930.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={submitState === 'sending'}
                      className="w-full inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-60"
                    >
                      {submitState === 'sending' ? 'Sending…' : 'Send me my action plan'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-green-50 ring-1 ring-green-200 rounded-2xl p-6 mb-8 flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">You're all set</h3>
                    <p className="text-gray-700 text-sm">
                      Thanks — we've received your results and a member of our team will follow up
                      with your prioritized action plan. Need help sooner? Call (289) 582-9930.
                    </p>
                  </div>
                </div>
              )}

              {/* CTA + reset */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
                >
                  Book a free consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Retake
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Why it matters */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why an IT risk assessment matters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most breaches at small and mid-sized businesses come from a handful of fixable gaps.
              Knowing your score is the first step to closing them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Find your weak points',
                body: 'See exactly where attackers are most likely to get in, ranked by how much risk each gap adds.',
              },
              {
                title: 'Prioritize what matters',
                body: 'Skip the guesswork. Fix the highest-impact issues first — MFA, backups, monitoring, and endpoint protection.',
              },
              {
                title: 'Get a real plan',
                body: 'Turn your score into a clear, costed roadmap with a GTA team that supports Ontario businesses 24/7.',
              },
            ].map((c) => (
              <div key={c.title} className="bg-slate-50 p-8 rounded-2xl">
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                  <ShieldCheck className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IT Risk Calculator FAQs
            </h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to lower your risk?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Talk to our GTA team about managed IT, cybersecurity, and 24/7 support built around your
            business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium border border-red-500"
            >
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+12895829930"
              className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
            >
              <Phone className="mr-2 h-5 w-5" /> (289) 582-9930
            </a>
          </div>
          <div className="mt-6">
            <Link
              to="/services"
              className="inline-flex items-center justify-center text-white/80 hover:text-white text-sm font-medium"
            >
              Explore all services <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RiskCalculator;
