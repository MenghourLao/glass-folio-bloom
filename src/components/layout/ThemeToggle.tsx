
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full w-9 h-9 transition-all duration-300 bg-primary/10 backdrop-blur-sm"
      disabled
      aria-label="Dark mode (fixed)"
    >
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
