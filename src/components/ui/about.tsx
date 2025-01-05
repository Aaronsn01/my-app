import React from "react";
import AboutImage from "../icons/about-image";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="container mx-auto py-10 md:py-20 px-4 mt-[-20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-row w-full gap-2 h-fit rounded-md order-1 md:order-1">
          <Separator orientation="vertical" className="w-1 h-8 md:w-8 md:h-40 bg-primary" />
          <div className="flex flex-col justify-center items-start space-y-4">
            <h2 className="text-2xl justify-center md:text-5xl font-bold text-black text-shadow">
              ¿POR QUÉ UNIRTE A LA JUNGLA?
            </h2>
            <div className="flex flex-col justify-center items-start gap-5 py-10">
              <div className="text-lg md:text-xl text-black px-4 py-3 rounded-md">
                <h3 className="font-bold text-xl md:text-2xl mb-2">ENTRENADORES EXPERTOS</h3>
                <p>Estarás siempre acompañado por <strong>entrenadores graduados</strong> en la universidad con experiencia en el entrenamiento personal y grupal.</p>
              </div>
              <div className="text-lg md:text-xl text-black px-4 py-3 rounded-md">
                <h3 className="font-bold text-xl md:text-2xl mb-2">CONSIGUE TUS OBJETIVOS</h3>
                <p>Te acompañaremos para conseguir <strong>TUS OBJETIVOS</strong>. Sólo necesitamos que vengas a clase. Del resto, nos encargamos nosotros.</p>
              </div>
              <div className="text-lg md:text-xl text-black px-4 py-3 rounded-md">
                <h3 className="font-bold text-xl md:text-2xl mb-2">ACTIVIDADES APTAS PARA TODOS</h3>
                <p><strong>TODAS</strong> las actividades son <strong>APTAS</strong> para <strong>TODO</strong> el mundo. No importa cuál es tu nivel de partida, estaremos a tu lado durante todo el proceso.</p>
              </div>
              <div className="text-lg md:text-xl text-black px-4 py-3 rounded-md">
                <h3 className="font-bold text-xl md:text-2xl mb-2">FLEXIBILIDAD HORARIA</h3>
                <p>A través de la <strong>APP</strong> podrás reservar tus clases sin tener que estar atado/a a un horario fijo.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center px-4 order-2 md:order-2">
          <AboutImage />
        </div>
      </div>
    </div>
  );
}
