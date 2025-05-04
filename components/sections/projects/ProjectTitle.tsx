import Heading from "@/components/ui/Heading";
import { HeadingUnderline } from "@/components/ui/HeadingUnderline";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

export default function ProjectTitle({
  title,
  sourceURL,
}: {
  title: string;
  sourceURL?: string;
}) {
  return (
    <header className={`-mb-2 flex items-center gap-3 ${!sourceURL && "cursor-not-allowed"}`}>
      <div className="relative">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {sourceURL && <HeadingUnderline color="green" />}
      </div>

      {sourceURL ? (
        <FaCode
          aria-label="Source code public"
          className="h-4 w-4 text-green-400 opacity-50 group-hover:opacity-100"
        />
      ) : (
        <IoLockClosed
          aria-label="Source is private"
          className="h-4 w-4 text-amber-400/50 opacity-50 group-hover:opacity-100"
        />
      )}
    </header>
  );
}
