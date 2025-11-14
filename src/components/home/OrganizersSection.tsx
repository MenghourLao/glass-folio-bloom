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
    <section className="w-full py-12 sm:py-16">
      <h2 ref={headingRef} className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-center uppercase tracking-tight fade-up">
        Our Awesome Organizers
      </h2>
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <Splide
          options={{
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 6,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            interval: 2000,
            speed: 1500,
            arrows: false,
            pagination: false,
            resetProgress: false,
            breakpoints: {
              1024: {
                perPage: 4,
                gap: '1.5rem',
              },
              768: {
                perPage: 3,
                gap: '1rem',
              },
              640: {
                perPage: 2,
                gap: '1rem',
              },
            },
          }}
          aria-label="Our Awesome Organizers"
        >
          {partnerLogos.map((partner, index) => (
            <SplideSlide key={index}>
              <Link to={partner.url} className="block">
                <Card className="h-24 sm:h-28 flex items-center justify-center border-0 bg-transparent shadow-none transition-transform hover:scale-105">
                  <CardContent className="p-4 flex items-center justify-center h-full w-full">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-16 sm:max-h-20 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" 
                    />
                  </CardContent>
                </Card>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
