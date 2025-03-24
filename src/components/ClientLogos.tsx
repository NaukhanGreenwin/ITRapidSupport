import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

interface ClientLogosProps {
  className?: string;
  showHeader?: boolean;
}

export default function ClientLogos({ className = '', showHeader = false }: ClientLogosProps) {
  // Sample client logos - replace with actual client logos as needed
  const logos = [
    {
      name: 'Microsoft',
      image: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
      width: 120
    },
    {
      name: 'IBM',
      image: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
      width: 100
    },
    {
      name: 'Cisco',
      image: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg',
      width: 80
    },
    {
      name: 'Oracle',
      image: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg',
      width: 130
    },
    {
      name: 'Dell',
      image: 'https://cdn.worldvectorlogo.com/logos/dell-technologies-logo.svg',
      width: 90
    },
    {
      name: 'HP',
      image: 'https://cdn.worldvectorlogo.com/logos/hp-2.svg',
      width: 120
    },
    {
      name: 'SAP',
      image: 'https://cdn.worldvectorlogo.com/logos/sap-3.svg',
      width: 80
    },
    {
      name: 'Salesforce',
      image: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
      width: 110
    }
  ];

  // Create a longer array with 4 copies to ensure continuous looping
  const scrollLogos = [...logos, ...logos, ...logos, ...logos];
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [containerWidth, setContainerWidth] = useState(0);
  const [logoRowWidth, setLogoRowWidth] = useState(0);

  // Calculate widths on mount and window resize
  useEffect(() => {
    const calculateWidths = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setContainerWidth(containerWidth);
        
        // Calculate total width of one set of logos (with spacing)
        const logoWidthWithSpacing = logos.reduce((total, logo) => {
          return total + Math.min(logo.width * 0.4, 50) + 32; // 32px for spacing
        }, 0);
        
        setLogoRowWidth(logoWidthWithSpacing);
      }
    };

    calculateWidths();
    window.addEventListener('resize', calculateWidths);
    
    return () => {
      window.removeEventListener('resize', calculateWidths);
    };
  }, []);

  // Set up continuous animation with improved performance
  useEffect(() => {
    if (logoRowWidth > 0) {
      const animateContinuously = async () => {
        // More aggressive speed factor for faster animation
        const duration = logoRowWidth / 45; 
        
        // Reset position first if needed
        await controls.set({ x: 0 });
        
        // Start animation from beginning
        await controls.start({
          x: -logoRowWidth,
          transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }
        });
      };
      
      animateContinuously();
    }
  }, [logoRowWidth, controls]);

  return (
    <AnimateOnScroll variant="fadeIn">
      <section className={`py-2 sm:py-3 md:py-6 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showHeader && (
            <div className="text-center mb-2 sm:mb-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Strategic Technology Partners</h2>
              <p className="text-xs text-gray-500 max-w-3xl mx-auto">
                IT Rapid Support maintains strategic partnerships with leading technology providers to deliver comprehensive security solutions.
              </p>
            </div>
          )}
          
          {/* Logo carousel with improved implementation */}
          <div className="relative overflow-hidden mx-auto" ref={containerRef}>
            {/* Stronger gradient fade on sides for cleaner edges */}
            <div className="absolute left-0 top-0 h-full w-8 sm:w-10 md:w-12 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-8 sm:w-10 md:w-12 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
            
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex space-x-4 sm:space-x-6 md:space-x-8 py-2 md:py-3 items-center"
                animate={controls}
                initial={{ x: 0 }}
              >
                {scrollLogos.map((logo, index) => (
                  <div 
                    key={`${logo.name}-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center h-6 sm:h-7 md:h-8 transition-all duration-300"
                  >
                    <img 
                      src={logo.image} 
                      alt={`${logo.name} logo`} 
                      className="h-full object-contain" 
                      style={{ 
                        maxWidth: `${Math.min(logo.width * 0.5, 60)}px`,
                        filter: "grayscale(1) opacity(0.8)",
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
} 