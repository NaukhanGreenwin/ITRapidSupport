import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Globe, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const HeroSection: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for detecting when hero is visible
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
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
    <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 bg-grid-white/10"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-red-600/10 to-transparent"></div>
        <div className="absolute left-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
        
        <div className="flex flex-col lg:flex-row pt-16 pb-6 lg:pt-0 lg:pb-0">
          {/* Left content area with fade effect */}
          <div className="fade-on-scroll lg:w-1/2 px-5 sm:px-6 lg:px-8 lg:py-20 order-2 lg:order-1 transition-opacity duration-300">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight sm:leading-none">
              Professional <br className="hidden sm:block" />
              <span className="text-red-500">IT Management</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/80 mb-4 sm:mb-6">
              Advanced CyberSecurity
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl">
              Protect your digital assets with comprehensive managed IT services, 
              proactive security monitoring, and cyberthreat defense.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2">
                  <Check className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-gray-300 text-sm">24/7 IT infrastructure monitoring</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2">
                  <Check className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-gray-300 text-sm">Managed security services</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2">
                  <Check className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-gray-300 text-sm">Threat detection & response</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2">
                  <Check className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-gray-300 text-sm">Business continuity solutions</p>
              </div>
            </div>
            
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Link to="/get-started" className="flex items-center justify-center bg-red-600 text-white px-5 sm:px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-base font-medium shadow-lg group">
                Secure Your Business 
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/book-demo" className="flex items-center justify-center bg-transparent text-white border border-white/20 px-5 sm:px-6 py-3 rounded-lg hover:bg-white/5 transition-colors text-base font-medium mt-2 xs:mt-0">
                Schedule Consultation
              </Link>
            </div>
          </div>
          
          {/* Right image/graphic area with fade effect */}
          <div className="fade-on-scroll lg:w-1/2 order-1 lg:order-2 flex items-center justify-center overflow-hidden transition-opacity duration-300">
            <div className="relative h-60 sm:h-80 w-full lg:h-full">
              {/* Security illustration/animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute inset-0 rounded-full border-8 border-red-500/20 animate-pulse"></div>
                    <div className="absolute inset-[15%] rounded-full border-4 border-blue-500/30"></div>
                    <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ShieldCheck className="h-12 w-12 sm:h-16 sm:w-16 text-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Circuit-like decorative lines */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20">
                <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                <div className="absolute top-2/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute top-3/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                
                <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute top-0 left-2/4 h-full w-px bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>
                <div className="absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust bar - keeping this visible regardless of scroll */}
      <div className="relative border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 py-3 lg:py-3">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="flex items-center">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0" />
              <div className="text-xs sm:text-sm text-gray-300">Greater Toronto Area</div>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0" />
              <div className="text-xs sm:text-sm text-gray-300">24/7 IT Support</div>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0" />
              <div className="text-xs sm:text-sm text-gray-300">Cybersecurity Experts</div>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div className="text-xs sm:text-sm text-gray-300">Ontario-Based Team</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .fade-on-scroll {
          opacity: 1;
        }
        
        /* For extremely small screens */
        @media (min-width: 400px) {
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:mt-0 {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection; 