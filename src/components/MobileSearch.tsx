import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface MobileSearchProps {
  searchItems?: {
    title: string;
    path: string;
    description?: string;
    keywords?: string[];
  }[];
  onClose?: () => void;
}

const MobileSearch = ({ searchItems = [], onClose }: MobileSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchItems>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Focus the input when the search is opened
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Filter search results based on query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filteredResults = searchItems.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const descriptionMatch = item.description?.toLowerCase().includes(query) || false;
      const keywordMatch = item.keywords?.some(k => k.toLowerCase().includes(query)) || false;
      
      return titleMatch || descriptionMatch || keywordMatch;
    });

    setSearchResults(filteredResults);
  }, [searchQuery, searchItems]);

  const handleOpenSearch = () => {
    setIsOpen(true);
    // Prevent body scrolling when search is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseSearch = () => {
    setIsOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    // Restore body scrolling
    document.body.style.overflow = '';
    // Call custom onClose handler if provided
    if (onClose) onClose();
  };

  const handleSelectResult = (path: string) => {
    handleCloseSearch();
    navigate(path);
  };

  return (
    <>
      {/* Search button */}
      <button 
        onClick={handleOpenSearch}
        className="flex items-center justify-center p-3 rounded-full bg-primary text-white shadow-lg"
        aria-label="Open search"
      >
        <Search size={20} />
      </button>

      {/* Mobile search overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search header */}
            <div className="bg-white p-4 flex items-center gap-3 shadow-md">
              <button 
                onClick={handleCloseSearch}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
              
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
                {searchQuery && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
            
            {/* Search results */}
            <div className="flex-1 bg-white overflow-y-auto">
              {searchQuery && searchResults.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No results found for "{searchQuery}"
                </div>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      <button
                        className="w-full text-left p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                        onClick={() => handleSelectResult(result.path)}
                      >
                        <h3 className="font-medium text-gray-900">{result.title}</h3>
                        {result.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{result.description}</p>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSearch; 