
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Pricing() {
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
    <div className="animate-fade-in">
      {/* Pricing Hero */}
      <section className="container mx-auto py-16 md:py-24 px-4">
        <div ref={headingRef} className="text-center mb-16 fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BOOKME+ PRICING PLANS</h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Choose the perfect plan for your event needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={plansRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-children">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 rounded-3xl flex flex-col h-full relative ${plan.popular ? 'border-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-8 -translate-y-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
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
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className={`w-full mt-auto hover:scale-105 transition-all duration-300 font-semibold h-12 ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-primary/90 border-primary shadow-lg shadow-primary/25' 
                    : 'border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/10 hover:text-primary backdrop-blur-sm'
                }`}
                asChild
              >
                <a 
                  href="https://api-production.bookme.plus/organizer/sign_in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full py-3"
                >
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        {/* FAQ Section - Keeping this from original pricing page */}
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
