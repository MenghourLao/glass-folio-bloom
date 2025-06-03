import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
    id: "run-with-sai",
    title: "Run With Sai",
    category: "Sports & Events",
    description: "Enabling scalable race management for hybrid running events across Cambodia with 1,944+ tickets sold across 8 multi-format events.",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/runwithsai_case_study.jpg?raw=true",
    color: "from-orange-500/20 to-red-500/20",
    content: `
      # Case Study: BookMe+ x Run With Sai

      ## Enabling Scalable Race Management for Hybrid Running Events (2023–2025)

      # 📊 Overview

      **Client**: Run With Sai
      **Project Duration**: August 13, 2023 – September 14, 2024
      **Event Types**: Road Runs, Trail Runs, Virtual Challenges
      **Scope**: Ticketing, Check-in, Registration, Payment Integration, Crew Support

      # 🔗 Objective

      To deliver a seamless, scalable solution for managing event registration, payments, ticketing, and check-in for **8 multi-format running events** across Cambodia, while supporting both in-person and virtual participants.

      # 🚀 What We Delivered

      ## Platform Features & Customization

      - **Direct ABA Pay Integration**: Secure, fast participant payments.
      - **e-BIB Generation**: Auto-generated race bibs tailored to race distance.
      - **Telegram Integration**: Real-time alerts for each booking.
      - **Ticket Sharing**: Native sharing via Messenger, Telegram, and more.
      - **Offline Check-in**: Operator Mode for seamless on-site validation.
      - **QR Code Privacy**: Hide/show option for safe social media sharing.
      - **Downloadable Tickets**: Easy local storage and offline access.

      # 📊 Results

      ## Ticket Sales Summary

      | Event | Tickets Sold |
      |-------|-------------|
      | Kep Sea Mountain Run | 379 |
      | Preah Vihear Temple Run 2024 | 497 |
      | Koh Ker Heritage Trail | 717 |
      | Koh Kong Independence Marathon | 150 |
      | Run By Heart Actual Run 2nd Ed. | 201 |
      | Virtual & 2025 events | Pending |
      | **Total** | **1,944+** |

      # ⚙️ Operational Highlights

      ## Check-In Process

      - **Pre-check Validation**: Ticket types verified before entry.
      - **Offline Scanning**: QR codes scanned without internet dependency.
      - **BIB Distribution**: Verified runners received bibs + merchandise.

      ## Crew Enablement

      - Hands-on orientation sessions.
      - Clear SOPs for scanning, verification, and troubleshooting.

      # 🔍 Challenges & Lessons Learned

      | Category | Issue | Solution/Recommendation |
      |----------|-------|------------------------|
      | **Ticket UI** | Early launch UI caused confusion | Improved flow & instructions at launch |
      | **Overbooking** | Real-time inventory sync issues | Introduced better API throttling & queuing |
      | **Customer Support** | Underprepared team for large-scale complaints | Proposed a dedicated support team |
      | **Pre-Event Marketing** | Lack of teaser campaigns & audience warm-up | Suggested phased content strategy with real-time updates |

      # 📈 Recommendations for Future Organizers

      ## 1. Scalability & Payment Solutions
      - Integrate dynamic request thresholds.
      - Add a **standby fintech team** during high-demand launches.

      ## 2. Fraud & Ticket Transfer
      - Launch a **digital transfer tool** to avoid manual re-verification.

      ## 3. Peak Load UI/UX Enhancements
      - Real-time alerts for system load status.
      - Virtual queue system + auto-refresh for live ticket availability.

      ## 4. Marketing Readiness
      - Pre-event content: teasers, reels, behind-the-scenes.
      - Crisis communication templates for live ticketing events.

      # ✅ Outcome & Conclusion

      The Run With Sai project showcases how **BookMe+ empowers organizers** to scale across complex, multi-format event series. Despite facing real-time system demands and cross-functional challenges, our platform:

      - Delivered secure ticketing for nearly 2,000+ runners
      - Enabled hybrid check-in (offline & virtual)
      - Streamlined BIB and merchandise handovers
      - Reduced manual errors with smart automation
      - Positioned BookMe+ as a trusted long-term race partner

      **Result**: A successful multi-year collaboration with enhanced trust, repeat events, and stronger infrastructure for future growth.
    `
  },
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

  const renderContent = (content: string) => {
    const lines = content.split('\n').filter(line => line.trim());
    const elements: JSX.Element[] = [];
    let currentTable: string[][] = [];
    let inTable = false;

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        // Table row
        if (!inTable) {
          inTable = true;
          currentTable = [];
        }
        const cells = trimmedLine.split('|').slice(1, -1).map(cell => cell.trim());
        currentTable.push(cells);
      } else {
        // If we were in a table, render it now
        if (inTable && currentTable.length > 0) {
          const headers = currentTable[0];
          const rows = currentTable.slice(2); // Skip header and separator row
          
          elements.push(
            <Table key={`table-${idx}`} className="my-6">
              <TableHeader>
                <TableRow>
                  {headers.map((header, headerIdx) => (
                    <TableHead key={headerIdx} className="font-semibold">{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, rowIdx) => (
                  <TableRow key={rowIdx}>
                    {row.map((cell, cellIdx) => (
                      <TableCell key={cellIdx}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          );
          
          currentTable = [];
          inTable = false;
        }

        // Regular content
        if (trimmedLine.startsWith('# ')) {
          elements.push(<h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{trimmedLine.replace('# ', '')}</h2>);
        } else if (trimmedLine.startsWith('## ')) {
          elements.push(<h3 key={idx} className="text-xl font-semibold mt-6 mb-3">{trimmedLine.replace('## ', '')}</h3>);
        } else if (trimmedLine.startsWith('- ')) {
          elements.push(<li key={idx} className="ml-6 mb-2 list-disc">{trimmedLine.replace('- ', '')}</li>);
        } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
          elements.push(<p key={idx} className="mb-3 font-semibold">{trimmedLine.replace(/\*\*/g, '')}</p>);
        } else if (trimmedLine) {
          elements.push(<p key={idx} className="mb-4">{trimmedLine}</p>);
        }
      }
    });

    // Handle any remaining table
    if (inTable && currentTable.length > 0) {
      const headers = currentTable[0];
      const rows = currentTable.slice(2);
      
      elements.push(
        <Table key="final-table" className="my-6">
          <TableHeader>
            <TableRow>
              {headers.map((header, headerIdx) => (
                <TableHead key={headerIdx} className="font-semibold">{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIdx) => (
              <TableRow key={rowIdx}>
                {row.map((cell, cellIdx) => (
                  <TableCell key={cellIdx}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }

    return elements;
  };

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
            {caseStudy.content && renderContent(caseStudy.content)}
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
