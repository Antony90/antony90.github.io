import { getTechList } from "@/constants/tech";
import ProfileCard from "./ProfileCard";
import TechOverview from "./TechOverview";
import Section from "@/components/sections/Section";

export default function HeroSection() {
  return (
    <Section
      label="Hero"
      color="blue"
      noHeading
    >
      <ProfileCard />
      <TechOverview techList={getTechList()} />
    </Section>
  );
}
