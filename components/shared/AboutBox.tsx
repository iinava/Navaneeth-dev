"use client";
import React from "react";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
const charvariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export default function AboutBox({ aboutcolinfo }: { aboutcolinfo: any }) {
  return (
    <motion.div
      className="w-full dark:text-neutral-400    "
      initial="hidden"
      whileInView="reveal"
    >
      <motion.div variants={charvariants} transition={{ duration: 2 }}>
        <div className="flex justify-start items-center w-[100px] gap-3 relative  ">
          <div className="rounded-full p-2 w-2 h-2 bg-green-400 dark:bg-neutral-300 shadow-[0_0_10px_5px_rgba(255,255,255,0.6)]" />

          <h1 className="text-3xl font-bold  ">{aboutcolinfo.title}</h1>
        </div>
        <Divider />
        <div className="flex flex-row  flex-wrap justify-between w-  py-8 ">
          <h1 className="sm:text-3xl font-bold ">{aboutcolinfo.company}</h1>
          <div className="flex flex-col w-[450px]">
            <h1 className="sm:text-2xl font-bold  ">{aboutcolinfo.position}</h1>
            <p className="">{aboutcolinfo.date}</p>
            <p className="  text-sm sm:text-[18px]">
              {aboutcolinfo.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
