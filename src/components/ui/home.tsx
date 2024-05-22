import React from "react";
import boxerImage from "../img/crossfit-home.jpg"; // Asegúrate de cambiar esta ruta a la ubicación de tu imagen
import Image from "next/image";
import image from "../../../public/image.png";
import Barra from "./barra";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute p-10 lg:pt-24 lg:pl-32 z-50 text-6xl lg:text-8xl font-bold">
        <p className="flex flex-col mt-40 gap-3">THRIVE IN THE</p>
        <p>
          <span className="text-primary">WILD</span>
        </p>
      </div>
      <div className="flex justify-center relative">
        <Image src={image} alt="imagen home" className="" />
        <div className="flex justify-center items-end absolute w-full h-full mt-10">
          <Barra className="px-10" />
        </div>
      </div>
    </div>
  );
}
