import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Lock,
  Mail,
  Phone,
  Printer,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, {
  generateLocalBusinessSchema,
  generateFAQSchema,
} from '../components/SEO';

interface Option {
  label: string;
  risk: number; // 0 = control in place, up to the question's weight = control absent
}

type DomainId = 'identity' | 'threat' | 'maintenance' | 'email' | 'data';

interface Question {
  id: string;
  category: string;
  question: string;
  /** Which sub-score this control rolls up into. Required, so a new question
   *  cannot be added without deciding where it counts. */
  domain: DomainId;
  /** Points this control contributes at worst. Higher = more consequential if missing. */
  weight: number;
  options: Option[];
  /** Plain-English explanation of why this control matters. Shown with the result. */
  why: string;
  /** What to actually do about it. Shown when the answer scored above zero. */
  fix: string;
  link?: { label: string; to: string };
}

// Weights are deliberately uneven. A missing backup or an unprotected admin
// account does more damage than a missing training programme, so it costs more.
// The control areas mirror the Canadian Centre for Cyber Security's Baseline
// Cyber Security Controls for Small and Medium Organizations.
const QUESTIONS: Question[] = [
  {
    id: 'backups',
    domain: 'data',
    category: 'Backup & Recovery',
    weight: 12,
    question: 'How are your business data and systems backed up — and have you tested a restore?',
    options: [
      { label: 'Automated, a copy is kept offsite, and we test restores on a schedule', risk: 0 },
      { label: 'Automated and offsite, but we have never actually restored from them', risk: 8 },
      { label: 'Manual or occasional backups only', risk: 10 },
      { label: 'No backups, or I am not sure', risk: 12 },
    ],
    why: 'A backup you have never restored from is a hypothesis, not a backup. Untested backups are the single most common reason a ransomware incident turns into weeks of downtime instead of a bad afternoon.',
    fix: 'Get backups automated, keep at least one copy offline or immutable, and book a real test restore. Restore an actual file and an actual server, and write down how long it took — that number is your true recovery time.',
    link: { label: 'Backup & disaster recovery guide', to: '/resources/cloud-backup-disaster-recovery-guide/' },
  },
  {
    id: 'mfa',
    domain: 'identity',
    category: 'Multi-Factor Authentication',
    weight: 12,
    question: 'Is multi-factor authentication enforced on email and your other key applications?',
    options: [
      { label: 'Enforced for every user, on email and the main business apps', risk: 0 },
      { label: 'Enforced for admins and some staff, not everyone', risk: 8 },
      { label: 'Available but optional — users can skip it', risk: 10 },
      { label: 'No MFA, or I am not sure', risk: 12 },
    ],
    why: 'Stolen passwords are cheap and plentiful. MFA is the control that makes a stolen password mostly useless, and it is the one most business email compromises get past because it was only turned on for some people.',
    fix: 'Enforce MFA for every account, not just admins — attackers target the accounts nobody is watching. Prefer an authenticator app or hardware key over SMS codes.',
    link: { label: 'MFA guide for GTA businesses', to: '/resources/multi-factor-authentication-guide-gta/' },
  },
  {
    id: 'endpoint',
    domain: 'threat',
    category: 'Endpoint Protection',
    weight: 12,
    question: 'What protects your computers and servers from malware and ransomware?',
    options: [
      { label: 'Managed endpoint detection and response, monitored around the clock', risk: 0 },
      { label: 'A paid endpoint protection product on every device, not monitored by anyone', risk: 6 },
      { label: 'Only the antivirus that came with the operating system', risk: 9 },
      { label: 'Nothing consistent, or I am not sure', risk: 12 },
    ],
    why: 'Modern ransomware is designed to look like ordinary administrative activity. Detection matters more than blocking — something has to notice the unusual behaviour and act on it, at 3am as readily as at 3pm.',
    fix: 'Standardise on one managed endpoint product across every device including personal laptops that touch company data, and make sure alerts go somewhere a human actually looks.',
    link: { label: 'Ransomware protection for Ontario businesses', to: '/resources/ransomware-protection-ontario-businesses/' },
  },
  {
    id: 'admin',
    domain: 'identity',
    category: 'Admin Account Hygiene',
    weight: 10,
    question: 'How are administrator accounts handled?',
    options: [
      { label: 'Separate admin accounts, MFA enforced, and we review who has admin quarterly', risk: 0 },
      { label: 'Separate admin accounts exist, but nobody reviews the list', risk: 6 },
      { label: 'Day-to-day accounts also carry admin rights', risk: 8 },
      { label: 'Shared admin logins, or I am not sure who has admin', risk: 10 },
    ],
    why: 'Admin rights are what turns one compromised mailbox into a company-wide incident. Shared admin logins are also unattributable — after an incident you cannot tell who did what.',
    fix: 'Give administrators a second, separate account for admin work, keep everyday accounts standard, kill shared logins, and review the admin list on a set date every quarter.',
    link: { label: 'Microsoft 365 security best practices', to: '/resources/microsoft-365-security-best-practices-2026/' },
  },
  {
    id: 'monitoring',
    domain: 'threat',
    category: 'Monitoring & Alerting',
    weight: 10,
    question: 'Is your network and email monitored for threats outside office hours?',
    options: [
      { label: 'Yes — 24/7 monitoring, and alerts are triaged by someone', risk: 0 },
      { label: 'Business-hours monitoring only', risk: 6 },
      { label: 'Alerts exist but generally go unread', risk: 8 },
      { label: 'No monitoring, or I am not sure', risk: 10 },
    ],
    why: 'Attacks are deliberately timed for evenings, weekends and long holidays, because that is when the gap between "something happened" and "somebody noticed" is longest.',
    fix: 'Make sure someone is accountable for alerts outside business hours. Unmonitored alerting is not monitoring — it is a log file nobody reads.',
    link: { label: 'Managed detection & response guide', to: '/resources/managed-threat-detection-monitoring-mdr-guide/' },
  },
  {
    id: 'patching',
    domain: 'maintenance',
    category: 'Patching & Updates',
    weight: 10,
    question: 'How do operating systems and third-party software get updated?',
    options: [
      { label: 'Centrally managed, with someone verifying that machines actually applied them', risk: 0 },
      { label: 'Automatic updates are on, but nobody checks compliance', risk: 5 },
      { label: 'Staff update their own machines when prompted', risk: 8 },
      { label: 'Updates are frequently deferred, or I am not sure', risk: 10 },
    ],
    why: 'Most exploited vulnerabilities have had a patch available for months. The gap is almost never that the fix did not exist — it is that a handful of machines never applied it and nobody was checking.',
    fix: 'Patch centrally and report on it. The number that matters is not "updates are enabled" but "what percentage of devices are actually current this month", and browsers, PDF readers and VPN clients count as much as Windows.',
    link: { label: 'Network management', to: '/services/network-management/' },
  },
  {
    id: 'emailauth',
    domain: 'email',
    category: 'Email Authentication (SPF, DKIM, DMARC)',
    weight: 10,
    question: 'Is your domain protected against someone spoofing your email address?',
    options: [
      { label: 'SPF, DKIM and DMARC are all published, and DMARC is set to quarantine or reject', risk: 0 },
      { label: 'SPF, DKIM and DMARC exist, but DMARC policy is still p=none', risk: 6 },
      { label: 'SPF only, or a partial setup', risk: 8 },
      { label: 'None of these are set up, or I am not sure', risk: 10 },
    ],
    why: 'Without an enforcing DMARC policy anyone can send email that appears to come from your domain — to your clients, your bookkeeper, or your bank. A DMARC record set to p=none monitors the abuse but does not stop it.',
    fix: 'Publish SPF, DKIM and DMARC, then move DMARC from p=none to quarantine and on to reject once the reports are clean. The middle step is where most organisations stall.',
    link: { label: 'Check your domain free', to: '/tools/email-spoof-check/' },
  },
  {
    id: 'eol',
    domain: 'maintenance',
    category: 'Unsupported Systems',
    weight: 10,
    question:
      'Are you still running any operating systems that have passed, or are about to pass, their end-of-support date?',
    options: [
      { label: 'All systems are on supported versions and we track the dates', risk: 0 },
      { label: 'We know of one or two and they are already scheduled for replacement', risk: 5 },
      { label: 'We have some and no plan yet', risk: 8 },
      { label: 'We are not sure what versions we are running', risk: 10 },
    ],
    why: 'An unsupported system stops receiving security patches while staying fully connected to everything else. Windows 10 reached end of support in October 2025, and Microsoft’s lifecycle table puts Windows Server 2016 at 13 January 2027 — so this is a moving deadline rather than a one-off.',
    fix: 'Inventory every operating system version in use, including virtual machines and vendor-supplied appliances. Put a replacement date against anything sitting inside eighteen months of its end-of-support date, and treat the ones you cannot identify as unsupported until proven otherwise.',
    link: {
      label: 'Windows 10 end of support: what it means',
      to: '/resources/windows-10-end-of-support-gta-businesses/',
    },
  },
  {
    id: 'm365',
    domain: 'email',
    category: 'Microsoft 365 Security Settings',
    weight: 9,
    question: 'If you use Microsoft 365, how are its security settings configured?',
    options: [
      { label: 'Reviewed and hardened deliberately — conditional access, legacy authentication disabled', risk: 0 },
      { label: 'Security defaults are on, but nothing beyond that', risk: 5 },
      { label: 'Left as it came out of the box, or configured once at migration and untouched since', risk: 7 },
      { label: 'I do not know how it is configured, or we do not use Microsoft 365', risk: 9 },
    ],
    why: 'A default Microsoft 365 tenant is built for compatibility first. Legacy authentication protocols, open mail forwarding rules and unrestricted sign-in locations are all things you have to go and turn off yourself.',
    fix: 'Review the tenant against a checklist rather than a memory: block legacy authentication, restrict external auto-forwarding, enable audit logging, and set conditional access rules that fit how your staff actually work.',
    link: { label: 'Microsoft 365 security best practices', to: '/resources/microsoft-365-security-best-practices-2026/' },
  },
  {
    id: 'offboarding',
    domain: 'identity',
    category: 'Staff Offboarding',
    weight: 9,
    question: 'When someone leaves, how quickly do their accounts and access actually get removed?',
    options: [
      { label: 'Same day, against a written checklist, and we verify it was done', risk: 0 },
      { label: 'Usually within a few days, informally', risk: 5 },
      { label: 'Email gets disabled, but other apps and remote access often linger', risk: 7 },
      { label: 'No consistent process, or I am not sure what is still active', risk: 9 },
    ],
    why: 'Orphaned accounts are attractive precisely because nobody is using them — no one notices the unusual login on an account whose owner left last year.',
    fix: 'Keep a written list of every system a staff member gets access to on day one, and use that same list on their last day. Include phones, VPN, line-of-business apps and any shared or vendor logins.',
    link: { label: 'Managed IT helpdesk', to: '/services/it-helpdesk/' },
  },
  {
    id: 'vendor',
    domain: 'identity',
    category: 'Vendor & Remote Access',
    weight: 9,
    question: 'Who else can get into your systems remotely — vendors, contractors, remote support tools?',
    options: [
      { label: 'We know exactly who has access, it is time-limited, MFA-protected and reviewed', risk: 0 },
      { label: 'We know roughly who has access, but it is standing and not reviewed', risk: 5 },
      { label: 'Several vendors have permanent remote access we have never audited', risk: 7 },
      { label: 'I am not sure who can get in remotely', risk: 9 },
    ],
    why: 'Remote monitoring and support tools are powerful by design, which makes them a favourite route in. An attacker who compromises a vendor inherits every client that vendor can reach.',
    fix: 'Write down every third party with remote access, what it is for, and whether it is still needed. Require MFA on those accounts too, and turn standing access into access that is granted when needed.',
    link: { label: 'Network security services', to: '/services/network-security-services/' },
  },
  {
    id: 'training',
    domain: 'email',
    category: 'Phishing & Staff Training',
    weight: 8,
    question: 'Do employees get security awareness and phishing training?',
    options: [
      { label: 'Ongoing training plus simulated phishing, with follow-up for those who click', risk: 0 },
      { label: 'A single session at onboarding', risk: 5 },
      { label: 'Informal reminders when something happens', risk: 6 },
      { label: 'No training, or I am not sure', risk: 8 },
    ],
    why: 'Phishing works on attention, not intelligence. Training is worth doing not because it makes staff perfect but because it makes them fast at reporting — and reporting time is what limits the damage.',
    fix: 'Run short, regular training rather than one long annual session, and make reporting a suspicious message easy and blame-free. The goal is a phone call in ten minutes, not a perfect score.',
    link: { label: 'How to stop phishing attacks', to: '/resources/stop-phishing-attacks-email-security/' },
  },
  {
    id: 'incident',
    domain: 'threat',
    category: 'Incident Response Plan',
    weight: 8,
    question: 'Do you have a plan for a cyber attack or a major outage — and has it been tested?',
    options: [
      { label: 'Documented, with named contacts, and walked through at least once a year', risk: 0 },
      { label: 'A plan exists on paper but has never been rehearsed', risk: 5 },
      { label: 'Only an informal sense of who we would call', risk: 6 },
      { label: 'No plan, or I am not sure', risk: 8 },
    ],
    why: 'The first hour decides how bad an incident gets. That is a bad time to be working out who to call, whether the insurer needs telling, and who is allowed to authorise taking systems offline.',
    fix: 'Write one page: who to call, in what order, who can make the decision to disconnect, and where the backups and contact list live offline. Then walk the team through it once, out loud.',
    link: { label: 'Disaster recovery planning', to: '/resources/disaster-recovery-plan-small-business-ontario/' },
  },
  {
    id: 'encryption',
    domain: 'data',
    category: 'Data at Rest & Devices',
    weight: 8,
    question: 'Are laptops, desktops and phones encrypted, and can you wipe a lost device?',
    options: [
      { label: 'Disk encryption is on everywhere and we can remotely wipe a lost device', risk: 0 },
      { label: 'Encryption on most company devices, no remote wipe capability', risk: 5 },
      { label: 'Personal devices access company data with no controls', risk: 6 },
      { label: 'No encryption, or I am not sure', risk: 8 },
    ],
    why: 'A lost or stolen unencrypted laptop is a data breach with a name on it. Encryption turns the same event into a hardware replacement.',
    fix: 'Turn on full-disk encryption on every company device and confirm it is actually active, not just available. Add remote wipe for anything mobile, and decide deliberately what personal devices are allowed to touch.',
    link: { label: 'PIPEDA compliance IT checklist', to: '/resources/pipeda-compliance-it-checklist-ontario/' },
  },
  {
    id: 'support',
    domain: 'maintenance',
    category: 'IT Support Model',
    weight: 8,
    question: 'How is day-to-day IT handled today?',
    options: [
      { label: 'A proactive managed or co-managed IT provider, with monitoring and maintenance included', risk: 0 },
      { label: 'One internal person, or a part-timer wearing several hats', risk: 4 },
      { label: 'We call someone only when something breaks', risk: 6 },
      { label: 'Nobody really owns IT, or I am not sure', risk: 8 },
    ],
    why: 'Almost every control on this page is maintenance, not a purchase. Break-fix support is paid to fix what already broke, which means nobody is paid to notice the drift beforehand.',
    fix: 'Decide who is accountable for the boring recurring work — patch compliance, backup tests, access reviews — and put it in writing. That is the difference between having controls and having had controls.',
    link: { label: 'Signs you have outgrown break-fix IT', to: '/resources/signs-business-outgrown-break-fix-it/' },
  },
];

