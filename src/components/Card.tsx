import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  hoverEffect?: 'lift' | 'highlight' | 'glow' | 'none';
  withBorder?: boolean;
}

export default function Card({
  children,
  className = '',
  to,
  href,
  onClick,
  hoverEffect = 'lift',
  withBorder = true,
}: CardProps) {
  const baseClasses = 'bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden';
  const borderClasses = withBorder ? 'border border-gray-200 dark:border-slate-700' : '';
  const allClasses = `${baseClasses} ${borderClasses} ${className}`;

  const hoverAnimations = {
    lift: {
      hover: { 
        y: -8, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { type: 'spring', stiffness: 400, damping: 17 }
      }
    },
    highlight: {
      hover: { 
        scale: 1.02,
        borderColor: 'rgba(239, 68, 68, 0.5)',
      }
    },
    glow: {
      hover: { 
        boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
      }
    },
    none: {}
  };

  const MotionComponent = motion.div;
  
  const content = (
    <MotionComponent
      className={allClasses}
      whileHover={hoverEffect !== 'none' ? 'hover' : undefined}
      variants={hoverAnimations[hoverEffect]}
    >
      {children}
    </MotionComponent>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className="block">
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className="block" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <div onClick={onClick} className="cursor-pointer">
        {content}
      </div>
    );
  }

  return content;
} 