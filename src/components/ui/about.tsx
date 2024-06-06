import React from "react";
import AboutImage from "../icons/about-image";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex justify-center items-center px-4">
          <AboutImage />
        </div>
        <div className="flex flex-row w-full gap-2 h-fit rounded-md">
          {" "}
          <Separator className="w-8 h-40" />
          <div className="flex flex-col justify-center items-start space-y-4">
            <h2 className="text-5xl font-bold text-black text-shadow">
              ¿POR QUÉ UNIRTE A LA TRIBU FITNESS?
            </h2>
            <div className="flex flex-col justify-center items-center gap-5 py-10">
              <li className="text-2xl text-legible px-4 py-3 rounded-md bg-black">
              Estarás siempre acompañado por entrenadores graduados en la universidad con experiencia en el entrenamiento personal y grupal.
              </li>
              <li className="text-2xl text-legible px-4 py-3 rounded-md bg-black">
              Te acompañaremos para conseguir TUS OBJETIVOS . Sólo necesitamos que vengas a clase . Del resto, nos encargamos nosotros. 
              </li>
              <li className="text-2xl text-legible px-4 py-3 rounded-md bg-black">
              TODAS las actividades son APTAS para TODO el mundo. No importa cual es tu nivel de partida, estaremos a tu lado durante todo el proceso.
              </li>
              <li className="text-2xl text-legible px-4 py-3 rounded-md bg-black">
              Flexibilidad horaria . A través de la app podrás reservar tus clases sin tener que estar atado/a a un horario fijo.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
