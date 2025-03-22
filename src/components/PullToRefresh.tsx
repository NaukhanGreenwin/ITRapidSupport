import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void>;
  pullDownThreshold?: number;
  backgroundColor?: string;
}

const PullToRefresh = ({
  children,
  onRefresh,
  pullDownThreshold = 80,
  backgroundColor = 'bg-gray-100'
}: PullToRefreshProps) => {
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);

  useEffect(() => {
    // Only add touch events on mobile devices
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isMobile) return;

    const handleTouchStart = (e: TouchEvent) => {
      // Only allow pull to refresh when at the top of the page
      if (window.scrollY > 5) return;
      
      startYRef.current = e.touches[0].clientY;
      setIsPulling(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling) return;
      
      const currentY = e.touches[0].clientY;
      const diff = currentY - startYRef.current;
      
      // Only pull down, not up
      if (diff > 0) {
        // Use a resistance factor to make it harder to pull as it gets further
        const resistance = 0.4;
        const newDistance = Math.min(diff * resistance, pullDownThreshold * 1.5);
        setPullDistance(newDistance);
        
        // Prevent default scrolling behavior when pulling
        if (window.scrollY <= 0 && diff > 10) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = async () => {
      if (!isPulling) return;
      
      if (pullDistance >= pullDownThreshold) {
        // Trigger refresh
        setIsRefreshing(true);
        
        try {
          await onRefresh();
        } catch (error) {
          console.error('Refresh failed:', error);
        } finally {
          setIsRefreshing(false);
        }
      }
      
      // Reset
      setPullDistance(0);
      setIsPulling(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isPulling, pullDistance, pullDownThreshold, onRefresh]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Pull to refresh indicator */}
      <motion.div 
        className="absolute top-0 left-0 right-0 flex justify-center z-50"
        initial={{ y: -60 }}
        animate={{ y: pullDistance > 0 || isRefreshing ? 0 : -60 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <div className={`flex items-center justify-center rounded-full ${backgroundColor} text-primary p-3 shadow-lg`}>
          <motion.div
            animate={{ 
              rotate: isRefreshing ? 360 : pullDistance > pullDownThreshold ? 180 : pullDistance / pullDownThreshold * 180 
            }}
            transition={{ 
              duration: isRefreshing ? 1 : 0.2,
              repeat: isRefreshing ? Infinity : 0,
              ease: 'linear'
            }}
          >
            <RefreshCw size={24} />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Content container */}
      <motion.div
        animate={{ y: pullDistance }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PullToRefresh; 