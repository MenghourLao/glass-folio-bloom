import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  return <div className="animate-fade-in">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="container mx-auto py-20 px-4 text-center bg-black">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to simplify your booking process?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust BookMe+ for their scheduling needs.
          </p>
          <Button size="lg" className="rounded-full">
            <Link to="/contact" className="flex items-center gap-2">
              Get Started Today <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>;
}