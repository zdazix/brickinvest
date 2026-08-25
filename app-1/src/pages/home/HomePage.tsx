import { HeroSection } from "@/pages/home/components/HeroSection";
import { AboutSection } from "@/pages/home/components/AboutSection";
import { WhyUsSection } from "@/pages/home/components/WhyUsSection";
import { OffersSection } from "@/pages/home/components/OffersSection";
import { ServicesSection } from "@/pages/home/components/ServicesSection";
import { ProjectsSection } from "@/pages/home/components/ProjectsSection";
import { InvestmentSolutionsSection } from "@/pages/home/components/InvestmentSolutionsSection";
import { IntelligenceSection } from "@/pages/home/components/IntelligenceSection";
import { LocationMarquee } from "@/pages/home/components/LocationMarquee";

export const HomePage = () => (
  <main id="main-content">
    <HeroSection />
    <AboutSection />
    <LocationMarquee />
    <WhyUsSection />
    <OffersSection />
    <ServicesSection />
    <ProjectsSection />
    <InvestmentSolutionsSection />
    <IntelligenceSection />
  </main>
);
