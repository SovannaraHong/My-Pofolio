import React from "react";
import CardProject from "./CardProject";
import "./Card.css";
import p1 from "../../assets/Pofolio/1.png";
import p2 from "../../assets/Pofolio/2.png";
import p3 from "../../assets/Pofolio/3.png";
import p4 from "../../assets/Pofolio/ten11/1.png";
import p5 from "../../assets/Pofolio/ten11/2.png";
import p6 from "../../assets/Pofolio/ten11/3.png";

const foottag = [
  { icon: <i class="fa-brands fa-html5"></i>, label: "HTML" },
  { icon: <i class="fa-brands fa-css3-alt"></i>, label: "CSS" },
  { icon: <i class="fa-brands fa-square-js"></i>, label: "JAVASCRIPT" },
  { icon: <i class="bx bxl-typescript"></i>, label: "TYPESCRIPT" },
  { icon: <i class="fa-brands fa-bootstrap"></i>, label: "BOOSTRAP" },
  { icon: <i class="bx bxl-tailwind-css"></i>, label: "TAILWIND" },
  { icon: <i class="fa-brands fa-react"></i>, label: "REACT JS" },
  { icon: <i class="fa-brands fa-vuejs"></i>, label: "VUE JS" },

  { icon: <i class="fa-brands fa-figma"></i>, label: "FIGMA" },
];

const groupProject = [
  {
    name: "Zando",
    title:
      "At Zando, we believe that style is an expression of who you are. Explore our curated collections of trendy apparel, accessories, and footwear designed to fit every mood and occasion. Whether you’re looking for everyday essentials or statement pieces, Zando makes fashion simple, accessible, and fun. Step in, discover your perfect look, and let your style shine.",
    imags: [p1, p2, p3],
    langues: [
      <i class="fa-brands fa-react"></i>,
      <i class="bx bxl-tailwind-css"></i>,
      <i class="fa-brands fa-css3-alt"></i>,
    ],
    path: "https://zando-clone-omega.vercel.app/",
    link: "https://github.com/SovannaraHong/zando-clone.git",
  },
  {
    name: "Ten11",
    title:
      "Ten11 is where creativity and functionality come together. We offer thoughtfully designed products and experiences that elevate everyday life. From cutting-edge gadgets to lifestyle essentials, Ten11 is dedicated to bringing quality, style, and innovation to your fingertips. Discover, explore, and experience the future with Ten11 – where ideas turn into reality.",
    imags: [p4, p5, p6],
    langues: [
      <i class="fa-brands fa-html5"></i>,
      <i class="bx bxl-tailwind-css"></i>,
      <i class="fa-brands fa-css3-alt"></i>,
    ],
    path: "https://ten11-yruk.vercel.app/",
    link: "https://github.com/SovannaraHong/Ten11.git",
  },
  {
    name: "Zando",
    title:
      "At Zando, we believe that style is an expression of who you are. Explore our curated collections of trendy apparel, accessories, and footwear designed to fit every mood and occasion. Whether you’re looking for everyday essentials or statement pieces, Zando makes fashion simple, accessible, and fun. Step in, discover your perfect look, and let your style shine.",
    imags: [p1, p2, p3],
    langues: [
      <i class="fa-brands fa-react"></i>,
      <i class="bx bxl-tailwind-css"></i>,
      <i class="fa-brands fa-css3-alt"></i>,
    ],
    path: "https://zando-clone-omega.vercel.app/",
    link: "https://github.com/SovannaraHong/zando-clone.git",
  },
  {
    name: "Ten11",
    title:
      "Ten11 is where creativity and functionality come together. We offer thoughtfully designed products and experiences that elevate everyday life. From cutting-edge gadgets to lifestyle essentials, Ten11 is dedicated to bringing quality, style, and innovation to your fingertips. Discover, explore, and experience the future with Ten11 – where ideas turn into reality.",
    imags: [p4, p5, p6],
    langues: [
      <i class="fa-brands fa-html5"></i>,
      <i class="bx bxl-tailwind-css"></i>,
      <i class="fa-brands fa-css3-alt"></i>,
    ],
    path: "https://ten11-yruk.vercel.app/",
    link: "https://github.com/SovannaraHong/Ten11.git",
  },
  {
    name: "Zando",
    title:
      "At Zando, we believe that style is an expression of who you are. Explore our curated collections of trendy apparel, accessories, and footwear designed to fit every mood and occasion. Whether you’re looking for everyday essentials or statement pieces, Zando makes fashion simple, accessible, and fun. Step in, discover your perfect look, and let your style shine.",
    imags: [p1, p2, p3],
    langues: [
      <i class="fa-brands fa-react"></i>,
      <i class="bx bxl-tailwind-css"></i>,
      <i class="fa-brands fa-css3-alt"></i>,
    ],
    path: "https://zando-clone-omega.vercel.app/",
    link: "https://github.com/SovannaraHong/zando-clone.git",
  },
  {
    name: "Ten11",
    title:
      "Ten11 is where creativity and functionality come together. We offer thoughtfully designed products and experiences that elevate everyday life. From cutting-edge gadgets to lifestyle essentials, Ten11 is dedicated to bringing quality, style, and innovation to your fingertips. Discover, explore, and experience the future with Ten11 – where ideas turn into reality.",
    imags: [p4, p5, p6],
    langues: [
      <i class="fa-brands fa-html5"></i>,
      <i class="bx bxl-tailwind-css"></i>,
      <i class="fa-brands fa-css3-alt"></i>,
    ],
    path: "https://ten11-yruk.vercel.app/",
    link: "https://github.com/SovannaraHong/Ten11.git",
  },
];

const Project = () => {
  return (
    <>
      <main className="h-auto">
        <div className="flex justify-center items-center py-[50px]">
          <h1 className="text-[30px] font-Style uppercase  border-b-2 flade-up border-b-green-600 ">
            My Project
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-6 px-[50px] cardPro  cursor-pointer">
          {groupProject.map((card, ind) => (
            <CardProject key={ind} {...card} />
          ))}
        </div>
      </main>
      ;
    </>
  );
};

export default Project;
