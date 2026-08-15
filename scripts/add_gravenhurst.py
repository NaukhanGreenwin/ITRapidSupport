#!/usr/bin/env python3
"""Create /it-support/gravenhurst/ — the missing third Muskoka town.

Gravenhurst was named in the depth-pass brief and did not exist: the 2026-08-14
cottage cluster shipped Muskoka, Port Carling, Bracebridge and Huntsville only.
It is already referenced from the Bracebridge page's nearbyAreas and FAQs, so the
cluster pointed at a page that was never built.

Every local fact verified 2026-08-15: 2021 census counts, incorporation date,
lake and highway geography, Muskoka Wharf, RMS Segwun, Bethune Memorial House.
Built at the same depth as its depth-passed siblings (9 sections, 15 FAQs).
"""
import re
import sys
sys.path.insert(0, 'scripts')
from depth_insert import entry_bounds, render_sections, render_faqs, scan_array

PATH = 'src/data/locations.ts'

HIGHLIGHTS = [
    ('Gateway Access, Real Distance',
     'Gravenhurst is the first Muskoka town off Highway 11 and still a two-hour drive from the city, so properties are built to be diagnosed and fixed remotely: managed equipment, remote power control, local recording and documentation that survives a change of caretaker.'),
    ('Seasonal and Year-Round, One Team',
     'The same setup covers a cottage that sits empty for eight months and a home or small office in town that has to support real work every day, with monitoring appropriate to each rather than one template applied to both.'),
    ('Freeze, Leak and Power Alerting',
     'Temperature, water and power watched continuously with alerts that reach a phone somebody carries, so a January failure is a call that day rather than a discovery in the spring.'),
]

