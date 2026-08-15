#!/usr/bin/env python3
"""Depth pass content: Muskoka hub, Bracebridge, Huntsville, Port Carling.

Local facts verified 2026-08-15 against reference sources (2021 census counts,
incorporation dates, lake and highway geography, municipal amalgamation history,
named institutions). No response-time guarantee, no published pricing, no
invented certifications, canonical NAP only.
"""
import sys
sys.path.insert(0, 'scripts')
from depth_insert import apply

# --------------------------------------------------------------------------
# MUSKOKA hub  (4 -> 10 sections, 12 -> 16 FAQs)
# --------------------------------------------------------------------------
MUSKOKA_SECTIONS = [
    {
        'heading': 'Sixty Thousand Residents, One Hundred Thousand Seasonal Owners',
        'paragraphs': [
            'Muskoka has roughly 60,000 permanent residents and around 100,000 seasonal property owners who spend their summers here. That ratio is the single most useful fact about working on technology in this district, and almost every design decision follows from it. Nearly two thirds of the properties are empty for most of the year, owned by people who are two hours away when something goes wrong, and served by trades and suppliers whose busiest weeks are exactly the weeks the owners are present.',
            'A system designed for a house is designed on the assumption that somebody is there. Somebody notices the router light, hears the sump pump, feels the room getting cold. Take that person away for eight months and every one of those assumptions fails silently. The whole discipline of cottage technology is replacing a present human with instrumentation that reports honestly, and then making sure somebody actually reads the report.',
        ],
    },
    {
        'heading': 'The Three Towns and the Township: How Muskoka Is Actually Organised',
        'paragraphs': [
            'Muskoka is a district municipality rather than a city, and it is genuinely made of separate places with separate characters. Bracebridge is the seat of the district government, built around a waterfall on the Muskoka River, first incorporated in 1875 and marking its 150th year in 2025. Huntsville is the largest of the three towns at 21,147 residents and by far the largest in land area at over 700 square kilometres, sitting 215 kilometres north of Toronto and serving as the western gateway to Algonquin Provincial Park along Highway 60. Gravenhurst, about fifteen kilometres south of Bracebridge, is the southern entrance and is positioned as the gateway to the Muskoka Lakes.',
            'Port Carling is different again: an unincorporated community and the seat of the Township of Muskoka Lakes since 1971, sitting on the Indian River where the locks join Lake Muskoka to Lake Rosseau. Each has its own page here — [cottage IT support in Bracebridge](/it-support/bracebridge/), [cottage IT support in Huntsville](/it-support/huntsville/), [cottage IT support in Gravenhurst](/it-support/gravenhurst/) and [cottage IT support in Port Carling](/it-support/port-carling/) — because the connectivity, the access and the seasonal pattern genuinely differ between them.',
        ],
    },
    {
        'heading': 'Internet in Muskoka: What Actually Reaches an Address',
        'paragraphs': [
            'The honest answer is that it varies by driveway, not by postal code. Muskoka sits on the Canadian Shield, which means rock, elevation change and heavy tree cover, and all three affect what is available and what performs. In and around the town centres of Bracebridge, Huntsville and Gravenhurst the options are usually reasonable. Out along the lakes and the concession roads they degrade quickly, and the service a provider advertises for the area is frequently not the service available at a specific address.',
            'We scope what genuinely reaches your property before recommending anything: what wired service exists at the road, whether fixed wireless has line of sight, and whether satellite is the right primary or the right backup. Satellite has changed this picture materially for properties that previously had nothing usable, and our [Starlink installation and support in Muskoka](/services/starlink-installation-muskoka/) page covers siting, mounting, power and what it does and does not solve. Where the connection is the constraint, we design around it — cellular failover, remotely manageable equipment, local recording — rather than pretending a link is better than it is.',
        ],
    },
    {
        'heading': 'The Eight Months Nobody Is There',
        'paragraphs': [
            'Winter is when cottage technology earns its cost, and it is also when it is least likely to be checked. The failures that matter between November and April are not interesting ones: a furnace that stops, a pipe that freezes and then bursts on the thaw, a sump pump that fails during a January melt, a power outage long enough to defeat the equipment but short enough that nobody hears about it. Each is inexpensive to detect and expensive to discover in the spring.',
            'What we install for the off-season is deliberately simple: temperature sensors in the places that actually freeze first rather than in the room that is convenient, water and leak detection with a shut-off where it is worth doing, power monitoring so an outage is a notification rather than an inference, and a small uninterruptible supply under the network equipment so a brief blip does not leave the property offline for a week. The part that matters more than the hardware is the alert chain: confirming the sensor still reports, the battery is good, and the alert reaches a phone somebody carries.',
        ],
    },
    {
        'heading': 'Cameras, Smart Locks and Rented Cottages',
        'paragraphs': [
            'Muskoka is one of the most heavily short-term-rented areas in the country, and a rented property has a different technology brief from a private one. Access has to be issued and revoked without anyone driving up, which is what smart locks and keypad codes are actually for. Guest internet has to be usable and generous while being completely separated from the cameras, the controls and anything belonging to the owner. Cameras have to be positioned lawfully and sensibly — approaches, outbuildings and the mechanical room, not interior living space — and recorded locally so an internet outage does not erase the record.',
            'The failure mode we see most often is a collection of consumer apps rather than a system: one brand of camera, another brand of lock, a thermostat on a third account, and no single place to look. It works until somebody needs it to work under pressure. We consolidate onto something that can be administered from one place, hand the accounts to you rather than holding them, and document every device with its network and its name so the next person to touch it is not starting from nothing.',
        ],
    },
    {
        'heading': 'When the Cottage Becomes an Office',
        'paragraphs': [
            'A growing number of Muskoka properties are no longer purely seasonal. People work from them for weeks at a time, run a business from them in the shoulder seasons, or have made them the primary residence outright. That changes the requirement from monitoring to productivity, and the two are engineered differently. A connection that is fine for a security camera uploading a clip is not necessarily fine for a full day of video calls, and a network that never had to carry more than a phone now has to carry a household of them plus a working day.',
            'When we scope a property for real work we look at upload as carefully as download, at how the connection behaves under load rather than on a speed test, and at whether there is a second path worth having. Mesh coverage is designed across the buildings people actually work in rather than around the router\'s location. And because the same team looks after businesses across the GTA, a cottage set up this way can be managed as one more site under the same agreement as your office at home, rather than as a separate personal arrangement nobody documents.',
        ],
    },
]

