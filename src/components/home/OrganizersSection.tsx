import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Replace individual organizers with partner logos
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
  return;
}