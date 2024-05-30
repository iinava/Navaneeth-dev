import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto max-w-7xl pt-2 px-[4vw] flex flex-wrap justify-between items-center dark:text-neutral-400 ">
      <Divider className="my-4" />
      <div className="flex gap-4 flex-col">
        <h1 className="md:w-[600px]">
          We specialize in crafting exceptional digital experiences to help our
          clients achieve their business goals.
        </h1>
        <Button className="bg-black w-[200px] dark:bg-neutral-400 text-white dark:text-black">
          Get Resume
        </Button>
        <br />
      </div>

      <div className=" flex-col  ">
        <p className="text-[13px] flex items-center gap-2 ">
          {" "}
          Portfolio crafted with love by <FaGithub /> iinava 💗
        </p>
      </div>
    </div>
  );
}
