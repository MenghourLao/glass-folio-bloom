
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Event } from "@/data/eventData";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="glass-card overflow-hidden rounded-2xl group hover:border-primary/50 transition-all cursor-pointer">
      <AspectRatio ratio={16 / 9}>
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
          <h3 className="text-lg md:text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-xs md:text-sm opacity-90">{event.location}</p>
        </div>
      </AspectRatio>
    </div>
  );
}
