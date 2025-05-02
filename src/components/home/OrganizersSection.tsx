
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

type PartnerLogoProps = {
  name: string;
  logo: string;
  url: string;
};

const partnerLogos: PartnerLogoProps[] = [
  {
    name: "TEDx",
    logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//ted_logo.png",
    url: "#tedx"
  }, {
    name: "RUN SAI",
    logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//rws_logo.png",
    url: "#runsai"
  }, {
    name: "CODE-C",
    logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//codec_logo.png",
    url: "#codec"
  }, {
    name: "The Platform",
    logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//platform_logo.png",
    url: "#platform"
  }, {
    name: "Sabay",
    logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//sabay_logo.png",
    url: "#sabay"
  }, {
    name: "Celebrating Cambodia",
    logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//celebrating_cambo.png",
    url: "#celebrating-cambodia"
  }
];

export default function OrganizersSection() {
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel1 = carousel1Ref.current;
    const carousel2 = carousel2Ref.current;
    
    if (!carousel1 || !carousel2) return;
    
    let animationFrameId: number;
    let position1 = 0;
    let position2 = -100;
    
    const animate = () => {
      // Move first carousel from right to left
      position1 -= 0.05;
      if (position1 <= -100) position1 = 100;
      carousel1.style.transform = `translateX(${position1}%)`;
      
      // Move second carousel from right to left with offset
      position2 -= 0.05;
      if (position2 <= -100) position2 = 100;
      carousel2.style.transform = `translateX(${position2}%)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Awesome Organizers</h2>
      
      <div className="relative overflow-hidden w-full">
        {/* First carousel row */}
        <div className="flex w-[200%] mb-6" ref={carousel1Ref}>
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <Link key={index} to={partner.url} className="block flex-none w-[16.666%]">
              <Card className="h-24 flex items-center justify-center border-0 bg-transparent shadow-none mx-2">
                <CardContent className="p-2 flex items-center justify-center h-full w-full">
                  <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full object-contain" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Second carousel row (moving in the opposite direction) */}
        <div className="flex w-[200%]" ref={carousel2Ref}>
          {[...partnerLogos.slice().reverse(), ...partnerLogos.slice().reverse()].map((partner, index) => (
            <Link key={index} to={partner.url} className="block flex-none w-[16.666%]">
              <Card className="h-24 flex items-center justify-center border-0 bg-transparent shadow-none mx-2">
                <CardContent className="p-2 flex items-center justify-center h-full w-full">
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
