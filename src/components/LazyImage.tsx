import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderClassName = '',
  ...props 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  // Only start loading the image when it comes into view
  useEffect(() => {
    if (inView && !isLoaded) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [inView, src, isLoaded]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton placeholder */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse ${placeholderClassName}`}
          aria-hidden="true"
        />
      )}
      
      {/* Image (hidden until loaded) */}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage; 