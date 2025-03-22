import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateOnScroll from '../components/AnimateOnScroll';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | '';
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Your message has been sent! We will get back to you soon.' 
        });
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.error || 'There was a problem sending your message. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'There was a problem sending your message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-20 bg-gradient-to-r from-slate-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
              Get in touch with our team of security experts. We're here to help protect your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <AnimateOnScroll>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10 order-2 md:order-1"
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Send us a message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                
                <form 
                  className="space-y-6"
                  action="https://formspree.io/f/xjkyyqjv" 
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  {submitStatus.type === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                    >
                      <p className="text-green-800 font-medium">{submitStatus.message}</p>
                    </motion.div>
                  )}
                  
                  {submitStatus.type === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                    >
                      <p className="text-red-800 font-medium">{submitStatus.message}</p>
                    </motion.div>
                  )}
                  
                  <input type="hidden" name="_subject" value="Contact Form Submission from IT Rapid Support" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Sales Inquiry">Sales Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Security Consulting">Security Consulting</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-red-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </AnimateOnScroll>
            
            {/* Contact Information */}
            <AnimateOnScroll>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 space-y-8"
              >
                <div className="bg-slate-900 rounded-2xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <div className="bg-white/10 rounded-full p-3 mr-4 group-hover:bg-white/20 transition-colors">
                        <Mail className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Email</p>
                        <a href="mailto:info@itrapidsupport.com" className="text-white hover:text-red-400 transition-colors">
                          info@itrapidsupport.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="bg-white/10 rounded-full p-3 mr-4 group-hover:bg-white/20 transition-colors">
                        <Phone className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Phone</p>
                        <a href="tel:+12895829930" className="text-white hover:text-red-400 transition-colors">
                          +1-289-582-9930
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="bg-white/10 rounded-full p-3 mr-4 group-hover:bg-white/20 transition-colors">
                        <Clock className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Business Hours</p>
                        <p className="text-white">Monday - Friday: 9AM - 6PM EST</p>
                        <p className="text-white">24/7 Emergency Support Available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-50 rounded-full p-2 mr-3">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">24/7 Security Monitoring</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our security operations center is always ready to respond to threats.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-50 rounded-full p-2 mr-3">
                        <Users className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Expert Support Team</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our certified security professionals are here to help.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Emergency Support */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">24/7 Emergency Support</h3>
              <p className="text-white/90">
                Our security response team is available around the clock for critical incidents.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+12895829930" 
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Line
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@itrapidsupport.com" 
                className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-red-800 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email SOC Team
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 