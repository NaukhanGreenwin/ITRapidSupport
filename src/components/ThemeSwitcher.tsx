import React, { useEffect } from 'react';

const ThemeSwitcher = () => {
  // Apply light theme when component mounts and forcefully remove dark mode
  useEffect(() => {
    // Function to remove dark mode and ensure light mode
    const enforceLightMode = () => {
      // Remove dark mode class from html element
      document.documentElement.classList.remove('dark');
      
      // Remove any dark class that might be present on the body
      document.body.classList.remove('dark');
      
      // Force light theme
      document.documentElement.style.colorScheme = 'light';
      
      // Save light theme preference to localStorage for persistence
      localStorage.setItem('theme', 'light');
    };
    
    // Call immediately
    enforceLightMode();
    
    // Also call whenever the page is shown (in case user switched back from another tab)
    window.addEventListener('pageshow', enforceLightMode);
    
    // Also handle system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', enforceLightMode);
    
    return () => {
      window.removeEventListener('pageshow', enforceLightMode);
      mediaQuery.removeEventListener('change', enforceLightMode);
    };
  }, []);

  // Return empty component (no toggle button)
  return null;
};

export default ThemeSwitcher; 