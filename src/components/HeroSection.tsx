import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Clock, ShieldIcon, Users } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900">
      {/* Abstract geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <AnimateOnScroll variant="fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center px-3 py-1.5 bg-red-600/20 rounded-full mb-3 backdrop-blur-sm">
                <span className="text-red-100 text-sm font-medium">Toronto's Leading IT Security</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                Forward-Thinking <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">IT Services</span>: Proactive Security
              </h1>
              <p className="text-slate-300 text-base mb-4 md:mb-6 max-w-xl">
                Protect your Greater Toronto Area business with advanced threat detection, 24/7 monitoring, and expert-led security operations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Link to="/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center font-medium">
                  Get Protected <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg hover:bg-white/15 transition-colors flex items-center justify-center font-medium">
                  Schedule Demo
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 hidden md:block relative h-full min-h-[320px]">
              {/* Abstract line art */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Animated grid lines */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  
                  {/* Floating 3D objects */}
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-600/80 rounded-lg transform rotate-45 animate-float"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-blue-600/80 rounded-full animate-float-delay"></div>
                  <div className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-white/30 rounded-lg transform -rotate-15 animate-float-slow"></div>
                  
                  {/* Data visualization element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 border-4 border-red-600/40 rounded-full flex items-center justify-center animate-pulse-slow">
                      <div className="w-40 h-40 border-4 border-white/30 rounded-full flex items-center justify-center">
                        <div className="w-28 h-28 bg-gradient-to-br from-red-600/80 to-purple-600/80 rounded-full shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Trust Bar */}
      <div className="border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-center justify-items-center">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-red-400" />
              <span className="text-white text-sm font-medium">Greater Toronto Area</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-red-400" />
              <span className="text-white text-sm font-medium">24/7 Local Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldIcon className="h-5 w-5 text-red-400" />
              <span className="text-white text-sm font-medium">Data Privacy Focus</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-red-400" />
              <span className="text-white text-sm font-medium">Ontario-Based Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 