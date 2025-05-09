
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
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
    <section className="container mx-auto py-20 px-4">
      <div ref={headingRef} className="text-center mb-16 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">KEY FEATURES</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the powerful tools and capabilities that make BookMe+ the leading choice for event organizers.
        </p>
      </div>

      <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
        {features.map((feature, index) => (
          <Card key={index} className="glass-card border-0 overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105" 
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <a href="#" className="text-primary font-medium flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
