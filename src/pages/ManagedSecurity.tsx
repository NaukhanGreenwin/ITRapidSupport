import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Check, CheckCircle, Server, Users, Clock, ChevronRight } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateFAQSchema } from '../components/SEO';
import ServiceDifferentiators from '../components/ServiceDifferentiators';

// Answer blocks for AI search. Each answer is written to stand on its own when
// lifted out of the page by an answer engine: the question is restated in the
// first sentence, the specifics follow, and nothing depends on surrounding
// context. Claims here must stay limited to what ITRS actually delivers — no
// response-time numbers, pricing, certifications, or client names.
const faqs = [
  {
    question: 'What are managed security services?',
    answer:
      'Managed security services means an external security team runs the day-to-day protection of your systems instead of your staff handling it alone. IT Rapid Support covers 24/7 monitoring, managed firewalls, endpoint and email security, threat detection, and incident response for organizations across Toronto and the Greater Toronto Area.',
  },
  {
    question: 'What does IT Rapid Support monitor 24/7?',
    answer:
      'Monitoring covers the systems that attackers actually reach: endpoints, servers, firewalls, network traffic, and email. Alerts are reviewed around the clock rather than only during business hours, so activity that starts overnight or on a weekend is picked up when it happens instead of on the next business morning.',
  },
  {
    question: 'Do you provide managed security for small and mid-sized businesses in the GTA?',
    answer:
      'Yes. Managed security is delivered to businesses across Toronto and the Greater Toronto Area, including organizations without an in-house security team. The service is scoped to the size of the environment, so a company with one office receives the same monitoring and response process as a multi-site organization.',
  },
  {
    question: 'What happens when you detect a security incident?',
    answer:
      'Detected activity is investigated, contained, and escalated to your designated contacts. Response includes isolating affected systems, removing the cause, restoring normal operation, and documenting what happened. Escalation paths and response targets are agreed in your service agreement before the service starts.',
  },
  {
    question: 'Can managed security work alongside our existing IT team?',
    answer:
      'Yes. Many clients keep an internal IT team for day-to-day operations and use IT Rapid Support for the security layer: monitoring, threat detection, and incident response. Responsibilities are split explicitly during onboarding so there is no gap between what your team owns and what we own.',
  },
  {
    question: 'How do we start managed security services?',
    answer:
      'Start with a review of your current environment: what systems you run, what security tooling is already in place, and where the gaps are. From there the service is scoped and priced for your environment. Call (289) 582-9930 or use the contact form to arrange the review.',
  },
];

const ManagedSecurity = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Cybersecurity Services GTA | 24/7 Monitoring"
        description="Managed cybersecurity services for Toronto and the GTA: 24/7 monitoring, managed firewalls, endpoint and email security. Call (289) 582-9930."
        keywords="cybersecurity services GTA, managed security services Toronto, cybersecurity company Toronto, managed cybersecurity GTA, security operations Toronto"
        canonicalUrl="/services/managed-security"
        schema={[
          generateLocalBusinessSchema(),
          generateServiceSchema({
            name: 'Managed Security Services',
            description:
              '24/7 managed cybersecurity services for businesses across Toronto and the Greater Toronto Area, including monitoring, managed firewalls, endpoint protection, and incident response.',
            url: '/services/managed-security/',
            areaServed: 'Greater Toronto Area, Ontario',
            serviceType: 'Managed Security Services',
          }),
          generateFAQSchema(faqs, '/services/managed-security/'),
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Managed Security', url: '/services/managed-security/' },
        ]}
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
                <span className="text-red-200 text-sm font-medium">Security Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Managed Security Services
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                24/7 monitoring, threat detection, and incident response from our team of security experts to keep your organization protected around the clock.
              </p>
              <Link 
                to="/contact/" 
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-2xl backdrop-blur-sm transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=800&q=80" 
                alt="Security Operations Center" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Direct answer block. Placed immediately after the hero on purpose:
          answer engines draw a large share of citations from the top of a page,
          and this is the self-contained definition they can lift. */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What are managed security services?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Managed security services means an external security team runs the day-to-day protection of
            your systems instead of your staff handling it alone. IT Rapid Support provides managed
            security to businesses across Toronto and the Greater Toronto Area from its Vaughan office,
            covering 24/7 monitoring, managed firewalls, endpoint and email security, threat detection,
            and incident response. Organizations typically use it either to replace security work no one
            currently owns, or to add a dedicated security layer alongside an existing IT team.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Managed Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our managed security services provide complete protection for your critical systems, networks, and data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Server className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Security Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Around-the-clock monitoring of your network, systems, and applications to detect threats in real-time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Real-time threat detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Log analysis & correlation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Anomaly detection</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Incident Response</h3>
              <p className="text-gray-600 mb-6">
                Rapid response to security incidents with clear remediation steps and detailed reporting.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">15-minute response SLA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Incident containment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Root cause analysis</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Security Team</h3>
              <p className="text-gray-600 mb-6">
                Expert security analysts and engineers working as an extension of your team.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Certified security experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Industry specialization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Executive reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
              <span className="text-sm font-medium">Why Choose Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Managed Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover how our managed security services provide value, protection, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced Response Time</h3>
                  <p className="text-gray-600">
                    Minimize the impact of security incidents with immediate detection and rapid response protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Security Posture</h3>
                  <p className="text-gray-600">
                    Strengthen your overall security with proactive monitoring and continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Access to Expertise</h3>
                  <p className="text-gray-600">
                    Leverage our team of security experts without the cost of building an in-house team.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Server className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Predictable Costs</h3>
                  <p className="text-gray-600">
                    Transform variable security costs into fixed monthly expenses with transparent pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Security Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A comprehensive methodology designed to protect your organization.
            </p>
          </div>

          <div className="flex flex-col space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                  <span className="text-sm font-medium">Step 1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Assessment</h3>
                <p className="text-gray-600 mb-6">
                  We begin with a comprehensive assessment of your current security posture, identifying vulnerabilities and gaps in your existing defenses.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Infrastructure evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Vulnerability scanning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Risk analysis</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80" 
                  alt="Security Assessment" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                  <span className="text-sm font-medium">Step 2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Based on the assessment findings, we design and implement a custom security solution tailored to your specific needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Tool deployment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Security controls configuration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Integration with existing systems</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                  alt="Security Implementation" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6">
                  <span className="text-sm font-medium">Step 3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Monitoring</h3>
                <p className="text-gray-600 mb-6">
                  Our security operations center (SOC) provides 24/7 monitoring of your environment to detect and respond to threats.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Real-time alerting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Threat hunting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Security dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                  alt="Continuous Monitoring" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceDifferentiators />

      {/* Free self-assessment */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not sure where your gaps are?
          </h2>
          <p className="text-gray-600 mb-8">
            Our free{' '}
            <Link to="/it-risk-calculator/" className="text-red-600 hover:text-red-700 font-medium">
              IT risk calculator
            </Link>{' '}
            scores fifteen security control areas — backups, MFA,
            endpoint protection, admin accounts, email authentication and more — and ranks your
            weakest points in priority order. It takes a few minutes, needs no sign-up, and runs
            entirely in your browser: nothing you enter is sent to us or stored anywhere.
          </p>
          <Link
            to="/it-risk-calculator/"
            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Take the free IT risk assessment <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-slate-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Managed security services: common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to enhance your security?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Contact our team today to learn how our managed security services can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact/" 
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium border border-red-500"
            >
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services/" 
              className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/30"
            >
              Explore All Services <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedSecurity; 
