"use client";

import { useRef } from "react";
import About from "../components/ui/about";
import Home from "../components/ui/home";
import Location from "../components/ui/location";
import Contact from "../components/ui/contact";
import Reviews from "@/components/ui/reviews";
import TypingAnimation from "@/components/magicui/typing-animation";
import BlurIn from "@/components/magicui/blur-in";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function Page() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);
  const reviewsRef = useRef(null);
  const blurInRef = useRef(null);

  return (
    <div className="w-full flex flex-col gap-48 overflow-y-auto">
      <section ref={homeRef} id="home" className="flex items-center justify-center">
        <Home />
      </section>
      <section ref={aboutRef} id="about" className="flex items-center justify-center">
        <About />
      </section>
      <section ref={locationRef} id="location" className="flex flex-col items-center justify-center">
        <BlurIn word="Location" />
        <Location />
      </section>
      <section className="flex flex-col items-center justify-center">
        <TypingAnimation text="Usser Reviews" />
        <Reviews />
      </section>
      <section ref={contactRef} id="contact" className="flex flex-col items-center justify-center">
        <GradualSpacing text="Contact Us"/>
        <Contact />
      </section>
    </div>
  );
}
