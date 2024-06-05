import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServiceSection from "@/components/ServiceSection";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-[#f4f4f4]">
      <HeroSection />
      <ProjectsSection />
      <TechStack />
      <Certifications/>
      <ServiceSection />
      <ContactSection />
    </main>
  );
}

// px-5 md:px-20
