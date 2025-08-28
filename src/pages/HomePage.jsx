import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import MySkill from "../components/Skill/MySkill";
import Project from "../components/Potfolio/Project";

const HomePage = () => {
  return (
    <>
      <div className="pt-[100px] bg-[#f5f3d3] h-auto">
        <HeroSection />
        <MySkill />
        <Project />
      </div>
    </>
  );
};

export default HomePage;
