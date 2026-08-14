import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Copy,
  FileSearch,
  Lock,
  Phone,
  Printer,
  RefreshCw,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, { generateLocalBusinessSchema, generateFAQSchema } from '../components/SEO';

type State = 'written' | 'vague' | 'missing';

interface Item {
  id: string;
  group: string;
  /** What to look for in the document. */
  check: string;
  /** Points lost when the quote is silent on this. Higher = costs more later. */
  weight: number;
  /** Why a buyer should care. Written to be true of any provider, including us. */
  why: string;
  /** The question to put to the provider, verbatim. */
  ask: string;
  link?: { label: string; to: string };
}

// The checklist is deliberately provider-neutral: every item is something a
// buyer can verify by reading the document in front of them, not a claim about
// what any particular provider does. Weights reflect how expensive the silence
// tends to be after signing, not how hard the item is to answer.
const ITEMS: Item[] = [
  // ---------------------------------------------------------------- Scope
  {
    id: 'helpdesk-cap',
    group: 'Scope & support',
    weight: 4,
    check: 'Does it state whether help desk support is unlimited, or capped at a number of hours, tickets or users?',
    why: 'Unlimited support is often capped further down in the schedule, with anything past the cap billed hourly. The cap, not the headline monthly price, decides what a bad month actually costs you.',
    ask: 'Is help desk support genuinely unlimited? If there is a cap, what is it, what is the rate beyond it, and how often do clients our size go over?',
    link: { label: 'What managed IT support costs in Toronto', to: '/resources/managed-it-support-cost-toronto/' },
  },
  {
    id: 'after-hours',
    group: 'Scope & support',
    weight: 4,
    check: 'Does it define what 24/7 means — engineers who can fix things, or a service that takes a message?',
    why: '24/7 is the most overloaded phrase in this industry. An after-hours answering service that logs a ticket for the morning is sold with exactly the same two words as a staffed overnight desk.',
    ask: 'Outside business hours, who picks up — an engineer or a message service? What can they resolve at 2am without escalating, and is after-hours work charged at a different rate?',
    link: { label: 'Why a 24/7 IT helpdesk matters', to: '/resources/why-24-7-it-helpdesk-matters/' },
  },
  {
    id: 'onsite',
    group: 'Scope & support',
    weight: 3,
    check: 'Are on-site visits included, and does it say how many and how quickly someone attends?',
    why: 'Remote-first support is perfectly legitimate and covers most tickets. A dead switch, a failed firewall or a flooded server room still needs a person in the building, and if that is billable it is a cost that only appears on your worst day.',
    ask: 'Are on-site visits included in the monthly fee? If so, how many, and what is your target time to have someone on site for a site-down issue in our city?',
  },
  {
    id: 'counted-assets',
    group: 'Scope & support',
    weight: 3,
    check: 'Is it explicit about what is being priced — every user, endpoint, server, site and network device — and what is excluded?',
    why: 'Most renewal disputes are scope disputes. A price built on 25 users reads the same as a price built on 25 users, four servers, two sites and forty devices, and the difference is where the invoice grows.',
    ask: 'Please list every user, device, server, site and network device this price covers, and everything on our network that it does not.',
  },
  {
    id: 'vendors',
    group: 'Scope & support',
    weight: 2,
    check: 'Does it say whether dealing with your other vendors — internet provider, phone system, line-of-business software — is included?',
    why: 'A large share of real support work is chasing a third party. If vendor liaison is out of scope, that work either lands back on your staff or reappears as billable project time.',
    ask: 'When our line-of-business software or internet connection is the problem, do you own that call to the vendor, or do we?',
  },

  // ------------------------------------------------------------- Security
  {
    id: 'mfa',
    group: 'Security inclusions',
    weight: 4,
    check: 'Does it name multi-factor authentication as included — deployed and enforced, not merely available?',
    why: 'MFA is already inside the Microsoft 365 licences most businesses pay for, so a provider can accurately say you have it while it is enforced on nobody. Enforcement is the work, and enforcement is the control.',
    ask: 'Will MFA be enforced on every user and every administrator account, who is responsible for keeping it enforced, and how will exceptions be handled?',
    link: { label: 'Multi-factor authentication guide', to: '/resources/multi-factor-authentication-guide-gta/' },
  },
  {
    id: 'endpoint',
    group: 'Security inclusions',
    weight: 4,
    check: 'Does it name the endpoint security product, and say whether the licence sits inside the monthly fee?',
    why: 'Antivirus included can mean the free tier built into the operating system, a paid EDR product, or a licence billed to you separately. The product name and who pays for the licence are the two facts that settle it.',
    ask: 'Which endpoint product will be installed, is it antivirus or EDR/MDR, is the licence inside the monthly fee, and who actually reads the alerts it generates?',
    link: { label: 'Managed detection and response explained', to: '/resources/managed-threat-detection-monitoring-mdr-guide/' },
  },
  {
    id: 'patching',
    group: 'Security inclusions',
    weight: 3,
    check: 'Does it commit to patching on a stated schedule, and say whether third-party applications are included?',
    why: 'Nearly every provider says they patch. Far fewer will say whether that covers third-party applications as well as Windows, or show you a monthly compliance percentage you can hold them to.',
    ask: 'What gets patched, on what cycle, does it include third-party applications, and will we receive a monthly patch-compliance report?',
  },
  {
    id: 'email-auth',
    group: 'Security inclusions',
    weight: 3,
    check: 'Does it include email authentication — SPF, DKIM and DMARC configured and moved to an enforcing policy?',
    why: 'In our own scan of 479 GTA business domains, 52.6% published a DMARC record but only 20.7% had it set to actually block forged mail. A published record that is not enforcing stops nothing, and it is routinely counted as done.',
    ask: 'Will you configure SPF, DKIM and DMARC, move DMARC to quarantine or reject, and monitor the reports afterwards — or is that a separate project?',
    link: { label: 'Check your own domain in 10 seconds', to: '/tools/email-spoof-check/' },
  },
  {
    id: 'monitoring',
    group: 'Security inclusions',
    weight: 3,
    check: 'Does it say who is watching security alerts outside business hours, and what they are allowed to do about one?',
    why: '24/7 monitoring and 24/7 response are two different products. Software can watch around the clock while the human response starts at nine, and both get described with the same phrase.',
    ask: 'If a security alert fires at 3am, who sees it, within what time, and what are they authorised to do — isolate a machine, disable an account — without waiting for us?',
  },
  {
    id: 'incident',
    group: 'Security inclusions',
    weight: 3,
    check: 'Does it say whether responding to a security incident is covered, or billed separately as project work?',
    why: 'This is the clause people discover during the incident. Plenty of agreements cover monitoring and prevention but treat containment, forensics and rebuild as billable work — which is defensible, but only if you knew before you signed.',
    ask: 'If we are breached or hit with ransomware, what is covered by the monthly fee and what is billed? At what rate, and is there a cap?',
    link: { label: 'Ransomware protection for Ontario businesses', to: '/resources/ransomware-protection-ontario-businesses/' },
  },
  {
    id: 'training',
    group: 'Security inclusions',
    weight: 2,
    check: 'Is security awareness training or phishing simulation named as included, or is it an add-on?',
    why: 'Phishing is still the common entry point, and training is one of the cheapest controls to buy and the easiest to leave out of a quote quietly.',
    ask: 'Is security awareness training included? How often does it run, is phishing simulation part of it, and do we get reporting on who is failing?',
    link: { label: 'How to stop phishing attacks', to: '/resources/stop-phishing-attacks-email-security/' },
  },

  // --------------------------------------------------------------- Backup
  {
    id: 'backup-scope',
    group: 'Backup & recovery',
    weight: 4,
    check: 'Does it state exactly what is backed up — servers, endpoints, and your Microsoft 365 data?',
    why: 'Microsoft runs a shared-responsibility model: retention windows and recycle bins are not a backup product. Mailboxes, OneDrive, SharePoint and Teams are the items most often assumed covered and least often listed.',
    ask: 'Are Microsoft 365 mailboxes, OneDrive, SharePoint and Teams backed up to separate storage we can restore from, what is the retention period, and where does the data physically sit?',
    link: { label: 'Cloud backup and disaster recovery guide', to: '/resources/cloud-backup-disaster-recovery-guide/' },
  },
  {
    id: 'restore-test',
    group: 'Backup & recovery',
    weight: 4,
    check: 'Does it commit to test restores — how often they run, and whether you are shown the result?',
    why: 'A backup nobody has restored from is a hypothesis. The date of the last successful test restore is the most useful number in an IT agreement, and it is almost never in the quote.',
    ask: 'How often do you perform a test restore, what exactly do you restore, and will you send us the evidence each time — starting with the date of the last one you ran for a client our size?',
  },
  {
    id: 'rto-rpo',
    group: 'Backup & recovery',
    weight: 3,
    check: 'Does it put numbers on recovery — how much data you could lose, and how long you would be down?',
    why: 'Recovery point and recovery time objectives turn we have backups into something you can measure a provider against. Without them there is no agreed definition of a successful recovery.',
    ask: 'What recovery point and recovery time objectives are you committing to for our servers and for Microsoft 365, and what happens if a real recovery misses them?',
    link: { label: 'Disaster recovery planning for Ontario businesses', to: '/resources/disaster-recovery-plan-small-business-ontario/' },
  },

  // ------------------------------------------------------- Ownership/exit
  {
    id: 'tenant-ownership',
    group: 'Ownership & exit',
    weight: 4,
    check: 'Does it say who owns the Microsoft 365 tenant and holds the global administrator credentials — you or the provider?',
    why: 'If the provider owns the tenant, changing provider means a migration rather than a handover. This single clause is what most often turns a routine switch into a project with a budget.',
    ask: 'Will our organisation be the legal owner of the Microsoft 365 tenant and our domain, and will we hold a global admin account of our own for the life of the agreement?',
    link: { label: 'Microsoft 365 security best practices', to: '/resources/microsoft-365-security-best-practices-2026/' },
  },
  {
    id: 'documentation',
    group: 'Ownership & exit',
    weight: 3,
    check: 'Does it say you receive the documentation — network diagram, asset inventory, credentials — and in what format if you leave?',
    why: 'Documentation built while managing your environment is exactly what a successor needs on day one. If it stays inside the outgoing provider’s system, you pay somebody to rediscover your own network.',
    ask: 'On termination, what documentation do we receive, in what format, within how many days, and at what cost?',
  },
  {
    id: 'backup-data-exit',
    group: 'Ownership & exit',
    weight: 3,
    check: 'Does it say who holds your backup data, and how you get it back if the relationship ends?',
    why: 'Backups sitting in a provider’s own tenant or appliance can be the hardest asset to extract. Format, timeline and any egress fee should be written down long before you need them.',
    ask: 'If we terminate, how do we receive our backup data, in what format, over what period, and is there a fee attached?',
  },
  {
    id: 'exit-terms',
    group: 'Ownership & exit',
    weight: 3,
    check: 'Does it set out the term, the notice period, whether it auto-renews, and any early-termination charge?',
    why: 'Auto-renewal with a short notice window is common and entirely legal. The problem is finding out about it four days after it renewed for another year.',
    ask: 'What is the term, how much notice must we give, does it auto-renew, and what does it cost to leave early?',
  },

  // ---------------------------------------------------------- Commercials
  {
    id: 'projects',
    group: 'Commercial terms',
    weight: 3,
    check: 'Is the line drawn between covered work and project work — migrations, new sites, hardware, licences?',
    why: 'Every managed agreement has a boundary between routine support and project work. A good quote draws it explicitly; a weak one leaves it to be argued once the work is already underway.',
    ask: 'Give us three concrete examples of work that would be billed as a project rather than covered by the monthly fee, plus your project rate.',
  },
  {
    id: 'price-change',
    group: 'Commercial terms',
    weight: 2,
    check: 'Does it say how and when the monthly price can change?',
    why: 'Per-user pricing moving with headcount is normal and expected. Uncapped discretionary increases and index-linked escalators are the clauses worth reading twice.',
    ask: 'Under what circumstances can the monthly fee change mid-term, how much notice do we get, and is any increase capped?',
  },
  {
    id: 'onboarding',
    group: 'Commercial terms',
    weight: 2,
    check: 'Does it state the onboarding fee, how long onboarding takes, and what it covers?',
    why: 'Onboarding is real work — discovery, documentation, agent deployment, and fixing whatever gets found. A quote showing a monthly fee with no onboarding line is either absorbing that cost or has not scoped it yet.',
    ask: 'Is there an onboarding fee? What does it include, how long does onboarding take, and which remediation is inside it versus billed on top?',
    link: { label: 'How to choose a managed IT provider', to: '/resources/choosing-managed-it-provider-toronto/' },
  },
];

