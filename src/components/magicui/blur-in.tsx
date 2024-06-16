"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 1 }: BlurInProps) => {
  const controls = useAnimation();
  const elementRef = useRef<HTMLHeadingElement>(null);

  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.h1
      ref={elementRef}
      initial="hidden"
      animate={controls}
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "text-3xl md:text-4xl lg:text-6xl font-bold text-black",
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
