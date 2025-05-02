
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Toggle theme with animation
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="rounded-full w-9 h-9 relative transition-all duration-300 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${
        theme === 'dark' ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'
      }`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] absolute transition-all ${
        theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
      }`} />
    </Button>
  );
}
