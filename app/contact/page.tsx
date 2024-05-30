import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Button, Link } from "@nextui-org/react";
import { Sociallinks } from "@/config/site";
import ConfettiButton from "@/components/shared/Confetti";
export default function DocsPage() {
  return (
    <div className="w-full flex flex-wrap  justify-between items-start gap-5 ">
      <div className="flex flex-col  gap-6 lg:gap-24">
        <div className=" gap-7 flex flex-col">
          <h1 className="text-5xl sm:text-7xl font-bold  my-2">Lets talk</h1>
          <p className="sm:text-2xl  ">
            Connecting with our clients to create <br /> tailor-made solutions
          </p>

          <h1 className="md:text-3xl ">i.navaneeth0@gmail.com</h1>
        </div>
        <div className="flex  gap-5 flex-wrap ">
          <Button as={Link} href={Sociallinks.github} variant="light">
            <FaGithub className="text-3xl" />
          </Button>
          <Button as={Link} href={Sociallinks.linkedin} variant="light">
            <FaLinkedin className="text-3xl" />
          </Button>
          <Button as={Link} href="" variant="light" className="hidden">
            <FaTwitterSquare className="text-3xl" />
          </Button>
        </div>
      </div>

      <ConfettiButton />
    </div>
  );
}
