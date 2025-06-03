
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "run-with-sai",
      title: "Run With Sai",
      category: "Sports & Events",
      description: "Enabling scalable race management for hybrid running events across Cambodia with 1,944+ tickets sold across 8 multi-format events.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/runwithsai_case_study.jpg?raw=true",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "the-q-concert",
      title: "The Q Concert",
      category: "Entertainment & Concerts",
      description: "Managing high-traffic check-in & ticketing for a landmark solo concert with 3,539 tickets sold and 98.7% check-in success rate.",
      image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/The%20q%20solo%20concert_case_study.jpg?raw=true",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto py-[120px] md:py-24 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-5xl lg:text-6xl">Case Studies</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Discover how businesses across different industries have transformed their booking processes with BookMe+.
        </p>
        
        {/* Featured Case Studies - 2 Columns with Fixed Height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {caseStudies.map(study => (
            <Card key={study.id} className="group overflow-hidden border-0 shadow-lg">
              <div className="relative h-72 md:h-96">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} mix-blend-multiply opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10`}></div>
                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
              </div>
              <CardContent className="p-8 relative z-10 -mt-24 bg-gradient-to-t from-background via-background/95 to-background/80">
                <span className="inline-block text-sm font-semibold text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">{study.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{study.title}</h2>
                <p className="text-muted-foreground mb-6 text-base md:text-lg">{study.description}</p>
                <Button variant="outline" className="rounded-full group/btn relative overflow-hidden border-primary/20 hover:border-primary/80">
                  <Link to={`/case-studies/${study.id}`} className="flex items-center gap-2 px-2">
                    <span className="relative z-10">Read Case Study</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform relative z-10" />
                    <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform"></span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto bg-primary/5 p-8 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to become our next success story?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing list of businesses that have revolutionized their scheduling with BookMe+.
          </p>
          <Button size="lg" className="rounded-full mx-auto bg-primary hover:bg-primary/90 transition-colors">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
