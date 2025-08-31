import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactHero from "./ContactHero";
import "./Contact.css";
import { Link } from "react-router-dom";

const FormContact = () => {
  const social = [
    {
      icon: <i className="fa-brands fa-facebook"></i>,
      link: "https://www.facebook.com/share/1BTeNwEsUK/?mibextid=wwXIfr",
    },

    {
      icon: <i className="fa-brands fa-tiktok"></i>,
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

  const contactSocial = [
    {
      name: "Location",
      title: "Kombul, Phnom Penh City",
      icon: <i className="fa-solid fa-location-dot text-white"></i>,
      color: "#5462dd",
    },
    {
      name: "Email us",
      title: "rapewpew372@gmail.com",
      icon: <i className="fa-solid fa-envelope text-white"></i>,
      color: "#2dbd20",
    },
    {
      name: "Call us",
      title: "092379121",
      icon: <i className="fa-solid fa-phone text-white"></i>,
      color: "#e61c98",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nara0099", // Your EmailJS Service ID
        "template_vo1utsq",
        form.current,
        "IR_tXp7Wg6usIMJ-B" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <>
      <section className="px-[20px] py-[20px] flex justify-center appearAnimation gap-5 font-popinse bg-[#f5f5f5]">
        {/* Contact Info */}
        <div className="max-w-[600px]">
          <h1
            className="text-[22px] font-semibold mb-2 text-[#282f7e] border-b-3 border-b-blue-300 inline-block
          "
          >
            Get in touch
          </h1>
          <p className="text-gray-600 line-clamp-2 text-[12px]">
            This is my Contact Form and you can contact me here is thate eazy
            just input in form the the message it send to me thank you !
          </p>
          <hr className="border-b-2 my-[40px] border-b-gray-100" />

          {contactSocial.map((ct, index) => (
            <div key={index} className="flex gap-4 mb-4">
              <p
                className="w-fit px-[8px] py-[6px] rounded-full"
                style={{ backgroundColor: ct.color }}
              >
                {ct.icon}
              </p>
              <div className="flex flex-col">
                <p className="font-semibold text-[15px]">{ct.name}</p>
                <p className="text-[10px]">{ct.title}</p>
              </div>
            </div>
          ))}

          <hr className="border-b-2 mt-[40px] border-b-gray-200" />
          <h1 className="font-semibold text-[15px] pb-[10px]">
            Follow your social media
          </h1>
          <div className="flex gap-2">
            {social.map((s, i) => (
              <a target="_blank" rel="noopener noreferrer" href={s.link}>
                <p
                  key={i}
                  className="bg-[#5462dd]  hover:scale-[1.3] transition-all duration-200  ease-in-out hover:bg-[#e61c98] text-[13px] text-white rounded-full px-[5px] py-[6px] flex justify-center items-center"
                >
                  {s.icon}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#ffffff] w-full max-w-[600px] p-[20px] rounded-lg shadow-md">
          <h1 className="text-[22px] font-semibold mb-2 text-[#282f7e]">
            Send a Message
          </h1>
          <p className="text-gray-600 line-clamp-2 text-[12px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sapiente rem quo eaque natus, quos eos impedit quibusdam hic
            reiciendis?
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-2 gap-4"
          >
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name..."
                className="bg-[#c7d7fc] w-full py-2 px-3 rounded-[5px]"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="Enter Phone..."
                className="bg-[#c7d7fc] w-full py-2 px-3 rounded-[5px]"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email..."
                className="bg-[#c7d7fc] w-full py-2 px-3 rounded-[5px]"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message..."
                className="bg-[#c7d7fc] w-full py-2 px-3 rounded-[5px] resize-none h-[120px]"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-[#2c4e31] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#ffa802] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormContact;
