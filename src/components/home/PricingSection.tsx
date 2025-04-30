
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from 'react';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small events",
      features: [
        "Up to 100 attendees",
        "Basic event page",
        "Email notifications",
        "Standard support"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      description: "Ideal for growing organizations",
      features: [
        "Up to 500 attendees",
        "Custom event page",
        "Email & SMS notifications",
        "Priority support",
        "Basic analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale events",
      features: [
        "Unlimited attendees",
        "Fully customizable",
        "Advanced analytics",
        "Dedicated account manager",
        "API access",
        "White-label solution"
      ]
    }
  ];

  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your event needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`glass-card p-8 rounded-3xl flex flex-col h-full relative ${
              plan.popular ? 'border-primary' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl md:text-4xl font-bold mb-4">{plan.price}</div>
            <p className="text-muted-foreground mb-6">{plan.description}</p>
            <ul className="mb-8 flex-grow space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant={plan.popular ? "default" : "outline"} className="w-full">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
