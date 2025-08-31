import React, { useState, useEffect } from "react";

import "./HeroCss.css";

// img
import Pic from "../../assets/images/image.png";
import Shape from "../../assets/images/Sh.png";
import Picture from "../../assets/images/Logos.png";
import p1 from "../../assets/images/p1.png";
import pho from "../../assets/Icon/ps.png";
import { Link, useNavigate } from "react-router-dom";
import MyCv from "../Cover/MyCv";

const HeroSection = () => {
  const words = [
    "Frontend Developer",
    "Web Designer",
    "Freelancer",
    "Creative Coder",
  ];
  const foottag = [
    { icon: <i className="fa-brands fa-html5"></i>, label: "HTML" },
    { icon: <i className="fa-brands fa-css3-alt"></i>, label: "CSS" },
    { icon: <i className="fa-brands fa-square-js"></i>, label: "JAVASCRIPT" },
    { icon: <i className="bx bxl-typescript"></i>, label: "TYPESCRIPT" },
    { icon: <i className="fa-brands fa-bootstrap"></i>, label: "BOOSTRAP" },
    { icon: <i className="bx bxl-tailwind-css"></i>, label: "TAILWIND" },
    { icon: <i className="fa-brands fa-react"></i>, label: "REACT JS" },
    { icon: <i className="fa-brands fa-vuejs"></i>, label: "VUE JS" },

    { icon: <i className="fa-brands fa-figma"></i>, label: "FIGMA" },
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
        setText(currentWord.substring(0, charIndex + 1));
      }, 150);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Word complete, pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setCharIndex(charIndex - 1);
        setText(currentWord.substring(0, charIndex - 1));
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const navigate = useNavigate();
  return (
    <>
      <div className="relative ">
        <img
          className="w-[80px] an-sky absolute right-[100px]"
          src={p1}
          alt=""
        />
        <img
          className="w-[80px] an-sky-down absolute right-[500px] z-[200]"
          src={p1}
          alt=""
        />
        <img
          className="w-[80px] an-sky-down absolute left-[50px]"
          src={p1}
          alt=""
        />
        <img
          className="w-[80px]   absolute top-[400px] right-[470px] z-[200]"
          src={p1}
          alt=""
        />
        <img
          className="w-[200px]   absolute top-[250px] right-[380px] z-[200]"
          src={Shape}
          alt=""
        />
      </div>
      <main>
        <div className="px-[200px] font-popinse flex items-center">
          <div className="flex justify-between gap-50 items-center">
            {/* Left content */}
            <div>
              <a className="fancy anim-up delay-1" href="#">
                <span className="top-key"></span>
                <span className="text-black anim-glow">
                  Hello Everyone It me
                </span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>

              <h1 className="font-semibold text-[28px] py-[20px] font-Style anim-up delay-2">
                I'm{" "}
                <span className="text-yellow-400 border-b-2 anim-glow">
                  Hong Sovannara
                </span>
              </h1>

              <h3 className="text-[18px] font-Style anim-up delay-3">
                And I'm a{" "}
                <span className="text-cyan-400 font-bold drop-shadow-[0_0_10px_cyan] anim-glow">
                  {text}
                </span>
                <span className="blinking-cursor">|</span>
              </h3>

              <p className="w-[600px] py-[15px] text-[13px] anim-up delay-4">
                In my free time, I enjoy researching technology and practicing
                my front-end development skills. I also spend time reading books
                to gain knowledge about professional relationships and personal
                growth.
              </p>

              <div className="mt-4 space-x-4 flex text-[7px] anim-up delay-5">
                <button
                  onClick={() => navigate("/mycv")}
                  className="Btn-Container"
                >
                  <span className="text font-Style">View My CV</span>
                  <span className="icon-Container">
                    {" "}
                    <svg
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="nones"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <circle
                        cx="1.61321"
                        cy="1.61321"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="5.73583"
                        cy="1.61321"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="5.73583"
                        cy="5.5566"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="9.85851"
                        cy="5.5566"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="9.85851"
                        cy="9.5"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="13.9811"
                        cy="9.5"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="5.73583"
                        cy="13.4434"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="9.85851"
                        cy="13.4434"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="1.61321"
                        cy="17.3868"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                      <circle
                        cx="5.73583"
                        cy="17.3868"
                        r="1.5"
                        fill="black"
                      ></circle>{" "}
                    </svg>{" "}
                  </span>
                </button>

                <button className="btn">
                  <span className="font-Style text-[12px]">Hire Me</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div
              className="stack anim-float"
              style={{
                animation: "floatImage 3s ease-in-out infinite",
                opacity: 1,
              }}
            >
              <div className="card">
                <img
                  src={Picture}
                  alt="Hero"
                  className="w-[300px] image rounded-[20px] h-[400px] object-cover overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[60px] flex justify-center items-center overflow-hidden">
          <div className="scroll-container w-[80%] bg-[#ffa802] py-[15px] rounded-[20px] text-white">
            <div className="scroll-content">
              {foottag.map((item, ind) => (
                <p
                  className="font-semibold text-[15px] inline-block mx-8 font-Style  justify-center items-center "
                  key={ind}
                >
                  <span className="text-[20px]">{item.icon}</span>{" "}
                  <span>{item.label}</span>
                </p>
              ))}
              {/* duplicate items for seamless loop */}
              {foottag.map((item, ind) => (
                <p
                  className="font-semibold text-[15px] inline-block mx-8 font-Style justify-center items-center"
                  key={`dup-${ind}`}
                >
                  <span className="text-[20px]">{item.icon}</span>{" "}
                  <span>{item.label}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