MUSKOKA_FAQS = [
    {
        'question': 'Do you cover Gravenhurst as well as Bracebridge, Huntsville and Port Carling?',
        'answer': 'Yes. Gravenhurst sits at the southern entrance to the district, about fifteen kilometres south of Bracebridge on Highway 11, with its town centre on Lake Muskoka and Gull Lake and Kahshe Lake ten kilometres further south. It has its own page covering the area in detail. Coverage across the district also includes Bala, Windermere, Milford Bay, Baysville, Port Sydney, Utterson and the surrounding townships, and properties are grouped under one agreement where an owner has more than one.',
    },
    {
        'question': 'Can we actually work full-time from a Muskoka property?',
        'answer': 'Often yes, but it depends on the address rather than on the region, and the honest scope has to be done first. The questions that decide it are what reaches the property, how the connection behaves under sustained load rather than on a speed test, whether upload is adequate for video calls, and whether a second path is available for failover. Where the answer is genuinely marginal we will say so before anything is bought, because the alternative is an expensive installation that still does not support a working day.',
    },
    {
        'question': 'What happens when the power goes out?',
        'answer': 'Without preparation, everything stops and you find out later. With it, several useful things happen instead: a small uninterruptible supply keeps the network equipment and the recorder running through a short outage, cameras with local recording keep the footage regardless of internet, power monitoring turns the outage itself into a notification, and equipment is configured to come back cleanly rather than into a broken state when the supply returns. For longer outages the design question is which handful of things must survive, which is a decision about cost rather than a technical limit.',
    },
    {
        'question': 'Do you get involved during a build or a renovation?',
        'answer': 'Yes, and earlier is dramatically cheaper. While the walls are open is the time to run cable, decide where access points and cameras belong, choose a sensible location for equipment with power and ventilation, and plan for the buildings that will be added later. On a finished property we work with the builder, electrician or caretaker already involved, document what exists, and design around what cannot be changed. We would rather be a nuisance at the framing stage than an expense afterwards.',
    },
]

