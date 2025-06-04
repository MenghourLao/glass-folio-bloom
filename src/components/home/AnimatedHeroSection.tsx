
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventCategories } from "@/data/eventData";

interface AnimatedBanner {
  id: string;
  image: string;
  title: string;
  x: number;
  y: number;
  speed: number;
  scale: number;
  opacity: number;
  rotation: number;
  width: number;
  height: number;
}

export default function AnimatedHeroSection() {
  const [banners, setBanners] = useState<AnimatedBanner[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Get all events from all categories
  const allEvents = Object.values(eventCategories).flat();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Initialize banners with random positions and properties
  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    
    const initialBanners: AnimatedBanner[] = [];
    const numBanners = 15; // Number of banners in the animation

    for (let i = 0; i < numBanners; i++) {
      const randomEvent = allEvents[Math.floor(Math.random() * allEvents.length)];
      const banner: AnimatedBanner = {
        id: `banner-${i}`,
        image: randomEvent.image,
        title: randomEvent.title,
        x: Math.random() * (containerWidth - 200), // Random x position
        y: containerHeight + Math.random() * 500, // Start below viewport
        speed: 0.5 + Math.random() * 2, // Random speed between 0.5 and 2.5
        scale: 0.6 + Math.random() * 0.6, // Random scale between 0.6 and 1.2
        opacity: 0.3 + Math.random() * 0.7, // Random opacity between 0.3 and 1
        rotation: -15 + Math.random() * 30, // Random rotation between -15 and 15 degrees
        width: 180 + Math.random() * 120, // Random width between 180 and 300
        height: 120 + Math.random() * 80, // Random height between 120 and 200
      };
      initialBanners.push(banner);
    }

    setBanners(initialBanners);
  }, [allEvents]);

  // Animation loop
  useEffect(() => {
    if (!containerRef.current || banners.length === 0) return;

    const animate = () => {
      setBanners(prevBanners => 
        prevBanners.map(banner => {
          let newY = banner.y - banner.speed;
          
          // If banner has moved off screen, reset it at bottom with new random properties
          if (newY < -banner.height - 100) {
            const randomEvent = allEvents[Math.floor(Math.random() * allEvents.length)];
            const containerWidth = containerRef.current?.offsetWidth || 1200;
            
            return {
              ...banner,
              image: randomEvent.image,
              title: randomEvent.title,
              x: Math.random() * (containerWidth - 200),
              y: (containerRef.current?.offsetHeight || 800) + Math.random() * 300,
              speed: 0.5 + Math.random() * 2,
              scale: 0.6 + Math.random() * 0.6,
              opacity: 0.3 + Math.random() * 0.7,
              rotation: -15 + Math.random() * 30,
              width: 180 + Math.random() * 120,
              height: 120 + Math.random() * 80,
            };
          }
          
          return { ...banner, y: newY };
        })
      );
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [banners.length, allEvents]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Animated Banners Background */}
      <div className="absolute inset-0 overflow-hidden">
        {banners.map(banner => (
          <div
            key={banner.id}
            className="absolute rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:scale-110 hover:z-10"
            style={{
              left: `${banner.x}px`,
              top: `${banner.y}px`,
              transform: `scale(${banner.scale}) rotate(${banner.rotation}deg)`,
              opacity: banner.opacity,
              width: `${banner.width}px`,
              height: `${banner.height}px`,
              zIndex: Math.floor(banner.scale * 10),
            }}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
              style={{
                filter: `brightness(${0.6 + banner.opacity * 0.4}) contrast(${0.8 + banner.scale * 0.4})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated Mouse */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8">
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
            <Button size="lg" className="rounded-full px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary shadow-lg shadow-primary/25 border-0 hover:scale-105 transition-all duration-300">
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
