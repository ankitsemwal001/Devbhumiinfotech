import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { ProcessSection } from "@/components/process-section";
import { BlogSection } from "@/components/blog-section";
import AboutSection from "@/components/AboutSection";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <BlogSection />
      <Footer />
    </main> 
  );
}