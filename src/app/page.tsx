"use client";

import { useRef } from "react";
import About from "../components/ui/about";
import Home from "../components/ui/home";
import Location from "../components/ui/location";
import Contact from "../components/ui/contact";

export default function Page() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="w-full overflow-y-auto gap-32">
      <section ref={homeRef} id="home" className=" flex items-center justify-center">
        <Home />
      </section>
      <section ref={aboutRef} id="about" className=" flex items-center justify-center">
        <About />
      </section>
      <section ref={locationRef} id="location" className=" flex items-center justify-center">
        <Location />
      </section>
      <section ref={contactRef} id="contact" className=" flex items-center justify-center">
        <Contact />
      </section>
    </div>
  );
}