SECTIONS = [
    {
        'heading': 'The Gateway to the Muskoka Lakes',
        'paragraphs': [
            'Gravenhurst is the first Muskoka town you reach coming north on Highway 11, about fifteen kilometres south of Bracebridge, and it has leaned into that position for a very long time. The gate over Muskoka District Road 169 — the main road into town from the highway — carries the "Gateway to the Muskoka Lakes" message; it was removed at one point and rebuilt in 2009, and now stands at the south end of town. The town centre borders Lake Muskoka and Gull Lake, with Kahshe Lake about ten kilometres further south.',
            'That position matters practically rather than sentimentally. Gravenhurst is the shortest drive of the Muskoka towns from the GTA, the easiest to reach in bad weather, and the one most likely to have a property that is used well outside the summer. A meaningful share of the work here is not seasonal cottage work at all; it is a property somebody actually lives or works in for a substantial part of the year, which is a different engineering problem.',
        ],
    },
    {
        'heading': 'Sawdust City, and What the Town Is Now',
        'paragraphs': [
            'Gravenhurst was first known as McCabes Landing after its first settler, and later as Sawdust City — the name the lumber era earned it. Its prosperity came from a colonization road built in the 1850s, steamboating on the Muskoka lakes from the 1860s, and its position at the northern terminus of the Toronto, Simcoe and Muskoka Junction Railway. It was incorporated in 1887, and in 1971 was amalgamated with the townships of Morrison and Ryde along with parts of Medora, Wood and Muskoka townships.',
            'The town today is anchored by the Muskoka Wharf on Lake Muskoka, an eighty-nine-acre, $170-million redevelopment completed in 2005 on the site the lumber and boat-building industries once used, and it is the home port of the RMS Segwun, the oldest vessel powered by a working steam engine in North America. Bethune Memorial House, the preserved family home of the physician Norman Bethune, is a National Historic Site here. It is a working town with a genuine off-season, not a resort that closes.',
        ],
    },
    {
        'heading': 'Gravenhurst by the Numbers, and Why Coverage Is the Hard Part',
        'paragraphs': [
            'Gravenhurst had 13,157 residents at the 2021 census across 489.11 square kilometres of land, but only 5,789 of them live inside the population centre, which covers about six square kilometres. Fewer than half the population in roughly one per cent of the area. That is the statistic that explains what is difficult about servicing this municipality, and it is the same shape as Bracebridge and Huntsville.',
            'In town, connectivity options are usually reasonable and the design is conventional. Out along the lakes, the concession roads and south towards Kahshe, availability changes road by road and tree cover matters as much as distance. So we scope by address rather than by town, and where the connection is the genuine constraint we design around it — cellular failover, remotely manageable equipment, local recording — rather than pretending the link is better than it is.',
        ],
    },
    {
        'heading': 'An Older Town, and Why That Changes the Brief',
        'paragraphs': [
            'Gravenhurst\'s age profile is unusual even by Muskoka standards: at the 2021 census 29.5 per cent of residents were 65 or over, against 11.4 per cent under 15. That is close to one in three, and it changes what good technology looks like here in ways that are worth stating plainly rather than designing around silently.',
            'It means systems that fail gracefully and obviously rather than cleverly. It means alerts that go to a family member in the city as well as to the property owner, because the person who can act is often not the person who is there. It means avoiding designs that depend on somebody interpreting an app correctly under stress, and preferring a monitored service where a human notices something has stopped reporting. And it means documentation written for the next person rather than for us, because continuity matters more than elegance.',
        ],
    },
    {
        'heading': 'Internet Around Gravenhurst: What Actually Reaches an Address',
        'paragraphs': [
            'Gravenhurst sits on the Canadian Shield like the rest of the district, so rock, elevation and tree cover all affect what is available and what performs. In and around the town centre the options are usually better than people expect and worth checking before anything else is considered. Out along Lake Muskoka, Gull Lake, Kahshe Lake and the townships to the east and south, availability degrades quickly and what a provider advertises for the area is frequently not what is available at a specific driveway.',
            'We scope what genuinely reaches the property first: what wired service exists at the road, whether fixed wireless has line of sight, and whether satellite belongs as the primary connection or the backup. Our [Starlink installation and support in Muskoka](/services/starlink-installation-muskoka/) page covers siting, mounting, power and — just as importantly — what satellite does not solve. The Muskoka Airport is nearby with scheduled service to Billy Bishop Toronto City Airport, and Ontario Northland runs inter-city coach service through the town, but neither of those helps a modem that has hung, which is why remote power control is standard on our installations here.',
        ],
    },
    {
        'heading': 'What We Set Up, and Then Watch',
        'paragraphs': [
            'The connection first, then a network that can genuinely be managed from a distance: mesh coverage designed across the buildings people actually use rather than around wherever the router ended up, guest traffic kept away from cameras and controls, and a small uninterruptible supply so equipment survives a power blip rather than rebooting into a bad state. Then the property layer — cameras with local recording that survives an outage, smart locks and keypads with codes you control from the city, thermostats with low-temperature alerting, and leak sensors with a shut-off where the plumbing justifies it.',
            'After installation the job is monitoring and documentation rather than hardware. Knowing the sensors still report, the batteries are good, the alerts reach a phone somebody carries, and every device is written down with its network and its name. Accounts are handed to you rather than held by us. The service in full is on our [cottage IT support and smart home automation](/services/cottage-it-support/) page, with the regional picture on our [Muskoka cottage IT support](/it-support/muskoka/) page.',
        ],
    },
    {
        'heading': 'What Actually Fails in a Gravenhurst Winter',
        'paragraphs': [
            'The failures that cost money are the dull ones. Heat that stops on a cold night, a pipe that freezes and then bursts on the thaw, a sump pump that gives up during a January melt, a modem that hangs and stays hung until somebody drives up. Every one of them is inexpensive to detect and expensive to find in the spring, and being the closest Muskoka town to the city does not change that at all — it only shortens the drive you make once it has already happened.',
            'So the off-season build is deliberately plain: temperature sensors placed where cold actually arrives first rather than where mounting is convenient, leak detection with a shut-off where the plumbing justifies it, power monitoring so an outage announces itself, a small uninterruptible supply under the network equipment, and remote power control so a stuck router is a click rather than a drive. The most valuable part is not the hardware; it is the routine that confirms the sensors still report and the alert would actually reach somebody.',
        ],
    },
    {
        'heading': 'Small Business IT in Gravenhurst: The Same Standard, Delivered Differently',
        'paragraphs': [
            'For the offices, practices and shops in town, we provide the managed services we run across the GTA: a 24/7 helpdesk, monitoring and patching, Microsoft 365 administration, backups with tested restores, and layered security including managed firewalls, endpoint protection and multi-factor authentication. None of that is reduced because the address is north of the city.',
            'What genuinely differs is the attendance model, and we would rather state it than have it discovered. On-site visits are planned rather than same-day, so environments are built to minimise the faults that need hands on hardware: managed equipment with remote restart, spare configuration held ready, and cloud-first services wherever a local server would create a single point of failure two hours from a technician. That is a design response to geography, not a compromise pretending otherwise.',
        ],
    },
    {
        'heading': 'One Team for the Cottage and the City',
        'paragraphs': [
            'Most Gravenhurst seasonal properties are not owned from Gravenhurst. They are owned from Toronto, Vaughan, Markham and Mississauga by people who are two hours away for most of the year and who usually already have an IT arrangement for a business or a home in the city. Leaving the property outside that arrangement is how it ends up undocumented, spread across several personal accounts, and nobody\'s responsibility until it fails.',
            'Our office is at 7810 Keele St in Vaughan — the same side of the drive as most owners here, and often already looking after the network at your business or home in the city. The property becomes one more managed site alongside [IT support in Vaughan](/it-support/vaughan/) or [IT support in Toronto](/it-support/toronto/), with one agreement, one set of documentation and one number to call. Neighbouring coverage runs north to [cottage IT support in Bracebridge](/it-support/bracebridge/) and out to [cottage IT support in Port Carling](/it-support/port-carling/).',
        ],
    },
]

