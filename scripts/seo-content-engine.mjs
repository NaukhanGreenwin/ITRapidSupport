#!/usr/bin/env node
// SEO content engine: generates a new local IT-support city landing page using the
// installed `claude` CLI (no API key needed), then wires it into the data file,
// routes, prerender list, and sitemap. Review-gated: it does NOT deploy.
//
// Usage:
//   node scripts/seo-content-engine.mjs            # build next unbuilt backlog item
//   node scripts/seo-content-engine.mjs --city "Milton" --slug milton
//   node scripts/seo-content-engine.mjs --dry      # generate + print, no file writes
//
// After it runs, review the diff, then deploy with: npm run deploy

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const FILES = {
  locations: path.join(root, 'src/data/locations.ts'),
  app: path.join(root, 'src/App.tsx'),
  prerender: path.join(root, 'prerender-modern.mjs'),
  sitemap: path.join(root, 'public/sitemap.xml'),
  backlog: path.join(__dirname, 'seo-backlog.json'),
};

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true);
};
const dry = !!flag('dry');

function pickTarget() {
  const cli = flag('city');
  if (cli) {
    return {
      type: 'city',
      city: String(cli),
      slug: flag('slug') ? String(flag('slug')) : String(cli).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      schemaLocation: flag('schema') ? String(flag('schema')) : undefined,
    };
  }
  const backlog = JSON.parse(fs.readFileSync(FILES.backlog, 'utf8'));
  const next = backlog.targets.find((t) => !t.built);
  if (!next) throw new Error('Backlog is empty — every target is already built.');
  return next;
}

function slugExists(slug) {
  return fs.readFileSync(FILES.locations, 'utf8').includes(`slug: '${slug}'`);
}

function buildPrompt(target) {
  return `You are an expert local-SEO copywriter for IT Rapid Support, a managed IT services and cybersecurity company headquartered at 7810 Keele St, Vaughan, Ontario, serving businesses across the Greater Toronto Area. Phone: (289) 582-9930.

Generate the data object for a new city landing page for "${target.city}, Ontario".

Return ONLY a single valid JSON object (no markdown, no code fences, no commentary) with EXACTLY these keys:
- "slug": "${target.slug}"
- "city": "${target.city}"
${target.schemaLocation ? `- "schemaLocation": "${target.schemaLocation}"` : '- (omit "schemaLocation")'}
- "title": string, format "IT Support & Managed IT Services in ${target.city}"
- "description": string, 150-160 chars, ends with "Call (289) 582-9930."
- "keywords": comma-separated string of 5-6 local keywords
- "intro": string, 2-3 sentences positioning IT Rapid Support for ${target.city} businesses
- "nearbyAreas": array of 5-6 real neighbourhoods or adjacent communities of ${target.city}
- "highlights": array of exactly 3 objects, each {"title": short string, "description": 1-2 sentences}
- "faqs": array of exactly 3 objects, each {"question": string, "answer": 2-4 sentences}

HARD RULES:
- Only use claims already true on the site: 24/7 helpdesk, managed IT, cybersecurity (managed firewalls, endpoint protection, email security, MFA, managed detection and response), cloud and Microsoft 365, proactive monitoring, data backup and recovery, certified technicians, remote and scheduled/emergency on-site support across the GTA. Do NOT invent new claims, certifications, awards, client names, prices, or specific response-time guarantees beyond "rapid" unless about Brampton-style SLAs (avoid inventing numbers).
- Use real ${target.city} place names for nearbyAreas. If unsure, use widely-known districts only.
- Vary wording from other city pages; do not copy boilerplate verbatim.
- Output must be parseable by JSON.parse with double-quoted keys and strings.`;
}

function generate(target) {
  const prompt = buildPrompt(target);
  // Clear nested-session guard so the engine can run standalone or from a cron.
  const env = { ...process.env };
  delete env.CLAUDECODE;
  delete env.CLAUDE_CODE_SSE_PORT;
  delete env.CLAUDE_CODE_ENTRYPOINT;
  const raw = execSync('claude -p', { input: prompt, encoding: 'utf8', maxBuffer: 1024 * 1024, env });
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error(`Claude did not return JSON:\n${raw.slice(0, 400)}`);
  const obj = JSON.parse(raw.slice(start, end + 1));
  validate(obj, target);
  return obj;
}

