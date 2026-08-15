#!/usr/bin/env python3
"""Depth pass content: Brampton and Pickering.

Every local fact here was verified against reference sources on 2026-08-15 before
being written (2021 census figures, municipal boundaries, highway and GO
alignments, named employers and institutions). No response-time guarantees, no
published pricing, no invented certifications, canonical NAP only.
"""
import sys
sys.path.insert(0, 'scripts')
from depth_insert import apply

# --------------------------------------------------------------------------
# BRAMPTON  (9 -> 13 sections, 10 -> 16 FAQs)
# --------------------------------------------------------------------------
BRAMPTON_SECTIONS = [
    {
        'heading': 'Why Brampton Businesses Look for a Local IT Partner',
        'paragraphs': [
            'Brampton had 656,480 residents at the 2021 census, up 10.6 per cent from 593,638 five years earlier, on 265 square kilometres bounded by Highway 50 and Vaughan to the east, Winston Churchill Boulevard and Halton Hills to the west, Mayfield Road and Caledon to the north, and Steeles Avenue and Mississauga to the south. The present city was assembled in 1974 out of the old town plus most of Chinguacousy and Toronto Gore townships, which is why Bramalea, Huttonville and Churchville still read as separate places inside one municipality.',
            'That growth rate is the reason most Brampton IT conversations start the way they do. The company is two or three times the size it was when somebody chose the server, the firewall and the backup routine, and nothing has been re-scoped since. Nobody made a bad decision; the decisions were correct for a smaller business and were never revisited. The first thing we do on a new Brampton account is write down what actually exists and where it no longer fits, before recommending a single purchase.',
        ],
    },
    {
        'heading': 'Brampton Employment Areas and Business Parks We Cover',
        'paragraphs': [
            'Highway 410 runs north to south through the middle of the city and meets Highway 401 a short distance south in Mississauga, while Highway 407 runs along the southern edge just north of the Mississauga boundary and Steeles Avenue runs parallel above it. That road pattern put most of Brampton\'s employment land in three bands: the Steeles and Highway 407 corridor in the south, the Airport Road and Bramalea Road spine on the east side, and the newer Bovaird and Mayfield frontages in the north. CN\'s Brampton Intermodal Terminal sits east of Airport Road between Steeles and Queen Street East and anchors a large part of the freight activity around it.',
            'We work across all of it, and across the municipal borders too. The same team covers [managed IT services in Mississauga](/it-support/mississauga/) immediately south, [IT support in Caledon](/it-support/caledon/) to the north, [IT support in Vaughan](/it-support/vaughan/) across Highway 50, and [IT support in Georgetown](/it-support/georgetown/) beyond Winston Churchill Boulevard. If you run more than one site across those boundaries, they are managed as one environment under one agreement rather than as separate accounts with separate reporting.',
        ],
    },
    {
        'heading': 'IT for Warehousing, Distribution and Light Manufacturing in Brampton',
        'paragraphs': [
            'Brampton carries an unusually heavy concentration of distribution and manufacturing operations for a city its size. Amazon runs four production facilities here, Canadian Tire has two distribution facilities, Lululemon and Pet Valu keep their main GTA distribution centres in the city, DSV and Air Canada Global Operations have a presence, and Alstom assembles Citadis Spirit light-rail vehicles at a Brampton plant. Loblaw Companies, MDA Space, Shoppers Drug Mart, Canon, Canadian Blood Services, Gamma-Dynacare Medical Laboratories, Sleep Country Canada, Clorox and Brita all base head offices here.',
            'Warehouse IT fails in ways office IT does not. Wireless that tests fine in an empty aisle stops working when the racking is full and the stock itself absorbs the signal. Handheld scanners drop sessions at the seam between access points and the picker blames the software. A warehouse management system that is merely slow costs a shift rather than a ticket. We survey coverage against the racking as loaded rather than as drawn, separate the scanner and controls traffic from guest and office traffic, and monitor the links that the floor depends on so a degrading access point is a scheduled visit instead of a Monday morning stoppage.',
        ],
    },
    {
        'heading': 'IT Consulting, vCIO and Budget Planning for Brampton Businesses',
        'paragraphs': [
            'Most Brampton companies we meet do not need a full-time IT director, but they do need someone accountable for the three-year picture: what is out of warranty, what is out of support, what the renewal calendar looks like, and what the next capital item actually is. Without that, IT spending arrives as a series of surprises, each one urgent, each one negotiated under pressure. Our [vCIO and IT strategy service](/services/vcio-it-strategy/) puts that on a schedule instead.',
            'In practice it is a documented asset and lifecycle register, a security roadmap with the sequence written down, a budget you can hand to a finance team without translation, and a regular review where the plan is adjusted against what actually happened. For businesses in the middle of vendor security questionnaires or customer audits, it is also the place where the evidence lives, so the answers do not have to be assembled from memory every time a large customer asks.',
        ],
    },
]

