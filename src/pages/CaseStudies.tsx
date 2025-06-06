
import { ArrowRight, Youtube } from "lucide-react";
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
      id: "preah-vihear-temple-run",
      title: "Preah Vihear Temple Run 2024",
      category: "Sports & Events",
      description: "Set in Cambodia's remote highlands, the event welcomed 1,000 runners from 13 countries—marking a 200% growth in participation over the previous year.\n\nChallenge\nLimited internet connectivity posed a major check-in challenge for organizers.\n\nSolution\nBookMe+ delivered an Offline Check-in & Sync feature, ensuring smooth operations without needing a live connection.\n\nImpact\n• Fast, dependable check-in\n• Hassle-free event execution in remote conditions\n• Widely celebrated as an authentic 'temple run' experience",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/runwithsai_case_study.jpg?raw=true",
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

        {/* YouTube Promotional Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="group overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                {/* YouTube Logo/Icon Section */}
                <div className="w-full md:w-1/3 p-8 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-700/20"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                      <Youtube size={40} className="text-red-500" />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-2/3 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Explore More on YouTube
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    Subscribe to our channel for case study breakdowns, tutorials, and more.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Youtube size={20} className="mr-2" />
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto bg-primary/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to become our next success story?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing list of businesses that have revolutionized their scheduling with BookMe+.
          </p>
          <Button size="lg" className="rounded-full mx-auto bg-primary hover:bg-primary/90 text-white transition-colors">
            <a href="https://api-production.bookme.plus/organizer/sign_in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Contact Us Today <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