const MAX_POINTS = ITEMS.reduce((sum, i) => sum + i.weight, 0);

const GROUPS = ['Scope & support', 'Security inclusions', 'Backup & recovery', 'Ownership & exit', 'Commercial terms'];

const STATE_POINTS: Record<State, (weight: number) => number> = {
  written: () => 0,
  vague: (w) => Math.ceil(w / 2),
  missing: (w) => w,
};

const STATE_LABEL: Record<State, string> = {
  written: 'In writing',
  vague: 'Mentioned, not specific',
  missing: 'Not there, or unsure',
};

interface Band {
  label: string;
  range: string;
  summary: string;
  bg: string;
  ring: string;
  bar: string;
  color: string;
}

const getBand = (score: number): Band => {
  if (score >= 90)
    return {
      label: 'Unusually complete',
      range: '90-100',
      summary:
        'This document answers nearly everything a buyer needs to know before signing. Close out whatever is still flagged below, and you can compare it against another quote line by line rather than on price alone.',
      bg: 'bg-green-50',
      ring: 'ring-green-200',
      bar: 'bg-green-600',
      color: 'text-green-700',
    };
  if (score >= 70)
    return {
      label: 'Mostly clear',
      range: '70-89',
      summary:
        'A solid document with a handful of gaps. The items below are the ones that tend to surface as an invoice or an argument later, so get answers in writing before you sign rather than after.',
      bg: 'bg-lime-50',
      ring: 'ring-lime-200',
      bar: 'bg-lime-600',
      color: 'text-lime-700',
    };
  if (score >= 45)
    return {
      label: 'Typical — real gaps',
      range: '45-69',
      summary:
        'This is where most quotes land. Nothing here means the provider is bad; it means the document does not yet tell you what you are buying. Send the questions below and ask for the answers to be written into the agreement.',
      bg: 'bg-amber-50',
      ring: 'ring-amber-200',
      bar: 'bg-amber-500',
      color: 'text-amber-700',
    };
  if (score >= 20)
    return {
      label: 'Too vague to compare',
      range: '20-44',
      summary:
        'There is not enough detail here to compare this quote with another one, or to hold anyone to it. Treat the price as provisional until the items below are answered — the gaps, not the rate, are what will decide the real cost.',
      bg: 'bg-orange-50',
      ring: 'ring-orange-200',
      bar: 'bg-orange-500',
      color: 'text-orange-700',
    };
  return {
    label: 'Not a quote you can sign',
    range: '0-19',
    summary:
      'Almost nothing that determines cost, coverage or your ability to leave is written down. That is worth raising directly: a provider who cannot put these answers in a document before you are a client is unlikely to produce them once you are.',
    bg: 'bg-red-50',
    ring: 'ring-red-200',
    bar: 'bg-red-600',
    color: 'text-red-700',
  };
};

