
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

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
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headingRef} className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white/80 animate-gradient">
            POWERFUL FEATURES
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to create successful events and sell tickets with ease
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {features.map((feature, index) => (
            <div key={index} className="glass-card flex flex-col h-full rounded-3xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{feature.description}</p>
                <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
