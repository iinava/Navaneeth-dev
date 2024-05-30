"use client";
import React, { useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";
const ConfettiButton = () => {
  const buttonRef = useRef(null);
  const email = "i.navaneeth0@gmail.com";
  const [copied, setcopied] = useState(false);
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
    if (navigator.clipboard) {
      // Use navigator.clipboard for desktop browsers
      navigator.clipboard
        .writeText(email)
        .then(() => {
          handleConfetti();
          setcopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      // Fallback for mobile browsers using a temporary textarea
      const textField = document.createElement("textarea");

      textField.value = email;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      document.body.removeChild(textField);

      setcopied(true); // Update copied state even for mobile
      handleConfetti(); // Trigger confetti even for mobile
    }
  };

  return (
    <Button
      ref={buttonRef}
      className="h-52 w-52   rounded-full border-2 border-neutral-700   dark:bg-neutral-900   flex justify-center items-center  cursor-pointer"
      id="copybutton"
      onPress={() => {
        handleCopy();
      }}
    >
      {copied ? "Email copied 🎉" : "Copy email 🎉"}
    </Button>
  );
};

export default ConfettiButton;
