"use client"
import React from 'react'
import { Avatar } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

import Image from 'next/image';
export default function HeroSection() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  
  
 
  return (
    <div className='flex flex-col w-full   gap-4'>
       <div className='flex flex-col gap-4'>
       <Avatar isBordered color="success" className='cursor-pointer' onClick={onOpen} src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
      <h1 className="text-3xl md:text-7xl font-bold">Vincent Moore 👋</h1>
      <h1 className="dark:text-neutral-400 font-bold">Product designer and framer developer</h1>
      <p className="text-sm md:text-6xl dark:text-neutral-400">A Brand and  Product Designer currently leading the team at Oendo Studio</p>
      <div className="w-[300px]">
        <Button size="sm" className="w-[300px">
         <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div> Available for work
        </Button>{" "}
      </div>
       </div>
      <Button color="default" className='border-neutral-800 lg:hidden' variant="bordered">
        Lets Connect
      </Button>  
      {/* Easter egg modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        className='dark:bg-black bg-white'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Congrats You found an easter egg 🎉</ModalHeader>
              <ModalBody className='flex justify-center items-center '>
                <Image src="/egg.png" alt='easter egg png ' width={200} height={200 }/>
                <p>something will be here soon.. keep coming back</p>
              </ModalBody>
              <ModalFooter>
                <Button  variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button variant='bordered' onPress={onClose}>
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