const FAQS = [
  {
    question: 'What does this managed IT quote checker do?',
    answer:
      'It walks you through 22 things that should be written into a managed IT or MSP proposal — help desk caps, what 24/7 actually means, on-site visits, MFA and endpoint protection, patching, email authentication, out-of-hours monitoring, incident response, backup scope and restore testing, recovery objectives, who owns the Microsoft 365 tenant, documentation and backup data on exit, term and auto-renewal, project boundaries, price changes and onboarding. For each one you mark whether it is in writing, vague, or absent. You get a clarity score out of 100 and a prioritised list of questions to send back to the provider.',
  },
  {
    question: 'Do I have to upload my contract or quote?',
    answer:
      'No. The tool never asks for the document, your company name, your email address or the provider’s name. You read your quote yourself and answer 22 yes/vague/no questions. The scoring runs entirely in your browser, nothing is transmitted to IT Rapid Support or anyone else, and your answers disappear when you close the tab.',
  },
  {
    question: 'Does a low score mean the provider is bad?',
    answer:
      'No, and it is important not to read it that way. The score measures the document, not the company. Plenty of capable providers write thin proposals, and a polished proposal is not proof of good delivery. What a low score tells you is that you cannot yet compare this quote against another one, and that several things which determine your real cost have not been agreed in writing.',
  },
  {
    question: 'Should I use this on an IT Rapid Support quote too?',
    answer:
      'Yes. The checklist is deliberately written to apply to any managed IT provider in the Greater Toronto Area, including us. If a proposal from IT Rapid Support does not answer one of these items, ask us the same question and we will put the answer in writing.',
  },
  {
    question: 'Why does email authentication appear in a quote checklist?',
    answer:
      'Because it is the clearest example of an item that gets marked complete without being finished. In our own DNS scan of 479 Greater Toronto Area business domains in August 2026, 52.6% published a DMARC record but only 20.7% had a policy that actually blocks forged mail. A provider can truthfully say DMARC is in place while spoofed invoices still land in your customers’ inboxes, which is why the quote should specify an enforcing policy and ongoing monitoring rather than just configuration.',
  },
  {
    question: 'How were the 22 items chosen?',
    answer:
      'They come from the inclusion matrix we publish on our own managed IT plans page, the seven questions we tell buyers to get in writing before signing with anyone, and the areas where scope is most often left undefined in the agreements we see when businesses switch to us. Each item is weighted by how much its absence tends to cost after signing, not by how difficult it is to answer.',
  },
];

