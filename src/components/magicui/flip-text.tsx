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

  // Divide the word into lines manually
  const lines = word.split(" ");

  return (
    <div ref={elementRef} className="flex flex-wrap justify-center space-x-2 text-center">
      {lines.map((line, i) => (
        <div key={i} className="flex">
          {line.split("").map((char, j) => (
            <motion.span
              key={j}
              initial="hidden"
              animate={controls}
              variants={framerProps}
              transition={{ duration, delay: (i * lines[0].length + j) * delayMultiple }}
              className={cn("origin-center drop-shadow-sm", className)}
            >
              {char}
            </motion.span>
          ))}
          {/* Add a space between words */}
          {i < lines.length - 1 && <motion.span className={className}> </motion.span>}
        </div>
      ))}
    </div>
  );
};

export default SlightFlip;
