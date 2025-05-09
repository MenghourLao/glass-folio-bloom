
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudies() {
  const caseStudies = [{
    id: "harmony-wellness",
    title: "Harmony Wellness Center",
    category: "Health & Wellness",
    description: "How a multi-practitioner wellness center increased bookings by 35% and reduced administrative work by 20 hours per week.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    color: "from-blue-500/20 to-purple-500/20"
  }, {
    id: "stellar-creative",
    title: "Stellar Creative Agency",
    category: "Creative Services",
    description: "A design agency's journey to streamlining client consultations and project kickoff meetings across multiple time zones.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    color: "from-pink-500/20 to-red-500/20"
  }, {
    id: "elite-financial",
    title: "Elite Financial Advisors",
    category: "Professional Services",
    description: "How BookMe+ helped this financial firm provide a premium scheduling experience that matched their high-end brand.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    color: "from-green-500/20 to-emerald-500/20"
  }, {
    id: "global-tech",
    title: "Global Tech Solutions",
    category: "Technology",
    description: "Streamlining meeting scheduling for a tech company with team members across 12 time zones.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop",
    color: "from-yellow-500/20 to-orange-500/20"
  }, {
    id: "urban-fitness",
    title: "Urban Fitness Collective",
    category: "Fitness & Recreation",
    description: "How a fitness studio increased class attendance by 27% with automated reminders and easy booking.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    color: "from-red-500/20 to-orange-500/20"
  }, {
    id: "coastal-realty",
    title: "Coastal Realty Group",
    category: "Real Estate",
    description: "A real estate agency that boosted property viewings by giving clients self-service scheduling options.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    color: "from-cyan-500/20 to-blue-500/20"
  }];

  // Split the case studies into two rows
  const featuredCases = caseStudies.slice(0, 2); // First 2 for featured row
  const standardCases = caseStudies.slice(2); // Remaining 4 for standard row

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto py-[120px] md:py-24 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-5xl lg:text-6xl">Case Studies</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Discover how businesses across different industries have transformed their booking processes with BookMe+.
        </p>
        
        {/* Featured Case Studies - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {featuredCases.map(study => (
            <Card key={study.id} className="group overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} mix-blend-multiply opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                <img src={study.image} alt={study.title} className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
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
        
        {/* Standard Case Studies - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto">
          {standardCases.map(study => (
            <Card key={study.id} className="group overflow-hidden border-0 shadow-md h-full flex flex-col">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} mix-blend-multiply opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <span className="inline-block text-xs font-semibold text-primary mb-2 px-2 py-0.5 rounded-full bg-primary/10">{study.category}</span>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{study.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">{study.description}</p>
                <Button variant="outline" size="sm" className="rounded-full w-full mt-auto group/btn relative overflow-hidden border-primary/20 hover:border-primary/80">
                  <Link to={`/case-studies/${study.id}`} className="flex items-center justify-center gap-2 w-full">
                    <span className="relative z-10">Read Case Study</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform relative z-10" />
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
