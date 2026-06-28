// Standalone service landing page content for transactional-intent SEO.
// Targets the high-intent service keywords ranking competitors have dedicated
// pages for (Microsoft 365/Azure migration, network management, IT help desk,
// vCIO/IT strategy). Claims mirror existing site copy: managed IT, 24/7
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
];

export const getServiceDetail = (slug: string): ServiceDetailData | undefined =>
  servicesDetail.find((s) => s.slug === slug);