const QuoteChecker: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, State>>({});
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === ITEMS.length;

  const lostPoints = useMemo(
    () =>
      ITEMS.reduce((sum, item) => {
        const state = answers[item.id];
        return state ? sum + STATE_POINTS[state](item.weight) : sum;
      }, 0),
    [answers]
  );

  const score = Math.round(((MAX_POINTS - lostPoints) / MAX_POINTS) * 100);
  const band = getBand(score);

  // Anything not in writing, worst first. Missing outranks vague at the same
  // weight, because a silent clause is harder to argue than a loose one.
  const gaps = useMemo(
    () =>
      ITEMS.filter((i) => answers[i.id] && answers[i.id] !== 'written')
        .map((item) => {
          const state = answers[item.id] as State;
          const lost = STATE_POINTS[state](item.weight);
          const priority = state === 'missing' && item.weight >= 4 ? 'Ask first' : lost >= 2 ? 'Ask before signing' : 'Worth clarifying';
          return { item, state, lost, priority };
        })
        .sort((a, b) => b.lost - a.lost || b.item.weight - a.item.weight),
    [answers]
  );

  const covered = useMemo(() => ITEMS.filter((i) => answers[i.id] === 'written'), [answers]);

  const questionText = useMemo(
    () =>
      [
        'Questions on the proposal, before we sign:',
        '',
        ...gaps.map((g, i) => `${i + 1}. ${g.item.ask}`),
        '',
        'Checklist generated with the free quote checker at https://itrapidsupport.com/tools/it-quote-checker/',
      ].join('\n'),
    [gaps]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(questionText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
    window.scrollTo(0, 0);
  };

  const url = '/tools/it-quote-checker/';
  const title = 'Managed IT Quote Checker | Free MSP Check';
  const description =
    'Free checker for managed IT and MSP quotes. Score 22 items on scope, security, backups, ownership and exit terms, and get the questions to ask before you sign.';

  const schema = [
    generateLocalBusinessSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Managed IT Quote Checker',
      url: 'https://itrapidsupport.com/tools/it-quote-checker/',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Managed IT proposal review checklist',
      operatingSystem: 'Any (runs in a web browser)',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CAD',
      },
      featureList: [
        '22 weighted checks across scope, security, backup, ownership and commercial terms',
        'Quote clarity score from 0 to 100 with a plain-language verdict',
        'Prioritised list of questions to send the provider, copyable in one click',
        'No document upload and no sign-up — scoring runs entirely in the browser',
      ],
      provider: {
        '@type': 'Organization',
        name: 'IT Rapid Support',
        url: 'https://itrapidsupport.com/',
        telephone: '+1-289-582-9930',
      },
      inLanguage: 'en-CA',
    },
    generateFAQSchema(FAQS),
  ];

  return (
    <PageTransition>
      <SEO
        title={title}
        description={description}
        keywords="managed IT quote checker, MSP contract checklist, what should be in an IT support quote, compare managed IT quotes Toronto, IT services contract review, managed services agreement checklist"
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Managed IT Quote Checker', url },
        ]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
              <FileSearch className="h-4 w-4 text-red-200 mr-2" />
              <span className="text-red-200 text-sm font-medium">Free · 22 checks · no upload, no sign-up</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What is missing from your managed IT quote?
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Two managed IT proposals can carry the same monthly price and cover completely different things. Open the
              quote in front of you, work through 22 checks, and see a clarity score plus the exact questions to send
              back before you sign. Built for Greater Toronto Area businesses by IT Rapid Support in Vaughan.
            </p>
            <div className="inline-flex items-start bg-white/10 rounded-lg px-4 py-3 text-slate-200 text-sm max-w-2xl">
              <Lock className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-green-300" />
              <span>
                <strong className="text-white">Never upload your contract.</strong> This tool does not ask for the
                document, your company, your email or the provider’s name. You read the quote, you answer the checks,
                and the scoring runs on your own device — nothing is sent anywhere and your answers are gone when you
                close the tab.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Checker */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showResult ? (
            <>
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Read your quote and mark each item</span>
                  <span>
                    {answeredCount} of {ITEMS.length} checked
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 transition-all duration-300"
                    style={{ width: `${(answeredCount / ITEMS.length) * 100}%` }}
                  />
                </div>
              </div>

              {GROUPS.map((group) => (
                <div key={group} className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{group}</h2>
                  <div className="space-y-6">
                    {ITEMS.filter((i) => i.group === group).map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-baseline justify-between mb-3 gap-4">
                          <div className="text-xs font-semibold uppercase tracking-wide text-red-600">
                            {ITEMS.indexOf(item) + 1} of {ITEMS.length}
                          </div>
                          <div className="text-xs text-gray-400 whitespace-nowrap">weight {item.weight}</div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">{item.check}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {(['written', 'vague', 'missing'] as State[]).map((state) => {
                            const selected = answers[item.id] === state;
                            return (
                              <button
                                key={state}
                                type="button"
                                aria-pressed={selected}
                                onClick={() => setAnswers((prev) => ({ ...prev, [item.id]: state }))}
                                className={`px-4 py-3 rounded-lg border text-sm text-left transition-colors flex items-center justify-between gap-2 ${
                                  selected
                                    ? 'border-red-600 bg-red-50 text-gray-900'
                                    : 'border-gray-200 hover:border-red-300 text-gray-700'
                                }`}
                              >
                                <span>{STATE_LABEL[state]}</span>
                                {selected && <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button
                type="button"
                disabled={!allAnswered}
                onClick={() => {
                  setShowResult(true);
                  window.scrollTo(0, 0);
                }}
                className={`mt-2 w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-medium transition-colors ${
                  allAnswered ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {allAnswered ? 'See what is missing' : `Mark all ${ITEMS.length} items to continue`}
                {allAnswered && <ArrowRight className="ml-2 h-5 w-5" />}
              </button>
            </>
          ) : (
            <>
              <div className={`rounded-2xl p-8 ${band.bg} ring-1 ${band.ring} mb-8`}>
                <div className="mb-6">
                  <div className={`text-sm font-semibold uppercase tracking-wide ${band.color}`}>
                    {band.label} <span className="font-normal normal-case">({band.range})</span>
                  </div>
                  <div className="text-4xl font-bold text-gray-900">{score}/100</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Quote clarity score · {covered.length} of {ITEMS.length} items in writing
                  </div>
                </div>
                <div className="h-3 bg-white/70 rounded-full overflow-hidden mb-6">
                  <div className={`h-full ${band.bar}`} style={{ width: `${score}%` }} />
                </div>
                <p className="text-gray-700 leading-relaxed">{band.summary}</p>
              </div>

              {gaps.length > 0 ? (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Ask these before you sign</h2>
                  <p className="text-gray-600 mb-6">
                    Ranked by how much the silence tends to cost. Send them as written — a provider who will answer
                    these in a document is telling you something useful, and so is one who will not.
                  </p>
                  <div className="space-y-4">
                    {gaps.map(({ item, state, priority }) => (
                      <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <h3 className="text-lg font-bold text-gray-900">{item.group}</h3>
                          <span
                            className={`text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full whitespace-nowrap ${
                              priority === 'Ask first'
                                ? 'bg-red-50 text-red-700'
                                : priority === 'Ask before signing'
                                ? 'bg-orange-50 text-orange-700'
                                : 'bg-yellow-50 text-yellow-700'
                            }`}
                          >
                            {priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          You marked: “{STATE_LABEL[state]}” — {item.check}
                        </p>
                        <p className="text-gray-700 mb-4">{item.why}</p>
                        <div className="bg-slate-50 border-l-4 border-red-600 rounded-r-lg p-4 mb-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Ask them</p>
                          <p className="text-gray-900 font-medium">{item.ask}</p>
                        </div>
                        {item.link && (
                          <Link
                            to={item.link.to}
                            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                          >
                            {item.link.label} <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Every item is in writing</h2>
                      <p className="text-gray-700">
                        That is rare. You can now compare this proposal against another one line by line rather than on
                        headline price, which is the only comparison that means anything.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {covered.length > 0 && gaps.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">
                    Already covered ({covered.length} of {ITEMS.length})
                  </h2>
                  <ul className="space-y-2">
                    {covered.map((item) => (
                      <li key={item.id} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item.check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                {gaps.length > 0 && (
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
                  >
                    {copied ? (
                      <>
                        <ClipboardCheck className="mr-2 h-4 w-4" /> Questions copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" /> Copy the questions
                      </>
                    )}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-white transition-colors"
                >
                  <Printer className="mr-2 h-4 w-4" /> Print or save as PDF
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-white transition-colors"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Start again
                </button>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">Want a quote you can hold us to?</h2>
                <p className="text-slate-300 mb-5">
                  IT Rapid Support publishes what is in each plan line by line, and we will answer every question above
                  in writing before you sign anything. We are at 7810 Keele St in Vaughan and support businesses across
                  the GTA.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact/"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Ask us for a proposal <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="tel:+12895829930"
                    className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (289) 582-9930
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How the score is built</h2>
          <p className="text-gray-600 mb-4">
            Each of the {ITEMS.length} items carries a weight from 2 to 4 based on how expensive its absence tends to be
            after signing. Something written clearly costs nothing. Something mentioned without specifics costs half the
            weight, because a loose clause is still an argument you can have. Something absent costs the full weight.
            The points you keep, out of a possible {MAX_POINTS}, become a clarity score from 0 to 100.
          </p>
          <p className="text-gray-600 mb-4">
            The weights are ours and they are printed next to every item, so you can disagree with them. The heaviest
            items — help desk caps, what 24/7 means, MFA enforcement, endpoint licensing, backup scope, restore testing
            and who owns your Microsoft 365 tenant — are the ones that most often turn into an unexpected invoice or a
            painful exit.
          </p>
          <p className="text-gray-600 mb-4">
            The list itself comes from three places: the{' '}
            <Link to="/managed-it-plans/" className="text-red-600 hover:text-red-700 font-medium">
              line-by-line inclusion matrix we publish on our own plans page
            </Link>
            , the questions we tell buyers to get in writing before signing with anybody, and the gaps we keep finding
            in agreements when businesses move to us from another provider. One item cites our own measurement: in a DNS
            scan of 479 GTA business domains in August 2026, 52.6% published a DMARC record but only 20.7% had it set to
            block forged mail —{' '}
            <Link
              to="/resources/gta-business-email-platforms-2026/"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              the full dataset is published here
            </Link>
            .
          </p>
          <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">What this is not</h3>
            <p className="text-gray-700 mb-3">
              It scores a document, not a company. A capable provider can write a thin proposal, and a polished proposal
              is no guarantee of good delivery. A low score means you cannot yet compare this quote with another one —
              not that you should walk away.
            </p>
            <p className="text-gray-700">
              It is also not a legal review. If the agreement carries meaningful liability, indemnity or data-protection
              obligations, have a lawyer read it. This checklist covers the operational and commercial detail that
              decides what you actually get for the monthly fee.
            </p>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Before you sign, also worth reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'What managed IT actually costs',
                body: 'Pricing models, the real drivers behind a monthly fee, and where quotes are made to look cheaper than they are.',
                to: '/resources/managed-it-support-cost-toronto/',
                cta: 'Read the cost guide',
              },
              {
                title: 'Our plans, line by line',
                body: 'Eighteen capabilities across three plans, written out in full, plus how the monthly price is put together.',
                to: '/managed-it-plans/',
                cta: 'See the inclusion matrix',
              },
              {
                title: 'Free IT risk calculator',
                body: 'Fifteen weighted control areas scored in your browser, with a letter grade and your weakest points ranked.',
                to: '/it-risk-calculator/',
                cta: 'Score your own posture',
              },
            ].map((c) => (
              <div key={c.to} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{c.body}</p>
                <Link to={c.to} className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                  {c.cta} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Quote checker FAQs</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="py-16 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-10 w-10 text-red-300 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Comparing two providers?</h2>
          <p className="text-slate-300 mb-8">
            Run both quotes through the checker and compare the scores, not the prices — our guide to{' '}
            <Link to="/resources/how-to-compare-managed-it-quotes/" className="text-red-300 hover:text-red-200 underline">
              comparing managed IT quotes line by line
            </Link>{' '}
            covers how to normalise them onto one page. If you want a third proposal to measure them against, IT Rapid
            Support is in Vaughan and covers Toronto and the wider GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Request a proposal <ArrowRight className="ml-2 h-5 w-5" />
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
    </PageTransition>
  );
};

export default QuoteChecker;
