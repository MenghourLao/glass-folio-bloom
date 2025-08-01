
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

type PartnerLogoProps = {
  name: string;
  logo: string;
  url: string;
};

const partnerLogos: PartnerLogoProps[] = [{
  name: "TEDx",
  logo: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/ted_logo.png",
  url: "#tedx"
}, {
  name: "RUN SAI",
  logo: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/rws_logo.png",
  url: "#runsai"
}, {
  name: "The Platform",
  logo: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/platform_logo.png",
  url: "#platform"
}, {
  name: "Sabay",
  logo: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/sabay_logo.png",
  url: "#sabay"
}, {
  name: "Celebrating Cambodia",
  logo: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/celebrating_logo.png",
  url: "#celebrating-cambodia"
}, {
  name: "CODE-C",
  logo: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/codec_logo.png",
  url: "#codec"
}, {
  name: "OmoHub",
  logo: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/omohub_logo.png",
  url: "#omohub"
}];

export default function OrganizersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const headingRef = useScrollAnimation<HTMLHeadingElement>('visible', { threshold: 0.5 });
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    let animationFrameId: number;
    let position = 0;
    
    const animate = () => {
      position -= 0.03;
      if (position <= -100) position = 100;
      carousel.style.transform = `translateX(${position}%)`;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section className="w-full py-12 sm:py-16">
      <h2 ref={headingRef} className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-center uppercase tracking-tight fade-up">
        Our Awesome Organizers
      </h2>
      <div className="relative overflow-hidden w-full">
        <div className="flex w-[90%] mx-auto" ref={carouselRef}>
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <Link key={index} to={partner.url} className="block flex-none w-[16.666%] min-w-[120px] sm:min-w-[150px]">
              <Card className="h-20 sm:h-24 flex items-center justify-center border-0 bg-transparent shadow-none">
                <CardContent className="p-2 sm:p-0 flex items-center justify-center h-full w-full transition-opacity duration-1000 hover:opacity-50">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-12 sm:max-h-16 max-w-full object-contain transition-opacity duration-1000 opacity-70 hover:opacity-100" 
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
