import React from "react";

import { aboutcolinfo } from "@/config/site";

import AboutBox from "../shared/AboutBox";
export default function AboutMe() {
  return (
    <div className=" flex flex-col w-full  justify-start items-start mt-10 text-pretty">
      <h1 className="text-4xl font-bold  dark:text-neutral-300   ">About me</h1>

      <br />
      {aboutcolinfo.map((info, index) => (
        <AboutBox key={index} aboutcolinfo={info} />
      ))}
    </div>
  );
}
