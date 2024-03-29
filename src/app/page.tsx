import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServiceSection from '@/components/ServiceSection';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ProjectsSection />
      <TechStack />
      <ServiceSection />
    </main>
  );
}

// px-5 md:px-20
