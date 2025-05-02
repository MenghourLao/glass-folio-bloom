
import React from 'react';

export default function AdvancedFeaturesSection() {
  const features = [
    {
      title: "Smart User Engagement",
      description: "Engage with your participants like never before. Our tools streamline interactions, from anonymous Q&A sessions to categorized question groups, making moderation a breeze."
    }, 
    {
      title: "Embedded E-Commerce feature",
      description: "Customize the event experience with embedded e-commerce. From selecting gear to doorstep delivery, our system ensures a smooth check-in process, even for marathons with thousands of runners."
    }, 
    {
      title: "Instant Payout",
      description: "Say goodbye to long settlement waits. BookMe+ offers instant payouts, ensuring efficient cash flow management for organizers with every ticket purchase."
    }, 
    {
      title: "Post-Event Data Analysis",
      description: "Gain valuable insights with our post-event data analysis powered by generative AI. Understand attendee behavior from purchasing journey to session check-ins, and feedback."
    },
    {
      title: "Integrated Marketing Tools",
      description: "Promote your events effectively with our built-in marketing suite. Create campaigns, track performance, and optimize your reach all from a single dashboard."
    },
    {
      title: "Advanced Security",
      description: "Keep your events safe with our security features including fraud detection, secure payment processing, and ticket verification to prevent unauthorized reselling."
    }
  ];

  // Split features into two rows of 3
  const firstRowFeatures = features.slice(0, 3);
  const secondRowFeatures = features.slice(3, 6);

  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">BUILT FOR ORGANIZERS,
POWERED BY AUTOMATION</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Smart tools to run events effortlessly.</p>
      </div>

      {/* First row - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {firstRowFeatures.map((feature, index) => (
          <div key={index} className="glass-card p-8 rounded-3xl">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
                  {index + 1}
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
          <div key={index} className="glass-card p-8 rounded-3xl">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
                  {index + 4}
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
