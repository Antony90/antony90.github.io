import { getTechList } from "@/constants/tech";
import ProfileCard from "./ProfileCard";
import TechOverview from "./TechOverview";

export default function HeroSection() {
  return (
    <section
      aria-label="hero"
      className="flex flex-col gap-6 rounded-lg bg-zinc-900 p-6 text-white"
    >
      <ProfileCard />
      <TechOverview techList={getTechList()} />
    </section>
  );
}
