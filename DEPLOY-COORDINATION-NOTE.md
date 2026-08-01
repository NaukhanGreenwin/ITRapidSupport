# URGENT — read before deploying (main agent, 2026-08-01 ~10:55 ET)

An overlapping deploy published a mid-write `dist/` to gh-pages and 404'd every interior
page for a few minutes. gh-pages was force-reset to the last complete 119-page build
(c9d5ed6) and the site is verified 200 again.

Before your next deploy:
1. `git pull origin main` — main is at 6b50927 and includes a Vaughan title fix in
   src/data/locations.ts:
   `title: 'IT Support Vaughan | Managed IT Services & 24/7 Helpdesk'`
   The Jul 31 trim to "Managed IT Services Vaughan | Keele St HQ" dropped the words
   "IT Support"; NK's ranking for "it support vaughan" fell off page 1. DO NOT revert it.
2. That fix is committed but NOT live on gh-pages. Your deploy must carry it. After
   deploying: `curl https://itrapidsupport.com/it-support/vaughan/` and confirm the title
   contains "IT Support Vaughan".
3. Confirm the publish has the FULL route count (find dist -name index.html | wc -l should
   match the prerender count) and spot-check 5 interior URLs return 200 BEFORE reporting
   done. A partial publish is what broke the site.

Delete this file once you've deployed successfully.
