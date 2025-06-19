
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Leaf, TreePine, Recycle, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function GoGreenSection() {
  const greenFeatures = [
    {
      icon: <Leaf className="h-8 w-8 text-green-400" />,
      title: "Digital Tickets Only",
      description: "100% paperless ticketing system reduces paper waste and carbon footprint.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-400" />,
      title: "Carbon Neutral Events",
      description: "Track and offset your event's environmental impact with our sustainability tools.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-400" />,
      title: "Waste Reduction",
      description: "Smart analytics help minimize event waste and promote recycling initiatives.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Wind className="h-8 w-8 text-green-400" />,
      title: "Green Partnerships",
      description: "Connect with eco-friendly vendors and sustainable event suppliers.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const featuresRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  
  return (
    <section className="container mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-950/20 to-black">
      <div ref={headingRef} className="text-center mb-12 sm:mb-16 fade-up">
        <div className="flex items-center justify-center mb-4">
          <Leaf className="h-8 w-8 text-green-400 mr-3" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-green-400">GO GREEN WITH BOOKME+</h2>
          <Leaf className="h-8 w-8 text-green-400 ml-3" />
        </div>
        <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base px-4">
          Join the sustainable event revolution. BookMe+ helps you create memorable events while protecting our planet through innovative eco-friendly solutions.
        </p>
      </div>

      <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children">
        {greenFeatures.map((feature, index) => (
          <Card key={index} className="glass-card border-green-400/20 hover:border-green-400/50 transition-all group overflow-hidden">
            <div className="h-40 sm:h-48 overflow-hidden relative">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-green-400/20 backdrop-blur-sm">
                {feature.icon}
              </div>
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-green-400">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12 sm:mt-16">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-400/10 border border-green-400/30">
          <Recycle className="h-5 w-5 text-green-400 mr-2" />
          <span className="text-green-400 font-medium">Making Every Event Count for the Planet</span>
        </div>
      </div>
    </section>
  );
}
