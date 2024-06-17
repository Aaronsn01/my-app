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
          <h3 className="text-2xl font-bold mb-3">SOCIO FUNDADOR</h3>
          <p className="text-primary font-bold mb-1">Plazas limitadas</p>
          <p className="text-gray-400 mb-3">Desde el 20 JUNIO - 4 JULIO</p>
          <div className="text-lg mb-4">
            <span className="line-through text-gray-500">PRECIO: 105</span>
            <span className="text-2xl text-primary ml-2">85</span>
          </div>
          <ul className="list-none mb-4 text-lg space-y-1">
            <li>WOD CrossFit</li>
            <li>Clases Hyrox</li>
            <li>Halterofilia, Gimnásticos y movilidad</li>
            <li className="text-primary">1 CLASE POR DÍA</li>
          </ul>
          <Separator orientation="horizontal" className="my-4 h-[2px] bg-gray-500"/>
          <p className="text-gray-400 mb-4">
            ¿Quieres saber el resto de las tarifas? Te animamos a venir a La Jungla y conocer nuestro centro deportivo con cafetería en Paracuellos.
          </p>
          <p className="text-lg mb-2">
            Si quieres conseguir tu sesión de prueba gratuita, ponte en contacto con nosotros y consigue tu invitación.
          </p>
          <Separator orientation="horizontal" className="my-4 h-[2px] bg-gray-500"/>
          <p className="text-2xl font-bold text-center mb-2">
            ¿LISTO PARA TU <span className="text-primary">PRÓXIMA</span> CLASE?
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
