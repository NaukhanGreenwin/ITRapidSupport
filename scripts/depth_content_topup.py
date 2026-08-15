#!/usr/bin/env python3
"""Depth pass top-up: city-distinct sections that bring Brampton, Pickering,
Oakville and Burlington to the Richmond Hill / Milton / Mississauga word depth.

Deliberately city-specific rather than templated, because near-duplicate city
pages are the standing risk with this template (seo-log 2026-08-10).
"""
import sys
sys.path.insert(0, 'scripts')
from depth_insert import apply

BRAMPTON = [
    {
        'heading': 'Email Security and Invoice Fraud in Brampton Supply Chains',
        'paragraphs': [
            'Brampton runs on invoices. A city with four Amazon production facilities, two Canadian Tire distribution facilities, the main GTA distribution centres for Lululemon and Pet Valu, DSV, CN\'s Brampton Intermodal Terminal and a dense layer of freight forwarders, carriers and third-party logistics operators is a city where large payments move between companies that mostly know each other by email. That is precisely the environment invoice-redirection fraud is built for.',
            'The attack is rarely technical. Somebody compromises a mailbox at a supplier, watches the thread for a few weeks, and sends a genuine-looking invoice with changed banking details at the moment a real payment is due. It reads correctly because it is a real conversation. Nothing on your network was breached, which is exactly why the technical controls people expect to catch it do not.',
            'What actually reduces the risk is a combination: enforced multi-factor authentication so your own mailboxes cannot be silently taken over, external-sender marking and impersonation protection so a lookalike domain is visible, mailbox rule auditing so a hidden forwarding rule is caught, and — most importantly — a payment process where a change of banking details is verified by voice on a number you already had. We configure the technical half and will happily write the procedural half down with your finance team, because only one of those halves works alone.',
        ],
    },
    {
        'heading': 'Onboarding, Offboarding and Shift-Based Access in Brampton',
        'paragraphs': [
            'In a city with this much warehousing, distribution and around-the-clock production, staff movement is constant and often seasonal. The result in almost every environment we inherit is the same: active accounts belonging to people who left, shared logins on floor terminals that everyone knows, and no record of who approved what. It is not negligence, it is the accumulation of a hundred reasonable shortcuts taken under time pressure.',
            'The fix is process before technology. A written joiner, mover and leaver procedure that says who requests access, who approves it, what a new starter gets by default, and what happens on the last day. Then the technology makes it cheap: role-based groups so access follows a job rather than a person, automated de-provisioning on departure, and a periodic access review with a record that it happened.',
            'Shared and shift devices need their own answer rather than an exception. Floor terminals, scanners and kiosks can use fast, device-appropriate sign-in that staff will actually use, so activity is still attributable without slowing a picker down. A control that adds thirty seconds to every shift change will be defeated by the people it inconveniences, and a defeated control is worse than an absent one because it is recorded as present.',
        ],
    },
    {
        'heading': 'Hardware Lifecycle and Procurement for Brampton Businesses',
        'paragraphs': [
            'Warehouse and production environments destroy hardware faster than offices do. Dust, temperature swings, vibration, forklift traffic and equipment that gets dropped mean a five-year desktop refresh cycle designed for a head office is the wrong assumption for a floor terminal or a rugged scanner. Treating both as one fleet with one replacement schedule is how a business ends up with a working office and a failing operation.',
            'We keep a lifecycle register that separates them: what is in warranty, what is out of warranty but supported, what is out of vendor support entirely, and what the environmental duty on each device actually is. Out of vendor support is the line that matters, because that is the point at which a security patch stops existing regardless of whether the device still switches on.',
            'On procurement, we will tell you when not to buy. Plenty of Brampton environments have a performance problem that is a network or configuration problem wearing a hardware costume, and replacing endpoints will not fix it. When hardware is genuinely the answer, the recommendation comes with the reason, the expected life and what it displaces from the budget, so the decision is yours to make rather than one you are steered into.',
        ],
    },
]

