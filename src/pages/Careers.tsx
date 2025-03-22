import React, { useState } from 'react';
import { Briefcase, MapPin, Users, Coffee, Clock, Workflow, Zap, 
  ChevronRight, CheckCircle2, Heart, Award, ArrowRight, X, Mail, User, FileText } from 'lucide-react';

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resumeLink: '',
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobOpenings = [
    {
      title: "Senior Security Analyst",
      department: "Security Operations",
      location: "Vaughan, ON (Remote Option)",
      type: "Full-time",
      description: "Lead threat hunting and incident response activities for our enterprise clients. Analyze security events and provide remediation guidance.",
      requirements: [
        "5+ years of experience in security operations or incident response",
        "Experience with SIEM tools and threat hunting methodologies",
        "Security certifications such as CISSP, GIAC, or equivalent",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Cloud Security Architect",
      department: "Engineering",
      location: "Vaughan, ON (Remote Option)",
      type: "Full-time",
      description: "Design and implement secure cloud architectures for our clients. Develop security frameworks for multi-cloud environments.",
      requirements: [
        "7+ years of experience in cloud security and architecture",
        "Deep knowledge of AWS, Azure, and/or GCP security services",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Security certifications such as CCSP, AWS Security Specialty"
      ]
    },
    {
      title: "Penetration Tester",
      department: "Security Testing",
      location: "Vaughan, ON (Remote Option)",
      type: "Full-time",
      description: "Conduct penetration tests and security assessments for our clients. Identify vulnerabilities and provide remediation recommendations.",
      requirements: [
        "3+ years of experience in penetration testing",
        "Proficiency in security testing tools and methodologies",
        "Security certifications such as OSCP, CEH, or equivalent",
        "Strong report writing and communication skills"
      ]
    },
    {
      title: "Security Product Manager",
      department: "Product",
      location: "Vaughan, ON (Remote Option)",
      type: "Full-time",
      description: "Lead the development and enhancement of our security products. Gather requirements, define roadmaps, and work with engineering teams.",
      requirements: [
        "5+ years of experience in product management for security or tech products",
        "Strong understanding of cybersecurity concepts and technologies",
        "Experience with agile methodologies and product lifecycle management",
        "Excellent communication and stakeholder management skills"
      ]
    },
    {
      title: "Security Compliance Specialist",
      department: "Governance & Compliance",
      location: "Vaughan, ON (Remote Option)",
      type: "Full-time",
      description: "Help clients achieve and maintain compliance with security regulations and standards (ISO 27001, SOC 2, HIPAA, etc.).",
      requirements: [
        "4+ years of experience in security compliance or auditing",
        "Deep knowledge of security frameworks and regulations",
        "Experience conducting gap assessments and developing remediation plans",
        "Security or audit certifications such as CISA, CRISC, or equivalent"
      ]
    },
    {
      title: "Security Sales Engineer",
      department: "Sales",
      location: "Vaughan, ON (Remote Option)",
      type: "Full-time",
      description: "Provide technical expertise during the sales process. Conduct demos, proof of concepts, and technical discussions with prospects.",
      requirements: [
        "3+ years of experience as a security sales engineer or consultant",
        "Strong technical understanding of security technologies and architectures",
        "Excellent presentation and communication skills",
        "Experience with security product demonstrations and POCs"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, wellness programs, and gym membership reimbursement."
    },
    {
      icon: <Coffee className="h-6 w-6 text-red-600" />,
      title: "Work-Life Balance",
      description: "Flexible work hours, remote work options, generous PTO, and paid parental leave to ensure you can recharge."
    },
    {
      icon: <Award className="h-6 w-6 text-red-600" />,
      title: "Growth & Development",
      description: "Continuing education stipend, certification reimbursement, conference attendance, and mentorship programs."
    },
    {
      icon: <Users className="h-6 w-6 text-red-600" />,
      title: "Collaborative Culture",
      description: "Work with industry experts, participate in innovation days, and contribute to open-source security projects."
    }
  ];

  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitStatus({ type: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    setIsSubmitting(true);
    
    try {
      // Get the form element
      const form = e.target;
      
      // Create FormData object from the form
      const formData = new FormData(form);
      
      console.log('Submitting form to Formspree');
      
      // Submit the form using the Fetch API
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      console.log('Response received:', response.status);
      const result = await response.json();
      console.log('Response data:', result);
      
      if (response.ok) {
        console.log('Form submitted successfully');
        // Show success message
        setSubmitStatus({ 
          type: 'success', 
          message: 'Your application has been submitted! We will contact you soon.' 
        });
        
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          resumeLink: '',
        });
      } else {
        console.error('Form submission failed:', result.error);
        // Show error message
        setSubmitStatus({ 
          type: 'error', 
          message: result.error || 'There was a problem submitting your application. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'There was a problem submitting your application. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-red-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full mb-6">
                <span className="text-red-200 text-sm font-medium">Join Our Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Build Your Career in IT Security
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Join a team of security experts dedicated to protecting Ontario organizations from evolving IT security threats. Grow your skills and make an impact in the world of IT security, right here in Vaughan.
              </p>
              <a 
                href="#openings" 
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center font-medium"
              >
                View Open Positions <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-2xl backdrop-blur-sm transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Security Team Working" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join IT Rapid Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're building a team of passionate security professionals in Vaughan to solve the most challenging IT security problems facing Ontario businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impactful Work</h3>
              <p className="text-gray-600 mb-6">
                Protect critical infrastructure, sensitive data, and essential services from cyber threats. Your work directly contributes to global security and resilience.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Workflow className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Focus</h3>
              <p className="text-gray-600 mb-6">
                Work with cutting-edge security technologies and methodologies. We invest in research and development to stay ahead of emerging threats.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600/10 rounded-xl p-3 w-fit mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Oriented</h3>
              <p className="text-gray-600 mb-6">
                Continuous learning is in our DNA. We provide training, certification support, and clear career paths to help you reach your professional goals.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-4">Our Culture & Values</h3>
                <p className="text-slate-300 mb-6">
                  At IT Rapid Support, we foster a culture of innovation, collaboration, and continuous improvement. Our values guide everything we do:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Security First</span>
                      <p className="text-slate-300 text-sm mt-1">We prioritize security in all decisions and actions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Client Success</span>
                      <p className="text-slate-300 text-sm mt-1">We're committed to helping our clients achieve their security goals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Continuous Innovation</span>
                      <p className="text-slate-300 text-sm mt-1">We constantly evolve to stay ahead of emerging threats</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Integrity & Trust</span>
                      <p className="text-slate-300 text-sm mt-1">We operate with the highest ethical standards</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" 
                  alt="Team Collaboration" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer competitive compensation and a comprehensive benefits package designed to support your wellbeing and growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm flex">
                <div className="mr-6">
                  <div className="bg-red-600/10 rounded-full p-3 w-fit">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div id="openings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our current openings at our Vaughan office and find the perfect role for your skills and career goals.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center text-gray-500">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(job);
                      }}
                      className="mt-4 md:mt-0 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-flex items-center"
                    >
                      Apply Now <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="space-y-1 text-gray-600">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Don't see a role that fits?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            We're always looking for talented security professionals to join our team. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-medium"
          >
            Submit Your Resume <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Application Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Apply for {selectedJob.title}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {submitStatus.type === 'success' ? (
              <div className="p-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-medium">{submitStatus.message}</p>
                </div>
                <p className="text-gray-600 mb-6">
                  Your application for the {selectedJob.title} position has been sent to our hiring team at info@itrapidsupport.com.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/xjkyyqjv" 
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="p-6 space-y-6"
              >
                {submitStatus.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 font-medium">{submitStatus.message}</p>
                  </div>
                )}
                
                <p className="text-gray-600 mb-4">
                  Please complete the form below to apply for the {selectedJob.title} position. 
                  Your application will be sent to our recruitment team at info@itrapidsupport.com.
                </p>
                
                <input type="hidden" name="Position" value={selectedJob.title} />
                <input type="hidden" name="Department" value={selectedJob.department} />
                <input type="hidden" name="Location" value={selectedJob.location} />
                <input type="hidden" name="_subject" value={`Job Application: ${selectedJob.title}`} />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    placeholder="Tell us why you're interested in this position and how your skills align with the requirements."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700 mb-1">
                    Resume / CV Link *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      name="resumeLink"
                      id="resumeLink"
                      required
                      value={formData.resumeLink}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                      placeholder="https://drive.google.com/file/your-resume"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Please provide a link to your resume (Google Drive, Dropbox, OneDrive, etc.)
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">
                    By submitting this application, you agree that we will process your data to consider you for the position. 
                    Your information will be sent to info@itrapidsupport.com and handled according to our privacy policy.
                  </p>
                  
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers; 