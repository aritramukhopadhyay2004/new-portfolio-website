import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // Deep black (#000000) viewport with desktop outer padding
    <div className="min-h-screen bg-[#000000] p-2 sm:p-4 lg:p-6 xl:p-8 selection:bg-[#ccff00] selection:text-[#000000] overflow-x-hidden">
      
      {/* Floating Shell Container: max-width 1600px, rounded-[2.5rem], ring-1 ring-white/10, shadow-2xl, background #0c0c0c */}
      <div className="max-w-[1600px] mx-auto rounded-[2.5rem] ring-1 ring-white/10 shadow-2xl bg-[#0c0c0c] relative overflow-hidden text-[#ebebeb]">
        
        {/* Decorative Element 1: 60x60px linear-gradient grid pattern */}
        <div className="absolute inset-0 bg-grid-60 opacity-60 pointer-events-none z-0" />

        {/* Decorative Element 2: 15% opacity noise SVG overlay */}
        <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-0" />

        {/* Decorative Element 3: Large 'glow-sphere' radial gradients with 120px blur filters */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] glow-sphere-lime rounded-full pointer-events-none z-0" />
        <div className="absolute top-[28%] -right-48 w-[650px] h-[650px] glow-sphere-emerald rounded-full pointer-events-none z-0" />
        <div className="absolute top-[65%] -left-32 w-[600px] h-[600px] glow-sphere-lime rounded-full pointer-events-none z-0" />

        {/* Content Layers */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ResumeSection />
          <CertificatesSection />
          <ContactSection />
          <Footer />
        </div>

      </div>

    </div>
  );
};

export default Index;
