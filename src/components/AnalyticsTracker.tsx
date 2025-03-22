import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsTrackerProps {
  googleAnalyticsId?: string;
}

/**
 * Analytics Tracker component that initializes and manages analytics tracking
 * across the application. Supports Google Analytics GA4 for pageviews and events.
 */
const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ 
  googleAnalyticsId = 'G-KNT7SJ3LYP' // Real GA4 ID from screenshot
}) => {
  const location = useLocation();
  
  // Initialize GA4
  useEffect(() => {
    // Skip in development environment to avoid polluting analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics tracking disabled in development mode');
      return;
    }
    
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    
    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', googleAnalyticsId, {
      send_page_view: false, // We'll track page views manually on route change
      cookie_flags: 'samesite=none;secure',
      anonymize_ip: true
    });
    
    return () => {
      // Clean up
      document.head.removeChild(script);
    };
  }, [googleAnalyticsId]);
  
  // Track page views
  useEffect(() => {
    if (typeof window.gtag !== 'undefined' && process.env.NODE_ENV !== 'development') {
      // Get page metadata for enhanced reporting
      const pageTitle = document.title || 'IT Rapid Support';
      const pageType = location.pathname === '/' ? 'home' : 
                     location.pathname.includes('/services/') ? 'service' : 'page';
                     
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
        page_type: pageType,
        send_to: googleAnalyticsId
      });
      
      // Track engagement time
      setTimeout(() => {
        window.gtag('event', 'engagement', {
          engagement_time_msec: 10000, // 10 seconds
          page_path: location.pathname + location.search
        });
      }, 10000);
    }
  }, [location, googleAnalyticsId]);

  // Track user behavior
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;
    
    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = Math.max(
        document.body.scrollHeight, 
        document.body.offsetHeight, 
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      if (scrollPercentage >= 25 && !window.sessionStorage.getItem('scroll_25')) {
        trackEvent('scroll_depth', { depth: '25%' });
        window.sessionStorage.setItem('scroll_25', 'true');
      }
      if (scrollPercentage >= 50 && !window.sessionStorage.getItem('scroll_50')) {
        trackEvent('scroll_depth', { depth: '50%' });
        window.sessionStorage.setItem('scroll_50', 'true');
      }
      if (scrollPercentage >= 75 && !window.sessionStorage.getItem('scroll_75')) {
        trackEvent('scroll_depth', { depth: '75%' });
        window.sessionStorage.setItem('scroll_75', 'true');
      }
      if (scrollPercentage >= 90 && !window.sessionStorage.getItem('scroll_90')) {
        trackEvent('scroll_depth', { depth: '90%' });
        window.sessionStorage.setItem('scroll_90', 'true');
      }
    };
    
    // Track time on page
    const startTime = new Date().getTime();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((new Date().getTime() - startTime) / 1000);
      trackEvent('time_on_page', { 
        seconds: timeSpent,
        page: location.pathname
      });
    };
    
    window.addEventListener('scroll', trackScrollDepth);
    window.addEventListener('beforeunload', trackTimeOnPage);
    
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, [location.pathname]);
  
  return null; // This component doesn't render anything
};

// Utility functions for tracking specific events
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window.gtag !== 'undefined' && process.env.NODE_ENV !== 'development') {
    window.gtag('event', eventName, eventParams);
    console.log(`Event tracked: ${eventName}`, eventParams);
  }
};

// Track form submissions (conversions)
export const trackFormSubmission = (formName: string, formData: Record<string, any> = {}) => {
  trackEvent('form_submission', {
    conversion: true,
    form_name: formName,
    ...formData
  });
};

// Track clicks on key CTA buttons
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    cta_url: window.location.href
  });
};

// Track security assessment completion
export const trackAssessmentComplete = (score: number, recommendations: string[]) => {
  trackEvent('assessment_complete', {
    conversion: true,
    score: score,
    recommendations_count: recommendations.length,
    severity: score < 30 ? 'high' : score < 70 ? 'medium' : 'low'
  });
};

// Track PDF downloads
export const trackPDFDownload = (pdfName: string, metadata: Record<string, any> = {}) => {
  trackEvent('file_download', {
    conversion: true,
    file_name: pdfName,
    file_type: 'pdf',
    ...metadata
  });
};

// Track outbound links
export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('click', {
    link_domain: new URL(url).hostname,
    link_url: url,
    link_text: linkText,
    outbound: true
  });
};

// Track site search
export const trackSiteSearch = (query: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount
  });
};

// Ecommerce tracking for service page views
export const trackServiceView = (serviceId: string, serviceName: string, category: string) => {
  trackEvent('view_item', {
    items: [{
      item_id: serviceId,
      item_name: serviceName,
      item_category: category,
      item_variant: 'standard',
      price: 0 // Can update if services have visible pricing
    }]
  });
};

export default AnalyticsTracker; 