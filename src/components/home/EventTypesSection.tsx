
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function EventTypesSection() {
  const eventTypes = [{
    icon: <img src="https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/concert_icon.png" alt="Concert" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Concert",
    image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/concert.jpg"
  }, {
    icon: <img src="https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/sport_icon.png" alt="Sports" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Sports",
    image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/sport.jpg"
  }, {
    icon: <img src="https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/workshop_icon.png" alt="Workshop" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Workshop & Meetup",
    image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/workshop_and_meetup.jpg"
  }, {
    icon: <img src="https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/art_icon.png" alt="Arts" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Arts & Exhibitions",
    image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/arts_exhibitions.jpg"
  }, {
    icon: <img src="https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/fundraising_evnts_icon.png" alt="Fundraising" className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Fundraising Events",
    image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/fundraising_events.jpg"
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
