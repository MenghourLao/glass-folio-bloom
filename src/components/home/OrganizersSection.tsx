import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
type OrganizerProps = {
  name: string;
  role: string;
  image: string;
};
const organizers: OrganizerProps[] = [{
  name: "Alex Johnson",
  role: "Event Director",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
}, {
  name: "Sarah Williams",
  role: "Marketing Lead",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
}, {
  name: "Michael Chen",
  role: "Technical Director",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
}];
export default function OrganizersSection() {
  return <section className="container py-20 px-4 bg-inherit">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Awesome Organizers</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Meet the talented team behind BookMe+ who make extraordinary events happen
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {organizers.map((organizer, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img src={organizer.image} alt={organizer.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-xl mb-1">{organizer.name}</h3>
              <p className="text-muted-foreground mb-4">{organizer.role}</p>
              <Button variant="outline" size="sm" className="rounded-full">
                <Link to="/contact" className="flex items-center gap-1">
                  Contact <ArrowRight size={14} />
                </Link>
              </Button>
            </CardContent>
          </Card>)}
      </div>
    </section>;
}