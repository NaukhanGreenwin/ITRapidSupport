import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import BackToTop from './BackToTop';
import PageTransition from './PageTransition';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // Create canonical URL based on current path. GitHub Pages serves every route
  // as a directory and 301s the bare path to the trailing-slash form, so the
  // canonical must use the trailing slash (extensionless paths only) or it points
  // at a redirect. This is the global fallback; page-level SEO canonicals override it.
  const normalizedPath = location.pathname === '/'
    ? ''
    : (/\.[a-zA-Z0-9]+$/.test(location.pathname) || location.pathname.endsWith('/')
        ? location.pathname
        : `${location.pathname}/`);
  const canonicalUrl = `https://itrapidsupport.com${normalizedPath}`;
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        {/* Global indexability fallback. Helmet takes ownership of head meta on mount and
            drops the static index.html robots tag, so pages that use a raw Helmet instead
            of the SEO component shipped no robots meta at all. SEO.tsx renders deeper and
            overrides this by name (including its noindex case). */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-20 pb-0">
        <AnimatePresence mode="wait">
          <PageTransition>
            {children}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  );
};

export default Layout; 