import React from "react";
import Image from "next/image";
import { PinContainer } from "./3d-pins";

const PinCard = ({ title, bgurl }: { title: string; bgurl: string }) => {
  const containername = " rounded-xl  col-span-1 z-40 ";
  const classname =
    " text-black  w-full h-full  rounded-lg hover:bg-black/40 ";

  return (
    <PinContainer
      title={title}
      className={classname}
      containerClassName={containername}
    >
      <div className="relative w-full h-full rounded-lg hover:hidden">
        <Image
          src={bgurl}
          alt={title}
          fill
          sizes="(max-width: 768px) 240px, 320px"
          className="object-cover rounded-lg"
        />
      </div>
    </PinContainer>
  );
};

export default PinCard;
