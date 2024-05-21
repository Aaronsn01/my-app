import React from "react";

// Location.js
export default function Location() {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">OUR LOCATION</h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            style={{ border: '4px solid' }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
