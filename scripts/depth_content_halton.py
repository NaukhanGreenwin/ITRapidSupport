#!/usr/bin/env python3
"""Depth pass content: Oakville and Burlington.

Local facts verified 2026-08-15 (2021 census counts, municipal boundaries,
highway and GO alignments, named employers and institutions). No response-time
guarantee, no published pricing, no invented certifications, canonical NAP only.
"""
import sys
sys.path.insert(0, 'scripts')
from depth_insert import apply

# --------------------------------------------------------------------------
# OAKVILLE  (0 -> 13 sections, 3 -> 16 FAQs)
# --------------------------------------------------------------------------
OAKVILLE_SECTIONS = [
    {
        'heading': '24/7 IT Helpdesk for Oakville Businesses',
        'paragraphs': [
            'When an Oakville employee is locked out at 7 am or a monitoring alert fires on a Sunday, waiting until Monday is not a plan. Our helpdesk answers around the clock, every ticket reaches a technician who can remote in immediately, and work that needs hands on hardware is dispatched from our Vaughan office. Alongside the helpdesk we run continuous monitoring, patching, Microsoft 365 administration and backup verification, so most faults are found and closed before anyone in your office notices them.',
            'The measure of a helpdesk is not how fast it answers a password reset. It is what happens on the awkward tickets: the intermittent fault nobody can reproduce, the application that only breaks for one department, the problem that turns out to be the internet circuit rather than the software. Those are the tickets that get abandoned, and the ones we track to a written cause rather than closing on a reboot.',
        ],
    },
    {
        'heading': 'Why Oakville Businesses Look for a Local IT Partner',
        'paragraphs': [
            'Oakville had 213,759 residents at the 2021 census, up 10.3 per cent from 193,832 in 2016, on a land area of 138.94 square kilometres. It is a town in Halton Region rather than a city, it was established in 1827, and it has one of the highest ratios of private schools to student population in the country. That combination of affluence, professional services and long-established institutions produces a business base with a particular characteristic: high expectations and quiet systems that nobody has looked at in years.',
            'The typical Oakville engagement does not start with an outage. It starts with a director asking a question nobody can answer — who has access to the shared drive, when the backup was last tested, whether the insurance renewal question about multi-factor authentication was answered truthfully. The work that follows is less about replacing equipment than about making the environment legible: documented, monitored, and owned by the business rather than by whoever set it up.',
        ],
    },
    {
        'heading': 'Oakville Neighbourhoods and Business Districts We Cover',
        'paragraphs': [
            'The Queen Elizabeth Way and Highway 403 run concurrently through most of Oakville, with the 407 ETR crossing the north end, and that splits the town into recognisable working areas. Old Oakville is the downtown along the lake, bounded by Sixteen Mile Creek and Oakville Harbour to the west and Cornwall Road to the north. Kerr Village sits just west of it around Kerr Street between Speers Road and Lakeshore Road, and the Speers and Wyecroft corridor behind it carries much of the town\'s light industrial and trade activity. Bronte is centred on Bronte Harbour in the southwest, and Eastlake runs along the lake in the southeast towards the Mississauga line.',
            'North of the QEW, College Park sits between Sixteen Mile Creek and Trafalgar Road and surrounds Sheridan College, with Iroquois Ridge North and South between Upper Middle Road and Dundas Street, Glen Abbey to the west around Third Line and Dorval Drive, River Oaks in the north-central area and Palermo at Dundas Street and Bronte Road in the northwest. Winston Churchill Boulevard is the boundary with Mississauga and Peel Region, and Burloak Drive is the boundary with Burlington. We work on both sides of both lines.',
        ],
    },
    {
        'heading': 'Managed IT Services in Oakville: What Is Actually Included',
        'paragraphs': [
            'A managed agreement with us covers the recurring work that keeps an environment healthy rather than the emergencies that follow when it is not: a 24/7 helpdesk your staff contact directly, monitoring of servers, workstations and network devices, patch management on a stated cadence, Microsoft 365 administration, backup monitoring with tested restores, and layered security including managed firewalls, endpoint protection, multi-factor authentication and managed detection and response.',
            'The part worth reading in any provider\'s agreement, including ours, is the exclusion list. Projects, hardware, third-party licensing and after-hours on-site attendance are commonly billed separately, and that is reasonable — what is not reasonable is finding out at the invoice. Ask any provider to mark, on a single page, what is in the monthly fee and what is not. If that page is difficult to produce, the difficulty is the answer.',
        ],
    },
    {
        'heading': 'Cybersecurity Services for Oakville Businesses',
        'paragraphs': [
            'Security here is built in layers rather than bought as a product: managed firewalls and segmented networks, endpoint detection and response on every device, email filtering and impersonation protection, multi-factor authentication enforced rather than offered, privileged accounts separated from daily-use accounts, and monitored logging so an incident has a timeline. None of it is exotic. What distinguishes an environment that survives an incident from one that does not is usually whether the basics were applied consistently or only in the places somebody remembered.',
            'For an Oakville professional services firm the realistic threat is not a targeted intrusion. It is a convincing invoice-redirection email, a credential phished from a personal device, or a supplier account that was compromised first. Those are addressed by configuration and training rather than by hardware, which is why our [managed security service](/services/managed-security/) leads with identity, email and monitoring instead of a box in a rack.',
        ],
    },
    {
        'heading': 'Data Backup and Disaster Recovery in Oakville',
        'paragraphs': [
            'A backup nobody has restored from is a belief, not a control. We run local and cloud copies, monitor every job, and test restores on a schedule so that recovery time is a measured number rather than an assumption. Retention is set against your actual obligations rather than a default, and the copies are held so that ransomware reaching the live environment does not reach the backup with it.',
            'Two business decisions determine the design and most of the cost: how much data you can afford to lose, and how long you can afford to be down. Those are not technical questions and we will not answer them for you, but nothing sensible can be designed until they are written down. Our [business continuity and disaster recovery service](/services/business-continuity-disaster-recovery/) covers the whole approach.',
        ],
    },
    {
        'heading': 'Microsoft 365, Azure and Cloud Services for Oakville Companies',
        'paragraphs': [
            'Most Oakville businesses are already in Microsoft 365 and using perhaps a third of what they pay for. Licensing is bought, the security features inside it are switched off, sharing is at its default setting, and nobody reads the audit log. Getting value from the subscription you already hold is almost always cheaper than buying anything new, and it is the first place we look.',
            'The work from there is a proper tenant baseline: conditional access policies, retention that matches your obligations, external sharing that is deliberate rather than inherited, device compliance, and administrator accounts separated from everyday ones. Where a server is still doing real work we say so — not every workload belongs in the cloud, and a migration recommended without an assessment is a sales pitch. Our [Microsoft 365 and Azure migration](/services/microsoft-365-azure-migration/) page sets out how we scope it.',
        ],
    },
    {
        'heading': 'Network Support and Management for Oakville Offices',
        'paragraphs': [
            'The network is the layer people notice only when it fails, and the one where small compromises accumulate quietly: a switch added during an expansion, an access point positioned for convenience, a firewall rule opened for a project that ended two years ago. We document what exists, replace the parts that are past support rather than the parts that are merely old, segment guest and staff traffic properly, and monitor the links so degradation is visible before it becomes an outage.',
            'Wireless deserves its own mention in Oakville, because a great deal of the office stock here is converted or heritage building along Lakeshore and in the downtown core, where masonry and awkward floor plans defeat the coverage a single router was ever going to provide. Coverage is surveyed in the building as it is used rather than as it is drawn. Our [network management service](/services/network-management/) describes the ongoing work.',
        ],
    },
    {
        'heading': 'IT Consulting, vCIO and Budget Planning for Oakville Businesses',
        'paragraphs': [
            'Most companies in Oakville are not large enough to justify a full-time IT director and are too dependent on technology to have nobody accountable for the three-year picture. The gap shows up as a series of urgent purchases, each negotiated under pressure, none of them part of a plan. Our [vCIO and IT strategy service](/services/vcio-it-strategy/) replaces that with a schedule.',
            'What it produces is concrete: a documented asset and lifecycle register showing what is out of warranty and out of support, a security roadmap with the sequence written down, a budget a finance team can read without translation, and a regular review where the plan is adjusted against what actually happened. For firms facing client due-diligence questionnaires or insurance renewals, it also becomes the place the evidence lives.',
        ],
    },
    {
        'heading': 'IT for Aerospace, Manufacturing and Life Sciences in Oakville',
        'paragraphs': [
            'Oakville\'s employment base is more industrial than its reputation suggests. Ford Motor Company of Canada has its Canadian head office here, Siemens bases its Canadian head office in the town, Collins Aerospace runs a substantial aerospace parts operation, and Algonquin Power and Utilities, Sagen MI Canada, Canadian Tire Financial Services, Pelmorex and Rockstar Toronto are all headquartered in Oakville. A cluster of life-science companies with an emphasis on pharmaceuticals and elder care sits alongside them, together with a significant number of retirement residences.',
            'Suppliers into aerospace, automotive and pharmaceutical customers get asked enterprise security questions regardless of their own size, and they get asked in writing. We build the controls and, equally importantly, the evidence: policies that describe what the systems actually do, patch and backup reports, restore tests with dates recorded, access reviews that took place, and documented incident response. A twenty-person supplier can answer those questionnaires honestly; it just needs the work to have been done first.',
        ],
    },
    {
        'heading': 'Switching IT Providers in Oakville: The Four Stages',
        'paragraphs': [
            'Discovery comes before anything is signed: what hardware, licences, domains, backups and accounts exist, and who currently holds the keys to each. Documentation follows, where all of it is written down and the gaps are named out loud rather than found later. Transition puts monitoring, patching, backup and security tooling in place alongside the outgoing arrangement rather than after it, so there is never a window with nobody watching.',
            'Handover is the stage businesses skip and regret. Administrative credentials, domain registrations, Microsoft tenant ownership and licence agreements are confirmed to be in your name and under your control, in writing. Ownership of your own domain, tenant and backups is not a favour granted by a provider, and any provider reluctant to confirm it has told you something worth knowing.',
        ],
    },
    {
        'heading': 'On-Site IT Support Across Oakville and Halton Region',
        'paragraphs': [
            'Most faults are resolved remotely, and that is genuinely the faster path rather than a way of avoiding the drive. When hands are needed — a failed switch, a cabling problem, a new office fit-out, a hardware refresh — technicians are dispatched from our Vaughan office along the 407 or the QEW. We schedule that work rather than promising a response time we have not measured for your address.',
            'The same team covers the neighbouring municipalities, so a business with more than one location is managed as one environment: [IT services in Burlington](/it-support/burlington/) across Burloak Drive, [IT support in Milton](/it-support/milton/) to the north, [managed IT services in Mississauga](/it-support/mississauga/) across Winston Churchill Boulevard, and [IT support in Hamilton](/it-support/hamilton/) further southwest.',
        ],
    },
    {
        'heading': 'Industries We Support Across Oakville',
        'paragraphs': [
            'Professional services firms — accountants, lawyers, engineering and design practices — where the file history is the business and confidentiality is contractual. Healthcare and elder-care operators, where availability and privacy obligations sit on the same system. Manufacturers and aerospace suppliers, where the shop floor and the office have genuinely different requirements and only one of them can be treated like an office.',
            'Also construction and trades, where the office is wherever the project is and the real problem is access from a site rather than a desk; financial services and insurance, where regulatory questions arrive on a schedule; and retail and hospitality along Lakeshore and in the harbour districts, where payment systems, guest wireless and staff turnover all touch the same network. The common requirement is not a product; it is that somebody is accountable for the whole environment.',
        ],
    },
]

