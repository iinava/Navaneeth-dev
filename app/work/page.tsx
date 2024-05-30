"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import { projectinfo } from "@/config/site";
export default function work() {
  return (
    <div>
      <h1 className="text-5xl sm:text-7xl font-bold  my-2">Work</h1>
      <p className="sm:text-2xl  ">
        not just create brands, craft unforgettable <br /> experiences that
        leave a lasting impression.
      </p>

      <div className="w-full flex flex-col  items-start  text-left py-10">
        <h1 className="text-3xl font-bold">Projects</h1>
        <br />
        <div className="w-full flex flex-wrap  items-start text-left gap-8">
          {projectinfo.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}