# --------------------------------------------------------------------------
# BRACEBRIDGE  (3 -> 9 sections, 10 -> 15 FAQs)
# --------------------------------------------------------------------------
BRACEBRIDGE_SECTIONS = [
    {
        'heading': 'The District Seat, and What That Adds to the Work',
        'paragraphs': [
            'Bracebridge is the seat of the District Municipality of Muskoka, which means the district government, its administration and the professional services that orbit it are all here. Add a working downtown along Manitoba Street, the tourism economy, and Santa\'s Village — established in 1955 and sited here because the town sits at 45 degrees latitude, halfway between the equator and the North Pole — and you have a business base that is small in headcount and surprisingly conventional in its requirements.',
            'Those requirements are ours as much as the cottage work is: managed monitoring and patching, Microsoft 365 administration, tested backups, and layered security, delivered remote-first with scheduled on-site attendance. A professional practice in Bracebridge has the same obligations to its clients as one in the GTA, and the fact that it is two hours north of us changes the attendance model rather than the standard.',
        ],
    },
    {
        'heading': 'Bracebridge by the Numbers, and Why Coverage Is the Hard Part',
        'paragraphs': [
            'Bracebridge had 17,305 residents at the 2021 census across 615.20 square kilometres of land, but only 9,884 of them live inside the population centre, which covers 13.38 square kilometres. Just over half the population in roughly two per cent of the area. That single statistic explains most of what is difficult about servicing this municipality: the town itself is compact and straightforward, and the other 600 square kilometres is lakes, river, bush and concession road.',
            'Practically, it means the advice for an address on Manitoba Street and an address twenty minutes out along the river are not the same advice. In town, wired options are usually reasonable and the design is conventional. Outside it, availability changes road by road, tree cover matters, and the sensible design is remote-first: equipment that can be managed and restarted without a drive, local recording that survives an outage, and a failover path so a single fault does not remove the property from view entirely.',
        ],
    },
    {
        'heading': 'Waterfalls, the River and the Properties Along Them',
        'paragraphs': [
            'The town was built around a waterfall on the Muskoka River in the centre of town, and is known for the others nearby including Wilson\'s Falls and High Falls. The Silver Bridge joining Manitoba Street with Ecclestone Drive and the Clock Tower are part of the same historic core. It is a genuinely attractive setting and, for anyone installing a network, a set of specific constraints.',
            'River and shoreline properties tend to have separate buildings — a main cottage, a boathouse, a bunkie, sometimes a workshop — with rock, water and mature trees between them. A single router in the main building was never going to cover that, and adding a consumer range extender usually makes it worse rather than better. The design that works is a proper mesh or point-to-point link engineered for the actual distances and obstructions, with cable run between buildings wherever a trench is already open for something else.',
        ],
    },
    {
        'heading': 'Small Business IT in Bracebridge: The Same Standard, Delivered Differently',
        'paragraphs': [
            'For the offices, practices and shops in town, we provide the managed services we run across the GTA: 24/7 helpdesk, monitoring and patching, Microsoft 365 administration, backup with tested restores, and layered security including managed firewalls, endpoint protection and multi-factor authentication. Nothing about that is reduced because of the distance.',
            'What genuinely differs is the attendance model, and we would rather be explicit about it than let it be discovered. On-site visits are planned rather than same-day, so environments are built to minimise the number of faults that require hands on hardware: managed equipment with remote restart, spare configuration held ready, and cloud-first services wherever a local server would create a single point of failure two hours from a technician. That is a design response to geography rather than a compromise pretending not to be one.',
        ],
    },
    {
        'heading': 'What Actually Fails in a Bracebridge Winter',
        'paragraphs': [
            'The failures that cost money here are unglamorous. A furnace that stops on a cold night, a pipe that freezes and then bursts on the thaw, a sump pump that gives up during a January melt, a modem that locks up and stays locked until somebody visits. None of them is expensive to detect. All of them are expensive to find in April.',
            'So the winter kit is deliberately mundane: temperature sensors placed where cold actually arrives first rather than where mounting is convenient, leak detection with a shut-off where the plumbing justifies it, power monitoring so an outage announces itself, a small uninterruptible supply under the network equipment, and remote power control so a stuck router can be restarted from the city. The most valuable part is not any of that hardware. It is the routine that confirms the sensors still report, the batteries are still good, and the alerts reach a phone somebody is carrying.',
        ],
    },
    {
        'heading': 'One Team for the Cottage and the City',
        'paragraphs': [
            'Most Bracebridge cottages are not owned from Bracebridge. They are owned from Toronto, Vaughan, Markham and Mississauga, and the owner is frequently already dealing with an IT provider for a business or a home in the city. Splitting the cottage off into a separate arrangement with a separate supplier, separate accounts and separate documentation is how it ends up being nobody\'s responsibility.',
            'Our office is at 7810 Keele St in Vaughan, which puts us on the same side of the drive as most owners here. That makes it practical to run the cottage as one more site under the same agreement as [IT support in Vaughan](/it-support/vaughan/), [IT support in Toronto](/it-support/toronto/) or wherever your business actually sits, with one set of documentation, one place to call, and one team that already knows the accounts.',
        ],
    },
]

