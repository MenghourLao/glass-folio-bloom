import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return <section className="container mx-auto py-20 md:py-28 px-4 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Simple Booking Solutions for <span className="text-primary">Modern Businesses</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            BookMe+ streamlines your scheduling process with an intuitive platform designed for professionals who value their time and client experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full">
              <Link to="/case-studies" className="flex items-center gap-2">
                View Case Studies <ArrowRight size={16} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
        <div className="glass-card p-6 md:p-8 relative">
          <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Person using BookMe+ on laptop" className="w-4/5 h-4/5 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>;
}