FAQS = [
    {
        'question': 'Which areas around Gravenhurst do you cover?',
        'answer': 'The town itself and the surrounding municipality, which runs to 489 square kilometres — Lake Muskoka and the Gull Lake shoreline, Kahshe Lake and Sparrow Lake to the south, Severn Bridge, Torrance and the Bala side to the west, and the Morrison and Ryde township areas amalgamated into the town in 1971. Coverage continues north to Bracebridge and out into the Muskoka Lakes. What changes with distance is not whether we cover an address but what connectivity reaches it, which we scope address by address.',
    },
    {
        'question': 'Do you have an office in Gravenhurst?',
        'answer': 'No, and we would rather say so than imply a local storefront. Our office is at 7810 Keele St in Vaughan, roughly two hours south on Highway 11. The service is built remote-first as a result: continuous monitoring, remote resolution for most faults, and planned on-site visits. We do not publish a guaranteed response time, because a number published before anyone has seen the property is marketing rather than a commitment.',
    },
    {
        'question': 'What internet options exist around Gravenhurst?',
        'answer': 'In and near the town centre the options are usually better than owners expect and worth checking before anything is bought. Out along Lake Muskoka, Gull Lake, Kahshe Lake and the concession roads they degrade quickly, and tree cover matters as much as distance because of the terrain. Cable where it has been extended, fixed wireless where there is line of sight, and satellite services including Starlink are all in play depending on the address. We check what genuinely reaches the property before recommending anything.',
    },
    {
        'question': 'Is Starlink the right answer for a Gravenhurst property?',
        'answer': 'Sometimes as the primary connection, often as a backup, and sometimes not at all — because Gravenhurst is the closest Muskoka town to the highway and a wired option exists at more addresses here than further north. We would rather tell you a wired service is available that you did not know about than sell an installation you did not need. Where satellite is the right answer, siting, mounting position, sky view and power all matter more than the hardware, and our Starlink installation page covers those.',
    },
    {
        'question': 'Do you cover both cottages and year-round properties?',
        'answer': 'Yes, and the split genuinely matters. A seasonal property is a monitoring problem: nobody is there, so heat, water, power and connectivity have to report for themselves. A year-round home or small office is a productivity problem: the connection and the Wi-Fi have to be good enough to work on all day, with a network that can still be managed from a distance. Gravenhurst has an unusually high proportion of the second kind, because it is the easiest Muskoka town to reach year-round.',
    },
    {
        'question': 'Can you get Wi-Fi to the boathouse and the bunkie?',
        'answer': 'Yes, and it needs designing rather than extending. Rock, water and mature trees between separate buildings defeat a single router, and each consumer range extender added afterwards creates another weak point that everything then routes through. Depending on the distances we use a properly engineered mesh, a point-to-point wireless link, or buried cable where a trench is already open for another reason. Coverage is then verified inside the buildings rather than promised from a plan.',
    },
    {
        'question': 'What stops the pipes freezing while the property is empty?',
        'answer': 'Instrumentation and an alert chain that has been tested, not a thermostat somebody trusts. Temperature sensors go where cold actually arrives first rather than where mounting is convenient, leak detection goes where the plumbing justifies it with a shut-off where that is worth doing, and power is monitored so an outage becomes a notification rather than something inferred later. The part that matters most is confirming the sensor still reports, the battery is good, and the alert reaches a phone somebody carries.',
    },
    {
        'question': 'Can you set up cameras and smart locks on a Gravenhurst property?',
        'answer': 'Yes, as one system rather than a collection of apps. Cameras are positioned for the approach, the outbuildings and the mechanical room, with local recording that survives an internet outage, and never in interior living space. Smart locks and keypads let you issue and revoke codes from the city for trades, cleaners or guests without anyone driving up. Everything is administered from one place and the accounts are handed to you rather than held by us.',
    },
    {
        'question': 'We rent the property out. How do you keep guests separate from our own systems?',
        'answer': 'With a genuinely separate guest network rather than a shared password, so guest traffic cannot reach cameras, controls, thermostats, storage or anything on the owner\'s accounts, while still being generous enough that guests are not trying to work around it. Access is handled with keypad codes or smart locks issued and revoked remotely per stay. Camera placement is documented, and we will put in writing where cameras are and are not installed.',
    },
    {
        'question': 'How do you handle a property on an unplowed road in winter?',
        'answer': 'By assuming nobody is getting there quickly and building accordingly. Managed equipment with remote power control lets us restart a stuck modem or router without a drive. Local recording and a cellular failover keep the important things reachable when the main connection drops. Sensors report heat, water and power continuously, and the alert goes to somebody who can actually act — which, for a lot of properties here, means a family member in the city as well as the owner.',
    },
    {
        'question': 'Do you support small businesses and offices in Gravenhurst?',
        'answer': 'Yes. Alongside the property work we provide the managed IT services we run across the GTA: monitoring and patching, Microsoft 365 administration, backups with tested restores, and layered security. The practical difference in Muskoka is that on-site attendance is scheduled rather than same-day, so the environment is deliberately designed to reduce the number of faults that require hands on hardware in the first place.',
    },
    {
        'question': 'Can you work with our builder, electrician or caretaker?',
        'answer': 'Yes, and earlier is cheaper. During a build or renovation the right time to run cable, place cameras and access points and decide where equipment lives is before the walls close. On a finished property we work with whoever is already involved, document what exists, and design around what cannot be changed. Where there is a caretaker or property manager, we make sure the documentation is written for them rather than for us, so a change of caretaker is not a loss of knowledge.',
    },
    {
        'question': 'What is the first thing worth fixing on most properties you see?',
        'answer': 'Usually the alert chain, not the hardware. Most places already have some sensors or cameras. What is missing is confirmation that the sensor still has a battery, that the platform is actually watching it, that the alert goes to a phone somebody carries, and that there is a way to act on it from two hours away. Verifying that costs almost nothing and is the difference between a monitoring system and a decoration.',
    },
    {
        'question': 'What does it cost in Gravenhurst?',
        'answer': 'We do not publish a figure, because a price quoted before anyone has looked at the property is a guess you would end up paying for. Cost is built from the number and size of buildings, what connectivity reaches the address, how many devices are managed, whether the property is rented, and how much of the monitoring you want watched by us rather than by you. What is reasonable to demand from any provider, us included, is a written scope stating what is included, what is billed separately, and what happens at renewal.',
    },
    {
        'question': 'Can you look after the property and our business in the city under one agreement?',
        'answer': 'Yes, and it is the arrangement we would recommend. Our office is at 7810 Keele St in Vaughan, so for GTA-based owners the property becomes one more managed site rather than a separate personal arrangement with its own supplier, its own accounts and no documentation. One agreement, one set of records, one number to call, and a team that already knows how your accounts are configured before anything goes wrong.',
    },
]


