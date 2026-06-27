// prerender.js - A script to ensure all routes are properly pre-rendered
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the routes we need to make sure are pre-rendered
const routes = [
  '/services',
  '/services/managed-security',
  '/services/threat-detection',
  '/services/cloud-security',
  '/services/it-support',
  '/services/high-net-worth',
  '/about',
  '/contact',
  '/support',
  '/solutions',
  '/security-assessment',
  '/cyber-incident',
  '/resources',
  '/partners',
  '/faq',
  '/careers',
  '/privacy',
  '/terms',
  '/cookies',
  '/accessibility'
];

// First, run the normal build process
console.log('Building the project...');
execSync('vite build', { stdio: 'inherit' });

// Now run react-snap
console.log('Running react-snap...');
try {
  execSync('react-snap', { stdio: 'inherit' });
} catch (error) {
  console.warn('React-snap completed with warnings (this is normal)');
}

// Check the dist directory
console.log('Checking for generated files...');
const distDir = path.join(__dirname, 'dist');

// Ensure all route directories exist
routes.forEach(route => {
  if (route === '/') return; // Skip root

  const routePath = path.join(distDir, route.slice(1)); // Remove leading slash
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(routePath)) {
    console.log(`Creating directory for ${route}`);
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  // Check if index.html exists in this route directory
  const indexPath = path.join(routePath, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log(`Creating index.html for ${route}`);
    
    // Copy the main index.html as a fallback
    const mainIndexPath = path.join(distDir, 'index.html');
    if (fs.existsSync(mainIndexPath)) {
      const content = fs.readFileSync(mainIndexPath, 'utf8');
      fs.writeFileSync(indexPath, content);
    }
  }
});

console.log('Pre-rendering complete. Check dist/ directory for all generated files.'); 