
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  content?: string;
}

// Mock database of case studies
const caseStudiesData: CaseStudy[] = [
  {
    id: "harmony-wellness",
    title: "Harmony Wellness Center",
    category: "Health & Wellness",
    description: "How a multi-practitioner wellness center increased bookings by 35% and reduced administrative work by 20 hours per week.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    color: "from-blue-500/20 to-purple-500/20",
    content: `
      # The Challenge

      Harmony Wellness Center is a holistic health facility that houses multiple practitioners including massage therapists, acupuncturists, nutritionists, and yoga instructors. With 15 practitioners sharing 8 treatment rooms, their manual booking system was causing:

      - Scheduling conflicts between practitioners
      - Long phone calls for booking appointments
      - High rate of no-shows (22%)
      - Administrative staff spending 30+ hours weekly on scheduling alone

      # The Solution

      BookMe+ implemented a customized scheduling system that:

      - Created individual practitioner profiles with their specialties and availability
      - Automated room allocation based on treatment type and availability
      - Sent automated appointment reminders via email and SMS
      - Enabled clients to book appointments online 24/7

      # The Results

      After six months of using BookMe+, Harmony Wellness Center saw:

      - 35% increase in bookings
      - Reduction in administrative work by 20 hours per week
      - No-show rate decreased from 22% to 8%
      - Client satisfaction scores improved by 28%
      - Room utilization increased by 40%

      The center was able to redirect administrative resources to marketing efforts and client experience improvements, resulting in additional revenue growth.
    `
  },
  {
    id: "stellar-creative",
    title: "Stellar Creative Agency",
    category: "Creative Services",
    description: "A design agency's journey to streamlining client consultations and project kickoff meetings across multiple time zones.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    color: "from-pink-500/20 to-red-500/20",
    content: `
      # The Challenge

      Stellar Creative Agency works with clients across North America, Europe, and Asia. Their team faced significant challenges with:

      - Coordinating meetings across up to 12 different time zones
      - Manual time conversion leading to missed meetings
      - Multiple email exchanges to find suitable meeting times
      - Clients frustrated with the lengthy booking process

      # The Solution

      BookMe+ provided Stellar Creative Agency with:

      - Timezone-intelligent scheduling that automatically displays available times in the client's local timezone
      - Customized booking pages for different meeting types (consultations, kickoffs, reviews)
      - Integration with their project management tool
      - Branded booking experience matching their design-forward image

      # The Results

      Within the first quarter of implementation:

      - Client meeting setup time reduced by 92%
      - Zero missed meetings due to timezone confusion
      - 28% increase in international client consultations
      - Improved client satisfaction scores for onboarding process

      The agency was able to expand its international client base with confidence, knowing their scheduling system could handle the complexity.
    `
  },
  // Add more case studies with detailed content as needed
  {
    id: "elite-financial",
    title: "Elite Financial Advisors",
    category: "Professional Services",
    description: "How BookMe+ helped this financial firm provide a premium scheduling experience that matched their high-end brand.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
    content: "Detailed case study content goes here..."
  },
  {
    id: "global-tech",
    title: "Global Tech Solutions",
    category: "Technology",
    description: "Streamlining meeting scheduling for a tech company with team members across 12 time zones.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop",
    color: "from-yellow-500/20 to-orange-500/20",
    content: "Detailed case study content goes here..."
  },
  {
    id: "urban-fitness",
    title: "Urban Fitness Collective",
    category: "Fitness & Recreation",
    description: "How a fitness studio increased class attendance by 27% with automated reminders and easy booking.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    color: "from-red-500/20 to-orange-500/20",
    content: "Detailed case study content goes here..."
  },
  {
    id: "coastal-realty",
    title: "Coastal Realty Group",
    category: "Real Estate",
    description: "A real estate agency that boosted property viewings by giving clients self-service scheduling options.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    color: "from-cyan-500/20 to-blue-500/20",
    content: "Detailed case study content goes here..."
  }
];

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  
  useEffect(() => {
    // Find the case study based on the ID from the URL
    const foundCaseStudy = caseStudiesData.find(study => study.id === id);
    setCaseStudy(foundCaseStudy || null);
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
        <p className="mb-6">The case study you're looking for doesn't exist.</p>
        <Button>
          <Link to="/case-studies" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} mix-blend-multiply`}></div>
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="container mx-auto px-4 py-20 text-center text-white">
            <div className="text-sm md:text-base font-medium text-primary-foreground mb-2">{caseStudy.category}</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <Button variant="outline" className="mb-8 rounded-full">
            <Link to="/case-studies" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Case Studies
            </Link>
          </Button>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {caseStudy.content?.split('\n').map((paragraph, idx) => {
              if (paragraph.trim().startsWith('# ')) {
                return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h2>
              } else if (paragraph.trim().startsWith('- ')) {
                return <li key={idx} className="ml-6 mb-2">{paragraph.replace('- ', '')}</li>
              } else if (paragraph.trim()) {
                return <p key={idx} className="mb-4">{paragraph}</p>
              }
              return null;
            })}
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Ready to see similar results for your business?</h3>
            <Button size="lg" className="rounded-full">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us Today <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
