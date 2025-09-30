import { useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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

const Footer = () => {
  const HandleRef = useRef(null);
  return (
    <>
      <footer className="bg-[#0c1220] text-gray-300 py-10 px-6   font-popinse">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo / About */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              HONG SOVANNARA
            </h2>
            <p className="text-sm leading-6 line-clamp-3">
              In my free time, I enjoy researching technology and practicing my
              front-end development skills. I also spend time reading books to
              gain knowledge about professional relationships and personal
              growth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Navigation
            </h3>
            <ul className="">
              {navLink.map((nav, i) => (
                <Link to={nav.path}>
                  <li key={i}>
                    {" "}
                    {nav.icon} {nav.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                {" "}
                <i class="fa-solid fa-phone"></i> +855 92379121
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i> rapewpew372@gmail.com{" "}
              </li>
              <li>
                <i class="fa-solid fa-user"></i> Hong Sovannara
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Mon - Thu: 9:00 - 21:00</li>
              <li>Fri: 8:00 - 21:00</li>
              <li>Sat: 9:30 - 15:00</li>
              <li>Sun: Off</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs">
            Copyright © {new Date().getFullYear()} All rights reserved | Made
            with ❤️ by <span className="text-blue-400">HONG SOVANNARA</span>
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
