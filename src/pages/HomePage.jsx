import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import MySkill from "../components/Skill/MySkill";
import Project from "../components/Potfolio/Project";
import Education from "../components/Education/Education";
import Contact from "./Contact";
import ContactHero from "../components/ContactCom/ContactHero";

const HomePage = () => {
  return (
    <>
      <div className="pt-[150px] h-auto">
        <HeroSection />
        <Education />
        <MySkill />
        <Project />

        <Contact />
      </div>
    </>
  );
};

export default HomePage;
