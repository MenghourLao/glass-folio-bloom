
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$19",
      period: "per month",
      description: "Perfect for individuals and small businesses just getting started.",
      features: [
        "Up to 3 staff members",
        "100 bookings per month",
        "Email notifications",
        "Basic customization",
        "Standard support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Ideal for growing businesses with more advanced needs.",
      features: [
        "Up to 10 staff members",
        "Unlimited bookings",
        "Email & SMS notifications",
        "Full customization",
        "Priority support",
        "Custom booking pages",
        "Calendar integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations requiring maximum flexibility.",
      features: [
        "Unlimited staff members",
        "Unlimited bookings",
        "Advanced automation",
        "Custom integrations",
        "Dedicated account manager",
        "White-labeling options",
        "API access",
        "99.9% uptime SLA",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Pricing Hero */}
      <section className="container mx-auto py-16 md:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
          <div className="inline-block rounded-full glass p-1">
            <div className="flex space-x-1">
              <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground">
                Monthly
              </button>
              <button className="px-6 py-2 rounded-full text-foreground hover:bg-secondary/50 transition-colors">
                Yearly (Save 20%)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 md:p-8 flex flex-col ${
                plan.popular ? 'border-primary border-2 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-primary shrink-0 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                size="lg" 
                className={`w-full rounded-full ${!plan.popular ? 'bg-primary/90 hover:bg-primary' : ''}`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link to="/contact">
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-2">Is there a long-term contract?</h3>
              <p className="text-muted-foreground">No, all plans are billed monthly or annually with no long-term commitment. You can cancel anytime.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-2">Do you offer discounts for non-profits?</h3>
              <p className="text-muted-foreground">Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
