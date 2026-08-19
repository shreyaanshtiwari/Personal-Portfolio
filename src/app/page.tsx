import { AmbientCanvas } from '@/components/AmbientCanvas';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { JourneyTimeline } from '@/components/JourneyTimeline';
import { SkillsMatrix } from '@/components/SkillsMatrix';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SwaddeshCaseStudy } from '@/components/SwaddeshCaseStudy';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0709] text-[#FAF7F2] relative overflow-hidden">
      {/* 60fps Ambient Particle & Mouse Light Constellation Canvas */}
      <AmbientCanvas />

      {/* Floating Glass Navigation */}
      <Navigation />

      {/* 8 Connected Cinematic Story Chapters */}
      <HeroSection />
      <AboutSection />
      <JourneyTimeline />
      <SkillsMatrix />
      <ProjectsSection />
      <SwaddeshCaseStudy />
      <ArchitectureDiagram />
      <ContactSection />

      {/* Editorial Footer */}
      <Footer />
    </main>
  );
}
