// prerender-modern.mjs - Static prerender using puppeteer-core + system Chrome.
// Renders each route from dist/ and writes prerendered index.html files so
// crawlers and social/AI bots see real content instead of an empty SPA shell.
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const PORT = 45999;

const routes = [
  '/', '/services', '/services/managed-security', '/services/threat-detection',
  '/services/cloud-security', '/services/it-support', '/services/high-net-worth',
  '/about', '/contact', '/support', '/solutions', '/security-assessment',
  '/cyber-incident', '/resources', '/partners', '/faq', '/careers',
  '/it-risk-calculator',
  '/managed-it-plans',
  '/privacy', '/terms', '/cookies', '/accessibility',
  '/it-support/gta',
  '/it-support/toronto', '/it-support/vaughan',
  '/it-support/mississauga', '/it-support/brampton',
  '/it-support/oakville', '/it-support/markham',
  '/it-support/richmond-hill', '/it-support/burlington',
  '/it-support/north-york', '/it-support/hamilton',
  '/it-support/milton',
  '/it-support/etobicoke',
  '/it-support/scarborough',
  '/it-support/newmarket',
  '/it-support/aurora',
  '/it-support/pickering',
  '/it-support/ajax',
  '/it-support/whitby',
  '/it-support/oshawa',
  '/it-support/king-city',
  '/it-support/caledon',
  '/it-support/georgetown',
  '/industries/legal',
  '/industries/accounting',
  '/industries/healthcare',
  '/industries/real-estate',
  '/industries/manufacturing',
  '/industries/construction',
  '/industries/professional-services',
  '/industries/financial-services',
  '/industries/dental',
  '/industries/nonprofit',
  '/services/microsoft-365-azure-migration',
  '/services/network-management',
  '/services/it-helpdesk',
  '/services/vcio-it-strategy',
  '/resources/managed-it-support-cost-toronto',
  '/resources/managed-it-services-vs-in-house',
  '/resources/small-business-cybersecurity-checklist',
  '/resources/microsoft-365-migration-guide',
  '/resources/ransomware-protection-ontario-businesses',
  '/resources/choosing-managed-it-provider-toronto',
  '/resources/it-support-small-business-gta',
  '/resources/why-24-7-it-helpdesk-matters',
  '/resources/cloud-backup-disaster-recovery-guide',
  '/resources/stop-phishing-attacks-email-security',
  '/resources/signs-business-outgrown-break-fix-it',
  '/resources/multi-factor-authentication-guide-gta',
  '/resources/co-managed-vs-fully-managed-it',
  '/resources/msp-vs-mssp-managed-it-vs-managed-security',
  '/resources/break-fix-vs-managed-it-services',
  '/resources/microsoft-copilot-rollout-security-guide',
  '/resources/microsoft-365-security-best-practices-2026',
  '/resources/it-support-services-gta-buyers-guide',
  '/resources/pipeda-compliance-it-checklist-ontario',
  '/resources/cyber-insurance-readiness-checklist',
  '/resources/quebec-law-25-it-readiness-ontario-businesses'
];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json'
};

// Static server with SPA fallback to index.html for unknown routes.
const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(distDir, urlPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(distDir, 'index.html')).pipe(res);
});

const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function main() {
  await new Promise((r) => server.listen(PORT, r));
  const launch = () => puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  let browser = await launch();
  let ok = 0;
  const renderRoute = async (route) => {
    const page = await browser.newPage();
    // Identify as ReactSnap so the app renders (not hydrates) during capture.
    await page.setUserAgent('Mozilla/5.0 (compatible; ReactSnap)');
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    // Wait for the app to signal readiness, or for #root to have content.
    await page.waitForFunction(
      'window.prerenderReady === true || (document.getElementById("root") && document.getElementById("root").children.length > 0)',
      { timeout: 25000 }
    ).catch(() => {});
    // Small settle delay for async content/images to attach.
    await new Promise((r) => setTimeout(r, 1200));
    // Remove static head tags from the SPA shell when react-helmet (data-rh)
    // rendered a page-specific equivalent — prevents duplicate/conflicting
    // canonicals, descriptions and og tags in the prerendered HTML.
    await page.evaluate(() => {
      const head = document.head;
      const dedupe = (sel) => {
        if (head.querySelector(`${sel}[data-rh]`)) {
          head.querySelectorAll(`${sel}:not([data-rh])`).forEach((el) => el.remove());
        }
      };
      dedupe('link[rel="canonical"]');
      ['description', 'title', 'keywords', 'robots'].forEach((n) => dedupe(`meta[name="${n}"]`));
      ['og:', 'twitter:'].forEach((prefix) => {
        if (head.querySelector(`meta[property^="${prefix}"][data-rh], meta[name^="${prefix}"][data-rh]`)) {
          head
            .querySelectorAll(`meta[property^="${prefix}"]:not([data-rh]), meta[name^="${prefix}"]:not([data-rh])`)
            .forEach((el) => el.remove());
        }
      });
    });
    let html = await page.content();
    html = '<!DOCTYPE html>\n' + html.replace(/^<!DOCTYPE html>/i, '').trim();
    const outDir = route === '/' ? distDir : path.join(distDir, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
    console.log(`prerendered ${route} -> ${kb} KB`);
    await page.close();
  };
  for (const route of routes) {
    // Chrome occasionally dies mid-run; relaunch the browser and retry once.
    try {
      await renderRoute(route);
    } catch (e) {
      console.warn(`retrying ${route} after error: ${e.message}`);
      try { await browser.close(); } catch {}
      browser = await launch();
      await renderRoute(route);
    }
    ok++;
  }
  await browser.close();
  server.close();
  console.log(`done: ${ok}/${routes.length} routes`);
}

main().catch((e) => { console.error(e); process.exit(1); });
