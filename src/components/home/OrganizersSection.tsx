
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

type PartnerLogoProps = {
  name: string;
  logo: string;
  url: string;
};

const partnerLogos: PartnerLogoProps[] = [{
  name: "TEDx",
  logo: "/lovable-uploads/e6a4ef5f-7af8-4950-9383-ed28c65d732d.png",
  url: "#tedx"
}, {
  name: "RUN SAI",
  logo: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
  url: "#runsai"
}, {
  name: "CODE-C",
  logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  url: "#codec"
}, {
  name: "Sabay",
  logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  url: "#sabay"
}, {
  name: "The Platform",
  logo: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
  url: "#platform"
}];

export default function OrganizersSection() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Awesome Organizers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {partnerLogos.map((partner, index) => (
          <Link key={index} to={partner.url} className="block">
            <Card className="h-24 flex items-center justify-center bg-transparent border border-white/20 hover:border-primary/50 transition-all">
              <CardContent className="p-2 flex items-center justify-center h-full w-full">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16 max-w-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" 
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
