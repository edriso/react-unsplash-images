import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Determines the initial dark mode setting by checking both user preference and system settings.
 *
 * The function first checks if the user has previously stored a dark theme preference in localStorage.
 * If no stored preference exists or it's set to false, it falls back to the system's color scheme preference.
 *
 * @returns {boolean} True if dark mode should be enabled, false otherwise.
 *
 * @description
 * Priority order for dark mode determination:
 * 1. User's stored preference in localStorage ('darkTheme' key)
 * 2. System's color scheme preference (prefers-color-scheme: dark)
 *
 * The function uses window.matchMedia to detect if the user's system has dark mode enabled
 * as a fallback when no explicit user preference is stored.
 */
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)',
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';
  return storedDarkMode || prefersDarkMode;
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('cat');

  const toggleDarkTheme = () => {
    setIsDarkTheme((oldValue) => {
      const newValue = !oldValue;
      localStorage.setItem('darkTheme', newValue);
      return newValue;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
