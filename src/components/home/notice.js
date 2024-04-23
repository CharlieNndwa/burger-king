import Image from "next/image";
import React from "react";
import royalPerks from "@/images/royal-perks.svg";

export default function Notice() {
  return (
    <>
      <div className="px-4 py-6 bg-[#502215]">
        <Image src={royalPerks} width={150} height={80} alt="royal perks" />
      </div>
    </>
  );
}
