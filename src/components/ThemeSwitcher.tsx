import React, { useEffect } from 'react';

const ThemeSwitcher = () => {
  // Apply light theme when component mounts
  useEffect(() => {
    // Remove dark mode
    document.documentElement.classList.remove('dark');
    
    // Save light theme preference to localStorage
    localStorage.setItem('theme', 'light');
  }, []);

  // Return empty component (no toggle button)
  return null;
};

export default ThemeSwitcher; 