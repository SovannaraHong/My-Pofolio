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

  const social = [
    {
      icon: <i className="fa-brands fa-facebook"></i>,
      link: "https://www.facebook.com/share/1BTeNwEsUK/?mibextid=wwXIfr",
    },

    {
      icon: <i class="fa-brands fa-github"></i>,
      link: "https://www.tiktok.com/@akira1269",
    },

    {
      icon: <i className="fa-brands fa-linkedin"></i>,
      link: "https://www.facebook.com/share/1BTeNwEsUK/?mibextid=wwXIfr",
    },

    {
      icon: <i className="fa-brands fa-telegram"></i>,
      link: "@Loveu1289",
    },
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  const [hover, setHover] = useState(true);
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
          className="xl:w-[80px] lg:w-[80px] md:w-[80px] sm:w-[50px] w-[50px]  an-sky absolute xl:right-[100px] lg:right-[300px] md:right-[320px]  sm:right-[230px] right-[10px]"
          src={p1}
          alt=""
        />
        <img
          className="xl:w-[80px] lg:w-[80px] md:w-[80px] sm:w-[50px] w-[50px]  an-sky-down absolute xl:right-[500px] lg:right-[30px] md:right-[30px]   sm:right-[10px] right-[320px] z-[200]"
          src={p1}
          alt=""
        />
        <img
          className="xl:w-[80px] lg:w-[80px] md:w-[80px] sm:w-[50px] w-[50px]  an-sky-down absolute xl:left-[30px] xl:top-[0px] left-[10px]    top-[250px]"
          src={p1}
          alt=""
        />
        <img
          className="xl:w-[80px] lg:w-[80px] md:w-[80px] sm:w-[50px] w-[50px] absolute xl:top-[400px] xl:right-[470px] lg:top-[300px] lg:right-[250px]  xl:block lg:block md:block sm:block hidden md:top-[300px] md:right-[250px]  sm:top-[250px] sm:right-[200px]   z-[200] "
          src={p1}
          alt=""
        />
        <img
          className="xl:w-[200px] lg:w-[150px] md:w-[120px] sm:w-[120px] w-[120px]   absolute xl:top-[250px] lg:top-[200px] xl:right-[380px] lg:right-[250px] md:top-[200px] md:right-[220px] sm:top-[170px] sm:right-[180px] top-[150px] right-[220px] z-[200]"
          src={Shape}
          alt=""
        />
      </div>
      <main>
        <div className="xl:px-[100px] lg:px-[100px] flex-re md:px-[20px] sm:px-[50px] justify-center  font-popinse flex items-center">
          <div className="flex justify-center flex-col-reverse  xl:gap-50 lg:gap-5 md:gap-50 sm:gap-50 gap-15 xl:flex-row lg:flex-row md:flex-row sm:flex-row  items-center">
            {/* Left content */}
            <div>
              <div>
                <p className="anim-up delay-2 font-semibold text-[22px] font-popinse">
                  Hi It's <span className="text-[#00ff51]">Me</span>
                </p>
              </div>
              <h1 className="font-semibold xl:text-[28px] lg:text-[22px] text-[15px] py-[10px] font-Style anim-up delay-2">
                <span className="text-white  anim-glow">
                  Hong <span className="text-[#00ff51]">Sovannara</span>{" "}
                </span>
              </h1>

              <h3 className="xl:text-[22px] lg:text-[16px] md:text-[10px] sm:text-[8px] text-[9px] font-popinse font-extrabold anim-up delay-3">
                And I'm a{" "}
                <span className="text-[#00ff51] font-bold drop-shadow-[0_0_10px_cyan] anim-glow">
                  {text}
                </span>
                <span className="blinking-cursor">|</span>
              </h3>

              <p className="xl:w-[600px] lg:w-[500px] py-[10px] xl:text-[13px] md:text-[10px] sm:text-[10px] sm:w-[240px] md:w-[300px] lg:text-[10px] w-[250px] text-[10px] anim-up delay-4">
                In my free time, I enjoy researching technology and practicing
                my front-end development skills. I also spend time reading books
                to gain knowledge about professional relationships and personal
                growth.
              </p>

              <div className=" space-x-4 flex text-[7px] anim-up delay-5">
                <button
                  onMouseEnter={() => setHover(!hover)}
                  onMouseLeave={() => setHover(!hover)}
                  className={`xl:text-[15px] lg:text-[15px] md:text-[10px] font-semibold border-[#00ff51] hover:border-white  xl:px-[10px] border-3  lg:px-[10px] xl:py-[9px]  lg:py-[9px] md:px-[10px] md:py-[4px] sm:px-[5px] sm:py-[5px] sm:text-[8px] px-[5px] rounded-[10px] hover:bg-[#00ff51] transition-all duration-400 ease-in-out hover:text-white flex justify-center items-center gap-2`}
                  onClick={() => navigate("/mycv")}
                >
                  {hover ? (
                    <>
                      {" "}
                      View My CV{" "}
                      <i class="bx bx-chevrons-right text-[20px] "></i>
                    </>
                  ) : (
                    <>
                      {" "}
                      Come to View{" "}
                      <i class="bx bx-chevrons-right text-[20px] "></i>
                    </>
                  )}
                </button>
              </div>
              <div className="pt-[20px] flex justify-start items-center gap-2 ">
                {social.map((sm) => (
                  <span className="border-3 anim-up delay-7 px-[6px] py-[4px] rounded-full border-[#00ff51] hover:shadow-[0_0_25px_#00ff51] hover:bg-[#00ff51] hover:scale-[1.2] transition-all duration-300  ">
                    {sm.icon}
                  </span>
                ))}
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
                  className="xl:max-w-[300px] lg:max-w-[250px] lg:h-[300px] md:max-w-[250px] md:h-[300px] sm:max-w-[200px] sm:h-[250px]  max-w-[200px] h-[250px] image rounded-[20px] xl:h-[400px] object-cover overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[60px] flex justify-center items-center overflow-hidden">
          <div className="scroll-container w-[80%] bg-[#007db8] py-[6px] rounded-[20px] text-white">
            <div className="scroll-content">
              {foottag.map((item, ind) => (
                <p
                  className="font-semibold xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-[10px] inline-block mx-8 font-Style  justify-center items-center "
                  key={ind}
                >
                  <span className="text-[20px]">{item.icon}</span>{" "}
                  <span>{item.label}</span>
                </p>
              ))}
              {/* duplicate items for seamless loop */}
              {foottag.map((item, ind) => (
                <p
                  className="font-semibold xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-[10px] inline-block mx-8 font-Style justify-center items-center"
                  key={`dup-${ind}`}
                >
                  <span className="text-[15px]">{item.icon}</span>{" "}
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
