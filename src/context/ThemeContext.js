import React, { createContext, useState, useContext } from 'react';
import { Appearance } from 'react-native';

const defaultScheme = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultScheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const colors = theme === 'light'
    ? {
        background: '#fff',
        text: '#000',
        card: '#f5f5f5',
        accent: '#007bff',
      }
    : {
        background: '#121212',
        text: '#fff',
        card: '#1e1e1e',
        accent: '#90caf9',
      };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
