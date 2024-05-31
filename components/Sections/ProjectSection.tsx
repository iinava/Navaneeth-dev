import React from "react";
import { Button } from "@nextui-org/button";

import { projectinfo } from "@/config/site";

import ProjectCard from "../shared/ProjectCard";
import { Link } from "@nextui-org/link";
export default function ProjectSection() {
  const featuredprojects = projectinfo.filter((project) => {
    return project.isfeatured == "true";
  });
  return (
    <div className="w-full flex flex-col  items-start  text-left py-10">
      <h1 className="text-3xl font-bold">Projects</h1>
      <br />
      <div className="w-full flex flex-wrap  items-start text-left gap-8">
        {featuredprojects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </div>
      <br />
      <div className="w-full flex justify-center items-center">
        <Button
          as={Link}
          href="/work"
          className="w-full md:w-min "
          variant="bordered"
        >
          View more
        </Button>
      </div>
    </div>
  );
}
