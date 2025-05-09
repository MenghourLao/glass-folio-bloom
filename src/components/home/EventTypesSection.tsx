
import { Music, Mic, PaintRoller, HandHeart, Trophy } from "lucide-react";
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function EventTypesSection() {
  const eventTypes = [{
    icon: <Music className="h-10 w-10 text-primary" />,
    title: "Concert",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/concert.jpg?raw=true"
  }, {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Sports",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/sport.jpg?raw=true"
  }, {
    icon: <Mic className="h-10 w-10 text-primary" />,
    title: "Workshop & Meetup",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Workshop%20&%20Meetup.jpg?raw=true"
  }, {
    icon: <PaintRoller className="h-10 w-10 text-primary" />,
    title: "Arts & Exhibitions",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Arts%20&%20Exhibitions.jpg?raw=true"
  }, {
    icon: <HandHeart className="h-10 w-10 text-primary" />,
    title: "Fundraising Events",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Fundraising%20Events.jpg?raw=true"
  }];
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const gridRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  
  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div ref={headingRef} className="text-center mb-16 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">SELL TICKETS FOR ANY EVENT</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether it's a concert, sports event, or workshop, BookMe+ has you covered with powerful ticketing solutions.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger-children">
        {eventTypes.map((eventType, index) => (
          <div key={index} className="glass-card overflow-hidden rounded-3xl group hover:border-primary/50 transition-all">
            <div className="h-48 overflow-hidden relative">
              <img src={eventType.image} alt={eventType.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-6 flex items-center justify-center flex-col">
              <div className="mb-3 p-3 rounded-full bg-primary/10 inline-flex">
                {eventType.icon}
              </div>
              <h3 className="text-xl font-bold">{eventType.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