const MAX_RISK = QUESTIONS.reduce((sum, q) => sum + q.weight, 0);

// Sub-scores. Each domain's maximum is derived from the question weights rather
// than written down, so it cannot go stale when a question is added or reweighted.
const DOMAINS: { id: DomainId; name: string; blurb: string }[] = [
  {
    id: 'identity',
    name: 'Identity & Access',
    blurb: 'Who can get in, with what rights, and whether that list is ever reviewed.',
  },
  {
    id: 'threat',
    name: 'Threat Defence',
    blurb: 'Whether something notices an attack in progress, and what happens next.',
  },
  {
    id: 'maintenance',
    name: 'Maintenance & Support',
    blurb: 'The recurring work that keeps everything else from quietly drifting.',
  },
  {
    id: 'email',
    name: 'Email & Microsoft 365',
    blurb: 'The route most incidents actually arrive through.',
  },
  {
    id: 'data',
    name: 'Data & Recovery',
    blurb: 'What survives when prevention has already failed.',
  },
];

const DOMAIN_MAX: Record<DomainId, number> = QUESTIONS.reduce(
  (acc, q) => ({ ...acc, [q.domain]: (acc[q.domain] ?? 0) + q.weight }),
  {} as Record<DomainId, number>
);

// Single source of truth for the bands. The letter grade, the descriptive label
// and the printed range all come from this one array, so the code, the on-page
// copy and the FAQ cannot disagree about where a boundary sits.
interface Band {
  grade: string;
  label: string;
  /** Inclusive upper bound of the band. */
  max: number;
  range: string;
  color: string;
  bg: string;
  ring: string;
  bar: string;
  summary: string;
  icon: React.ReactNode;
}

