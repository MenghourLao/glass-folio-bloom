
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

  const applyThemeToDocument = (themeToApply: 'dark' | 'light') => {
    if (typeof document === 'undefined') return;
    
    // Remove all theme classes
    document.documentElement.classList.remove('light', 'dark');
    document.body.classList.remove('light', 'dark');
    
    // Add the new theme class to both html and body for Safari
    document.documentElement.classList.add(themeToApply);
    document.body.classList.add(themeToApply);
    
    // Safari-specific: Also set the theme as an attribute
    document.documentElement.setAttribute('data-theme', themeToApply);
    
    // Force Safari to repaint by triggering a layout recalculation
    if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
      const body = document.body;
      body.style.display = 'none';
      body.offsetHeight; // Trigger reflow
      body.style.display = '';
    }
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
      applyThemeToDocument(newResolvedTheme);
      
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
        applyThemeToDocument(newSystemTheme);
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
