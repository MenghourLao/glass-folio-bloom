
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function CtaBanner() {
  const bannerRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.3 });
  
  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div ref={bannerRef} className="glass-card p-10 md:p-16 rounded-3xl relative overflow-hidden fade-up">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's sell your ticket with us</h2>
            <p className="text-muted-foreground text-lg mb-0 md:mb-0 max-w-2xl">
              Join thousands of successful event organizers who trust BookMe+ for their ticketing needs. Start selling tickets today!
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button size="lg" className="rounded-full px-8 py-6 text-base text-white">
              <Link to="/contact" className="flex items-center gap-2">
                Create First Event <Send className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
