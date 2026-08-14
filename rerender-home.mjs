// One-off: re-prerender only '/' using the same logic as prerender-modern.mjs
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const PORT = 45998;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json'
};

// Serve the ORIGINAL SPA shell for '/', not the (possibly bad) prerendered index.
const shell = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(distDir, urlPath);
  if (urlPath !== '/' && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(shell);
});

const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function main() {
  await new Promise((r) => server.listen(PORT, r));
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  page.on('console', (m) => { if (m.type() === 'error') console.log('console error:', m.text()); });
  page.on('pageerror', (e) => console.log('page error:', e.message));
  await page.setUserAgent('Mozilla/5.0 (compatible; ReactSnap)');
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForFunction(
    'document.getElementById("root") && document.getElementById("root").children.length > 0',
    { timeout: 25000 }
  );
  await page.waitForFunction('!document.querySelector("[data-prerender-fallback]")', { timeout: 20000 }).catch(() => {});
  await page.waitForFunction('window.prerenderReady === true', { timeout: 15000 }).catch(() => {});
  await new Promise((r) => setTimeout(r, 1800));
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
  fs.writeFileSync(path.join(distDir, 'index.html'), html);
  console.log(`re-prerendered / -> ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB`);
  await browser.close();
  server.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
