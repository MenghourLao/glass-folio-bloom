
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section 
      className="relative py-20 md:py-28 px-4 mx-0 rounded-none overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//hero_img.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-blue-900/70 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Platform Label */}
        <div className="flex justify-center mb-8">
          <div className="border border-white/30 rounded-full px-6 py-2 inline-block">
            <p className="text-white text-sm md:text-base">The #1 Platform for Event Management</p>
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
            Reach a Massive Audience<br />
            Sell Out Your <span className="text-primary">Next Event</span>
          </h1>
          <p className="text-lg text-white/80 mb-12 mx-auto max-w-2xl">
            Streamline registration, maximize attendance, and create unforgettable experiences with 
            the most powerful event management platform.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-base">
              <Link to="/case-studies" className="flex items-center gap-2">
                Create first event <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
