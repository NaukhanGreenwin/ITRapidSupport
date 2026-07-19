// Shared lookup for internal links into /resources/ articles.
// Hrefs use trailing slashes to match the prerendered canonical URLs
// (GitHub Pages 301s the bare path, so linking the slash URL skips a hop).

export interface GuideLink {
  title: string;
  href: string;
}

const guide = (id: string, title: string): GuideLink => ({
  title,
  href: `/resources/${id}/`,
});

export const guideLinks: Record<string, GuideLink> = {
  'managed-it-services-vaughan-guide': guide(
    'managed-it-services-vaughan-guide',
    'Managed IT Services Vaughan: A Local Guide for Growing Businesses'
  ),
  'managed-it-support-cost-toronto': guide(
    'managed-it-support-cost-toronto',
    'How Much Does Managed IT Support Cost in Toronto?'
  ),
  'managed-it-services-vs-in-house': guide(
    'managed-it-services-vs-in-house',
    'Managed IT Services vs Building an In-House IT Team'
  ),
  'small-business-cybersecurity-checklist': guide(
    'small-business-cybersecurity-checklist',
    'Small Business Cybersecurity Checklist'
  ),
  'microsoft-365-migration-guide': guide(
    'microsoft-365-migration-guide',
    'Microsoft 365 Migration Guide'
  ),
  'ransomware-protection-ontario-businesses': guide(
    'ransomware-protection-ontario-businesses',
    'Ransomware Protection for Ontario Businesses'
  ),
  'choosing-managed-it-provider-toronto': guide(
    'choosing-managed-it-provider-toronto',
    'How to Choose a Managed IT Provider in Toronto'
  ),
  'it-support-small-business-gta': guide(
    'it-support-small-business-gta',
    'IT Support for Small Businesses in the GTA'
  ),
  'why-24-7-it-helpdesk-matters': guide(
    'why-24-7-it-helpdesk-matters',
    'Why a 24/7 IT Helpdesk Matters'
  ),
  'cloud-backup-disaster-recovery-guide': guide(
    'cloud-backup-disaster-recovery-guide',
    'Cloud Backup & Disaster Recovery Guide'
  ),
  'stop-phishing-attacks-email-security': guide(
    'stop-phishing-attacks-email-security',
    'How to Stop Phishing Attacks with Email Security'
  ),
  'signs-business-outgrown-break-fix-it': guide(
    'signs-business-outgrown-break-fix-it',
    'Signs Your Business Has Outgrown Break-Fix IT'
  ),
  'co-managed-vs-fully-managed-it': guide(
    'co-managed-vs-fully-managed-it',
    'Co-Managed vs Fully Managed IT'
  ),
  'msp-vs-mssp-managed-it-vs-managed-security': guide(
    'msp-vs-mssp-managed-it-vs-managed-security',
    'MSP vs MSSP: Managed IT vs Managed Security'
  ),
  'break-fix-vs-managed-it-services': guide(
    'break-fix-vs-managed-it-services',
    'Break-Fix vs Managed IT Services'
  ),
  'microsoft-copilot-rollout-security-guide': guide(
    'microsoft-copilot-rollout-security-guide',
    'Microsoft Copilot Rollout Security Guide'
  ),
  'microsoft-365-security-best-practices-2026': guide(
    'microsoft-365-security-best-practices-2026',
    'Microsoft 365 Security Best Practices'
  ),
  'it-support-services-gta-buyers-guide': guide(
    'it-support-services-gta-buyers-guide',
    "IT Support Services in the GTA: A Buyer's Guide"
  ),
  'cyber-insurance-readiness-checklist': guide(
    'cyber-insurance-readiness-checklist',
    'Cyber Insurance Readiness Checklist'
  ),
  'windows-10-end-of-support-gta-businesses': guide(
    'windows-10-end-of-support-gta-businesses',
    'Windows 10 End of Support: What GTA Businesses Should Do'
  ),
  'business-voip-phone-systems-buyers-guide': guide(
    'business-voip-phone-systems-buyers-guide',
    "Business VoIP Phone Systems Buyer's Guide"
  ),
  'disaster-recovery-plan-small-business-ontario': guide(
    'disaster-recovery-plan-small-business-ontario',
    'Disaster Recovery Planning for Ontario Small Businesses'
  ),
  'managed-threat-detection-monitoring-mdr-guide': guide(
    'managed-threat-detection-monitoring-mdr-guide',
    'Managed Threat Detection & MDR Guide'
  ),
};

export const getGuides = (ids: string[]): GuideLink[] =>
  ids.map((id) => guideLinks[id]).filter(Boolean);

// Per-service related guides for /services/<slug> landing pages.
export const serviceGuideMap: Record<string, string[]> = {
  'canada-wide-managed-it': [
    'managed-it-support-cost-toronto',
    'managed-it-services-vs-in-house',
    'why-24-7-it-helpdesk-matters',
  ],
  'it-outsourcing-services': [
    'managed-it-services-vs-in-house',
    'break-fix-vs-managed-it-services',
    'it-support-services-gta-buyers-guide',
  ],
  'microsoft-365-managed-services': [
    'microsoft-365-security-best-practices-2026',
    'microsoft-copilot-rollout-security-guide',
    'microsoft-365-migration-guide',
  ],
  'co-managed-it-services': [
    'co-managed-vs-fully-managed-it',
    'managed-it-services-vs-in-house',
    'it-support-services-gta-buyers-guide',
  ],
  'business-continuity-disaster-recovery': [
    'disaster-recovery-plan-small-business-ontario',
    'cloud-backup-disaster-recovery-guide',
    'ransomware-protection-ontario-businesses',
  ],
  'network-security-services': [
    'small-business-cybersecurity-checklist',
    'msp-vs-mssp-managed-it-vs-managed-security',
    'stop-phishing-attacks-email-security',
  ],
  'microsoft-365-azure-migration': [
    'microsoft-365-migration-guide',
    'microsoft-365-security-best-practices-2026',
    'windows-10-end-of-support-gta-businesses',
  ],
  'network-management': [
    'why-24-7-it-helpdesk-matters',
    'signs-business-outgrown-break-fix-it',
    'business-voip-phone-systems-buyers-guide',
  ],
  'it-helpdesk': [
    'why-24-7-it-helpdesk-matters',
    'it-support-small-business-gta',
    'break-fix-vs-managed-it-services',
  ],
  'vcio-it-strategy': [
    'managed-it-support-cost-toronto',
    'choosing-managed-it-provider-toronto',
    'cyber-insurance-readiness-checklist',
  ],
  'emergency-it-services': [
    'ransomware-protection-ontario-businesses',
    'disaster-recovery-plan-small-business-ontario',
    'why-24-7-it-helpdesk-matters',
  ],
};

// City pages: the York Region cluster leads with the Vaughan local guide.
const yorkRegionSlugs = new Set([
  'vaughan',
  'woodbridge',
  'concord',
  'maple',
  'richmond-hill',
  'aurora',
  'newmarket',
  'king-city',
  'stouffville',
]);

export const getCityGuides = (slug: string): GuideLink[] => {
  if (slug === 'vancouver') {
    return getGuides([
      'managed-it-services-vs-in-house',
      'why-24-7-it-helpdesk-matters',
      'msp-vs-mssp-managed-it-vs-managed-security',
    ]);
  }
  return getGuides([
    yorkRegionSlugs.has(slug)
      ? 'managed-it-services-vaughan-guide'
      : 'managed-it-support-cost-toronto',
    'it-support-services-gta-buyers-guide',
    'choosing-managed-it-provider-toronto',
  ]);
};