OAKVILLE_FAQS = [
    {
        'question': 'Do you have an office in Oakville?',
        'answer': 'No, and we would rather say so than imply a local storefront. Our office is at 7810 Keele St in Vaughan, reached from Oakville along the 407 or the QEW. Most work is done remotely because that is genuinely faster, and on-site attendance is dispatched from Vaughan when hands are needed. We do not publish a guaranteed response time, because a number published before anyone has looked at your address and your environment is marketing rather than a commitment.',
    },
    {
        'question': 'Which parts of Oakville do you cover?',
        'answer': 'All of it. Old Oakville and the harbour, Kerr Village and the Speers and Wyecroft corridor, Bronte, Eastlake and Clearview along the lake, College Park around Sheridan College, Iroquois Ridge North and South, Glen Abbey, River Oaks and Palermo in the northwest. Coverage crosses the boundaries as well: businesses with sites in Oakville plus Burlington, Milton, Mississauga or Hamilton are managed as one environment under one agreement rather than as separate accounts.',
    },
    {
        'question': 'What does managed IT actually include for an Oakville business?',
        'answer': 'A 24/7 helpdesk your staff contact directly, monitoring of servers, workstations and network devices, patch management on a stated cadence, Microsoft 365 administration, backup monitoring with tested restores, and layered security including managed firewalls, endpoint protection, multi-factor authentication and managed detection and response. Projects, hardware and third-party licensing are normally billed separately, which is standard, and the right time to see that list is before signing rather than at the first invoice.',
    },
    {
        'question': 'What actually drives the cost of IT support in Oakville?',
        'answer': 'The number of users and managed devices first, then the number of sites, then the shape of the environment: whether servers are still doing real work or everything is in Microsoft 365, how much of the security stack is included, and what recovery time you need. We do not publish a figure, because a price quoted before anyone has looked at your environment is a guess you would end up paying for. What is reasonable to demand from any provider is a written scope stating what is included, what is billed separately, and what happens at renewal.',
    },
    {
        'question': 'Can you support hybrid teams working between Oakville and Toronto?',
        'answer': 'Yes, and the design question is identity rather than location. If access is controlled properly at the account level, with multi-factor authentication, conditional access and device compliance, then where somebody is sitting stops mattering. The failure pattern we see is the opposite: an office-shaped network with a VPN bolted on, where remote work is slow and staff quietly route around it. Getting that right usually improves security and daily experience at the same time.',
    },
    {
        'question': 'Do you work with businesses that already have an internal IT person?',
        'answer': 'Yes, and it is a substantial part of our work. Co-managed IT leaves your internal person with the relationships and application knowledge that only comes from being there, and adds the layers that are unreasonable to expect from one individual: 24/7 coverage, monitoring, patching, security tooling and escalation to specialists. It also removes the single point of failure, so vacation, illness and resignation stop being business continuity events. Our [co-managed IT service](/services/co-managed-it-services/) sets out how the split is agreed.',
    },
    {
        'question': 'Can you help us answer a client security questionnaire or an insurance renewal?',
        'answer': 'Yes, and it is a common request from Oakville professional services and manufacturing suppliers. We map each question to what your environment actually does, implement what is genuinely missing rather than claiming it, and assemble the evidence: policies that match reality, patch and backup reports, tested restore records with dates, access reviews and documented incident response. We will not confirm a control you do not have, which is the point of asking someone technical rather than answering optimistically.',
    },
    {
        'question': 'How do you handle privacy obligations under PIPEDA and PHIPA?',
        'answer': 'By implementing and operating the controls that support the obligation, and being precise about what that does and does not mean. Access control, encryption, logging with retention, tested restores, documented incident response and reviewed third-party access are the technical layer, and we document them so you can show your work. The obligation itself stays with your organisation. This matters in Oakville because of the number of healthcare and elder-care operators here; any provider claiming to deliver compliance is overselling what a technology vendor can do.',
    },
    {
        'question': 'We are moving offices in Oakville. When should IT get involved?',
        'answer': 'Before the lease is signed if possible, and certainly before the fit-out is designed. Connectivity and cabling are the two things that are expensive to fix afterwards. What service actually reaches a given address varies more than people expect, and business circuit lead times can run to months. Cabling, comms room location, power and cooling are inexpensive while the walls are open and disruptive once they are closed, which matters particularly in the older and converted buildings around Lakeshore and the downtown core.',
    },
    {
        'question': 'Do you support Apple hardware as well as Windows?',
        'answer': 'Yes. A large share of Oakville design, marketing and professional practices run mixed fleets, and treating the Macs as an exception to be handled informally is how they end up unmanaged and unpatched. Both platforms get the same treatment: enrolment, device compliance, patching, endpoint protection and encryption, managed from one place so the reporting covers the whole estate rather than most of it.',
    },
    {
        'question': 'What happens in the first thirty days of working with you?',
        'answer': 'Discovery and documentation, in that order, before anything is changed. We record what hardware, licences, domains, backups and accounts exist and who holds the keys to each, then write it down and name the gaps out loud. Monitoring, patching, backup verification and security tooling go in alongside whatever is currently in place rather than after it, so there is no window with nobody watching. Anything that needs replacing is presented with the reason and the risk, not as an assumed purchase.',
    },
    {
        'question': 'What does 24/7 support mean in practice when your office is in Vaughan?',
        'answer': 'It means a technician answers at any hour and can remote into your systems immediately rather than logging a callback for the morning, and that monitoring alerts reach a person rather than an inbox. It does not mean a van outside your Oakville building at 2 am, and we will not claim otherwise. On-site attendance is scheduled, and the environment is built so that the number of faults genuinely requiring hands on hardware stays small.',
    },
    {
        'question': 'Do you provide IT support for retirement residences and healthcare operators in Oakville?',
        'answer': 'Yes. These environments have an unusual combination: availability that genuinely matters at night, privacy obligations that constrain how data is handled, clinical or care software with its own vendor requirements, and a staff base with high turnover and shared devices. The work that pays off is boring — identity and access properly managed, shared-device sign-in that people will actually use, monitored backups with tested restores, and a documented escalation path that a night-shift supervisor can follow without calling a manager.',
    },
]

