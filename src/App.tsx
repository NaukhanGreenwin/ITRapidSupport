import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import AnalyticsTracker from './components/AnalyticsTracker';
import ThemeSwitcher from './components/ThemeSwitcher';
import PreloadManager from './components/PreloadManager';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import SecurityAssessment from './pages/SecurityAssessment';
import Resources from './pages/Resources';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';
import Accessibility from './pages/Accessibility';
import ResourceDetails from './pages/ResourceDetails';
import Partners from './pages/Partners';
import Support from './pages/Support';
import CyberIncident from './pages/CyberIncident';
import ManagedSecurity from './pages/ManagedSecurity';
import ThreatDetection from './pages/ThreatDetection';
import CloudSecurity from './pages/CloudSecurity';
import ITSupport from './pages/ITSupport';
import HighNetWorthSecurity from './pages/HighNetWorthSecurity';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);

    // Signal to react-snap that the page is ready to be pre-rendered
    setTimeout(() => {
      if (window.prerenderReady !== undefined) {
        window.prerenderReady = true;
      }
    }, 1000);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnalyticsTracker googleAnalyticsId="G-XXXXXXXXXX" />
        <ThemeSwitcher />
        <PreloadManager />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/security-assessment" element={<SecurityAssessment />} />
            <Route path="/cyber-incident" element={<CyberIncident />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:id" element={<ResourceDetails />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/services/managed-security" element={<ManagedSecurity />} />
            <Route path="/services/threat-detection" element={<ThreatDetection />} />
            <Route path="/services/cloud-security" element={<CloudSecurity />} />
            <Route path="/services/it-support" element={<ITSupport />} />
            <Route path="/services/high-net-worth" element={<HighNetWorthSecurity />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;