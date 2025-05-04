import { TECH_NAMES, TechName } from "@/constants/tech";
import React from "react";
import { TechPill } from "../projects/TechPill";

export default function TechOverview({ techList }: { techList: TechName[] }) {
  return (
    <div className="rounded-lg bg-zinc-800 p-6 w-full inset-ring-1 inset-ring-zinc-700">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-zinc-800 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-zinc-800 to-transparent" />
        <div className="flex gap-4">
          <div className="animate-infinite-scroll flex items-center gap-4">
            {techList.map((t) => (
              <TechPill
                size={6}
                className="h-10 text-[1rem] font-normal"
                key={t}
                name={t}
              />
            ))}
          </div>
          <div className="animate-infinite-scroll flex items-center gap-4">
            {techList.map((t) => (
              <TechPill
                size={6}
                className="h-10 text-[1rem] font-normal"
                key={t}
                name={t}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
