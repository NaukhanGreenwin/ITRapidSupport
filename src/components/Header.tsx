import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import NavLink from './NavLink';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileMenuItemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="IT Rapid Support Logo" 
                className="h-10 sm:h-12 md:h-16 w-auto max-w-[200px] sm:max-w-[240px] object-contain" 
              />
              <span className="sr-only">IT Rapid Support</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/services">Services</NavLink>
            
            <div className="relative">
              <motion.button 
                className="flex items-center relative text-gray-700 font-medium py-2"
                onClick={() => {
                  setSolutionsDropdownOpen(!solutionsDropdownOpen);
                  if (resourcesDropdownOpen) setResourcesDropdownOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </motion.button>
              
              <AnimatePresence>
                {solutionsDropdownOpen && (
                  <motion.div 
                    className="absolute top-full left-0 w-56 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 origin-top"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <Link to="/solutions" 
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      All Solutions
                    </Link>
                    <Link to="/security-assessment" 
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      Security Assessment
                    </Link>
                    <Link to="/case-studies" 
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      Case Studies
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="relative">
              <motion.button 
                className="flex items-center relative text-gray-700 font-medium py-2"
                onClick={() => {
                  setResourcesDropdownOpen(!resourcesDropdownOpen);
                  if (solutionsDropdownOpen) setSolutionsDropdownOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </motion.button>
              
              <AnimatePresence>
                {resourcesDropdownOpen && (
                  <motion.div 
                    className="absolute top-full left-0 w-48 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 origin-top"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <Link to="/blog" 
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setResourcesDropdownOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link to="/resources" 
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setResourcesDropdownOpen(false)}
                    >
                      Resource Center
                    </Link>
                    <Link to="/faq" 
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setResourcesDropdownOpen(false)}
                    >
                      FAQ
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <NavLink to="/about">About</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            
            <Button 
              to="/contact" 
              variant="primary" 
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button 
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden bg-white border-t border-gray-200 py-3 overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            aria-label="Mobile navigation menu"
            role="navigation"
          >
            <div className="space-y-0 px-4 pb-6">
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/services" 
                  className="block py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/solutions" 
                  className="block py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/security-assessment" 
                  className="block py-4 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-l-2 border-red-200 ml-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Security Assessment
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/case-studies" 
                  className="block py-4 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-l-2 border-red-200 ml-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/blog" 
                  className="block py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/resources" 
                  className="block py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/faq" 
                  className="block py-4 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-l-2 border-red-200 ml-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/about" 
                  className="block py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <Link to="/careers" 
                  className="block py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants} className="mt-6 pt-4 border-t border-gray-100">
                <Link to="/contact"
                  className="block py-4 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-center transition-colors text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 