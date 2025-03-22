import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-8">
          <div className="bg-red-100 p-6 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          We're sorry, but the page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center font-medium"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 text-gray-500">
          <p>
            Need help? <Link to="/contact" className="text-red-600 hover:text-red-700 font-medium">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 