
import React from 'react';
import { Zap } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function AdvancedFeaturesSection() {
  const features = [
    {
      title: "Sell your ticket on all platforms",
      description: "Telegram Mini App, Embedded Form on your personal website, app, chatbot on Messenger, IG, and WhatsApp.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Sell%20your%20ticket%20on%20all%20platforms.jpg?raw=true"
    }, 
    {
      title: "Post-Purchase Engagement Tools",
      description: "Stay close to your event-goers with pre-defined, customized flows designed to bring high retention rates and engagement through AI chatbot.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Post-Purchase%20Engagement%20Tools.jpg?raw=true"
    }, 
    {
      title: "E-Commerce Ready",
      description: "Seamlessly manage merchandise inventory and shipment delivery. Forecast and generate demand before production.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/E-Commerce%20Ready.jpg?raw=true"
    }, 
    {
      title: "Offline Check-In",
      description: "Fast and smooth check-in process for merchandise collection and physical ticket pickup.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Offline%20Check-In.jpg?raw=true"
    },
    {
      title: "Self Check-In",
      description: "Inspired by the STOP COVID user experience, our app enables tech-savvy users to check themselves in using a dynamic QR code.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Self%20Check-In.jpg?raw=true"
    },
    {
      title: "Virtualized Dashboard",
      description: "Forecast and generate demand before production.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Virtualized%20Dashboard.jpg?raw=true"
    }
  ];

  // Split features into two rows of 3
  const firstRowFeatures = features.slice(0, 3);
  const secondRowFeatures = features.slice(3, 6);
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const firstRowRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const secondRowRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });

  return (
    <section className="container mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-inherit">
      <div ref={headingRef} className="text-center mb-12 sm:mb-16 relative fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4">
          <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>POWERED BY AUTOMATION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">BUILT FOR ORGANIZERS</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">Smart tools to run events effortlessly.</p>
      </div>

      {/* First row - 3 columns on desktop, 1 on mobile, 2 on tablet */}
      <div ref={firstRowRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 stagger-children">
        {firstRowFeatures.map((feature, index) => (
          <div key={index} className="glass-card rounded-3xl hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow-lg">
                    <path d="M5 13L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 5H13V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Second row - 3 columns on desktop, 1 on mobile, 2 on tablet */}
      <div ref={secondRowRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 stagger-children">
        {secondRowFeatures.map((feature, index) => (
          <div key={index} className="glass-card rounded-3xl hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow-lg">
                    <path d="M5 13L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 5H13V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
