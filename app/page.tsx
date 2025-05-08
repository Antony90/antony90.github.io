import BlogSection from "@/components/sections/blog/BlogSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
    </>
  );
}
