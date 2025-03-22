import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, Info } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceFeature {
  name: string;
  description?: string;
  basicTier: boolean | string;
  professionalTier: boolean | string;
  enterpriseTier: boolean | string;
}

interface ServicesComparisonProps {
  className?: string;
}

export default function ServicesComparison({ className = '' }: ServicesComparisonProps) {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const features: ServiceFeature[] = [
    {
      name: "Threat Detection & Monitoring",
      description: "Continuous monitoring of your systems to identify and alert on potential security threats.",
      basicTier: "Basic",
      professionalTier: "Enhanced",
      enterpriseTier: "Advanced"
    },
    {
      name: "Vulnerability Management",
      description: "Regular scanning and assessment of your systems to identify security vulnerabilities.",
      basicTier: "Quarterly",
      professionalTier: "Monthly",
      enterpriseTier: "Weekly"
    },
    {
      name: "Incident Response",
      description: "Rapid response to security incidents to minimize damage and restore operations.",
      basicTier: "Business Hours",
      professionalTier: "24/7",
      enterpriseTier: "24/7 Premium"
    },
    {
      name: "Security Assessment",
      description: "Comprehensive evaluation of your security posture against industry standards.",
      basicTier: "Annual",
      professionalTier: "Bi-annual",
      enterpriseTier: "Quarterly"
    },
    {
      name: "Endpoint Protection",
      basicTier: true,
      professionalTier: true,
      enterpriseTier: true
    },
    {
      name: "Firewall Management",
      basicTier: false,
      professionalTier: true,
      enterpriseTier: true
    },
    {
      name: "Cloud Security",
      basicTier: false,
      professionalTier: true,
      enterpriseTier: true
    },
    {
      name: "Security Awareness Training",
      basicTier: "Basic",
      professionalTier: "Advanced",
      enterpriseTier: "Custom"
    },
    {
      name: "Compliance Management",
      basicTier: false,
      professionalTier: "Standard",
      enterpriseTier: "Enhanced"
    },
    {
      name: "Data Loss Prevention",
      basicTier: false,
      professionalTier: "Basic",
      enterpriseTier: "Advanced"
    },
    {
      name: "Identity Access Management",
      basicTier: false,
      professionalTier: true,
      enterpriseTier: "Advanced"
    },
    {
      name: "Penetration Testing",
      basicTier: false,
      professionalTier: "Annual",
      enterpriseTier: "Quarterly"
    },
    {
      name: "Dedicated Security Advisor",
      basicTier: false,
      professionalTier: false,
      enterpriseTier: true
    }
  ];

  const toggleFeature = (featureName: string) => {
    if (expandedFeature === featureName) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(featureName);
    }
  };

  const renderTierValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? 
        <Check className="h-5 w-5 text-green-500" /> : 
        <X className="h-5 w-5 text-red-300" />;
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <AnimateOnScroll variant="fadeIn" className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Choose the Right Protection for Your Business
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Compare our service tiers to find the perfect security solution that matches your organization's needs and budget
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 bg-white dark:bg-slate-800 sticky left-0 z-10 w-64">
                  <span className="font-semibold text-gray-700 dark:text-white">Features</span>
                </th>
                <th className="text-center py-4 px-6 bg-gray-50 dark:bg-slate-700 w-52 border-b border-gray-200 dark:border-slate-600">
                  <div className="font-bold text-gray-900 dark:text-white text-xl mb-1">Basic</div>
                  <div className="text-gray-500 dark:text-gray-300 mb-2">Essential Protection</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">$1,499/mo</div>
                </th>
                <th className="text-center py-4 px-6 bg-red-50 dark:bg-red-900/10 w-52 border-b border-gray-200 dark:border-slate-600 relative">
                  <div className="absolute -top-2 left-0 right-0 mx-auto w-fit px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                    MOST POPULAR
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white text-xl mt-2 mb-1">Professional</div>
                  <div className="text-gray-500 dark:text-gray-300 mb-2">Advanced Security</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">$3,999/mo</div>
                </th>
                <th className="text-center py-4 px-6 bg-gray-50 dark:bg-slate-700 w-52 border-b border-gray-200 dark:border-slate-600">
                  <div className="font-bold text-gray-900 dark:text-white text-xl mb-1">Enterprise</div>
                  <div className="text-gray-500 dark:text-gray-300 mb-2">Complete Coverage</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">$7,499/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <React.Fragment key={feature.name}>
                  <tr className={index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-gray-50 dark:bg-slate-900/50'}>
                    <td className="text-left py-4 px-6 sticky left-0 z-10 font-medium text-gray-900 dark:text-white border-t border-gray-200 dark:border-slate-700">
                      <button 
                        onClick={() => feature.description && toggleFeature(feature.name)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span>{feature.name}</span>
                        {feature.description && (
                          <span className="text-gray-400">
                            {expandedFeature === feature.name ? 
                              <ChevronUp className="h-4 w-4" /> : 
                              <ChevronDown className="h-4 w-4" />}
                          </span>
                        )}
                      </button>
                    </td>
                    <td className="text-center py-4 px-6 border-t border-gray-200 dark:border-slate-700">
                      {renderTierValue(feature.basicTier)}
                    </td>
                    <td className="text-center py-4 px-6 bg-red-50 dark:bg-red-900/10 border-t border-gray-200 dark:border-slate-700">
                      {renderTierValue(feature.professionalTier)}
                    </td>
                    <td className="text-center py-4 px-6 border-t border-gray-200 dark:border-slate-700">
                      {renderTierValue(feature.enterpriseTier)}
                    </td>
                  </tr>
                  {feature.description && (
                    <tr className={index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-gray-50 dark:bg-slate-900/50'}>
                      <td colSpan={4} className="text-left px-6 sticky left-0">
                        <AnimatePresence>
                          {expandedFeature === feature.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="py-3 pl-6 pr-4 flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                <Info className="h-4 w-4 flex-shrink-0 mt-0.5 text-gray-400" />
                                <p>{feature.description}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-center mt-10 space-x-4">
          <button className="bg-red-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
            Get Started Now
          </button>
          <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </AnimateOnScroll>
  );
} 