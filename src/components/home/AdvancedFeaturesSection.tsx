
import React from 'react';
import { Zap, Rocket, Gear, Lightning, ArrowUpRight } from 'lucide-react';

export default function AdvancedFeaturesSection() {
  const features = [
    {
      title: "Smart User Engagement",
      description: "Engage with your participants like never before. Our tools streamline interactions, from anonymous Q&A sessions to categorized question groups, making moderation a breeze.",
      icon: <Zap className="h-6 w-6 text-primary" />
    }, 
    {
      title: "Embedded E-Commerce feature",
      description: "Customize the event experience with embedded e-commerce. From selecting gear to doorstep delivery, our system ensures a smooth check-in process, even for marathons with thousands of runners.",
      icon: <Rocket className="h-6 w-6 text-primary" />
    }, 
    {
      title: "Instant Payout",
      description: "Say goodbye to long settlement waits. BookMe+ offers instant payouts, ensuring efficient cash flow management for organizers with every ticket purchase.",
      icon: <Lightning className="h-6 w-6 text-primary" />
    }, 
    {
      title: "Post-Event Data Analysis",
      description: "Gain valuable insights with our post-event data analysis powered by generative AI. Understand attendee behavior from purchasing journey to session check-ins, and feedback.",
      icon: <Gear className="h-6 w-6 text-primary" />
    },
    {
      title: "Integrated Marketing Tools",
      description: "Promote your events effectively with our built-in marketing suite. Create campaigns, track performance, and optimize your reach all from a single dashboard.",
      icon: <Rocket className="h-6 w-6 text-primary" />
    },
    {
      title: "Advanced Security",
      description: "Keep your events safe with our security features including fraud detection, secure payment processing, and ticket verification to prevent unauthorized reselling.",
      icon: <Gear className="h-6 w-6 text-primary" />
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
