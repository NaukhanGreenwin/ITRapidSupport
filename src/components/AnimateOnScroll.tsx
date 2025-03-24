import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimationVariant = 
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'zoomIn'
  | 'scaleUp';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  }
};

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  className = ''
}) => {
  const controls = useAnimation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [shouldPreload, setShouldPreload] = useState(false);
  
  // Check if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Check if should preload on mobile
  useEffect(() => {
    // For mobile devices, check if we should preload
    const isMobile = window.innerWidth < 768;
    const shouldSkipAnimation = isMobile || prefersReducedMotion;
    
    // Skip animation and immediately show content on mobile
    if (shouldSkipAnimation) {
      setShouldPreload(true);
      controls.set('visible');
    }
    
    // Also check if this element has a preload flag from parent components
    const checkForPreloadAttribute = () => {
      if (ref.current) {
        const element = ref.current as HTMLElement;
        const closestPreloadParent = element.closest('[data-preload="true"]');
        
        if (closestPreloadParent) {
          setShouldPreload(true);
          controls.set('visible');
        }
      }
    };
    
    // Run check after a short delay to ensure DOM is ready
    const timer = setTimeout(checkForPreloadAttribute, 100);
    return () => clearTimeout(timer);
  }, [controls, prefersReducedMotion]);
  
  // Optimize by using a much lower threshold for mobile to load content faster
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const mobileThreshold = isMobile ? 0.01 : threshold;
  const mobileRootMargin = isMobile ? '50px 0px' : '10px 0px';
  
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: mobileThreshold,
    rootMargin: mobileRootMargin
  });

  useEffect(() => {
    if (inView && !shouldPreload) {
      controls.start('visible');
    } else if (!once && !shouldPreload) {
      controls.start('hidden');
    }
  }, [controls, inView, once, shouldPreload]);

  // If preloading or user prefers reduced motion, skip animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={shouldPreload ? "visible" : "hidden"}
      animate={controls}
      variants={variants[variant]}
      transition={{ 
        duration: shouldPreload ? 0 : duration, 
        delay: shouldPreload ? 0 : delay,
        ease: 'easeOut'
      }}
      className={className}
      style={{ willChange: 'opacity, transform' }}
      data-preload="deferred"
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 