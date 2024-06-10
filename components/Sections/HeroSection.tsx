"use client";
import React from "react";
import { Avatar, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { profileicon } from "@/config/site";
import Splitstring from "@/utils/Textanimation";

export default function HeroSection({
  herosectioninfo,
}: {
  herosectioninfo: any;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleConfetti = () => {
    confetti({
      spread: 60,
      particleCount: 100,
      origin: { y: 0.6 },
    });
  };
  const charvariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  const description = Splitstring(herosectioninfo.description);
  // console.log(description);

  return (
    <div className="flex flex-col w-full   gap-4">
      <div className="flex flex-col gap-4">
        <Avatar
          isBordered
          className="cursor-pointer"
          color="default"
          size="lg"
          src={profileicon}
          onClick={() => {
            // onOpen();
            handleConfetti();
          }}
        />
        <h1 className="text-3xl md:text-7xl font-bold">
          {herosectioninfo.name}
        </h1>
        <h1 className="dark:text-neutral-400 font-bold">
          {herosectioninfo.position}
        </h1>
        <motion.div
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
        >
          {description.map((char) => (
            <motion.span
              key={char}
              variants={charvariants}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-6xl dark:text-neutral-400"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <div className="w-[300px]">
          <Button className="w-[300px" size="sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />{" "}
            Available for work
          </Button>{" "}
        </div>
      </div>
      <Button
        as={Link}
        href={"mailto:i.navaneeth0@gmail.com"}
        className="border-neutral-800 lg:hidden"
        color="default"
        variant="bordered"
      >
        Lets Connect
      </Button>
      {/* Easter egg modal */}
      <Modal
        className="dark:bg-black bg-white"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Congrats You found an easter egg 🎉
              </ModalHeader>
              <ModalBody className="flex justify-center items-center ">
                <Image
                  alt="easter egg png "
                  height={200}
                  src="/egg.png"
                  width={200}
                />
                <p>something will be here soon.. keep coming back </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button variant="bordered" onPress={onClose}>
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