BRACEBRIDGE_FAQS = [
    {
        'question': 'Do you cover properties outside the town of Bracebridge?',
        'answer': 'Yes, and that is most of the work. Only about 9,884 of Bracebridge\'s 17,305 residents live inside the population centre; the rest of the municipality is over 600 square kilometres of lakes, river and concession road. Coverage runs out to Gravenhurst, Milford Bay, Bala, Port Sydney, Utterson, Baysville and Vankoughnet, and around Lake Muskoka and Lake of Bays. What changes outside town is not whether we cover it but what connectivity is available, which we scope address by address.',
    },
    {
        'question': 'Can you link the cottage, the boathouse and the bunkie into one network?',
        'answer': 'Yes, and it needs designing rather than extending. Rock, water and mature trees between separate buildings defeat a single router, and adding a consumer range extender usually makes the problem worse by creating a weak link everything then routes through. Depending on the distances we use a properly engineered mesh, a point-to-point wireless link, or buried cable where a trench is already open for another reason. The buildings then behave as one network rather than as several with the same password.',
    },
    {
        'question': 'What is the fastest thing we can do before this winter?',
        'answer': 'Confirm the alert chain works, before adding anything. In most properties we assess, some sensors already exist and nobody has verified that they still report, that the batteries are good, that the platform is watching them, or that the alert would reach a phone somebody carries. That verification costs almost nothing and is the difference between a monitoring system and a decoration. After that, the highest-value additions are temperature sensing where cold arrives first, leak detection with a shut-off, and remote power control on the network equipment.',
    },
    {
        'question': 'Do you support businesses in Bracebridge, not just cottages?',
        'answer': 'Yes. The offices, practices and shops in town get the managed services we run across the GTA: 24/7 helpdesk, monitoring and patching, Microsoft 365 administration, backups with tested restores, and layered security. The standard is the same; the attendance model is different, because on-site visits are planned rather than same-day. Environments are therefore designed so that the number of faults genuinely requiring hands on hardware stays small.',
    },
    {
        'question': 'Can you look after our cottage and our business in the city under one agreement?',
        'answer': 'Yes, and it is the arrangement we would recommend. Our office is at 7810 Keele St in Vaughan, so for owners based in the GTA the cottage becomes one more managed site rather than a separate personal arrangement with its own supplier, its own accounts and no documentation. One agreement, one set of records, one number to call, and a team that already knows how your accounts are set up.',
    },
]