const BANDS: Band[] = [
  {
    grade: 'A',
    label: 'Low Risk',
    max: 14,
    range: '0–14',
    color: 'text-green-700',
    bg: 'bg-green-50',
    ring: 'ring-green-200',
    bar: 'bg-green-500',
    summary:
      'Based on your answers the fundamentals are in place. The work now is keeping them there — controls drift quietly, so the value is in the recurring checks: test restores, access reviews, and patch reporting.',
    icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
  },
  {
    grade: 'B',
    label: 'Low Risk',
    max: 29,
    range: '15–29',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    ring: 'ring-emerald-200',
    bar: 'bg-emerald-500',
    summary:
      'A solid posture with specific gaps worth closing this quarter. Nothing flagged below is structural — these are individual controls to finish rather than a programme to build.',
    icon: <ShieldCheck className="h-10 w-10 text-emerald-600" />,
  },
  {
    grade: 'C',
    label: 'Moderate Risk',
    max: 49,
    range: '30–49',
    color: 'text-yellow-700',
    bg: 'bg-yellow-50',
    ring: 'ring-yellow-200',
    bar: 'bg-yellow-500',
    summary:
      'Real protections with real holes between them. Nothing here suggests a crisis, but the items flagged below are the ones an attacker would reach for first, and most of them are fixable in weeks rather than months.',
    icon: <ShieldAlert className="h-10 w-10 text-yellow-600" />,
  },
  {
    grade: 'D',
    label: 'Elevated Risk',
    max: 69,
    range: '50–69',
    color: 'text-orange-700',
    bg: 'bg-orange-50',
    ring: 'ring-orange-200',
    bar: 'bg-orange-500',
    summary:
      'Several controls that contain an incident are missing or unverified. The realistic exposure here is ransomware or business email compromise turning into extended downtime rather than a contained problem. Work down the list below in order.',
    icon: <AlertTriangle className="h-10 w-10 text-orange-600" />,
  },
  {
    grade: 'F',
    label: 'High Risk',
    max: 100,
    range: '70–100',
    color: 'text-red-700',
    bg: 'bg-red-50',
    ring: 'ring-red-200',
    bar: 'bg-red-600',
    summary:
      'Most of what limits the damage of a common incident is absent or unknown. In this state a single successful phishing email can reach data, backups and email at the same time. Start at the top of the list below — the first two or three items remove most of the exposure.',
    icon: <AlertTriangle className="h-10 w-10 text-red-600" />,
  },
];

