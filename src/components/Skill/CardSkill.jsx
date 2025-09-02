// CardSkill.jsx
import { useEffect, useState, useRef } from "react";

const CardSkill = ({ img, title, color, num }) => {
  const [hover, setHover] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            let end = num;
            let duration = 1500; // 1.5s animation
            let stepTime = Math.abs(Math.floor(duration / end));

            let timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start >= end) {
                clearInterval(timer);
              }
            }, stepTime);
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [num]);

  return (
    <div
      ref={ref}
      className="relative group xl:w-[160px] lg:w-[160px] md:w-[160px] sm:w-[160px] w-[120px] xl:h-[208px] lg:h-[208px] md:h-[208px] sm:h-[208px] h-[158px] rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer transform transition duration-300 hover:-translate-y-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon */}
      <div className="flex justify-center items-center flex-col gap-5 pt-[25px]">
        <div className="flex items-center justify-center h-3/4">
          <img
            src={img}
            alt={title}
            className="xl:w-[80px] lg:w-[80px] md:w-[80px] sm:w-[80px] w-[40px] xl:h-[80px] lg:h-[80px] md:h-[80px] sm:h-[80px] h-[40px] object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div>
          {/* Animated number */}
          <p
            style={{ color }}
            className="font-semibold xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[12px]"
          >
            {count} %
          </p>
        </div>
        {/* Title */}
        <div className="h-1/4 flex items-center justify-center">
          <p
            className="xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[12px] font-semibold tracking-wider transition"
            style={{ color: hover ? color : "white" }}
          >
            {title}
          </p>
        </div>

        {/* Soft glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            background: `linear-gradient(135deg, ${color}33, ${color}22)`,
            boxShadow: hover ? `0 0 20px ${color}55` : "none",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CardSkill;