# --------------------------------------------------------------------------
# HUNTSVILLE  (2 -> 8 sections, 10 -> 15 FAQs)
# --------------------------------------------------------------------------
HUNTSVILLE_SECTIONS = [
    {
        'heading': 'The Largest Town in Muskoka, by a Long Way',
        'paragraphs': [
            'Huntsville had 21,147 residents at the 2021 census, the largest of the three major Muskoka towns, on a land area of over 700 square kilometres — also the largest, and by a wide margin. It sits 215 kilometres north of Toronto and 130 kilometres south of North Bay, in the hilly Canadian Shield terrain that gives the area its character and gives anyone installing a network its constraints. The town in its present form dates from the 1971 district restructuring, when it absorbed the townships of Brunel, Chaffey, Stephenson and Stisted along with the Village of Port Sydney.',
            'That size is the practical fact. A Huntsville address can be five minutes from Main Street or forty minutes out along a township road, and the two have almost nothing in common technically. We scope by address rather than by town name, and we say plainly when a property is at the point where satellite is the sensible primary connection rather than the fallback.',
        ],
    },
    {
        'heading': 'Three Lakes Inside the Boundary, and Several More Just Outside',
        'paragraphs': [
            'Mary Lake, Lake Vernon and Fairy Lake all sit within the town boundary, with Peninsula Lake, Skeleton Lake and Lake of Bays immediately outside it. The Muskoka River winds through the downtown and the Big East River empties into Lake Vernon. Arrowhead Provincial Park is inside the town limits, and Highway 60 runs east from here as the western gateway into Algonquin Provincial Park.',
            'For property owners that geography produces a recognisable pattern: multiple buildings spread across a shoreline lot, significant distance between them, mature tree cover in between, and frequently a boathouse or dock that people expect to work as well as the main cottage does. The answer is a designed network — mesh or point-to-point links engineered for the real distances and obstructions, cable where a trench is open, and coverage verified in the buildings rather than promised from a floor plan.',
        ],
    },
    {
        'heading': 'A Service Economy That Peaks When You Are Here',
        'paragraphs': [
            'Huntsville\'s economy is primarily service based, driven by tourism and the seasonal population, with substantial employment in the construction trades. Deerhurst Resort, which hosted the 36th G8 summit in June 2010, is among the largest employers, alongside the Trillium Lakelands District School Board and Kimberly Clark. Huntsville District Memorial Hospital is a community teaching hospital affiliated with the Northern Ontario School of Medicine.',
            'The consequence for a property owner is a scheduling one that nobody mentions until it bites: the weeks when you most want work done are the weeks when every local trade is at capacity. Planning technology work into the shoulder seasons, and having monitoring in place so problems surface early rather than at the start of a long weekend, is worth more here than in almost any other market we serve.',
        ],
    },
    {
        'heading': 'Hospitality, Rentals and Guest Networks Around Huntsville',
        'paragraphs': [
            'A large share of properties around Huntsville and Lake of Bays are rented at least part of the year, and a rental has a different brief from a private cottage. Guests need internet that is generous and simple. The owner needs that guest traffic completely separated from cameras, controls, thermostats and anything on the owner\'s own accounts. Access has to be issued and revoked remotely, which is what keypad codes and smart locks are actually for, rather than a key under a rock and a phone call.',
            'Cameras belong on approaches, outbuildings and the mechanical room, recorded locally so an internet outage does not erase the record, and never in interior living space. Getting that split right at installation is straightforward; retrofitting it after a property has accumulated four brands of device on four different personal accounts is not. We consolidate onto something administered from one place and hand the accounts to the owner rather than holding them.',
        ],
    },
    {
        'heading': 'What Actually Fails in a Huntsville Winter',
        'paragraphs': [
            'Huntsville sits further north than the rest of the district and its winters are correspondingly less forgiving. The expensive failures are the dull ones: heat that stops, a pipe that freezes and bursts on the thaw, a sump pump that fails during a melt, a modem that hangs and stays hung because nobody is there to power-cycle it. Detection is cheap. Discovery in April is not.',
            'The off-season build is therefore deliberately plain: temperature sensors placed where cold arrives first, leak detection with a shut-off where the plumbing justifies it, power monitoring so an outage becomes a notification, a small uninterruptible supply under the network equipment, and remote power control so a stuck router is a click rather than a two-hour drive. The part that matters most is not hardware but the routine that confirms sensors still report, batteries are good, and alerts reach a phone somebody carries.',
        ],
    },
    {
        'heading': 'One Team for the Property and the Business',
        'paragraphs': [
            'Most Huntsville seasonal properties are owned from the GTA, and their owners usually already have an IT arrangement for a business or a home in the city. Keeping the property as a separate arrangement with a separate supplier and no documentation is how it becomes nobody\'s responsibility, and it is the reason so many of the systems we inherit here have no record of what was installed or which account it lives on.',
            'Our office is at 7810 Keele St in Vaughan, the same side of the drive as most owners. That makes it practical to run the property as one more managed site alongside [IT support in Vaughan](/it-support/vaughan/), [IT support in Toronto](/it-support/toronto/) or wherever your business actually is, and to keep the regional picture on our [Muskoka cottage IT support](/it-support/muskoka/) page consistent with what is actually installed.',
        ],
    },
]

