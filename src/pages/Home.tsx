
import HeroSection from "@/components/home/HeroSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import OrganizersSection from "@/components/home/OrganizersSection";
import AdvancedFeaturesSection from "@/components/home/AdvancedFeaturesSection";
import EventTypesSection from "@/components/home/EventTypesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-black">
        <HeroSection />
        <OrganizersSection />
      </div>
      
      <AdvancedFeaturesSection />
      <EventTypesSection />
      <WorkflowSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </div>
  );
}
