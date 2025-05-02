import Heading from "@/components/ui/Heading";
import identity from "@/data/identity.json";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-zinc-800 p-6">
      <div className="flex items-center gap-6">
        <h1 className="text-5xl font-semibold">{identity.name}</h1>
        <div className="ml-auto flex gap-6 max-sm:flex-col max-sm:gap-2">
          <Link target="_blank" href={identity.githubUrl}>
            <FaGithub className="size-8" />
          </Link>
          <Link target="_blank" href={identity.linkedinUrl}>
            <FaLinkedin className="size-8" />
          </Link>
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
  );
}
