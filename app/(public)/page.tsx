import { HeroSection } from "@/components/sections/hero-section";
import { BrandSection } from "@/components/sections/brand-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <BrandSection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <DifferentialsSection />
    </div>
  );
}