HUNTSVILLE_FAQS = [
    {
        'question': 'How far out from Huntsville do you actually cover?',
        'answer': 'Across the whole municipality, which is over 700 square kilometres and the largest in Muskoka by land area, plus the surrounding lakes. That includes Port Sydney, Utterson, Hidden Valley, Ravenscliffe, Aspdin and the Lake of Bays shoreline as well as the town itself. What changes with distance is not coverage but connectivity: an address five minutes from Main Street and one forty minutes out along a township road need genuinely different designs, so we scope by address rather than by town name.',
    },
    {
        'question': 'Is satellite internet the right answer for a Huntsville property?',
        'answer': 'Sometimes as the primary connection, often as the backup, and occasionally not at all. It depends on what wired or fixed wireless service reaches the address, and on tree cover and sky view at the specific mounting position, which matters more here than people expect given the terrain. We check before recommending, and we would rather tell you a wired option exists that you did not know about than sell an installation you did not need. Where satellite is right, our Starlink installation page covers siting, mounting, power and what it does and does not solve.',
    },
    {
        'question': 'Can you have work done outside the busy season?',
        'answer': 'It is usually the better plan. Huntsville\'s economy peaks with the tourist and seasonal population, and the weeks when owners most want work done are exactly the weeks every local trade is at capacity. Scheduling installation and upgrade work into the shoulder seasons gets it done properly rather than quickly, and having monitoring in place beforehand means problems surface early rather than at the start of a long weekend.',
    },
    {
        'question': 'We rent the property out. How do you keep guests separate from our own systems?',
        'answer': 'With a genuinely separate guest network rather than a shared password, so guest traffic cannot reach cameras, controls, thermostats, storage or anything on the owner\'s accounts. Access to the building itself is handled with keypad codes or smart locks that can be issued and revoked remotely, per stay. Cameras cover approaches, outbuildings and the mechanical room, record locally so an outage does not erase the footage, and are never placed in interior living space.',
    },
    {
        'question': 'Can you manage our Huntsville property and our business in the city together?',
        'answer': 'Yes, and it is the arrangement that works best. Our office is at 7810 Keele St in Vaughan, so for GTA-based owners the property becomes one more managed site under the same agreement rather than a separate personal arrangement with its own supplier and no documentation. One agreement, one set of records, one number to call, and a team that already knows how the accounts are configured.',
    },
]

