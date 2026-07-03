import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, DollarSign, ShieldCheck } from 'lucide-react';

// Compliance frameworks are referenced as regulations/standards ITRS helps
// clients work toward — deliberately NOT certification claims.
const frameworks = ['PIPEDA', 'PHIPA', 'PCI-DSS', 'SOC 2', 'NIST CSF', 'Cyber Insurance Requirements'];

const onboardingSteps = [
  {
    step: '1',
    title: 'Assess',
    description: 'We review your current environment: systems, security posture, pain points, and risks.',
  },
  {
    step: '2',
    title: 'Plan',
    description: 'You get a clear onboarding plan and roadmap — what changes, when, and why.',
  },
  {
    step: '3',
    title: 'Onboard',
    description: 'We document everything, deploy monitoring and security tooling, and introduce your team to the helpdesk.',
  },
  {
    step: '4',
    title: 'Operate',
    description: '24/7 support and proactive management, with regular reviews so IT keeps pace with your business.',
  },
];

const ServiceDifferentiators: React.FC = () => (
  <div className="py-20 bg-slate-50 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Compliance strip */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
          <ShieldCheck className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Compliance-Aware IT</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with Compliance in Mind</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We help GTA businesses work toward the privacy regulations, security frameworks, and insurer requirements
          that apply to them:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {frameworks.map((f) => (
            <span key={f} className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm">
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Onboarding */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
            <ClipboardCheck className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Getting Started</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Onboarding Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured, documented onboarding so nothing about your environment lives in one person's head.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {onboardingSteps.map((s) => (
            <div key={s.step} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing transparency */}
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
          <DollarSign className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">No Surprises</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Transparent, Predictable Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Managed IT should be a predictable monthly cost tied to outcomes — not surprise invoices. See how managed IT
          is priced across the industry and what to look for in a quote.
        </p>
        <Link
          to="/resources/managed-it-support-cost-toronto"
          className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          Read Our Pricing Guide <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
);

export default ServiceDifferentiators;
