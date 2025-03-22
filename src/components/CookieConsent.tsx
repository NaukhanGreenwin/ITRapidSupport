import React, { useState, useEffect } from 'react';
import { X, Cookie, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allPreferences));
    setIsVisible(false);
  };

  const handleDecline = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(minimalPreferences));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    // Necessary cookies can't be disabled
    if (key === 'necessary') return;
    
    setPreferences({
      ...preferences,
      [key]: !preferences[key]
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">We value your privacy</h3>
              <p className="text-gray-600 text-sm max-w-3xl">
                This website uses cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/cookies" className="text-red-600 hover:underline">Cookie Policy</Link> and <Link to="/privacy" className="text-red-600 hover:underline">Privacy Policy</Link>.
              </p>
              
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center mt-2"
              >
                {showDetails ? "Hide Details" : "Customize Preferences"}
                {showDetails ? 
                  <ChevronUp className="ml-1 h-4 w-4" /> : 
                  <ChevronDown className="ml-1 h-4 w-4" />
                }
              </button>
              
              {showDetails && (
                <div className="mt-4 space-y-3 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Necessary</p>
                      <p className="text-xs text-gray-500">Required for the website to function. Cannot be disabled.</p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={preferences.necessary} 
                        disabled
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Analytics</p>
                      <p className="text-xs text-gray-500">Help us improve our website by collecting anonymous usage data.</p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={preferences.analytics} 
                        onChange={() => togglePreference('analytics')}
                        className="sr-only peer"
                        id="analytics-toggle"
                      />
                      <label htmlFor="analytics-toggle" className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600 cursor-pointer"></label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Marketing</p>
                      <p className="text-xs text-gray-500">Allow us to provide personalized advertisements.</p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={preferences.marketing} 
                        onChange={() => togglePreference('marketing')}
                        className="sr-only peer"
                        id="marketing-toggle"
                      />
                      <label htmlFor="marketing-toggle" className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600 cursor-pointer"></label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button 
              onClick={handleDecline}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 font-medium flex-1 md:flex-none"
            >
              Decline
            </button>
            <button 
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium flex-1 md:flex-none"
            >
              Accept All
            </button>
            <button 
              onClick={handleAccept}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium hidden md:block"
            >
              Accept Selected
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 absolute right-6 top-4 md:static"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 