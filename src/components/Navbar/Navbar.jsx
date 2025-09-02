import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

  const [active, setActive] = useState(true);
  const [ActiveMenu, setActiveMenu] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const match = navLink.find((i) =>
      i.path === "/"
        ? location.pathname === "/"
        : location.pathname === `/${i.path}`
    );
    document.title = match ? `My Portfolio | ${match.label}` : "HONG SOVANNARA";
  }, [location.pathname]);

  return (
    <>
      <nav className="flex justify-center items-center pt-[20px] font-popinse fixed md:px-[20px] sm:px-[20px] px-[10px] top-0 left-0 right-0 z-[999999]">
        <div className="flex items-center justify-between xl:w-[1200px] lg:w-[1200px] md:w-[1200px] sm:w-[1200px] w-[1200px] xl:py-[5px] lg:py-[5px] md:py-[5px] sm:py-[5px] py-[10px] bg-[#000000] text-white px-2 xl:rounded-full lg:rounded-full md:rounded-full sm:rounded-full rounded-[10px] relative">
          {/* Left (Logo + Name) */}
          <div className="flex items-center gap-3">
            <img
              className="w-[50px] slow-spin-delay xl:flex lg:flex md:flex sm:flex hidden"
              src={Logo}
              alt="Logo"
            />
            <h3 className="font-semibold xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] hover-Logo">
              Hong Sovannara
            </h3>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="cursor-pointer xl:hidden lg:hidden  md:hidden sm:hidden block"
            onClick={() => setActiveMenu(!ActiveMenu)}
          >
            <i className="fa-solid fa-bars text-[20px]"></i>
          </button>

          {/* Middle (Nav Links) */}
          <ul
            className={`transition-all duration-300 linear overflow-hidden ${
              ActiveMenu
                ? "  hidden xl:flex lg:flex md:flex sm:flex items-center xl:gap-10 lg:gap-10 md:gap-10 sm:gap-5"
                : " h-[240px] visible opacity-100  flex flex-col gap-5 absolute top-[35px] w-full  right-[0px] bg-[#2c4e31] p-5 rounded-br-[10px] rounded-bl-[10px] shadow-lg z-[999]"
            }`}
          >
            {navLink.map((list, ind) => (
              <Link key={ind} to={list.path}>
                <li
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setActiveMenu(true); // close menu after clicking
                  }}
                  className={`cursor-pointer xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] transition-all duration-200 ease-in-out ${
                    location.pathname ===
                    (list.path === "/" ? "/" : `/${list.path}`)
                      ? "bg-[#03c942] text-white px-3 py-2 rounded-full font-semibold "
                      : "hover:text-cyan-400"
                  }`}
                >
                  {list.icon} {list.label}
                </li>
              </Link>
            ))}
          </ul>

          {/* Right (CV Button) */}
          <button
            onClick={() => {
              navigate(location.pathname === "/mycv" ? "/" : "/mycv");
              setActive(!active);
            }}
            className={`xl:text-[13px] xl:flex lg:flex md:flex sm:flex font-popinse hidden font-semibold px-7 py-3 rounded-full transition-all duration-300 ease-in-out ${
              location.pathname === "/mycv"
                ? "bg-[#5462dd] text-white"
                : "bg-[#00ff51] text-white font-semibold"
            }`}
          >
            {location.pathname === "/mycv" ? "On Page CV" : "My CV"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
