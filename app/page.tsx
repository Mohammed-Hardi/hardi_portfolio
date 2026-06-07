import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import ExperienceEducationSection from "./components/ExperienceEducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
