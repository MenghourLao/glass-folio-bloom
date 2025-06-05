
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "code-c-conference",
      title: "The CODE-C Developer Conference and Tech Expo 2024",
      category: "Technology & Conferences",
      description: "As Cambodia's premier tech gathering, CODE-C brought together over 3,000 developers, innovators, and digital leaders to accelerate the nation's digital journey.\n\nOrganizer's Challenge\nFaced with limited manpower, the team struggled to manage high-volume check-ins efficiently without compromising the attendee experience.\n\nBookMe+ Solution\nBookMe+ deployed a Self Check-in system powered by dynamic QR codes—allowing attendees to check in independently and eliminating bottlenecks at entry points.\n\nImpact\n• Streamlined check-in process\n• Reduced staffing requirements\n• Enhanced operational efficiency\n• Elevated attendee experience",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/code_cjpg.jpg?raw=true",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      id: "the-q-concert",
      title: "The Q - Rise of The Queen - Aok Sokunkhanha Solo Concert",
      category: "Entertainment & Concerts",
      description: "Managing high-traffic check-in & ticketing for a landmark solo concert with 3,539 tickets sold and 98.7% check-in success rate.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/The%20q%20solo%20concert_case_study.jpg?raw=true",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "preah-vihear-temple-run",
      title: "Preah Vihear Temple Run 2024",
      category: "Sports & Events",
      description: "Set in Cambodia's remote highlands, the event welcomed 1,000 runners from 13 countries—marking a 200% growth in participation over the previous year.\n\nChallenge\nLimited internet connectivity posed a major check-in challenge for organizers.\n\nSolution\nBookMe+ delivered an Offline Check-in & Sync feature, ensuring smooth operations without needing a live connection.\n\nImpact\n• Fast, dependable check-in\n• Hassle-free event execution in remote conditions\n• Widely celebrated as an authentic 'temple run' experience",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/preah%20vihear%20temple%20run.jpg?raw=true",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto py-[120px] md:py-24 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-5xl lg:text-6xl uppercase">CASE STUDIES</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Discover how businesses across different industries have transformed their booking processes with BookMe+.
        </p>
        
        {/* Featured Case Studies - 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {caseStudies.map(study => (
            <Card key={study.id} className="group overflow-hidden border-2 border-white/10 shadow-lg bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              {/* Image Section */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Content Section */}
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
                    {study.category}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h2>
                
                <div className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {study.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto bg-primary/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to become our next success story?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing list of businesses that have revolutionized their scheduling with BookMe+.
          </p>
          <Button size="lg" className="rounded-full mx-auto bg-primary hover:bg-primary/90 transition-colors">
            <a href="https://api-production.bookme.plus/organizer/sign_in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Contact Us Today <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
