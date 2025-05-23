import React from 'react';
import { Zap } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function AdvancedFeaturesSection() {
  const features = [
    {
      title: "Smart Ticketing System",
      description: "Sell, scan, and manage tickets easily.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Smart%20Ticketing%20System.png?raw=true"
    }, 
    {
      title: "Real-Time Reporting",
      description: "Track sales, attendees, and engagement.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Real-Time%20Reporting.png?raw=true"
    }, 
    {
      title: "BookMeBusiness Self-Setup",
      description: "Self-service dashboard to set up events and manage ticket sales anytime.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/BookMeBusiness%20Self-Setup.png?raw=true"
    }, 
    {
      title: "Multi-Channel Sales",
      description: "Promote across platforms with shareable links.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Multi-Channel%20Sales.png?raw=true"
    },
    {
      title: "On-site Check-in",
      description: "QR scan, attendee badge printing, real-time check-in.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/On-site%20Check-in.png?raw=true"
    },
    {
      title: "After-Sale Support",
      description: "Refund handling, attendee inquiries, and feedback collection.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/After-Sale%20Support.png?raw=true"
    }
  ];

  // Split features into two rows of 3
  const firstRowFeatures = features.slice(0, 3);
  const secondRowFeatures = features.slice(3, 6);
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const firstRowRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const secondRowRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });

  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div ref={headingRef} className="text-center mb-16 relative fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Zap className="h-4 w-4" />
          <span>POWERED BY AUTOMATION</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">BUILT FOR ORGANIZERS</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Smart tools to run events effortlessly.</p>
      </div>

      {/* First row - 3 columns */}
      <div ref={firstRowRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 stagger-children">
        {firstRowFeatures.map((feature, index) => (
          <div key={index} className="glass-card p-8 rounded-3xl hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex justify-between items-start">
                <div className="h-20 w-20 flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M5 13L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 5H13V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Second row - 3 columns */}
      <div ref={secondRowRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
        {secondRowFeatures.map((feature, index) => (
          <div key={index} className="glass-card p-8 rounded-3xl hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex justify-between items-start">
                <div className="h-20 w-20 flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M5 13L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 5H13V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
