import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

interface ClientLogosProps {
  className?: string;
}

export default function ClientLogos({ className = '' }: ClientLogosProps) {
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
    <AnimateOnScroll variant="fadeIn" className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join hundreds of organizations that rely on our security expertise
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient fade on sides for a smoother scroll experience */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-slate-900 z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-slate-900 z-10"></div>
          
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex space-x-12 py-4 items-center"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={`${logo.name}-${index}`} 
                  className="flex-shrink-0 flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img 
                    src={logo.image} 
                    alt={`${logo.name} logo`} 
                    className="h-full object-contain dark:filter dark:brightness-0 dark:invert" 
                    style={{width: logo.width}}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
} 