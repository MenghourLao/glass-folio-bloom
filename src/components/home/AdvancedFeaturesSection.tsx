import React from 'react';
import { Zap, Send } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import seatSelectionImage from '@/assets/seat_selection.jpg';

export default function AdvancedFeaturesSection() {
  const features = [
    {
      title: "Sell your ticket on all platforms",
      description: "Telegram Mini App, Embedded Form on your personal website, app, chatbot on Messenger, IG, and WhatsApp.",
      image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/sell_your_ticket_on_all_platforms.jpg"
    }, 
    {
      title: "Post-Purchase Engagement Tools",
      description: "Stay close to your event-goers with pre-defined, customized flows designed to bring high retention rates and engagement through AI chatbot.",
      image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/post_purchase_engagement_tools.jpg"
    }, 
    {
      title: "Online Merchandise Sale Ready",
      description: "Sell event merchandise with tools to manage inventory, delivery, and forecast demand before production.",
      image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/e_commerce_ready.jpg"
    }, 
    {
      title: "Offline Check-In",
      description: "Fast and smooth check-in process for merchandise collection and physical ticket pickup.",
      image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/offline_check_in.jpg"
    },
    {
      title: "Self Check-In",
      description: "Inspired by the STOP COVID user experience, our app enables tech-savvy users to check themselves in using a dynamic QR code.",
      image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/self_check_in.jpg"
    },
    {
      title: "Virtualized Dashboard",
      description: "Forecast and generate demand before production.",
      image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/virtualized_dashboard.jpg"
    },
    {
      title: "Seat Selection Made Simple",
      description: "Enable attendees to choose their preferred seats with an interactive seating map. Manage seat zones, pricing, and availability directly within your event setup for a seamless and organized booking experience.",
      image: seatSelectionImage
    }
  ];

  // Split features into two rows of 3
  const firstRowFeatures = features.slice(0, 3);
  const secondRowFeatures = features.slice(3);
  
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
          <div key={index} className="glass-card rounded-3xl hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden cursor-pointer">
            <div className="flex flex-col h-full">
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M5 13L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 5H13V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 group-hover:bg-background/50 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Second row - 3 columns on desktop, 1 on mobile, 2 on tablet */}
      <div ref={secondRowRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 stagger-children">
        {secondRowFeatures.map((feature, index) => (
          <div key={index} className="glass-card rounded-3xl hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden cursor-pointer">
            <div className="flex flex-col h-full">
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M5 13L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 5H13V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 group-hover:bg-background/50 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Telegram CTA */}
      <div className="text-center">
        <Button 
          variant="outline" 
          className="glass rounded-full text-foreground bg-transparent border-primary/30 hover:bg-primary hover:text-primary-foreground px-6 py-3 h-auto"
          asChild
        >
          <a 
            href="https://t.me/bookmeplusbusiness" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <Send className="h-5 w-5" />
            <span className="text-sm font-medium">Join our Telegram Channel for more amazing features</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
