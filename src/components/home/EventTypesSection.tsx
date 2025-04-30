
import { Music, Mic, PaintRoller, HandHeart, Video, Trophy } from "lucide-react";
import React from 'react';

export default function EventTypesSection() {
  const eventTypes = [
    {
      icon: <Music className="h-10 w-10 text-primary" />,
      title: "Concert",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Mic className="h-10 w-10 text-primary" />,
      title: "Workshop & Meetup",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <PaintRoller className="h-10 w-10 text-primary" />,
      title: "Arts & Exhibitions",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <HandHeart className="h-10 w-10 text-primary" />,
      title: "Fundraising Events",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Live",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sell tickets for any event</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether it's a concert, sports event, or workshop, BookMe+ has you covered with powerful ticketing solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {eventTypes.map((eventType, index) => (
          <div key={index} className="glass-card overflow-hidden rounded-3xl group hover:border-primary/50 transition-all">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={eventType.image} 
                alt={eventType.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
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
