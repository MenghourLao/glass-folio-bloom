
import HeroSection from "@/components/home/HeroSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import OrganizersSection from "@/components/home/OrganizersSection";
import AdvancedFeaturesSection from "@/components/home/AdvancedFeaturesSection";
import EventTypesSection from "@/components/home/EventTypesSection";
import GoGreenSection from "@/components/home/GoGreenSection";
import EventBannerSection from "@/components/home/EventBannerSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Home() {
  const heroRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const organizersRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const featuresRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const eventTypesRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const goGreenRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const eventBannerRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const workflowRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const testimonialRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const pricingRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const faqRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const ctaRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });

  return (
    <div className="flex flex-col w-full">
      <div className="bg-black">
        <div ref={heroRef} className="fade-up">
          <HeroSection />
        </div>
        <div ref={organizersRef} className="fade-up">
          <OrganizersSection />
        </div>
      </div>
      
      <div ref={featuresRef} className="fade-up">
        <AdvancedFeaturesSection />
      </div>
      <div ref={eventTypesRef} className="fade-up">
        <EventTypesSection />
      </div>
      <div ref={goGreenRef} className="fade-up">
        <GoGreenSection />
      </div>
      <div ref={eventBannerRef} className="fade-up">
        <EventBannerSection />
      </div>
      <div ref={workflowRef} className="fade-up">
        <WorkflowSection />
      </div>
      <div ref={testimonialRef} className="fade-up">
        <TestimonialSection />
      </div>
      <div ref={pricingRef} className="fade-up">
        <PricingSection />
      </div>
      <div ref={faqRef} className="fade-up">
        <FaqSection />
      </div>
      <div ref={ctaRef} className="fade-up">
        <CtaBanner />
      </div>
    </div>
  );
}
