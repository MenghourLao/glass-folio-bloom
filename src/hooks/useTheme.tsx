
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
    // For Safari, always default to dark mode
    if (typeof window !== 'undefined' && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
      return 'dark';
    }
    
    // Get from localStorage or default to system for other browsers
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
        return savedTheme;
      }
    }
    return 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  const getSystemTheme = (): 'dark' | 'light' => {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const isSafari = () => {
    if (typeof navigator === 'undefined') return false;
    return navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
  };

  const applyThemeToDocument = (themeToApply: 'dark' | 'light') => {
    if (typeof document === 'undefined') return;
    
    // For Safari, force dark mode regardless of the theme parameter
    const finalTheme = isSafari() ? 'dark' : themeToApply;
    
    // Remove all theme classes first
    document.documentElement.classList.remove('light', 'dark');
    document.body.classList.remove('light', 'dark');
    
    // Add the theme class to both html and body elements
    document.documentElement.classList.add(finalTheme);
    document.body.classList.add(finalTheme);
    
    // Set data attribute for additional CSS targeting
    document.documentElement.setAttribute('data-theme', finalTheme);
    document.body.setAttribute('data-theme', finalTheme);
    
    // Safari-specific: Force styles by setting inline styles as fallback
    if (isSafari()) {
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.backgroundColor = 'rgb(0, 0, 0)';
      document.body.style.color = 'rgb(248, 250, 252)';
      
      // Force repaint in Safari
      const body = document.body;
      const display = body.style.display;
      body.style.display = 'none';
      body.offsetHeight; // Trigger reflow
      body.style.display = display || '';
    }
  };

  useEffect(() => {
    const updateResolvedTheme = () => {
      let newResolvedTheme: 'dark' | 'light';
      
      // For Safari, always use dark mode
      if (isSafari()) {
        newResolvedTheme = 'dark';
        setTheme('dark'); // Ensure theme state is also dark for Safari
      } else if (theme === 'system') {
        newResolvedTheme = getSystemTheme();
      } else {
        newResolvedTheme = theme;
      }
      
      setResolvedTheme(newResolvedTheme);
      applyThemeToDocument(newResolvedTheme);
      
      // Save theme preference to localStorage (except for Safari forced dark mode)
      if (!isSafari()) {
        localStorage.setItem('theme', theme);
      }
    };

    updateResolvedTheme();
  }, [theme]);

  // Listen for system theme changes (not applicable for Safari since it's forced dark)
  useEffect(() => {
    if (typeof window === 'undefined' || isSafari()) return;
    
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