def build_entry():
    hl = '\n'.join(
        f"      {{\n        title: '{t}',\n        description:\n          '{d}',\n      }},"
        for t, d in HIGHLIGHTS
    )
    return f"""  {{
    slug: 'gravenhurst',
    city: 'Gravenhurst',
    title: 'Cottage IT Support Gravenhurst',
    h1: 'Cottage IT Support & Smart Home Automation in Gravenhurst',
    heroEyebrow: 'Serving Gravenhurst & south Muskoka',
    description:
      'Cottage and property IT support in Gravenhurst: rural internet and Starlink setup, mesh Wi-Fi, cameras, smart locks, freeze sensors and remote monitoring.',
    keywords:
      'cottage IT support Gravenhurst, smart home automation Gravenhurst, IT support Gravenhurst Ontario, Gravenhurst cottage Wi-Fi, Starlink setup Gravenhurst, remote cottage monitoring Gravenhurst',
    intro:
      'Gravenhurst is the first Muskoka town off Highway 11 and the gateway to the Muskoka Lakes, which makes it the district\\'s most year-round address: cottages on Lake Muskoka, Gull Lake and Kahshe Lake, homes and small offices in town, and a lot of properties used well outside the summer. IT Rapid Support builds the connection, the network, the cameras and the sensors as one managed system and watches it through the winter from our office in Vaughan.',
    sectionIntro:
      'Internet, Wi-Fi, cameras, smart locks, freeze and leak sensors and remote monitoring for cottages, homes and small offices in and around Gravenhurst.',
    areaHeading: 'Communities We Cover Around Gravenhurst',
    areasIntro:
      'Remote support year-round and scheduled on-site visits across south Muskoka, from Lake Muskoka and Gull Lake south to Kahshe Lake and Severn Bridge.',
    ctaIntro:
      'Talk to our team about internet, Wi-Fi, cameras, sensors and remote monitoring for your Gravenhurst property.',
    parentCity: {{ slug: 'muskoka', city: 'Muskoka', anchor: 'cottage IT support across Muskoka' }},
    nearbyAreas: [
      'Lake Muskoka',
      'Gull Lake',
      'Kahshe Lake',
      'Sparrow Lake',
      'Severn Bridge',
      'Torrance',
      'Bala',
      'Muskoka Wharf',
      'Morrison',
      'Ryde',
    ],
    highlights: [
{hl}
    ],
    faqs: [
{render_faqs(FAQS, 'single')}
    ],
    sections: [
{render_sections(SECTIONS, 'single')}
    ],
  }},
"""


def main():
    src = open(PATH, encoding='utf-8').read()
    if "slug: 'gravenhurst'" in src:
        print('gravenhurst already present — nothing to do')
        return
    # insert immediately after the bracebridge entry so the cluster reads
    # muskoka -> port-carling -> bracebridge -> gravenhurst -> huntsville
    _, end = entry_bounds(src, 'bracebridge')
    src = src[:end] + build_entry() + src[end:]
    open(PATH, 'w', encoding='utf-8').write(src)
    print('gravenhurst entry inserted after bracebridge')


if __name__ == '__main__':
    main()
