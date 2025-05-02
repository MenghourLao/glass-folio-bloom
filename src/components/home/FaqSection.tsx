import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function FaqSection() {
  const faqs = [{
    question: "How does the booking process work?",
    answer: "Our booking process is simple. Organizers create events, set ticket types and prices, and publish. Attendees can then purchase tickets through the event page, receiving confirmation emails with ticket details."
  }, {
    question: "Can I customize the booking page to match my brand?",
    answer: "Yes! BookMe+ offers extensive customization options including color schemes, logo placement, and custom domains to ensure your booking page perfectly aligns with your brand identity."
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
  return <section className="container mx-auto py-20 px-4 bg-inherit">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">YOUR QUESTIONS, ANSWERED</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to commonly asked questions about BookMe+
        </p>
      </div>

      <div className="max-w-3xl mx-auto glass-card p-8 rounded-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>)}
        </Accordion>
      </div>
    </section>;
}