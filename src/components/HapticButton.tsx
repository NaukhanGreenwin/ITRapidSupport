import React from 'react';
import { handleHapticFeedback, HapticProps } from '../utils/haptics';
import { motion } from 'framer-motion';

interface HapticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, HapticProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const HapticButton: React.FC<HapticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  hapticType = 'light',
  onPress,
  onClick,
  className = '',
  ...props
}) => {
  // Combine callback functions
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleHapticFeedback(e, hapticType, () => {
      if (onPress) onPress();
      if (onClick) onClick(e);
    });
  };

  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95';
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6',
  };
  
  // Rounded styles
  const roundedStyles = {
    full: 'rounded-full',
    md: 'rounded-md',
    lg: 'rounded-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
    outline: 'bg-transparent border border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100',
    ghost: 'bg-transparent text-red-600 hover:bg-red-50 active:bg-red-100',
  };
  
  // Width style
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // Combined styles
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${roundedStyles[rounded]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      onClick={handleClick}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default HapticButton; 