# --------------------------------------------------------------------------
# BURLINGTON  (2 -> 13 sections, 3 -> 16 FAQs)
# --------------------------------------------------------------------------
BURLINGTON_SECTIONS = [
    {
        'heading': '24/7 IT Helpdesk for Burlington Businesses',
        'paragraphs': [
            'Our helpdesk answers around the clock. Every ticket reaches a technician who can remote in immediately, and work that needs hands on hardware is dispatched from our Vaughan office. Around the helpdesk runs the maintenance layer that keeps ticket volume down in the first place: monitoring of servers, workstations and network devices, patching on a stated cadence, Microsoft 365 administration and backup verification.',
            'The honest measure of a helpdesk is what happens to the awkward tickets. Password resets are easy. The intermittent fault nobody can reproduce, the application that breaks only for one department, the problem that turns out to be the internet circuit rather than the software — those are the ones that get quietly abandoned elsewhere, and the ones we track to a written cause rather than closing on a reboot.',
        ],
    },
    {
        'heading': 'Why Burlington Businesses Look for a Local IT Partner',
        'paragraphs': [
            'Burlington had 186,948 residents at the 2021 census, up 2.0 per cent from 183,314 in 2016 — the slowest growth of the three Halton municipalities by a wide margin, against Oakville at 10.3 per cent and Milton\'s well-documented expansion. The reason is geography rather than demand: the main urban area sits south of the Parkway Belt and Highway 407, and the land north of that and north of Aldershot is agricultural, rural residential and conservation, with the Niagara Escarpment behind it. Burlington is close to built out.',
            'That produces a different kind of business than a growth suburb does. Burlington companies tend to be established, to have been in the same building for a long time, and to expand by intensifying rather than relocating. The IT consequence is layered infrastructure: a network that has been added to over fifteen years, a server that was virtualised once and never revisited, cabling from three separate decades. The work is rarely a greenfield build. It is untangling something that grew, which requires documenting it before touching it.',
        ],
    },
    {
        'heading': 'Burlington Employment Areas and Business Districts We Cover',
        'paragraphs': [
            'The Queen Elizabeth Way and Highway 403 run concurrently through most of Burlington, with the 407 ETR across the north and Highway 6 forming the boundary with Hamilton. The employment land follows those corridors: the Harvester Road and North Service Road band running parallel to the QEW is the city\'s main industrial and commercial spine, with the Mainway and Upper Middle Road corridor above it, and the Appleby Line, Walkers Line and Guelph Line arterials running north to south through both.',
            'Downtown Burlington around Brant Street and the waterfront carries the professional services and hospitality base, Aldershot sits at the western end towards Hamilton along Plains Road, and Burloak Drive is the boundary with Oakville. We cover all of it, and across the boundaries too: [IT support in Oakville](/it-support/oakville/) to the east, [IT support in Milton](/it-support/milton/) north across Derry Road, and [IT support in Hamilton](/it-support/hamilton/) to the southwest. Multi-site businesses are managed as one environment under one agreement.',
        ],
    },
    {
        'heading': 'Managed IT Services in Burlington: What Is Actually Included',
        'paragraphs': [
            'A managed agreement covers the recurring work that keeps an environment healthy: a 24/7 helpdesk your staff contact directly, monitoring of servers, workstations and network devices, patch management, Microsoft 365 administration, backup monitoring with tested restores, and layered security including managed firewalls, endpoint protection, multi-factor authentication and managed detection and response.',
            'The part worth reading in any provider\'s agreement, ours included, is what sits outside the monthly fee. Projects, hardware, third-party licensing and after-hours on-site attendance are commonly billed separately, which is reasonable; discovering it at the invoice is not. Ask any provider to put on one page what is included and what is not. If that page is hard to produce, that difficulty is your answer.',
        ],
    },
    {
        'heading': 'Cybersecurity Services for Burlington Businesses',
        'paragraphs': [
            'Security is built in layers rather than purchased as a product: managed firewalls with segmented networks, endpoint detection and response on every device, email filtering and impersonation protection, multi-factor authentication enforced rather than offered, privileged accounts kept separate from daily-use accounts, and monitored logging so that an incident has a timeline instead of a guess. None of this is exotic; what separates an environment that survives an incident from one that does not is whether the basics were applied everywhere or only where somebody remembered.',
            'For most Burlington businesses the realistic threat is not a targeted intrusion but a convincing invoice-redirection email, a credential phished from a personal device, or a supplier account compromised before yours. Those are addressed through identity, email configuration and monitoring rather than through hardware, which is how our [managed security service](/services/managed-security/) is ordered.',
        ],
    },
    {
        'heading': 'Data Backup and Disaster Recovery in Burlington',
        'paragraphs': [
            'A backup nobody has restored from is a belief rather than a control. We run local and cloud copies, monitor every job, and test restores on a schedule so the recovery time is measured rather than assumed. Retention is set against your real obligations, and copies are held so that ransomware reaching the live environment does not reach the backup with it.',
            'Two business decisions set the design and most of the cost: how much data you can afford to lose, and how long you can afford to be down. They are not technical questions, and nothing sensible can be designed until they are written down. Our [business continuity and disaster recovery service](/services/business-continuity-disaster-recovery/) covers the full approach, including what a tested restore record should actually contain.',
        ],
    },
    {
        'heading': 'Microsoft 365, Azure and Cloud Services for Burlington Companies',
        'paragraphs': [
            'Most Burlington businesses are already in Microsoft 365 and using a fraction of what they pay for. The licensing is bought, the security features inside it are off, sharing is at its default, and nobody reads the audit log. Extracting value from a subscription you already hold is almost always cheaper than buying something new, so it is where we start rather than where we finish.',
            'From there the work is a tenant baseline done properly: conditional access, retention matched to your obligations, external sharing made deliberate, device compliance, and administrator accounts separated from everyday ones. Where a physical server is still doing real work we say so — not every workload belongs in the cloud, and a migration recommended without an assessment is a sales pitch. Our [Microsoft 365 and Azure migration](/services/microsoft-365-azure-migration/) page describes how we scope it.',
        ],
    },
    {
        'heading': 'Network Support and Management for Burlington Offices',
        'paragraphs': [
            'In a city where businesses stay in their buildings, the network is usually the most layered part of the environment. A switch added during one expansion, an access point positioned for convenience during another, a firewall rule opened for a project that finished years ago, cabling from three different eras behind the same wall plate. We document what exists first, replace what is genuinely past support rather than merely old, separate guest from staff traffic properly, and monitor the links so degradation shows up before it becomes an outage.',
            'Wireless in the Harvester Road and North Service Road industrial stock behaves nothing like wireless in a downtown Brant Street office, and neither behaves like the coverage map a vendor produces from a floor plan. We survey buildings as they are used and loaded. Our [network management service](/services/network-management/) covers the ongoing side of that work.',
        ],
    },
    {
        'heading': 'IT Consulting, vCIO and Budget Planning for Burlington Businesses',
        'paragraphs': [
            'An established business with aging infrastructure has a specific budgeting problem: everything is working, nothing is urgent, and the replacement bill is accumulating quietly behind the scenes until several things fall due at once. That is the standard Burlington pattern, and it is what a lifecycle plan exists to prevent. Our [vCIO and IT strategy service](/services/vcio-it-strategy/) puts it on a schedule.',
            'The output is practical: an asset and lifecycle register showing what is out of warranty and out of vendor support, a security roadmap with the order written down, a budget a finance team can read without translation, and a review cadence where the plan is corrected against what actually happened. For businesses facing customer due-diligence questionnaires or insurance renewals, it also becomes the place the evidence lives, so answers are not reassembled from memory each time.',
        ],
    },
    {
        'heading': 'IT for Manufacturing, Food Processing and Distribution in Burlington',
        'paragraphs': [
            'Burlington\'s economic strength is that no single employer or sector dominates it. The leading industrial sectors by employment are food processing, packaging, electronics, motor vehicle and transportation, business services, chemical and pharmaceutical, and environmental. The largest private employers include Fearmans Pork, Cogeco, Evertz Microsystems, Boehringer Ingelheim and EMC2, while the City of Burlington, the two Halton school boards and Joseph Brant Hospital anchor the public side. The Port of Hamilton on Burlington Bay sits immediately to the west.',
            'Production environments are not offices with machines in them. Food processing brings washdown areas, temperature monitoring and traceability records that must survive an audit. Packaging and electronics bring line equipment running software nobody is allowed to patch casually. The approach that works is segmentation and honesty: keep production networks separate from office networks, know precisely which machines cannot be touched and why, and put compensating controls around them rather than pretending the risk is not there.',
        ],
    },
    {
        'heading': 'Switching IT Providers in Burlington: The Four Stages',
        'paragraphs': [
            'Discovery comes before anything is signed: what hardware, licences, domains, backups and accounts exist, and who holds the keys to each. Documentation follows, where all of it is recorded and the gaps are named out loud rather than discovered later. Transition puts monitoring, patching, backup and security tooling in place alongside the outgoing arrangement rather than after it, so there is never a period with nobody watching.',
            'Handover is the stage that gets skipped. Administrative credentials, domain registrations, Microsoft tenant ownership and licence agreements are confirmed in writing to be in your name and under your control. Ownership of your own domain, tenant and backups is not a courtesy extended by a provider, and reluctance to confirm it in writing tells you what you need to know about the relationship.',
        ],
    },
    {
        'heading': 'On-Site IT Support Across Burlington and Halton Region',
        'paragraphs': [
            'Most faults are resolved remotely, which is genuinely faster rather than a way of avoiding the drive. When hands are needed — a failed switch, a cabling fault, an office fit-out, a hardware refresh — technicians are dispatched from our Vaughan office along the 407 or the QEW. That work is scheduled rather than promised against a response time we have not measured for your address.',
            'Burlington has three GO stations on the Lakeshore West line — Appleby, Burlington and Aldershot — with Via Rail service at Aldershot, and it sits roughly in the geographic centre of the Golden Horseshoe. For a business with staff distributed across Halton, Hamilton and the western GTA, that access is an advantage worth designing around rather than working against: remote-first support, identity that works from anywhere, and on-site visits planned rather than reactive.',
        ],
    },
    {
        'heading': 'Industries We Support Across Burlington',
        'paragraphs': [
            'Manufacturers, food processors and packaging operations, where the production floor and the office genuinely differ and only one of them can be managed like an office. Professional services and financial firms downtown and along Fairview, where the file history is the business and client due diligence arrives on a schedule. Healthcare and care operators, where availability and privacy obligations sit on the same systems.',
            'Also construction and trades, where the office is wherever the project is; distribution and logistics along the Harvester and North Service corridor; and retail and hospitality downtown and at Mapleview and Burlington Centre, where payment systems, guest wireless and staff turnover all land on the same network. What these have in common is not a product requirement but an accountability one: somebody has to own the whole environment rather than the parts that are convenient.',
        ],
    },
]