# --------------------------------------------------------------------------
# PORT CARLING  (2 -> 8 sections, 10 -> 15 FAQs)
# --------------------------------------------------------------------------
PORT_CARLING_SECTIONS = [
    {
        'heading': 'A Village of Hundreds Serving Owners in the Thousands',
        'paragraphs': [
            'Port Carling is an unincorporated community and has been the municipal seat of the Township of Muskoka Lakes since 1971, when the old village was amalgamated with Cardwell and Watt townships, parts of Medora, Wood and Monck, the Town of Bala and the Village of Windermere. It has several hundred year-round residents and acts as the service centre for thousands of seasonal ones. That imbalance is the defining fact of working here.',
            'It means the local supply of trades and technical help is sized for the permanent population and demanded by the seasonal one, and the demand arrives in a concentrated burst between May and September. Anything that can be prevented, monitored or resolved remotely is worth disproportionately more in Port Carling than it would be in a city, because the alternative is joining a queue at exactly the moment everyone else has joined it too.',
        ],
    },
    {
        'heading': 'The Locks, the Indian River and Access by Water',
        'paragraphs': [
            'Port Carling sits on the Indian River, and the locks joining Lake Muskoka to Lake Rosseau are the reason the place exists in its present form. They were completed in 1871, championed by John Carling, then Ontario\'s Minister of Public Works, widened in 1903 to take steamship traffic and supplemented with smaller pleasure-boat locks in 1922. Nearly all boat traffic in the township passes through, which is where the nickname Hub of the Lakes comes from.',
            'For technology work this matters in a very concrete way: a meaningful number of properties here are reached by water rather than by road, and some are on islands. That changes everything about how a system should be designed. Equipment has to be remotely manageable as a matter of course rather than as a nicety, recording has to be local so an internet fault does not lose the footage, and the number of faults that require a person physically present has to be engineered down, because a site visit here can depend on the weather.',
        ],
    },
    {
        'heading': 'Boat Works, Fires and a Long Habit of Building Things Properly',
        'paragraphs': [
            'The Port Carling Boat Works traces its origins to an enterprise started in 1868 by William J. Johnston, and the business became known for the disappearing propeller boat developed by his relatives. In 1931 a series of fires ravaged the boat works and much of the downtown, which is a useful reminder in a place where the nearest fire response is a volunteer department and the buildings are largely wood.',
            'That history is not decoration. It is the reason we are careful about where equipment lives on a property here: ventilated, off the floor, on clean power, away from anything that will be stacked against it in the autumn, and with a small uninterruptible supply so a blip does not leave a building offline for a season. Cheap installation choices in a wooden building two hours from a technician are not economies.',
        ],
    },
    {
        'heading': 'The Big Three Lakes and What They Demand of a Network',
        'paragraphs': [
            'Port Carling sits between Lake Muskoka and Lake Rosseau, with Lake Joseph immediately beyond, and these are the three lakes that carry the largest concentration of substantial seasonal estates in the district. A great many of these properties are not a single building. They are a main cottage, a boathouse with accommodation above it, one or more bunkies, sometimes a workshop or a staff building, spread across a shoreline lot with rock and mature trees between them.',
            'A single router was never going to serve that, and each range extender added afterwards creates another weak point that everything then routes through. What works is a designed system: mesh or point-to-point links engineered for the actual distances and obstructions, cable run between buildings wherever a trench is already open, guest traffic separated from cameras and controls, and coverage verified inside the buildings rather than promised from a plan. Owners of properties on all three lakes are served from the same regional picture on our [Muskoka cottage IT support](/it-support/muskoka/) page.',
        ],
    },
    {
        'heading': 'What Actually Fails Between October and May',
        'paragraphs': [
            'The costly failures on Muskoka Lakes properties are not dramatic. Heat that stops on a cold night, a pipe that freezes and bursts on the thaw, a sump pump that gives up during a January melt, a modem that hangs and stays hung. All are cheap to detect and expensive to discover on the first visit of the spring, which for a water-access property may be considerably later than the owner would like.',
            'The off-season build is intentionally plain: temperature sensors placed where cold actually arrives first, leak detection with a shut-off where the plumbing justifies it, power monitoring so an outage announces itself, a small uninterruptible supply under the network equipment, and remote power control so a stuck router is a click rather than a boat trip. The part that matters most is the routine confirming the sensors still report, the batteries are good, and the alert reaches a phone somebody carries.',
        ],
    },
    {
        'heading': 'One Team for the Cottage and the City',
        'paragraphs': [
            'Very few Muskoka Lakes properties are owned from Muskoka Lakes. They are owned from Toronto, Vaughan, Markham and Mississauga by people who are two hours away for most of the year and who usually already have an IT arrangement for a business or a home in the city. Leaving the cottage outside that arrangement is how it ends up undocumented, spread across four personal accounts, and nobody\'s responsibility.',
            'Our office is at 7810 Keele St in Vaughan, on the same side of the drive as most owners here. The cottage can therefore be run as one more managed site alongside [IT support in Vaughan](/it-support/vaughan/) or [IT support in Toronto](/it-support/toronto/) — one agreement, one set of documentation, one number to call, and a team that already knows how your accounts are configured before anything goes wrong.',
        ],
    },
]

