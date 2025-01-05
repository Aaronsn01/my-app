"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ShimmerButton from "../magicui/shimmer-button";
import { Separator } from "@radix-ui/react-separator";
import WordPullUp from "../magicui/word-pull-up";

const Pricing = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b text-white" id="pricing">
      <WordPullUp words="NUESTRAS TARIFAS" className="text-black text-3xl md:text-4xl md:mb-12 lg:text-6xl font-bold mb-8"/>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div 
          ref={ref}
          className="bg-black p-6 rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-2xl font-bold mb-3">TARIFAS FLEXIBLES</h3>
          <p className="text-primary font-bold mb-1">Nos adaptamos a tu día a día</p>
          <p className="text-gray-400 mb-3">Bonos de 5, 8 , 12 , 15 , 20 y 30 clases al mes</p>
          <div className="text-lg mb-4">
            <span className="line-through text-gray-500"></span>
            <span className="text-2xl text-primary ml-2">Descuentos exclusivos en el local</span>
          </div>
          <ul className="list-none mb-4 text-lg space-y-1">
            <li>CrossFit para todos</li>
            <li>Hyrox</li>
            <li>Movilidad, Halterofilia y Gimnásticos</li>
            <li className="text-primary">Clases aptas para todos los niveles</li>
          </ul>
          <Separator orientation="horizontal" className="my-4 h-[2px] bg-gray-500"/>
          <p className="text-gray-400 mb-4">
            ¿Quieres probar antes de apuntarte? Escríbenos por whatsapp o ven al gimnasio para reservar tu prueba gratuita
          </p>
          <p className="text-lg mb-2">
           Anímate y conoce una nueva forma de ponerte en forma.
          </p>
          <Separator orientation="horizontal" className="my-4 h-[2px] bg-gray-500"/>
          <p className="text-2xl font-bold text-center mb-2">
            ¿LIST@S PARA <span className="text-primary">ALCANZAR</span> TUS METAS?
          </p>
          <a 
            href="#contact" 
            className="inline-block"
          >
            <ShimmerButton>CONTÁCTANOS</ShimmerButton>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
