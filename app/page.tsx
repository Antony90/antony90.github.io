import HeroSection from "@/components/sections/hero/HeroSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen py-6 font-[family-name:var(--font-outfit)]">
      <NavBar />
      <main className="flex flex-col gap-12 items-center max-w-[1150px] mx-auto px-0 py-6 sm:p-6">
        <HeroSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