function validate(o, target) {
  const req = ['slug', 'city', 'title', 'description', 'keywords', 'intro', 'nearbyAreas', 'highlights', 'faqs'];
  for (const k of req) if (o[k] == null) throw new Error(`Generated object missing "${k}"`);
  if (o.slug !== target.slug) o.slug = target.slug;
  if (!Array.isArray(o.highlights) || o.highlights.length !== 3) throw new Error('highlights must have 3 items');
  if (!Array.isArray(o.faqs) || o.faqs.length !== 3) throw new Error('faqs must have 3 items');
  if (!Array.isArray(o.nearbyAreas) || o.nearbyAreas.length < 4) throw new Error('nearbyAreas needs 4+ items');
}

function toTsLiteral(o) {
  // JSON.stringify yields valid TS object-literal syntax (quoted keys + strings).
  return JSON.stringify(o, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? '  ' + line : '  ' + line))
    .join('\n');
}

function insertBefore(file, marker, text) {
  const src = fs.readFileSync(file, 'utf8');
  const idx = src.indexOf(marker);
  if (idx === -1) throw new Error(`Marker not found in ${path.basename(file)}: ${marker}`);
  const out = src.slice(0, idx) + text + src.slice(idx);
  if (!dry) fs.writeFileSync(file, out);
}

function wireLocations(obj) {
  if (slugExists(obj.slug)) return console.log(`  locations.ts: ${obj.slug} already present, skipping`);
  insertBefore(FILES.locations, '\n];\n\nexport const getLocation', `\n${toTsLiteral(obj)},`);
  console.log('  locations.ts: added entry');
}

function wireApp(slug) {
  const src = fs.readFileSync(FILES.app, 'utf8');
  if (src.includes(`slug="${slug}"`)) return console.log(`  App.tsx: route exists, skipping`);
  const route = `            <Route path="/it-support/${slug}" element={<LocationLanding slug="${slug}" />} />\n`;
  insertBefore(FILES.app, '            <Route path="*" element={<NotFound />} />', route);
  console.log('  App.tsx: added route');
}

function wirePrerender(slug) {
  const src = fs.readFileSync(FILES.prerender, 'utf8');
  if (src.includes(`/it-support/${slug}`)) return console.log('  prerender: exists, skipping');
  const startIdx = src.indexOf('const routes = [');
  const endIdx = src.indexOf('];', startIdx);
  const before = src.slice(0, endIdx).replace(/,?\s*$/, '');
  const out = `${before},\n  '/it-support/${slug}'\n${src.slice(endIdx)}`;
  if (!dry) fs.writeFileSync(FILES.prerender, out);
  console.log('  prerender-modern.mjs: added route');
}

function wireSitemap(slug) {
  const src = fs.readFileSync(FILES.sitemap, 'utf8');
  if (src.includes(`/it-support/${slug}<`)) return console.log('  sitemap: exists, skipping');
  const today = new Date().toISOString().slice(0, 10);
  const block = `  <url>\n    <loc>https://itrapidsupport.com/it-support/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  insertBefore(FILES.sitemap, '\n  <!-- Legal Pages -->', `${block}`);
  console.log('  sitemap.xml: added URL');
}

function markBuilt(target) {
  if (dry || flag('city')) return;
  const backlog = JSON.parse(fs.readFileSync(FILES.backlog, 'utf8'));
  const t = backlog.targets.find((x) => x.slug === target.slug);
  if (t) t.built = true;
  fs.writeFileSync(FILES.backlog, JSON.stringify(backlog, null, 2) + '\n');
}

(async function main() {
  const target = pickTarget();
  console.log(`SEO engine: building "${target.city}" (/it-support/${target.slug})${dry ? ' [DRY RUN]' : ''}`);
  const obj = generate(target);
  if (target.schemaLocation && !obj.schemaLocation) obj.schemaLocation = target.schemaLocation;
  console.log(`Generated: ${obj.title}`);
  if (dry) {
    console.log(JSON.stringify(obj, null, 2));
    return;
  }
  wireLocations(obj);
  wireApp(obj.slug);
  wirePrerender(obj.slug);
  wireSitemap(obj.slug);
  markBuilt(target);
  console.log('\nBuilding (prerender)...');
  execSync('npm run prerender', { cwd: root, stdio: 'inherit' });
  console.log(`\nDone. Review the diff, then deploy with: npm run deploy`);
})().catch((e) => {
  console.error('SEO engine failed:', e.message);
  process.exit(1);
});
