import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add the prerenderReady declaration for TypeScript
declare global {
  interface Window {
    prerenderReady?: boolean;
  }
}

// Inform browsers about the criticality of this script
document.currentScript?.setAttribute('fetchpriority', 'high');

// Create the root before we do anything else
const rootElement = document.getElementById('root')!;

// (Removed a runtime preconnect to fonts.gstatic.com — Inter is self-hosted now,
// so that hint only cost a speculative DNS+TLS handshake to a host we never hit.)

// Check if the app is being pre-rendered by react-snap
const isPrerendering = 
  navigator.userAgent.includes('ReactSnap') || 
  window.location.href.includes('?_escaped_fragment_=');

// Create a function for rendering the app to avoid duplication
const renderApp = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

// Support both rendering and hydration (for pre-rendered content)
if (rootElement.hasChildNodes() && !isPrerendering) {
  // For SSR/pre-rendered sites, we need to hydrate
  hydrateRoot(rootElement, renderApp());
} else {
  // For normal rendering in dev or if no SSR
  createRoot(rootElement).render(renderApp());
}

// For react-snap
if (isPrerendering) {
  // Initialize prerender flag
  window.prerenderReady = false;
}
