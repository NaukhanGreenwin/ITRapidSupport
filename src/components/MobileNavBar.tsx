import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Phone, Menu, Briefcase } from 'lucide-react';

const MobileNavBar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center p-2 ${isActive('/') ? 'text-red-600' : 'text-gray-600'}`}>
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link to="/services" className={`flex flex-col items-center p-2 ${isActive('/services') ? 'text-red-600' : 'text-gray-600'}`}>
          <Briefcase className="h-5 w-5" />
          <span className="text-xs mt-1">Services</span>
        </Link>
        
        <Link to="/case-studies" className={`flex flex-col items-center p-2 ${isActive('/case-studies') ? 'text-red-600' : 'text-gray-600'}`}>
          <FileText className="h-5 w-5" />
          <span className="text-xs mt-1">Case Studies</span>
        </Link>
        
        <Link to="/contact" className={`flex flex-col items-center p-2 ${isActive('/contact') ? 'text-red-600' : 'text-gray-600'}`}>
          <Phone className="h-5 w-5" />
          <span className="text-xs mt-1">Contact</span>
        </Link>
        
        <button 
          onClick={() => document.getElementById('mobile-menu-button')?.click()}
          className="flex flex-col items-center p-2 text-gray-600"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
          <span className="text-xs mt-1">Menu</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavBar; 