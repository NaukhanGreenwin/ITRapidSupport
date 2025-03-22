import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveIconProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'gray' | 'success' | 'warning' | 'danger';
  effect?: 'pulse' | 'bounce' | 'wiggle' | 'rotate' | 'grow';
  className?: string;
  onClick?: () => void;
  tooltip?: string;
}

export default function InteractiveIcon({
  icon,
  size = 'md',
  color = 'primary',
  effect = 'pulse',
  className = '',
  onClick,
  tooltip,
}: InteractiveIconProps) {
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
    xl: 'p-4',
  };

  const colorClasses = {
    primary: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    secondary: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    gray: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
    success: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    warning: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    danger: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  };

  // Define variants for each effect
  const variants = {
    pulse: {
      animate: {
        scale: [1, 1.05, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      },
    },
    bounce: {
      animate: {
        y: [0, -5, 0],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      },
    },
    wiggle: {
      animate: {
        rotate: [-3, 3, -3],
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      },
    },
    rotate: {
      animate: {
        rotate: [0, 360],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        },
      },
    },
    grow: {
      initial: { scale: 0.8, opacity: 0.8 },
      whileHover: {
        scale: 1.2,
        opacity: 1,
        transition: { duration: 0.2 },
      },
    },
  };

  return (
    <div className="relative inline-block">
      <motion.div
        className={`inline-flex rounded-full ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
        variants={variants[effect]}
        initial={effect === 'grow' ? 'initial' : undefined}
        animate={effect !== 'grow' ? 'animate' : undefined}
        whileHover={effect === 'grow' ? 'whileHover' : { scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        {icon}
      </motion.div>
      
      {tooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 text-xs text-white bg-slate-900 rounded pointer-events-none whitespace-nowrap">
          {tooltip}
        </div>
      )}
    </div>
  );
} 