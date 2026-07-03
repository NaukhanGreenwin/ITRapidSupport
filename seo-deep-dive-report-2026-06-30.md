# ITRS SEO Deep-Dive Audit — Report for NK

## TL;DR (read this first)

- 🚨 **The live site is currently broken.** Every page except the homepage returns a hard 404 error right now. This is not a ranking problem — it's why nothing is ranking.
- We verified itrapidsupport.com is **not in Google's top 10** for any of the 3 target keywords (managed IT support Toronto / IT support Vaughan / cybersecurity services GTA) — CG Technologies, Group 4 Networks, Buchanan Technologies, Nucleus Networks currently own that space.
- Good news: the content strategy itself is sound and arguably deeper than competitors (60+ pages built). The problem is delivery, not content.
- The IT Risk Calculator lead-magnet is **already built and live** (once the site is fixed) — no need to build a new tool.
- Google's index still has some stale pages from an old version of the site that should be cleaned up once things are working again.

---

## 1. 🚨 P0 — Site-wide 404 bug (fix this immediately, before anything else)

I tested every major page on the live site directly (HTTP requests, not a browser render):

| Page | Status |
|---|---|
| itrapidsupport.com/ | 200 OK |
| /about, /services, /contact, /faq, /careers, /solutions, /support, /it-risk-calculator, /managed-it-plans, /privacy... | **404** |
| all 22 city pages (/it-support/toronto, /vaughan, etc.) | **404** |
| all 8 industry pages (/industries/legal, etc.) | **404** |
| all 9 service pages | **404** |
| all 17 blog articles | **404** |

**Root cause (confirmed by inspecting the GitHub Pages branch directly):** the site's live published version was overwritten on **2026-06-29 at 10:27am** with an incomplete build — it only contains the homepage plus a handful of legacy asset files. All the prerendered sub-pages (the ones from all the recent SEO work) are simply missing from what's actually published. This deploy is not logged in the project's SEO notes, so it likely happened from a stale/partial build being pushed by accident.

**Impact:** Since that timestamp (~38 hours as of this audit), literally every piece of content work done in the last week — 22 city pages, 8 industry pages, 9 service pages, 17 blog posts, the risk calculator, the pricing page — has been invisible to Google, invisible to anyone clicking a link from search results or social, and returning "page not found" to real visitors. Google had just been asked to re-crawl the homepage right before this happened, so there's a real risk pages that were freshly indexed are now getting dropped.

**Fix (needs someone to run it — I did not make changes per my read-only scope):**
```
cd tmp_itrs && npm run deploy
```
This re-runs the prerender step and republishes everything correctly. **This should happen today.** After it's done, spot-check a handful of URLs return HTTP 200 (not just visually load in a browser) — that check currently doesn't exist anywhere in the deploy process, which is exactly how this went unnoticed for a day and a half. Worth adding a simple "curl 5 known URLs and confirm 200" step at the end of the deploy script so this can't silently happen again.

---

## 2. Competitor gap analysis (once the 404 bug is fixed, these become relevant)

Live search results for the 3 target terms are dominated by: **CG Technologies** (est. 1996, Clutch Verified, strong review volume), **Group 4 Networks**, **Buchanan Technologies**, **Nucleus Networks**, **Tenecom**. ITRS doesn't appear on page 1 for any of them currently.

What they have that ITRS still doesn't:
- **Review volume** — this remains the single biggest gap. Competitors show up with dozens of visible Google reviews; ITRS's GBP is new. (You've said not to keep raising the review-ask campaign — noted, not repeating it here, just naming it as the fact of the gap.)
- **Longevity signals** — most rank on 20-30 years in business; ITRS is newer, can't manufacture this, but case studies/team depth partially offset it.
- **Clutch Verified badges / directory rankings** — ITRS profiles are submitted but still in "pending review" status on most directories (per the citations pack). Nothing to do here but wait, except where NK action is needed (see §7).

## 3. Content gaps (real ones, not generic advice)

Content depth is actually **not** the weak point anymore — it's genuinely comparable to or deeper than competitors on paper. Real gaps that remain:
- No dedicated pages for **Woodbridge or Concord** — both are named in the homepage copy as service areas but have no landing page of their own (every other named city does).
- Internal cross-linking between the 60+ pages is thin. Blog articles already have a "related articles" pattern; city/industry/service pages don't cross-link to each other (e.g. the Legal industry page doesn't link to the Toronto city page or the Microsoft 365 service page). This is a low-effort fix once the site is redeployed and gives real internal-link-equity gains.
- No content targeting **compliance-driven searches** (PIPEDA compliance IT, cyber insurance compliance) despite the site already referencing PHIPA/PIPEDA/PCI-DSS on industry pages — a short blog post here is cheap and relevant.

## 4. E-E-A-T / trust signals

- Blog articles use a generic "IT Rapid Support Team" byline — fine as a stopgap, but a real named author (even just "written by Nauman Khan, Founder") with a one-line bio would help.
- There's an unused `CaseStudies.tsx` page already built in the codebase but **not wired into the site** (no route, not in the sitemap). If you can supply 2-3 real client outcomes (even anonymized — "a 40-person law firm cut ticket resolution time by X"), this is a near-zero-effort page to finish and ship, and it's exactly the kind of proof competitors lean on.
- Google's index currently has a stale cached page (`/about/`, `/meettheteam`) with old copy and generic client-quote language from an earlier version of the site — worth a Search Console "remove outdated content" request once the real site is confirmed reachable again, so searchers don't land on old content.

## 5. Off-page / backlinks

Directory citation work is well underway (per the citations pack — Clutch, Cloudtango, IT Companies Network, YP.ca, HotFrog, Opendi all submitted). Beyond that:
- **Microsoft Partner directory listing** — if ITRS holds any Microsoft partner status, getting listed in Microsoft's own partner-finder is a high-trust backlink competitors like Nucleus lean on.
- **Local sponsorship / chamber involvement** — Vaughan Chamber and Toronto Board of Trade are already flagged as needing your budget approval (see §7); these are real, relevant local backlinks, not just SEO filler.
- **Guest posts** on IT/business publications (e.g. IT World Canada, local business journals) — higher effort, but a legitimate backlink competitors don't obviously have either, could be a differentiator.

## 6. Conversion / lead capture

The IT Risk Calculator is already built and live at `/it-risk-calculator` (this was mistakenly still listed as a "backlog idea" in the project notes — it's done). Once the 404 bug is fixed, this is the right lever — no need to build anything new here. Just make sure it's promoted on GBP and LinkedIn once it's actually reachable.

---

## Needs your input/decision

1. **Approve the redeploy** (Section 1) — needed today, this is the blocker for everything else.
2. **Real client testimonials/outcomes** for the unused case-studies page (even 2-3 short ones).
3. **Apple ID** for Apple Business Connect signup (blocked, needs you or a designated Apple ID).
4. **Yelp claim** — needs you to personally solve a CAPTCHA to finish claiming the existing listing (~2 min, tool-blocked otherwise).
5. **GoodFirms logo upload** — tool can't attach files right now, needs manual completion.
6. **Vaughan Chamber / Toronto Board of Trade** — both require paid membership before listing; needs budget go-ahead.
7. **Clutch Verified upgrade** ($499/yr) — optional, your call.

No changes were made to the live site or repo during this audit — analysis only, as requested.
