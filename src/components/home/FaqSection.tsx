
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function FaqSection() {
  const faqs = [{
    question: "How does the booking process work?",
    answer: "Our booking process is simple. Organizers create events, set ticket types and prices, and publish. Attendees can then purchase tickets through the event page, receiving confirmation emails with ticket details."
  }, {
    question: "How are payments processed and when do I receive funds?",
    answer: "We process payments through secure payment gateways. With our instant payout feature, funds are transferred to your connected bank account immediately after ticket purchases, minus our service fee."
  }, {
    question: "What analytics and reports are available?",
    answer: "BookMe+ provides comprehensive analytics including sales data, attendee demographics, marketing channel performance, and post-event analysis to help you make data-driven decisions for future events."
  }, {
    question: "Is there a mobile app for check-ins?",
    answer: "Yes, we offer a mobile check-in app for organizers and staff to quickly verify tickets using QR code scanning, with both online and offline functionality to ensure smooth operations regardless of internet connectivity."
  }];
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const accordionRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.2 });
  
  return (
    <section className="container mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-inherit">
      <div ref={headingRef} className="text-center mb-12 sm:mb-16 fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">YOUR QUESTIONS, ANSWERED</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
          Find answers to commonly asked questions about BookMe+
        </p>
      </div>

      <div ref={accordionRef} className="max-w-3xl mx-auto glass-card p-6 sm:p-8 rounded-3xl scale-up">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base sm:text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
