
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass animate-fade-in">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-poppins font-bold text-xl md:text-2xl text-primary">BookMe+</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="font-poppins text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-1">
            <ThemeToggle />
            <Button className="font-medium rounded-full">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <nav className="md:hidden glass absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              onClick={() => setIsNavOpen(false)}
              className="font-poppins font-medium py-2 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full font-medium rounded-full mt-4">
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
}
