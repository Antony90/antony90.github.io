import { getTechList } from "@/constants/tech";
import ProfileCard from "./ProfileCard";
import TechOverview from "./TechOverview";
import Section from "@/components/sections/Section";

export default function HeroSection() {
  return (
    <Section
      headingText="Antony Antoniou"
      label="hero"
      headingClassName="text-4xl sm:text-5xl decoration-5"
    >
      <ProfileCard />
      <TechOverview techList={getTechList()} />
    </Section>
  );
}
