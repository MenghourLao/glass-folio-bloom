
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/useTheme";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "Case Studies",
    path: "/case-studies"
  }, {
    name: "Pricing",
    path: "/pricing"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  
  return <header className="sticky top-0 z-50 w-full animate-fade-in">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//bmplus+logo.png" alt="BookMe+ Logo" className="h-6 md:h-7" />
        </Link>

        {/* Center-aligned Glassmorphism Navigation */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <div className="glass rounded-full backdrop-blur-xl border-white/20 dark:border-white/10 my-[16px] px-[32px] py-[16px] transition-all duration-300">
            <ul className="flex items-center space-x-8">
              {navItems.map(item => <li key={item.name}>
                  <Link to={item.path} className={`font-poppins text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path ? "text-primary" : theme === "light" ? "text-black" : "text-white"}`}>
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </nav>

        {/* Right side buttons with enhanced theme toggle */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="outline" className="font-medium rounded-full text-white bg-transparent border border-white hover:bg-white hover:text-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
            <Zap className="mr-2 h-4 w-4" /> Sell your ticket
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsNavOpen(!isNavOpen)} aria-label="Toggle menu" className="rounded-full text-white">
            {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu with Glassmorphism */}
      {isNavOpen && <nav className="md:hidden glass absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4 animate-fade-in backdrop-blur-xl border-t border-white/10">
          {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsNavOpen(false)} className="font-poppins font-medium py-2 transition-colors hover:text-primary text-white dark:text-white">
              {item.name}
            </Link>)}
          <Button variant="outline" className="w-full font-medium rounded-full mt-4 text-white bg-transparent border border-white hover:bg-white hover:text-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
            <Zap className="mr-2 h-4 w-4" /> Sell your ticket
          </Button>
        </nav>}
    </header>;
}
