import Header from "@/components/header";
import Footer from "@/components/footer";
import PricingSection from "@/components/PricingSection";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatedTooltip } from "@/components/AnimatedTooltip";
import { CardDemoSection } from "@/components/CardDemoSection";
import { HeroSection } from "@/components/hero-section";
import { TestimonialSection } from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import HandlePaymentsSection from "@/components/HandlePaymentsSection";
import MeetTeamSection from "@/components/MeetTeamSection";

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
  )
}