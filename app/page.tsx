import BlogSection from "@/components/sections/blog/BlogSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
    </>
  );
}
