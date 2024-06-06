import React from "react";
import Image from "next/image";
import image from "../../../public/image.png";
import Barra from "./barra";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute p-10 lg:pt-48 lg:pl-32 z-50 flex flex-col gap-4">
        <div className="text-6xl lg:text-8xl font-bold">
          <p className="flex flex-col gap-3">DESCUBRE TU</p>
          <p>
            <span className="text-primary">FUERZA</span><span> INTERIOR</span>
          </p>
        </div>
        <div className="text-2xl lg:text-2xl font-bold">
          <p className="flex flex-col gap-3">ÚNETE A LA TRIBU FITNESS EN MIRAMADRID</p>
        </div>
      </div>
      <div className="flex justify-center relative">
        <Image src={image} alt="imagen home" className="w-full h-auto" />
        <div className="flex justify-center items-end absolute w-full h-full mt-10">
          <Barra className="px-10" />
        </div>
      </div>
    </div>
  );
}