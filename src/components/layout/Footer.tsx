
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black dark:bg-black border-t border-white/10">
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/bmplus%2Blogo.png" 
                alt="BookMe+ Logo" 
                className="h-6 sm:h-8 mb-2" 
              />
            </div>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              The ultimate platform for event management, helping organizers create unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bookme.plus" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/bookme.plus" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.tiktok.com/@bookme.plus" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="18"
                  width="18"
                  className="sm:w-5 sm:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Home</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Case Studies</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Pricing</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Terms of Use</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-bold text-base sm:text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="sm:w-5 sm:h-5 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm sm:text-base">A23 A, One Park Shop House Street, Sangkat Srah Chak, Khan Daun Penh, Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="sm:w-5 sm:h-5 text-primary shrink-0" />
                <a href="tel:+855010318316" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">+855 010 318 316</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="sm:w-5 sm:h-5 text-primary shrink-0" />
                <a href="mailto:hello@bookme.plus" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">hello@bookme.plus</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-xs sm:text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} BookMe+. All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>;
}

