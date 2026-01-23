import { createContext, useContext, useEffect, useState } from 'react';

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)',
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme');

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === 'true';
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('cat');

  const toggleDarkTheme = () => {
    setIsDarkTheme((oldValue) => {
      const newValue = !oldValue;
      localStorage.setItem('darkTheme', newValue);
      document.body.classList.toggle('dark-theme', isDarkTheme);
      return newValue;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, []);
  // }, [isDarkTheme]); // Alternative: remove the body class toggle from toggleDarkTheme if using this dependency

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
