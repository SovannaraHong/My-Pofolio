import React from "react";
import cv from "../../assets/images/HONG SOVANNARA.png";
import FormContact from "../ContactCom/FormContact";
import "./CV.css";
const MyCv = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 pt-[100px]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1s  items-start  ">
          {/* Left side - contact form */}
          <div className="w-[750px] slide-in-left">
            <FormContact />
          </div>

          <div className="  ade-up flex pt-[20px]  justify-center items-center">
            <img
              className="xl:w-[500px] lg:w-[500px] md:w-[500px] sm:w-[400px] w-[300px]"
              src={cv}
              alt="CV"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCv;
