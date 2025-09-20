import HeroSection from "@/components/portfolio/HeroSection";
import WorkExperience from "@/components/portfolio/WorkExperience";
import WorkSamples from "@/components/portfolio/WorkSamples";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WorkExperience />
      <WorkSamples />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
