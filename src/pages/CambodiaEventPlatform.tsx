
import { useEffect } from "react";
import { ArrowRight, Send, QrCode, Smartphone, BarChart3, Wifi, WifiOff, UserCheck, LayoutGrid, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function CambodiaEventPlatform() {
  useEffect(() => {
    document.title = "BookMe+ | Cambodia Event Platform";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "BookMe+ is Cambodia's leading event ticketing platform. Sell tickets, manage check-ins, and grow your events across Phnom Penh and beyond.");
    }
  }, []);

  const heroRef = useScrollAnimation<HTMLDivElement>("visible", { threshold: 0.1 });
  const aboutRef = useScrollAnimation<HTMLDivElement>("visible", { threshold: 0.1 });
  const audienceRef = useScrollAnimation<HTMLDivElement>("visible", { threshold: 0.1 });
  const featuresRef = useScrollAnimation<HTMLDivElement>("visible", { threshold: 0.1 });
  const whyRef = useScrollAnimation<HTMLDivElement>("visible", { threshold: 0.1 });
  const faqRef = useScrollAnimation<HTMLDivElement>("visible", { threshold: 0.1 });
  const ctaRef = useScrollAnimation<HTMLDivElement>("visible", { threshold: 0.1 });

  const coreFeatures = [
    {
      icon: <LayoutGrid className="h-6 w-6" />,
      title: "Seat Selection",
      description: "Let attendees choose their preferred seats with an interactive seat map, perfect for concerts, theaters, and conferences.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Sell on Telegram & Social Platforms",
      description: "Reach your audience where they are. Sell tickets directly through Telegram Mini App, Facebook, and other social channels popular in Cambodia.",
    },
    {
      icon: <QrCode className="h-6 w-6" />,
      title: "QR Code Check-In",
      description: "Fast, contactless entry with QR code scanning. Reduce queues and deliver a seamless arrival experience for every attendee.",
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Multiple Session Check-In",
      description: "Support repeated check-ins using the same QR code across multiple sessions, ideal for multi-day events and festivals.",
    },
    {
      icon: <WifiOff className="h-6 w-6" />,
      title: "Offline Check-In",
      description: "No internet? No problem. Our offline check-in mode ensures your event runs smoothly even in areas with limited connectivity.",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Self Check-In",
      description: "Empower attendees to check themselves in via kiosks or personal devices, reducing staff requirements and wait times.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-Time Dashboard",
      description: "Monitor ticket sales, attendance rates, and revenue in real time. Make data-driven decisions with powerful analytics.",
    },
  ];

  const audienceTypes = [
    { label: "Concerts & Live Shows", emoji: "🎵" },
    { label: "Workshops & Meetups", emoji: "🛠️" },
    { label: "Sports & Running Events", emoji: "🏃" },
    { label: "Art Exhibitions & Festivals", emoji: "🎨" },
    { label: "Business Conferences", emoji: "💼" },
    { label: "Community & Charity Events", emoji: "❤️" },
  ];

  const whyReasons = [
    "Built specifically for the Cambodian market with local payment integration",
    "Supports both Khmer and English for a bilingual experience",
    "Trusted by leading organizers across Phnom Penh and major cities",
    "Dedicated local support team available for every event",
    "Affordable pricing designed for Cambodia's growing event industry",
  ];

  const faqs = [
    {
      question: "What is the best event ticketing platform in Cambodia?",
      answer: "BookMe+ is Cambodia's leading event ticketing and management platform. It offers comprehensive tools for selling tickets, managing check-ins, and analyzing event performance — trusted by organizers across Phnom Penh and beyond.",
    },
    {
      question: "How does QR code check-in work for events in Cambodia?",
      answer: "When attendees purchase tickets through BookMe+, they receive a unique QR code. At the event entrance, organizers scan the QR code using the BookMe+ app for instant verification and contactless check-in.",
    },
    {
      question: "Can I sell event tickets on Telegram in Cambodia?",
      answer: "Yes. BookMe+ integrates with Telegram Mini App, allowing organizers to sell tickets directly within Telegram — one of the most popular messaging platforms in Cambodia.",
    },
    {
      question: "Does BookMe+ support offline check-in for events?",
      answer: "Absolutely. BookMe+ offers an offline check-in mode that works without an internet connection, ensuring smooth operations at venues with limited connectivity across Cambodia.",
    },
    {
      question: "How much does it cost to use BookMe+ for event ticketing?",
      answer: "BookMe+ offers competitive and transparent pricing designed for Cambodia's event market. Free events are always free to create. For paid events, visit our pricing page or contact us at hello@bookme.plus for details.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] w-full overflow-hidden bg-cover bg-center flex items-center pt-16 sm:pt-20 fade-up"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/heroimage.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-5 py-2 backdrop-blur-md bg-black/20 mb-8">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-white text-sm">Cambodia's #1 Event Platform</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              The Leading{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent">
                Cambodia Event Platform
              </span>{" "}
              for Modern Organizers
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow">
              BookMe+ empowers event organizers across Cambodia with powerful ticketing, seamless check-ins, and real-time analytics — from Phnom Penh to Siem Reap.
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 text-base bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary shadow-lg shadow-primary/25 border-0 hover:scale-105 transition-all duration-300" asChild>
              <a href="https://business.bookme.plus/organizer/sign_in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white">
                Start Selling Tickets <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is BookMe+? */}
      <section ref={aboutRef} className="container mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-inherit fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">What is BookMe+?</h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            BookMe+ is a comprehensive event ticketing platform in Cambodia designed to simplify the way organizers create, promote, and manage events. Whether you're hosting a concert in Phnom Penh, a charity run in Siem Reap, or a business conference at a top venue — BookMe+ provides everything you need in one platform.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Our event management platform Cambodia solution supports the full event lifecycle: from pre-event ticket sales and marketing, through on-site QR code check-in, to post-event reporting and settlement. With local payment integration and bilingual Khmer-English support, BookMe+ is purpose-built for Cambodia's vibrant event industry.
          </p>
        </div>
      </section>

      {/* Who is it for? */}
      <section ref={audienceRef} className="container mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-inherit fade-up">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Who is BookMe+ For?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            From intimate meetups to large-scale festivals, BookMe+ serves every type of event organizer in Cambodia.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {audienceTypes.map((type, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <span className="text-3xl mb-3 block">{type.emoji}</span>
              <h3 className="font-semibold text-sm sm:text-base">{type.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section ref={featuresRef} className="container mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-inherit fade-up">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Core Features of Our Cambodia Ticketing System</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Every tool you need to run successful events, built for Cambodia's unique market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {coreFeatures.map((feature, i) => (
            <div key={i} className="glass-card p-6 sm:p-8 rounded-3xl">
              <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose BookMe+ */}
      <section ref={whyRef} className="container mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-inherit fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose BookMe+ in Cambodia?</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              BookMe+ isn't just another ticketing tool — it's built from the ground up for Cambodia's event ecosystem.
            </p>
          </div>
          <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-5">
            {whyReasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-base sm:text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="container mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-inherit fade-up">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Common questions about event ticketing in Cambodia
          </p>
        </div>
        <div className="max-w-3xl mx-auto glass-card p-6 sm:p-8 rounded-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="container mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-inherit fade-up">
        <div className="glass-card p-8 sm:p-10 lg:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Launch Your Next Event in Cambodia?</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8">
              Join thousands of organizers who trust BookMe+ as their event ticketing platform in Cambodia. Create your first event today — it's free to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 text-base text-white" asChild>
                <a href="https://business.bookme.plus/organizer/sign_in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Create First Event <Send className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base" asChild>
                <a href="mailto:hello@bookme.plus" className="flex items-center gap-2">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
