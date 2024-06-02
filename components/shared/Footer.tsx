import { Button } from "@nextui-org/button";
import { Divider, Link } from "@nextui-org/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto max-w-7xl pt-2 px-[4vw] flex flex-wrap justify-between items-center dark:text-neutral-400 ">
      <Divider className="my-4" />
      <div className="flex gap-4 flex-col">
        <h1 className="md:w-[600px]">
          {/* committed to creating outstanding digital solutions that empower individuals and businesses to thrive in the digital realm. */}
          crafting exceptional digital experiences to help clients achieve their
          business goals.
        </h1>
        <Button
          as={Link}
          href="https://drive.google.com/file/d/1zbki_6cw1Nvk-dwBIZMJ62DyUdDBb1e6/view"
          className="bg-black w-[200px] dark:bg-neutral-400 text-white dark:text-black"
        >
          Get Resume
        </Button>
        <br />
      </div>

      <div className=" flex-col  ">
        <p className="text-[13px] flex items-center gap-2 ">
          💗 if u come this far give a star on <FaGithub />
          <a
            className="underline underline-offset-2 hover:text-green-400"
            href="https://github.com/iinava/Navaneeth-dev"
          >
            iinava 🔗
          </a>
        </p>
      </div>
    </div>
  );
}
