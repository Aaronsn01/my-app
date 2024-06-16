"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SlightFlipProps {
  word: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: {
    hidden: { rotateX: number; opacity: number };
    visible: { rotateX: number; opacity: number };
  };
  className?: string;
}

const SlightFlip = ({
  word,
  duration = 0.5,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}: SlightFlipProps) => {
  const controls = useAnimation();
  const elementRef = useRef<HTMLDivElement>(null);

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
    <div ref={elementRef} className="flex justify-center space-x-2">
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={controls}
          variants={framerProps}
          transition={{ duration, delay: i * delayMultiple }}
          className={cn("origin-center drop-shadow-sm", className)}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default SlightFlip;
