
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ArrowRight, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeatureSection() {
  const features = [{
    title: "Smart Ticketing System",
    description: "Sell, scan, and manage tickets easily.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Real-Time Reporting",
    description: "Track sales, attendees, and engagement.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  }, {
    title: "BookMeBusiness Self-Setup",
    description: "Self-service dashboard to set up events and manage ticket sales anytime.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Multi-Channel Sales",
    description: "Promote across platforms with shareable links.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  }];
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const featuresRef = useScrollAnimation<HTMLDivElement>('visible', {
    threshold: 0.1
  });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Futuristic background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/40 to-black z-0"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik0wIDBoMXY0MGgtMXpNMzkgMGgxdjQwaC0xek0wIDBoNDB2MWgtNDB6TTAgMzloNDB2MWgtNDB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headingRef} className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>NEXT-GEN TICKETING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-primary to-blue-300">
            FEATURES FROM THE FUTURE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Advanced tools that put you light-years ahead of the competition
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {features.map((feature, index) => (
            <div key={index} className="group relative hover:z-20">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl rounded-3xl transform group-hover:scale-110 transition-all duration-300 opacity-70"></div>
              <Card className="relative h-full overflow-hidden backdrop-blur-sm border border-white/10 bg-black/40 rounded-3xl transition-all duration-300 group-hover:transform group-hover:translate-y-[-8px] shadow-[0_0_15px_rgba(149,128,255,0.2)]">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="mt-4 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
