import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating?: number;
  quote: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function TestimonialSlider({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000,
  className = ''
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      nextTestimonial();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval]);
  
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-xl shadow-premium">
        <div className="relative h-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >
              <div className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-slate-800 dark:to-slate-900 p-8 md:p-12">
                <div className="relative">
                  <Quote className="absolute text-red-300 dark:text-red-600 h-12 w-12 -left-2 -top-2 opacity-20" />
                  <div className="relative z-10">
                    <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl leading-relaxed italic font-light mb-6">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    
                    <div className="flex items-center">
                      {testimonials[currentIndex].image && (
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                      )}
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                        
                        {testimonials[currentIndex].rating && (
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                fill={i < testimonials[currentIndex].rating! ? "currentColor" : "none"}
                                className={`h-4 w-4 ${i < testimonials[currentIndex].rating! ? 'text-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 md:-left-5">
        <motion.button
          onClick={prevTestimonial}
          className="bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg text-slate-700 dark:text-slate-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
      </div>
      
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2 md:-right-5">
        <motion.button
          onClick={nextTestimonial}
          className="bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg text-slate-700 dark:text-slate-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? 'w-6 bg-red-500' : 'w-2 bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 