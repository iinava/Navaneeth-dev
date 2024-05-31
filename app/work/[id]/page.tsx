import React, { FC } from "react";
import { Button, Link } from "@nextui-org/react";

interface PageProps {
  params: {
    id: string;
  };
}
import { projectDetailedInfoArray } from "@/config/site";
import Image from "next/image";
export async function generateStaticParams() {
  const ids = ["1", "2", "3", "4"];

  return ids.map((id) => {
    return {
      id,
    };
  });
}

const page: FC<PageProps> = ({ params }) => {
  const id = params.id;

  const projectDetailedInfo = projectDetailedInfoArray.find((project) => {
    return project.projectid === id;
  });

  if (!projectDetailedInfo) {
    return (
      <div>Some unexpected error occured please checkout other projects</div>
    );
  }

  return (
    <div className="flex flex-col w-full   gap-4">
      <div className="breadcrumb flex flex-row text-[13px] dark:text-neutral-400">
        <p>
          <span>home</span>
          <span>{" > "}</span>
          <span>works</span>
          <span>{" > "}</span>
          <span className="text-green-400">
            {" "}
            {projectDetailedInfo.projectname}
          </span>
        </p>
      </div>
      <h1 className="text-5xl font-bold">{projectDetailedInfo.projectname}</h1>
      <p className="text-2xl ">{projectDetailedInfo.projectsubtitle}</p>
      <p className="md:w-3/4">{projectDetailedInfo.projectdescription}</p>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:w-3/4 gap-4">
          <div className="flex flex-row md:flex-col w-full">
            <div className="text-sm text-neutral-500 w-full md:w-1/2">
              client
            </div>
            <div className="text-sm dark:text-neutral-300 w-full md:w-1/2">
              {projectDetailedInfo.projectclient}
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full">
            <div className="text-sm text-neutral-500 w-full md:w-1/2">
              Tech Stack
            </div>
            <div className="text-sm dark:text-neutral-300 w-full md:w-1/2">
              {projectDetailedInfo.projectTechStack}
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full">
            <div className="text-sm text-neutral-500 w-full md:w-1/2">
              industries
            </div>
            <div className="text-sm dark:text-neutral-300 w-full md:w-1/2">
              {projectDetailedInfo.projectIndustry}
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full">
            <div className="text-sm text-neutral-500 w-full md:w-1/2">Date</div>
            <div className="text-sm dark:text-neutral-300 w-full md:w-1/2">
              {projectDetailedInfo.projectDate}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-2/3  justify-around gap-3">
        {projectDetailedInfo.projectLivelink && (
          <Button
            as={Link}
            className="w-1/2"
            href={projectDetailedInfo.projectLivelink}
            variant="bordered"
          >
            View live
          </Button>
        )}
        <Button
          as={Link}
          className="w-1/2"
          href={projectDetailedInfo.projectGithub}
          variant="bordered"
        >
          View Git
        </Button>
      </div>

      <div className=" w-full flex  flex-col gap-7 mt-5 items-center">
        <Image
          alt="project image"
          className="rounded-2xl border-3 border-neutral-700 h-[250px]"
          src={projectDetailedInfo.firstimage}
          width={300}
          height={300}
          layout="responsive"
        />

        <p>{projectDetailedInfo.firstdescription}</p>

        {projectDetailedInfo.secondimage && (
          <Image
            alt="project image"
            className="rounded-2xl border-3 border-neutral-700 h-[250px]"
            src={projectDetailedInfo.secondimage}
            width={300}
            height={300}
            layout="responsive"
          />
        )}

        <p className="mb-5">{projectDetailedInfo.seconddescription}</p>
      </div>
    </div>
  );
};

export default page;
