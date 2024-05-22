import React from "react";

// Location.js
export default function Location() {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-96 shadow-md rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d379.2364580157262!2d-3.5068912776573717!3d40.499778622799916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1716393272078!5m2!1ses!2ses"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
