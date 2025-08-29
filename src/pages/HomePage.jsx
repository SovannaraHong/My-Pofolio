import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import MySkill from "../components/Skill/MySkill";
import Project from "../components/Potfolio/Project";
import Education from "../components/Education/Education";

const HomePage = () => {
  return (
    <>
      <div className="pt-[150px] h-auto">
        <HeroSection />
        <Education />
        <MySkill />
        <Project />
      </div>
    </>
  );
};

export default HomePage;
