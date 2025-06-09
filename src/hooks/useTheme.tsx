
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [resolvedTheme, setResolvedTheme] = useState<'dark'>('dark');

  const applyThemeToDocument = () => {
    if (typeof document === 'undefined') return;
    
    // Remove all theme classes first
    document.documentElement.classList.remove('light', 'dark');
    document.body.classList.remove('light', 'dark');
    
    // Add dark theme class to both html and body elements
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    
    // Set data attribute for additional CSS targeting
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.setAttribute('data-theme', 'dark');
    
    // Force dark mode styles
    document.documentElement.style.colorScheme = 'dark';
    document.body.style.backgroundColor = 'rgb(0, 0, 0)';
    document.body.style.color = 'rgb(248, 250, 252)';
  };

  useEffect(() => {
    setResolvedTheme('dark');
    applyThemeToDocument();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', setTheme, resolvedTheme: 'dark' }}>
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
