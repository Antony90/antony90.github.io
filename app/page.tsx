import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-12  p-6 font-[family-name:var(--font-outfit)]">
      <NavBar />
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
