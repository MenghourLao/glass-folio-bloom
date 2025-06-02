
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function EventBannerSection() {
  const eventCategories = {
    concert: [
      {
        title: "The Q Solo Concert 2",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/the%20q%20solo%20concert%202.jpg",
        location: "Central Park",
        date: "July 15, 2024"
      },
      {
        title: "The Q Solo Concert",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/the%20q%20solo%20concert.jpg",
        location: "Blue Note Club",
        date: "June 20, 2024"
      },
      {
        title: "Twilight Concert",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/twilight.jpg",
        location: "Madison Square",
        date: "August 5, 2024"
      }
    ],
    sport: [
      {
        title: "Kep Sea Mountain",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/Kep%20Sea%20Mountain.jpg",
        location: "Kep Province",
        date: "September 10, 2024"
      },
      {
        title: "Dhamma Century Cup",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/dhamma%20century%20cub.jpg",
        location: "City Center",
        date: "October 1, 2024"
      },
      {
        title: "Koh Ker Run",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/koh%20ker%20run.jpg",
        location: "Koh Ker Temple",
        date: "November 15, 2024"
      },
      {
        title: "Koh Kong Run",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Koh%20kong%20Run.jpg?raw=true",
        location: "Koh Kong Province",
        date: "December 5, 2024"
      },
      {
        title: "Padding Run",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/padding%20run.jpg",
        location: "Sports Complex",
        date: "January 20, 2025"
      },
      {
        title: "Preah Vihear Temple Run",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/preah%20vihear%20temple%20run.jpg",
        location: "Preah Vihear Temple",
        date: "February 14, 2025"
      },
      {
        title: "Romduol Children Run",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/romduol%20children.jpg?raw=true",
        location: "Community Park",
        date: "March 8, 2025"
      },
      {
        title: "Eco Run",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/eco%20run.jpg",
        location: "National Park",
        date: "April 22, 2025"
      },
      {
        title: "Valentine Run",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/valentine%20run.jpg",
        location: "Riverside Park",
        date: "February 14, 2025"
      },
      {
        title: "Wonderland Run",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/wonderland.jpg",
        location: "Adventure Park",
        date: "May 10, 2025"
      }
    ],
    workshop: [
      {
        title: "TEDx Phnom Penh",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/tex_phnom_penh.jpg?raw=true",
        location: "Convention Center",
        date: "July 25, 2024"
      },
      {
        title: "Architecture Trends in Cambodia",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/architecture%20trends%20in%20cambodia.jpg?raw=true",
        location: "Design Hub",
        date: "August 12, 2024"
      },
      {
        title: "INNEX Architecture Tour",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/innex%20architecture%20tour.jpg?raw=true",
        location: "Architecture Studio",
        date: "September 3, 2024"
      },
      {
        title: "The Platform I",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/the%20platform%20i.jpg?raw=true",
        location: "Innovation Lab",
        date: "October 8, 2024"
      },
      {
        title: "Phnom Penh Connect",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/penh%20penh%20connect.jpg?raw=true",
        location: "Business Center",
        date: "November 12, 2024"
      },
      {
        title: "Kampucheer",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/kampucheer.jpg?raw=true",
        location: "Cultural Center",
        date: "December 15, 2024"
      },
      {
        title: "The Future of E-commerce",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/the%20future%20of%20ecoomerce.jpg?raw=true",
        location: "Tech Hub",
        date: "January 18, 2025"
      },
      {
        title: "UX Fest",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/ux%20fest.jpg?raw=true",
        location: "Design Studio",
        date: "February 22, 2025"
      },
      {
        title: "The State of Graphic Design",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/the%20state%20of%20graphic%20design.jpg?raw=true",
        location: "Creative Space",
        date: "March 15, 2025"
      },
      {
        title: "Khmer Coder",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/khmer%20coder.jpg?raw=true",
        location: "Tech Center",
        date: "April 10, 2025"
      },
      {
        title: "Cambodia Blockchain Summit",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/cambodia%20blockchain%20summit.jpg?raw=true",
        location: "Conference Hall",
        date: "May 5, 2025"
      },
      {
        title: "Global Perspective",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/global%20perspective.jpg?raw=true",
        location: "International Center",
        date: "June 8, 2025"
      },
      {
        title: "Your Finance",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/your%20finance.jpg?raw=true",
        location: "Financial District",
        date: "July 12, 2025"
      },
      {
        title: "The Potential",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/the%20potiential.jpg?raw=true",
        location: "Startup Hub",
        date: "August 16, 2025"
      },
      {
        title: "SAAT Business Forum",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/saat%20business%20forum.jpg?raw=true",
        location: "Business Plaza",
        date: "September 20, 2025"
      },
      {
        title: "SAAT",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/saat.jpg?raw=true",
        location: "Event Center",
        date: "October 25, 2025"
      },
      {
        title: "Business x Reader",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/bussiness%20x%20reader.jpg?raw=true",
        location: "Library Hall",
        date: "November 30, 2025"
      },
      {
        title: "AIESEC",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/aiesec.jpg?raw=true",
        location: "University Campus",
        date: "December 8, 2025"
      },
      {
        title: "Pinnacle Entrepreneur",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/pinnacle%20entrepreneur.jpg?raw=true",
        location: "Entrepreneur Center",
        date: "January 15, 2026"
      }
    ],
    arts: [
      {
        title: "BarCamp BTB 2024",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/barcamp%20btb%202024.jpg?raw=true",
        location: "Tech Hub",
        date: "March 15, 2024"
      },
      {
        title: "Bun Phum MDK",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/bun%20phum%20mdk.jpg?raw=true",
        location: "Cultural Center",
        date: "April 12, 2024"
      },
      {
        title: "Bun Phum Mean Jern",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/bun%20phum%20mean%20jern.jpg?raw=true",
        location: "Traditional Venue",
        date: "April 18, 2024"
      },
      {
        title: "CAMEX24",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/camex24.jpg?raw=true",
        location: "Exhibition Center",
        date: "May 20, 2024"
      },
      {
        title: "Celebrating Cambodia",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/celebrating%20cambodia.jpg?raw=true",
        location: "National Museum",
        date: "June 10, 2024"
      },
      {
        title: "Code C",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/code%20c.jpg?raw=true",
        location: "Innovation Hub",
        date: "June 25, 2024"
      },
      {
        title: "Coastal Festival",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/constal%20festival.jpg?raw=true",
        location: "Coastal Park",
        date: "July 8, 2024"
      },
      {
        title: "Kampung Film Festival",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/kampung%20film%20festival.jpg?raw=true",
        location: "Cinema Complex",
        date: "August 15, 2024"
      },
      {
        title: "Khmer Heritage",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/khmer.jpg?raw=true",
        location: "Heritage Center",
        date: "September 5, 2024"
      },
      {
        title: "Niyey Arts Show",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/niyey.jpg?raw=true",
        location: "Art Gallery",
        date: "September 22, 2024"
      },
      {
        title: "Phnom Penh Plant Exhibition",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/phnom%20penh%20plant.jpg?raw=true",
        location: "Botanical Garden",
        date: "October 12, 2024"
      }
    ],
    fundraising: [
      {
        title: "Fun Run for Charity",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/fun%20run.jpg?raw=true",
        location: "City Park",
        date: "May 15, 2024"
      },
      {
        title: "Run by Heart First",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/run%20by%20heart%20first.jpg?raw=true",
        location: "Community Center",
        date: "June 8, 2024"
      },
      {
        title: "ISF Charity Event",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/isf%20charity.jpg?raw=true",
        location: "Convention Hall",
        date: "July 20, 2024"
      },
      {
        title: "Run with SAI Virtual Run",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/runwithsai%20virtual%20run.jpg?raw=true",
        location: "Virtual Event",
        date: "August 10, 2024"
      }
    ]
  };

  const [activeTab, setActiveTab] = useState("concert");
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const contentRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });

  return (
    <section className="container mx-auto py-20 px-4 bg-inherit">
      <div ref={headingRef} className="text-center mb-16 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">FEATURED EVENTS</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover amazing events happening near you across different categories
        </p>
      </div>

      <div ref={contentRef} className="fade-up">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="concert">Concert</TabsTrigger>
            <TabsTrigger value="sport">Sport</TabsTrigger>
            <TabsTrigger value="workshop">Workshop & Meetup</TabsTrigger>
            <TabsTrigger value="arts">Arts & Exhibition</TabsTrigger>
            <TabsTrigger value="fundraising">Fundraising Events</TabsTrigger>
          </TabsList>

          {Object.entries(eventCategories).map(([category, events]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <div key={index} className="glass-card overflow-hidden rounded-2xl group hover:border-primary/50 transition-all cursor-pointer">
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-sm opacity-90 mb-1">{event.location}</p>
                        <p className="text-sm opacity-75">{event.date}</p>
                      </div>
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
