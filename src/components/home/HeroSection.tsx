import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return <section className="container py-20 md:py-28 px-4 mx-0 rounded-none bg-[#0aff0a]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2 text-center lg:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Simple Booking Solutions for <span className="text-primary">Modern Businesses</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 mx-auto max-w-2xl">
            BookMe+ streamlines your scheduling process with an intuitive platform designed for professionals who value their time and client experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full">
              <Link to="/case-studies" className="flex items-center gap-2">
                Create Event <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
        
      </div>
    </section>;
}