BRAMPTON_FAQS = [
    {
        'question': 'Do you have an office in Brampton?',
        'answer': 'No, and we would rather say so than imply a local storefront. Our office is at 7810 Keele St in Vaughan, across Highway 50 and reachable along Highway 407 or Highway 7. Most Brampton work is done remotely because that is genuinely faster, and on-site attendance is dispatched from Vaughan when hands are needed. We do not publish a guaranteed response time, because a number published before anyone has looked at your environment is marketing rather than a commitment.',
    },
    {
        'question': 'Which parts of Brampton do you cover?',
        'answer': 'All of it, from the Steeles and Highway 407 corridor in the south through Bramalea and the Airport Road spine on the east side, the downtown and Queen Street corridor, Heart Lake and the Highway 410 spine, and the newer Bovaird, Mount Pleasant and Mayfield frontages in the north. Coverage does not stop at the city limit either: businesses with sites in Brampton and in Mississauga, Vaughan, Caledon or Halton Hills are managed as one environment under one agreement.',
    },
    {
        'question': 'Can you support a warehouse or distribution site with handheld scanners and racking?',
        'answer': 'Yes, and it is a different survey from an office. Coverage is measured against the racking as it is actually loaded rather than against an empty floor plan, because stock absorbs signal and a network that passed commissioning can fail once the aisles fill. Scanner and controls traffic is separated from office and guest traffic, roaming between access points is tuned so sessions survive a picker walking an aisle, and the links the floor depends on are monitored so a degrading access point becomes a planned visit rather than a stopped shift.',
    },
    {
        'question': 'Do you support Brampton businesses that run shifts or 24-hour operations?',
        'answer': 'Yes. The helpdesk answers 24 hours a day, which matters more here than in a nine-to-five office city, because a distribution site at 3 am has the same dependency on its network as it does at 3 pm. Maintenance windows are scheduled around your actual production pattern rather than around a generic overnight slot, and monitoring alerts go to a technician rather than into a queue that opens in the morning.',
    },
    {
        'question': 'What actually drives the cost of IT support for a Brampton business?',
        'answer': 'The number of users and managed devices first, then the number of sites, then the shape of the environment: whether there are servers or it is all cloud, whether there is a warehouse or production floor to cover, how much of the security stack is included, and what your recovery expectation is. We do not publish a figure, because a price quoted before anyone has looked at your environment is a guess you would end up paying for. What is reasonable to demand from any provider, including us, is a written scope that says what is included, what is billed separately, and what happens at renewal.',
    },
    {
        'question': 'How do you handle privacy obligations for Brampton healthcare, lab and professional services businesses?',
        'answer': 'Brampton has a substantial health and life-sciences presence, including the William Osler Health System campuses at Brampton Civic and Peel Memorial, Gamma-Dynacare Medical Laboratories, Canadian Blood Services and, since September 2025, the Toronto Metropolitan University School of Medicine. We are careful about how we describe our part in this: we implement and operate the controls that support obligations under PIPEDA and PHIPA, including access control, encryption, logging, retention and tested restores, and we document them so you can show your work. We do not deliver compliance and no IT provider does; the obligation stays with your organisation.',
    },
]