function getBand(score: number): Band {
  return BANDS.find((b) => score <= b.max) ?? BANDS[BANDS.length - 1];
}

// The 90-day plan is a re-presentation of the severity label already computed
// per gap. No new judgement, no invented timelines.
const PHASES: { severity: string; title: string; note: string }[] = [
  {
    severity: 'Fix first',
    title: 'First 30 days',
    note: 'These scored at or near the full weight of their control. They remove the most exposure per hour spent.',
  },
  {
    severity: 'Fix soon',
    title: 'Days 31–60',
    note: 'Partial controls. Something is in place; it is not finished or not verified.',
  },
  {
    severity: 'Tighten',
    title: 'Days 61–90',
    note: 'Small gaps. Worth closing once the items above are done, not before.',
  },
];

const FAQS = [
  {
    question: 'How does the IT risk calculator work?',
    answer:
      'You answer 15 questions covering backups, multi-factor authentication, endpoint protection, admin accounts, monitoring, patching, email authentication, Microsoft 365 settings, unsupported operating systems, offboarding, vendor and remote access, staff training, incident response, device encryption, and your IT support model. Each control carries a weight based on how much damage its absence tends to cause, your answers are added up, and the total is expressed as a 0-100 risk score with the weak areas listed in priority order.',
  },
  {
    question: 'What do the letter grades mean?',
    // Generated from BANDS so the FAQ, the JSON-LD and the scoring code cannot
    // disagree about where a boundary sits.
    answer:
      'The score is converted to a letter grade on fixed bands: ' +
      BANDS.map((b) => `${b.grade} is ${b.range} (${b.label.toLowerCase()})`).join(', ') +
      '. A lower score is better, because the number counts weighted risk points rather than marks earned. The result also breaks down into five areas — ' +
      DOMAINS.map((d) => d.name).join(', ') +
      ' — so you can see which one is driving the overall figure.',
  },
  {
    question: 'Is anything I enter sent to IT Rapid Support?',
    answer:
      'No. The calculator runs entirely in your browser. There is no form to submit, no account, no analytics event carrying your answers, and no server receiving them. Nothing is stored — closing or refreshing the page clears it. If you want us to look at your results you have to contact us and tell us yourself — the "email me these results" button simply opens your own mail app with a prefilled message, and nothing is sent unless you press send.',
  },
  {
    question: 'Is this a security audit?',
    answer:
      'No, and it should not be presented as one. It is a structured self-assessment: it reflects what you tell it, it scans nothing, and it cannot see your network. It is useful for deciding what to look at first and for showing a management team where the gaps are. A real assessment involves looking at the actual tenant, devices and configuration.',
  },
  {
    question: 'Why are some questions worth more than others?',
    answer:
      'Because the consequences are not equal. Missing backups, missing multi-factor authentication and unmanaged endpoint protection carry the heaviest weight (12 points each) because each one on its own can turn a routine incident into weeks of downtime. Staff training and incident response planning carry 8 points — they matter, but they reduce damage rather than prevent access. The weights are shown so you can disagree with them.',
  },
  {
    question: 'What should I do with my score?',
    answer:
      'Work the flagged items top-down. The list is already ordered by how much each gap contributes to your score, so the first two or three items are where the effort pays off most. If you would rather have someone go through it with you, IT Rapid Support serves businesses across the Greater Toronto Area from Vaughan — call (289) 582-9930.',
  },
  {
    question: 'Who is this for?',
    answer:
      'Small and mid-sized Ontario businesses that want a fast, honest read on where their IT and security posture is weak — including professional services, healthcare, real estate, construction and trades, and any business running on Microsoft 365.',
  },
];

