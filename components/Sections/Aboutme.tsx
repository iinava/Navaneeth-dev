import React from "react";

export default function AboutMe() {
  return (
    <div className=" flex flex-col w-full justify-start items-start mt-10 text-pretty">
        
      <h1 className="text-4xl font-bold    ">About me</h1>
      
      <br />
      <div className="  ">
        <div className="flex justify-start items-center w-[100px] gap-3 relative  ">
          <div className="rounded-full p-2 w-2 h-2 bg-green-400 dark:bg-neutral-300 shadow-[0_0_10px_5px_rgba(255,255,255,0.6)]"></div>

          <h1 className="text-3xl font-bold  ">Experience</h1>
        </div>
        <div className="flex flex-row  flex-wrap justify-between w-[93vw] sm:w-[83vw]  py-8 border-t border-neutral-700">
          <h1 className="sm:text-3xl font-bold ">Maitexa IT Solutions</h1>
          <div className="flex flex-col w-[450px]">
            <h1 className="sm:text-2xl font-bold  dark:text-neutral-300">
              Full stack developer Intern
            </h1>
            <p className="">06/23 - 01/24</p>
            <p className="  text-sm sm:text-[18px]">
              I owned a product that was part of Stadia's developer suite, and
              led design on the website for enabling Bluetooth on Stadia
              Controllers post-sunset.
            </p>
          </div>
        </div>
      </div>
      <div className="  ">
        <div className="flex justify-start items-center w-[100px] gap-3 relative  ">
          <div className="rounded-full p-2 w-2 h-2 bg-green-400 dark:bg-neutral-300 shadow-[0_0_10px_5px_rgba(255,255,255,0.6)]"></div>

          <h1 className="text-3xl font-bold  ">Education</h1>
        </div>
        <div className="flex flex-row  flex-wrap justify-between  w-[93vw] sm:w-[83vw] py-8 border-t border-neutral-700">
          <h1 className="sm:text-3xl font-bold ">IHRD</h1>
          <div className="flex flex-col w-[450px]">
            <h1 className="sm:text-2xl font-bold ">
              Bachelor of computer application
            </h1>
            <p className="">06/20 - 04/23</p>
            <p className=" text-sm sm:text-[18px]">
              I owned a product that was part of Stadia's developer suite, and
              led design on the website for enabling Bluetooth on Stadia
              Controllers post-sunset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
