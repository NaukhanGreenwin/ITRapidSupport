import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  isLoading = false,
  loadingText,
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all rounded-lg focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-slate-800 dark:text-red-400 dark:border-red-400 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
    ghost: 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-slate-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledClasses = disabled || isLoading ? 'opacity-60 cursor-not-allowed' : '';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {loadingText || children}
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </>
      )}
    </>
  );

  const buttonAnimation = {
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };
  
  if (to) {
    return (
      <motion.div whileHover="hover" whileTap="tap" variants={buttonAnimation}>
        <Link to={to} className={allClasses} onClick={!disabled && !isLoading ? onClick : undefined}>
          {content}
        </Link>
      </motion.div>
    );
  }
  
  if (href) {
    return (
      <motion.div whileHover="hover" whileTap="tap" variants={buttonAnimation}>
        <a href={href} className={allClasses} onClick={!disabled && !isLoading ? onClick : undefined} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={allClasses}
      onClick={!disabled && !isLoading ? onClick : undefined}
      disabled={disabled || isLoading}
      whileHover={!disabled && !isLoading ? "hover" : undefined}
      whileTap={!disabled && !isLoading ? "tap" : undefined}
      variants={buttonAnimation}
    >
      {content}
    </motion.button>
  );
} 