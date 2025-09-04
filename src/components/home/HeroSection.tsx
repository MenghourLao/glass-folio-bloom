
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      className="relative h-screen w-full px-0 mx-0 rounded-none overflow-hidden bg-cover bg-center flex items-center mt-0 pt-12 sm:pt-16 lg:pt-20"
      style={{
        backgroundImage: `url('https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/heroimage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Mouse */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="w-full relative z-10 my-0 px-4 sm:px-6 lg:px-8">
        {/* Platform Label */}
        <div className={`flex justify-center mb-6 sm:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="border border-white/30 rounded-full px-4 py-2 sm:px-6 sm:py-2 inline-block backdrop-blur-md bg-black/20 hover:bg-black/40 transition-all">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse" />
              <p className="text-white text-xs sm:text-sm md:text-base">Next-Gen Event Platform</p>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-white transition-all duration-700 delay-200 drop-shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            EASY TICKETS, SEAMLESS<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              EVENTS
            </span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl lg:text-xl text-white/90 mb-8 sm:mb-10 lg:mb-12 mx-auto max-w-3xl px-4 transition-all duration-700 delay-300 drop-shadow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Automate your ticketing effortlessly with BookMe+, giving you more time to
            create unforgettable experiences.
          </p>
          <div className={`flex justify-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Button size="lg" className="rounded-full px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary shadow-lg shadow-primary/25 border-0 hover:scale-105 transition-all duration-300" asChild>
              <a
                href="https://business.bookme.plus/organizer/sign_in"
                target="_blank"
                rel="noopener noreferrer"
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
