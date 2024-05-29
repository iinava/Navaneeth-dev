import React from "react";
import AboutMe from "@/components/Sections/Aboutme";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectSection from "@/components/Sections/ProjectSection";
export default function Home() {
  return (
    <section className="flex flex-col w-full   gap-4">
      
      <HeroSection/>
      <ProjectSection/>
      {/* <AboutMe/> */}
     
    </section>
  );
}
