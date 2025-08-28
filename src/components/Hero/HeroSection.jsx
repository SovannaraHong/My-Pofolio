import React, { useState, useEffect } from "react";

import "./HeroCss.css";

// img
import Pic from "../../assets/images/image.png";
import Shape from "../../assets/images/Sh.png";
import Picture from "../../assets/images/Logos.png";
import p1 from "../../assets/images/p1.png";

const HeroSection = () => {
  const words = [
    "Frontend Developer",
    "Web Designer",
    "Freelancer",
    "Creative Coder",
  ];
  const foottag = ["Fronted Developer", "Graphic Design", "UI UX Design"];
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
                <button className="Btn-Container">
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

        <div className="pt-[60px] ">
          <div className="flex justify-center items-center gap-30 bg-[#ffa802] py-[15px] ">
            {foottag.map((item, ind) => (
              <p className="font-semibold text-[20px]" key={ind}>
                <i className="fa-solid fa-star"></i> {item}
              </p>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
