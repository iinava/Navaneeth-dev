import React from "react";

import AboutMe from "@/components/Sections/Aboutme";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectSection from "@/components/Sections/ProjectSection";
import Fun from "@/components/Sections/Fun";
import { herosectioninfo } from "@/config/site";
export default function Home() {
  return (
    <section className="flex flex-col w-full   gap-4">
      <HeroSection herosectioninfo={herosectioninfo} />
      <ProjectSection />
      <AboutMe />
      <Fun />
    </section>
  );
}
