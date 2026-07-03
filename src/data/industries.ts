// Industry / vertical landing page content for commercial-intent SEO.
// Claims mirror existing site copy (managed IT, cybersecurity, 24/7 helpdesk,
// cloud/Microsoft 365, compliance support, on-site service). Compliance
// frameworks referenced (PHIPA, PIPEDA, PCI-DSS) are the real regulations ITRS
// helps clients work toward — no client names or fabricated case studies.

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryHighlight {
  title: string;
  description: string;
}

export interface IndustryData {
  slug: string;
  industry: string;
  title: string;
  description: string;
  keywords: string;
  intro: string;
  // Short chips shown in the "what we cover" band (sub-sectors / compliance).
  tags: string[];
  highlights: IndustryHighlight[];
  faqs: IndustryFAQ[];
}

export const industries: IndustryData[] = [
  {
    slug: 'legal',
    industry: 'Law Firms',
    title: 'Managed IT Services for Law Firms in the GTA',
    description:
      'IT support and cybersecurity built for law firms. Document security, confidentiality, Microsoft 365, and 24/7 helpdesk for GTA legal practices. Call (289) 582-9930.',
    keywords:
      'IT support for law firms, legal IT services Toronto, law firm cybersecurity, managed IT for lawyers GTA, legal document security',
    intro:
      'Law firms run on confidentiality, deadlines, and uptime. IT Rapid Support delivers managed IT and cybersecurity built for legal practices across the GTA: protected document management, secure email, encrypted backups, and a 24/7 helpdesk that keeps your lawyers billable instead of fighting technology.',
    tags: ['Document security', 'Client confidentiality', 'PIPEDA', 'Microsoft 365', 'Secure email', 'Encrypted backups'],
    highlights: [
      {
        title: 'Confidentiality by Design',
        description:
          'Access controls, encryption, and email security that protect privileged client data and help your firm meet its professional confidentiality obligations.',
      },
      {
        title: 'Always-On Practice',
        description:
          'Proactive monitoring and a 24/7 helpdesk keep case management, document systems, and email running so deadlines never slip because of an IT outage.',
      },
      {
        title: 'Secure Document & Email',
        description:
          'Microsoft 365 management, anti-phishing, MFA, and encrypted backups for the documents and communications your practice depends on.',
      },
    ],
    faqs: [
      {
        question: 'How do you protect client confidentiality for law firms?',
        answer:
          'We layer access controls, encryption at rest and in transit, email security with anti-phishing, multi-factor authentication, and managed backups so privileged client information stays protected and your firm can meet its confidentiality and PIPEDA obligations.',
      },
      {
        question: 'Can you support our existing legal software?',
        answer:
          'Yes. We manage the infrastructure, Microsoft 365, networking, and security around your practice management and document systems, and provide helpdesk support to your staff so the tools you already use stay fast and reliable.',
      },
      {
        question: 'Do you provide on-site IT support for GTA law firms?',
        answer:
          'Yes. Alongside rapid remote support, our certified technicians provide scheduled and emergency on-site service across Toronto and the GTA when an issue is best handled in person.',
      },
    ],
  },
  {
    slug: 'accounting',
    industry: 'Accounting Firms',
    title: 'Managed IT Services for Accounting & CPA Firms',
    description:
      'IT support and cybersecurity for accounting and CPA firms. Tax-season uptime, data protection, Microsoft 365, and 24/7 helpdesk across the GTA. Call (289) 582-9930.',
    keywords:
      'IT support for accountants, accounting firm IT services, CPA cybersecurity, managed IT for accounting firms Toronto, tax season IT support',
    intro:
      'During tax season every minute of downtime costs your accounting firm. IT Rapid Support keeps CPA and accounting practices across the GTA secure and online: protected financial data, reliable Microsoft 365, encrypted backups, and a responsive helpdesk that scales with your busiest months.',
    tags: ['Financial data security', 'Tax-season uptime', 'PIPEDA', 'Microsoft 365', 'Encrypted backups', 'Secure remote work'],
    highlights: [
      {
        title: 'Tax-Season Uptime',
        description:
          'Proactive monitoring and a fast helpdesk keep your team productive through the busiest filing periods, with the capacity to scale support when you need it most.',
      },
      {
        title: 'Protected Financial Data',
        description:
          'Encryption, endpoint protection, MFA, and managed backups safeguard the sensitive client financial records your firm is trusted to hold.',
      },
      {
        title: 'Secure Cloud & Remote Work',
        description:
          'Microsoft 365 and secure remote access so partners and staff can work safely from the office, home, or a client site.',
      },
    ],
    faqs: [
      {
        question: 'How do you keep accounting firms running during tax season?',
        answer:
          'We monitor your systems proactively to catch issues before they cause downtime, provide a responsive helpdesk that scales for peak filing periods, and maintain tested backups so a failure never costs you a deadline.',
      },
      {
        question: 'How is our clients’ financial data protected?',
        answer:
          'We apply encryption, endpoint protection, email security, multi-factor authentication, and managed backups, and help your firm align with PIPEDA so sensitive financial information stays confidential.',
      },
      {
        question: 'Can your team support QuickBooks, tax software, and Microsoft 365?',
        answer:
          'Yes. We manage the infrastructure, security, and Microsoft 365 environment around your accounting and tax applications and provide helpdesk support to your staff so everything stays fast and available.',
      },
    ],
  },
  {
    slug: 'healthcare',
    industry: 'Healthcare & Dental',
    title: 'Managed IT Services for Healthcare & Dental Clinics',
    description:
      'IT support and cybersecurity for clinics and dental practices. PHIPA-aware data protection, EMR uptime, and 24/7 helpdesk across the GTA. Call (289) 582-9930.',
    keywords:
      'healthcare IT support, dental IT services Toronto, clinic cybersecurity, PHIPA IT support, managed IT for medical practices GTA',
    intro:
      'Patient data is some of the most sensitive information you handle. IT Rapid Support helps healthcare and dental practices across the GTA protect it: PHIPA-aware security, reliable EMR and practice-management uptime, encrypted backups, and a helpdesk that understands a clinic cannot afford to wait.',
    tags: ['Patient data protection', 'PHIPA', 'EMR uptime', 'Encrypted backups', 'Endpoint security', 'Microsoft 365'],
    highlights: [
      {
        title: 'PHIPA-Aware Security',
        description:
          'Encryption, access controls, MFA, and managed backups that protect patient health information and help your practice work toward PHIPA requirements.',
      },
      {
        title: 'Clinic Uptime',
        description:
          'Proactive monitoring and a fast helpdesk keep your EMR, practice management, and imaging systems available so patient care is never interrupted by IT.',
      },
      {
        title: 'Secure Backups & Recovery',
        description:
          'Encrypted, tested backups and disaster recovery so patient records are protected against ransomware, hardware failure, and accidental loss.',
      },
    ],
    faqs: [
      {
        question: 'Do you help clinics meet PHIPA requirements?',
        answer:
          'We implement encryption, access controls, multi-factor authentication, email security, and managed backups, and configure systems to help your practice work toward PHIPA obligations for protecting personal health information.',
      },
      {
        question: 'Can you support our EMR and practice-management software?',
        answer:
          'Yes. We manage the infrastructure, networking, security, and backups around your EMR and practice-management systems and provide helpdesk support to your staff so clinical tools stay reliable.',
      },
      {
        question: 'What happens if our systems go down during clinic hours?',
        answer:
          'Our 24/7 helpdesk responds quickly to restore service, and tested backups plus disaster recovery let us recover patient data fast. We also provide on-site support across the GTA when an issue needs hands-on attention.',
      },
    ],
  },
  {
    slug: 'real-estate',
    industry: 'Real Estate & Property Management',
    title: 'Managed IT Services for Real Estate & Property Management',
    description:
      'IT support and cybersecurity for real estate brokerages and property managers. Secure transactions, mobile teams, Microsoft 365, 24/7 helpdesk. Call (289) 582-9930.',
    keywords:
      'IT support for real estate, property management IT services, real estate cybersecurity, managed IT for brokerages Toronto, real estate wire fraud protection',
    intro:
      'Real estate and property management teams work everywhere except a desk. IT Rapid Support keeps brokerages and property managers across the GTA secure and mobile: protection against wire and email fraud, reliable Microsoft 365, secure remote access, and a helpdesk that keeps agents and managers moving.',
    tags: ['Wire-fraud protection', 'Email security', 'Mobile teams', 'Microsoft 365', 'Secure remote access', 'Document management'],
    highlights: [
      {
        title: 'Transaction & Email Security',
        description:
          'Anti-phishing, email authentication, and MFA help protect your firm and clients from the wire-fraud and business-email-compromise scams that target real estate.',
      },
      {
        title: 'Built for Mobile Teams',
        description:
          'Secure remote access and Microsoft 365 so agents and property managers can work safely from listings, job sites, and home.',
      },
      {
        title: 'Reliable Document Workflow',
        description:
          'Managed cloud storage, backups, and helpdesk support for the contracts, listings, and records your business runs on.',
      },
    ],
    faqs: [
      {
        question: 'How do you protect real estate firms from wire fraud?',
        answer:
          'We deploy email security with anti-phishing, email authentication, multi-factor authentication, and security awareness guidance to help defend against the business-email-compromise and wire-fraud scams that frequently target real estate transactions.',
      },
      {
        question: 'Can your team support agents working remotely?',
        answer:
          'Yes. We set up secure remote access, Microsoft 365, and mobile-friendly tools so your agents and property managers can work safely from anywhere, with helpdesk support when they need it.',
      },
      {
        question: 'Do you support property management software and multiple offices?',
        answer:
          'Yes. We manage networking, security, cloud, and backups across single or multiple locations and support the property-management and brokerage tools your team relies on.',
      },
    ],
  },
  {
    slug: 'manufacturing',
    industry: 'Manufacturing',
    title: 'Managed IT Services for Manufacturing in the GTA',
    description:
      'IT support and cybersecurity for manufacturers. Minimize floor downtime, secure OT/IT, reliable networks, and 24/7 helpdesk across the GTA. Call (289) 582-9930.',
    keywords:
      'IT support for manufacturing, manufacturing cybersecurity, managed IT for manufacturers Toronto, OT IT security, factory network support GTA',
    intro:
      'On the plant floor, downtime is money lost. IT Rapid Support keeps GTA manufacturers running: reliable networks across office and floor, security for connected systems, dependable backups, and a 24/7 helpdesk that responds before a small issue stops production.',
    tags: ['Minimize downtime', 'Network reliability', 'OT/IT security', 'Backups & recovery', 'Microsoft 365', 'On-site support'],
    highlights: [
      {
        title: 'Minimize Floor Downtime',
        description:
          'Proactive monitoring and rapid response keep the systems behind production available, so a network or server issue does not halt the line.',
      },
      {
        title: 'Secure Connected Systems',
        description:
          'Firewalls, network segmentation, and endpoint protection help secure the increasingly connected systems that run modern manufacturing.',
      },
      {
        title: 'Reliable Networks & Backups',
        description:
          'Robust wired and wireless networks across office and shop floor, plus tested backups and recovery to protect operations.',
      },
    ],
    faqs: [
      {
        question: 'How do you reduce downtime for manufacturers?',
        answer:
          'We monitor your network, servers, and endpoints proactively to catch issues early, respond fast through a 24/7 helpdesk, and maintain tested backups so production systems stay available.',
      },
      {
        question: 'Can you secure both our office and shop-floor systems?',
        answer:
          'Yes. We design reliable networks across office and floor, apply firewalls, segmentation, and endpoint protection, and help secure the connected systems that support production.',
      },
      {
        question: 'Do you provide on-site IT support for plants in the GTA?',
        answer:
          'Yes. Alongside remote support, our technicians provide scheduled and emergency on-site service across the GTA when an issue needs to be resolved at the facility.',
      },
    ],
  },
  {
    slug: 'construction',
    industry: 'Construction & Trades',
    title: 'Managed IT Services for Construction & Trades',
    description:
      'IT support and cybersecurity for construction and trades. Connect job sites and head office, secure mobile crews, reliable cloud, 24/7 helpdesk. Call (289) 582-9930.',
    keywords:
      'IT support for construction, construction IT services Toronto, trades cybersecurity, managed IT for contractors GTA, job site connectivity',
    intro:
      'Construction runs across job sites, trailers, and head office at once. IT Rapid Support keeps GTA construction and trades businesses connected and secure: reliable cloud and email, secure access for field crews, protected project data, and a helpdesk that keeps your teams productive wherever they are.',
    tags: ['Job-site connectivity', 'Mobile crews', 'Cloud collaboration', 'Project data security', 'Microsoft 365', 'Secure remote access'],
    highlights: [
      {
        title: 'Connect Site & Office',
        description:
          'Reliable cloud, email, and secure remote access so field crews, project managers, and head office stay in sync across every job.',
      },
      {
        title: 'Secure Mobile Teams',
        description:
          'Endpoint protection, MFA, and secure access for the laptops, tablets, and phones your crews use on site and in the field.',
      },
      {
        title: 'Protect Project Data',
        description:
          'Managed cloud storage and backups for drawings, bids, and project records, so critical files are never lost.',
      },
    ],
    faqs: [
      {
        question: 'How do you connect job sites to head office?',
        answer:
          'We set up reliable cloud collaboration, Microsoft 365, and secure remote access so crews on site, project managers, and the office can share files and communicate seamlessly, with helpdesk support when issues arise.',
      },
      {
        question: 'Can you secure devices used in the field?',
        answer:
          'Yes. We apply endpoint protection, multi-factor authentication, and secure access controls to the laptops, tablets, and phones your teams use on site so mobile work stays protected.',
      },
      {
        question: 'How is our project data protected?',
        answer:
          'We provide managed cloud storage and tested backups for drawings, bids, and project records, protected by encryption and security controls so critical files are safe from loss or ransomware.',
      },
    ],
  },
  {
    slug: 'professional-services',
    industry: 'Professional Services',
    title: 'Managed IT Services for Professional Services Firms',
    description:
      'IT support and cybersecurity for consulting, engineering, and professional services firms. Secure collaboration, Microsoft 365, 24/7 helpdesk in the GTA. Call (289) 582-9930.',
    keywords:
      'IT support for professional services, consulting firm IT services, engineering firm cybersecurity, managed IT Toronto, professional services helpdesk',
    intro:
      'Professional services firms live on billable time and client trust. IT Rapid Support keeps consulting, engineering, and advisory firms across the GTA secure and productive: reliable Microsoft 365 and collaboration, protected client data, secure remote work, and a helpdesk that keeps your experts focused on clients.',
    tags: ['Billable uptime', 'Client data security', 'Microsoft 365', 'Secure collaboration', 'Remote work', 'Encrypted backups'],
    highlights: [
      {
        title: 'Protect Billable Time',
        description:
          'Proactive monitoring and a responsive helpdesk keep your consultants and engineers productive instead of waiting on technology.',
      },
      {
        title: 'Secure Client Data',
        description:
          'Encryption, endpoint protection, MFA, and managed backups protect the confidential client information your reputation depends on.',
      },
      {
        title: 'Collaboration Anywhere',
        description:
          'Microsoft 365 and secure remote access so your team can collaborate safely from the office, home, or a client site.',
      },
    ],
    faqs: [
      {
        question: 'How do you keep professional services teams productive?',
        answer:
          'We monitor systems proactively, resolve issues quickly through a responsive helpdesk, and keep Microsoft 365 and collaboration tools reliable so your experts spend their time on billable client work, not IT problems.',
      },
      {
        question: 'How do you protect confidential client information?',
        answer:
          'We apply encryption, endpoint protection, email security, multi-factor authentication, and managed backups so the sensitive client data your firm handles stays confidential and recoverable.',
      },
      {
        question: 'Can your team support remote and hybrid work?',
        answer:
          'Yes. We set up secure remote access and Microsoft 365 so your team can work safely from anywhere, with helpdesk support and on-site service across the GTA when needed.',
      },
    ],
  },
  {
    slug: 'financial-services',
    industry: 'Financial Services',
    title: 'Managed IT Services for Financial Services Firms',
    description:
      'IT support and cybersecurity for financial services firms. Data protection, regulatory-aware security, reliable systems, 24/7 helpdesk in the GTA. Call (289) 582-9930.',
    keywords:
      'IT support for financial services, financial firm cybersecurity, managed IT for finance Toronto, PCI-DSS IT support, wealth management IT services',
    intro:
      'Financial services firms are held to the highest standards for security and reliability. IT Rapid Support helps finance, wealth, and advisory firms across the GTA meet them: strong data protection, regulatory-aware security, dependable systems, encrypted backups, and a 24/7 helpdesk built for an industry that cannot afford mistakes.',
    tags: ['Data protection', 'Regulatory-aware security', 'PCI-DSS', 'Encrypted backups', 'Microsoft 365', 'Secure remote work'],
    highlights: [
      {
        title: 'Security-First Protection',
        description:
          'Multi-layered security with encryption, endpoint protection, MFA, and managed detection and response to safeguard sensitive financial data.',
      },
      {
        title: 'Regulatory-Aware IT',
        description:
          'Controls, logging, and managed backups that help your firm work toward the security and privacy standards your industry is held to, including PCI-DSS and PIPEDA.',
      },
      {
        title: 'Dependable Systems',
        description:
          'Proactive monitoring and a 24/7 helpdesk keep client portals, trading tools, and email reliably available.',
      },
    ],
    faqs: [
      {
        question: 'Do you help financial firms meet compliance requirements?',
        answer:
          'We implement security controls, access management, logging, encryption, and managed backups that help your firm work toward the standards it is held to, including PCI-DSS and PIPEDA, and document your security posture.',
      },
      {
        question: 'How is sensitive financial data protected?',
        answer:
          'We use a multi-layered approach: encryption, endpoint protection, email security, multi-factor authentication, managed detection and response, and tested backups so client financial data stays protected and recoverable.',
      },
      {
        question: 'Can you provide reliable, always-on support?',
        answer:
          'Yes. Our 24/7 helpdesk and proactive monitoring keep your systems available, and we provide on-site support across the GTA when an issue needs in-person attention.',
      },
    ],
  },
  {
    slug: 'dental',
    industry: 'Dental Practices',
    title: 'Managed IT Services for Dental Practices in the GTA',
    description:
      'IT support and cybersecurity for dental offices. PHIPA-aware patient data protection, practice software support, and 24/7 helpdesk across the GTA. Call (289) 582-9930.',
    keywords:
      'IT support for dental offices, dental practice IT services Toronto, dental cybersecurity, managed IT for dentists GTA, PHIPA IT support dental',
    intro:
      'Your dental practice depends on its systems — scheduling, imaging, billing, and patient records all have to work every time a patient sits down. IT Rapid Support keeps dental offices across the GTA secure and running: protected patient data, reliable networks for your practice management and imaging software, encrypted backups, and a responsive helpdesk for your front desk and clinical staff.',
    tags: ['Patient data protection', 'PHIPA', 'Practice software uptime', 'Imaging systems', 'Encrypted backups', 'Microsoft 365'],
    highlights: [
      {
        title: 'Protected Patient Records',
        description:
          'Encryption, access controls, MFA, and managed backups safeguard patient health information and help your practice work toward its PHIPA obligations.',
      },
      {
        title: 'Practice Software & Imaging Uptime',
        description:
          'We manage the network, workstations, and servers around your practice management and digital imaging systems so appointments never stall on a technical failure.',
      },
      {
        title: 'Helpdesk for the Whole Office',
        description:
          'Fast remote support for front-desk and clinical staff, proactive monitoring that catches issues early, and on-site service across the GTA when hands-on help is needed.',
      },
    ],
    faqs: [
      {
        question: 'How do you protect patient data for dental practices?',
        answer:
          'We layer encryption at rest and in transit, access controls, multi-factor authentication, email security, and tested encrypted backups so patient health information stays protected and recoverable, supporting your PHIPA compliance efforts.',
      },
      {
        question: 'Can you support our dental practice management and imaging software?',
        answer:
          'Yes. We manage the infrastructure around your practice management and digital imaging systems — networks, servers, workstations, and backups — and provide helpdesk support so the tools your team already uses stay fast and reliable.',
      },
      {
        question: 'Do you provide on-site IT support for dental offices in the GTA?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site service to dental offices across Toronto and the GTA.',
      },
    ],
  },
];

export const getIndustry = (slug: string): IndustryData | undefined =>
  industries.find((i) => i.slug === slug);
