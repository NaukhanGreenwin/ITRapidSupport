import React, { useEffect } from 'react';

// Component to preload critical sections on page load
const PreloadManager: React.FC = () => {
  useEffect(() => {
    // Function to preload key components
    const preloadSections = () => {
      // Prefetch critical images
      const criticalImages = [
        '/images/logo.png', 
        // Add other critical images here
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      
      // Preload component sections by eagerly rendering them
      // This forces React to parse and prepare these components immediately
      const homePageSections = document.querySelectorAll('[data-preload="true"]');
      
      if (homePageSections.length > 0) {
        homePageSections.forEach(section => {
          // Mark as visible to trigger any lazy-loading content
          (section as HTMLElement).style.visibility = 'visible';
          
          // Force layout calculations on critical components
          const _ = section.getBoundingClientRect();
        });
      }
      
      // For Intersection Observer based animations, trigger them for above-fold content
      const aboveFoldSections = document.querySelectorAll('.fade-on-scroll');
      aboveFoldSections.forEach(section => {
        (section as HTMLElement).style.opacity = '1';
      });
    };

    // Run preloading if on mobile
    if (window.innerWidth < 768) {
      // Execute immediately for current visible content
      preloadSections();
      
      // Add a small delay to preload content just below the fold
      setTimeout(() => {
        // Find sections that would be loaded as user scrolls and preload them
        document.querySelectorAll('[data-preload="deferred"]').forEach(section => {
          (section as HTMLElement).setAttribute('data-preload', 'loaded');
        });
      }, 500);
    }
  }, []);

  return null; // This component does not render anything visible
};

export default PreloadManager; 