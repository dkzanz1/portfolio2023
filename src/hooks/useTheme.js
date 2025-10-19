// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for a saved theme or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Applying the theme attribute to the body element below
    document.body.setAttribute('data-theme', theme);
    // Save the theme to localStorage for persistence
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};