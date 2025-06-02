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
        location: "Sports Arena",
        date: "September 10, 2024"
      },
      {
        title: "Dhamma Century Cup",
        image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/dhamma%20century%20cub.jpg",
        location: "City Center",
        date: "October 1, 2024"
      },
      {
        title: "Basketball Tournament",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=450&fit=crop",
        location: "Sports Complex",
        date: "November 15, 2024"
      }
    ],
    workshop: [
      {
        title: "Tech Innovation Workshop",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Workshop%20&%20Meetup.jpg?raw=true",
        location: "Tech Hub",
        date: "July 25, 2024"
      },
      {
        title: "Digital Marketing Meetup",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
        location: "Business Center",
        date: "August 12, 2024"
      },
      {
        title: "Startup Networking",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=450&fit=crop",
        location: "Innovation Lab",
        date: "September 3, 2024"
      }
    ],
    arts: [
      {
        title: "Modern Art Exhibition",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Arts%20&%20Exhibitions.jpg?raw=true",
        location: "Art Gallery",
        date: "June 30, 2024"
      },
      {
        title: "Photography Showcase",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=450&fit=crop",
        location: "Cultural Center",
        date: "July 18, 2024"
      },
      {
        title: "Sculpture Garden Tour",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop",
        location: "Museum of Arts",
        date: "August 22, 2024"
      }
    ],
    fundraising: [
      {
        title: "Charity Gala Night",
        image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/Fundraising%20Events.jpg?raw=true",
        location: "Grand Ballroom",
        date: "September 25, 2024"
      },
      {
        title: "Community Support Drive",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=450&fit=crop",
        location: "Community Center",
        date: "October 15, 2024"
      },
      {
        title: "Educational Fund Event",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=450&fit=crop",
        location: "School Auditorium",
        date: "November 8, 2024"
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
