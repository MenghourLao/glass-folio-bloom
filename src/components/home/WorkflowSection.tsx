
import { Check } from "lucide-react";
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function WorkflowSection() {
  const workflowSteps = [{
    title: "Pre-event",
    description: "Pre-sell your tickets & provide fully comms support to boost your sales, real time KYC participation tracking dashboard"
  }, {
    title: "During Event",
    description: "Smart Check-in system to easily verify the bookings and tickets. Real time notifications alert on event agenda."
  }, {
    title: "After Event",
    description: "Detail post event analysis report from e-ticket sale report, event promoting performance, attendee behaviour, and check-in entry insight"
  }];
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const stepsRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.2 });
  
  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div ref={headingRef} className="text-center mb-16 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR WORKFLOW FROM START TO END</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          BookMe+ supports you through every stage of your event journey.
        </p>
      </div>

      <div ref={stepsRef} className="flex flex-col md:flex-row gap-6 stagger-children">
        {workflowSteps.map((step, index) => (
          <div key={index} className="flex-1 glass-card p-8 rounded-3xl relative">
            <div className="absolute top-6 right-6">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
