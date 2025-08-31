import React from "react";
import cv from "../../assets/images/HONG SOVANNARA.png";
import FormContact from "../ContactCom/FormContact";
import "./CV.css";
const MyCv = () => {
  return (
    <div className="flex justify-between items-start pt-[100px] px-[20px] h-screen overflow-hidden">
      <div className="w-[500px]"></div>

      {/* Left side - contact form */}
      <div className="fixed top-[100px] left-[20px] w-[750px] slide-in-left">
        <FormContact />
      </div>

      {/* Right side - scrollable CV */}
      <div className="ml-[450px] h-[calc(100vh-120px)] overflow-y-auto fade-up">
        <img className="w-[1000px]" src={cv} alt="CV" />
      </div>
    </div>
  );
};

export default MyCv;
