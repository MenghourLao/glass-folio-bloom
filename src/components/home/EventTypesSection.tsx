
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function EventTypesSection() {
  const eventTypes = [{
    icon: <img src="/lovable-uploads/a9987c12-b5b0-4ba7-82b0-dda7b2dd5b12.png" alt="Concert" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Concert",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/concert.jpg?raw=true"
  }, {
    icon: <img src="/lovable-uploads/f97e5d93-45c8-4503-a3d1-04ad9874c842.png" alt="Sports" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Sports",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/sport.jpg?raw=true"
  }, {
    icon: <img src="/lovable-uploads/06b52250-d4b9-4578-a3fa-4076a2c64174.png" alt="Workshop" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Workshop & Meetup",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Workshop%20&%20Meetup.jpg?raw=true"
  }, {
    icon: <img src="/lovable-uploads/493cf6b4-ad9b-486f-b4c4-11a9fc3464b2.png" alt="Arts" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Arts & Exhibitions",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Arts%20&%20Exhibitions.jpg?raw=true"
  }, {
    icon: <img src="/lovable-uploads/c47c180f-3b81-41e2-ae4f-9a9459e11d85.png" alt="Fundraising" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Fundraising Events",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Fundraising%20Events.jpg?raw=true"
  }];
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const eventsRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  
  return (
    <section className="container mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-inherit">
      <div ref={headingRef} className="text-center mb-12 sm:mb-16 fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">SELL TICKETS FOR ANY EVENT</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
          Whether it's a concert, sports event, or workshop, BookMe+ has you covered with powerful ticketing solutions.
        </p>
      </div>

      {/* Responsive grid - 1 column on mobile, 2 on small tablet, 3 on tablet, 5 on desktop */}
      <div ref={eventsRef} className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 stagger-children">
        {eventTypes.map((eventType, index) => (
          <div key={index} className="glass-card overflow-hidden rounded-3xl group hover:border-primary/50 transition-all">
            <div className="h-40 sm:h-48 overflow-hidden relative">
              <img src={eventType.image} alt={eventType.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-4 sm:p-6 flex items-center justify-center flex-col">
              <div className="mb-3 p-2 sm:p-3 rounded-full bg-primary/10 inline-flex">
                {eventType.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-center">{eventType.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
