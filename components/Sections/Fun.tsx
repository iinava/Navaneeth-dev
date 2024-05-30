import Image from "next/image";
import React from "react";

export default function Fun() {
  return (
    <div className="w-full flex justify-between items-end">
      {/* <img src="./happy.png" alt="" width={200} height={200}  className="filter invert"/> */}
      <Image
        alt="funimage"
        className="filter invert"
        height={200}
        src="https://ik.imagekit.io/ftrftsprn/portfolio-new/dog.png"
        width={200}
      />
    </div>
  );
}
