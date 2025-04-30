import React from "react";

export default function HeroSection() {
  return (
    <section aria-label="hero" className="flex flex-col">
      <h1>Hero</h1>
      <div>
        <h2>About Me</h2>
        <p>
          I'm a Software Developer who enjoys creating web apps that present
          interesting engineering challenges, like integrating creative ML
          solutions with intuitive UIs or building performant backend systems.
          My porfolio spans practical development and academic research,
          including work with Large Language Models, multi-agent deep
          reinforcement learning, image recognition, and sentiment analysis. I'm
          also a recent Computer Science graduate from the University of Warwick, where I ranked top of my cohort
          based on overall academic performance.
        </p>
      </div>
      <div>Skills</div>
      <div>Hobbies</div>
    </section>
  );
}