const RiskCalculator: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const rawRisk = useMemo(
    () => Object.values(answers).reduce((a, b) => a + b, 0),
    [answers]
  );
  const score = Math.round((rawRisk / MAX_RISK) * 100);
  const band = getBand(score);

  // Points at risk per domain, so a business can see that its overall number is
  // being driven by one weak area rather than by everything being mediocre.
  const domainScores = useMemo(
    () =>
      DOMAINS.map((d) => {
        const max = DOMAIN_MAX[d.id] ?? 0;
        const risk = QUESTIONS.filter((q) => q.domain === d.id).reduce(
          (sum, q) => sum + (answers[q.id] ?? 0),
          0
        );
        return { ...d, risk, max, pct: max ? Math.round((risk / max) * 100) : 0 };
      }).sort((a, b) => b.pct - a.pct),
    [answers]
  );

  // Every control the answers scored above zero, worst first. Ties break by
  // weight so the more consequential control is actioned first.
  const gaps = useMemo(
    () =>
      QUESTIONS.filter((q) => (answers[q.id] ?? 0) > 0)
        .sort((a, b) => {
          const diff = (answers[b.id] ?? 0) - (answers[a.id] ?? 0);
          return diff !== 0 ? diff : b.weight - a.weight;
        })
        .map((q) => {
          const risk = answers[q.id] ?? 0;
          const ratio = risk / q.weight;
          const severity = ratio >= 0.75 ? 'Fix first' : ratio >= 0.4 ? 'Fix soon' : 'Tighten';
          const chosen = q.options.find((o) => o.risk === risk);
          return { q, risk, severity, chosenLabel: chosen?.label ?? '' };
        }),
    [answers]
  );

  // Optional, user-initiated only. Opens the visitor's own mail client with a
  // prefilled summary; nothing is transmitted unless they choose to hit send.
  // Keeps the "nothing leaves your browser" claim literally true.
  const mailtoHref = useMemo(() => {
    const lines = [
      `My IT risk score: ${score}/100 — grade ${band.grade} (${band.label})`,
      '',
      gaps.length
        ? 'Flagged controls, worst first:'
        : 'No controls were flagged.',
      ...gaps.map((g, i) => `${i + 1}. [${g.severity}] ${g.q.category} - ${g.chosenLabel}`),
      '',
      'Please get in touch about the items above.',
      '',
      'Name:',
      'Company:',
      'Best number:',
    ];
    return `mailto:info@itrapidsupport.com?subject=${encodeURIComponent(
      `IT risk assessment - score ${score}/100, grade ${band.grade}`
    )}&body=${encodeURIComponent(lines.join('\n'))}`;
  }, [score, band, gaps]);

  const url = '/it-risk-calculator/';
  const title = 'Free IT Security Risk Calculator | Ontario';
  const description =
    'Free IT risk assessment for Ontario businesses. Answer 15 questions on backups, MFA, email security and unsupported systems for an instant A-F risk grade.';

  const schema = [
    generateLocalBusinessSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'IT Security Risk Calculator',
      url: 'https://itrapidsupport.com/it-risk-calculator/',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Security risk self-assessment',
      operatingSystem: 'Any (runs in a web browser)',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CAD',
      },
      featureList: [
        '15 weighted questions across core security control areas',
        'Instant A-F risk grade with five domain sub-scores',
        'Instant 0-100 risk score with a risk band',
        'Weak areas listed in priority order with plain-English remediation steps',
        'Runs entirely in the browser — no data is transmitted or stored',
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

  const handleSelect = (qid: string, risk: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: risk }));
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
    window.scrollTo(0, 0);
  };

  return (
    <PageTransition>
      <SEO
        title={title}
        description={description}
        keywords="IT security risk calculator, free IT risk assessment Toronto, cybersecurity risk assessment Ontario, IT risk score, cyber risk assessment small business, security self assessment GTA"
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
              <span className="text-red-200 text-sm font-medium">Free · 15 questions · no sign-up</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How exposed is your business to a cyber attack?
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Answer 15 questions about the controls that decide how bad an incident gets, and see a
              weighted risk score, your weakest areas in priority order, and what to do about each
              one. Built for Ontario businesses by IT Rapid Support in Vaughan.
            </p>
            <div className="inline-flex items-start bg-white/10 rounded-lg px-4 py-3 text-slate-200 text-sm max-w-2xl">
              <Lock className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-green-300" />
              <span>
                <strong className="text-white">Nothing you enter leaves your browser.</strong> There
                is no form, no email required and no server behind this page — the scoring runs in
                your own device and your answers are gone when you close the tab.
              </span>
            </div>
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
                  <span className="font-medium">Your IT risk self-assessment</span>
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
                    <div className="flex items-baseline justify-between mb-2 gap-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-red-600">
                        {idx + 1}. {q.category}
                      </div>
                      <div className="text-xs text-gray-400 whitespace-nowrap">
                        weight {q.weight}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{q.question}</h3>
                    <div className="space-y-3">
                      {q.options.map((o) => {
                        const selected = answers[q.id] === o.risk;
                        return (
                          <button
                            key={o.label}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => handleSelect(q.id, o.risk)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center justify-between ${
                              selected
                                ? 'border-red-600 bg-red-50 text-gray-900'
                                : 'border-gray-200 hover:border-red-300 text-gray-700'
                            }`}
                          >
                            <span>{o.label}</span>
                            {selected && (
                              <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 ml-3" />
                            )}
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
              <div
                className={`rounded-2xl p-8 ${band.bg} ring-1 ${band.ring} mb-8`}
                aria-live="polite"
              >
                <div className="flex items-center gap-4 mb-6">
                  {band.icon}
                  <div>
                    <div className={`text-sm font-semibold uppercase tracking-wide ${band.color}`}>
                      Grade {band.grade} · {band.label}{' '}
                      <span className="font-normal normal-case">({band.range})</span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900">{score}/100</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {rawRisk} of a possible {MAX_RISK} weighted risk points
                    </div>
                  </div>
                </div>
                <div className="h-3 bg-white/70 rounded-full overflow-hidden mb-6">
                  <div className={`h-full ${band.bar}`} style={{ width: `${score}%` }} />
                </div>
                <p className="text-gray-700 leading-relaxed">{band.summary}</p>
              </div>

              {/* Domain sub-scores. A single overall number hides which area is
                  actually driving it. */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Where the score comes from</h2>
                <p className="text-gray-600 mb-6">
                  The same answers grouped into five areas, worst first. A business at 80% in one
                  area and near zero in the rest has a very different problem from one sitting at
                  40% across the board.
                </p>
                <div className="space-y-5">
                  {domainScores.map((d) => (
                    <div key={d.id}>
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <h3 className="font-bold text-gray-900">{d.name}</h3>
                        <span className="text-sm text-gray-600 whitespace-nowrap">
                          {d.risk} / {d.max} points at risk
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                        <div
                          className={`h-full ${
                            d.pct >= 70
                              ? 'bg-red-600'
                              : d.pct >= 50
                              ? 'bg-orange-500'
                              : d.pct >= 30
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${d.pct}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500">{d.blurb}</p>
                    </div>
                  ))}
                </div>
              </div>

              {gaps.length > 0 ? (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    What to fix, in order
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Ranked by how much each gap adds to your score. Working top-down removes the most
                    exposure for the least effort.
                  </p>
                  <div className="space-y-4">
                    {gaps.map(({ q, risk, severity, chosenLabel }) => (
                      <div key={q.id} className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <h3 className="text-lg font-bold text-gray-900">{q.category}</h3>
                          <span
                            className={`text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full whitespace-nowrap ${
                              severity === 'Fix first'
                                ? 'bg-red-50 text-red-700'
                                : severity === 'Fix soon'
                                ? 'bg-orange-50 text-orange-700'
                                : 'bg-yellow-50 text-yellow-700'
                            }`}
                          >
                            {severity} · +{risk}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          You answered: “{chosenLabel}”
                        </p>
                        <p className="text-gray-700 mb-3">{q.why}</p>
                        <p className="text-gray-900 font-medium mb-3">{q.fix}</p>
                        {q.link && (
                          <Link
                            to={q.link.to}
                            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                          >
                            {q.link.label} <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* 90-day plan — the same flagged controls, bucketed by the
                      severity already computed above. No new judgement. */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">A 90-day order of work</h3>
                    <p className="text-gray-600 mb-6">
                      The same flagged items, grouped by urgency rather than listed flat. Nothing new
                      is added here — it is your list, sequenced.
                    </p>
                    <div className="space-y-6">
                      {PHASES.map((phase) => {
                        const items = gaps.filter((g) => g.severity === phase.severity);
                        if (!items.length) return null;
                        return (
                          <div key={phase.severity}>
                            <h4 className="font-bold text-gray-900">{phase.title}</h4>
                            <p className="text-sm text-gray-500 mb-2">{phase.note}</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              {items.map((g) => (
                                <li key={g.q.id}>{g.q.category}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">No gaps flagged</h2>
                  <p className="text-gray-700">
                    You selected the strongest option on all 15 controls. That is an unusually
                    complete posture for a small business, so the useful next question is evidence:
                    when was the last restore actually tested, and when was the admin list last
                    reviewed? A self-assessment records intent — the value is in verifying it.
                  </p>
                </div>
              )}

              {/* Honest context — our own published measurement, no invented benchmarks */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  One real comparison number
                </h2>
                <p className="text-gray-700 mb-3">
                  We do not publish an “average score” for this calculator, because we have not
                  measured one and inventing a benchmark would make your result look more precise
                  than it is. We have measured one of these controls directly, though. In a scan of
                  500 GTA business domains we ran on 1 August 2026, 481 were mail-enabled. Of those,
                  91.7% published SPF and 52.4% published a DMARC record — but only{' '}
                  <strong>20.6% had DMARC actually set to quarantine or reject</strong>. Roughly
                  three in five organisations that had bothered to publish DMARC had left it at
                  p=none, where it reports abuse without stopping it.
                </p>
                <p className="text-gray-700 mb-4">
                  If your answer to the email authentication question was “DMARC exists but is still
                  p=none”, that is the single most common configuration in the GTA — and it is one
                  policy change away from being fixed.
                </p>
                <Link
                  to="/resources/gta-smb-cybersecurity-report-2026/"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Read the full GTA SMB Cybersecurity Report 2026{' '}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Soft CTA */}
              <div className="bg-slate-900 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-bold text-white mb-2">Want a second pair of eyes?</h2>
                <p className="text-slate-300 mb-5">
                  Your answers stayed in your browser, so we have not seen them. If you would like to
                  go through the flagged items with someone, IT Rapid Support supports businesses
                  across the GTA from 7810 Keele St in Vaughan, with a 24/7 helpdesk. No obligation
                  and nothing to sign up for.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact/"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Contact us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="tel:+12895829930"
                    className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (289) 582-9930
                  </a>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
                  >
                    <Mail className="mr-2 h-5 w-5" /> Email me these results
                  </a>
                </div>
                <p className="text-slate-400 text-xs mt-4">
                  The email button opens your own mail app with your score and flagged items
                  already written out. Nothing is sent until you press send, and we only see it
                  if you do.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 inline-flex items-center justify-center bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium"
                >
                  <Printer className="mr-2 h-4 w-4" /> Print or save as PDF
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 inline-flex items-center justify-center bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Start again
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* How the score works */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How the score is calculated</h2>
          <p className="text-gray-600 mb-6">
            No black box. Every control carries a weight based on how much damage its absence tends
            to cause, and each answer contributes between zero and that weight. The total is divided
            by {MAX_RISK} — the maximum possible — and expressed out of 100.
          </p>
          <div className="bg-slate-50 rounded-2xl p-6 mb-8">
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>12 points</strong> — backups, multi-factor authentication, endpoint
                protection. Each of these alone can turn a routine incident into weeks of downtime.
              </li>
              <li>
                <strong>10 points</strong> — admin account hygiene, monitoring, patching, email
                authentication, unsupported systems. These decide how far an intruder gets and how
                quickly anyone notices.
              </li>
              <li>
                <strong>9 points</strong> — Microsoft 365 configuration, offboarding, vendor and
                remote access. Common, quiet routes in.
              </li>
              <li>
                <strong>8 points</strong> — staff training, incident response planning, device
                encryption, support model. These mostly limit damage rather than prevent access.
              </li>
            </ul>
          </div>

          {/* Rendered from BANDS so the published table cannot drift from the code. */}
          <h3 className="text-xl font-bold text-gray-900 mb-3">The grade bands</h3>
          <div className="bg-slate-50 rounded-2xl p-6 mb-8">
            <ul className="space-y-2 text-gray-700">
              {BANDS.map((b) => (
                <li key={b.grade}>
                  <strong>
                    {b.grade} · {b.range}
                  </strong>{' '}
                  — {b.label}. {b.summary.split('.')[0]}.
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What this is</h3>
              <p className="text-gray-600">
                A structured self-assessment covering the control areas that decide how a common
                incident plays out. Useful for prioritising, and for showing a management team where
                the gaps are in language they can act on.
              </p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What this is not</h3>
              <p className="text-gray-600">
                It is not an audit and not a scan. It cannot see your network, and it believes
                whatever you tell it. A real assessment means looking at the actual tenant, devices
                and configuration — this just tells you where to look first.
              </p>
            </div>
          </div>
          <p className="text-gray-600">
            The control areas mirror the{' '}
            <a
              href="https://www.cyber.gc.ca/en/guidance/baseline-cyber-security-controls-small-and-medium-organizations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Canadian Centre for Cyber Security's Baseline Cyber Security Controls for Small and
              Medium Organizations
            </a>
            , a free public control set aimed at organisations without a dedicated security team. The
            weighting is ours, and you are welcome to disagree with it — it is printed above so you
            can.
          </p>
        </div>
      </div>

      {/* Related */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Free tools and reading
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Email spoofing checker',
                body: 'Check whether your domain publishes SPF, DKIM and DMARC — and whether DMARC is actually enforcing.',
                to: '/tools/email-spoof-check/',
              },
              {
                title: 'GTA SMB Cybersecurity Report 2026',
                body: 'Our own measurement of 481 mail-enabled GTA business domains, plus the Toronto and Hamilton cybercrime numbers from Statistics Canada.',
                to: '/resources/gta-smb-cybersecurity-report-2026/',
              },
              {
                title: 'Small business cybersecurity checklist',
                body: 'The practical version of this calculator — what to put in place, in what order, without a security team.',
                to: '/resources/small-business-cybersecurity-checklist/',
              },
              {
                title: 'Managed IT quote checker',
                body: 'Holding a proposal from an IT provider? Score it against 22 checks and get the questions to ask before you sign.',
                to: '/tools/it-quote-checker/',
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="bg-white p-8 rounded-2xl hover:shadow-md transition-shadow block"
              >
                <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                  <ShieldCheck className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-600 mb-4">{c.body}</p>
                <span className="inline-flex items-center text-red-600 font-medium text-sm">
                  Open <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            IT Risk Calculator FAQs
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="bg-slate-50 border border-gray-200 rounded-lg p-6">
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to close the gaps?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Talk to our GTA team about managed IT, cybersecurity and 24/7 support built around how
            your business actually runs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium border border-red-500"
            >
              Schedule a consultation <ArrowRight className="ml-2 h-5 w-5" />
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
              to="/services/"
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
