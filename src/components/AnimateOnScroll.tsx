import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scale' | 'stagger';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  const variants = {
    fadeIn: {
      visible: { 
        opacity: 1,
        transition: { duration, delay } 
      },
      hidden: { opacity: 0 }
    },
    fadeInUp: {
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay } 
      },
      hidden: { opacity: 0, y: 50 }
    },
    fadeInLeft: {
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay } 
      },
      hidden: { opacity: 0, x: -50 }
    },
    fadeInRight: {
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration, delay } 
      },
      hidden: { opacity: 0, x: 50 }
    },
    scale: {
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay } 
      },
      hidden: { opacity: 0, scale: 0.8 }
    },
    stagger: {
      visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1 + delay,
          duration,
        },
      }),
      hidden: { opacity: 0, y: 20 },
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
} 