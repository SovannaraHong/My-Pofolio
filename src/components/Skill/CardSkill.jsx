// CardSkill.jsx
import { useState } from "react";

const CardSkill = ({ img, title, color }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative group w-40 h-52 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer transform transition duration-300 hover:-translate-y-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon */}
      <div className="flex items-center justify-center h-3/4">
        <img
          src={img}
          alt={title}
          className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <div className="h-1/4 flex items-center justify-center">
        <p
          className="text-sm font-semibold tracking-wider transition"
          style={{ color: hover ? color : "black" }}
        >
          {title}
        </p>
      </div>

      {/* Soft glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}33, ${color}22)`, // subtle transparent
          boxShadow: hover ? `0 0 20px ${color}55` : "none", // soft glow, less intense
        }}
      ></div>
    </div>
  );
};

export default CardSkill;