BURLINGTON_FAQS = [
    {
        'question': 'Do you have an office in Burlington?',
        'answer': 'No, and we would rather state it than imply a local storefront. Our office is at 7810 Keele St in Vaughan, reached along the 407 or the QEW. Most work is done remotely because that is genuinely the faster path, with on-site attendance dispatched from Vaughan when hands are needed. We do not publish a guaranteed response time, because a number published before anyone has looked at your address and environment is marketing rather than a commitment.',
    },
    {
        'question': 'Which parts of Burlington do you cover?',
        'answer': 'All of it. The Harvester Road and North Service Road industrial corridor along the QEW, the Mainway and Upper Middle Road band above it, downtown Burlington around Brant Street and the waterfront, Aldershot and Plains Road at the western end, and the Appleby, Walkers and Guelph Line corridors running north to south. Businesses with sites in Burlington plus Oakville, Milton or Hamilton are managed as one environment under one agreement rather than as separate accounts.',
    },
    {
        'question': 'What does managed IT actually include for a Burlington business?',
        'answer': 'A 24/7 helpdesk your staff contact directly, monitoring of servers, workstations and network devices, patch management on a stated cadence, Microsoft 365 administration, backup monitoring with tested restores, and layered security including managed firewalls, endpoint protection, multi-factor authentication and managed detection and response. Projects, hardware and third-party licensing are normally billed separately, which is standard practice; the time to see that list is before signing rather than at the first invoice.',
    },
    {
        'question': 'What actually drives the cost of IT support in Burlington?',
        'answer': 'Users and managed devices first, then the number of sites, then the shape of the environment: whether servers are still doing real work, whether there is a production floor to cover, how much of the security stack is included, and what recovery time you need. We do not publish a figure, because a price quoted before anyone has looked at your environment is a guess you would end up paying for. What is reasonable to demand from any provider is a written scope saying what is included, what is billed separately, and what happens at renewal.',
    },
    {
        'question': 'Our infrastructure has been added to for fifteen years. Where do you start?',
        'answer': 'With documentation, not replacement. The first job is an accurate record of what exists: every server and its purpose, every switch and access point, the firewall rules and why each one is there, the cabling, the licences, the domains, and who holds the administrative credentials. Almost every Burlington environment we inherit has at least one thing nobody can explain. Replacing hardware before that map exists is how a working system becomes a broken one, so we finish the map first and then rank the risks.',
    },
    {
        'question': 'Can you support a production or processing environment as well as the office?',
        'answer': 'Yes, and we treat them as different problems. Production networks are segmented away from office networks. Machines running software that cannot be patched casually are identified explicitly, with the reason recorded, and given compensating controls rather than being quietly ignored. Washdown areas, temperature monitoring and traceability records have physical and record-keeping requirements that an office design does not account for. The honest version of this work names what cannot be changed as clearly as what can.',
    },
    {
        'question': 'Do you work with businesses that already have an internal IT person?',
        'answer': 'Yes, and it is a large part of what we do. Co-managed IT keeps your internal person\'s relationships and application knowledge, and adds what is unreasonable to expect from one individual: 24/7 coverage, monitoring, patching, security tooling and escalation. It also removes the single point of failure, so vacation, illness and resignation stop being business continuity events. Our [co-managed IT service](/services/co-managed-it-services/) sets out how responsibilities are divided in writing.',
    },
    {
        'question': 'Can you help us answer a customer security questionnaire or an insurance renewal?',
        'answer': 'Yes. We map each question to what your environment actually does, implement what is genuinely missing rather than claiming it, and assemble evidence: policies that match reality, patch and backup reports, tested restore records with dates, access reviews and documented incident response. We will not confirm a control you do not have. That is the entire value of asking someone technical rather than answering the form optimistically and hoping it is never checked.',
    },
    {
        'question': 'How do you handle privacy obligations under PIPEDA and PHIPA?',
        'answer': 'We implement and operate the controls that support the obligation and are careful about the limits of that claim. Access control, encryption, logging with retention, tested restores, documented incident response and reviewed third-party access are the technical layer, documented so you can show your work. The obligation itself stays with your organisation, and no IT provider can take it on. Any provider saying they deliver compliance is overselling what a technology vendor can do.',
    },
    {
        'question': 'We are moving or expanding within Burlington. When should IT get involved?',
        'answer': 'Before the lease is signed if possible, and certainly before the fit-out is designed. Connectivity and cabling are the two things that are expensive to fix afterwards. What service actually reaches a specific address varies more than people expect, particularly in the older industrial stock along Harvester Road, and business circuit lead times can run to months. Cabling, comms room location, power and cooling are inexpensive while the walls are open and disruptive once they are closed.',
    },
    {
        'question': 'What does 24/7 support mean in practice when your office is in Vaughan?',
        'answer': 'A technician answers at any hour and can remote into your systems immediately rather than logging a callback for the morning, and monitoring alerts reach a person rather than an inbox. It does not mean a van outside your Burlington building at 2 am, and we will not claim otherwise. On-site attendance is scheduled, and the environment is designed so that the number of faults genuinely requiring hands on hardware stays small.',
    },
    {
        'question': 'What happens in the first thirty days of working with you?',
        'answer': 'Discovery and documentation before anything is changed. We record what hardware, licences, domains, backups and accounts exist and who holds the keys, write it down, and name the gaps out loud. Monitoring, patching, backup verification and security tooling go in alongside whatever is currently running rather than after it, so there is no window with nobody watching. Anything needing replacement is presented with the reason and the risk attached, not as an assumed purchase.',
    },
    {
        'question': 'Do you support Apple hardware as well as Windows?',
        'answer': 'Yes. Mixed fleets are common in Burlington design, marketing and professional practices, and treating the Macs as an informal exception is exactly how they end up unmanaged, unpatched and outside the reporting. Both platforms get the same treatment: enrolment, device compliance, patching, endpoint protection and encryption, managed from one place so the reporting covers the whole estate rather than most of it.',
    },
]


if __name__ == '__main__':
    apply('oakville', sections=OAKVILLE_SECTIONS, faqs=OAKVILLE_FAQS)
    apply('burlington', sections=BURLINGTON_SECTIONS, faqs=BURLINGTON_FAQS)
