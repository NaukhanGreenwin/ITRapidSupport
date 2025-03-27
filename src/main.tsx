import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import i18n configuration
import './i18n/i18n';

// Inform browsers about the criticality of this script
document.currentScript?.setAttribute('fetchpriority', 'high');

// Create the root before we do anything else
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

// Add a preconnect hint for any third-party resources
const preconnect = document.createElement('link');
preconnect.rel = 'preconnect';
preconnect.href = 'https://fonts.gstatic.com';
preconnect.crossOrigin = 'anonymous';
document.head.appendChild(preconnect);

// Render the application
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
