import React from "react";
import Image from "next/image";
import image from "../../../public/image.png";
import Barra from "./barra";

export default function Home() {
  return (
    <div className="relative min-h-[50vh]"> 
      <div className="absolute p-4 sm:p-10 lg:pt-48 lg:pl-32 z-50 flex flex-col gap-4 mt-12 md:mt-0">
        <div className="text-4xl md:text-4xl lg:text-6xl font-bold">
          <p className="flex flex-col gap-3">DESCUBRE TU</p>
          <p>
            <span className="text-primary">FUERZA</span>
            <span> INTERIOR</span>
          </p>
        </div>
        <div className="text-[10px] md:text-xl lg:text-2xl font-bold">
          <p className="flex flex-col gap-3">ÚNETE A LA TRIBU FITNESS EN MIRAMADRID</p>
        </div>
      </div>
      <div className="flex justify-center relative">
        <Image src={image} alt="imagen home" className="w-full h-[50vh] md:h-[50vh] lg:h-[60vh] object-cover"/> {/* Ajustamos la altura de la imagen */}
        <div className="flex justify-center items-end absolute w-full h-full mt-[126px] md:mt-32 lg:mt-10">
          <Barra className="w-[350px] h-[350px] sm:w-[400px] sm:h-[250px] md:h-[310px] md:w-[1115px]"/> {/* Ajustamos la altura del SVG */}
        </div>
      </div>
    </div>
  );
}
