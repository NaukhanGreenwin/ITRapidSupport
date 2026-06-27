// City landing page content for local SEO.
// All claims mirror existing site copy (24/7 support, managed IT, cybersecurity,
// response SLAs, on-site service) so nothing here is a new/unverified claim.

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityHighlight {
  title: string;
  description: string;
}

export interface CityData {
  slug: string;
  city: string;
  // 'toronto' | 'vaughan' map to LocalBusiness schema variants; others use default.
  schemaLocation?: 'toronto' | 'vaughan';
  title: string;
  description: string;
  keywords: string;
  intro: string;
  nearbyAreas: string[];
  highlights: CityHighlight[];
  faqs: CityFAQ[];
}

export const locations: CityData[] = [
  {
    slug: 'toronto',
    city: 'Toronto',
    schemaLocation: 'toronto',
    title: 'IT Support & Managed IT Services in Toronto',
    description:
      'Managed IT services and cybersecurity for Toronto businesses. 24/7 helpdesk, network security, cloud, and rapid on-site support across the GTA. Call (289) 582-9930.',
    keywords:
      'IT support Toronto, managed IT services Toronto, cybersecurity Toronto, Toronto IT company, managed security Toronto, IT helpdesk Toronto',
    intro:
      'IT Rapid Support delivers enterprise-grade managed IT services and cybersecurity to businesses across Toronto. From 24/7 helpdesk and proactive monitoring to managed security operations, cloud, and incident response, we act as your complete IT department so your team can focus on the business.',
    nearbyAreas: ['Downtown Toronto', 'North York', 'Scarborough', 'Etobicoke', 'East York', 'York'],
    highlights: [
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'Round-the-clock helpdesk for your Toronto users via phone, email, and chat, with proactive monitoring that catches issues before they cause downtime.',
      },
      {
        title: 'Cybersecurity for Toronto Business',
        description:
          'Multi-layered protection for Toronto organizations: managed firewalls, endpoint protection, email security, MFA, and managed detection and response.',
      },
      {
        title: 'Cloud & Microsoft 365',
        description:
          'Cloud migration, Microsoft 365, and Azure/AWS management to keep your Toronto team secure, mobile, and productive.',
      },
    ],
    faqs: [
      {
        question: 'What IT security services do you offer in Toronto?',
        answer:
          'We offer comprehensive IT security services in Toronto including managed security operations, network security monitoring, cloud security, identity and access management, threat detection and response, vulnerability assessments, security awareness training, and 24/7 incident response, tailored to Toronto businesses across industries.',
      },
      {
        question: 'What cybersecurity do you recommend for small businesses in Toronto?',
        answer:
          'For Toronto small businesses we recommend a multi-layered approach: enterprise-grade firewalls, endpoint protection, email security with anti-phishing, security awareness training, multi-factor authentication, data encryption, managed detection and response, and regular vulnerability scanning, packaged to make enterprise-level protection affordable.',
      },
      {
        question: 'Do you provide on-site IT support in Toronto?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site support across Toronto and the wider GTA when an issue is best resolved in person.',
      },
    ],
  },
  {
    slug: 'vaughan',
    city: 'Vaughan',
    schemaLocation: 'vaughan',
    title: 'IT Support & Managed IT Services in Vaughan',
    description:
      'Local Vaughan IT support and cybersecurity. On-site certified technicians, 24/7 helpdesk, managed IT and cloud services. Based on Keele St, Vaughan. Call (289) 582-9930.',
    keywords:
      'IT support Vaughan, managed IT services Vaughan, cybersecurity Vaughan, Vaughan IT company, IT helpdesk Vaughan, Concord IT support',
    intro:
      'Headquartered on Keele Street in Vaughan, IT Rapid Support is your local IT partner for managed IT services, cybersecurity, and 24/7 support. Our Vaughan-based certified technicians provide both rapid remote help and hands-on on-site assistance for businesses across Vaughan, Concord, and Woodbridge.',
    nearbyAreas: ['Concord', 'Woodbridge', 'Maple', 'Thornhill', 'Kleinburg'],
    highlights: [
      {
        title: 'Local On-Site Support',
        description:
          'Our certified technicians are based in Vaughan, ready for scheduled visits or fast emergency on-site response when you need hands-on help.',
      },
      {
        title: 'Managed IT & Monitoring',
        description:
          'Proactive monitoring, patch management, and a 24/7 helpdesk keep your Vaughan systems secure and running without interruption.',
      },
      {
        title: 'Cybersecurity & Compliance',
        description:
          'Security-first managed services with firewalls, endpoint protection, MFA, and compliance support for regulated Vaughan businesses.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide on-site support for businesses in Vaughan?',
        answer:
          'Yes. Our certified IT professionals are based in Vaughan and can be scheduled for regular on-site visits or respond quickly to emergencies. Some issues are best resolved in person, and our local technicians are always ready to provide hands-on assistance.',
      },
      {
        question: 'What makes your IT support different in Vaughan and Woodbridge?',
        answer:
          'Our support stands out through a security-first approach, 24/7 local availability, rapid response, certified engineers, fixed monthly pricing with no hidden fees, and a deep understanding of the local Vaughan and Woodbridge business environment.',
      },
      {
        question: 'Do you offer cloud services for Concord businesses?',
        answer:
          'Yes. We provide cloud migration, Microsoft 365 implementation and management, Azure and AWS setup, cloud security, cloud backup, hybrid cloud, and ongoing optimization to help Concord and Vaughan businesses improve flexibility and collaboration.',
      },
    ],
  },
  {
    slug: 'mississauga',
    city: 'Mississauga',
    title: 'IT Support & Managed IT Services in Mississauga',
    description:
      'Managed IT support and cybersecurity for Mississauga businesses. 24/7 helpdesk, proactive monitoring, cloud, and project management. Call (289) 582-9930.',
    keywords:
      'IT support Mississauga, managed IT services Mississauga, cybersecurity Mississauga, Mississauga IT company, IT helpdesk Mississauga',
    intro:
      'IT Rapid Support helps Mississauga businesses run on reliable, secure technology. We provide proactive monitoring and maintenance, a 24/7 helpdesk, strategic IT planning, cloud services, data backup and recovery, and comprehensive cybersecurity, serving as your complete IT department.',
    nearbyAreas: ['Port Credit', 'Streetsville', 'Meadowvale', 'Erin Mills', 'Cooksville', 'Square One'],
    highlights: [
      {
        title: 'Complete Managed IT',
        description:
          'Proactive monitoring, hardware and software management, network administration, and a 24/7 helpdesk so your Mississauga team can focus on the business.',
      },
      {
        title: 'Cybersecurity & Backup',
        description:
          'Enterprise-grade security plus automated local and cloud backup with disaster recovery to protect your Mississauga data from ransomware and failure.',
      },
      {
        title: 'IT Project Management',
        description:
          'Clear scoping, milestone tracking, and dedicated project managers deliver your Mississauga IT initiatives on time and on budget.',
      },
    ],
    faqs: [
      {
        question: 'How can your managed IT support help my Mississauga business?',
        answer:
          'We provide proactive monitoring and maintenance, 24/7 helpdesk support, strategic IT planning, hardware and software management, network administration, cloud services, data backup and recovery, and comprehensive cybersecurity, serving as your complete IT department so you can focus on your core business.',
      },
      {
        question: 'What is your approach to IT project management for Mississauga companies?',
        answer:
          'We follow best practices with clear project scoping, detailed planning, transparent communication, milestone tracking, risk management, quality assurance, and post-implementation support, with dedicated project managers who understand the local Mississauga business environment.',
      },
      {
        question: 'How do you handle data backup and disaster recovery?',
        answer:
          'We implement automated local and cloud backups, regular integrity testing, customized retention policies, point-in-time recovery, business continuity planning, and rapid restoration to protect against ransomware, hardware failure, and human error.',
      },
    ],
  },
  {
    slug: 'brampton',
    city: 'Brampton',
    title: 'IT Support & Managed IT Services in Brampton',
    description:
      'Fast IT support and cybersecurity for Brampton businesses. Under 1-hour critical response, 24/7 helpdesk, managed IT, and on-site service. Call (289) 582-9930.',
    keywords:
      'IT support Brampton, managed IT services Brampton, cybersecurity Brampton, Brampton IT company, emergency IT support Brampton',
    intro:
      'IT Rapid Support keeps Brampton businesses online with rapid response and proactive managed IT. We pair a 24/7 helpdesk and continuous monitoring with fast emergency response, because downtime costs money and getting your systems operational quickly is our priority.',
    nearbyAreas: ['Bramalea', 'Heart Lake', 'Springdale', 'Castlemore', 'Mount Pleasant'],
    highlights: [
      {
        title: 'Rapid Emergency Response',
        description:
          'Guaranteed SLA-based response with critical issues handled in under an hour remotely and on-site support within 2 to 4 hours when needed in Brampton.',
      },
      {
        title: 'Managed IT & Helpdesk',
        description:
          'A 24/7 helpdesk plus proactive monitoring and patch management keep Brampton systems secure and running without interruption.',
      },
      {
        title: 'Business Cybersecurity',
        description:
          'Multi-layered protection with managed firewalls, endpoint security, email protection, and managed detection and response for Brampton organizations.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can you respond to IT emergencies in Brampton?',
        answer:
          'For Brampton clients we offer rapid emergency response with SLA-based guarantees. Standard response for critical issues is under 1 hour, with immediate remote support and on-site support within 2 to 4 hours when needed.',
      },
      {
        question: 'What managed IT services do you provide in Brampton?',
        answer:
          'We provide proactive monitoring and maintenance, a 24/7 helpdesk, network and endpoint management, cloud and Microsoft 365 services, data backup and recovery, and comprehensive cybersecurity for Brampton businesses.',
      },
      {
        question: 'Do you offer on-site IT support in Brampton?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site support across Brampton and the surrounding GTA.',
      },
    ],
  },
];

export const getLocation = (slug: string): CityData | undefined =>
  locations.find((l) => l.slug === slug);
