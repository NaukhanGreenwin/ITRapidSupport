import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, BookOpen, FileText, Video, ChevronLeft, ArrowRight, User, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Resource types
export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'guide' | 'whitepaper' | 'webinar' | 'video';
  date: string;
  author: string;
  authorTitle: string;
  authorImage: string;
  image: string;
  link: string;
  featured?: boolean;
  readTime?: string;
}

// All resources data - in a real app this would come from an API or database
export const allResources: ResourceItem[] = [
  {
    id: "1",
    title: "The Complete Guide to Zero Trust Security",
    description: "Learn how to implement Zero Trust architecture in your organization with this comprehensive guide.",
    content: [
      "Zero Trust is a security concept centered on the belief that organizations should not automatically trust anything inside or outside their perimeters and instead must verify anything and everything trying to connect to their systems before granting access.",
      "This guide explores how organizations can effectively implement Zero Trust architecture to protect their valuable assets in today's complex threat landscape.",
      "## Understanding Zero Trust Security",
      "The concept of Zero Trust was first introduced by John Kindervag while he was at Forrester Research. The premise is simple: organizations should not automatically trust any entity, regardless of whether it's inside or outside the network perimeter.",
      "Traditional security models operate on the assumption that everything inside an organization's network should be trusted. However, the proliferation of cloud services, mobile devices, and remote work has effectively eliminated the traditional network perimeter, making this approach outdated and dangerous.",
      "## Core Principles of Zero Trust",
      "### 1. Verify Explicitly",
      "Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.",
      "### 2. Use Least Privilege Access",
      "Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection to help secure both data and productivity.",
      "### 3. Assume Breach",
      "Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to get visibility, drive threat detection, and improve defenses.",
      "## Implementing Zero Trust in Your Organization",
      "Implementing a Zero Trust model is not a single product or platform but rather a strategic approach that incorporates various technologies and processes. Here's a roadmap for implementation:",
      "### Step 1: Define Your Protect Surface",
      "Identify the critical data, applications, assets, and services (DAAS) that need protection. This is your protect surface, which is much smaller and more focused than the traditional attack surface.",
      "### Step 2: Map Transaction Flows",
      "Understand how traffic moves across your network. Determine how specific resources interact with other resources on your network to establish proper controls.",
      "### Step 3: Build a Zero Trust Architecture",
      "Design your network with Zero Trust in mind, placing controls close to the protect surface. This often involves implementing a microperimeter around the protect surface, creating what's known as a segmentation gateway.",
      "### Step 4: Create Zero Trust Policies",
      "Establish rules that determine who can access which resources under what circumstances. These policies should follow the principle of least privilege and be as granular as possible."
    ].join('\n\n'),
    type: "guide",
    date: "June 15, 2023",
    author: "Alex Johnson",
    authorTitle: "Security Architect",
    authorImage: "https://randomuser.me/api/portraits/men/41.jpg",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    link: "#",
    featured: true,
    readTime: "10 min read"
  },
  {
    id: "2",
    title: "Threat Intelligence in the Modern Enterprise",
    description: "A detailed whitepaper on leveraging threat intelligence to improve security posture.",
    content: [
      "This whitepaper explores how organizations can effectively harness threat intelligence to strengthen their security posture and defend against evolving cyber threats.",
      "Today's cybersecurity landscape is characterized by increasingly sophisticated threats. Organizations need robust threat intelligence capabilities to stay ahead of malicious actors.",
      "## What is Threat Intelligence?",
      "Threat intelligence is evidence-based knowledge, including context, mechanisms, indicators, implications, and action-oriented advice about existing or emerging threats to assets that can be used to inform decisions regarding the subject's response to those threats.",
      "## The Threat Intelligence Lifecycle",
      "### 1. Planning and Direction",
      "Identify intelligence requirements and determine what information is needed to address specific security concerns.",
      "### 2. Collection",
      "Gather raw data from various sources, including open-source intelligence, commercial feeds, industry reports, and internal security tools.",
      "### 3. Processing",
      "Convert raw data into a format suitable for analysis, often involving normalization, deduplication, and initial filtering.",
      "### 4. Analysis",
      "Examine processed data to identify patterns, trends, and relationships, and to develop insights into threat actors, their motivations, and their tactics."
    ].join('\n\n'),
    type: "whitepaper",
    date: "May 22, 2023",
    author: "Sarah Wilson",
    authorTitle: "Threat Intelligence Analyst",
    authorImage: "https://randomuser.me/api/portraits/women/67.jpg",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "12 min read"
  },
  {
    id: "3",
    title: "Ransomware Protection Strategies",
    description: "Essential strategies to protect your organization from the growing ransomware threat.",
    content: [
      "Ransomware attacks have become one of the most prevalent and damaging cyber threats facing organizations today. This guide provides comprehensive strategies to help protect your organization.",
      "## Understanding the Ransomware Threat",
      "Ransomware is a type of malicious software designed to block access to a computer system or data until a sum of money is paid. The evolving nature of ransomware attacks makes them particularly challenging to defend against.",
      "## Essential Protection Strategies",
      "### 1. Maintain Robust Backup Systems",
      "Implement the 3-2-1 backup rule: maintain three copies of your data on two different media types with one copy stored off-site. Regularly test your backup restoration processes to ensure they work when needed.",
      "### 2. Keep Systems Updated",
      "Ensure all operating systems, applications, and firmware are regularly updated with the latest security patches. Unpatched vulnerabilities are common entry points for ransomware.",
      "### 3. Implement Email Security",
      "Since phishing emails are a primary ransomware delivery mechanism, deploy robust email security solutions that can detect and block malicious attachments and links."
    ].join('\n\n'),
    type: "guide",
    date: "April 10, 2023",
    author: "Michael Chen",
    authorTitle: "Cybersecurity Consultant",
    authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "8 min read"
  },
  {
    id: "4",
    title: "Cloud Security Best Practices",
    description: "Critical security considerations when migrating to and operating in the cloud.",
    content: [
      "As organizations continue to migrate to the cloud, understanding and implementing robust security practices becomes increasingly important. This whitepaper outlines essential cloud security best practices.",
      "## The Shared Responsibility Model",
      "Cloud security operates on a shared responsibility model, where the cloud provider secures the infrastructure, and customers are responsible for securing their data and applications.",
      "## Key Security Best Practices",
      "### 1. Identity and Access Management",
      "Implement strong IAM policies using the principle of least privilege. Use multi-factor authentication for all privileged accounts and consider just-in-time access for administrative functions.",
      "### 2. Data Protection",
      "Encrypt sensitive data both at rest and in transit. Implement proper key management practices and consider using customer-managed keys for critical data.",
      "### 3. Network Security",
      "Segment cloud networks using security groups, VPCs, and NACLs. Implement DDoS protection and web application firewalls for public-facing applications."
    ].join('\n\n'),
    type: "whitepaper",
    date: "March 28, 2023",
    author: "Jennifer Lopez",
    authorTitle: "Cloud Security Architect",
    authorImage: "https://randomuser.me/api/portraits/women/28.jpg",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "15 min read"
  },
  {
    id: "5",
    title: "The Future of Security Operations Centers",
    description: "On-demand webinar discussing next-generation SOC capabilities and operations.",
    content: [
      "This webinar explores how Security Operations Centers (SOCs) are evolving to meet the challenges of today's threat landscape and what capabilities will be essential in the future.",
      "## Traditional SOC Limitations",
      "Many traditional SOCs struggle with alert fatigue, skill shortages, and the inability to detect sophisticated threats. These limitations are driving the evolution toward next-generation capabilities.",
      "## Next-Generation SOC Capabilities",
      "### 1. AI and Machine Learning Integration",
      "Advanced analytics can help identify patterns and anomalies that human analysts might miss, reducing false positives and accelerating threat detection.",
      "### 2. Automated Response",
      "Implementing automated response capabilities for common threats allows SOC teams to focus on more complex security challenges.",
      "### 3. Threat Intelligence Integration",
      "Incorporating threat intelligence into SOC operations provides context for security events and helps prioritize responses based on relevant threats."
    ].join('\n\n'),
    type: "webinar",
    date: "March 15, 2023",
    author: "David Park",
    authorTitle: "SOC Manager",
    authorImage: "https://randomuser.me/api/portraits/men/52.jpg",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "45 min watch"
  },
  {
    id: "6",
    title: "Securing the Software Supply Chain",
    description: "Learn how to identify and mitigate risks in your software supply chain.",
    content: [
      "Recent high-profile attacks have highlighted the importance of securing the software supply chain. This guide provides strategies to identify and mitigate risks throughout the development lifecycle.",
      "## Understanding Supply Chain Risks",
      "The software supply chain includes all components, libraries, tools, and processes used in developing and delivering software. Attacks can target any point in this chain, making comprehensive security essential.",
      "## Key Protection Strategies",
      "### 1. Inventory All Components",
      "Maintain a comprehensive inventory of all software components, including third-party libraries and open-source dependencies. Use Software Composition Analysis (SCA) tools to automate this process.",
      "### 2. Implement Secure Development Practices",
      "Integrate security throughout the development lifecycle with DevSecOps practices. This includes secure coding standards, automated security testing, and regular code reviews.",
      "### 3. Verify Code Integrity",
      "Use code signing to verify the integrity and authenticity of code. Implement mechanisms to ensure that only approved, verified code is deployed to production environments."
    ].join('\n\n'),
    type: "guide",
    date: "February 28, 2023",
    author: "Emily Thompson",
    authorTitle: "Application Security Lead",
    authorImage: "https://randomuser.me/api/portraits/women/33.jpg",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "11 min read"
  },
  {
    id: "7",
    title: "Advanced Persistent Threats: Detection & Response",
    description: "Technical deep dive into APT tactics and effective countermeasures.",
    content: [
      "Advanced Persistent Threats (APTs) represent some of the most sophisticated cyber threats organizations face today. This video provides a technical analysis of APT tactics and effective countermeasures.",
      "## Understanding APT Actors",
      "APTs are typically well-funded, highly skilled threat actors who target specific organizations with strategic objectives. They are patient, persistent, and employ advanced techniques to evade detection.",
      "## APT Attack Lifecycle",
      "### 1. Initial Access",
      "APTs gain initial access through various means, including spear-phishing, supply chain compromises, and exploitation of public-facing applications.",
      "### 2. Persistence",
      "Once inside, APTs establish multiple persistence mechanisms to maintain access even if some entry points are discovered and closed.",
      "### 3. Lateral Movement",
      "APTs move laterally through the network, seeking to escalate privileges and access high-value targets while evading detection."
    ].join('\n\n'),
    type: "video",
    date: "February 12, 2023",
    author: "Robert Taylor",
    authorTitle: "Threat Hunter",
    authorImage: "https://randomuser.me/api/portraits/men/74.jpg",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "35 min watch"
  },
  {
    id: "8",
    title: "CISO's Guide to Compliance Frameworks",
    description: "Navigate complex compliance requirements with this executive-level overview.",
    content: [
      "This whitepaper provides Chief Information Security Officers (CISOs) with a comprehensive overview of major compliance frameworks and strategies for effective implementation.",
      "## Common Compliance Frameworks",
      "Organizations often need to comply with multiple regulatory frameworks depending on their industry, location, and the type of data they handle.",
      "## Key Compliance Strategies",
      "### 1. Map Control Requirements",
      "Many compliance frameworks have overlapping requirements. Mapping controls across frameworks can help organizations satisfy multiple compliance requirements with a single control implementation.",
      "### 2. Implement a GRC Platform",
      "Governance, Risk, and Compliance (GRC) platforms can help organizations manage compliance activities, document evidence, and prepare for audits more efficiently.",
      "### 3. Develop a Common Control Framework",
      "Creating a unified control framework that addresses requirements across multiple regulations can streamline compliance efforts and reduce duplication of work."
    ].join('\n\n'),
    type: "whitepaper",
    date: "January 30, 2023",
    author: "Amanda Rodriguez",
    authorTitle: "Compliance Director",
    authorImage: "https://randomuser.me/api/portraits/women/45.jpg",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "14 min read"
  },
  {
    id: "managed-it-support-cost-toronto",
    title: "How Much Does Managed IT Support Cost in Toronto? (2026 Guide)",
    description: "A clear breakdown of managed IT support pricing models for Toronto and GTA businesses, what drives the cost, and how to compare providers.",
    content: [
      "If you run a business in Toronto or the Greater Toronto Area, one of the first questions you ask when shopping for IT support is simple: what is this going to cost? The honest answer is that managed IT pricing varies based on the size of your team, the complexity of your environment, and the level of security and response you need. This guide walks through the common pricing models so you can compare providers with confidence.",
      "At IT Rapid Support, we believe pricing should be transparent and tied to outcomes, not surprises. Below we explain how managed IT is typically priced across the industry and what to look for when you request a quote.",
      "## The Main Managed IT Pricing Models",
      "### 1. Per-User Pricing",
      "The most common model for small and mid-sized businesses charges a flat monthly fee for each employee who uses technology. It is predictable, scales cleanly as you hire, and covers every device that person uses. This works well for teams where people have a laptop, a phone, and a few cloud apps each.",
      "### 2. Per-Device Pricing",
      "Some providers price by the number of devices they manage: workstations, servers, firewalls, and network gear. This suits businesses with shared workstations or a high device-to-user ratio, such as warehouses, clinics, or retail locations.",
      "### 3. Tiered or Bundled Plans",
      "Many managed service providers package support into tiers, where higher tiers add proactive monitoring, advanced cybersecurity, and faster response commitments. This lets you start with essential coverage and add security layers like managed detection and response, email security, and multi-factor authentication as you grow.",
      "## What Actually Drives the Price",
      "Several factors move managed IT pricing up or down. Understanding them helps you compare quotes fairly:",
      "### Number of Users and Devices",
      "More endpoints mean more to monitor, patch, and secure. This is usually the single biggest driver of monthly cost.",
      "### Security Requirements",
      "A business handling sensitive client data, payment information, or regulated records needs more layers: managed firewalls, endpoint protection, email filtering, MFA, and managed detection and response. Stronger security costs more up front but is far cheaper than a breach.",
      "### Response Time and Coverage",
      "Round-the-clock coverage and rapid response commitments cost more than business-hours-only support. A 24/7 helpdesk that can respond to an incident at 2 a.m. is worth it for businesses that cannot afford downtime.",
      "### On-Site vs Remote",
      "Most issues are resolved remotely, which keeps costs low. Scheduled and emergency on-site visits across the GTA add value for hardware problems, new office setups, and hands-on projects.",
      "## What to Ask Before You Sign",
      "When comparing providers, ask exactly what is included. Does the plan cover cybersecurity or is that extra? Is the helpdesk available 24/7? Are on-site visits included? What is the response commitment when something breaks? A low headline price often means thin coverage that costs you more in downtime later.",
      "## Get a Straight Answer for Your Business",
      "Every business is different, so the most accurate way to understand your cost is a short conversation about your team size, your systems, and your risk. IT Rapid Support provides managed IT and cybersecurity for businesses across Toronto and the GTA, with a 24/7 helpdesk, proactive monitoring, and certified technicians. Call (289) 582-9930 for a no-pressure quote built around your needs."
    ].join('\n\n'),
    type: "guide",
    date: "June 24, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "9 min read"
  },
  {
    id: "managed-it-services-vs-in-house",
    title: "Managed IT Services vs In-House IT: Which Is Right for Your GTA Business?",
    description: "Compare managed IT services and an in-house IT team on cost, coverage, security, and scalability to decide what fits your Toronto-area business.",
    content: [
      "As your business grows, technology stops being something you can manage on the side. Eventually you face a choice: hire an in-house IT person or team, or partner with a managed IT services provider. Both can work. The right answer depends on your size, your budget, and how much risk you can absorb. This guide compares the two honestly so you can decide.",
      "## The Case for In-House IT",
      "An in-house hire sits in your office, knows your people, and is available for hands-on work. For very large organizations with complex, specialized systems, a dedicated internal team makes sense. The tradeoffs are cost and coverage: a single IT employee is one person, with one set of skills, who takes vacations and gets sick.",
      "## The Case for Managed IT Services",
      "A managed services provider gives you a whole team for less than the fully loaded cost of one senior hire. You get a 24/7 helpdesk, proactive monitoring, cybersecurity specialists, and on-site support across the GTA, without recruiting, training, or carrying benefits and turnover risk.",
      "## Comparing the Two Side by Side",
      "### Cost",
      "A skilled IT professional in the GTA commands a substantial salary plus benefits, training, and tools. Managed IT replaces that with a predictable monthly fee that scales with your team, often covering more capability for less total spend.",
      "### Coverage and Availability",
      "One in-house person covers business hours and is a single point of failure. A managed provider offers round-the-clock coverage so problems get handled nights, weekends, and holidays.",
      "### Breadth of Expertise",
      "No single hire is an expert in networking, cloud, Microsoft 365, cybersecurity, and backup all at once. A managed team brings specialists across each area.",
      "### Security",
      "Cyber threats do not keep business hours. Managed providers layer in managed firewalls, endpoint protection, email security, MFA, and managed detection and response as a standard practice, not an afterthought.",
      "### Scalability",
      "Adding ten employees does not mean hiring more IT staff. A managed plan flexes up and down with your headcount.",
      "## A Hybrid Approach",
      "Many growing businesses run a hybrid model: a managed provider handles monitoring, security, and the helpdesk, while a small internal contact coordinates priorities. This gives you hands-on familiarity plus the depth and coverage of a full team.",
      "## How to Decide",
      "If you are a small or mid-sized GTA business that wants predictable costs, strong security, and coverage that never sleeps, managed IT is usually the better value. IT Rapid Support delivers exactly that across Toronto and the surrounding region. Call (289) 582-9930 to talk through which model fits your business."
    ].join('\n\n'),
    type: "guide",
    date: "June 22, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "8 min read"
  },
  {
    id: "small-business-cybersecurity-checklist",
    title: "Cybersecurity for Small Businesses in the GTA: A Practical Checklist",
    description: "A plain-English cybersecurity checklist for small and mid-sized GTA businesses, covering the essential protections every company should have in place.",
    content: [
      "Small and mid-sized businesses are now the most common targets of cyber attacks, precisely because attackers assume their defenses are weak. The good news is that strong protection does not require a massive budget. It requires the right layers, set up correctly and kept current. Here is a practical checklist for businesses across the Greater Toronto Area.",
      "## 1. Turn On Multi-Factor Authentication Everywhere",
      "Passwords get stolen and reused. Multi-factor authentication (MFA) adds a second step that blocks the vast majority of account takeovers. Enable it on email, Microsoft 365, banking, remote access, and any system that supports it. This is the single highest-impact step most businesses are still missing.",
      "## 2. Protect Your Email",
      "Email is the number one entry point for attacks. Phishing and business email compromise cost companies dearly. Deploy email security that filters malicious links and attachments, and train your team to recognize suspicious messages.",
      "## 3. Keep Endpoints Protected and Patched",
      "Every laptop, desktop, and server needs modern endpoint protection plus regular patching. Unpatched software is one of the easiest ways in for attackers. Automated patch management closes those gaps before they are exploited.",
      "## 4. Use a Managed Firewall",
      "A properly configured and monitored firewall is your first line of network defense. Managed firewalls are kept up to date and watched for suspicious activity, rather than installed once and forgotten.",
      "## 5. Back Up Your Data Properly",
      "Follow the 3-2-1 rule: three copies of your data, on two types of media, with one copy off-site. Test your restores regularly. Reliable backups are what turn a ransomware disaster into an inconvenience.",
      "## 6. Add Managed Detection and Response",
      "Prevention is not enough on its own. Managed detection and response watches your environment around the clock, catches threats that slip past other defenses, and responds before they spread.",
      "## 7. Limit Access to What People Actually Need",
      "Apply least-privilege access so each person can reach only the systems their role requires. This contains the damage if any one account is compromised.",
      "## 8. Have a Plan for When Something Goes Wrong",
      "Know who to call and what to do in the first hour of an incident. A clear response plan, combined with a partner who can act fast, dramatically reduces the cost and downtime of an attack.",
      "## Putting It Together",
      "Each of these layers is achievable for a small business when set up by a team that does this every day. IT Rapid Support provides managed cybersecurity for businesses across Toronto and the GTA, including MFA, email security, managed firewalls, endpoint protection, backup and recovery, and 24/7 managed detection and response. Call (289) 582-9930 to find the gaps in your current setup."
    ].join('\n\n'),
    type: "guide",
    date: "June 20, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "9 min read"
  },
  {
    id: "microsoft-365-migration-guide",
    title: "Microsoft 365 Migration for Toronto Businesses: A Step-by-Step Guide",
    description: "Planning a move to Microsoft 365? Here is how GTA businesses migrate email, files, and users smoothly with minimal downtime and proper security.",
    content: [
      "Microsoft 365 has become the backbone of how modern businesses work: email, file storage, Teams, and the Office apps in one secure cloud platform. But a migration done badly means lost email, frustrated staff, and downtime. Done well, it is invisible to your team and immediately more productive. Here is how GTA businesses move to Microsoft 365 the right way.",
      "## Why Businesses Move to Microsoft 365",
      "The pull is simple: work from anywhere, automatic updates, enterprise-grade security, and no aging on-premises mail server to maintain. For most small and mid-sized businesses, the cloud is more reliable and more secure than what they can run themselves.",
      "## Step 1: Plan and Inventory",
      "Before touching anything, map what you have: mailboxes, shared mailboxes, distribution lists, files, and the apps people depend on. Decide which Microsoft 365 plan fits your needs and confirm licensing. Good planning is what prevents surprises later.",
      "## Step 2: Prepare Your Domain and Identities",
      "Set up your Microsoft 365 tenant, verify your domain, and create user accounts. This is the right moment to design security properly: enforce multi-factor authentication, configure conditional access, and apply least-privilege roles from day one.",
      "## Step 3: Migrate Email and Data",
      "Move mailboxes and files in a controlled way, often in batches, so nothing is lost and the team is never cut off. Calendars, contacts, and shared resources come across too. Scheduling cutover outside business hours keeps disruption to a minimum.",
      "## Step 4: Configure Security and Backup",
      "Microsoft 365 is secure by design, but it still needs your configuration: email filtering, MFA, and a third-party backup of your cloud data. Many businesses wrongly assume Microsoft backs up everything for them. A dedicated backup protects you from accidental deletion and ransomware.",
      "## Step 5: Roll Out and Support Your Team",
      "Help users sign in on their devices, set up Outlook and Teams, and answer the inevitable first-week questions. A responsive helpdesk during the transition makes the difference between a smooth launch and a flood of complaints.",
      "## Common Pitfalls to Avoid",
      "The biggest mistakes are migrating without a backup, skipping MFA, underestimating how long data transfer takes, and cutting over during business hours. Each one is avoidable with the right plan and the right partner.",
      "## Make Your Migration a Non-Event",
      "IT Rapid Support helps Toronto and GTA businesses migrate to Microsoft 365 with minimal downtime, proper security, and a 24/7 helpdesk standing by during the transition. We handle the planning, the migration, and the support so your team barely notices the switch. Call (289) 582-9930 to scope your move."
    ].join('\n\n'),
    type: "guide",
    date: "June 18, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "10 min read"
  },
  {
    id: "ransomware-protection-ontario-businesses",
    title: "Ransomware Protection for Ontario Businesses: 2026 Defense Guide",
    description: "How Ontario businesses defend against ransomware in 2026: layered prevention, reliable backups, and 24/7 detection and response that limit the damage.",
    content: [
      "Ransomware remains one of the most damaging threats facing Ontario businesses. A single successful attack can lock up your files, halt operations, and cost far more than the ransom itself in downtime and recovery. The businesses that survive ransomware are not lucky; they are prepared. This guide explains how to build that preparation in layers.",
      "## How Ransomware Gets In",
      "Most ransomware starts with something ordinary: a phishing email, a stolen password, or an unpatched system exposed to the internet. Attackers get a foothold, move through the network, and then encrypt everything they can reach. Understanding the path in is the key to blocking it.",
      "## Layer 1: Stop the Initial Compromise",
      "Strong email security filters the phishing messages that deliver most attacks. Multi-factor authentication blocks stolen passwords from working. Regular patching closes the vulnerabilities attackers exploit. These three controls stop the majority of ransomware before it ever starts.",
      "## Layer 2: Contain the Spread",
      "If an attacker does get in, least-privilege access and network segmentation limit how far they can move. The goal is to ensure that one compromised laptop does not give an attacker the keys to your entire business.",
      "## Layer 3: Detect and Respond Fast",
      "Ransomware does damage in minutes to hours. Managed detection and response watches your environment around the clock and steps in the moment suspicious behavior appears, isolating affected systems before encryption spreads. Speed is everything, which is why 24/7 coverage matters.",
      "## Layer 4: Back Up So You Can Recover",
      "When prevention fails, reliable backups are what let you restore instead of pay. Follow the 3-2-1 rule, keep at least one copy off-site and isolated, and test your restores regularly. Attackers now try to delete backups, so your backup strategy must be protected and immutable where possible.",
      "## What to Do If You Are Hit",
      "Disconnect affected systems immediately, do not pay before getting expert advice, and bring in a response team fast. The first hour shapes the outcome. Having a partner you can call at any time is the difference between a contained incident and a business-stopping crisis.",
      "## Build Your Defense Before You Need It",
      "Ransomware defense is not a single product; it is layers working together, maintained by people who watch them every day. IT Rapid Support provides managed cybersecurity, backup and recovery, and 24/7 managed detection and response for businesses across Ontario and the GTA. Call (289) 582-9930 to assess your ransomware readiness before an attacker tests it for you."
    ].join('\n\n'),
    type: "guide",
    date: "June 16, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "9 min read"
  },
  {
    id: "choosing-managed-it-provider-toronto",
    title: "What to Look for in a Managed IT Services Provider in Toronto",
    description: "Choosing a managed IT provider in Toronto? Here are the questions to ask and the green flags to look for so you pick a partner that actually delivers.",
    content: [
      "Choosing a managed IT services provider is a decision you live with every day. The right partner keeps your business running, secure, and productive. The wrong one leaves you waiting on hold while problems pile up. If you are evaluating providers in Toronto or the GTA, here is what separates a real partner from a vendor that just sends invoices.",
      "## 1. Round-the-Clock Support That Actually Answers",
      "Technology does not break only between nine and five. Look for a provider with a genuine 24/7 helpdesk staffed by people who can resolve issues, not just log them. Ask how fast they respond when something is down, and what happens after hours.",
      "## 2. Proactive Monitoring, Not Just Reactive Fixes",
      "The best providers prevent problems instead of waiting for you to report them. Proactive monitoring catches failing hardware, security issues, and performance problems early. If a provider only shows up after something breaks, you are paying for the slowest possible service.",
      "## 3. Security Built In, Not Bolted On",
      "Cybersecurity should be part of the core offering: managed firewalls, endpoint protection, email security, MFA, and managed detection and response. If security is an expensive afterthought or barely mentioned, keep looking.",
      "## 4. Local Presence and On-Site Capability",
      "Most issues are solved remotely, but some need hands on hardware. A provider with on-site capability across the GTA can show up for new office setups, hardware failures, and projects. Local matters when you need someone in the room.",
      "## 5. Clear, Predictable Pricing",
      "You should understand exactly what you are paying for and what is included. Watch for thin plans with cheap headline prices that nickel-and-dime you for every real need. Transparent pricing is a sign of a provider that respects you.",
      "## 6. Certified, Experienced Technicians",
      "Ask about the team. Certified technicians with real experience across networking, cloud, Microsoft 365, and security will resolve your issues faster and right the first time.",
      "## 7. Backup, Recovery, and a Real Plan",
      "Make sure data backup and recovery are part of the package and that the provider can articulate what happens during an outage or attack. A partner who has thought through disaster recovery is one who has done it before.",
      "## Questions to Ask Before You Commit",
      "Is your helpdesk truly 24/7? What is your response commitment when we are down? Is cybersecurity included or extra? Do you provide on-site support in our area? Can you walk me through how you would handle a ransomware incident? The answers tell you everything.",
      "## A Partner, Not Just a Provider",
      "IT Rapid Support delivers managed IT and cybersecurity to businesses across Toronto and the GTA, with a 24/7 helpdesk, proactive monitoring, certified technicians, and on-site support when you need it. Call (289) 582-9930 to see whether we are the right fit for your business."
    ].join('\n\n'),
    type: "guide",
    date: "June 14, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "9 min read"
  },
  {
    id: "it-support-small-business-gta",
    title: "IT Support for Small Business in the GTA: What to Expect",
    description: "A practical look at what managed IT support includes for small businesses across the GTA, from the helpdesk to cybersecurity and on-site help.",
    content: [
      "Small businesses across the Greater Toronto Area depend on technology as much as any enterprise, but rarely have the budget for a full in-house IT department. Managed IT support fills that gap, giving you the systems, security, and responsiveness of a large company at a predictable monthly cost. If you have never worked with a managed IT provider, here is what to expect.",
      "## A Helpdesk That Actually Answers",
      "The core of small-business IT support is a helpdesk your team can reach when something breaks. With IT Rapid Support, that means a 24/7 helpdesk reachable by phone, email, and chat, staffed by certified technicians who can resolve most issues remotely in minutes rather than days.",
      "## Proactive Monitoring, Not Just Break-Fix",
      "Good managed IT does not wait for things to break. Proactive monitoring watches your servers, workstations, and network around the clock, applying patches and catching warning signs before they turn into downtime. The goal is fewer fires, not faster firefighting.",
      "## Built-In Cybersecurity",
      "Small businesses are a favourite target for attackers precisely because they often have weaker defences. A modern managed IT plan layers in managed firewalls, endpoint protection, email security, multi-factor authentication, and managed detection and response so your business is protected without you having to become a security expert.",
      "## Cloud and Microsoft 365 Done Right",
      "Most GTA small businesses run on Microsoft 365 and cloud apps. Managed IT includes migrating, securing, and managing those environments so your team can work from the office, home, or a client site without losing data or exposing the business.",
      "## On-Site Help When You Need It",
      "Some problems need hands on hardware. Certified technicians provide scheduled and emergency on-site visits across the GTA for new office setups, hardware failures, and projects that cannot be handled remotely.",
      "## Getting Started",
      "The best first step is a short conversation about your team, your systems, and your risks. IT Rapid Support provides managed IT and cybersecurity for small businesses across Toronto and the GTA. Call (289) 582-9930 to talk through what support would look like for your business."
    ].join('\n\n'),
    type: "guide",
    date: "June 25, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "8 min read"
  },
  {
    id: "why-24-7-it-helpdesk-matters",
    title: "Why a 24/7 IT Helpdesk Matters for Ontario Businesses",
    description: "Downtime does not keep business hours. Here is why round-the-clock IT support protects revenue, reputation, and security for Ontario businesses.",
    content: [
      "When your systems go down at 9 a.m. on a Tuesday, it is stressful but manageable. When they go down at 11 p.m. before a major deadline, or over a long weekend, the cost climbs fast. That is why a 24/7 IT helpdesk has become a baseline expectation for Ontario businesses that cannot afford to wait until morning.",
      "## Downtime Does Not Keep Business Hours",
      "Cyber attacks, hardware failures, and outages happen whenever they happen, often deliberately outside business hours when defences are thinnest. A helpdesk that is only available nine to five leaves a long window every night and weekend where a small problem can grow into a serious one.",
      "## Faster Response Protects Revenue",
      "Every hour your team cannot work is an hour of lost productivity and, often, lost revenue. A 24/7 helpdesk means issues get triaged and resolved as they happen, not hours later. Most problems are handled remotely within minutes, keeping your people working.",
      "## Security Incidents Need Immediate Attention",
      "Ransomware and breaches move quickly. The difference between catching an incident in the first hour and discovering it the next morning can be the difference between a contained event and a company-wide crisis. Round-the-clock monitoring and managed detection and response shrink that window dramatically.",
      "## Peace of Mind for Leadership",
      "Knowing that certified technicians are watching your systems at all hours lets owners and managers focus on the business instead of worrying about what might break overnight. It is one of the quiet benefits clients value most.",
      "## What to Look For",
      "Not every provider that advertises 24/7 support truly staffs it. Ask whether after-hours calls reach a real technician, what the response commitment is, and whether monitoring and security are included around the clock or only during the day.",
      "## Round-the-Clock Support Across the GTA",
      "IT Rapid Support provides a genuine 24/7 helpdesk, proactive monitoring, and managed cybersecurity for businesses across Ontario and the GTA. Call (289) 582-9930 to learn how always-on support would protect your business."
    ].join('\n\n'),
    type: "guide",
    date: "June 25, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "7 min read"
  },
  {
    id: "cloud-backup-disaster-recovery-guide",
    title: "Cloud Backup and Disaster Recovery: A Practical Guide for GTA Businesses",
    description: "How GTA businesses can protect against data loss with cloud backup and a tested disaster recovery plan. What to back up, how often, and why it matters.",
    content: [
      "Data loss rarely announces itself. A failed drive, an accidental deletion, a ransomware attack, or a flooded server room can wipe out years of work in moments. For GTA businesses, a reliable cloud backup and a tested disaster recovery plan are the difference between a bad afternoon and a business-ending event. This guide covers the essentials.",
      "## Backup Is Not the Same as Disaster Recovery",
      "People use the terms interchangeably, but they are different. Backup is a copy of your data. Disaster recovery is the plan and capability to get your business running again after something goes wrong. You need both: copies of your data, and a way to actually restore operations quickly.",
      "## What You Should Be Backing Up",
      "At minimum, back up your business-critical data: file servers, databases, email and Microsoft 365 data, line-of-business applications, and configuration. Many businesses wrongly assume that data in Microsoft 365 or other cloud apps is automatically protected. It is your responsibility to back it up.",
      "## How Often and How Many Copies",
      "A common best practice is the 3-2-1 approach: three copies of your data, on two different types of media, with one copy offsite. Cloud backup makes the offsite copy easy and automatic. The right backup frequency depends on how much data you can afford to lose, anywhere from nightly to near-continuous for critical systems.",
      "## Test Your Restores",
      "A backup you have never tested is a hope, not a plan. Restores should be tested regularly so you know they work and you know how long recovery actually takes. A managed provider handles this testing as part of the service.",
      "## Ransomware Changes the Math",
      "Modern ransomware deliberately seeks out and encrypts backups. Effective protection means backups that are isolated and immutable, combined with managed detection and response to catch the attack early. Tested, protected backups are what let a business recover without paying a ransom.",
      "## Build a Plan That Actually Works",
      "IT Rapid Support helps GTA businesses design and manage cloud backup and disaster recovery, with tested restores and protection against ransomware. Call (289) 582-9930 to make sure your business can recover from the unexpected."
    ].join('\n\n'),
    type: "guide",
    date: "June 26, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "9 min read"
  },
  {
    id: "stop-phishing-attacks-email-security",
    title: "How to Stop Phishing Attacks: Email Security and Employee Training",
    description: "Phishing is the top way attackers get in. Learn the email security controls and employee habits that keep GTA businesses protected.",
    content: [
      "Most cyber attacks do not start with a sophisticated hack. They start with an email. Phishing remains the number one way attackers get into business systems, because it targets people rather than technology. Stopping it takes a combination of the right email security controls and a workforce that knows what to watch for.",
      "## Why Phishing Works",
      "Phishing emails are designed to create urgency and trust: a fake invoice, a password-reset notice, a message that looks like it is from the boss. They rely on a busy employee clicking before thinking. As the emails get more convincing, technology alone is not enough, and people alone are not enough either. You need both.",
      "## Layer One: Email Security Technology",
      "Strong email security filters out the majority of malicious messages before they ever reach an inbox. This includes anti-phishing and anti-spam filtering, attachment and link scanning, and impersonation protection that flags messages pretending to come from your own domain or executives.",
      "## Layer Two: Multi-Factor Authentication",
      "Even if someone does enter their password on a fake login page, multi-factor authentication can stop the attacker from getting in. MFA is one of the single most effective controls against account takeover, and it should be on every account that supports it.",
      "## Layer Three: Employee Awareness Training",
      "Your team is the last line of defence. Regular security awareness training teaches people to spot the warning signs: unexpected urgency, mismatched sender addresses, suspicious links, and requests for credentials or payment. Simulated phishing tests reinforce the lessons safely.",
      "## Have a Plan for When Someone Clicks",
      "Assume that eventually someone will click. Managed detection and response and a clear incident process mean a single mistake gets caught and contained quickly instead of turning into a breach.",
      "## Protect Your Business From Phishing",
      "IT Rapid Support combines email security, multi-factor authentication, security awareness training, and managed detection and response to protect GTA businesses against phishing. Call (289) 582-9930 to strengthen your defences."
    ].join('\n\n'),
    type: "guide",
    date: "June 26, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "8 min read"
  },
  {
    id: "signs-business-outgrown-break-fix-it",
    title: "7 Signs Your Business Has Outgrown Break-Fix IT",
    description: "Still calling someone only when something breaks? Here are seven signs your GTA business is ready to move from break-fix to managed IT.",
    content: [
      "Many growing businesses start with break-fix IT: you call someone when something stops working, and you pay by the hour to fix it. It feels economical at first, but as a business grows, the cracks show. Here are seven signs your GTA business has outgrown break-fix and is ready for managed IT.",
      "## 1. Downtime Is Costing You Real Money",
      "When your team cannot work, the lost productivity quickly outweighs what you save by avoiding a monthly plan. If outages are hurting your revenue or deadlines, reactive IT is costing more than it appears.",
      "## 2. You Only Hear About Problems After They Happen",
      "Break-fix is reactive by definition. There is no one watching your systems, so you find out about failures when they stop you from working. Proactive monitoring catches issues before they cause downtime.",
      "## 3. Security Keeps You Up at Night",
      "If you are not confident your business is protected against ransomware and phishing, that is a sign you need managed security: firewalls, endpoint protection, email security, MFA, and managed detection and response working together, not a patchwork.",
      "## 4. Your IT Costs Are Unpredictable",
      "Hourly billing makes budgeting impossible. A bad month with multiple incidents can blow your budget. Managed IT replaces that with a predictable monthly cost.",
      "## 5. Projects Keep Stalling",
      "When the same person handles both emergencies and projects, projects always lose. A managed provider has the capacity to keep your roadmap moving while still handling day-to-day support.",
      "## 6. You Are Not Sure if Your Backups Work",
      "If no one is regularly testing your backups, you do not actually know you can recover. Managed IT includes tested backup and disaster recovery.",
      "## 7. Your Team Wastes Time on IT",
      "When employees become the unofficial IT department, real work suffers. A proper helpdesk gives them somewhere to turn so they can stay focused.",
      "## Ready to Make the Move?",
      "IT Rapid Support helps GTA businesses move from reactive break-fix to proactive managed IT and cybersecurity. Call (289) 582-9930 to talk about what that transition would look like for you."
    ].join('\n\n'),
    type: "guide",
    date: "June 26, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "7 min read"
  },
  {
    id: "multi-factor-authentication-guide-gta",
    title: "Multi-Factor Authentication: Why Every GTA Business Needs It",
    description: "MFA is one of the simplest, most effective security controls available. Here is how it works and why every GTA business should turn it on.",
    content: [
      "If you could make one change today that dramatically reduces the chance of a business email or account being hacked, multi-factor authentication would be it. MFA is one of the simplest and most effective security controls available, yet many GTA businesses still have not turned it on everywhere. Here is why it matters and how it works.",
      "## What Multi-Factor Authentication Is",
      "MFA requires more than just a password to log in. After entering a password, the user must also provide a second factor, typically a code from an app, a prompt on their phone, or a hardware key. The idea is simple: even if an attacker steals the password, they still cannot get in without the second factor.",
      "## Why Passwords Alone Fail",
      "Passwords get reused, guessed, leaked in breaches, and stolen through phishing. Once an attacker has a valid password, an account with no second factor is wide open. Given how many credentials circulate on the dark web, assuming passwords will eventually leak is the safe bet.",
      "## How Much It Helps",
      "Account takeover is one of the most common ways attackers get into a business. MFA blocks the overwhelming majority of these attacks, because a stolen password on its own becomes useless. For the small amount of friction it adds, the protection is enormous.",
      "## Where to Turn It On",
      "Enable MFA everywhere it is available, starting with the highest-value accounts: email and Microsoft 365, remote access and VPN, banking and finance tools, and administrator accounts. Administrator accounts especially should never be without it.",
      "## Making It Easy for Your Team",
      "Modern MFA can be nearly frictionless, with one-tap approvals and trusted devices that reduce prompts. A managed provider rolls it out smoothly, sets sensible policies, and supports your team so adoption is painless.",
      "## Turn On Strong Authentication",
      "IT Rapid Support helps GTA businesses deploy multi-factor authentication and a complete layered security strategy. Call (289) 582-9930 to lock down your accounts before an attacker tests them."
    ].join('\n\n'),
    type: "guide",
    date: "June 26, 2026",
    author: "IT Rapid Support Team",
    authorTitle: "Managed IT & Cybersecurity, GTA",
    authorImage: "/images/logo.png",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80",
    link: "#",
    readTime: "7 min read"
  }
];

const ResourceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentResource, setCurrentResource] = useState<ResourceItem | null>(null);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the resource with the matching ID
    const resource = allResources.find(resource => resource.id === id);
    if (resource) {
      setCurrentResource(resource);
    }
  }, [id]);

  // If resource not found, show loading or error message
  if (!currentResource) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Loading resource...</h1>
      </div>
    );
  }

  // Get recent resources excluding the current one
  const relatedResources = allResources
    .filter(resource => resource.id !== id && resource.type === currentResource.type)
    .slice(0, 3);

  const getIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="h-5 w-5 text-green-500" />;
      case 'whitepaper':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'webinar':
        return <Video className="h-5 w-5 text-purple-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  // Ensure we have a canonical URL for this specific resource
  const canonicalUrl = `https://itrapidsupport.com/resources/${id}`;
  const absoluteImage = currentResource.image.startsWith('http')
    ? currentResource.image
    : `https://itrapidsupport.com${currentResource.image}`;
  const publishedIso = (() => {
    const d = new Date(currentResource.date);
    return isNaN(d.getTime()) ? undefined : d.toISOString();
  })();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: currentResource.title,
    description: currentResource.description,
    image: absoluteImage,
    ...(publishedIso ? { datePublished: publishedIso, dateModified: publishedIso } : {}),
    author: { '@type': 'Organization', name: 'IT Rapid Support', url: 'https://itrapidsupport.com' },
    publisher: {
      '@type': 'Organization',
      name: 'IT Rapid Support',
      logo: { '@type': 'ImageObject', url: 'https://itrapidsupport.com/images/logo.png' }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://itrapidsupport.com/' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://itrapidsupport.com/resources' },
      { '@type': 'ListItem', position: 3, name: currentResource.title, item: canonicalUrl }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{currentResource.title} | IT Rapid Support Resources</title>
        <meta name="description" content={`${currentResource.description?.substring(0, 155)}...`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${currentResource.title} | IT Rapid Support`} />
        <meta property="og:description" content={currentResource.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={absoluteImage} />
        <meta property="og:site_name" content="IT Rapid Support" />
        {publishedIso && <meta property="article:published_time" content={publishedIso} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentResource.title} />
        <meta name="twitter:description" content={currentResource.description} />
        <meta name="twitter:image" content={absoluteImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      {/* Hero Section */}
      <div className="pt-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link to="/resources" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to all resources
          </Link>
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
              <span className="mr-2">{getIcon(currentResource.type)}</span>
              <span className="capitalize">{currentResource.type}</span>
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{currentResource.title}</h1>
          <div className="flex flex-wrap items-center text-white/80 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentResource.date}</span>
            </div>
            {currentResource.readTime && (
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                <span className="text-sm">{currentResource.readTime}</span>
              </div>
            )}
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentResource.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative -mt-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-t-3xl overflow-hidden shadow-xl">
            <img 
              src={currentResource.image} 
              alt={currentResource.title} 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Resource Content */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              <div className="prose prose-lg max-w-none prose-red">
                {currentResource.content.split('\n\n').map((paragraph: string, index: number) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  } else {
                    return <p key={index} className="mb-4 text-gray-700">{paragraph}</p>;
                  }
                })}
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-700 font-medium mb-3">Share this resource</p>
                <div className="flex space-x-2">
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Internal links for SEO + navigation */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-700 font-medium mb-3">Explore IT Rapid Support</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/services/it-support" className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition-colors">Managed IT Support</Link>
                  <Link to="/services/managed-security" className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition-colors">Managed Security</Link>
                  <Link to="/services/cloud-security" className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition-colors">Cloud Security</Link>
                  <Link to="/it-support/toronto" className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition-colors">IT Support Toronto</Link>
                  <Link to="/it-support/vaughan" className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition-colors">IT Support Vaughan</Link>
                  <Link to="/contact" className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-600 text-white text-sm hover:bg-red-700 transition-colors">Get a Quote</Link>
                </div>
              </div>
            </div>

            {/* Author Section */}
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-slate-50 rounded-2xl p-6 sticky top-24">
                <div className="text-center mb-4">
                  <img 
                    src={currentResource.authorImage} 
                    alt={currentResource.author}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{currentResource.author}</h3>
                  <p className="text-gray-600">{currentResource.authorTitle}</p>
                </div>
                <p className="text-gray-700 text-sm mb-6">
                  {currentResource.author} is a security expert with extensive experience in {currentResource.type === 'guide' ? 'creating security guidelines' : 
                    currentResource.type === 'whitepaper' ? 'security research and analysis' : 
                    'security education and training'}.
                </p>
                <Link 
                  to="/resources" 
                  className="block w-full py-2 px-4 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors"
                >
                  More from this author
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">Related Resources</h2>
            <div className="flex space-x-4">
              <Link to="/resources" className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
                All Resources
              </Link>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                Most Popular
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/resources/${resource.id}`} className="block">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center">
                      {getIcon(resource.type)}
                      <span className="ml-1.5 text-sm text-gray-600 capitalize">{resource.type}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      {resource.date}
                    </div>
                  </div>
                  <Link to={`/resources/${resource.id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                      {resource.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <Link 
                    to={`/resources/${resource.id}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Expert Security Advice?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Our team of cybersecurity experts is ready to help you secure your organization.
              Schedule a free consultation today.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceDetails; 