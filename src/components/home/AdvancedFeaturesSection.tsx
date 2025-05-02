
import React from 'react';
import { Zap, Rocket, Settings, BoltIcon, ArrowUpRight, Ticket, BarChart2, Store, Share2, QrCode, MessageCircle } from 'lucide-react';

export default function AdvancedFeaturesSection() {
  const features = [
    {
      title: "Smart Ticketing System",
      description: "Sell, scan, and manage tickets easily.",
      icon: <Ticket className="h-6 w-6 text-primary" />
    }, 
    {
      title: "Real-Time Reporting",
      description: "Track sales, attendees, and engagement.",
      icon: <BarChart2 className="h-6 w-6 text-primary" />
    }, 
    {
      title: "BookMeBusiness Self-Setup",
      description: "Self-service dashboard to set up events and manage ticket sales anytime.",
      icon: <Store className="h-6 w-6 text-primary" />
    }, 
    {
      title: "Multi-Channel Sales",
      description: "Promote across platforms with shareable links.",
      icon: <Share2 className="h-6 w-6 text-primary" />
    },
    {
      title: "On-site Check-in",
      description: "QR scan, attendee badge printing, real-time check-in.",
      icon: <QrCode className="h-6 w-6 text-primary" />
    },
    {
      title: "After-Sale Support",
      description: "Refund handling, attendee inquiries, and feedback collection.",
      icon: <MessageCircle className="h-6 w-6 text-primary" />
    }
  ];

  // Split features into two rows of 3
  const firstRowFeatures = features.slice(0, 3);
  const secondRowFeatures = features.slice(3, 6);

  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Zap className="h-4 w-4" />
          <span>POWERED BY AUTOMATION</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">BUILT FOR ORGANIZERS</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Smart tools to run events effortlessly.</p>
      </div>

      {/* First row - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {firstRowFeatures.map((feature, index) => (
          <div key={index} className="glass-card p-8 rounded-3xl hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex justify-between items-start">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Second row - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {secondRowFeatures.map((feature, index) => (
          <div key={index} className="glass-card p-8 rounded-3xl hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex justify-between items-start">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
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
