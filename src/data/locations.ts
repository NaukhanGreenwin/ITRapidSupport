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
  {
    slug: 'oakville',
    city: 'Oakville',
    title: 'IT Support & Managed IT Services in Oakville',
    description:
      'Managed IT and cybersecurity for Oakville businesses. 24/7 helpdesk, proactive monitoring, cloud, and on-site support across Halton. Call (289) 582-9930.',
    keywords:
      'IT support Oakville, managed IT services Oakville, cybersecurity Oakville, Oakville IT company, IT helpdesk Oakville, Halton IT support',
    intro:
      'IT Rapid Support partners with Oakville businesses to deliver dependable, secure technology. From a 24/7 helpdesk and proactive monitoring to managed cybersecurity, cloud, and on-site service across Halton, we operate as your full IT department so your team can stay focused on growth.',
    nearbyAreas: ['Bronte', 'Glen Abbey', 'Kerr Village', 'Uptown Core', 'Clearview', 'Burloak'],
    highlights: [
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'A round-the-clock helpdesk and proactive monitoring keep your Oakville users productive and head off downtime before it starts.',
      },
      {
        title: 'Cybersecurity for Oakville Business',
        description:
          'Layered protection with managed firewalls, endpoint security, email protection, MFA, and managed detection and response for Oakville organizations.',
      },
      {
        title: 'Cloud & Microsoft 365',
        description:
          'Cloud migration, Microsoft 365, and Azure/AWS management to keep your Oakville team secure, mobile, and collaborative.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide managed IT services for Oakville businesses?',
        answer:
          'Yes. We provide proactive monitoring and maintenance, a 24/7 helpdesk, network and endpoint management, cloud and Microsoft 365 services, data backup and recovery, and comprehensive cybersecurity for Oakville businesses across industries.',
      },
      {
        question: 'Can you support hybrid and remote teams in Oakville?',
        answer:
          'Absolutely. We secure and manage remote and hybrid workforces with cloud collaboration tools, MFA, endpoint protection, VPN and zero-trust access, and 24/7 support so your Oakville team can work securely from anywhere.',
      },
      {
        question: 'Do you offer on-site IT support in Oakville?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site support across Oakville and the wider Halton and GTA region.',
      },
    ],
  },
  {
    slug: 'markham',
    city: 'Markham',
    title: 'IT Support & Managed IT Services in Markham',
    description:
      'Managed IT and cybersecurity for Markham businesses. 24/7 helpdesk, proactive monitoring, cloud, and rapid on-site support. Call (289) 582-9930.',
    keywords:
      'IT support Markham, managed IT services Markham, cybersecurity Markham, Markham IT company, IT helpdesk Markham, York Region IT support',
    intro:
      'IT Rapid Support helps Markham technology, professional, and manufacturing businesses run on secure, reliable systems. We combine a 24/7 helpdesk, proactive monitoring, managed cybersecurity, and cloud services with fast on-site response across York Region.',
    nearbyAreas: ['Unionville', 'Markham Centre', 'Cornell', 'Milliken', 'Thornhill', 'Buttonville'],
    highlights: [
      {
        title: 'Complete Managed IT',
        description:
          'Proactive monitoring, patch management, network administration, and a 24/7 helpdesk so your Markham team can focus on the business.',
      },
      {
        title: 'Cybersecurity & Compliance',
        description:
          'Security-first managed services with firewalls, endpoint protection, MFA, and compliance support for regulated Markham businesses.',
      },
      {
        title: 'Cloud & Microsoft 365',
        description:
          'Cloud migration, Microsoft 365, and Azure/AWS management to keep your Markham team secure, mobile, and productive.',
      },
    ],
    faqs: [
      {
        question: 'What managed IT services do you provide in Markham?',
        answer:
          'We provide proactive monitoring and maintenance, a 24/7 helpdesk, network and endpoint management, cloud and Microsoft 365 services, data backup and recovery, strategic IT planning, and comprehensive cybersecurity for Markham businesses.',
      },
      {
        question: 'Do you work with technology and professional firms in Markham?',
        answer:
          'Yes. We support Markham technology companies, professional services, and manufacturers with security-first managed IT, scalable cloud infrastructure, and responsive support tailored to each organization.',
      },
      {
        question: 'Do you offer on-site IT support in Markham?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site support across Markham and the wider York Region and GTA.',
      },
    ],
  },
  {
    slug: 'richmond-hill',
    city: 'Richmond Hill',
    title: 'IT Support & Managed IT Services in Richmond Hill',
    description:
      'Managed IT and cybersecurity for Richmond Hill businesses. 24/7 helpdesk, proactive monitoring, cloud, and on-site support across York Region. Call (289) 582-9930.',
    keywords:
      'IT support Richmond Hill, managed IT services Richmond Hill, cybersecurity Richmond Hill, Richmond Hill IT company, IT helpdesk Richmond Hill',
    intro:
      'IT Rapid Support keeps Richmond Hill businesses secure and running with proactive managed IT and responsive support. We pair a 24/7 helpdesk and continuous monitoring with managed cybersecurity, cloud services, and on-site help across York Region.',
    nearbyAreas: ['Oak Ridges', 'Bayview Hill', 'Mill Pond', 'Crosby', 'Langstaff', 'Headford'],
    highlights: [
      {
        title: 'Managed IT & Monitoring',
        description:
          'Proactive monitoring, patch management, and a 24/7 helpdesk keep your Richmond Hill systems secure and running without interruption.',
      },
      {
        title: 'Business Cybersecurity',
        description:
          'Multi-layered protection with managed firewalls, endpoint security, email protection, MFA, and managed detection and response for Richmond Hill organizations.',
      },
      {
        title: 'Cloud & Backup',
        description:
          'Cloud migration, Microsoft 365, and automated local and cloud backup with disaster recovery to protect your Richmond Hill data.',
      },
    ],
    faqs: [
      {
        question: 'What IT support services do you offer in Richmond Hill?',
        answer:
          'We offer managed IT, a 24/7 helpdesk, proactive monitoring and maintenance, network and endpoint management, cloud and Microsoft 365 services, data backup and recovery, and comprehensive cybersecurity for Richmond Hill businesses.',
      },
      {
        question: 'How do you protect Richmond Hill businesses from ransomware?',
        answer:
          'We use a layered approach: endpoint protection, managed firewalls, email security with anti-phishing, MFA, security awareness training, managed detection and response, and tested local and cloud backups so Richmond Hill businesses can recover quickly.',
      },
      {
        question: 'Do you offer on-site IT support in Richmond Hill?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site support across Richmond Hill and the wider York Region and GTA.',
      },
    ],
  },
  {
    slug: 'burlington',
    city: 'Burlington',
    title: 'IT Support & Managed IT Services in Burlington',
    description:
      'Managed IT and cybersecurity for Burlington businesses. 24/7 helpdesk, proactive monitoring, cloud, and on-site support across Halton. Call (289) 582-9930.',
    keywords:
      'IT support Burlington, managed IT services Burlington, cybersecurity Burlington, Burlington IT company, IT helpdesk Burlington, Halton IT support',
    intro:
      'IT Rapid Support delivers reliable managed IT and cybersecurity to Burlington businesses. With a 24/7 helpdesk, proactive monitoring, cloud services, and on-site support across Halton, we act as your complete IT department so you can focus on running the business.',
    nearbyAreas: ['Aldershot', 'Brant', 'Alton Village', 'Millcroft', 'Roseland', 'Tyandaga'],
    highlights: [
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'A round-the-clock helpdesk and proactive monitoring keep your Burlington users productive and catch issues before they cause downtime.',
      },
      {
        title: 'Cybersecurity & Backup',
        description:
          'Enterprise-grade security plus automated local and cloud backup with disaster recovery to protect your Burlington data from ransomware and failure.',
      },
      {
        title: 'Cloud & Microsoft 365',
        description:
          'Cloud migration, Microsoft 365, and Azure/AWS management to keep your Burlington team secure, mobile, and productive.',
      },
    ],
    faqs: [
      {
        question: 'How can your managed IT support help my Burlington business?',
        answer:
          'We provide proactive monitoring and maintenance, a 24/7 helpdesk, network and endpoint management, cloud services, data backup and recovery, and comprehensive cybersecurity, serving as your complete IT department so you can focus on your core business.',
      },
      {
        question: 'What cybersecurity do you recommend for small businesses in Burlington?',
        answer:
          'For Burlington small businesses we recommend a layered approach: enterprise-grade firewalls, endpoint protection, email security with anti-phishing, MFA, security awareness training, managed detection and response, and regular vulnerability scanning, packaged to make enterprise-level protection affordable.',
      },
      {
        question: 'Do you offer on-site IT support in Burlington?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site support across Burlington and the wider Halton and GTA region.',
      },
    ],
  },
  {
    slug: 'north-york',
    city: 'North York',
    schemaLocation: 'toronto',
    title: 'IT Support & Managed IT Services in North York',
    description:
      'Managed IT and cybersecurity for North York businesses. 24/7 helpdesk, proactive monitoring, cloud, and rapid on-site support. Call (289) 582-9930.',
    keywords:
      'IT support North York, managed IT services North York, cybersecurity North York, North York IT company, IT helpdesk North York',
    intro:
      'IT Rapid Support provides enterprise-grade managed IT and cybersecurity to North York businesses. From a 24/7 helpdesk and proactive monitoring to managed security, cloud, and rapid on-site support, we act as your complete IT department across the GTA.',
    nearbyAreas: ['Willowdale', 'Don Mills', 'Downsview', 'York Mills', 'Bayview Village', 'Lawrence Manor'],
    highlights: [
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'Round-the-clock helpdesk and proactive monitoring keep your North York users productive and prevent downtime before it starts.',
      },
      {
        title: 'Cybersecurity for North York Business',
        description:
          'Multi-layered protection with managed firewalls, endpoint security, email protection, MFA, and managed detection and response for North York organizations.',
      },
      {
        title: 'Cloud & Microsoft 365',
        description:
          'Cloud migration, Microsoft 365, and Azure/AWS management to keep your North York team secure, mobile, and productive.',
      },
    ],
    faqs: [
      {
        question: 'What IT services do you offer in North York?',
        answer:
          'We offer managed IT, a 24/7 helpdesk, proactive monitoring and maintenance, network and endpoint management, cloud and Microsoft 365 services, data backup and recovery, and comprehensive cybersecurity for North York businesses.',
      },
      {
        question: 'Do you support office relocations and IT projects in North York?',
        answer:
          'Yes. We plan and execute office moves, network setups, and IT projects with clear scoping, milestone tracking, and dedicated project managers so your North York initiatives are delivered on time and on budget.',
      },
      {
        question: 'Do you provide on-site IT support in North York?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site support across North York and the wider GTA.',
      },
    ],
  },
  {
    slug: 'hamilton',
    city: 'Hamilton',
    title: 'IT Support & Managed IT Services in Hamilton',
    description:
      'Managed IT and cybersecurity for Hamilton businesses. 24/7 helpdesk, proactive monitoring, cloud, and on-site support. Call (289) 582-9930.',
    keywords:
      'IT support Hamilton, managed IT services Hamilton, cybersecurity Hamilton, Hamilton IT company, IT helpdesk Hamilton',
    intro:
      'IT Rapid Support keeps Hamilton businesses online with proactive managed IT and responsive support. We combine a 24/7 helpdesk and continuous monitoring with managed cybersecurity, cloud services, and on-site help for organizations across Hamilton and the surrounding area.',
    nearbyAreas: ['Dundas', 'Ancaster', 'Stoney Creek', 'Waterdown', 'Flamborough', 'Hamilton Mountain'],
    highlights: [
      {
        title: 'Managed IT & Monitoring',
        description:
          'Proactive monitoring, patch management, and a 24/7 helpdesk keep your Hamilton systems secure and running without interruption.',
      },
      {
        title: 'Business Cybersecurity',
        description:
          'Multi-layered protection with managed firewalls, endpoint security, email protection, MFA, and managed detection and response for Hamilton organizations.',
      },
      {
        title: 'Cloud & Backup',
        description:
          'Cloud migration, Microsoft 365, and automated local and cloud backup with disaster recovery to protect your Hamilton data.',
      },
    ],
    faqs: [
      {
        question: 'What managed IT services do you provide in Hamilton?',
        answer:
          'We provide proactive monitoring and maintenance, a 24/7 helpdesk, network and endpoint management, cloud and Microsoft 365 services, data backup and recovery, strategic IT planning, and comprehensive cybersecurity for Hamilton businesses.',
      },
      {
        question: 'Do you support manufacturers and trades in the Hamilton area?',
        answer:
          'Yes. We support Hamilton manufacturers, trades, and professional firms with reliable networks, endpoint and email security, cloud services, and responsive 24/7 support tailored to each operation.',
      },
      {
        question: 'Do you offer on-site IT support in Hamilton?',
        answer:
          'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site support across Hamilton and the surrounding area.',
      },
    ],
  },
  {
    "slug": "milton",
    "city": "Milton",
    "title": "IT Support & Managed IT Services in Milton",
    "description": "IT Rapid Support delivers managed IT services, cybersecurity, and 24/7 helpdesk support for Milton businesses. Call (289) 582-9930.",
    "keywords": "IT support Milton, managed IT services Milton, cybersecurity Milton, Microsoft 365 Milton, IT company Milton Ontario, managed IT Milton",
    "intro": "IT Rapid Support provides Milton businesses with reliable managed IT services, proactive monitoring, and advanced cybersecurity solutions. Our certified technicians deliver remote support around the clock and scheduled or emergency on-site service throughout the Halton Region. From cloud migrations to endpoint protection, we keep Milton companies secure and productive.",
    "nearbyAreas": [
      "Oakville",
      "Burlington",
      "Georgetown",
      "Campbellville",
      "Acton",
      "Halton Hills"
    ],
    "highlights": [
      {
        "title": "Round-the-Clock IT Helpdesk",
        "description": "Our 24/7 helpdesk ensures your Milton team always has expert support on hand. We resolve issues remotely and dispatch certified technicians on-site when needed."
      },
      {
        "title": "Layered Cybersecurity for Milton Businesses",
        "description": "We protect your network with managed firewalls, endpoint protection, email security, MFA, and managed detection and response — keeping threats away from your critical data."
      },
      {
        "title": "Cloud & Microsoft 365 Expertise",
        "description": "Seamlessly migrate to the cloud or optimize your existing Microsoft 365 environment. We handle setup, management, and ongoing support so your staff can focus on business."
      }
    ],
    "faqs": [
      {
        "question": "What managed IT services does IT Rapid Support offer in Milton?",
        "answer": "We provide comprehensive managed IT services including proactive monitoring, 24/7 helpdesk support, data backup and recovery, cloud management, and Microsoft 365 administration. Our certified technicians serve Milton businesses with both remote assistance and scheduled or emergency on-site visits."
      },
      {
        "question": "How does IT Rapid Support handle cybersecurity for Milton companies?",
        "answer": "We implement a multi-layered cybersecurity strategy that includes managed firewalls, endpoint protection, email security, multi-factor authentication, and managed detection and response. This approach safeguards your Milton business against evolving threats while keeping your operations running smoothly."
      },
      {
        "question": "Can IT Rapid Support provide on-site IT service in Milton?",
        "answer": "Absolutely. While many issues are resolved rapidly through our remote helpdesk, our certified technicians travel to Milton for scheduled maintenance and emergency on-site support. We serve businesses throughout the Greater Toronto Area, including the Halton Region, so Milton is well within our service coverage."
      }
    ]
  },
];

export const getLocation = (slug: string): CityData | undefined =>
  locations.find((l) => l.slug === slug);
