import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({ to, children, onClick, className = '' }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`relative text-gray-700 dark:text-gray-300 font-medium py-2 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-full"
        initial={{ width: 0, left: '50%' }}
        whileHover={{ width: '100%', left: 0 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
} 