"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiLocationArrow1 } from "react-icons/ci";
export default function ProjectCard({ item }: { item: any }) {
  // console.log(item);

  const router = useRouter();

  return (
    <button
      className="border border-neutral-600 transition-all ease-out md:hover:scale-105  w-[100%]   lg:w-[30%] rounded-2xl p-4  flex flex-col gap-2  cursor-pointer"
      onClick={() => {
        router.push(`/work/${item.id}`);
      }}
    >
      <Image
        alt="project image"
        className="rounded-2xl"
        src={item.image}
        width={300}
        height={200}
        layout="responsive"
      />
      <h1 className="text-2xl font-bold flex items-center gap-3">
        {item.name}
        <span>
          <CiLocationArrow1 />
        </span>
      </h1>
      <h1 className="text-1xl font-bold dark:text-neutral-400">
        {item.description}
      </h1>
      <span className="border-neutral-700 border p-1 rounded-lg w-min text-sm text-neutral-600">
        {item.tag}
      </span>
    </button>
  );
}
