
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PricingSection() {
  const plans = [{
    name: "FREE",
    price: "Free",
    description: "For getting started",
    features: ["Ads on E-Ticket", "Sell on Social Networks", "QR Code Check-in Feature", "Attendee Self Check-in", "Offline Check-in Feature", "BM+ Organizer App", "Customizable Event Pages"],
    addons: ["Tutorial Videos on How to Check-in Attendance for Crews"]
  }, {
    name: "GROWTH",
    price: "10%",
    description: "Per ticket or min $0.25 service fee",
    subPrice: "or min $150 fixed fee per event",
    features: ["All Features in FREE Plan", "E-Ticket Ads Free", "Instant Payout", "Organizer Landing Page", "Business Intelligence Reports"],
    addons: ["Video Tutorial on How to Book and Pay", "Technical Support: $30 per crew/day", "Telegram & Messenger Broadcasting ($50/month per 500 contacts)"],
    popular: true
  }, {
    name: "ENTERPRISE",
    price: "Custom",
    description: "Contact us for custom pricing",
    features: ["All Features in GROWTH Plan", "Walk-in Ticket Issuing", "Multiple Sessions Check-in", "Telegram Bot Integration with Customized Post-Purchase Flow", "App & Website White Label"]
  }];
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const plansRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  
  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div ref={headingRef} className="text-center mb-16 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">BOOKME+ PRICING PLANS</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your event needs
        </p>
      </div>

      <div ref={plansRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
        {plans.map((plan, index) => (
          <div key={index} className={`glass-card p-8 rounded-3xl flex flex-col h-full relative ${plan.popular ? 'border-primary' : ''}`}>
            {plan.popular && (
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl md:text-4xl font-bold mb-2">{plan.price}</div>
            <p className="text-muted-foreground mb-2">{plan.description}</p>
            {plan.subPrice && <p className="text-sm text-muted-foreground mb-4">{plan.subPrice}</p>}
            
            {/* Features */}
            <h4 className="font-bold mt-4 mb-3">Features:</h4>
            <ul className="mb-6 flex-grow space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* Add-ons if available */}
            {plan.addons && plan.addons.length > 0 && (
              <>
                <h4 className="font-bold mb-3">Add-ons:</h4>
                <ul className="mb-6 space-y-3">
                  {plan.addons.map((addon, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <span>{addon}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            
            <Button variant={plan.popular ? "default" : "outline"} className="w-full mt-auto">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
