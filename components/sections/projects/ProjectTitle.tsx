import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

export default function ProjectTitle({ title, sourceURL }: { title: string, sourceURL?: string }) {
  return (
    <div className="-mb-2 flex items-center gap-3">
      <Link
        href={sourceURL || ""}
        target="_blank"
        className="relative text-xl font-semibold text-white"
      >
        <Heading text={title}/>
        {sourceURL && (
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
        )}
      </Link>
      {sourceURL ? (
        <FaCode className="h-4 w-4 text-green-400 opacity-50 group-hover:opacity-100" />
      ) : (
        <IoLockClosed className="h-4 w-4 text-amber-400/50 opacity-50 group-hover:opacity-100" />
      )}
    </div>
  );
}
