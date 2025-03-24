import React from 'react';

interface PageHeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
}

const PageHeroSection: React.FC<PageHeroSectionProps> = ({ 
  title, 
  subtitle, 
  description,
  image = '/images/default-hero-bg.jpg' 
}) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <h2 className="text-xl md:text-2xl font-medium text-white/90">
                {subtitle}
              </h2>
            )}
            
            {description && (
              <p className="text-lg text-gray-200 max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-red-600/20 to-transparent"></div>
      <div className="absolute left-0 top-0 w-1/4 h-1/4 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
    </section>
  );
};

export default PageHeroSection; 