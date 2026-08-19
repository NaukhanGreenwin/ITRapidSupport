#!/usr/bin/env python3
"""Create meta-refresh + canonical redirect stubs for legacy (pre-2025 Wix) URLs
that are archived as real pages, still surface in live search results, and today
return a hard 404. Matches the existing stub pattern at
public/resources/managed-it-services-vaughan-guide/index.html (commit aee228ff).

Stubs are deliberately NOT added to sitemap.xml or prerender routes -- they are
redirects, not pages.
"""
import os, re, sys

# legacy path -> (target path, stub <title>)
MAP = {
    "/aboutus":                       ("/about/", "About IT Rapid Support"),
    "/meettheteam":                   ("/about/", "Meet the Team"),
    "/team":                          ("/about/", "Our Team"),
    "/why-choose-us":                 ("/about/", "Why Choose IT Rapid Support"),
    "/community-involvement":         ("/about/", "Community Involvement"),
    "/contactus":                     ("/contact/", "Contact IT Rapid Support"),
    "/businessservices":              ("/services/", "Business ICT Consulting"),
    "/managedservices":               ("/services/it-support/", "Managed Services"),
    "/managed-it-services":           ("/services/it-support/", "Managed IT Services"),
    "/cloud-solutions":               ("/services/cloud-security/", "Cloud Solutions"),
    "/cloud-based-security":          ("/services/cloud-security/", "Cloud Based Security"),
    "/cloud-based-backups":           ("/services/business-continuity-disaster-recovery/", "Cloud Based Backups"),
    "/video-surveillance":            ("/services/microsoft-365-managed-services/", "Microsoft Office 365"),
    "/homeservices":                  ("/services/high-net-worth/", "Home ICT Services"),
    "/support-consulting":            ("/support/", "Support and Consulting"),
    "/our-partners":                  ("/partners/", "Our Partners"),
    "/privacy-policy":                ("/privacy/", "Privacy Policy (Former URL)"),
    "/copy-of-managed-it-services-2": ("/privacy/", "Privacy Policy (Archived URL)"),
    "/terms-conditions":              ("/terms/", "Terms and Conditions"),
    "/bookonline":                    ("/contact/", "Book Online"),
    "/bookings-checkout":             ("/contact/", "Bookings Checkout"),
    "/bookings-checkout/remote-it-support": ("/contact/", "Remote IT Support Booking"),
    "/booking-calendar/remote-it-support":  ("/contact/", "Remote IT Support Calendar"),
    "/service-page/remote-it-support":      ("/contact/", "Remote IT Support"),
}

BASE = "https://itrapidsupport.com"
TPL = """<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<title>{title} | IT Rapid Support</title>
<meta http-equiv="refresh" content="0;url={base}{target}">
<link rel="canonical" href="{base}{target}">
</head>
<body>
<p>This page has moved. See <a href="{base}{target}">{anchor}</a>.</p>
<script>window.location.replace('{base}{target}');</script>
</body>
</html>
"""

def main():
    root = os.path.abspath(os.path.dirname(__file__) if False else ".")
    pub = os.path.join(root, "public")
    assert os.path.isdir(pub), "run from repo root"

    # guard: never shadow a real prerendered route
    routes = set()
    src = open(os.path.join(root, "prerender-modern.mjs")).read()
    m = re.search(r"routes\s*=\s*\[(.*?)\]", src, re.S)
    for r in re.findall(r"['\"]([^'\"]+)['\"]", m.group(1)):
        routes.add("/" + r.strip("/"))

    made, skipped = [], []
    for legacy, (target, title) in sorted(MAP.items()):
        norm = "/" + legacy.strip("/")
        if norm in routes:
            skipped.append((legacy, "collides with real route"))
            continue
        d = os.path.join(pub, legacy.strip("/"))
        idx = os.path.join(d, "index.html")
        if os.path.exists(idx):
            skipped.append((legacy, "stub already exists"))
            continue
        anchor = title[0].lower() + title[1:] if title[:1].isupper() and " " in title else title
        os.makedirs(d, exist_ok=True)
        with open(idx, "w") as f:
            f.write(TPL.format(title=title, base=BASE, target=target, anchor=anchor))
        made.append((legacy, target))

    for l, t in made:
        print(f"  CREATED  {l:40s} -> {t}")
    for l, why in skipped:
        print(f"  SKIPPED  {l:40s} ({why})")
    print(f"\n{len(made)} stubs created, {len(skipped)} skipped")

main()
