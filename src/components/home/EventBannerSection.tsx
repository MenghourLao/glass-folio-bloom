
import React, { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { eventCategories } from "@/data/eventData";
import EventCard from "./EventCard";
import EventCategoryTabs from "./EventCategoryTabs";

export default function EventBannerSection() {
  const [activeTab, setActiveTab] = useState("concert");
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const contentRef = useScrollAnimation<HTMLDivElement>('visible', {
    threshold: 0.1
  });

  return (
    <section className="container mx-auto py-12 md:py-20 px-4 bg-inherit">
      <div ref={headingRef} className="text-center mb-12 md:mb-16 fade-up">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">FEATURED EVENTS</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">Relive iconic moments and get ready for exciting events coming your way.</p>
      </div>

      <div ref={contentRef} className="fade-up">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <EventCategoryTabs activeTab={activeTab} />

          {Object.entries(eventCategories).map(([category, events]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {events.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
