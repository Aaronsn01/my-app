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
import AboutUs from "@/components/ui/about-us";
import Pricing from "@/components/ui/pricing";
import WordPullUp from "@/components/magicui/word-pull-up";

export default function Page() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const pricingRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);
  const reviewsRef = useRef(null);
  const blurInRef = useRef(null);

  return (
    <div className="w-full flex flex-col gap-10 md:gap-48 overflow-y-auto">
      <section ref={homeRef} id="home" className="flex items-center justify-center">
        <Home />
      </section>
      <section ref={aboutRef} id="about" className="flex items-center justify-center">
        <About />
      </section>
      <section ref={pricingRef} id="pricing" className="flex items-center justify-center">
        <Pricing/>
      </section>
      <section className="flex flex-col items-center justify-center">
        <AboutUs/>
      </section>
      <section ref={locationRef} id="location" className="flex flex-col items-center justify-center">
        <Location />
      </section> 
      {/* <section className="flex flex-col items-center justify-center">
        <TypingAnimation text="Usser Reviews" />
        <Reviews />
      </section> */}
      <section ref={contactRef} id="contact" className="flex flex-col items-center justify-center">
        <GradualSpacing text="CONTACTO"/>
        <Contact />
      </section>
    </div>
  );
}
