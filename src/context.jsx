import { createContext, useContext, useEffect, useState } from 'react';

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
