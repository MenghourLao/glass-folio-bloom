
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Harmony Wellness Center",
      category: "Health & Wellness",
      description: "How a multi-practitioner wellness center increased bookings by 35% and reduced administrative work by 20 hours per week.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Stellar Creative Agency",
      category: "Creative Services",
      description: "A design agency's journey to streamlining client consultations and project kickoff meetings across multiple time zones.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      color: "from-pink-500/20 to-red-500/20"
    },
    {
      title: "Elite Financial Advisors",
      category: "Professional Services",
      description: "How BookMe+ helped this financial firm provide a premium scheduling experience that matched their high-end brand.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      color: "from-green-500/20 to-emerald-500/20"
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Case Studies</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Discover how businesses across different industries have transformed their booking processes with BookMe+.
        </p>
        
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {caseStudies.map((study, index) => (
            <div key={index} className={`glass-card overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} mix-blend-multiply`}></div>
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="text-sm font-medium text-primary mb-2">{study.category}</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{study.title}</h2>
                <p className="text-muted-foreground mb-6">{study.description}</p>
                <Button variant="outline" className="rounded-full group">
                  <span className="flex items-center gap-2">
                    Read Case Study
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to become our next success story?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing list of businesses that have revolutionized their scheduling with BookMe+.
          </p>
          <Button size="lg" className="rounded-full">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
