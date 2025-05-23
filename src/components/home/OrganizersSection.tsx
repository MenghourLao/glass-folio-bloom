
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
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//ted_logo_copy.png",
  url: "#tedx"
}, {
  name: "RUN SAI",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//rws_logo_copy.png",
  url: "#runsai"
}, {
  name: "CODE-C",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//codec_logo.png",
  url: "#codec"
}, {
  name: "The Platform",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//platform_logo_copy.png",
  url: "#platform"
}, {
  name: "Sabay",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//sabay_logo_copy.png",
  url: "#sabay"
}, {
  name: "Celebrating Cambodia",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//celebrating_cambo_copy.png",
  url: "#celebrating-cambodia"
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
    <section className="w-full py-16">
      <h2 ref={headingRef} className="text-xl md:text-2xl font-semibold mb-8 text-center uppercase tracking-tight fade-up">
        Our Awesome Organizers
      </h2>
      <div className="relative overflow-hidden w-full">
        <div className="flex w-[90%] mx-auto" ref={carouselRef}>
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <Link key={index} to={partner.url} className="block flex-none w-[16.666%]">
              <Card className="h-24 flex items-center justify-center border-0 bg-transparent shadow-none">
                <CardContent className="p-0 flex items-center justify-center h-full w-full">
                  <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full object-contain" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
