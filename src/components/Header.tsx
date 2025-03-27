import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import NavLink from './NavLink';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('up');
  const ticking = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Initialize window width on mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll effect for header with improved mobile detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only process scroll events at a controlled rate to improve performance
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Determine scroll direction with a small threshold (5px) to avoid flickering
          if (currentScrollY < 10) {
            // Always show header at the top of the page
            setIsVisible(true);
          } else if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
            // We have scrolled more than our threshold
            if (currentScrollY < lastScrollY.current) {
              // Scrolling up
              scrollDirection.current = 'up';
              setIsVisible(true);
            } else {
              // Scrolling down
              scrollDirection.current = 'down';
              if (!mobileMenuOpen) { // Don't hide when menu is open
                setIsVisible(false);
              }
            }
            
            // Update last scroll position
            lastScrollY.current = currentScrollY;
          }
          
          // Set condensed header state when scrolled
          setScrolled(currentScrollY > 10);
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

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

  // Header animation variants
  const headerVariants = {
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hidden: { 
      y: -100,
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <>
      {/* Mobile phone banner - fixed at top of screen on mobile */}
      <div className="bg-red-600 text-white pt-2 pb-7 text-center md:hidden fixed w-full z-40 top-0 flex items-center justify-center">
        <a href="tel:+12895829930" className="inline-flex items-center justify-center">
          <Phone className="h-5 w-5 mr-3 text-white" strokeWidth={2} />
          <span className="font-medium text-lg tracking-wide">289-582-9930</span>
        </a>
      </div>
      
      {/* Fixed spacer for non-scrolled mobile */}
      <div className="h-[57px] md:hidden"></div>
      
      {/* Main header - positioned below phone banner on mobile */}
      <motion.header 
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={headerVariants}
        style={{ top: windowWidth < 768 ? "57px" : "0" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between ${scrolled ? 'h-16' : 'h-20'} transition-all duration-300`}>
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/images/logo.png" 
                  alt="IT Rapid Support Logo" 
                  className={`w-auto max-w-[280px] sm:max-w-[280px] object-contain transition-all duration-300 ${scrolled ? 'h-12 sm:h-12' : 'h-14 sm:h-14 md:h-16'}`}
                  width="280"
                  height={scrolled ? "48" : "56"}
                  loading="eager"
                  fetchPriority="high"
                />
                <span className="sr-only">IT Rapid Support</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/services">{t('header.services')}</NavLink>
              
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
                  {t('header.solutions')} <ChevronDown className="ml-1 h-4 w-4" />
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
                        {t('header.enterpriseSolutions')}
                      </Link>
                      <Link to="/security-assessment" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setSolutionsDropdownOpen(false)}
                      >
                        {t('header.securityEvaluation')}
                      </Link>
                      <Link to="/cyber-incident" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setSolutionsDropdownOpen(false)}
                      >
                        {t('header.breachServices')}
                      </Link>
                      <Link to="/partners" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setSolutionsDropdownOpen(false)}
                      >
                        {t('header.technologyPartners')}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <NavLink to="/support">{t('header.support')}</NavLink>
              
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
                  {t('header.resources')} <ChevronDown className="ml-1 h-4 w-4" />
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
                      <Link to="/resources" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setResourcesDropdownOpen(false)}
                      >
                        {t('header.resourceCenter')}
                      </Link>
                      <Link to="/faq" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setResourcesDropdownOpen(false)}
                      >
                        {t('header.faq')}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <NavLink to="/about">{t('header.about')}</NavLink>
              <NavLink to="/careers">{t('header.careers')}</NavLink>
              
              <LanguageSwitcher />
              
              <Button 
                to="/contact" 
                variant="primary" 
                size="md"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="right"
              >
                {t('header.getStarted')}
              </Button>
            </div>
            
            {/* Mobile menu button and language switcher */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher />
              <button 
                id="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-colors p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-menu"
              ref={menuRef}
              className="md:hidden bg-white border-t border-gray-200 py-3 overflow-hidden max-h-[calc(100vh-80px-57px)] overflow-y-auto"
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
                    Security Evaluation
                  </button>
                </motion.div>
                
                <motion.div variants={mobileMenuItemVariants}>
                  <button
                    className="block w-full text-left py-4 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-l-2 border-red-200 ml-2 text-lg"
                    onClick={() => handleNavigation("/cyber-incident")}
                  >
                    Breach Services
                  </button>
                </motion.div>
                
                <motion.div variants={mobileMenuItemVariants}>
                  <button
                    className="block w-full text-left py-4 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 border-l-2 border-red-200 ml-2 text-lg"
                    onClick={() => handleNavigation("/partners")}
                  >
                    Technology Partners
                  </button>
                </motion.div>
                
                <motion.div variants={mobileMenuItemVariants}>
                  <button
                    className="block w-full text-left py-4 px-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg font-medium my-1 text-lg"
                    onClick={() => handleNavigation("/support")}
                  >
                    Support
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
      </motion.header>
    </>
  );
} 