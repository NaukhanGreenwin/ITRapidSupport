import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { trackFormSubmission } from './AnalyticsTracker';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps {
  className?: string;
  compact?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '', compact = false }) => {
  const [values, setValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!values.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!values.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Track successful form submission in analytics
      trackFormSubmission('contact_form', {
        subject: values.subject,
        company_provided: !!values.company,
        page_location: window.location.pathname
      });
      
      console.log('Form submitted successfully');
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${className} bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8`}>
      {!isSubmitted ? (
        <>
          {!compact && (
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">Get in touch</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors dark:bg-slate-700 dark:text-white`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p id="firstName-error" className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors dark:bg-slate-700 dark:text-white"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors dark:bg-slate-700 dark:text-white`}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={values.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors dark:bg-slate-700 dark:text-white"
                placeholder="Acme Inc."
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors bg-white dark:bg-slate-700 dark:text-white"
              >
                <option value="">Select a subject</option>
                <option value="sales">Sales Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="consulting">Security Consulting</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={compact ? 3 : 5}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors dark:bg-slate-700 dark:text-white`}
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            
            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>
          </form>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Thank you!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your message has been sent successfully. We'll get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium"
          >
            Send another message
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm; 