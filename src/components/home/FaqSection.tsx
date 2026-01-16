
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<'general' | 'help'>('general');

  const generalFaqs = [{
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

  const helpSupportCategories = [
    {
      category: "Account Registration & Organizer Setup",
      faqs: [
        { question: "How do I register as an event organizer on the platform?", answer: "Create an account using your email address or SSO, complete your organizer profile, and you'll be ready to host events. If you have using BookMe+ Account you can use that account" },
        { question: "What information is required to complete organizer registration?", answer: "Basic personal or business details and contact information are required." },
        { question: "How long does the organizer approval process take?", answer: "Approval typically takes one to three business days, subject to verification review." },
        { question: "Can one account manage multiple events?", answer: "Yes. A single organizer account may manage multiple events." },
        { question: "Can I invite team members to manage my events?", answer: "Yes. Organizers may invite team members and assign role-based permissions." }
      ]
    },
    {
      category: "Event Creation & Management",
      faqs: [
        { question: "How do I create a new event?", answer: "Navigate to the Organizer Dashboard, select Create Event, complete the event information, configure ticketing options, and publish." },
        { question: "What types of events are supported?", answer: "The platform supports a wide range of event types, including sports events, workshops, meetups and talks, concerts, and art exhibitions." },
        { question: "Can I create multi-day or multi-session events?", answer: "Yes. Events may include multiple days, sessions, and agendas." },
        { question: "Can I edit an event after publishing?", answer: "Yes. Most event details can be edited after publication, subject to ticket sale limitations." }
      ]
    },
    {
      category: "Ticketing & Pricing",
      faqs: [
        { question: "What ticket types are available?", answer: "Free tickets, paid tickets, and multiple ticket tiers are supported." },
        { question: "Can I offer free and paid tickets together?", answer: "Yes. Both free and paid tickets can be offered within the same event." },
        { question: "Can I create discount or promo codes?", answer: "Yes. Promo codes may be created with limits and expiration dates." }
      ]
    },
    {
      category: "Payments & Payouts",
      faqs: [
        { question: "Does the platform charge a service fee?", answer: "Yes. Applicable service fees are transparently displayed before publishing an event." },
        { question: "When will I receive my payout?", answer: "Following the conclusion of the event, BookMe+ will provide a settlement report within 3–7 days for organizer review. Upon confirmation, the payout will be processed manually by BookMe+ not included transfer fee according to the bank." }
      ]
    },
    {
      category: "Orders, Check-in & Support",
      faqs: [
        { question: "How does attendee check-in work?", answer: "Attendees present a QR code which is scanned at the event entrance." },
        { question: "Can I export attendee data?", answer: "Yes. Attendee and order data can be exported for reporting purposes." },
        { question: "How can I contact organizer support?", answer: "Support is available through the Help & Support section of the platform, or via email at hello@bookme.plus" }
      ]
    }
  ];
  
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

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => setActiveTab('general')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeTab === 'general'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          General FAQ
        </button>
        <button
          onClick={() => setActiveTab('help')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeTab === 'help'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Help & Support
        </button>
      </div>

      <div ref={accordionRef} className="max-w-3xl mx-auto glass-card p-6 sm:p-8 rounded-3xl scale-up">
        {activeTab === 'general' ? (
          <Accordion type="single" collapsible className="w-full">
            {generalFaqs.map((faq, index) => (
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
        ) : (
          <div className="space-y-8">
            {helpSupportCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">{category.category}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`cat-${catIndex}-item-${faqIndex}`}>
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
