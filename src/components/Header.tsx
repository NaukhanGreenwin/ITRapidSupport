import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
  
  // Handle navigation with proper menu closing
  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

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

  // Optimized mobile menu animation for faster response
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.15, // Reduced from 0.2
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2, // Reduced from 0.3
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.03 // Reduced from 0.05
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.15, // Reduced from 0.2
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.03, // Reduced from 0.05
        staggerDirection: -1
      }
    }
  };

  // Optimized mobile menu item animation
  const mobileMenuItemVariants = {
    hidden: {
      opacity: 0,
      y: 5, // Reduced from 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15 // Reduced from 0.2
      }
    },
    exit: {
      opacity: 0,
      y: 5, // Reduced from 10
      transition: {
        duration: 0.08 // Reduced from 0.1
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
                aria-expanded={solutionsDropdownOpen}
                aria-controls="solutions-dropdown"
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </motion.button>
              
              <AnimatePresence>
                {solutionsDropdownOpen && (
                  <motion.div 
                    id="solutions-dropdown"
                    className="absolute top-full left-0 w-48 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 origin-top"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <Link to="/solutions" 
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      Enterprise Solutions
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
                aria-expanded={resourcesDropdownOpen}
                aria-controls="resources-dropdown"
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
          
          {/* Mobile menu button - Optimized for faster response */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button 
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
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
                <button
                  className="block w-full text-left py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => handleNavigation("/services")}
                >
                  Services
                </button>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <button
                  className="block w-full text-left py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => handleNavigation("/solutions")}
                >
                  Solutions
                </button>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <button
                  className="block w-full text-left py-4 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-l-2 border-red-200 ml-2 text-lg"
                  onClick={() => handleNavigation("/security-assessment")}
                >
                  Security Assessment
                </button>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <button
                  className="block w-full text-left py-4 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-l-2 border-red-200 ml-2 text-lg"
                  onClick={() => handleNavigation("/case-studies")}
                >
                  Case Studies
                </button>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <button
                  className="block w-full text-left py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => handleNavigation("/resources")}
                >
                  Resources
                </button>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <button
                  className="block w-full text-left py-4 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-l-2 border-red-200 ml-2 text-lg"
                  onClick={() => handleNavigation("/faq")}
                >
                  FAQ
                </button>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <button
                  className="block w-full text-left py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => handleNavigation("/about")}
                >
                  About
                </button>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <button
                  className="block w-full text-left py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                  onClick={() => handleNavigation("/careers")}
                >
                  Careers
                </button>
              </motion.div>
              
              <motion.div variants={mobileMenuItemVariants}>
                <button
                  className="block w-full text-left py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-t border-gray-100 pt-6 mt-4 text-lg"
                  onClick={() => handleNavigation("/contact")}
                >
                  <span className="px-4 py-2.5 bg-red-600 text-white rounded-lg inline-flex items-center justify-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 