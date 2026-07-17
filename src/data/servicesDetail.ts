// Standalone service landing page content for transactional-intent SEO.
// Targets the high-intent service keywords ranking competitors have dedicated
// pages for (IT outsourcing, Microsoft 365 managed services and migration,
// network management, IT help desk, vCIO/IT strategy). Claims mirror existing site copy: managed IT, 24/7
// helpdesk, cybersecurity, cloud/Microsoft 365, proactive monitoring, on-site
// service across the GTA. No client names or fabricated case studies.

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface ServiceDetailData {
  slug: string;
  service: string;
  title: string;
  // Optional visible H1 override; when set, the <title> can be tuned for CTR without changing the on-page heading.
  h1?: string;
  description: string;
  keywords: string;
  intro: string;
  // Short chips shown in the "what we cover" band.
  tags: string[];
  highlights: ServiceHighlight[];
  faqs: ServiceFAQ[];
}

export const servicesDetail: ServiceDetailData[] = [
  {
    slug: 'it-outsourcing-services',
    service: 'IT Outsourcing Services',
    title: 'IT Outsourcing Toronto & GTA | 24/7 Support',
    h1: 'IT Outsourcing Services for Toronto & GTA Businesses',
    description:
      'Outsource your business IT to a local GTA team: 24/7 helpdesk, proactive monitoring, cybersecurity, cloud, backup, and on-site support. Call (289) 582-9930.',
    keywords:
      'IT outsourcing Toronto, IT outsourcing services GTA, outsourced IT support Toronto, outsourced IT department, managed IT outsourcing, IT outsourcing company Toronto',
    intro:
      'Get the coverage of a complete IT department without building one in-house. IT Rapid Support provides outsourced IT services for Toronto and GTA businesses: a 24/7 helpdesk, proactive monitoring and maintenance, managed cybersecurity, Microsoft 365 and cloud management, backup and recovery, and local on-site support when hands-on help is needed.',
    tags: ['24/7 helpdesk', 'Proactive IT management', 'Managed cybersecurity', 'Microsoft 365 & cloud', 'Backup & recovery', 'GTA on-site support'],
    highlights: [
      {
        title: 'A Complete IT Function',
        description:
          'One local partner handles day-to-day support, monitoring, maintenance, cloud, cybersecurity, backups, and IT planning so your team has one place to turn for technology.',
      },
      {
        title: 'Proactive Support, Not Break-Fix',
        description:
          'Continuous monitoring, maintenance, patching, and managed security help catch issues early instead of waiting for downtime or a security incident to disrupt the business.',
      },
      {
        title: 'Remote Speed, Local On-Site Help',
        description:
          'The 24/7 helpdesk resolves issues remotely whenever possible, with on-site support available across Toronto and the GTA when equipment, networks, or office projects need hands-on work.',
      },
    ],
    faqs: [
      {
        question: 'What are IT outsourcing services?',
        answer:
          'IT outsourcing means a specialist provider takes responsibility for some or all of your business technology. IT Rapid Support can act as your complete IT department, covering user support, monitoring, maintenance, cybersecurity, cloud, backups, and IT planning.',
      },
      {
        question: 'What IT work can we outsource?',
        answer:
          'You can outsource the day-to-day helpdesk, device and network monitoring, patching, cybersecurity, Microsoft 365 and cloud administration, backup and recovery, user onboarding and offboarding, on-site support, and ongoing technology planning.',
      },
      {
        question: 'Can outsourced IT work alongside an internal IT employee or team?',
        answer:
          'Yes. We can provide the complete IT function or work alongside internal staff by adding 24/7 coverage, specialist security and cloud support, monitoring, tools, and extra capacity when the internal team needs it.',
      },
      {
        question: 'Do you provide on-site support across Toronto and the GTA?',
        answer:
          'Yes. Most requests can be resolved quickly through the 24/7 remote helpdesk, and our team provides scheduled and emergency on-site support across Toronto and the Greater Toronto Area when hands-on work is the best solution.',
      },
    ],
  },
  {
    slug: 'microsoft-365-managed-services',
    service: 'Microsoft 365 Managed Services',
    title: 'Microsoft 365 Managed Services Toronto & GTA',
    h1: 'Managed Microsoft 365 Services for Toronto & GTA Businesses',
    description:
      'Managed Microsoft 365 support for Toronto and GTA businesses: user administration, security, Teams, SharePoint, OneDrive, backup, and 24/7 helpdesk.',
    keywords:
      'Microsoft 365 managed services Toronto, managed Microsoft 365 GTA, Microsoft 365 support Toronto, Office 365 managed services, Microsoft 365 administration, Microsoft 365 security services',
    intro:
      'Microsoft 365 needs active management after setup or migration. IT Rapid Support manages the day-to-day environment for Toronto and GTA businesses: users and access, Exchange Online, Teams, SharePoint and OneDrive, security settings, backup and recovery, and responsive 24/7 support when your team needs help.',
    tags: ['User & access administration', 'Exchange Online', 'Teams support', 'SharePoint & OneDrive', 'Security configuration', 'Backup & recovery'],
    highlights: [
      {
        title: 'Day-to-Day Microsoft 365 Management',
        description:
          'We handle user onboarding and offboarding, access changes, mailbox and collaboration administration, and everyday Microsoft 365 support so your team has one place to get help.',
      },
      {
        title: 'Security Built into Operations',
        description:
          'Multi-factor authentication, conditional access, least-privilege administration, email protection, and activity monitoring are managed as part of the environment instead of left as one-time settings.',
      },
      {
        title: 'Productivity with Ongoing Support',
        description:
          'We support Exchange Online, Teams, SharePoint, and OneDrive, help keep permissions organized, and back the environment with a 24/7 helpdesk for users across the GTA.',
      },
    ],
    faqs: [
      {
        question: 'What is included in Microsoft 365 managed services?',
        answer:
          'Managed services can include user onboarding and offboarding, mailbox and access administration, Teams, SharePoint and OneDrive support, security configuration, email protection, backup and recovery, monitoring, and 24/7 user support.',
      },
      {
        question: 'How is managed Microsoft 365 different from a migration?',
        answer:
          'A migration is the project that moves email, files, users, or applications into Microsoft 365 or Azure. Managed Microsoft 365 is the ongoing administration, security, maintenance, and user support that keeps the environment reliable after the move.',
      },
      {
        question: 'Can you secure an existing Microsoft 365 tenant?',
        answer:
          'Yes. We can review an existing environment and manage practical controls such as multi-factor authentication, conditional access, administrative permissions, email security, sharing settings, logging, and backup based on the business and its risks.',
      },
      {
        question: 'Do you support Microsoft 365 users around the clock?',
        answer:
          'Yes. IT Rapid Support provides a 24/7 helpdesk for Microsoft 365 and broader IT issues, with remote support and on-site service available across Toronto and the Greater Toronto Area when hands-on help is needed.',
      },
    ],
  },
  {
    slug: 'microsoft-365-azure-migration',
    service: 'Microsoft 365 & Azure Migration',
    title: 'Microsoft 365 & Azure Migration Services in the GTA',
    description:
      'Plan and run your Microsoft 365 and Azure migration with IT Rapid Support. Secure email, data, and apps moved to the cloud with zero-surprise cutover and 24/7 support. Call (289) 582-9930.',
    keywords:
      'Microsoft 365 migration Toronto, Azure migration services GTA, Office 365 migration, cloud migration Toronto, email migration to Microsoft 365, managed Microsoft 365 support',
    intro:
      'Moving to the cloud should make your business faster, not break it. IT Rapid Support plans and executes Microsoft 365 and Azure migrations for GTA businesses end to end: email, files, and applications moved securely with a tested cutover plan, minimal downtime, and a 24/7 helpdesk standing by so your team keeps working through the transition.',
    tags: ['Microsoft 365', 'Azure', 'Email migration', 'SharePoint & OneDrive', 'Secure cutover', 'MFA & security'],
    highlights: [
      {
        title: 'Planned, Low-Risk Cutover',
        description:
          'We assess your current environment, map every mailbox, file share, and application, and run a staged migration with a tested rollback plan so the move happens without nasty surprises.',
      },
      {
        title: 'Secure by Default',
        description:
          'Multi-factor authentication, conditional access, and email security are configured as part of every migration, so you land on Microsoft 365 hardened rather than exposed.',
      },
      {
        title: 'Support That Stays',
        description:
          'After cutover we manage your Microsoft 365 and Azure environment and back it with a 24/7 helpdesk, so the cloud keeps running long after the project ends.',
      },
    ],
    faqs: [
      {
        question: 'How long does a Microsoft 365 migration take?',
        answer:
          'It depends on the number of mailboxes, the volume of data, and your current platform, but most small and mid-sized business migrations are completed in a planned, staged cutover that minimizes downtime. We assess your environment first and give you a clear timeline before any data moves.',
      },
      {
        question: 'Will we lose email or files during the migration?',
        answer:
          'No. We migrate mailboxes and files with validation at each stage and keep your source data intact until the new environment is confirmed, with a tested rollback plan so nothing is lost in the move.',
      },
      {
        question: 'Can you move us from another platform or on-premise servers to Azure?',
        answer:
          'Yes. We migrate businesses to Microsoft 365 and Azure from on-premise servers, Google Workspace, and other email and file platforms, and we secure the new environment with MFA and email protection as part of the project.',
      },
      {
        question: 'Do you support Microsoft 365 after the migration?',
        answer:
          'Yes. We provide ongoing managed support for Microsoft 365 and Azure, including user administration, security, backups, and a 24/7 helpdesk across the GTA so your cloud stays reliable.',
      },
    ],
  },
  {
    slug: 'network-management',
    service: 'Network Management & Monitoring',
    title: 'Managed Network Management & Monitoring in the GTA',
    description:
      'Proactive network management and 24/7 monitoring from IT Rapid Support. Reliable, secure wired and wireless networks for GTA businesses, with fast response and on-site service. Call (289) 582-9930.',
    keywords:
      'network management Toronto, network monitoring services GTA, managed network support, business network setup Toronto, firewall management, Wi-Fi management for business',
    intro:
      'Your network is the foundation everything else runs on. IT Rapid Support designs, manages, and monitors business networks across the GTA: reliable wired and wireless connectivity, managed firewalls, and 24/7 monitoring that catches problems before your team ever notices them, backed by rapid remote and on-site response.',
    tags: ['24/7 monitoring', 'Firewall management', 'Wired & Wi-Fi', 'Network security', 'Performance', 'On-site support'],
    highlights: [
      {
        title: 'Proactive 24/7 Monitoring',
        description:
          'We watch your network around the clock and respond to alerts before small issues become outages, so connectivity problems are caught and fixed early.',
      },
      {
        title: 'Secure, Segmented Networks',
        description:
          'Managed firewalls, network segmentation, and secure configurations protect your business from threats and keep sensitive systems isolated and safe.',
      },
      {
        title: 'Reliable Wired & Wireless',
        description:
          'We design and maintain robust wired and Wi-Fi networks across single or multiple sites so your team has fast, dependable connectivity everywhere they work.',
      },
    ],
    faqs: [
      {
        question: 'What does managed network management include?',
        answer:
          'It includes design and configuration of your wired and wireless network, managed firewalls and security, 24/7 monitoring with proactive alerting, performance tuning, and rapid remote and on-site support when something needs hands-on attention.',
      },
      {
        question: 'How does proactive monitoring help my business?',
        answer:
          'Continuous monitoring lets us detect failing hardware, capacity issues, and security events before they cause downtime, so problems are often resolved before your team is even aware of them, keeping you productive.',
      },
      {
        question: 'Can you manage networks across multiple locations?',
        answer:
          'Yes. We manage and monitor networks for single offices and multi-site businesses across the GTA, with secure connectivity between locations and consistent security policies everywhere.',
      },
      {
        question: 'Do you provide on-site network support?',
        answer:
          'Yes. Alongside remote monitoring and support, our technicians provide scheduled and emergency on-site service across Toronto and the GTA when an issue is best resolved in person.',
      },
    ],
  },
  {
    slug: 'it-helpdesk',
    service: '24/7 IT Help Desk Support',
    title: '24/7 IT Help Desk Support for GTA Businesses',
    description:
      'Fast, friendly 24/7 IT help desk support from IT Rapid Support. Remote and on-site help for GTA businesses, with rapid response that keeps your team productive. Call (289) 582-9930.',
    keywords:
      'IT help desk Toronto, 24/7 IT support GTA, managed help desk services, business IT support Toronto, remote IT support, outsourced help desk',
    intro:
      'When something breaks, your team needs an answer now, not a ticket that sits for days. IT Rapid Support gives GTA businesses a responsive 24/7 IT help desk: real technicians who resolve issues fast over the phone, remotely, and on site, so your people stay productive instead of stuck waiting on technology.',
    tags: ['24/7 availability', 'Remote support', 'On-site service', 'Rapid response', 'Microsoft 365 help', 'User onboarding'],
    highlights: [
      {
        title: 'Help, Around the Clock',
        description:
          'A 24/7 helpdesk means your team can reach a real technician whenever they need one, day or night, so issues do not pile up until morning.',
      },
      {
        title: 'Fast, First-Touch Resolution',
        description:
          'Most issues are resolved quickly over the phone or remotely, and we escalate and dispatch on-site service across the GTA when a problem needs hands-on attention.',
      },
      {
        title: 'More Than Break-Fix',
        description:
          'Beyond fixing problems we handle user onboarding and offboarding, Microsoft 365 and account support, and the day-to-day requests that keep your staff working.',
      },
    ],
    faqs: [
      {
        question: 'Is your help desk really available 24/7?',
        answer:
          'Yes. Our help desk provides round-the-clock support so your team can reach a technician any time, including evenings, weekends, and holidays, instead of waiting until the next business day.',
      },
      {
        question: 'How fast do you respond to support requests?',
        answer:
          'We prioritize rapid response and resolve most issues quickly over the phone or remotely. When a problem needs to be handled in person, we dispatch on-site service across Toronto and the GTA.',
      },
      {
        question: 'Can your help desk support remote and hybrid teams?',
        answer:
          'Yes. We support staff working in the office, from home, and on the road, including secure remote access, Microsoft 365, and the devices and applications your team relies on.',
      },
      {
        question: 'Do you handle everyday requests like new users and password resets?',
        answer:
          'Yes. Alongside troubleshooting, we handle user onboarding and offboarding, account and password support, software and access requests, and the routine tasks that keep your business moving.',
      },
    ],
  },
  {
    slug: 'vcio-it-strategy',
    service: 'vCIO & IT Strategy',
    title: 'vCIO & IT Strategy Services for GTA Businesses',
    description:
      'Get executive-level IT leadership without the full-time cost. IT Rapid Support provides vCIO services, IT planning, budgeting, and technology roadmaps for GTA businesses. Call (289) 582-9930.',
    keywords:
      'vCIO services Toronto, IT strategy consulting GTA, virtual CIO, IT planning and budgeting, technology roadmap, IT consulting for small business Toronto',
    intro:
      'Technology decisions are business decisions, and most growing companies do not have a CIO to make them. IT Rapid Support gives GTA businesses virtual CIO leadership: a strategic partner who aligns your technology with your goals, builds a budget and roadmap, manages risk, and makes sure every dollar you spend on IT moves the business forward.',
    tags: ['IT strategy', 'Technology roadmap', 'IT budgeting', 'Risk management', 'Vendor management', 'Business alignment'],
    highlights: [
      {
        title: 'Strategy Aligned to Your Goals',
        description:
          'Your vCIO learns your business and builds an IT strategy and roadmap that supports where you are going, instead of reactive spending that never quite fits.',
      },
      {
        title: 'Budgeting & Predictable Spend',
        description:
          'We help you plan and budget for technology so investments are intentional, costs are predictable, and you avoid surprise expenses and wasted spend.',
      },
      {
        title: 'Risk & Vendor Management',
        description:
          'Your vCIO reviews security and compliance risk, manages your technology vendors, and keeps your roadmap on track with regular business reviews.',
      },
    ],
    faqs: [
      {
        question: 'What is a vCIO and do I need one?',
        answer:
          'A vCIO, or virtual CIO, is an experienced technology leader who guides your IT strategy without the cost of a full-time executive. If you are making technology decisions without senior IT guidance, a vCIO helps you plan, budget, and reduce risk so IT supports your growth.',
      },
      {
        question: 'What does your vCIO service include?',
        answer:
          'It includes IT strategy and roadmapping aligned to your business goals, technology budgeting and planning, security and compliance risk review, vendor management, and regular business reviews to keep everything on track.',
      },
      {
        question: 'How is a vCIO different from regular IT support?',
        answer:
          'Day-to-day IT support keeps your systems running; a vCIO works above that level on strategy, planning, budgeting, and risk. Together they make sure your technology is both reliable today and positioned for where your business is going.',
      },
      {
        question: 'Is vCIO service a good fit for small and mid-sized businesses?',
        answer:
          'Yes. It is designed for growing GTA businesses that need executive-level IT leadership and planning but are not ready for a full-time CIO, giving you strategic guidance at a fraction of the cost.',
      },
    ],
  },
  {
    slug: 'emergency-it-services',
    service: 'Emergency IT Services',
    title: 'Emergency IT Services | 24/7 Toronto & GTA, New Clients Welcome',
    h1: '24/7 Emergency IT Services in Toronto & the GTA',
    description:
      'Server down? Email out? Ransomware? 24/7 emergency IT help for Toronto & GTA businesses — remote plus on-site dispatch. New clients welcome. Call (289) 582-9930.',
    keywords:
      'emergency IT services, emergency IT support Toronto, 24/7 IT support GTA, after-hours IT support, server down help, network outage support, urgent IT help Toronto, emergency computer support',
    intro:
      'When your server goes down, email stops flowing, or ransomware hits, every minute is money. IT Rapid Support provides emergency IT services to businesses across Toronto and the GTA around the clock: a 24/7 helpdesk that answers when you call, remote diagnosis that starts immediately, and certified technicians dispatched on-site from our Vaughan office when hands-on help is the fastest fix. You do not need to be an existing client to call us in an emergency.',
    tags: ['24/7 emergency response', 'Server & network down', 'Email outages', 'Ransomware & cyber incidents', 'On-site dispatch', 'After-hours support'],
    highlights: [
      {
        title: 'True 24/7 Response',
        description:
          'Our helpdesk operates around the clock, including nights, weekends, and holidays. Emergencies are triaged immediately — remote troubleshooting begins on the first call, not the next business day.',
      },
      {
        title: 'On-Site Dispatch Across the GTA',
        description:
          'Some failures need hands on hardware. Our certified technicians are based in Vaughan and dispatch on-site across Toronto and the GTA when remote resolution is not enough.',
      },
      {
        title: 'Cyber Incident Response',
        description:
          'For ransomware, compromised email, or suspected breaches, we isolate affected systems, contain the incident, and work to restore operations from backups — then harden your environment so it does not happen again.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide emergency IT support to businesses that are not existing clients?',
        answer:
          'Yes. Call (289) 582-9930 and we will triage the issue right away. We help new businesses through emergencies — server outages, network failures, email down, or cyber incidents — and many stay on afterwards as managed IT clients so problems are prevented rather than repaired.',
      },
      {
        question: 'How fast can you respond to an IT emergency in Toronto or the GTA?',
        answer:
          'Remote support starts on the first call — our 24/7 helpdesk begins diagnosing the moment you reach us. If on-site help is required, we dispatch certified technicians from our Vaughan office across Toronto and the GTA, prioritized by severity.',
      },
      {
        question: 'What counts as an IT emergency?',
        answer:
          'Anything stopping your business from operating: servers or networks down, email outages, phones offline, critical applications failing, suspected ransomware or account compromise, or data loss. If revenue or safety is affected, treat it as an emergency and call — we will tell you honestly what it needs.',
      },
      {
        question: 'What should we do first if we suspect ransomware or a breach?',
        answer:
          'Disconnect affected machines from the network — do not power them off or pay anything — and call us at (289) 582-9930. We isolate the incident, assess the spread, and work to restore from clean backups while preserving evidence.',
      },
    ],
  },
];

export const getServiceDetail = (slug: string): ServiceDetailData | undefined =>
  servicesDetail.find((s) => s.slug === slug);