# --------------------------------------------------------------------------
# PICKERING  (6 -> 13 sections, 9 -> 16 FAQs)
# --------------------------------------------------------------------------
PICKERING_SECTIONS = [
    {
        'heading': 'Why Pickering Businesses Look for a Local IT Partner',
        'paragraphs': [
            'Pickering had 99,186 residents at the 2021 census, up 8.1 per cent from 91,771 in 2016, spread across 231 square kilometres, with Toronto, Markham and Rouge Park on the west, Ajax and Whitby to the east, Uxbridge to the north and Lake Ontario forming the southern boundary. Durham Region\'s own employment survey found Pickering carrying the most jobs of any municipality in the region at more than 29,000 positions, close to one job for every three residents, which is unusual for a city of this size and tells you something about the kind of employer that is here.',
            'The practical consequence is that Pickering has a lot of businesses that are more technically demanding than their headcount suggests: engineering firms, energy and industrial suppliers, manufacturers and professional services with enterprise customers. Those companies get asked enterprise questions about their security posture by their own clients, and the honest answer is often that nobody has written any of it down. That documentation gap, rather than any single broken system, is usually what starts the conversation.',
        ],
    },
    {
        'heading': 'Pickering Employment Areas and Business Districts We Cover',
        'paragraphs': [
            'The southern half of the city is where almost all the commercial activity sits: the downtown core around the Pickering GO station and Pickering Town Centre, connected across the fourteen lanes of Highway 401 by the pedestrian bridge that opened in 2012, the Brock Road corridor, and the industrial area near the lakeshore. Highway 401 runs along the south end and Highway 407 crosses the mid-north of the city, so a business here can reach most of the eastern GTA quickly while sitting outside Toronto\'s cost base. North of that the municipality is largely rural, with Claremont, Brougham, Whitevale and Greenwood as the established communities and the Seaton lands in between.',
            'We cover all of it, and the neighbouring Durham municipalities on the same agreement: [IT support in Ajax](/it-support/ajax/) immediately east, [IT support in Whitby](/it-support/whitby/) and [managed IT services in Oshawa](/it-support/oshawa/) further along the 401, and [IT support in Markham](/it-support/markham/) and [IT support in Scarborough](/it-support/scarborough/) to the west. Multi-site businesses are managed as one environment rather than as separate accounts with separate reporting.',
        ],
    },
    {
        'heading': 'The Seaton Lands and What Growth Does to an IT Plan',
        'paragraphs': [
            'Seaton is the largest planned expansion in the city and it has moved slowly: as of 2022 only 1,549 of the 20,989 planned units had been built. The province\'s planning for Seaton and downtown intensification anticipates roughly 40,000 new jobs in Pickering over two decades. Whether that arrives on schedule or not, it changes how a business here should think about commitments, because the wrong lease-length assumption and the wrong IT assumption tend to be the same mistake.',
            'The design answer is to avoid decisions that are expensive to reverse. Keep identity, email and file services portable rather than tied to one building. Choose connectivity you can exit without stranding hardware. Treat on-premises equipment as something with a known end date rather than a permanent fixture. We plan Pickering environments so that a move, a second site or a sudden doubling of headcount is a configuration exercise rather than a rebuild.',
        ],
    },
    {
        'heading': 'IT for Energy, Engineering and Industrial Suppliers in Pickering',
        'paragraphs': [
            'The Pickering Nuclear Generating Station is an eight-reactor facility with a capacity of 4,120 megawatts, operated by Ontario Power Generation, which is the city\'s largest single employer. Around it sits a supplier and engineering ecosystem, and Pickering was a founding member of the Durham Strategic Energy Alliance. Other significant employers include the Municipal Property Assessment Corporation, which performs property assessment for every municipality in Ontario, along with manufacturers such as Yorkville Sound, Hubbell Canada, PSB Speakers and Eco-Tec.',
            'What that ecosystem means for a small supplier is disproportionate scrutiny. A twenty-person engineering firm bidding into that supply chain gets asked about multi-factor authentication, patch cadence, backup testing, incident response and subcontractor access, and it is asked in writing. We build the controls and, just as importantly, the evidence: policies that match what the systems actually do, logs that are retained, restores that have been tested with the date recorded, and access reviews that happened rather than being planned.',
        ],
    },
    {
        'heading': 'Data Backup and Disaster Recovery for Pickering Businesses',
        'paragraphs': [
            'A backup you have never restored from is a belief, not a control. We run local and cloud copies, monitor every job, and test restores on a schedule so the recovery time is a measured number rather than an assumption. That matters more for a business whose drawings, project files or measurement data represent years of work than for one whose data is mostly email.',
            'The two questions worth answering before anything is purchased are how much data you can afford to lose and how long you can afford to be down. Those two numbers decide the design and the cost, and they are business decisions rather than technical ones. Once they are written down, the rest is engineering. Our [business continuity and disaster recovery service](/services/business-continuity-disaster-recovery/) covers the full approach.',
        ],
    },
    {
        'heading': 'Microsoft 365, Azure and Cloud Services for Pickering Companies',
        'paragraphs': [
            'Most Pickering businesses are already partly in Microsoft 365 and only partly configured. Licensing is bought but the security features inside it are unused, multi-factor authentication is on for some accounts, sharing is wide open, and nobody is watching the audit log. Getting value from what you already pay for is usually cheaper than buying anything new, and it is where we start.',
            'From there the work is a proper tenant baseline: conditional access, mailbox and file retention that matches your actual obligations, external sharing that is deliberate rather than default, device compliance, and administrative accounts separated from daily-use accounts. Where servers are still doing real work, we are honest about it — some workloads should stay where they are, and a migration recommended without that assessment is a sales pitch. Details are on our [Microsoft 365 and Azure migration](/services/microsoft-365-azure-migration/) page.',
        ],
    },
    {
        'heading': 'Switching IT Providers in Pickering: The Four Stages',
        'paragraphs': [
            'Discovery comes first, before anything is signed: what hardware, licences, domains, backups and accounts exist, and who currently holds the keys. Then documentation, where all of it is written down and the gaps are named out loud rather than discovered later. Then transition, where monitoring, patching, backup and security tooling are put in place alongside the outgoing arrangement rather than after it, so there is no window with nobody watching.',
            'Then handover, where administrative credentials, domain registrations, tenant ownership and licence agreements are confirmed to be in your name and under your control. That last stage is the one businesses skip and regret. Ownership of your own domain, your own Microsoft tenant and your own backups is not a courtesy from a provider, and any provider unwilling to put it in writing is telling you something useful.',
        ],
    },
]

