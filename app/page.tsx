import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import HandlePaymentsSection from "@/components/HandlePaymentsSection";
import { CardDemoSection } from "@/components/CardDemoSection";
import PricingSection from "@/components/PricingSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import MeetTeamSection from "@/components/MeetTeamSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/footer";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatedTooltip } from "@/components/AnimatedTooltip";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <HandlePaymentsSection />
      <CardDemoSection />
      <PricingSection />
      <TestimonialSection />
      <MeetTeamSection />
      <FAQSection />
      <Footer />
    </main>
  );
}