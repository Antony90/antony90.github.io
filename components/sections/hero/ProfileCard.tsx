import Card from "@/components/ui/Card";
import identity from "@/data/identity.json";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      <Card className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-md">
            {identity.about.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
      </Card>
      <Card className="justify-evenly sm:justify-between dark:text-zinc-400 sm:flex-col flex flex-row">
        <Link target="_blank" href={identity.githubUrl}>
          <FaGithub
            className="size-8 text-primary hover:text-neutral-600 dark:hover:text-neutral-400 hover:scale-[1.05] duraiton-300 transition-all"
          />
        </Link>
        <Link target="_blank" href={identity.linkedinUrl}>
          <FaLinkedin
            className="size-8 text-primary hover:text-neutral-600 dark:hover:text-neutral-400 hover:scale-[1.05] duraiton-300 transition-all"
          />
        </Link>
        <MdEmail className="size-8 text-primary hover:text-neutral-600 dark:hover:text-neutral-400 hover:scale-[1.05] duraiton-300 transition-all" />
      </Card>
    </div>
  );
}
