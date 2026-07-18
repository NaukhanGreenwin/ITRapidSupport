import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import AnalyticsTracker from './components/AnalyticsTracker';
import ThemeSwitcher from './components/ThemeSwitcher';
import PreloadManager from './components/PreloadManager';
// Homepage stays eager (it is the entry route and must render immediately).
import Home from './pages/Home';
// NotFound stays eager (catch-all route, tiny, avoids a fallback flash on 404).
import NotFound from './pages/NotFound';

// Route-level code splitting: every non-home page loads as its own async chunk
// so the initial JS payload is just the shell + homepage instead of one big bundle.
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Careers = lazy(() => import('./pages/Careers'));
const SecurityAssessment = lazy(() => import('./pages/SecurityAssessment'));
const Resources = lazy(() => import('./pages/Resources'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Accessibility = lazy(() => import('./pages/Accessibility'));
const ResourceDetails = lazy(() => import('./pages/ResourceDetails'));
const Partners = lazy(() => import('./pages/Partners'));
const Support = lazy(() => import('./pages/Support'));
const CyberIncident = lazy(() => import('./pages/CyberIncident'));
const ManagedSecurity = lazy(() => import('./pages/ManagedSecurity'));
const ThreatDetection = lazy(() => import('./pages/ThreatDetection'));
const CloudSecurity = lazy(() => import('./pages/CloudSecurity'));
const ITSupport = lazy(() => import('./pages/ITSupport'));
const HighNetWorthSecurity = lazy(() => import('./pages/HighNetWorthSecurity'));
const LocationLanding = lazy(() => import('./pages/LocationLanding'));
const GTALanding = lazy(() => import('./pages/GTALanding'));
const EmailSpoofCheck = lazy(() => import('./pages/EmailSpoofCheck'));
const LegacyBookOnline = lazy(() => import('./pages/LegacyBookOnline'));
const IndustryLanding = lazy(() => import('./pages/IndustryLanding'));
const ServiceLanding = lazy(() => import('./pages/ServiceLanding'));
const RiskCalculator = lazy(() => import('./pages/RiskCalculator'));
const ManagedITPlans = lazy(() => import('./pages/ManagedITPlans'));

// Neutral, unbranded fallback while a route chunk loads. The data attribute lets
// the prerenderer wait until the real route content has replaced it.
const RouteFallback = () => (
  <div data-prerender-fallback aria-hidden="true" style={{ minHeight: '60vh' }} />
);

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
          <Suspense fallback={<RouteFallback />}>
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
            <Route path="/services/canada-wide-managed-it" element={<ServiceLanding slug="canada-wide-managed-it" />} />
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
            <Route path="/it-support/vancouver" element={<LocationLanding slug="vancouver" />} />
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
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
