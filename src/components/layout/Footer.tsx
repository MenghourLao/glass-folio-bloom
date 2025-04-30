import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-secondary/50 dark:bg-secondary/30 backdrop-blur-sm">
      <div className="container mx-auto py-12 px-4 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">BookMe+</h3>
            <p className="text-muted-foreground mb-6">
              abc
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">123 Design Street, Creative City, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:hello@bookmeplus.com" className="text-muted-foreground hover:text-primary transition-colors">hello@bookmeplus.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} BookMe+. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>;
}