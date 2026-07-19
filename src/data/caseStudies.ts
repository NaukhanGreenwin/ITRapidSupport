// Real client case studies — NK-approved 2026-07-19.
// Every fact below comes from documented work records (approved drafts in
// workspace drafts/, 2026-07-19). No invented clients, numbers, quotes, or
// outcomes. Client staff names are deliberately omitted from public copy.

export interface CaseStudyData {
  slug: string;
  client: string;
  industry: string;
  location: string;
  services: string[];
  /** SEO <title> (kept under ~70 chars) */
  title: string;
  /** Meta description */
  description: string;
  keywords: string;
  h1: string;
  /** Short one-line summary used on the hub page card */
  summary: string;
  challenge: string[];
  actions: string[];
  result: string;
  /** Related service pages for internal links (trailing-slash paths) */
  related: { label: string; href: string }[];
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: 'finex-development-email-security',
    client: 'Finex Development Inc.',
    industry: 'Real estate development',
    location: 'Mississauga, Ontario',
    services: [
      'Email security audit',
      'DMARC enforcement',
      'Microsoft 365 management',
      'Office Wi-Fi',
    ],
    title: 'Email Security Case Study: Finex Development',
    description:
      'How IT Rapid Support moved a Mississauga development company from monitor-only DMARC to full enforcement and installed reliable office Wi-Fi.',
    keywords:
      'email security case study, DMARC enforcement Toronto, email spoofing protection GTA, Microsoft 365 security Mississauga, managed IT case study',
    h1: 'Locking Down Email for a Mississauga Development Company',
    summary:
      'DMARC moved from monitor-only to enforcement, external email banners rolled out, and office Wi-Fi installed — spoofed email now gets rejected instead of delivered.',
    challenge: [
      'Development companies are prime targets for email fraud — fake invoices, payment-change requests, and spoofed messages impersonating executives or vendors. Finex Development wanted assurance that their email domain couldn’t be impersonated and that their Microsoft 365 environment was properly protected.',
    ],
    actions: [
      'Completed a full email security audit of the company’s Microsoft 365 domain, reviewing SPF, DKIM, and DMARC authentication.',
      'Found the key gap: DMARC was configured but running in monitor-only mode — it was watching spoofed mail, not blocking it. We moved the domain to enforcement so impersonation attempts are rejected instead of delivered.',
      'Delivered a written audit report, then walked the team through it in plain language — what was already protected, what changed, and what the before-vs-after means for fake-invoice and spoofing attempts.',
      'Configured external email warning banners in Microsoft 365, so every message from outside the organization is clearly flagged before staff interact with it.',
      'Installed and configured new office Wi-Fi, with post-installation follow-up to confirm everything ran clean.',
      'Provide ongoing Microsoft 365 license and renewal management so subscriptions stay current without the client chasing them.',
    ],
    result:
      'Finex Development’s domain now rejects spoofed email at enforcement level, staff see a clear warning on every external message, and their Microsoft 365 licensing is managed end to end — with a reliable office network underneath it.',
    related: [
      { label: 'Free Email Spoofing Check', href: '/tools/email-spoof-check/' },
      { label: 'Microsoft 365 Managed Services', href: '/services/microsoft-365-managed-services/' },
      { label: 'IT Support Mississauga', href: '/it-support/mississauga/' },
    ],
  },
  {
    slug: 'capital-fire-security-microsoft-365-cleanup',
    client: 'Capital Fire & Security Inc.',
    industry: 'Fire protection and security systems',
    location: 'Greater Toronto Area, Ontario',
    services: [
      'Microsoft 365 administration',
      'Distribution list audit',
      'Mailbox lifecycle management',
      'Email routing',
    ],
    title: 'Case Study: Capital Fire & Security M365 Cleanup',
    description:
      'How IT Rapid Support audited every Microsoft 365 group for a GTA fire protection company, fixed mail routing, and cut an 82,456-item mailbox by 62%.',
    keywords:
      'Microsoft 365 tenant cleanup case study, distribution list audit, mailbox cleanup Toronto, M365 administration GTA, managed IT case study',
    h1: 'Cleaning Up a Microsoft 365 Tenant for a Fire Protection & Security Company',
    summary:
      'A full distribution-list audit, departed-staff cleanup, forwarding restructure, and a Graph-automated mailbox rebuild that cut 82,456 items to 31,095 — a 62% reduction.',
    challenge: [
      'Capital Fire & Security runs its dispatch, service, projects, monitoring, and accounting workflows through Microsoft 365 shared mailboxes and distribution lists. Over years of staff changes, the tenant had drifted: former employees still sat in distribution groups, an external account had ended up in a password-reset group, mail forwarding rules had piled up, and one long-serving staff mailbox had grown to more than 82,000 items.',
    ],
    actions: [
      'Produced a complete distribution-list membership report covering every Microsoft 365 group in the tenant, flagging former employees still receiving company mail, an external account inside a self-service password reset group, and inconsistencies between the group structure and how the business actually routes work.',
      'Executed the approved cleanup: removed departed staff from groups, corrected group memberships for current staff, and restructured service-to-office mail forwarding so tickets land where the team actually works them.',
      'Handled ongoing joiner/leaver work — new employee mailboxes, password resets, and departed-employee mail handling — with the client’s approval at each step.',
      'Diagnosed a tricky duplicate-recipient problem on outgoing invoices down to its real cause: legacy client-side Outlook rules on a shared workstation profile, not the server — saving the client from chasing the wrong fix.',
      'Rebuilt an overloaded staff mailbox using a secure, automated Microsoft Graph API process (no password changes, no user downtime): applied an 18-month retention cutoff approved by management, removed 51,422 old messages, and took the mailbox from 82,456 items to 31,095 — a 62% reduction — then delivered a one-page report documenting exactly what was done.',
    ],
    result:
      'Capital Fire & Security now has a Microsoft 365 tenant that matches its real org chart: no former employees in mail flows, clean group memberships, forwarding that routes work correctly, and a mailbox estate that performs. Every change was documented and approved before it ran.',
    related: [
      { label: 'Microsoft 365 Managed Services', href: '/services/microsoft-365-managed-services/' },
      { label: '24/7 IT Help Desk', href: '/services/it-helpdesk/' },
      { label: 'IT Support Toronto', href: '/it-support/toronto/' },
    ],
  },
  {
    slug: 'artistic-smart-homes-email-authentication',
    client: 'Artistic Smart Homes',
    industry: 'Smart-home automation and integration',
    location: 'Vaughan, Ontario',
    services: [
      'DNS email security audit',
      'DKIM/DMARC remediation',
      'Microsoft 365 support',
    ],
    title: 'DKIM & DMARC Case Study: Artistic Smart Homes',
    description:
      'How IT Rapid Support audited a Vaughan smart-home integrator\'s email authentication and implemented DKIM and DMARC to shut down domain spoofing.',
    keywords:
      'DKIM DMARC case study, email authentication Vaughan, domain spoofing protection, DNS email security audit GTA, managed IT case study',
    h1: 'Email Authentication for a Vaughan Smart-Home Integrator',
    summary:
      'A DNS email security audit followed by DKIM and DMARC implementation on Wix-hosted DNS — making the company’s domain dramatically harder to impersonate.',
    challenge: [
      'Artistic Smart Homes designs and installs automation, lighting control, and home-theatre systems for residential and commercial clients. Their business runs on email — quotes, invoices, supplier coordination — but their domain’s email authentication had gaps that left it open to spoofing: a fraudster could send email that looked like it came from the company.',
    ],
    actions: [
      'Ran a DNS email security audit of the company domain, reviewing SPF, DKIM, and DMARC authentication records.',
      'Presented the findings and got sign-off from the managing team, then implemented the approved remediation: publishing DKIM signing and DMARC policy records on the company’s Wix-hosted DNS.',
      'Delivered a security remediation report documenting the changes and the protection they provide.',
      'Recommended external email warning banners as a follow-on layer, so staff can spot outside senders at a glance.',
      'Continue to support the team on Microsoft 365 account matters — including verifying a Microsoft account deactivation notice and protecting the account before the stated deadline.',
    ],
    result:
      'Artistic Smart Homes’ domain now carries proper DKIM and DMARC authentication, making it dramatically harder for anyone to impersonate the company by email — with the whole engagement documented from audit to remediation report.',
    related: [
      { label: 'Free Email Spoofing Check', href: '/tools/email-spoof-check/' },
      { label: 'Email Spoofing, SPF, DKIM & DMARC Explained', href: '/resources/email-spoofing-spf-dkim-dmarc-explained/' },
      { label: 'IT Support Vaughan', href: '/it-support/vaughan/' },
    ],
  },
];

export const getCaseStudy = (slug: string): CaseStudyData | undefined =>
  caseStudies.find((c) => c.slug === slug);
