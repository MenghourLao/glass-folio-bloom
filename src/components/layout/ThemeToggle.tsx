
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  // We're using light mode as an explicit toggle state now
  // since default is dark/black
  const [isLightMode, setIsLightMode] = useState(false);

  // Initial theme setup based on localStorage or OS preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // By default we want dark/black mode
    // Only switch to light mode if explicitly saved
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLightMode(true);
    } else {
      // By default, remove any light class
      document.documentElement.classList.remove("light");
      setIsLightMode(false);
    }
  }, []);

  // Listen for OS theme preference changes
  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply OS preference if user hasn't set explicit preference
      if (!localStorage.getItem("theme")) {
        setIsLightMode(!e.matches);
        if (!e.matches) {
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
        }
      }
    };
    
    darkModeQuery.addEventListener("change", handleChange);
    return () => darkModeQuery.removeEventListener("change", handleChange);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
      className="rounded-full"
    >
      {isLightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}
