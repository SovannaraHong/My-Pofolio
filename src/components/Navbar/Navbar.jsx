import React, { useState } from "react";
import Logo from "../../assets/logo.png";

import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navLink = [
    {
      path: "/",
      label: "Home",
      icon: <i className="fa-solid fa-house"></i>,
    },
    {
      path: "about",
      label: "About",
      icon: <i className="fa-solid fa-address-card"></i>,
    },
    {
      path: "profolio",
      label: "Portfolio",
      icon: <i className="fa-brands fa-web-awesome"></i>,
    },
    {
      path: "contact",
      label: "Contact",
      icon: <i className="fa-brands fa-whatsapp"></i>,
    },
  ];

  const [ActiveNav, SetActiveNav] = useState("Home");

  return (
    <>
      <nav className="flex justify-center items-center pt-[20px] font-popinse fixed top-0 left-0 right-0 z-[999999]  ">
        <div className="flex items-center justify-between w-[1200px] py-[5px] bg-[#2c4e31] text-white px-2 rounded-full">
          {/* Left (Logo) */}
          <div className="flex items-center gap-3">
            <img className="w-[50px] slow-spin-delay" src={Logo} alt="Logo" />
            <h3 className="font-semibold text-[16px] hover-Logo">
              Hong Sovannara
            </h3>
          </div>

          {/* Middle (Nav Links) */}
          <ul className="flex gap-10 items-center">
            {navLink.map((list, ind) => (
              <Link key={ind} to={list.path}>
                <li
                  onClick={() => SetActiveNav(list.label)}
                  className={`cursor-pointer transition-all duration-200 ease-in-out   ${
                    ActiveNav === list.label
                      ? " bg-white text-black px-3 py-2 rounded-full"
                      : " hover:text-[#ffa802] transition-all duration-200 ease-in-out "
                  }`}
                >
                  {list.icon} {list.label}
                </li>
              </Link>
            ))}
          </ul>

          {/* Right (Button) */}
          <button className="bg-white text-[13px] font-semibold text-black px-7 py-3 rounded-full">
            Contact Me
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
