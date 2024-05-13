import React from "react";
import { FaDumbbell, FaRunning, FaBiking } from "react-icons/fa";

function IconNavbar({ className }: { className?: string }) {
  return (
    <div className="flex justify-around items-center bg-white shadow p-4">
      <div className="text-center">
        <FaDumbbell className="text-xl mb-1 text-primary" />
        <span className="text-xl mb-1 text-primary">WEIGHTS</span>
      </div>
      <div className="text-center">
        <FaRunning className="text-xl mb-1 text-primary" />
        <span className="text-xl mb-1 text-primary">EXERCISE</span>
      </div>
      <div className="text-center">
        <FaBiking className="text-xl mb-1 text-primary" />
        <span className="text-xl mb-1 text-primary">CROSS-FIT</span>
      </div>
    </div>
  );
}

export default IconNavbar;