import { TechName } from "@/constants/tech";
import React from "react";
import { TechPill } from "../projects/TechPill";
import Card from "@/components/ui/Card";

export default function TechOverview({ techList }: { techList: TechName[] }) {
  return (
    <Card className="w-full inset-ring-accent/20">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-card to-transparent" />
        <div className="flex gap-4">
          <div className="animate-infinite-scroll flex items-center gap-2">
            {techList.map((t) => (
              <TechPill
                size={4}
                className="h-8 text-xl font-normal"
                key={t}
                name={t}
              />
            ))}
          </div>
          <div className="animate-infinite-scroll flex items-center gap-2">
            {techList.map((t) => (
              <TechPill
                size={4}
                className="h-8 text-xl font-normal"
                key={t}
                name={t}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
