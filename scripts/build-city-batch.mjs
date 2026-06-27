#!/usr/bin/env node
// One-shot batch builder for the remaining city backlog. Writes all city
// objects into locations.ts, wires routes (App.tsx), prerender list, sitemap,
// and marks the backlog built. Review-gated: does NOT deploy.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const F = {
  locations: path.join(root, 'src/data/locations.ts'),
  app: path.join(root, 'src/App.tsx'),
  prerender: path.join(root, 'prerender-modern.mjs'),
  sitemap: path.join(root, 'public/sitemap.xml'),
  backlog: path.join(__dirname, 'seo-backlog.json'),
};

const cities = [
  {
    slug: 'etobicoke', city: 'Etobicoke', schemaLocation: 'toronto',
    title: 'IT Support & Managed IT Services in Etobicoke',
    description: 'Managed IT services and cybersecurity for Etobicoke businesses. 24/7 helpdesk, network security, cloud, and rapid on-site support across the GTA. Call (289) 582-9930.',
    keywords: 'IT support Etobicoke, managed IT services Etobicoke, cybersecurity Etobicoke, Etobicoke IT company, IT helpdesk Etobicoke, managed security Etobicoke',
    intro: 'IT Rapid Support keeps Etobicoke businesses running with managed IT services, cybersecurity, and a 24/7 helpdesk. From the office parks along the Queensway to the industrial corridors near Pearson, we act as your full IT department so your team can stay focused on the work that matters.',
    nearbyAreas: ['Mimico', 'New Toronto', 'Islington', 'The Kingsway', 'Humber Bay', 'Rexdale'],
    highlights: [
      { title: 'Managed IT & 24/7 Helpdesk', description: 'A round-the-clock helpdesk for your Etobicoke users by phone, email, and chat, backed by proactive monitoring that catches problems before they become downtime.' },
      { title: 'Cybersecurity That Fits Etobicoke', description: 'Layered protection for Etobicoke organizations: managed firewalls, endpoint protection, email security, MFA, and managed detection and response.' },
      { title: 'Cloud & Microsoft 365', description: 'Cloud migration, Microsoft 365, and Azure or AWS management to keep your Etobicoke team secure, mobile, and productive.' },
    ],
    faqs: [
      { question: 'Do you provide on-site IT support in Etobicoke?', answer: 'Yes. Alongside immediate remote support, our certified technicians provide scheduled and emergency on-site visits across Etobicoke and the wider GTA whenever an issue is best resolved in person.' },
      { question: 'What cybersecurity do you recommend for Etobicoke small businesses?', answer: 'We recommend a multi-layered approach: enterprise-grade firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response, packaged to make enterprise-level protection affordable for Etobicoke businesses.' },
      { question: 'Can you support our move to the cloud?', answer: 'Absolutely. We handle Microsoft 365 and Azure or AWS migrations, cloud security, and cloud backup, then provide ongoing management so your Etobicoke team gets the flexibility of the cloud without the security risks.' },
    ],
  },
  {
    slug: 'scarborough', city: 'Scarborough', schemaLocation: 'toronto',
    title: 'IT Support & Managed IT Services in Scarborough',
    description: 'Managed IT and cybersecurity for Scarborough businesses. 24/7 helpdesk, managed security, cloud, and rapid on-site support across the GTA. Call (289) 582-9930.',
    keywords: 'IT support Scarborough, managed IT services Scarborough, cybersecurity Scarborough, Scarborough IT company, IT helpdesk Scarborough, managed security Scarborough',
    intro: 'IT Rapid Support delivers managed IT services and cybersecurity to businesses across Scarborough. From Agincourt to the Scarborough Town Centre area, our 24/7 helpdesk, proactive monitoring, and security operations give you an enterprise-grade IT department without the enterprise overhead.',
    nearbyAreas: ['Agincourt', 'Malvern', 'Guildwood', 'West Hill', 'Birch Cliff', 'Cliffside'],
    highlights: [
      { title: '24/7 Helpdesk & Monitoring', description: 'Your Scarborough users get help around the clock by phone, email, and chat, while proactive monitoring and patching keep systems stable and secure.' },
      { title: 'Managed Cybersecurity', description: 'Firewalls, endpoint protection, email security, MFA, and managed detection and response protect Scarborough businesses against modern threats.' },
      { title: 'Cloud & Microsoft 365', description: 'We migrate and manage Microsoft 365, Azure, and AWS so your Scarborough team can work securely from anywhere.' },
    ],
    faqs: [
      { question: 'What IT services do you offer in Scarborough?', answer: 'We offer managed IT, a 24/7 helpdesk, proactive monitoring, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and on-site support, all tailored to Scarborough businesses across industries.' },
      { question: 'Do you provide on-site support in Scarborough?', answer: 'Yes. Our certified technicians provide scheduled and emergency on-site support throughout Scarborough and the GTA, in addition to fast remote help for issues that can be solved without a visit.' },
      { question: 'How quickly can you respond to an IT issue?', answer: 'Most issues are handled immediately through our remote helpdesk, and our certified technicians respond rapidly for emergencies that need hands-on attention in Scarborough.' },
    ],
  },
  {
    slug: 'newmarket', city: 'Newmarket',
    title: 'IT Support & Managed IT Services in Newmarket',
    description: 'Local Newmarket IT support and cybersecurity. 24/7 helpdesk, managed IT, cloud, and on-site certified technicians across York Region. Call (289) 582-9930.',
    keywords: 'IT support Newmarket, managed IT services Newmarket, cybersecurity Newmarket, Newmarket IT company, IT helpdesk Newmarket, York Region IT support',
    intro: 'IT Rapid Support is the IT partner Newmarket businesses rely on for managed IT services, cybersecurity, and 24/7 support. Serving York Region from nearby Vaughan, our certified technicians combine rapid remote help with hands-on on-site service for organizations across Newmarket.',
    nearbyAreas: ['Armitage', 'Stonehaven', 'Glenway', 'Summerhill Estates', 'Woodland Hill', 'Bristol-London'],
    highlights: [
      { title: 'Local York Region Support', description: 'We serve Newmarket and the surrounding York Region with both rapid remote support and scheduled or emergency on-site visits from certified technicians.' },
      { title: 'Managed IT & Monitoring', description: 'Proactive monitoring, patch management, and a 24/7 helpdesk keep your Newmarket systems secure and running without interruption.' },
      { title: 'Cybersecurity & Compliance', description: 'A security-first approach with firewalls, endpoint protection, MFA, and compliance support for regulated Newmarket businesses.' },
    ],
    faqs: [
      { question: 'Do you offer on-site IT support in Newmarket?', answer: 'Yes. We serve York Region from nearby Vaughan, so our certified technicians can be scheduled for regular on-site visits in Newmarket or dispatched quickly for emergencies, in addition to immediate remote support.' },
      { question: 'What managed IT services do you provide for Newmarket businesses?', answer: 'We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and strategic IT planning so Newmarket businesses get a complete outsourced IT department.' },
      { question: 'Can you help secure our Newmarket business against cyber threats?', answer: 'Yes. We deploy managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, and managed detection and response to protect Newmarket organizations against ransomware, phishing, and other modern threats.' },
    ],
  },
  {
    slug: 'aurora', city: 'Aurora',
    title: 'IT Support & Managed IT Services in Aurora',
    description: 'Local Aurora IT support and cybersecurity. 24/7 helpdesk, managed IT, cloud, and on-site certified technicians across York Region. Call (289) 582-9930.',
    keywords: 'IT support Aurora, managed IT services Aurora, cybersecurity Aurora, Aurora IT company, IT helpdesk Aurora, York Region IT support',
    intro: 'IT Rapid Support gives Aurora businesses a complete IT department: managed IT services, cybersecurity, and a 24/7 helpdesk. Serving York Region from nearby Vaughan, we pair fast remote support with on-site certified technicians for organizations throughout Aurora.',
    nearbyAreas: ['Aurora Village', 'Bayview Wellington', 'Aurora Heights', 'Aurora Highlands', 'Hills of St Andrew'],
    highlights: [
      { title: 'Local On-Site Support', description: 'Our certified technicians serve Aurora and the broader York Region with scheduled visits and fast emergency on-site response when hands-on help is needed.' },
      { title: 'Managed IT & 24/7 Helpdesk', description: 'A round-the-clock helpdesk plus proactive monitoring and patching keep your Aurora systems secure, current, and running smoothly.' },
      { title: 'Cybersecurity & Cloud', description: 'Managed firewalls, endpoint protection, MFA, and Microsoft 365 management protect and modernize your Aurora business.' },
    ],
    faqs: [
      { question: 'Do you provide on-site IT support in Aurora?', answer: 'Yes. We serve York Region from nearby Vaughan, so certified technicians can be scheduled for on-site visits in Aurora or respond quickly to emergencies, alongside immediate remote support.' },
      { question: 'What does managed IT include for Aurora businesses?', answer: 'It includes a 24/7 helpdesk, proactive monitoring and patch management, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and ongoing IT strategy, delivered for a predictable monthly cost.' },
      { question: 'How do you protect Aurora businesses from cyber attacks?', answer: 'We use a layered defence of managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, and managed detection and response to keep Aurora organizations protected against ransomware and phishing.' },
    ],
  },
  {
    slug: 'pickering', city: 'Pickering',
    title: 'IT Support & Managed IT Services in Pickering',
    description: 'Managed IT and cybersecurity for Pickering businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Durham Region. Call (289) 582-9930.',
    keywords: 'IT support Pickering, managed IT services Pickering, cybersecurity Pickering, Pickering IT company, IT helpdesk Pickering, Durham Region IT support',
    intro: 'IT Rapid Support delivers managed IT services and cybersecurity to Pickering businesses across Durham Region. With a 24/7 helpdesk, proactive monitoring, and managed security, we keep your systems protected and productive while your team focuses on growth.',
    nearbyAreas: ['Bay Ridges', 'Amberlea', 'Rougemount', 'Liverpool', 'Dunbarton', 'Rosebank'],
    highlights: [
      { title: '24/7 Helpdesk & Monitoring', description: 'Pickering users get help around the clock, with proactive monitoring and patching that prevents downtime before it starts.' },
      { title: 'Managed Cybersecurity', description: 'Firewalls, endpoint protection, email security, MFA, and managed detection and response defend Pickering businesses against modern threats.' },
      { title: 'Cloud & Microsoft 365', description: 'We migrate and manage Microsoft 365, Azure, and AWS so your Pickering team can work securely from anywhere.' },
    ],
    faqs: [
      { question: 'Do you provide on-site IT support in Pickering?', answer: 'Yes. Our certified technicians provide scheduled and emergency on-site support throughout Pickering and Durham Region, in addition to fast remote help for issues that do not require a visit.' },
      { question: 'What cybersecurity do you recommend for Pickering businesses?', answer: 'We recommend a layered approach: managed firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response, sized to fit Pickering small and mid-sized businesses.' },
      { question: 'Can you manage our cloud and Microsoft 365 environment?', answer: 'Yes. We handle Microsoft 365 and Azure or AWS migration, cloud security, and cloud backup, then provide ongoing management so your Pickering business gets the benefits of the cloud without the security headaches.' },
    ],
  },
  {
    slug: 'ajax', city: 'Ajax',
    title: 'IT Support & Managed IT Services in Ajax',
    description: 'Managed IT and cybersecurity for Ajax businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Durham Region. Call (289) 582-9930.',
    keywords: 'IT support Ajax, managed IT services Ajax, cybersecurity Ajax, Ajax IT company, IT helpdesk Ajax, Durham Region IT support',
    intro: 'IT Rapid Support is the managed IT and cybersecurity partner for Ajax businesses across Durham Region. Our 24/7 helpdesk, proactive monitoring, and managed security operations act as your complete IT department so you can focus on serving your customers.',
    nearbyAreas: ['Pickering Village', 'Nottingham', 'Audley', 'Applecroft', 'Southwood', 'Lakeside'],
    highlights: [
      { title: 'Managed IT & 24/7 Helpdesk', description: 'A round-the-clock helpdesk for your Ajax team plus proactive monitoring that catches issues before they cause downtime.' },
      { title: 'Cybersecurity for Ajax Business', description: 'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response protect Ajax organizations against evolving threats.' },
      { title: 'Cloud & Microsoft 365', description: 'Cloud migration and Microsoft 365 management keep your Ajax team secure, mobile, and productive.' },
    ],
    faqs: [
      { question: 'Do you offer on-site IT support in Ajax?', answer: 'Yes. Our certified technicians provide scheduled and emergency on-site support across Ajax and Durham Region, alongside immediate remote support for issues that can be resolved without a visit.' },
      { question: 'What managed IT services do you provide in Ajax?', answer: 'We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy so Ajax businesses get a full outsourced IT department for a predictable monthly cost.' },
      { question: 'How do you keep Ajax businesses safe from ransomware?', answer: 'We combine managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, managed detection and response, and tested data backup and recovery so Ajax businesses can resist and recover from ransomware.' },
    ],
  },
  {
    slug: 'whitby', city: 'Whitby',
    title: 'IT Support & Managed IT Services in Whitby',
    description: 'Managed IT and cybersecurity for Whitby businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Durham Region. Call (289) 582-9930.',
    keywords: 'IT support Whitby, managed IT services Whitby, cybersecurity Whitby, Whitby IT company, IT helpdesk Whitby, Durham Region IT support',
    intro: 'IT Rapid Support provides Whitby businesses with managed IT services, cybersecurity, and a 24/7 helpdesk across Durham Region. From Brooklin to the Whitby waterfront, our proactive monitoring and security operations keep your systems secure and your team productive.',
    nearbyAreas: ['Brooklin', 'Port Whitby', 'Pringle Creek', 'Rolling Acres', 'Williamsburg', 'Taunton North'],
    highlights: [
      { title: '24/7 Helpdesk & Monitoring', description: 'Whitby users get support around the clock, while proactive monitoring and patch management keep systems stable and secure.' },
      { title: 'Managed Cybersecurity', description: 'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response defend Whitby businesses against modern threats.' },
      { title: 'Cloud & Microsoft 365', description: 'We migrate and manage Microsoft 365, Azure, and AWS so your Whitby team can work securely from anywhere.' },
    ],
    faqs: [
      { question: 'Do you provide on-site IT support in Whitby?', answer: 'Yes. Our certified technicians provide scheduled and emergency on-site support throughout Whitby, Brooklin, and Durham Region, in addition to fast remote help.' },
      { question: 'What cybersecurity do you recommend for Whitby small businesses?', answer: 'We recommend a layered approach of managed firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response, packaged affordably for Whitby businesses.' },
      { question: 'Can you support our cloud and Microsoft 365 setup?', answer: 'Yes. We handle Microsoft 365 and Azure or AWS migration, cloud security, and cloud backup, then provide ongoing management so your Whitby team gets the flexibility of the cloud securely.' },
    ],
  },
  {
    slug: 'oshawa', city: 'Oshawa',
    title: 'IT Support & Managed IT Services in Oshawa',
    description: 'Managed IT and cybersecurity for Oshawa businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Durham Region. Call (289) 582-9930.',
    keywords: 'IT support Oshawa, managed IT services Oshawa, cybersecurity Oshawa, Oshawa IT company, IT helpdesk Oshawa, Durham Region IT support',
    intro: 'IT Rapid Support delivers managed IT services and cybersecurity to Oshawa businesses across Durham Region. With a 24/7 helpdesk, proactive monitoring, and managed security operations, we serve as your complete IT department so your team can focus on what it does best.',
    nearbyAreas: ['Downtown Oshawa', 'Northglen', 'Donevan', 'Lakeview', 'Windfields', 'Eastdale'],
    highlights: [
      { title: 'Managed IT & 24/7 Helpdesk', description: 'A round-the-clock helpdesk for your Oshawa users, backed by proactive monitoring that prevents downtime before it happens.' },
      { title: 'Cybersecurity for Oshawa Business', description: 'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response protect Oshawa organizations against modern threats.' },
      { title: 'Cloud & Microsoft 365', description: 'Cloud migration and Microsoft 365 management keep your Oshawa team secure, mobile, and productive.' },
    ],
    faqs: [
      { question: 'Do you offer on-site IT support in Oshawa?', answer: 'Yes. Our certified technicians provide scheduled and emergency on-site support across Oshawa and Durham Region, alongside immediate remote support for issues that do not require a visit.' },
      { question: 'What managed IT services do you provide in Oshawa?', answer: 'We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy so Oshawa businesses get a complete outsourced IT department.' },
      { question: 'How do you protect Oshawa businesses from cyber threats?', answer: 'We use a layered defence of managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, and managed detection and response to keep Oshawa organizations protected against ransomware and phishing.' },
    ],
  },
  {
    slug: 'king-city', city: 'King City',
    title: 'IT Support & Managed IT Services in King City',
    description: 'Local King City IT support and cybersecurity. 24/7 helpdesk, managed IT, cloud, and on-site certified technicians across King Township. Call (289) 582-9930.',
    keywords: 'IT support King City, managed IT services King City, cybersecurity King City, King City IT company, IT helpdesk King City, King Township IT support',
    intro: 'IT Rapid Support is the local IT partner for King City and King Township businesses, providing managed IT services, cybersecurity, and a 24/7 helpdesk. Based nearby in Vaughan, our certified technicians offer fast remote support and hands-on on-site service throughout the area.',
    nearbyAreas: ['Nobleton', 'Schomberg', 'Kettleby', 'Pottageville', 'Ansnorveldt'],
    highlights: [
      { title: 'Local On-Site Support', description: 'Based nearby in Vaughan, our certified technicians serve King City and King Township with scheduled visits and fast emergency on-site response.' },
      { title: 'Managed IT & 24/7 Helpdesk', description: 'A round-the-clock helpdesk plus proactive monitoring and patching keep your King City systems secure and running without interruption.' },
      { title: 'Cybersecurity & Cloud', description: 'Managed firewalls, endpoint protection, MFA, and Microsoft 365 management protect and modernize your King City business.' },
    ],
    faqs: [
      { question: 'Do you provide on-site IT support in King City?', answer: 'Yes. We are based nearby in Vaughan, so our certified technicians can be scheduled for on-site visits in King City and King Township or respond quickly to emergencies, in addition to immediate remote support.' },
      { question: 'What managed IT services do you offer for King City businesses?', answer: 'We offer a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy, delivered for a predictable monthly cost.' },
      { question: 'How do you secure King City businesses against cyber threats?', answer: 'We deploy managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, and managed detection and response to protect King City organizations against ransomware and phishing.' },
    ],
  },
  {
    slug: 'caledon', city: 'Caledon',
    title: 'IT Support & Managed IT Services in Caledon',
    description: 'Managed IT and cybersecurity for Caledon businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Peel Region. Call (289) 582-9930.',
    keywords: 'IT support Caledon, managed IT services Caledon, cybersecurity Caledon, Caledon IT company, IT helpdesk Caledon, Peel Region IT support',
    intro: 'IT Rapid Support provides Caledon businesses with managed IT services, cybersecurity, and a 24/7 helpdesk across Peel Region. From Bolton to Caledon East, our proactive monitoring and managed security operations keep your systems secure and your team productive.',
    nearbyAreas: ['Bolton', 'Caledon East', 'Inglewood', 'Palgrave', 'Alton', 'Cheltenham'],
    highlights: [
      { title: '24/7 Helpdesk & Monitoring', description: 'Caledon users get help around the clock, with proactive monitoring and patching that prevents downtime before it starts.' },
      { title: 'Managed Cybersecurity', description: 'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response defend Caledon businesses against modern threats.' },
      { title: 'Cloud & Microsoft 365', description: 'We migrate and manage Microsoft 365, Azure, and AWS so your Caledon team can work securely from anywhere.' },
    ],
    faqs: [
      { question: 'Do you provide on-site IT support in Caledon?', answer: 'Yes. Our certified technicians provide scheduled and emergency on-site support throughout Caledon, Bolton, and Peel Region, in addition to fast remote help for issues that do not require a visit.' },
      { question: 'What cybersecurity do you recommend for Caledon businesses?', answer: 'We recommend a layered approach: managed firewalls, endpoint protection, email security with anti-phishing, multi-factor authentication, security awareness training, and managed detection and response, sized for Caledon small and mid-sized businesses.' },
      { question: 'Can you manage our cloud and Microsoft 365 environment?', answer: 'Yes. We handle Microsoft 365 and Azure or AWS migration, cloud security, and cloud backup, then provide ongoing management so your Caledon business gets the benefits of the cloud securely.' },
    ],
  },
  {
    slug: 'georgetown', city: 'Georgetown',
    title: 'IT Support & Managed IT Services in Georgetown',
    description: 'Managed IT and cybersecurity for Georgetown businesses. 24/7 helpdesk, managed security, cloud, and on-site support across Halton Hills. Call (289) 582-9930.',
    keywords: 'IT support Georgetown, managed IT services Georgetown, cybersecurity Georgetown, Georgetown IT company, IT helpdesk Georgetown, Halton Hills IT support',
    intro: 'IT Rapid Support delivers managed IT services and cybersecurity to Georgetown businesses across Halton Hills. With a 24/7 helpdesk, proactive monitoring, and managed security, we act as your complete IT department so your team can focus on growing the business.',
    nearbyAreas: ['Glen Williams', 'Norval', 'Stewarttown', 'Limehouse', 'Acton', 'Georgetown South'],
    highlights: [
      { title: 'Managed IT & 24/7 Helpdesk', description: 'A round-the-clock helpdesk for your Georgetown users plus proactive monitoring that catches issues before they cause downtime.' },
      { title: 'Cybersecurity for Georgetown Business', description: 'Managed firewalls, endpoint protection, email security, MFA, and managed detection and response protect Georgetown organizations against evolving threats.' },
      { title: 'Cloud & Microsoft 365', description: 'Cloud migration and Microsoft 365 management keep your Georgetown team secure, mobile, and productive.' },
    ],
    faqs: [
      { question: 'Do you offer on-site IT support in Georgetown?', answer: 'Yes. Our certified technicians provide scheduled and emergency on-site support across Georgetown and Halton Hills, alongside immediate remote support for issues that can be resolved without a visit.' },
      { question: 'What managed IT services do you provide in Georgetown?', answer: 'We provide a 24/7 helpdesk, proactive monitoring and patching, managed cybersecurity, cloud and Microsoft 365 management, data backup and recovery, and IT strategy so Georgetown businesses get a complete outsourced IT department.' },
      { question: 'How do you keep Georgetown businesses safe from ransomware?', answer: 'We combine managed firewalls, endpoint protection, email security, multi-factor authentication, security awareness training, managed detection and response, and tested data backup and recovery so Georgetown businesses can resist and recover from ransomware.' },
    ],
  },
];

