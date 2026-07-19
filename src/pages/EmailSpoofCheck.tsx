import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ShieldAlert, ShieldX, Search, CheckCircle, XCircle, AlertTriangle, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO, { generateServiceSchema } from '../components/SEO';

interface CheckResult {
  domain: string;
  mx: boolean;
  spf: boolean;
  spfRecord: string | null;
  dmarc: boolean;
  dmarcRecord: string | null;
  dmarcPolicy: 'none' | 'quarantine' | 'reject' | null;
  dkimFound: boolean;
  dkimSelector: string | null;
  grade: 'A' | 'B' | 'C' | 'F';
}

const DKIM_SELECTORS = ['selector1', 'selector2', 'google', 'default', 'k1', 's1', 'zoho'];

async function dohQuery(name: string, type: string): Promise<string[]> {
  const res = await fetch(
    `https://dns.google/resolve?name=${encodeURIComponent(name)}&type=${type}`,
    { headers: { accept: 'application/dns-json' } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.Answer) return [];
  return data.Answer.map((a: { data: string }) => (a.data || '').replace(/^"|"$/g, '').replace(/"\s*"/g, ''));
}

function normalizeDomain(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .split('@').pop() as string;
}

async function runCheck(domain: string): Promise<CheckResult> {
  const [rootTxt, dmarcTxt, mx] = await Promise.all([
    dohQuery(domain, 'TXT'),
    dohQuery(`_dmarc.${domain}`, 'TXT'),
    dohQuery(domain, 'MX'),
  ]);

  const spfRecord = rootTxt.find((r) => r.toLowerCase().includes('v=spf1')) || null;
  const dmarcRecord = dmarcTxt.find((r) => r.toLowerCase().includes('v=dmarc1')) || null;

  let dmarcPolicy: CheckResult['dmarcPolicy'] = null;
  if (dmarcRecord) {
    const m = dmarcRecord.toLowerCase().replace(/\s/g, '').match(/p=(reject|quarantine|none)/);
    if (m) dmarcPolicy = m[1] as CheckResult['dmarcPolicy'];
  }

  let dkimFound = false;
  let dkimSelector: string | null = null;
  for (const sel of DKIM_SELECTORS) {
    const [txt, cname] = await Promise.all([
      dohQuery(`${sel}._domainkey.${domain}`, 'TXT'),
      dohQuery(`${sel}._domainkey.${domain}`, 'CNAME'),
    ]);
    const hit = [...txt, ...cname].some(
      (r) => r.toLowerCase().includes('dkim') || r.toLowerCase().includes('p=') || r.toLowerCase().includes('_domainkey')
    );
    if (hit) {
      dkimFound = true;
      dkimSelector = sel;
      break;
    }
  }

  let grade: CheckResult['grade'];
  const spf = !!spfRecord;
  const dmarc = !!dmarcRecord;
  if (spf && dmarc && dkimFound && (dmarcPolicy === 'reject' || dmarcPolicy === 'quarantine')) grade = 'A';
  else if (spf && dmarc) grade = 'B';
  else if (spf || dmarc) grade = 'C';
  else grade = 'F';

  return { domain, mx: mx.length > 0, spf, spfRecord, dmarc, dmarcRecord, dmarcPolicy, dkimFound, dkimSelector, grade };
}

const gradeMeta: Record<CheckResult['grade'], { color: string; bg: string; icon: React.ReactNode; verdict: string }> = {
  A: {
    color: 'text-green-700',
    bg: 'bg-green-50 border-green-200',
    icon: <ShieldCheck className="h-12 w-12 text-green-600" />,
    verdict: 'Well protected. Your domain publishes SPF, DKIM and an enforcing DMARC policy — the standard defence against email impersonation.',
  },
  B: {
    color: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200',
    icon: <ShieldAlert className="h-12 w-12 text-amber-500" />,
    verdict: 'Partially protected. The building blocks exist, but your DMARC policy is not enforcing (or DKIM was not detectable) — spoofed email may still reach inboxes.',
  },
  C: {
    color: 'text-orange-700',
    bg: 'bg-orange-50 border-orange-200',
    icon: <ShieldAlert className="h-12 w-12 text-orange-500" />,
    verdict: 'Exposed. Critical records are missing. There is little today stopping an outsider from sending email that appears to come from your domain.',
  },
  F: {
    color: 'text-red-700',
    bg: 'bg-red-50 border-red-200',
    icon: <ShieldX className="h-12 w-12 text-red-600" />,
    verdict: 'Wide open. Your domain has no meaningful email authentication. Anyone can send email that appears to come from your organization.',
  },
};

const RowStatus: React.FC<{ ok: boolean; warn?: boolean; label: string; detail: string }> = ({ ok, warn, label, detail }) => (
  <div className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
    {ok ? (
      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
    ) : warn ? (
      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
    ) : (
      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
    )}
    <div>
      <p className="font-semibold text-slate-900">{label}</p>
      <p className="text-slate-600 text-sm">{detail}</p>
    </div>
  </div>
);

const EmailSpoofCheck: React.FC = () => {
  const url = '/tools/email-spoof-check';
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const domain = normalizeDomain(input);
    if (!domain || !domain.includes('.')) {
      setError('Please enter a valid domain, like yourcompany.com');
      return;
    }
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const r = await runCheck(domain);
      setResult(r);
    } catch {
      setError('The check could not be completed. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  const schema = [
    generateServiceSchema({
      name: 'Free Email Spoofing Check',
      description:
        'Free instant check of your domain\'s SPF, DKIM and DMARC email-authentication records to see whether your business email can be spoofed.',
      url,
      areaServed: 'Greater Toronto Area, Ontario',
      serviceType: 'Email Security Assessment',
    }),
  ];

  return (
    <PageTransition>
      <SEO
        title="Free Email Spoofing Check | Can Your Business Email Be Faked?"
        description="Instantly check whether your domain can be spoofed. Free SPF, DKIM and DMARC lookup with a plain-language grade — from IT Rapid Support, Toronto & GTA email security experts."
        keywords="email spoofing check, DMARC check, SPF check, DKIM check, email security test, can my email be spoofed, email authentication checker"
        canonicalUrl={url}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Email Spoofing Check', url },
        ]}
      />

      {/* Hero + tool */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Can Your Business Email Be Spoofed?
            </h1>
            <p className="text-slate-300 text-lg mb-8">
              In our study of 118 GTA business domains, only 40% were fully protected against email impersonation.
              Enter your domain for a free, instant check of the three records that stop it: SPF, DKIM and DMARC.
            </p>
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="yourcompany.com"
                aria-label="Your business domain"
                className="flex-1 px-5 py-3 rounded-lg text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-60"
              >
                {loading ? 'Checking…' : (<><Search className="mr-2 h-5 w-5" /> Check My Domain</>)}
              </button>
            </form>
            {error && <p className="text-red-300 mt-4">{error}</p>}
            <p className="text-slate-400 text-sm mt-4">
              Reads only public DNS records. Nothing is scanned, accessed or stored.
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`border rounded-2xl p-8 ${gradeMeta[result.grade].bg}`}>
            <div className="flex items-center gap-5 mb-4">
              {gradeMeta[result.grade].icon}
              <div>
                <p className={`text-3xl font-bold ${gradeMeta[result.grade].color}`}>Grade {result.grade}</p>
                <p className="text-slate-700 font-medium">{result.domain}</p>
              </div>
            </div>
            <p className="text-slate-800 text-lg mb-6">{gradeMeta[result.grade].verdict}</p>

            <div className="bg-white rounded-xl p-5">
              <RowStatus
                ok={result.spf}
                label={result.spf ? 'SPF record found' : 'No SPF record'}
                detail={
                  result.spf
                    ? 'Your domain declares which servers may send email on its behalf.'
                    : 'Anyone\'s mail server can claim to send email for your domain.'
                }
              />
              <RowStatus
                ok={result.dmarc && (result.dmarcPolicy === 'reject' || result.dmarcPolicy === 'quarantine')}
                warn={result.dmarc && result.dmarcPolicy === 'none'}
                label={
                  !result.dmarc
                    ? 'No DMARC record'
                    : result.dmarcPolicy === 'none'
                    ? 'DMARC present but not enforcing (p=none)'
                    : `DMARC enforcing (p=${result.dmarcPolicy})`
                }
                detail={
                  !result.dmarc
                    ? 'The record that tells the world\'s mail servers to block forged email from your domain is missing entirely.'
                    : result.dmarcPolicy === 'none'
                    ? 'Your DMARC only monitors — forged email is reported, not blocked. Moving to quarantine or reject is the fix.'
                    : 'Receiving mail servers are instructed to block or quarantine forged email. Excellent.'
                }
              />
              <RowStatus
                ok={result.dkimFound}
                warn={!result.dkimFound}
                label={result.dkimFound ? `DKIM signing detected (${result.dkimSelector})` : 'DKIM not detected on common selectors'}
                detail={
                  result.dkimFound
                    ? 'Your outgoing email carries a cryptographic signature receivers can verify.'
                    : 'We checked the most common selectors. Your provider may use a custom one — worth confirming with a professional review.'
                }
              />
              <RowStatus
                ok={result.mx}
                label={result.mx ? 'Mail service detected (MX)' : 'No MX records found'}
                detail={result.mx ? 'This domain actively receives email.' : 'This domain does not appear to receive email.'}
              />
            </div>

            <div className="mt-8 bg-slate-900 rounded-xl p-6 text-center">
              <p className="text-white text-lg font-semibold mb-2">
                {result.grade === 'A'
                  ? 'Want the rest of your security posture checked?'
                  : 'Want this fixed properly — without disrupting your mail?'}
              </p>
              <p className="text-slate-300 mb-5">
                IT Rapid Support stages SPF, DKIM and DMARC for GTA businesses so protection goes up and nothing breaks.
                Free consultation, plain-language findings.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
      )}

      {/* Explainer */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What this check looks at</h2>
        <p className="text-slate-600 mb-4">
          Three public DNS records protect your domain from email impersonation. <strong>SPF</strong> lists the servers
          allowed to send mail for you. <strong>DKIM</strong> adds a tamper-proof signature to every message.{' '}
          <strong>DMARC</strong> ties them together and tells receiving servers to block mail that fails — but only when
          its policy is set to quarantine or reject. Missing or monitor-only records are the gap behind most business
          email compromise and invoice-redirection fraud.
        </p>
        <p className="text-slate-600 mb-4">
          We ran this exact review across 118 GTA businesses —{' '}
          <Link to="/resources/gta-email-spoofing-study-2026" className="text-red-600 hover:text-red-700 font-medium">
            read the full study
          </Link>
          . For a deeper primer, see our guide to{' '}
          <Link to="/resources/email-spoofing-spf-dkim-dmarc-explained" className="text-red-600 hover:text-red-700 font-medium">
            SPF, DKIM and DMARC explained
          </Link>
          , or explore our{' '}
          <Link to="/services/managed-security/" className="text-red-600 hover:text-red-700 font-medium">
            managed email security services
          </Link>{' '}
          for Toronto and GTA businesses.
        </p>
        <p className="text-slate-500 text-sm">
          This tool performs read-only lookups of public DNS records via DNS-over-HTTPS. It does not access, scan, or
          probe any system, and results are not stored. DKIM detection covers common selectors only and can miss custom
          configurations.
        </p>
      </div>
    </PageTransition>
  );
};

export default EmailSpoofCheck;
