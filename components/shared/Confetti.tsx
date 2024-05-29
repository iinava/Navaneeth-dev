"use client";
import React, { useRef, useState } from "react";
import { Button, Snippet } from "@nextui-org/react";
import confetti from "canvas-confetti";

const ConfettiButton = () => {
  const buttonRef = useRef(null);
  const email = 'i.navaneeth0@gmail.com';
  const [copied, setcopied] = useState(false)
  const handleConfetti = () => {
    confetti({
      spread: 60,
      particleCount: 100,
      origin: {
        y: 0.6,
      },
    });
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      handleConfetti()
      setcopied(true)

    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };


  return (
    <div
      ref={buttonRef}
      className="h-52 w-52  rounded-full border-2 border-neutral-400 hover:bg-white hover:text-black  flex justify-center items-center  cursor-pointer"
      onClick={(e)=>{
        handleCopy()
      }}
    >
       {
        copied ? "Email copied 🎉" : "Copy email 🎉"
       }

      
    </div>
  );
};

export default ConfettiButton;
