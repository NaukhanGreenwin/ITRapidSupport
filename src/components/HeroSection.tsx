import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Globe, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const HeroSection: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simplified Intersection Observer with fewer thresholds for better performance
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.5, 1], // Reduced number of thresholds
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const ratio = entry.intersectionRatio;
          // Update content opacity based on intersection ratio
          if (heroRef.current) {
            const contentElements = heroRef.current.querySelectorAll('.fade-on-scroll');
            contentElements.forEach(el => {
              (el as HTMLElement).style.opacity = ratio.toString();
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800" data-preload="true">
      {/* Simplified Background pattern - fewer elements for mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 bg-gray-900"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-red-600/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Reduced decorative shapes for better performance */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl lg:blur-2xl"></div>
        
        {/* Main content container - optimized height for mobile */}
        <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[600px]">
          {/* Left content area - optimized for mobile */}
          <div className="fade-on-scroll w-full lg:w-1/2 px-5 sm:px-6 lg:px-8 py-10 lg:py-24 order-2 lg:order-1 transition-opacity duration-300 flex flex-col justify-center items-start" style={{opacity: 1}}>
            <div className="text-left">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 leading-tight">
                Professional
                <br />
                <span className="text-red-500">IT Management</span>
              </h1>
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mb-5 sm:mb-6">
                Advanced Cybersecurity
              </h2>
              
              <p className="text-lg text-gray-200 mb-7 max-w-xl lg:mx-0">
                Protect your digital assets with comprehensive managed IT services, 
                proactive security monitoring, and cyberthreat defense.
              </p>
            </div>
            
            {/* Optimized feature list for performance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7 w-full max-w-xl">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-base">24/7 IT infrastructure monitoring</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-base">Managed security services</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-base">Threat detection & response</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-base">Business continuity solutions</p>
              </div>
            </div>
            
            {/* Optimized button - simplified for better performance */}
            <div className="w-full max-w-xl mt-2">
              <Link to="/contact" className="flex items-center justify-center bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-medium shadow-lg group w-full">
                Secure Your Business 
                <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Right image/graphic area - completely hidden on mobile for faster loading */}
          <div className="fade-on-scroll lg:w-1/2 order-1 lg:order-2 hidden lg:flex items-center justify-center overflow-hidden transition-opacity duration-300">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Simplified security illustration for better performance */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute inset-0 rounded-full border-6 border-red-500/20"></div>
                    <div className="absolute inset-[15%] rounded-full border-3 border-blue-500/30"></div>
                    <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ShieldCheck className="h-16 w-16 text-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Simplified decorative lines - fewer elements for better performance */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20">
                <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                <div className="absolute top-3/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust bar - optimized for performance */}
      <div className="relative border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-3">
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
              <div className="text-sm text-gray-200">Nationwide Coverage</div>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
              <div className="text-sm text-gray-200">Always-On Support</div>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
              <div className="text-sm text-gray-200">Security Specialists</div>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div className="text-sm text-gray-200">Certified Expertise</div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        /* Simplified CSS for better performance */
        .fade-on-scroll {
          opacity: 1;
        }
        
        /* Custom border widths */
        .border-6 {
          border-width: 6px;
        }
        
        .border-3 {
          border-width: 3px;
        }
        `}
      </style>
    </div>
  );
};

export default HeroSection; 