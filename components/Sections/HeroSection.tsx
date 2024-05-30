"use client";
import React from "react";
import { Avatar } from "@nextui-org/react";
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
      origin: {
        y: 0.6,
      },
    });
  };

  return (
    <div className="flex flex-col w-full   gap-4">
      <div className="flex flex-col gap-4">
        <Avatar
          isBordered
          className="cursor-pointer"
          color="success"
          size="lg"
          src={profileicon}
          onClick={() => {
            onOpen();
            handleConfetti();
          }}
        />
        <h1 className="text-3xl md:text-7xl font-bold">
          {herosectioninfo.name} 👋
        </h1>
        <h1 className="dark:text-neutral-400 font-bold">
          {herosectioninfo.position}
        </h1>
        <p className="text-sm md:text-6xl dark:text-neutral-400">
          {herosectioninfo.description}
        </p>
        <div className="w-[300px]">
          <Button className="w-[300px" size="sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />{" "}
            Available for work
          </Button>{" "}
        </div>
      </div>
      <Button
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
