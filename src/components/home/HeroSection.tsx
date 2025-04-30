
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="container py-20 md:py-28 px-4 mx-0 rounded-none bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Simple Booking Solutions for <span className="text-primary">Next Event</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 mx-auto max-w-2xl">
            Streamline registration, maximize attendance, and create unforgettable experiences with the most powerful event management platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full">
              <Link to="/case-studies" className="flex items-center gap-2">
                Create Event <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-center">
          <div className="animate-pulse-slow relative w-full max-w-md h-80 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
              alt="Event Management Platform" 
              className="absolute inset-0 w-full h-full object-cover object-center opacity-60 mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
