import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Lock, Clock } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface CounterProps {
  value: number;
  duration: number;
  label: string;
  icon: React.ReactNode;
  delay?: number;
  isPercentage?: boolean;
}

const CounterStat: React.FC<CounterProps> = ({ value, duration, label, icon, delay = 0, isPercentage = false }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!value) return;
    
    // Don't animate to full value instantly - create steps
    let start = 0;
    const increment = value / 50; // Divide animation into 50 steps
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isPercentage ? Math.round(start * 100) / 100 : Math.floor(start));
      }
    }, duration / 50);
    
    return () => clearInterval(timer);
  }, [value, duration, isPercentage]);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-full">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
        {isPercentage ? count.toFixed(2) : count.toLocaleString()}
        {isPercentage ? <span className="text-red-600">%</span> : <span className="text-red-600">+</span>}
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-center font-medium">
        {label}
      </div>
    </motion.div>
  );
};

interface SecurityStatsCounterProps {
  className?: string;
}

const SecurityStatsCounter: React.FC<SecurityStatsCounterProps> = ({ className }) => {
  return (
    <div className={`py-12 bg-gray-50 dark:bg-slate-800 relative overflow-hidden ${className}`}>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 opacity-30"></div>
      
      <AnimateOnScroll variant="fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {/* Stats Cards */}
            <motion.div 
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
            >
              <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-full">
                <Shield className="text-red-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                2,439<span className="text-red-600">+</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-center font-medium">
                Threats Blocked Today
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-full">
                <AlertTriangle className="text-red-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                875,423<span className="text-red-600">+</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-center font-medium">
                Attacks Prevented This Year
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-full">
                <Lock className="text-red-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                254<span className="text-red-600">+</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-center font-medium">
                Vulnerabilities Patched
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-full">
                <Clock className="text-red-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                99.97<span className="text-red-600">%</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-center font-medium">
                Uptime Percentage
              </div>
            </motion.div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default SecurityStatsCounter; 