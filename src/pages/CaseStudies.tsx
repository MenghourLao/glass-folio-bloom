import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  const firstRowCases = caseStudies.slice(0, 2); // First 2 for the first row
  const secondRowCases = caseStudies.slice(2); // Remaining 4 for the second row

  return <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-5xl">Case Studies</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Discover how businesses across different industries have transformed their booking processes with BookMe+.
        </p>
        
        {/* First Row - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {firstRowCases.map(study => <div key={study.id} className="glass-card overflow-hidden">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} mix-blend-multiply`}></div>
                <img src={study.image} alt={study.title} className="w-full h-64 md:h-80 object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <div className="text-sm font-medium text-primary mb-2">{study.category}</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{study.title}</h2>
                <p className="text-muted-foreground mb-6">{study.description}</p>
                <Button variant="outline" className="rounded-full group">
                  <Link to={`/case-studies/${study.id}`} className="flex items-center gap-2">
                    Read Case Study
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>)}
        </div>
        
        {/* Second Row - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {secondRowCases.map(study => <div key={study.id} className="glass-card overflow-hidden">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} mix-blend-multiply`}></div>
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <div className="text-xs font-medium text-primary mb-1">{study.category}</div>
                <h2 className="text-lg md:text-xl font-bold mb-2">{study.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{study.description}</p>
                <Button variant="outline" size="sm" className="rounded-full group w-full">
                  <Link to={`/case-studies/${study.id}`} className="flex items-center justify-center gap-2">
                    Read Case Study
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>)}
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
    </div>;
}