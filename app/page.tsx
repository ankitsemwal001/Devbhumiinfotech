import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
// import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { BlogSection } from "@/components/blog-section";
import ProcessSection from "@/components/process-section";
import { AboutSection } from "@/components/AboutSection";
import { PackagesSection } from "@/components/packages-section";;
import { ProjectsSection } from "@/components/projects-section";
import { CtaSection } from "@/components/Cta";
// import { FaqSection } from "@/components/faq-section";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <HeroSection />
      {/* <StatsSection /> */}
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection/>
      <PackagesSection />
      <ProjectsSection/>
      <CtaSection />
      <BlogSection />
      <Footer />
    </main> 
  );
}