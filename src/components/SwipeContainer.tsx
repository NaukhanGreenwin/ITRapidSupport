import { useState, useRef, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SwipeContainerProps {
  children: ReactNode;
  nextPath?: string;
  prevPath?: string;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  swipeThreshold?: number;
}

const SwipeContainer = ({
  children,
  nextPath,
  prevPath,
  onSwipeLeft,
  onSwipeRight,
  swipeThreshold = 100
}: SwipeContainerProps) => {
  const [dragX, setDragX] = useState(0);
  const startXRef = useRef(0);
  const navigate = useNavigate();
  
  const handleDragStart = (e: MouseEvent | TouchEvent | PointerEvent) => {
    // Get the start position
    if (window.TouchEvent && e instanceof TouchEvent) {
      startXRef.current = e.touches[0].clientX;
    } else if ('clientX' in e) {
      startXRef.current = e.clientX;
    }
  };
  
  const handleDrag = (e: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
    // Set the current drag position
    setDragX(info.offset.x);
  };
  
  const handleDragEnd = () => {
    // Determine if the swipe threshold was met
    if (dragX > swipeThreshold && (prevPath || onSwipeRight)) {
      // Swiped right
      if (onSwipeRight) {
        onSwipeRight();
      } else if (prevPath) {
        navigate(prevPath);
      }
    } else if (dragX < -swipeThreshold && (nextPath || onSwipeLeft)) {
      // Swiped left
      if (onSwipeLeft) {
        onSwipeLeft();
      } else if (nextPath) {
        navigate(nextPath);
      }
    }
    
    // Reset drag position
    setDragX(0);
  };

  return (
    <motion.div
      className="relative w-full touch-pan-y"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={{
        x: dragX
      }}
    >
      {/* Visual indicators for swipe direction */}
      {(prevPath || onSwipeRight) && (
        <motion.div 
          className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-50 opacity-0"
          animate={{ opacity: dragX > swipeThreshold / 2 ? 0.8 : 0 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </motion.div>
      )}
      
      {(nextPath || onSwipeLeft) && (
        <motion.div 
          className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-50 opacity-0"
          animate={{ opacity: dragX < -swipeThreshold / 2 ? 0.8 : 0 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </motion.div>
      )}
      
      {children}
    </motion.div>
  );
};

export default SwipeContainer; 