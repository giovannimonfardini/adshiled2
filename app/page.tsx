import { HeroSection } from "@/components/hero-section";
import HandlePaymentsSection from "@/components/HandlePaymentsSection";
import { CardDemoSection } from "@/components/CardDemoSection";
import PricingTableSection from "@/components/PricingTableSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import MeetTeamSection from "@/components/MeetTeamSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/footer";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatedTooltip } from "@/components/AnimatedTooltip";
import FreightUseCasesSection from "@/components/FreightUseCasesSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black pt-0 md:pt-0">
        <HeroSection />
        <HandlePaymentsSection />
        <FreightUseCasesSection />
        <CardDemoSection />
        <PricingTableSection />
        <TestimonialSection />
        <MeetTeamSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}