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
  // Vancouver has a distinct branch schema so its NAP never mixes with Vaughan.
  schemaLocation?: 'toronto' | 'vaughan' | 'vancouver';
  title: string;
  // Optional page H1 override; defaults to "IT Support & Managed IT Services in {city}".
  h1?: string;
  description: string;
  keywords: string;
  intro: string;
  province?: string;
  heroEyebrow?: string;
  sectionIntro?: string;
  areaHeading?: string;
  areasIntro?: string;
  phoneDisplay?: string;
  phoneHref?: string;
  officeAddress?: string;
  ctaIntro?: string;
  nearbyAreas: string[];
  highlights: CityHighlight[];
  faqs: CityFAQ[];
  // Optional in-depth local content sections rendered after the highlights.
  sections?: { heading: string; paragraphs: string[] }[];
}

export const locations: CityData[] = [
  {
    slug: 'toronto',
    city: 'Toronto',
    schemaLocation: 'toronto',
    title: 'Toronto IT Support | 24/7 Helpdesk & On-Site Managed IT',
    description:
      'Toronto IT support with a 24/7 helpdesk, managed IT services, cybersecurity, and fast on-site response across the city. Call (289) 582-9930 for help today.',
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
    title: 'Managed IT Services Vaughan | 24/7 Support, Local Vaughan HQ',
    h1: 'Managed IT Services & IT Support in Vaughan',
    description:
      'Managed IT services from our Vaughan HQ on Keele St: 24/7 helpdesk, cybersecurity, cloud, and on-site technicians. Call (289) 582-9930 for a quick response.',
    keywords:
      'managed IT services Vaughan, IT services Vaughan, IT support Vaughan, cybersecurity Vaughan, Vaughan IT company, IT helpdesk Vaughan, Concord IT support',
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
    sections: [
      {
        heading: 'What Managed IT Services in Vaughan Include',
        paragraphs: [
          'Managed IT services in Vaughan from IT Rapid Support cover the full technology stack your business relies on: a 24/7 helpdesk your team can call any time, proactive monitoring and patch management that catch problems before they cause downtime, Microsoft 365 administration, backup monitoring, and layered cybersecurity with firewalls, endpoint protection, and multi-factor authentication.',
          'Because our headquarters is at 7810 Keele Street in Vaughan, on-site support is not an occasional add-on — it is part of the service model. When an issue cannot be fixed remotely, a local certified technician can be dispatched to offices, clinics, warehouses, and multi-site teams across Vaughan, Concord, Woodbridge, Maple, and Thornhill.',
        ],
      },
      {
        heading: 'Why Vaughan Businesses Choose a Local Managed IT Partner',
        paragraphs: [
          'A managed IT provider headquartered in Vaughan means shorter on-site response, technicians who know the local business environment, and one accountable team for support, security, and cloud instead of separate vendors. Fixed monthly pricing keeps IT costs predictable while 24/7 coverage protects shift work, customer-facing operations, and time-sensitive service commitments.',
          'If your business is comparing providers, start with our Managed IT Services Vaughan guide below, or call (289) 582-9930 to review your current setup with our team.',
        ],
      },
    ],
  },
  {
    slug: 'mississauga',
    city: 'Mississauga',
    title: 'IT Support Mississauga | Managed IT Services & Cybersecurity',
    description:
      'IT support Mississauga businesses rely on: 24/7 helpdesk, managed IT services, cybersecurity, monitoring, and cloud. Call (289) 582-9930.',
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
    title: 'Managed IT Services Brampton | IT Support & Cybersecurity',
    h1: 'Managed IT Services & IT Support in Brampton',
    description:
      'Managed IT services Brampton businesses trust. Fast IT support, cybersecurity, 24/7 helpdesk, and on-site service. Call (289) 582-9930.',
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
    title: 'IT Support Richmond Hill | 24/7 Helpdesk',
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
    title: 'Burlington IT Services | Managed IT Support & Cybersecurity',
    h1: 'Burlington IT Services & Managed IT Support',
    description:
      'Burlington IT services from a local team: managed IT, cybersecurity, 24/7 helpdesk, cloud, and on-site support across Halton. Call (289) 582-9930.',
    keywords:
      'Burlington IT services, IT support Burlington, managed IT services Burlington, cybersecurity Burlington, Burlington IT company, IT helpdesk Burlington, Halton IT support',
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
    "title": "IT Support Milton | 24/7 Helpdesk & On-Site Service",
    "description": "IT support for Milton businesses: 24/7 helpdesk, managed IT, cybersecurity, and on-site service across Halton Region. Call (289) 582-9930 to get help today.",
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
    ],
    "sections": [
      {
        "heading": "What IT Support in Milton Includes",
        "paragraphs": [
          "IT support in Milton from IT Rapid Support covers the full stack your business depends on: a 24/7 helpdesk your team can reach any time, proactive monitoring and patch management that catch problems before they become downtime, Microsoft 365 administration, backup monitoring, and layered cybersecurity with managed firewalls, endpoint protection, and multi-factor authentication.",
          "When an issue cannot be resolved remotely, a certified technician is dispatched on-site. We support offices, manufacturers, warehouses, and multi-site teams across Milton and the wider Halton Region, including Oakville, Burlington, and Georgetown."
        ]
      },
      {
        "heading": "Why Milton Businesses Choose IT Rapid Support",
        "paragraphs": [
          "Growing Milton businesses usually outgrow break-fix IT before they can justify a full internal IT department. A managed IT partner fills that gap with one accountable team for support, security, and cloud, at a fixed monthly cost that keeps IT spending predictable while 24/7 coverage protects shift work and customer-facing operations.",
          "If you are comparing IT support options in Milton, start with the guides below, or call (289) 582-9930 to review your current setup with our team."
        ]
      }
    ]
  },
  {
    "slug": "etobicoke",
    "city": "Etobicoke",
    "schemaLocation": "toronto",
    "title": "IT Support & Managed IT Services in Etobicoke",
    "description": "Managed IT services and cybersecurity for Etobicoke businesses. 24/7 helpdesk, network security, cloud, and on-site support. Call (289) 582-9930.",
    "keywords": "IT support Etobicoke, managed IT services Etobicoke, cybersecurity Etobicoke, Etobicoke IT company, IT helpdesk Etobicoke, managed security Etobicoke",
    "intro": "IT Rapid Support keeps Etobicoke businesses running with managed IT services, cybersecurity, and a 24/7 helpdesk. From the office parks along the Queensway to the industrial corridors near Pearson, we act as your full IT department so your team can stay focused on the work that matters.",
    "nearbyAreas": [
      "Mimico",
      "New Toronto",
      "Islington",
      "The Kingsway",
      "Humber Bay",
      "Rexdale"
    ],
    "highlights": [
      {
        "title": "Managed IT & 24/7 Helpdesk",
        "description": "A round-the-clock helpdesk for your Etobicoke users by phone, email, and chat, backed by proactive monitoring that catches problems before they become downtime."
      },
      {
        "title": "Cybersecurity That Fits Etobicoke",
        "description": "Layered protection for Etobicoke organizations: managed firewalls, endpoint protection, email security, MFA, and managed detection and response."
      },
      {
        "title": "Cloud & Microsoft 365",
        "description": "Cloud migration, Microsoft 365, and Azure or AWS management to keep your Etobicoke team secure, mobile, and productive."
      }
    ],
    "faqs": [
      {
        "question": "Do you provide on-site IT support in Etobicoke?",
        "answer": "Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site visits across Etobicoke and the wider GTA whenever an issue is best resolved in person."
      },
      {
        "question": "What cybersecurity do you recommend for Etobicoke small businesses?",
        "answer": "We recommend a multi-layered approach: enterprise-grade firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response, packaged to make enterprise-level protection affordable for Etobicoke businesses."
      },
      {
        "question": "Can you support our move to the cloud?",
        "answer": "Absolutely. We handle Microsoft 365 and Azure or AWS migrations, cloud security, and cloud backup, then provide ongoing management so your Etobicoke team gets the flexibility of the cloud without the security risks."
      }
    ]
  },
  {
    "slug": "scarborough",
    "city": "Scarborough",
    "schemaLocation": "toronto",
    "title": "IT Support & Managed IT Services in Scarborough",
    "description": "Managed IT and cybersecurity for Scarborough businesses. 24/7 helpdesk, managed security, cloud, and rapid on-site support across the GTA. Call (289) 582-9930.",
    "keywords": "IT support Scarborough, managed IT services Scarborough, cybersecurity Scarborough, Scarborough IT company, IT helpdesk Scarborough, managed security Scarborough",
    "intro": "IT Rapid Support delivers managed IT services and cybersecurity to businesses across Scarborough. From Agincourt to the Scarborough Town Centre area, our 24/7 helpdesk, proactive monitoring, and security operations give you an enterprise-grade IT department without the enterprise overhead.",
    "nearbyAreas": [
      "Agincourt",
      "Malvern",
      "Guildwood",
      "West Hill",
      "Birch Cliff",
      "Cliffside"
    ],
    "highlights": [
      {
        "title": "24/7 Helpdesk & Monitoring",
        "description": "Your Scarborough users get help around the clock by phone, email, and chat, while proactive monitoring and patching keep systems stable and secure."
      },
      {
        "title": "Managed Cybersecurity",
        "description": "Firewalls, endpoint protection, email security, MFA, and managed detection and response protect Scarborough businesses against modern threats."
      },
      {
        "title": "Cloud & Microsoft 365",
        "description": "We migrate and manage Microsoft 365, Azure, and AWS so your Scarborough team can work securely from anywhere."
      }
    ],
    "faqs": [
      {
        "question": "What IT services do you offer in Scarborough?",
        "answer": "We offer managed IT, a 24/7 helpdesk, proactive monitoring, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and on-site support, all tailored to Scarborough businesses across industries."
      },
      {
        "question": "Do you provide on-site support in Scarborough?",
        "answer": "Yes. Our certified technicians provide scheduled and emergency on-site support throughout Scarborough and the GTA, in addition to fast remote help for issues that can be solved without a visit."
      },
      {
        "question": "How quickly can you respond to an IT issue?",
        "answer": "Most issues are handled immediately through our remote helpdesk, and our certified technicians respond rapidly for emergencies that need hands-on attention in Scarborough."
      }
    ]
  },
  {
    "slug": "newmarket",
    "city": "Newmarket",
    "title": "IT Services Newmarket | 24/7 IT Support, York Region",
    "description": "IT services for Newmarket businesses: 24/7 IT support, managed IT, cybersecurity, and on-site help across York Region. Call (289) 582-9930 to get started.",
    "keywords": "IT support Newmarket, managed IT services Newmarket, cybersecurity Newmarket, Newmarket IT company, IT helpdesk Newmarket, York Region IT support",
    "intro": "IT Rapid Support is the IT partner Newmarket businesses rely on for managed IT services, cybersecurity, and 24/7 support. Serving York Region from nearby Vaughan, our certified technicians combine rapid remote help with hands-on on-site service for organizations across Newmarket.",
    "nearbyAreas": [
      "Armitage",
      "Stonehaven",
      "Glenway",
      "Summerhill Estates",
      "Woodland Hill",
      "Bristol-London"
    ],
    "highlights": [
      {
        "title": "Local York Region Support",
        "description": "We serve Newmarket and the surrounding York Region with both rapid remote support and scheduled or emergency on-site visits from certified technicians."
      },
      {
        "title": "Managed IT & Monitoring",
        "description": "Proactive monitoring, patch management, and a 24/7 helpdesk keep your Newmarket systems secure and running without interruption."
      },
      {
        "title": "Cybersecurity & Compliance",
        "description": "A security-first approach with firewalls, endpoint protection, MFA, and compliance support for regulated Newmarket businesses."
      }
    ],
    "faqs": [
      {
        "question": "Do you offer on-site IT support in Newmarket?",
        "answer": "Yes. We serve York Region from nearby Vaughan, so our certified technicians can be scheduled for regular on-site visits in Newmarket or dispatched quickly for emergencies, in addition to immediate remote support."
      },
      {
        "question": "What managed IT services do you provide for Newmarket businesses?",
        "answer": "We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and strategic IT planning so Newmarket businesses get a complete outsourced IT department."
      },
      {
        "question": "Can you help secure our Newmarket business against cyber threats?",
        "answer": "Yes. We deploy managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, and managed detection and response to protect Newmarket organizations against ransomware, phishing, and other modern threats."
      }
    ],
    "sections": [
      {
        "heading": "Managed IT Services for Newmarket and York Region",
        "paragraphs": [
          "Managed IT services for Newmarket businesses from IT Rapid Support include a 24/7 helpdesk, proactive monitoring and patch management, Microsoft 365 administration, backup monitoring, and layered cybersecurity with managed firewalls, endpoint protection, and multi-factor authentication — everything an internal IT department would handle, delivered as one service.",
          "From our head office in Vaughan we support organizations across York Region, so Newmarket businesses get both rapid remote help and hands-on on-site support, alongside neighbouring Aurora, East Gwillimbury, and Whitchurch-Stouffville."
        ]
      },
      {
        "heading": "Why Newmarket Businesses Partner with IT Rapid Support",
        "paragraphs": [
          "A single accountable IT partner replaces the patchwork of break-fix vendors many Newmarket businesses rely on: support, security, cloud, and IT planning from one local team, at a fixed monthly cost that keeps budgeting predictable while 24/7 coverage protects your operations outside business hours.",
          "If you are evaluating IT services in Newmarket, start with the guides below, or call (289) 582-9930 to talk through your current setup with our team."
        ]
      }
    ]
  },
  {
    "slug": "aurora",
    "city": "Aurora",
    "title": "IT Support & Managed IT Services in Aurora",
    "description": "Local Aurora IT support and cybersecurity. 24/7 helpdesk, managed IT, cloud, and on-site certified technicians across York Region. Call (289) 582-9930.",
    "keywords": "IT support Aurora, managed IT services Aurora, cybersecurity Aurora, Aurora IT company, IT helpdesk Aurora, York Region IT support",
    "intro": "IT Rapid Support gives Aurora businesses a complete IT department: managed IT services, cybersecurity, and a 24/7 helpdesk. Serving York Region from nearby Vaughan, we pair fast remote support with on-site certified technicians for organizations throughout Aurora.",
    "nearbyAreas": [
      "Aurora Village",
      "Bayview Wellington",
      "Aurora Heights",
      "Aurora Highlands",
      "Hills of St Andrew"
    ],
    "highlights": [
      {
        "title": "Local On-Site Support",
        "description": "Our certified technicians serve Aurora and the broader York Region with scheduled visits and fast emergency on-site response when hands-on help is needed."
      },
      {
        "title": "Managed IT & 24/7 Helpdesk",
        "description": "A round-the-clock helpdesk plus proactive monitoring and patching keep your Aurora systems secure, current, and running smoothly."
      },
      {
        "title": "Cybersecurity & Cloud",
        "description": "Managed firewalls, endpoint protection, MFA, and Microsoft 365 management protect and modernize your Aurora business."
      }
    ],
    "faqs": [
      {
        "question": "Do you provide on-site IT support in Aurora?",
        "answer": "Yes. We serve York Region from nearby Vaughan, so certified technicians can be scheduled for on-site visits in Aurora or respond quickly to emergencies, alongside immediate remote support."
      },
      {
        "question": "What does managed IT include for Aurora businesses?",
        "answer": "It includes a 24/7 helpdesk, proactive monitoring and patch management, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and ongoing IT strategy, delivered for a predictable monthly cost."
      },
      {
        "question": "How do you protect Aurora businesses from cyber attacks?",
        "answer": "We use a layered defence of managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, and managed detection and response to keep Aurora organizations protected against ransomware and phishing."
      }
    ],
    "sections": [
      {
        "heading": "Managed IT Services for Aurora and York Region",
        "paragraphs": [
          "Managed IT services in Aurora from IT Rapid Support give your business one accountable team for everything IT: a 24/7 helpdesk your staff can reach any time, proactive monitoring and patch management that catch problems before they become downtime, Microsoft 365 administration, backup monitoring, and layered cybersecurity with managed firewalls, endpoint protection, and multi-factor authentication.",
          "We serve Aurora from our Vaughan head office, which keeps York Region communities like Newmarket, Richmond Hill, and King City within easy reach for scheduled maintenance visits and emergency on-site support when an issue cannot be resolved remotely."
        ]
      },
      {
        "heading": "Why Aurora Businesses Partner with IT Rapid Support",
        "paragraphs": [
          "Most Aurora businesses are past the point where break-fix IT makes sense, but not yet at the size that justifies a full internal IT department. A managed IT partner closes that gap: support, security, and cloud under one roof, at a fixed monthly cost that keeps IT spending predictable while 24/7 coverage protects your team outside office hours.",
          "If you are comparing managed IT services in Aurora, start with the guides below, or call (289) 582-9930 to walk through your current setup with our team."
        ]
      }
    ]
  },
  {
    "slug": "pickering",
    "city": "Pickering",
    "title": "IT Services Pickering | 24/7 IT Support & On-Site Service",
    "description": "IT services for Pickering businesses: 24/7 IT support, managed security, cloud, and on-site help across Durham Region. Call (289) 582-9930 to get started.",
    "keywords": "IT support Pickering, managed IT services Pickering, cybersecurity Pickering, Pickering IT company, IT helpdesk Pickering, Durham Region IT support",
    "intro": "IT Rapid Support delivers managed IT services and cybersecurity to Pickering businesses across Durham Region. With a 24/7 helpdesk, proactive monitoring, and managed security, we keep your systems protected and productive while your team focuses on growth.",
    "nearbyAreas": [
      "Bay Ridges",
      "Amberlea",
      "Rougemount",
      "Liverpool",
      "Dunbarton",
      "Rosebank"
    ],
    "highlights": [
      {
        "title": "24/7 Helpdesk & Monitoring",
        "description": "Pickering users get help around the clock, with proactive monitoring and patching that prevents downtime before it starts."
      },
      {
        "title": "Managed Cybersecurity",
        "description": "Firewalls, endpoint protection, email security, MFA, and managed detection and response defend Pickering businesses against modern threats."
      },
      {
        "title": "Cloud & Microsoft 365",
        "description": "We migrate and manage Microsoft 365, Azure, and AWS so your Pickering team can work securely from anywhere."
      }
    ],
    "faqs": [
      {
        "question": "Do you provide on-site IT support in Pickering?",
        "answer": "Yes. Our certified technicians provide scheduled and emergency on-site support throughout Pickering and Durham Region, in addition to fast remote help for issues that do not require a visit."
      },
      {
        "question": "What cybersecurity do you recommend for Pickering businesses?",
        "answer": "We recommend a layered approach: managed firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response, sized to fit Pickering small and mid-sized businesses."
      },
      {
        "question": "Can you manage our cloud and Microsoft 365 environment?",
        "answer": "Yes. We handle Microsoft 365 and Azure or AWS migration, cloud security, and cloud backup, then provide ongoing management so your Pickering business gets the benefits of the cloud without the security headaches."
      }
    ],
    "sections": [
      {
        "heading": "IT Services Pickering Businesses Rely On",
        "paragraphs": [
          "IT services in Pickering from IT Rapid Support cover the full stack your business runs on: a 24/7 helpdesk your team can reach any time, proactive monitoring and patch management that stop problems before they become downtime, Microsoft 365 administration, backup monitoring, and layered cybersecurity with managed firewalls, endpoint protection, and multi-factor authentication.",
          "When hands-on help is needed, a certified technician is dispatched on-site. We support offices, clinics, warehouses, and multi-site teams across Pickering and the wider Durham Region, including Ajax, Whitby, and Oshawa."
        ]
      },
      {
        "heading": "Choosing an IT Company in Pickering",
        "paragraphs": [
          "When you compare IT companies in Pickering, look at three things: whether support is genuinely 24/7 or only business hours, whether security is built into the service or sold as an afterthought, and whether the provider will actually come on-site when remote support is not enough. IT Rapid Support delivers all three under one predictable monthly cost, with managed detection and response included rather than bolted on.",
          "Start with the guides below, or call (289) 582-9930 to review your current IT setup with our team."
        ]
      }
    ]
  },
  {
    "slug": "ajax",
    "city": "Ajax",
    "title": "IT Support & Managed IT Services in Ajax",
    "description": "Managed IT and cybersecurity for Ajax businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Durham Region. Call (289) 582-9930.",
    "keywords": "IT support Ajax, managed IT services Ajax, cybersecurity Ajax, Ajax IT company, IT helpdesk Ajax, Durham Region IT support",
    "intro": "IT Rapid Support is the managed IT and cybersecurity partner for Ajax businesses across Durham Region. Our 24/7 helpdesk, proactive monitoring, and managed security operations act as your complete IT department so you can focus on serving your customers.",
    "nearbyAreas": [
      "Pickering Village",
      "Nottingham",
      "Audley",
      "Applecroft",
      "Southwood",
      "Lakeside"
    ],
    "highlights": [
      {
        "title": "Managed IT & 24/7 Helpdesk",
        "description": "A round-the-clock helpdesk for your Ajax team plus proactive monitoring that catches issues before they cause downtime."
      },
      {
        "title": "Cybersecurity for Ajax Business",
        "description": "Managed firewalls, endpoint protection, email security, MFA, and managed detection and response protect Ajax organizations against evolving threats."
      },
      {
        "title": "Cloud & Microsoft 365",
        "description": "Cloud migration and Microsoft 365 management keep your Ajax team secure, mobile, and productive."
      }
    ],
    "faqs": [
      {
        "question": "Do you offer on-site IT support in Ajax?",
        "answer": "Yes. Our certified technicians provide scheduled and emergency on-site support across Ajax and Durham Region, alongside immediate remote support for issues that can be resolved without a visit."
      },
      {
        "question": "What managed IT services do you provide in Ajax?",
        "answer": "We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy so Ajax businesses get a full outsourced IT department for a predictable monthly cost."
      },
      {
        "question": "How do you keep Ajax businesses safe from ransomware?",
        "answer": "We combine managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, managed detection and response, and tested data backup and recovery so Ajax businesses can resist and recover from ransomware."
      }
    ],
    "sections": [
      {
        "heading": "Managed IT Services for Ajax Businesses",
        "paragraphs": [
          "Managed IT services in Ajax from IT Rapid Support replace reactive break-fix support with one accountable team: a 24/7 helpdesk your staff can reach any time, proactive monitoring and patch management that catch issues before they become downtime, Microsoft 365 administration, backup monitoring, and ongoing IT strategy, all at a fixed monthly cost.",
          "We support Ajax offices, shops, and multi-site teams across Durham Region, with certified technicians dispatched on-site for scheduled maintenance or emergencies whenever an issue cannot be resolved remotely."
        ]
      },
      {
        "heading": "Cybersecurity Services in Ajax",
        "paragraphs": [
          "Cybersecurity services for Ajax organizations are built into every IT Rapid Support plan rather than sold as an add-on: managed firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response that watches for threats around the clock.",
          "If you are weighing managed IT or cybersecurity options in Ajax, start with the guides below, or call (289) 582-9930 to walk through your current environment with our team."
        ]
      }
    ]
  },
  {
    "slug": "whitby",
    "city": "Whitby",
    "title": "IT Support & Managed IT Services in Whitby",
    "description": "Managed IT and cybersecurity for Whitby businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Durham Region. Call (289) 582-9930.",
    "keywords": "IT support Whitby, managed IT services Whitby, cybersecurity Whitby, Whitby IT company, IT helpdesk Whitby, Durham Region IT support",
    "intro": "IT Rapid Support provides Whitby businesses with managed IT services, cybersecurity, and a 24/7 helpdesk across Durham Region. From Brooklin to the Whitby waterfront, our proactive monitoring and security operations keep your systems secure and your team productive.",
    "nearbyAreas": [
      "Brooklin",
      "Port Whitby",
      "Pringle Creek",
      "Rolling Acres",
      "Williamsburg",
      "Taunton North"
    ],
    "highlights": [
      {
        "title": "24/7 Helpdesk & Monitoring",
        "description": "Whitby users get support around the clock, while proactive monitoring and patch management keep systems stable and secure."
      },
      {
        "title": "Managed Cybersecurity",
        "description": "Managed firewalls, endpoint protection, email security, MFA, and managed detection and response defend Whitby businesses against modern threats."
      },
      {
        "title": "Cloud & Microsoft 365",
        "description": "We migrate and manage Microsoft 365, Azure, and AWS so your Whitby team can work securely from anywhere."
      }
    ],
    "faqs": [
      {
        "question": "Do you provide on-site IT support in Whitby?",
        "answer": "Yes. Our certified technicians provide scheduled and emergency on-site support throughout Whitby, Brooklin, and Durham Region, in addition to fast remote help."
      },
      {
        "question": "What cybersecurity do you recommend for Whitby small businesses?",
        "answer": "We recommend a layered approach of managed firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response, packaged affordably for Whitby businesses."
      },
      {
        "question": "Can you support our cloud and Microsoft 365 setup?",
        "answer": "Yes. We handle Microsoft 365 and Azure or AWS migration, cloud security, and cloud backup, then provide ongoing management so your Whitby team gets the flexibility of the cloud securely."
      }
    ]
  },
  {
    "slug": "oshawa",
    "city": "Oshawa",
    "title": "IT Support & Managed IT Services in Oshawa",
    "description": "Managed IT and cybersecurity for Oshawa businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Durham Region. Call (289) 582-9930.",
    "keywords": "IT support Oshawa, managed IT services Oshawa, cybersecurity Oshawa, Oshawa IT company, IT helpdesk Oshawa, Durham Region IT support",
    "intro": "IT Rapid Support delivers managed IT services and cybersecurity to Oshawa businesses across Durham Region. With a 24/7 helpdesk, proactive monitoring, and managed security operations, we serve as your complete IT department so your team can focus on what it does best.",
    "nearbyAreas": [
      "Downtown Oshawa",
      "Northglen",
      "Donevan",
      "Lakeview",
      "Windfields",
      "Eastdale"
    ],
    "highlights": [
      {
        "title": "Managed IT & 24/7 Helpdesk",
        "description": "A round-the-clock helpdesk for your Oshawa users, backed by proactive monitoring that prevents downtime before it happens."
      },
      {
        "title": "Cybersecurity for Oshawa Business",
        "description": "Managed firewalls, endpoint protection, email security, MFA, and managed detection and response protect Oshawa organizations against modern threats."
      },
      {
        "title": "Cloud & Microsoft 365",
        "description": "Cloud migration and Microsoft 365 management keep your Oshawa team secure, mobile, and productive."
      }
    ],
    "faqs": [
      {
        "question": "Do you offer on-site IT support in Oshawa?",
        "answer": "Yes. Our certified technicians provide scheduled and emergency on-site support across Oshawa and Durham Region, alongside immediate remote support for issues that do not require a visit."
      },
      {
        "question": "What managed IT services do you provide in Oshawa?",
        "answer": "We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy so Oshawa businesses get a complete outsourced IT department."
      },
      {
        "question": "How do you protect Oshawa businesses from cyber threats?",
        "answer": "We use a layered defence of managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, and managed detection and response to keep Oshawa organizations protected against ransomware and phishing."
      }
    ]
  },
  {
    "slug": "king-city",
    "city": "King City",
    "title": "IT Support & Managed IT Services in King City",
    "description": "Local King City IT support and cybersecurity. 24/7 helpdesk, managed IT, cloud, and on-site certified technicians across King Township. Call (289) 582-9930.",
    "keywords": "IT support King City, managed IT services King City, cybersecurity King City, King City IT company, IT helpdesk King City, King Township IT support",
    "intro": "IT Rapid Support is the local IT partner for King City and King Township businesses, providing managed IT services, cybersecurity, and a 24/7 helpdesk. Based nearby in Vaughan, our certified technicians offer fast remote support and hands-on on-site service throughout the area.",
    "nearbyAreas": [
      "Nobleton",
      "Schomberg",
      "Kettleby",
      "Pottageville",
      "Ansnorveldt"
    ],
    "highlights": [
      {
        "title": "Local On-Site Support",
        "description": "Based nearby in Vaughan, our certified technicians serve King City and King Township with scheduled visits and fast emergency on-site response."
      },
      {
        "title": "Managed IT & 24/7 Helpdesk",
        "description": "A round-the-clock helpdesk plus proactive monitoring and patching keep your King City systems secure and running without interruption."
      },
      {
        "title": "Cybersecurity & Cloud",
        "description": "Managed firewalls, endpoint protection, MFA, and Microsoft 365 management protect and modernize your King City business."
      }
    ],
    "faqs": [
      {
        "question": "Do you provide on-site IT support in King City?",
        "answer": "Yes. We are based nearby in Vaughan, so our certified technicians can be scheduled for on-site visits in King City and King Township or respond quickly to emergencies, in addition to immediate remote support."
      },
      {
        "question": "What managed IT services do you offer for King City businesses?",
        "answer": "We offer a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy, delivered for a predictable monthly cost."
      },
      {
        "question": "How do you secure King City businesses against cyber threats?",
        "answer": "We deploy managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, and managed detection and response to protect King City organizations against ransomware and phishing."
      }
    ]
  },
  {
    "slug": "caledon",
    "city": "Caledon",
    "title": "IT Support & Managed IT Services in Caledon",
    "description": "Managed IT and cybersecurity for Caledon businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Peel Region. Call (289) 582-9930.",
    "keywords": "IT support Caledon, managed IT services Caledon, cybersecurity Caledon, Caledon IT company, IT helpdesk Caledon, Peel Region IT support",
    "intro": "IT Rapid Support provides Caledon businesses with managed IT services, cybersecurity, and a 24/7 helpdesk across Peel Region. From Bolton to Caledon East, our proactive monitoring and managed security operations keep your systems secure and your team productive.",
    "nearbyAreas": [
      "Bolton",
      "Caledon East",
      "Inglewood",
      "Palgrave",
      "Alton",
      "Cheltenham"
    ],
    "highlights": [
      {
        "title": "24/7 Helpdesk & Monitoring",
        "description": "Caledon users get help around the clock, with proactive monitoring and patching that prevents downtime before it starts."
      },
      {
        "title": "Managed Cybersecurity",
        "description": "Managed firewalls, endpoint protection, email security, MFA, and managed detection and response defend Caledon businesses against modern threats."
      },
      {
        "title": "Cloud & Microsoft 365",
        "description": "We migrate and manage Microsoft 365, Azure, and AWS so your Caledon team can work securely from anywhere."
      }
    ],
    "faqs": [
      {
        "question": "Do you provide on-site IT support in Caledon?",
        "answer": "Yes. Our certified technicians provide scheduled and emergency on-site support throughout Caledon, Bolton, and Peel Region, in addition to fast remote help for issues that do not require a visit."
      },
      {
        "question": "What cybersecurity do you recommend for Caledon businesses?",
        "answer": "We recommend a layered approach: managed firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response, sized for Caledon small and mid-sized businesses."
      },
      {
        "question": "Can you manage our cloud and Microsoft 365 environment?",
        "answer": "Yes. We handle Microsoft 365 and Azure or AWS migration, cloud security, and cloud backup, then provide ongoing management so your Caledon business gets the benefits of the cloud securely."
      }
    ]
  },
  {
    "slug": "georgetown",
    "city": "Georgetown",
    "title": "IT Support & Managed IT Services in Georgetown",
    "description": "Managed IT and cybersecurity for Georgetown businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Halton Hills. Call (289) 582-9930.",
    "keywords": "IT support Georgetown, managed IT services Georgetown, cybersecurity Georgetown, Georgetown IT company, IT helpdesk Georgetown, Halton Hills IT support",
    "intro": "IT Rapid Support delivers managed IT services and cybersecurity to Georgetown businesses across Halton Hills. With a 24/7 helpdesk, proactive monitoring, and managed security, we act as your complete IT department so your team can focus on growing the business.",
    "nearbyAreas": [
      "Glen Williams",
      "Norval",
      "Stewarttown",
      "Limehouse",
      "Acton",
      "Georgetown South"
    ],
    "highlights": [
      {
        "title": "Managed IT & 24/7 Helpdesk",
        "description": "A round-the-clock helpdesk for your Georgetown users plus proactive monitoring that catches issues before they cause downtime."
      },
      {
        "title": "Cybersecurity for Georgetown Business",
        "description": "Managed firewalls, endpoint protection, email security, MFA, and managed detection and response protect Georgetown organizations against evolving threats."
      },
      {
        "title": "Cloud & Microsoft 365",
        "description": "Cloud migration and Microsoft 365 management keep your Georgetown team secure, mobile, and productive."
      }
    ],
    "faqs": [
      {
        "question": "Do you offer on-site IT support in Georgetown?",
        "answer": "Yes. Our certified technicians provide scheduled and emergency on-site support across Georgetown and Halton Hills, alongside immediate remote support for issues that can be resolved without a visit."
      },
      {
        "question": "What managed IT services do you provide in Georgetown?",
        "answer": "We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy so Georgetown businesses get a complete outsourced IT department."
      },
      {
        "question": "How do you keep Georgetown businesses safe from ransomware?",
        "answer": "We combine managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, managed detection and response, and tested data backup and recovery so Georgetown businesses can resist and recover from ransomware."
      }
    ]
  },
  {
    slug: 'woodbridge',
    city: 'Woodbridge',
    schemaLocation: 'vaughan',
    title: 'IT Support & Managed IT Services in Woodbridge (Vaughan)',
    description:
      'Managed IT services and cybersecurity for Woodbridge businesses. Vaughan-based technicians minutes away, 24/7 helpdesk. Call (289) 582-9930.',
    keywords:
      'IT support Woodbridge, managed IT services Woodbridge, cybersecurity Woodbridge, Woodbridge IT company, IT helpdesk Woodbridge, Vaughan IT support',
    intro:
      'Woodbridge businesses have a truly local IT partner: IT Rapid Support is headquartered on Keele Street in Vaughan, minutes from Woodbridge. That means fast on-site response when hands-on help is needed, backed by a 24/7 helpdesk, proactive monitoring, and managed cybersecurity that acts as your complete IT department.',
    nearbyAreas: ['Pine Grove', 'East Woodbridge', 'Sonoma Heights', 'Kleinburg', 'Concord', 'Maple'],
    highlights: [
      {
        title: 'Minutes-Away On-Site Support',
        description:
          'Our certified technicians are based at our Vaughan head office just up the road from Woodbridge, so scheduled visits and emergency on-site response arrive fast.',
      },
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'Round-the-clock helpdesk for your Woodbridge team, with proactive monitoring and patch management that stop problems before they become downtime.',
      },
      {
        title: 'Cybersecurity for Woodbridge Business',
        description:
          'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response protect Woodbridge companies against modern threats.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide on-site IT support in Woodbridge?',
        answer:
          'Yes. Our head office is on Keele Street in Vaughan, minutes from Woodbridge, so our certified technicians can provide both scheduled visits and rapid emergency on-site support across Woodbridge, Pine Grove, and Kleinburg — alongside immediate remote help.',
      },
      {
        question: 'What managed IT services do you offer Woodbridge businesses?',
        answer:
          'We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy — a complete outsourced IT department for Woodbridge small and mid-sized businesses.',
      },
      {
        question: 'How quickly can you respond to an IT emergency in Woodbridge?',
        answer:
          'Remote response starts immediately through our 24/7 helpdesk, and because our technicians are based in Vaughan just minutes from Woodbridge, emergency on-site dispatch is fast when an issue needs hands-on attention.',
      },
    ],
  },
  {
    slug: 'concord',
    city: 'Concord',
    schemaLocation: 'vaughan',
    title: 'IT Support Concord | Local Keele St HQ',
    description:
      'Managed IT services and cybersecurity in Concord, Vaughan — where our Keele St head office is located. 24/7 helpdesk, managed security, cloud. Call (289) 582-9930.',
    keywords:
      'IT support Concord, managed IT services Concord, cybersecurity Concord Vaughan, Concord IT company, IT helpdesk Concord, Keele Street IT support',
    intro:
      'Concord is home turf for IT Rapid Support — our head office sits at 7810 Keele Street, right in the Concord business district. For the offices, warehouses, and shops around Keele, Highway 7, and Jane Street, that means an IT partner that is literally around the corner: 24/7 helpdesk, managed cybersecurity, cloud services, and on-site help that arrives in minutes, not hours.',
    nearbyAreas: ['Vaughan Metropolitan Centre', 'Maple', 'Woodbridge', 'Thornhill', 'North York'],
    highlights: [
      {
        title: 'Headquartered in Concord',
        description:
          'Our office is at 7810 Keele Street in Concord — when you need hands-on help, our certified technicians are closer than anyone.',
      },
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'Proactive monitoring, patch management, and a round-the-clock helpdesk keep Concord businesses running without interruption.',
      },
      {
        title: 'Cybersecurity & Cloud',
        description:
          'Managed firewalls, endpoint protection, email security, MFA, managed detection and response, plus Microsoft 365 and cloud management for Concord teams.',
      },
    ],
    faqs: [
      {
        question: 'Where is your office in Concord?',
        answer:
          'Our head office is at 7810 Keele Street in Concord, Vaughan. Businesses in the surrounding Keele, Highway 7, and Jane Street corridors can get scheduled or emergency on-site support faster from us than from providers based across the GTA.',
      },
      {
        question: 'What IT services do you provide to Concord businesses?',
        answer:
          'We provide managed IT with a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy for Concord businesses of all sizes.',
      },
      {
        question: 'Do you support the industrial and warehouse businesses around Concord?',
        answer:
          'Yes. The Concord area is full of light-industrial, logistics, and office businesses, and we support them with reliable networking, Wi-Fi coverage, secure remote access, and fast on-site service from our Keele Street office nearby.',
      },
    ],
  },
  {
    slug: 'maple',
    city: 'Maple',
    schemaLocation: 'vaughan',
    title: 'IT Support & Managed IT Services in Maple, Vaughan',
    description:
      'Managed IT services and cybersecurity for Maple businesses. Vaughan-based technicians nearby, 24/7 helpdesk, managed security, and cloud IT. Call (289) 582-9930.',
    keywords:
      'IT support Maple, managed IT services Maple Vaughan, cybersecurity Maple, Maple IT company, IT helpdesk Maple, Vaughan IT services',
    intro:
      'Businesses in Maple get big-company IT with a neighbourhood response time. IT Rapid Support is headquartered on Keele Street in Vaughan, a short drive from Maple, and delivers managed IT services, cybersecurity, and a 24/7 helpdesk to offices, clinics, and shops across the community.',
    nearbyAreas: ['Concord', 'Kleinburg', 'Woodbridge', 'Richmond Hill', 'Teston'],
    highlights: [
      {
        title: 'Local Vaughan Technicians',
        description:
          'Our certified technicians work out of our Keele Street head office a short drive from Maple, ready for scheduled visits or fast emergency response.',
      },
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'A round-the-clock helpdesk plus proactive monitoring and patching keep Maple businesses productive and protected from downtime.',
      },
      {
        title: 'Cybersecurity for Maple Business',
        description:
          'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response defend Maple organizations against evolving threats.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide on-site IT support in Maple?',
        answer:
          'Yes. Our technicians are based at our Vaughan head office on Keele Street, a short drive from Maple, so we provide both scheduled on-site visits and rapid emergency response, in addition to immediate 24/7 remote support.',
      },
      {
        question: 'What managed IT services do you offer in Maple?',
        answer:
          'Maple businesses get a complete outsourced IT department: 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and ongoing IT strategy.',
      },
      {
        question: 'Can you help a small Maple business improve its cybersecurity?',
        answer:
          'Yes. We build layered protection sized for small business: managed firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response.',
      },
    ],
  },
  {
    slug: 'stouffville',
    city: 'Stouffville',
    title: 'IT Support & Managed IT Services in Stouffville',
    description:
      'Managed IT and cybersecurity for Stouffville businesses. 24/7 helpdesk, managed security, and on-site support across Whitchurch-Stouffville. Call (289) 582-9930.',
    keywords:
      'IT support Stouffville, managed IT services Stouffville, cybersecurity Stouffville, Stouffville IT company, IT helpdesk Whitchurch-Stouffville',
    intro:
      'IT Rapid Support delivers managed IT services and cybersecurity to businesses across Whitchurch-Stouffville. From Main Street storefronts to offices and growing companies throughout the town, we provide a 24/7 helpdesk, proactive monitoring, managed security, and on-site support that acts as your complete IT department.',
    nearbyAreas: ['Ballantrae', 'Gormley', 'Musselman Lake', 'Markham', 'Uxbridge', 'Aurora'],
    highlights: [
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'Round-the-clock helpdesk for your Stouffville team, with proactive monitoring and patching that catch issues before they cause downtime.',
      },
      {
        title: 'Cybersecurity for Stouffville Business',
        description:
          'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response protect Stouffville organizations of every size.',
      },
      {
        title: 'Cloud & Microsoft 365',
        description:
          'Cloud migration and Microsoft 365 management keep your Stouffville team secure, mobile, and productive wherever they work.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide on-site IT support in Stouffville?',
        answer:
          'Yes. Alongside immediate 24/7 remote support, our certified technicians provide scheduled and emergency on-site service across Whitchurch-Stouffville, including Ballantrae and Gormley.',
      },
      {
        question: 'What managed IT services do you provide in Stouffville?',
        answer:
          'We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy — a complete outsourced IT department for Stouffville businesses.',
      },
      {
        question: 'Can you support a small business in Stouffville that has no IT staff?',
        answer:
          'Absolutely — that is exactly who managed IT is for. We become your IT department: your team calls one number for help, and we handle the monitoring, security, backups, and planning behind the scenes for a fixed monthly cost.',
      },
    ],
  },
  {
    slug: 'bradford',
    city: 'Bradford',
    title: 'IT Support & Managed IT Services in Bradford',
    description:
      'Managed IT services and cybersecurity for Bradford businesses. 24/7 helpdesk, cloud, and on-site support across Bradford West Gwillimbury. Call (289) 582-9930.',
    keywords:
      'IT support Bradford, managed IT services Bradford, cybersecurity Bradford Ontario, Bradford IT company, IT helpdesk Bradford West Gwillimbury',
    intro:
      'IT Rapid Support brings enterprise-grade managed IT and cybersecurity to businesses across Bradford West Gwillimbury. Whether you run an office on Holland Street, a farm operation, or a growing company anywhere in town, our 24/7 helpdesk, proactive monitoring, and managed security keep your technology working so you can focus on the business.',
    nearbyAreas: ['Bond Head', 'Holland Landing', 'East Gwillimbury', 'Newmarket', 'Innisfil'],
    highlights: [
      {
        title: 'Managed IT & 24/7 Helpdesk',
        description:
          'A round-the-clock helpdesk for your Bradford team plus proactive monitoring and patch management that prevent downtime before it starts.',
      },
      {
        title: 'Cybersecurity for Bradford Business',
        description:
          'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response defend Bradford businesses against ransomware and phishing.',
      },
      {
        title: 'Cloud & Microsoft 365',
        description:
          'We migrate and manage Microsoft 365 and cloud services so your Bradford team can work securely from the office, home, or the field.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide on-site IT support in Bradford?',
        answer:
          'Yes. Our certified technicians provide scheduled and emergency on-site support throughout Bradford West Gwillimbury, including Bond Head and Holland Landing, alongside immediate 24/7 remote help.',
      },
      {
        question: 'What managed IT services do you offer Bradford businesses?',
        answer:
          'We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy so Bradford businesses get a complete IT department without the overhead.',
      },
      {
        question: 'How do you protect Bradford businesses from ransomware?',
        answer:
          'We combine managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, managed detection and response, and tested backups so Bradford businesses can resist an attack and recover quickly if one gets through.',
      },
    ],
  },
  {
    slug: 'vancouver',
    city: 'Vancouver',
    schemaLocation: 'vancouver',
    title: 'IT Support Vancouver | 24/7 Remote-First Managed IT',
    h1: 'IT Support & Managed IT Services in Vancouver',
    description:
      'IT support for Vancouver businesses: 24/7 remote helpdesk, proactive monitoring, Microsoft 365 management, cybersecurity, and backup oversight. Call (778) 803-7215.',
    keywords:
      'IT support Vancouver, managed IT services Vancouver, remote IT support Vancouver, cybersecurity Vancouver, Vancouver IT company, 24/7 IT helpdesk Vancouver',
    intro:
      'IT Rapid Support provides remote-first managed IT and cybersecurity support for Vancouver businesses from our West Hastings Street office. Our 24/7 helpdesk, proactive monitoring and maintenance, Microsoft 365 administration, managed cybersecurity, and backup oversight give local and distributed teams one dependable place to get help. Discuss any Vancouver-area hands-on requirements during scoping.',
    province: 'British Columbia',
    heroEyebrow: 'Vancouver, British Columbia',
    sectionIntro:
      'Remote-first managed IT, cybersecurity, Microsoft 365 administration, and 24/7 support for Vancouver organizations.',
    areaHeading: 'Remote-First IT Support Across Metro Vancouver',
    areasIntro:
      'The 24/7 helpdesk and managed services support Vancouver-area users remotely. Discuss any location-specific hands-on requirements during scoping.',
    phoneDisplay: '(778) 803-7215',
    phoneHref: 'tel:+17788037215',
    officeAddress: '1066 West Hastings Street, Suite 2000, Vancouver, BC V6E 3X2',
    ctaIntro:
      'Talk to our team about remote-first managed IT, cybersecurity, Microsoft 365, and 24/7 support for your Vancouver business.',
    nearbyAreas: ['Downtown Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'North Vancouver', 'West Vancouver'],
    highlights: [
      {
        title: '24/7 Remote Helpdesk',
        description:
          'Vancouver users can reach one support team around the clock for day-to-day technology issues, account help, and escalations.',
      },
      {
        title: 'Proactive IT & Microsoft 365',
        description:
          'Monitoring, maintenance, patching, and Microsoft 365 administration help keep systems reliable and distributed teams productive.',
      },
      {
        title: 'Managed Cybersecurity & Backup',
        description:
          'Managed cybersecurity and backup oversight help reduce risk, protect business data, and strengthen recovery readiness.',
      },
    ],
    faqs: [
      {
        question: 'Does IT Rapid Support provide IT support in Vancouver?',
        answer:
          'Yes. IT Rapid Support serves Vancouver businesses through a remote-first managed IT model from our West Hastings Street office. Services include a 24/7 helpdesk, proactive monitoring and maintenance, Microsoft 365 administration, managed cybersecurity, and backup oversight.',
      },
      {
        question: 'Is on-site IT support available in Vancouver?',
        answer:
          'Our Vancouver service is remote-first. Discuss any location-specific hands-on requirements during scoping so the team can confirm what is available for your office and project.',
      },
      {
        question: 'Can you support Vancouver employees who work from home or in other provinces?',
        answer:
          'Yes. The remote-first service is designed for office, hybrid, remote, and multi-location teams. Employees use one helpdesk and a consistent support process wherever they work in Canada.',
      },
      {
        question: 'Where is the IT Rapid Support Vancouver office?',
        answer:
          'The Vancouver office is at 1066 West Hastings Street, Suite 2000, Vancouver, British Columbia V6E 3X2. The local phone number is (778) 803-7215.',
      },
    ],
  },
];

export const getLocation = (slug: string): CityData | undefined =>
  locations.find((l) => l.slug === slug);
