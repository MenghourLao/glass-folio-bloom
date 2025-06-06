import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    id: "code-c-conference",
    title: "The CODE-C Developer Conference and Tech Expo 2024",
    category: "Technology & Conferences",
    description: "As Cambodia's premier tech gathering, CODE-C brought together over 3,000 developers, innovators, and digital leaders to accelerate the nation's digital journey.",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/code_cjpg.jpg?raw=true",
    color: "from-blue-500/20 to-indigo-500/20",
    content: `
      # Case Study: BookMe+ x CODE-C Developer Conference and Tech Expo 2024

      ## Cambodia's Largest Developer Gathering - Empowering Digital Transformation

      # Overview

      As Cambodia's premier tech gathering, CODE-C brought together over 3,000 developers, innovators, and digital leaders to accelerate the nation's digital journey. The event played a critical role in Cambodia's digital transformation, showcasing cutting-edge technologies and fostering collaboration within the tech community.

      # Organizer's Challenge

      Faced with limited manpower, the team struggled to manage high-volume check-ins efficiently without compromising the attendee experience. Traditional check-in methods would have required:

      - Large manpower force for manual verification
      - Extended wait times for participants
      - Potential bottlenecks at entry points
      - Risk of delays affecting the conference schedule

      # BookMe+ Solution

      BookMe+ deployed a Self Check-in system powered by dynamic QR codes—allowing attendees to check in independently and eliminating bottlenecks at entry points.

      ## Key Features Implemented:

      - **Dynamic QR Code Generation**: Each participant received a unique, secure QR code
      - **Self-Service Check-in**: Attendees could scan their own codes without staff assistance
      - **Real-time Validation**: Instant verification and entry approval
      - **Reduced Manpower Requirements**: Minimal staff needed for oversight only

      # Impact

      ## Operational Success:

      - **Streamlined check-in process**: 3,000+ participants processed smoothly
      - **Reduced staffing requirements**: Minimal crew required for oversight
      - **Enhanced operational efficiency**: Seamless entry experience with no long queues
      - **Elevated attendee experience**: Strengthened BookMe+'s role as a leader in large-scale tech event management

      ## Event Outcomes:

      | Metric | Result |
      |--------|--------|
      | Total Participants | 3,000+ |
      | Check-in Success Rate | 99.5% |
      | Average Check-in Time | Under 30 seconds |
      | Staff Reduction | 80% fewer check-in crew needed |

      # Technology Innovation

      The self check-in feature showcased BookMe+'s commitment to technological advancement:

      - **Contactless Experience**: Safe and efficient for large gatherings
      - **Scalable Architecture**: Handled high-volume simultaneous check-ins
      - **Real-time Analytics**: Live monitoring of entry flow and attendance

      # Supporting Cambodia's Digital Future

      This event demonstrates how BookMe+ directly contributes to Cambodia's digital transformation by:

      - Enabling large-scale tech gatherings
      - Showcasing innovative event management solutions
      - Supporting the growth of the local tech community
      - Providing infrastructure for knowledge sharing and networking

      # Conclusion

      The CODE-C Developer Conference and Tech Expo 2024 represents a milestone in both Cambodia's tech community growth and BookMe+'s capability to handle large-scale events. By implementing innovative self check-in solutions, we not only solved immediate logistical challenges but also demonstrated the power of technology to enhance event experiences.

      **Result**: BookMe+ successfully supported Cambodia's largest developer gathering, reinforcing our position as the go-to platform for tech events and digital transformation initiatives in the region.
    `
  },
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

      # Overview

      Client: Run With Sai
      Project Duration: August 13, 2023 – September 14, 2024
      Event Types: Road Runs, Trail Runs, Virtual Challenges
      Scope: Ticketing, Check-in, Registration, Payment Integration, Crew Support

      # Objective

      To deliver a seamless, scalable solution for managing event registration, payments, ticketing, and check-in for 8 multi-format running events across Cambodia, while supporting both in-person and virtual participants.

      # What We Delivered

      ## Platform Features & Customization

      - Direct ABA Pay Integration: Secure, fast participant payments.
      - e-BIB Generation: Auto-generated race bibs tailored to race distance.
      - Telegram Integration: Real-time alerts for each booking.
      - Ticket Sharing: Native sharing via Messenger, Telegram, and more.
      - Offline Check-in: Operator Mode for seamless on-site validation.
      - QR Code Privacy: Hide/show option for safe social media sharing.
      - Downloadable Tickets: Easy local storage and offline access.

      # Results

      ## Ticket Sales Summary

      | Event | Tickets Sold |
      |-------|-------------|
      | Kep Sea Mountain Run | 379 |
      | Preah Vihear Temple Run 2024 | 497 |
      | Koh Ker Heritage Trail | 717 |
      | Koh Kong Independence Marathon | 150 |
      | Run By Heart Actual Run 2nd Ed. | 201 |
      | Virtual & 2025 events | Pending |
      | Total | 1,944+ |

      # Operational Highlights

      ## Check-In Process

      - Pre-check Validation: Ticket types verified before entry.
      - Offline Scanning: QR codes scanned without internet dependency.
      - BIB Distribution: Verified runners received bibs + merchandise.

      ## Crew Enablement

      - Hands-on orientation sessions.
      - Clear SOPs for scanning, verification, and troubleshooting.

      # Challenges & Lessons Learned

      | Category | Issue | Solution/Recommendation |
      |----------|-------|------------------------|
      | Ticket UI | Early launch UI caused confusion | Improved flow & instructions at launch |
      | Overbooking | Real-time inventory sync issues | Introduced better API throttling & queuing |
      | Customer Support | Underprepared team for large-scale complaints | Proposed a dedicated support team |
      | Pre-Event Marketing | Lack of teaser campaigns & audience warm-up | Suggested phased content strategy with real-time updates |

      # Recommendations for Future Organizers

      ## 1. Scalability & Payment Solutions
      - Integrate dynamic request thresholds.
      - Add a standby fintech team during high-demand launches.

      ## 2. Fraud & Ticket Transfer
      - Launch a digital transfer tool to avoid manual re-verification.

      ## 3. Peak Load UI/UX Enhancements
      - Real-time alerts for system load status.
      - Virtual queue system + auto-refresh for live ticket availability.

      ## 4. Marketing Readiness
      - Pre-event content: teasers, reels, behind-the-scenes.
      - Crisis communication templates for live ticketing events.

      # Outcome & Conclusion

      The Run With Sai project showcases how BookMe+ empowers organizers to scale across complex, multi-format event series. Despite facing real-time system demands and cross-functional challenges, our platform:

      - Delivered secure ticketing for nearly 2,000+ runners
      - Enabled hybrid check-in (offline & virtual)
      - Streamlined BIB and merchandise handovers
      - Reduced manual errors with smart automation
      - Positioned BookMe+ as a trusted long-term race partner

      Result: A successful multi-year collaboration with enhanced trust, repeat events, and stronger infrastructure for future growth.
    `
  },
  {
    id: "the-q-concert",
    title: "The Q - Rise of The Queen - Aok Sokunkhanha Solo Concert",
    category: "Entertainment & Concerts",
    description: "Managing high-traffic check-in & ticketing for a landmark solo concert with 3,539 tickets sold and 98.7% check-in success rate.",
    image: "https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/lovable-uploads/The%20q%20solo%20concert_case_study.jpg?raw=true",
    color: "from-purple-500/20 to-pink-500/20",
    content: `
      # Case Study: BookMe+ x The Q Concert

      ## Managing High-Traffic Check-in & Ticketing for a Landmark Solo Concert

      # Overview

      Client: Raksamey Hang Meas 
      Event: The Q – Rise of The Queen – Aok Sokunkanha Solo Concert
      Concert Date: September 14, 2024
      Check-in Time: 9:00 AM to 8:00 PM
      Location: Koh Pich Theater, Phnom Penh
      Project Duration: August 13 to September 14, 2024

      # Project Scope & Feature Delivery

      ## Customized Platform Features:

      - Direct ABA Pay Integration: Seamless payments to Hang Meas Bank.
      - Telegram Mini-App: Ticket purchases enabled via @hang_meas_mobile_bot.
      - Seat-Based Check-in Passes: Included seat number, name, and phone for identity verification.
      - Ticket Sharing: Native support for Telegram, Messenger, and more.
      - Offline Ticket Downloads: For easy local access and printing.
      - QR Code Privacy: Show/hide option for social media sharing.
      - Seat Mapping System: Linked to the Koh Pich Hall layout for ease of navigation.

      ## Ticket Sales Breakdown:

      | Channel | Share |
      |---------|-------|
      | Web | 80% |
      | App | 16.5% |
      | Telegram BOT | 3.5% |

      ## Device Use:

      - iOS Users: 78%
      - Top Countries: Cambodia, USA, Thailand, Australia, South Korea

      # Ticket Summary

      | Ticket Type | Sold | Checked-In |
      |-------------|------|------------|
      | VIP | 700 | 697 |
      | Premium | 550 | 547 |
      | Standard | 1286 | 1259 |
      | Standard+ | 422 | 420 |
      | Standing | 581 | 573 |
      | Total | 3539 | 3496 |

      # Ticket Sale Challenges

      ## 1. High-Traffic Load & Queueing

      - Issue: 2 million+ session attempts caused queue and blank screens.
      - Cause: Server scaled 4 to 20 instances, but payment latency (5 mins) caused blockage.
      - Solution: Temporary fixes applied; some delays still occurred.

      ## 2. Overbooking & Payment Mismatches

      - Problem: Users paid but didn't receive tickets.
      - Cause: Sync issues between payment & ticket inventory.
      - Solution: Manual refunds totaling $33,390 across 235 transactions.

      # Check-in System & Fraud Prevention

      ## Crew Preparation:

      - ASK Orientation held on Sep 13, 2024 at Raintree.
      - Training on:
        - Offline QR Code Scanning (Operator Mode)
        - Pre-check Validations (phone #, seat color)
        - Wristband Distribution handover to Heng Meas crew

      ## Site Layout:

      - Assigned gates: VIP, Premium, Standard, Standing, Standard+
      - Crew divided into check-in & pre-check teams with clear roles
      - Staff briefing at 7:30 AM; staggered lunch breaks

      ## Customer Experience:

      - Staff trained to smile, assist, and remain calm under pressure

      # Manual Ticket Verification

      - New Ticket Design: Updated artwork a day before to avoid replication.
      - Phone Match Rule: Last 3 digits used to verify identity.
      - Side Effect: Some delays due to attendees not knowing the rule.

      # Final Preparations

      - CCTV: Installed 1 day before for fraud deterrence
      - Crew Training: Rushed but covered essentials; future events require longer lead time

      # Service & Marketing Limitations

      ## Customer Support:

      - Understaffed during ticket crisis
      - Recommendation: Create a dedicated support team for high-pressure moments

      ## Marketing Shortfall:

      - Limited pre-event engagement
      - Recommendation:
        - Teasers, BTS content, live updates during ticketing
        - Real-time social media crisis messaging

      # Key Recommendations for Organizers

      ## 1. Infrastructure Scalability

      - Notify users in queue of estimated wait times
      - Coordinate with payment gateway for standby tech support

      ## 2. Fraud & Transfer Solution

      - Enable digital ticket transfers to simplify and secure ownership changes

      ## 3. Peak Traffic UX Enhancements

      - Real-time status indicators
      - Virtual queue with estimated wait time
      - Auto-refresh for availability & capacity

      # Conclusion

      The Q – Rise of The Queen was BookMe+'s **largest and most demanding** concert to date. It tested our infrastructure and operations under high traffic and complex logistics.

      Despite facing system load issues and manual coordination demands, we:

      - Checked in 98.7% of all ticket holders
      - Recovered from a multi-million session spike
      - Delivered a secure, fraud-conscious check-in system

      Result: BookMe+ emerged as Cambodia's most resilient and capable ticketing platform for high-demand entertainment events. The insights gained now shape our roadmap for even greater reliability and efficiency.
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
            <div key={`table-${idx}`} className="my-8 overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    {headers.map((header, headerIdx) => (
                      <TableHead key={headerIdx} className="font-semibold text-primary">{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((row, rowIdx) => (
                    <TableRow key={rowIdx} className="border-b border-border/50">
                      {row.map((cell, cellIdx) => (
                        <TableCell key={cellIdx} className="py-3">{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          );
          
          currentTable = [];
          inTable = false;
        }

        // Regular content with improved styling
        if (trimmedLine.startsWith('# ')) {
          elements.push(
            <h2 key={idx} className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-primary border-b border-primary/20 pb-4">
              {trimmedLine.replace('# ', '')}
            </h2>
          );
        } else if (trimmedLine.startsWith('## ')) {
          elements.push(
            <h3 key={idx} className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground">
              {trimmedLine.replace('## ', '')}
            </h3>
          );
        } else if (trimmedLine.startsWith('- ')) {
          elements.push(
            <li key={idx} className="ml-6 mb-3 list-disc text-muted-foreground leading-relaxed">
              {trimmedLine.replace('- ', '')}
            </li>
          );
        } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
          elements.push(
            <p key={idx} className="mb-4 font-semibold text-lg text-foreground">
              {trimmedLine.replace(/\*\*/g, '')}
            </p>
          );
        } else if (trimmedLine) {
          elements.push(
            <p key={idx} className="mb-4 text-muted-foreground leading-relaxed">
              {trimmedLine}
            </p>
          );
        }
      }
    });

    // Handle any remaining table
    if (inTable && currentTable.length > 0) {
      const headers = currentTable[0];
      const rows = currentTable.slice(2);
      
      elements.push(
        <div key="final-table" className="my-8 overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                {headers.map((header, headerIdx) => (
                  <TableHead key={headerIdx} className="font-semibold text-primary">{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, rowIdx) => (
                <TableRow key={rowIdx} className="border-b border-border/50">
                  {row.map((cell, cellIdx) => (
                    <TableCell key={cellIdx} className="py-3">{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    }

    return elements;
  };

  return (
    <div className="animate-fade-in min-h-screen bg-background">
      {/* Hero Section - Full Width */}
      <section className="relative w-full">
        {/* Image Container - Full Width */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"></div>
        </div>
        
        {/* Hero Content - Positioned absolutely over the image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="w-full max-w-7xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-sm font-medium backdrop-blur-sm bg-white/20">
              {caseStudy.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              {caseStudy.title}
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-4xl leading-relaxed drop-shadow-lg">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Navigation */}
          <div className="mb-12">
            <Button variant="outline" className="rounded-full hover:bg-primary/10">
              <Link to="/case-studies" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Case Studies
              </Link>
            </Button>
          </div>

          {/* Content Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
            <CardContent className="p-8 md:p-12">
              {/* Case Study Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {caseStudy.content && renderContent(caseStudy.content)}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="mt-16 bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                Ready to see similar results for your business?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Join the growing list of businesses that have transformed their operations with BookMe+.
              </p>
              <Button size="lg" className="rounded-full text-lg px-8 py-6">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us Today <ArrowRight size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
