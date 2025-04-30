import React from "react";
import Heading from "../ui/Heading";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import identity from "@/data/identity.json";
import { TECH_NAMES, TechName } from "@/constants/tech";
import { TechPill } from "./projects/TechPill";

export default function HeroSection() {
  return (
    <section
      aria-label="hero"
      className="flex flex-col gap-6 rounded-lg bg-zinc-900 p-6 text-white"
    >
      {/* Profile Section */}
      <div className="flex flex-col gap-6 rounded-lg bg-zinc-800 p-6">
        <div className="flex items-center gap-6">
          <h1 className="text-5xl font-semibold">{identity.name}</h1>
          <div className="ml-auto flex gap-6 max-sm:flex-col max-sm:gap-2">
            <FaGithub className="size-8" />
            <FaLinkedin className="size-8" />
            <MdEmail className="size-8" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <Heading className="" text={"About Me"} />
            <p className="text-lg">
              {identity.about.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 overflow-hidden rounded-lg bg-zinc-800 p-6">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-zinc-800 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-zinc-800 to-transparent" />
            <div className="flex w-0">
              <div className="animate-infinite-scroll flex items-center gap-4">
                {(Object.entries(TECH_NAMES).map(([t]) => t) as TechName[]).map(
                  (t) => (
                    <TechPill
                      size={6}
                      className="h-10 text-[1rem] font-normal"
                      key={t}
                      name={t}
                    />
                  ),
                )}
              </div>
              <div className="animate-infinite-scroll flex items-center gap-4">
                {(Object.entries(TECH_NAMES).map(([t]) => t) as TechName[]).map(
                  (t) => (
                    <TechPill
                      size={6}
                      className="h-10 text-[1rem] font-normal"
                      key={t}
                      name={t}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
