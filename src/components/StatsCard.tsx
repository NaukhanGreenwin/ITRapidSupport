import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatsCardProps {
  stats: {
    value: string;
    label: string;
    icon?: React.ReactNode;
    color?: 'red' | 'blue' | 'green' | 'purple' | 'orange';
  }[];
  className?: string;
  animated?: boolean;
}

export default function StatsCard({ stats, className = '', animated = true }: StatsCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colorClasses = {
    red: 'text-red-500 dark:text-red-400',
    blue: 'text-blue-500 dark:text-blue-400',
    green: 'text-emerald-500 dark:text-emerald-400',
    purple: 'text-purple-500 dark:text-purple-400',
    orange: 'text-orange-500 dark:text-orange-400',
  };

  const iconColors = {
    red: 'bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400',
    green: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400',
  };

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-${Math.min(stats.length, 4)} gap-6 md:gap-10 ${className}`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={animated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={inView && animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-slate-700"
        >
          {stat.icon && (
            <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${iconColors[stat.color || 'blue']}`}>
              {stat.icon}
            </div>
          )}

          <motion.div
            initial={animated ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
            animate={inView && animated ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1 + 0.3,
              type: 'spring',
              stiffness: 100 
            }}
          >
            <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color ? colorClasses[stat.color] : 'text-slate-900 dark:text-white'}`}>
              {stat.value}
            </div>
          </motion.div>
          
          <div className="text-slate-500 dark:text-slate-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 