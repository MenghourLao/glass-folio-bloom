import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative h-screen px-4 mx-0 rounded-none overflow-hidden bg-cover bg-center flex items-center mt-0 pt-16"
      style={{
        backgroundImage: `url('https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//hero_img.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-black/40 to-pink-900/60 bg-[length:400%_400%] animate-gradient"></div>
      
      {/* Static overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]"></div>
      
      {/* Animated dots/particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/70 rounded-full animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/50 rounded-full animate-pulse-slow" style={{ animationDelay: "0.8s" }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse-slow" style={{ animationDelay: "1.2s" }}></div>
        
        {/* Animated Mouse */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 my-0">
        {/* Platform Label */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="border border-white/30 rounded-full px-6 py-2 inline-block backdrop-blur-md bg-black/20 hover:bg-black/40 transition-all">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <p className="text-white text-sm md:text-base">Next-Gen Event Platform</p>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            EASY TICKETS, SEAMLESS<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              EVENTS
            </span>
          </h1>
          <p className={`text-lg md:text-xl text-white/90 mb-12 mx-auto max-w-2xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Automate your ticketing effortlessly with BookMe+, giving you more time to
            create unforgettable experiences.
          </p>
          <div className={`flex justify-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Button size="lg" className="rounded-full px-8 py-6 text-base bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary shadow-lg shadow-primary/25 border-0 hover:scale-105 transition-all duration-300">
              <a
                href="https://api-production.bookme.plus/organizer/events"
                className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
              >
                Create first event <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
