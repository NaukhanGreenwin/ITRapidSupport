import React from 'react';
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
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-20">
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