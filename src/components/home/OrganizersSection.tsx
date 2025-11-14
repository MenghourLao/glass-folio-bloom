import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
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
  const headingRef = useScrollAnimation<HTMLHeadingElement>('visible', { threshold: 0.5 });
  
  return (
    <section className="w-full py-16 sm:py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <h2 ref={headingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-14 text-center uppercase tracking-tight fade-up bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
          Our Awesome Organizers
        </h2>
        
        <div className="relative w-full max-w-7xl mx-auto px-4">
          {/* Enhanced gradient fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          <Splide
            options={{
              type: 'loop',
              drag: 'free',
              focus: 'center',
              perPage: 6,
              perMove: 1,
              gap: '3rem',
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: false,
              interval: 0,
              speed: 15000,
              easing: 'linear',
              arrows: false,
              pagination: false,
              resetProgress: false,
              flickMaxPages: 3,
              updateOnMove: true,
              breakpoints: {
                1280: {
                  perPage: 5,
                  gap: '2.5rem',
                },
                1024: {
                  perPage: 4,
                  gap: '2rem',
                },
                768: {
                  perPage: 3,
                  gap: '1.5rem',
                },
                640: {
                  perPage: 2,
                  gap: '1.25rem',
                },
              },
            }}
            aria-label="Our Awesome Organizers"
          >
            {partnerLogos.map((partner, index) => (
              <SplideSlide key={index}>
                <Link 
                  to={partner.url} 
                  className="block group"
                >
                  <div className="h-28 sm:h-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-h-16 sm:max-h-20 max-w-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0" 
                    />
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