PORT_CARLING_FAQS = [
    {
        'question': 'Do you work on island and water-access properties?',
        'answer': 'Yes, and they are designed differently from the start rather than treated as a road property with an inconvenient driveway. Everything that can be managed remotely is: equipment with remote power control so a stuck router is a click, local recording so an internet fault does not lose footage, and a failover path so one problem does not remove the property from view entirely. Visits are scheduled around access and weather, and the environment is deliberately built so that the number of faults genuinely requiring a person on site stays small.',
    },
    {
        'question': 'Why does everything take longer here in July and August?',
        'answer': 'Because Port Carling has several hundred year-round residents and serves thousands of seasonal ones, so the local supply of trades and technical help is sized for the permanent population and demanded by the seasonal one, all within a few months. That is not a complaint about local suppliers, it is arithmetic. The practical response is to do installation and upgrade work in the shoulder seasons and to have monitoring in place beforehand, so problems surface early instead of on the Friday of a long weekend.',
    },
    {
        'question': 'Where should the network equipment actually live on a cottage property?',
        'answer': 'Somewhere ventilated, off the floor, on clean power, not in the space that gets stacked with furniture in the autumn, and with a small uninterruptible supply under it. This sounds fussy and it is the single most common thing done badly on properties we inherit — equipment in an unventilated cupboard, on a floor that floods, sharing a circuit with a pump. In a wooden building two hours from a technician, the cheap choice here is not an economy.',
    },
    {
        'question': 'Can guests use the internet without reaching our cameras and controls?',
        'answer': 'Yes, and they should never have been on the same network in the first place. Guest traffic goes on a genuinely separate network, so it cannot reach cameras, controls, thermostats, storage or anything on the owner\'s accounts, while still being generous enough that guests are not trying to work around it. Building access is handled with keypad codes or smart locks that can be issued and revoked remotely per stay, rather than a key left somewhere and a phone call.',
    },
    {
        'question': 'Can you manage the cottage and our business in the city under one agreement?',
        'answer': 'Yes, and for most owners here that is the sensible arrangement. Our office is at 7810 Keele St in Vaughan, the same side of the drive as most Muskoka Lakes owners, so the cottage becomes one more managed site rather than a separate personal arrangement with its own supplier, its own accounts and no documentation. One agreement, one set of records, one number to call.',
    },
]


if __name__ == '__main__':
    apply('muskoka', sections=MUSKOKA_SECTIONS, faqs=MUSKOKA_FAQS)
    apply('bracebridge', sections=BRACEBRIDGE_SECTIONS, faqs=BRACEBRIDGE_FAQS)
    apply('huntsville', sections=HUNTSVILLE_SECTIONS, faqs=HUNTSVILLE_FAQS)
    apply('port-carling', sections=PORT_CARLING_SECTIONS, faqs=PORT_CARLING_FAQS)
