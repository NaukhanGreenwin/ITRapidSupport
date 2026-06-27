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
  '/privacy', '/terms', '/cookies', '/accessibility',
  '/it-support/toronto', '/it-support/vaughan',
  '/it-support/mississauga', '/it-support/brampton'
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
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  let ok = 0;
  for (const route of routes) {
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
    let html = await page.content();
    html = '<!DOCTYPE html>\n' + html.replace(/^<!DOCTYPE html>/i, '').trim();
    const outDir = route === '/' ? distDir : path.join(distDir, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
    console.log(`prerendered ${route} -> ${kb} KB`);
    ok++;
    await page.close();
  }
  await browser.close();
  server.close();
  console.log(`done: ${ok}/${routes.length} routes`);
}

main().catch((e) => { console.error(e); process.exit(1); });
