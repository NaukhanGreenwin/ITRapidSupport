import React from 'react';
import { motion } from 'framer-motion';
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

  return (
    <AnimateOnScroll variant="fadeIn">
      <section className={`py-3 sm:py-5 md:py-8 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showHeader && (
            <div className="text-center mb-2 sm:mb-3 md:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Trusted by Industry Leaders</h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                Join hundreds of organizations that rely on our security expertise
              </p>
            </div>
          )}
          
          {/* Logo carousel */}
          <div className="relative overflow-hidden mx-auto">
            {/* Gradient fade on sides for a smoother scroll experience */}
            <div className="absolute left-0 top-0 h-full w-6 sm:w-8 md:w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-6 sm:w-8 md:w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex space-x-3 sm:space-x-4 md:space-x-8 py-2 md:py-3 items-center"
                animate={{ x: [0, -1920] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div 
                    key={`${logo.name}-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center h-5 sm:h-6 md:h-8 transition-all duration-300"
                  >
                    <img 
                      src={logo.image} 
                      alt={`${logo.name} logo`} 
                      className="h-full object-contain" 
                      style={{ maxWidth: `${Math.min(logo.width * 0.5, 60)}px` }}
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