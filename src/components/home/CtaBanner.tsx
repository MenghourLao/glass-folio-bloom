
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function CtaBanner() {
  const bannerRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.3 });
  
  return (
    <section className="container mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-inherit">
      <div ref={bannerRef} className="glass-card p-8 sm:p-10 lg:p-16 rounded-3xl relative overflow-hidden fade-up">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Let's sell your ticket with us</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-0 lg:mb-0 max-w-2xl mx-auto lg:mx-0">
              Join thousands of successful event organizers who trust BookMe+ for their ticketing needs. Start selling tickets today!
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <Button size="lg" className="rounded-full px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base text-white" asChild>
              <a href="https://api-production.bookme.plus/organizer/sign_in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Create First Event <Send className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
