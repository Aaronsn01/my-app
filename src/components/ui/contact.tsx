import React from "react";
import { Button } from "./button";

export default function Contact() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-4 text-shadow">CONTACT US</h2>
      <form className="mt-8 space-y-4 ">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 border text-black shadow-lg" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border text-black shadow-lg" />
        <textarea placeholder="Message" className="w-full px-4 py-2 border h-32 text-black shadow-lg"></textarea>
        <Button className="text-white rounded-md shadow-md">SEND</Button>
      </form>
    </div>
  );
}
