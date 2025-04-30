
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Replace individual organizers with partner logos
type PartnerLogoProps = {
  name: string;
  logo: string;
  url: string;
};

const partnerLogos: PartnerLogoProps[] = [
  {
    name: "TEDx",
    logo: "/lovable-uploads/e6a4ef5f-7af8-4950-9383-ed28c65d732d.png",
    url: "#tedx"
  },
  {
    name: "RUN SAI",
    logo: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
    url: "#runsai"
  },
  {
    name: "CODE-C",
    logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    url: "#codec"
  },
  {
    name: "Sabay",
    logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    url: "#sabay"
  },
  {
    name: "The Platform",
    logo: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
    url: "#platform"
  }
];

export default function OrganizersSection() {
  return (
    <section className="container py-20 px-4 bg-inherit">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR AWESOME ORGANIZERS</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Trusted by the world's best event organizers
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {partnerLogos.map((partner, index) => (
          <Link 
            key={index}
            to={partner.url}
            className="flex items-center justify-center h-24 transition-opacity duration-300 hover:opacity-80"
          >
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="max-h-full max-w-full object-contain filter brightness-0 invert" 
              title={partner.name}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
