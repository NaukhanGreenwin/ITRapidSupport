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
  // Create canonical URL based on current path
  const canonicalUrl = `https://itrapidsupport.com${location.pathname === '/' ? '' : location.pathname}`;
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
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