PICKERING = [
    {
        'heading': 'Rural Pickering: What Connectivity Actually Reaches North of Highway 407',
        'paragraphs': [
            'The southern half of Pickering is suburban and the northern half is not. Claremont, Brougham, Whitevale, Greenwood and Kinsale are established rural communities, and much of the land between them is agricultural or held within the Greenbelt and the Rouge National Urban Park lands. Business addresses out there exist in real numbers — agricultural operations, contractors, professional practices working from converted properties — and their connectivity story is completely different from a Brock Road office.',
            'The practical advice is to check before committing rather than after. What reaches a specific rural Pickering address varies road by road, and the answer a provider gives for a postal code is not the answer for a driveway. Fixed wireless, cable where it has been extended, and satellite services including Starlink are all in play depending on tree cover and line of sight, and lead times for a business-grade circuit can be measured in months rather than weeks.',
            'Where the connection is genuinely the constraint, the design changes rather than the ambition. Cellular failover so a single fault does not stop the day, local caching so that large files are not repeatedly pulled across a thin link, remotely manageable equipment so a stuck router does not require a drive, and cloud services chosen for how they behave on a poor connection rather than on a demo. We would rather design honestly around a limitation than sell around it.',
        ],
    },
    {
        'heading': 'Onboarding, Offboarding and Access Reviews for Pickering Businesses',
        'paragraphs': [
            'The most common finding on a first review of a Pickering environment is not a missing firewall. It is active accounts belonging to people who left, sometimes years ago, often with mailbox access and file permissions intact. Every one of those is a credential that can be phished from someone who has no reason to be paying attention, and none of them show up as a problem until they do.',
            'A joiner, mover and leaver procedure fixes it, and it is a business document rather than a technical one: who requests access, who approves it, what a new starter receives by default, what changes when somebody moves department, and exactly what happens on a last day, including the mailbox, the file shares, the line-of-business applications and any third-party portal. Technology then makes it cheap through role-based groups and automated de-provisioning.',
            'Access reviews close the loop. Once or twice a year somebody with authority reads the list of who has access to what and confirms it is still correct, and the fact that the review happened is recorded. For a Pickering supplier answering questionnaires from an energy or engineering customer, this is one of the questions that gets asked, and having a dated record rather than a good intention is the difference between a clean answer and an awkward one.',
        ],
    },
    {
        'heading': 'Hardware Lifecycle and Procurement for Pickering Businesses',
        'paragraphs': [
            'The distinction that matters is not new versus old, it is supported versus unsupported. A six-year-old workstation that still receives security updates is a manageable asset; a four-year-old appliance the vendor has stopped patching is a liability regardless of how well it appears to be running. We keep a lifecycle register that records both dates, because the warranty date is the one people track and the end-of-support date is the one that actually determines risk.',
            'For Pickering engineering and design firms there is a second consideration: the workstation is a production tool rather than an overhead. Drawing, modelling and measurement software has real hardware requirements, and buying to the office standard because it is the office standard costs more in lost time than the saving is worth. Those users get specified separately and honestly.',
            'We will also tell you when not to buy. A meaningful share of the performance complaints we investigate turn out to be network, storage or configuration problems wearing a hardware costume, and replacing endpoints leaves the cause untouched along with the invoice. When hardware genuinely is the answer, it comes with the reason, the expected life and what it displaces from the plan, so the decision stays yours.',
        ],
    },
]

OAKVILLE = [
    {
        'heading': 'Heritage, Converted and Waterfront Buildings: The Oakville Cabling Problem',
        'paragraphs': [
            'A significant share of Oakville\'s office stock is not purpose-built office space. Old Oakville along Lakeshore and around the harbour, Kerr Village, and the older Bronte frontages are full of converted houses, subdivided commercial buildings and heritage structures that were never designed to carry a network. They are attractive places to work and awkward places to wire.',
            'The recurring problems are consistent: masonry and lath-and-plaster walls that stop wireless dead, so a single router that covers an open-plan floor covers two rooms here; no route between floors for cabling that does not involve a heritage consideration; comms equipment installed in whatever cupboard was free, with no ventilation and a power circuit shared with a kettle; and a patch panel that was correct in 2011 and has been improvised on ever since.',
            'The approach that works is surveying the building as it is rather than as it is drawn, then designing around the constraints instead of pretending they are not there: additional access points placed for the actual wall structure rather than for a coverage radius, a properly located and ventilated comms position with clean power, and cabling routed once, correctly, while any renovation is open. Doing this during a fit-out costs a fraction of doing it afterwards, which is why we ask to be involved before the walls close.',
        ],
    },
    {
        'heading': 'Co-op Hiring, Seasonal Staff and Onboarding Churn in Oakville',
        'paragraphs': [
            'Sheridan College\'s Trafalgar campus is Oakville\'s only post-secondary institution, and its presence shows up in the local business base as a steady flow of co-op students, placements and seasonal hires. Add the town\'s concentration of private schools, retirement residences and professional practices with articling and junior intake, and a lot of Oakville employers onboard and offboard more people per year than their headcount suggests.',
            'High-churn onboarding produces a specific failure mode. Accounts get created quickly because somebody starts on Monday, and they get deleted slowly or not at all because nobody owns the last day. Over a few years that leaves a directory full of live credentials for people who have moved on, each one a route in that nobody is watching, and none of it visible until an audit or an incident makes it visible.',
            'The fix is a written joiner, mover and leaver procedure — who requests, who approves, what the default access is, and what happens on the final day — backed by role-based groups so access follows the job rather than the person, and automated de-provisioning so departure is a single action rather than a checklist somebody has to remember. A periodic access review with a dated record closes it off, and that record is exactly what a client due-diligence questionnaire asks for.',
        ],
    },
    {
        'heading': 'Hardware Lifecycle and Procurement for Oakville Businesses',
        'paragraphs': [
            'The line that matters is supported versus unsupported rather than new versus old. A six-year-old workstation still receiving security updates is a manageable asset; a four-year-old appliance whose vendor has stopped issuing patches is a liability however well it appears to run. Our lifecycle register records both the warranty date and the end-of-support date, because businesses track the first and are exposed by the second.',
            'Oakville design, engineering and marketing practices need a second conversation, because for them the workstation is a production tool rather than an overhead. Modelling, rendering and large-format design work have genuine hardware requirements, and specifying those users to the general office standard costs more in lost time than the saving returns. They get specified separately, with the reasoning written down so finance can see what it is paying for.',
            'We will also tell you when not to buy. A good proportion of the performance complaints we investigate turn out to be network, storage or configuration problems wearing a hardware costume, and replacing endpoints leaves the cause in place along with the invoice. When hardware genuinely is the answer, the recommendation arrives with the reason, the expected life and what it displaces from the budget.',
        ],
    },
]

