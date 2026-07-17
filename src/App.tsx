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
import LocationLanding from './pages/LocationLanding';
import GTALanding from './pages/GTALanding';
import EmailSpoofCheck from './pages/EmailSpoofCheck';
import LegacyBookOnline from './pages/LegacyBookOnline';
import IndustryLanding from './pages/IndustryLanding';
import ServiceLanding from './pages/ServiceLanding';
import RiskCalculator from './pages/RiskCalculator';
import ManagedITPlans from './pages/ManagedITPlans';

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
        <AnalyticsTracker googleAnalyticsId="G-KNT7SJ3LYP" />
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
            <Route path="/book-online" element={<LegacyBookOnline />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/security-assessment" element={<SecurityAssessment />} />
            <Route path="/it-risk-calculator" element={<RiskCalculator />} />
            <Route path="/managed-it-plans" element={<ManagedITPlans />} />
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
            <Route path="/services/it-outsourcing-services" element={<ServiceLanding slug="it-outsourcing-services" />} />
            <Route path="/services/microsoft-365-managed-services" element={<ServiceLanding slug="microsoft-365-managed-services" />} />
            <Route path="/services/co-managed-it-services" element={<ServiceLanding slug="co-managed-it-services" />} />
            <Route path="/services/business-continuity-disaster-recovery" element={<ServiceLanding slug="business-continuity-disaster-recovery" />} />
            <Route path="/services/network-security-services" element={<ServiceLanding slug="network-security-services" />} />
            <Route path="/services/microsoft-365-azure-migration" element={<ServiceLanding slug="microsoft-365-azure-migration" />} />
            <Route path="/services/network-management" element={<ServiceLanding slug="network-management" />} />
            <Route path="/services/it-helpdesk" element={<ServiceLanding slug="it-helpdesk" />} />
            <Route path="/services/vcio-it-strategy" element={<ServiceLanding slug="vcio-it-strategy" />} />
            <Route path="/services/emergency-it-services" element={<ServiceLanding slug="emergency-it-services" />} />
            <Route path="/it-support/gta" element={<GTALanding />} />
            <Route path="/tools/email-spoof-check" element={<EmailSpoofCheck />} />
            <Route path="/it-support/toronto" element={<LocationLanding slug="toronto" />} />
            <Route path="/it-support/vaughan" element={<LocationLanding slug="vaughan" />} />
            <Route path="/it-support/mississauga" element={<LocationLanding slug="mississauga" />} />
            <Route path="/it-support/brampton" element={<LocationLanding slug="brampton" />} />
            <Route path="/it-support/oakville" element={<LocationLanding slug="oakville" />} />
            <Route path="/it-support/markham" element={<LocationLanding slug="markham" />} />
            <Route path="/it-support/richmond-hill" element={<LocationLanding slug="richmond-hill" />} />
            <Route path="/it-support/burlington" element={<LocationLanding slug="burlington" />} />
            <Route path="/it-support/north-york" element={<LocationLanding slug="north-york" />} />
            <Route path="/it-support/hamilton" element={<LocationLanding slug="hamilton" />} />
            <Route path="/it-support/milton" element={<LocationLanding slug="milton" />} />
            <Route path="/it-support/etobicoke" element={<LocationLanding slug="etobicoke" />} />
            <Route path="/it-support/scarborough" element={<LocationLanding slug="scarborough" />} />
            <Route path="/it-support/newmarket" element={<LocationLanding slug="newmarket" />} />
            <Route path="/it-support/aurora" element={<LocationLanding slug="aurora" />} />
            <Route path="/it-support/pickering" element={<LocationLanding slug="pickering" />} />
            <Route path="/it-support/ajax" element={<LocationLanding slug="ajax" />} />
            <Route path="/it-support/whitby" element={<LocationLanding slug="whitby" />} />
            <Route path="/it-support/oshawa" element={<LocationLanding slug="oshawa" />} />
            <Route path="/it-support/king-city" element={<LocationLanding slug="king-city" />} />
            <Route path="/it-support/caledon" element={<LocationLanding slug="caledon" />} />
            <Route path="/it-support/georgetown" element={<LocationLanding slug="georgetown" />} />
            <Route path="/it-support/woodbridge" element={<LocationLanding slug="woodbridge" />} />
            <Route path="/it-support/concord" element={<LocationLanding slug="concord" />} />
            <Route path="/it-support/maple" element={<LocationLanding slug="maple" />} />
            <Route path="/it-support/stouffville" element={<LocationLanding slug="stouffville" />} />
            <Route path="/it-support/bradford" element={<LocationLanding slug="bradford" />} />
            <Route path="/industries/legal" element={<IndustryLanding slug="legal" />} />
            <Route path="/industries/accounting" element={<IndustryLanding slug="accounting" />} />
            <Route path="/industries/healthcare" element={<IndustryLanding slug="healthcare" />} />
            <Route path="/industries/real-estate" element={<IndustryLanding slug="real-estate" />} />
            <Route path="/industries/manufacturing" element={<IndustryLanding slug="manufacturing" />} />
            <Route path="/industries/construction" element={<IndustryLanding slug="construction" />} />
            <Route path="/industries/professional-services" element={<IndustryLanding slug="professional-services" />} />
            <Route path="/industries/financial-services" element={<IndustryLanding slug="financial-services" />} />
            <Route path="/industries/dental" element={<IndustryLanding slug="dental" />} />
            <Route path="/industries/nonprofit" element={<IndustryLanding slug="nonprofit" />} />
            <Route path="/industries/education" element={<IndustryLanding slug="education" />} />
            <Route path="/industries/property-management" element={<IndustryLanding slug="property-management" />} />
            <Route path="/industries/retail" element={<IndustryLanding slug="retail" />} />
            <Route path="/industries/hospitality" element={<IndustryLanding slug="hospitality" />} />
            <Route path="/industries/logistics-warehousing" element={<IndustryLanding slug="logistics-warehousing" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