PICKERING_FAQS = [
    {
        'question': 'Do you have an office in Pickering?',
        'answer': 'No. Our office is at 7810 Keele St in Vaughan, and we reach Pickering along Highway 407 or Highway 401. We would rather state that plainly than imply a local storefront. Most work is done remotely because it is genuinely faster, with on-site attendance dispatched from Vaughan when hands are needed. We do not publish a guaranteed response time; a number published before anyone has seen your environment is marketing rather than a commitment.',
    },
    {
        'question': 'Which parts of Pickering do you cover?',
        'answer': 'All of it. The downtown core around the Pickering GO station and Pickering Town Centre, the Brock Road corridor, the industrial area near the lakeshore, the residential south from Frenchman\'s Bay and Rouge Hill to Amberlea and Liverpool, and the rural north including Claremont, Brougham, Whitevale and Greenwood. Businesses with sites in Pickering plus Ajax, Whitby, Oshawa, Markham or Scarborough are managed as one environment under one agreement.',
    },
    {
        'question': 'Can you help us answer a customer\'s security questionnaire?',
        'answer': 'Yes, and this is a common request in Pickering because of the energy and engineering supply chain here. We map the questions to what your environment actually does, implement whatever is genuinely missing rather than claiming it, and assemble the evidence: policy documents that match reality, patch and backup reports, tested restore records with dates, access reviews and incident response procedures. We will not sign off on a control you do not have, which is the point of asking someone technical rather than filling it in optimistically.',
    },
    {
        'question': 'What does 24/7 support actually mean when your office is in Vaughan?',
        'answer': 'It means a technician answers, at any hour, and can remote into your systems immediately rather than logging a callback for the morning. Monitoring runs continuously and alerts go to a person rather than an inbox. What it does not mean is a van outside your building in twenty minutes at 2 am, and we will not claim otherwise. On-site attendance is scheduled, and the environment is designed so that the number of faults genuinely requiring hands on hardware stays small.',
    },
    {
        'question': 'We are planning a move or a second site in Pickering. When should IT get involved?',
        'answer': 'Before the lease is signed, if possible, and certainly before the fit-out is designed. The two things that are expensive to fix afterwards are connectivity and cabling. What service actually reaches a specific address in Pickering varies more than people expect, particularly north of Highway 407, and lead times for a business circuit can run to months. Cabling, comms room location, power and cooling are cheap while the walls are open and disruptive afterwards.',
    },
    {
        'question': 'Do you work with businesses that already have an internal IT person?',
        'answer': 'Yes, and it is a large part of what we do. Co-managed IT means your internal person keeps the relationships and the application knowledge that only comes from being there, and we supply the layers that are unreasonable to expect from one person: 24/7 coverage, monitoring, patching, security tooling and escalation. It also removes the single point of failure, because vacation, illness and resignation stop being business continuity events. Our [co-managed IT service](/services/co-managed-it-services/) sets out how the split is defined.',
    },
    {
        'question': 'How do you handle privacy and PIPEDA obligations for a Pickering business?',
        'answer': 'By building and operating the controls that support the obligation, and being precise about the limits of that. Access control, encryption in transit and at rest, logging with retention, tested restores, documented incident response and reviewed third-party access are the technical layer, and we document them so you can show your work to a customer or a regulator. The obligation itself stays with your organisation. Any provider telling you they deliver compliance is overselling what a technology vendor can do.',
    },
]


if __name__ == '__main__':
    apply('brampton', sections=BRAMPTON_SECTIONS, faqs=BRAMPTON_FAQS)
    apply('pickering', sections=PICKERING_SECTIONS, faqs=PICKERING_FAQS)