function tsLiteral(o) {
  return JSON.stringify(o, null, 2).split('\n').map((l) => '  ' + l).join('\n');
}

// 1) locations.ts
let loc = fs.readFileSync(F.locations, 'utf8');
const locMarker = '\n];\n\nexport const getLocation';
let added = 0;
for (const c of cities) {
  if (loc.includes(`slug: '${c.slug}'`) || loc.includes(`"slug": "${c.slug}"`)) { console.log(`locations: ${c.slug} exists, skip`); continue; }
  loc = loc.replace(locMarker, `\n${tsLiteral(c)},${locMarker}`);
  added++;
}
fs.writeFileSync(F.locations, loc);
console.log(`locations.ts: added ${added}`);

// 2) App.tsx
let app = fs.readFileSync(F.app, 'utf8');
const notFound = '            <Route path="*" element={<NotFound />} />';
let routes = '';
for (const c of cities) {
  if (app.includes(`slug="${c.slug}"`)) continue;
  routes += `            <Route path="/it-support/${c.slug}" element={<LocationLanding slug="${c.slug}" />} />\n`;
}
app = app.replace(notFound, routes + notFound);
fs.writeFileSync(F.app, app);
console.log('App.tsx: routes added');

// 3) prerender-modern.mjs
let pre = fs.readFileSync(F.prerender, 'utf8');
let preList = '';
for (const c of cities) {
  if (!pre.includes(`/it-support/${c.slug}'`)) preList += `  '/it-support/${c.slug}',\n`;
}
pre = pre.replace("  '/it-support/milton',\n", "  '/it-support/milton',\n" + preList);
fs.writeFileSync(F.prerender, pre);
console.log('prerender: routes added');

// 4) sitemap.xml
let sm = fs.readFileSync(F.sitemap, 'utf8');
const today = new Date().toISOString().slice(0, 10);
let smBlock = '';
for (const c of cities) {
  if (sm.includes(`/it-support/${c.slug}<`)) continue;
  smBlock += `  <url>\n    <loc>https://itrapidsupport.com/it-support/${c.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
}
sm = sm.replace('  <!-- Legal Pages -->', smBlock + '  <!-- Legal Pages -->');
fs.writeFileSync(F.sitemap, sm);
console.log('sitemap.xml: URLs added');

// 5) mark backlog built
const backlog = JSON.parse(fs.readFileSync(F.backlog, 'utf8'));
for (const t of backlog.targets) if (cities.find((c) => c.slug === t.slug)) t.built = true;
fs.writeFileSync(F.backlog, JSON.stringify(backlog, null, 2) + '\n');
console.log('backlog: marked built');
console.log('DONE');
