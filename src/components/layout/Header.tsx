
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect if we're on a case study detail page
  const isCaseStudyDetail = location.pathname.includes('/case-studies/') && location.pathname !== '/case-studies';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 animate-fade-in ${
      scrolled || isCaseStudyDetail ? "py-3" : "py-6"
    }`}>
      <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
        scrolled || isCaseStudyDetail
          ? "glass w-full backdrop-blur-xl rounded-xl py-3 px-6"
          : "backdrop-blur-xl"
      }`}>
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//bmplus+logo.png" 
            alt="BookMe+ Logo" 
            className="h-7 md:h-8" 
          />
        </Link>

        {/* Center-aligned Glassmorphism Navigation */}
        <nav className={`hidden md:block ${(scrolled || isCaseStudyDetail) ? "" : "absolute left-1/2 transform -translate-x-1/2"}`}>
          <div className={`${
            scrolled || isCaseStudyDetail
              ? "px-4 py-3"
              : "glass rounded-full backdrop-blur-xl border-white/20 dark:border-white/10 my-[20px] px-[36px] py-[20px] transition-all duration-300 bg-transparent"
          }`}>
            <ul className="flex items-center space-x-8">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className={`font-poppins text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.path 
                        ? "text-primary" 
                        : theme === "light" 
                          ? "text-black" 
                          : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right side buttons - Login & Create Account */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="ghost" 
            className="font-medium rounded-full text-white hover:bg-white/10 py-6"
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            className="font-medium rounded-full text-white bg-transparent border border-white hover:bg-white hover:text-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black py-6"
          >
            <Zap className="mr-2 h-4 w-4" /> Create First Event
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsNavOpen(!isNavOpen)} 
            aria-label="Toggle menu" 
            className="rounded-full text-white h-12 w-12"
          >
            {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu with Glassmorphism */}
      {isNavOpen && (
        <nav className={`md:hidden absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4 animate-fade-in backdrop-blur-xl ${
          scrolled || isCaseStudyDetail
            ? "glass bg-black/70 dark:bg-black/80 border border-white/10"
            : "glass border-t border-white/10"
        }`}>
          {navItems.map(item => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsNavOpen(false)} 
              className="font-poppins font-medium py-2 transition-colors hover:text-primary text-white dark:text-white"
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="ghost" 
            className="w-full font-medium justify-start text-white hover:bg-white/10 rounded-full"
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            className="w-full font-medium rounded-full text-white bg-transparent border border-white hover:bg-white hover:text-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            <Zap className="mr-2 h-4 w-4" /> Create First Event
          </Button>
        </nav>
      )}
    </header>
  );
}
