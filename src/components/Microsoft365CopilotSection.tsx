import React from 'react';
import { ChevronRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const Microsoft365CopilotSection: React.FC = () => {
  return (
    <>
      {/* Microsoft 365 Copilot Section */}
      <div className="py-8 bg-slate-800 text-white relative overflow-hidden">
        {/* Abstract geometric shape background similar to hero section */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-16 -left-10 w-64 h-64 bg-red-600/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>
        
        <AnimateOnScroll variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 bg-red-600/20 rounded-full mb-3 backdrop-blur-sm">
                  <span className="text-red-100 text-sm font-medium">Microsoft Partner Solutions</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Enhanced Productivity with Microsoft 365 Copilot</h2>
                <p className="text-slate-300 mb-3 text-sm md:text-base">
                  As part of our IT solutions, we help businesses implement Microsoft 365 Copilot—your go-to AI-powered assistant that transforms the way you work using large language models (LLMs) and your organization's data.
                </p>
                <p className="text-slate-300 mb-4 text-sm md:text-base">
                  Enhance productivity, amplify creativity, and rely on secure AI while maintaining workflow. Our team provides complete setup, training, and ongoing support.
                </p>
                <a 
                  href="https://www.microsoft.com/en-us/microsoft-365/enterprise/copilot-for-microsoft-365" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                >
                  Learn About Copilot
                </a>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl shadow-xl border border-white/10">
                  <iframe 
                    allowTransparency="true" 
                    title="Wistia video player" 
                    allowFullScreen 
                    frameBorder="0" 
                    scrolling="no" 
                    className="wistia_embed w-full aspect-video rounded-lg" 
                    name="wistia_embed" 
                    src="https://fast.wistia.net/embed/iframe/mom73ol274"
                  ></iframe>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600/30 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
      
      {/* Copilot Statistics Section */}
      <div className="py-10 bg-white">
        <AnimateOnScroll variant="fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Copilot makes an impact on productivity, creativity, and time</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-red-600 mb-2">70%</h3>
                <p className="text-gray-700 text-sm">of early Copilot users said they were more productive.</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl font-bold text-red-600 mb-2">68%</h3>
                <p className="text-gray-700 text-sm">said Copilot helped them jump-start the creative process.</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl font-bold text-red-600 mb-2">85%</h3>
                <p className="text-gray-700 text-sm">of users said Copilot reduced effort to complete their tasks.</p>
              </div>
            </div>
            
            <div className="mt-6 text-center text-xs text-gray-500">
              <p>* Source: Microsoft Work Trend Index Special Report, November 15, 2023.<br/>
              What Can Copilot's Earliest Users Teach Us About Generative AI at Work.</p>
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href="https://www.microsoft.com/en-us/worklab/work-trend-index/early-findings-microsoft-365-copilot-work" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Download the full report <ChevronRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
};

export default Microsoft365CopilotSection; 