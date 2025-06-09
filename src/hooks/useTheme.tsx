
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Always default to dark mode, ignore system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        return savedTheme;
      }
    }
    
    return 'dark'; // Always default to dark mode
  });

  useEffect(() => {
    // Cross-browser dark mode implementation
    const root = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
      // Add dark class to html and body for maximum compatibility
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
      
      // Set CSS custom properties for cross-browser support
      root.style.setProperty('color-scheme', 'dark');
      
      // Store preference
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      body.classList.add('light');
      body.classList.remove('dark');
      
      root.style.setProperty('color-scheme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Force dark mode on initial load for all browsers
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Ensure dark mode is applied immediately
    root.classList.add('dark');
    body.classList.add('dark');
    root.style.setProperty('color-scheme', 'dark');
    
    // Remove any light mode classes that might exist
    root.classList.remove('light');
    body.classList.remove('light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
