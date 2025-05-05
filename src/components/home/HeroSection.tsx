
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Parallax effect for particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current) return;
      
      const particles = particlesRef.current.querySelectorAll('.particle');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      particles.forEach((particle, i) => {
        const speed = (i + 1) * 0.5;
        const particleEl = particle as HTMLElement;
        
        particleEl.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      {/* Enhanced overlay with futuristic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-purple-950/40 backdrop-blur-md"></div>
      
      {/* Enhanced animated particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-slow"></div>
        <div className="particle absolute top-1/3 right-1/3 w-3 h-3 bg-primary/70 rounded-full animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
        <div className="particle absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/50 rounded-full animate-pulse-slow" style={{ animationDelay: "0.8s" }}></div>
        <div className="particle absolute top-2/3 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse-slow" style={{ animationDelay: "1.2s" }}></div>
        <div className="particle absolute top-1/5 right-1/2 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse-slow blur-sm" style={{ animationDelay: "0.3s" }}></div>
        <div className="particle absolute bottom-1/3 right-1/5 w-5 h-5 bg-blue-400/20 rounded-full animate-pulse-slow blur-sm" style={{ animationDelay: "1.5s" }}></div>
        {/* Digital circuit lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 L1000,150" stroke="rgba(149, 128, 255, 0.7)" strokeWidth="0.5" />
            <path d="M0,150 L1000,350" stroke="rgba(149, 128, 255, 0.5)" strokeWidth="0.5" />
            <path d="M0,500 L1000,700" stroke="rgba(149, 128, 255, 0.6)" strokeWidth="0.5" />
            <path d="M0,700 L1000,900" stroke="rgba(149, 128, 255, 0.4)" strokeWidth="0.5" />
            <path d="M300,0 L400,1000" stroke="rgba(149, 128, 255, 0.5)" strokeWidth="0.5" />
            <path d="M700,0 L600,1000" stroke="rgba(149, 128, 255, 0.6)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 my-0">
        {/* Platform Label with enhanced futuristic look */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="border border-primary/30 rounded-full px-6 py-2 inline-block backdrop-blur-lg bg-black/50 hover:bg-black/60 transition-all shadow-[0_0_15px_rgba(149,128,255,0.3)]">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <p className="text-white text-sm md:text-base">Next-Gen Event Platform</p>
            </div>
          </div>
        </div>

        {/* Enhanced Main Heading with futuristic design */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            EASY TICKETS, SEAMLESS<br />
            <span className="bg-gradient-to-r from-purple-400 via-primary to-blue-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              EVENTS
            </span>
          </h1>
          <p className={`text-lg md:text-xl text-white/90 mb-12 mx-auto max-w-2xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Automate your ticketing effortlessly with BookMe+, giving you more time to
            create unforgettable experiences.
          </p>
          <div className={`flex justify-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Button size="lg" className="group rounded-full px-8 py-7 text-base bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary shadow-lg shadow-primary/25 border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <a
                href="https://api-production.bookme.plus/organizer/events"
                className="flex items-center gap-2 text-white group-hover:text-white transition-colors"
              >
                Create first event 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
            </Button>
          </div>
        </div>
      </div>

      {/* Futuristic glow effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/20 to-transparent"></div>
    </section>
  );
}
