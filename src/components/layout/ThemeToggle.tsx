
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Cycle through themes: system -> light -> dark -> system
  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-[1.2rem] w-[1.2rem]" />;
    }
    return resolvedTheme === 'dark' ? 
      <Moon className="h-[1.2rem] w-[1.2rem]" /> : 
      <Sun className="h-[1.2rem] w-[1.2rem]" />;
  };

  const getAriaLabel = () => {
    if (theme === 'system') return 'Switch to light mode';
    if (theme === 'light') return 'Switch to dark mode';
    return 'Switch to system theme';
  };

  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        className="rounded-full w-9 h-9 transition-all duration-300 bg-primary/10 backdrop-blur-sm"
        disabled
      >
        <Sun className="h-5 w-5 absolute transition-all scale-100 rotate-0" />
      </Button>
    );
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      aria-label={getAriaLabel()}
      className="rounded-full w-9 h-9 relative transition-all duration-300 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm"
    >
      {getIcon()}
    </Button>
  );
}