BURLINGTON = [
    {
        'heading': 'The Escarpment, the Parkway Belt and Where Connectivity Reaches',
        'paragraphs': [
            'Burlington\'s main urban area sits south of the Parkway Belt and Highway 407. North of that line, and north of Aldershot, the land is agricultural, rural residential and conservation, with the Niagara Escarpment behind it and Mount Nemo rising roughly two hundred metres above lake level. It is a genuine physical boundary rather than a planning convention, and it decides what is straightforward to connect and what is not.',
            'Down in the serviced corridors — Harvester Road, the North Service Road, Fairview, Mainway and the downtown core — connectivity options are good and the usual advice applies: order early, because a business circuit lead time is measured in weeks or months rather than days. North of the Parkway Belt and out along the escarpment the picture changes address by address, and what a provider quotes for a postal code is frequently not what is available at a specific driveway.',
            'Where the connection is the real constraint, we design around it rather than talking past it: cellular failover so one fault does not stop the day, remotely manageable equipment so a stuck router is not a site visit, local caching for large files, and cloud services chosen for how they behave on an imperfect link rather than on a demonstration. Checking what genuinely reaches the address before a lease is signed is the cheapest hour anyone spends on this.',
        ],
    },
    {
        'heading': 'Succession, Ownership Change and IT Due Diligence in Burlington',
        'paragraphs': [
            'Burlington skews older than the national average — a median age of 43.3 at the 2016 census with 19.2 per cent of residents aged 65 or over, against a national figure of 16.9 per cent — and its business base skews the same way: established companies, long-tenured owners, and a genuine pipeline of ownership transitions. That produces a category of IT work that growth suburbs simply do not generate as often.',
            'Ownership change puts an environment under a kind of scrutiny it has never faced. A buyer\'s advisers ask who owns the domain name, who holds the Microsoft tenant, whether software licensing is genuinely transferable, where customer data lives and under what agreement, whether there has ever been a breach, and whether the person who set all this up fifteen years ago is an employee, a contractor or a relative. Answering those from memory during a transaction is expensive, and the answers are frequently unwelcome.',
            'The useful time to fix it is well before anyone is at the table. Confirming that domains, tenants, licences and backups are registered to the company rather than to an individual, documenting the environment properly, and clearing up undocumented arrangements is inexpensive in normal times and awkward under a deadline. We do this work as a standing part of a vCIO engagement rather than as a special project, precisely because it is worth the most when nobody is expecting to need it.',
        ],
    },
    {
        'heading': 'Hardware Lifecycle and Procurement for Burlington Businesses',
        'paragraphs': [
            'In a business base this established, the lifecycle register is usually the single most valuable document we produce. What is in warranty, what is out of warranty but still supported, what has passed vendor end-of-support entirely, and what the replacement will cost in which year. Supported versus unsupported is the line that matters — a six-year-old workstation still receiving security patches is manageable, and a four-year-old appliance the vendor has abandoned is not, whatever its condition.',
            'The pattern that hurts Burlington companies specifically is synchronised aging. Everything was bought at once during a good year, everything worked for a decade, and then everything falls due together. Spreading replacement deliberately across budget years, starting with whatever has passed end-of-support rather than whatever is loudest, converts a capital shock into a line item.',
            'Production and processing environments get counted separately from office equipment, because the duty on them is different and so is their realistic life. And we will tell you when not to buy: a meaningful share of performance complaints turn out to be network, storage or configuration problems wearing a hardware costume, where replacing endpoints leaves the cause untouched and adds an invoice.',
        ],
    },
]

if __name__ == '__main__':
    apply('brampton', sections=BRAMPTON)
    apply('pickering', sections=PICKERING)
    apply('oakville', sections=OAKVILLE)
    apply('burlington', sections=BURLINGTON)
