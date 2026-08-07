# HOW THIS SITE DEPLOYS (updated 2026-08-07 — read before deploying)

**The deploy mechanism changed on 2026-08-06. `npm run deploy` no longer publishes anything.**

Pages is now built and published by **`.github/workflows/pages.yml`**, which runs on every
push to `main`. The Pages source is **GitHub Actions**, not "deploy from a branch".

## What this means

- **To deploy: commit and `git push origin main`. That is the whole deploy.**
- **Pushing to the `gh-pages` branch does nothing.** That branch is dead. If you run
  `npm run deploy` / `npx gh-pages -d dist`, it will appear to succeed and the site will
  not change. This is exactly what happened on 2026-08-06, when two correct builds sat on
  `gh-pages` for 26 minutes while the live site served stale content.
- The workflow runs `npm run prerender` itself, so you do not need to build locally to
  deploy — but **do build locally anyway** and run the QA gate before pushing, because the
  workflow will publish whatever you push.
- The workflow refuses to publish a partial site (it fails if fewer than 100 pages
  prerender, or if `dist/CNAME`, `.nojekyll`, `404.html` or `_redirects` are missing).
- `concurrency: cancel-in-progress: false` — deploys queue rather than cancel. A push
  while another deploy is running is safe; it just waits.

## Still true, and still the rule

1. `git pull origin main` before you touch anything. More than one agent works in here.
2. Every new route must be wired into **src/App.tsx** (unless it is under a dynamic route
   like `/resources/:id`) **+ prerender-modern.mjs routes[] + public/sitemap.xml** with a
   trailing slash, or crawlers never see it.
3. Before pushing: `find dist -name index.html | wc -l` must equal the prerender route
   count. Zero duplicate titles, one trailing-slash canonical per page, robots meta on
   every page, descriptions 70-165 chars, one h1 per page, zero "greenwin" strings.
4. After the workflow finishes: curl the changed URLs and confirm 200 + the expected
   title **before** reporting the deploy as done. Propagation is ~40s-2min after the
   action goes green.

## Do not use `git add -A` here

Other agents leave work-in-progress in this tree. Stage the specific paths you changed.
An `add -A` on 2026-08-06 swept another lane's uncommitted tool into a deploy.
