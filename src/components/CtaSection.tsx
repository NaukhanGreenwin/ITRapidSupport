import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const CtaSection: React.FC = () => {
  return (
    <div className="bg-slate-900 relative overflow-hidden">
      {/* Abstract geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute -top-24 -left-10 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <AnimateOnScroll variant="fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                Ready to secure your business with industry-leading IT support?
              </h2>
              <p className="text-slate-300 text-base mb-4 leading-relaxed">
                Contact our team today to schedule a free IT security assessment and discover how our solutions can protect your Toronto business.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Link to="/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center font-medium text-sm">
                  Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg hover:bg-white/15 transition-colors flex items-center justify-center font-medium text-sm">
                  Request a Demo
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                {/* Shield graphic with animated glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-gradient-to-br from-red-500/20 to-purple-600/20 flex items-center justify-center animate-pulse-slow">
                    <div className="w-48 h-48 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
                      <div className="relative w-32 h-40">
                        {/* Shield shape */}
                        <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-red-700 rounded-t-full"></div>
                        {/* Shield inner */}
                        <div className="absolute inset-4 inset-b-10 bg-slate-900 rounded-t-full flex items-center justify-center">
                          {/* Lock icon */}
                          <div className="w-10 h-12 bg-red-600 rounded-lg mt-6 relative">
                            <div className="absolute w-12 h-6 bg-red-600 rounded-full -top-3 -left-1"></div>
                            <div className="absolute w-3 h-3 bg-slate-900 rounded-full top-5 left-3.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated particles */}
                <div className="absolute w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-float opacity-70"></div>
                  <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-float-delay opacity-70"></div>
                  <div className="absolute top-2/4 left-3/4 w-3 h-3 bg-purple-500 rounded-full animate-float-slow opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default CtaSection; 