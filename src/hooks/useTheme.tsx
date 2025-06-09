
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get from localStorage or default to system
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
        return savedTheme;
      }
    }
    return 'system'; // Default to system preference
  });

  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  const getSystemTheme = (): 'dark' | 'light' => {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  useEffect(() => {
    const updateResolvedTheme = () => {
      let newResolvedTheme: 'dark' | 'light';
      
      if (theme === 'system') {
        newResolvedTheme = getSystemTheme();
      } else {
        newResolvedTheme = theme;
      }
      
      setResolvedTheme(newResolvedTheme);
      
      // Update document class based on resolved theme
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newResolvedTheme);
      
      // Save theme preference to localStorage
      localStorage.setItem('theme', theme);
    };

    updateResolvedTheme();
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const newSystemTheme = getSystemTheme();
        setResolvedTheme(newSystemTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newSystemTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
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
