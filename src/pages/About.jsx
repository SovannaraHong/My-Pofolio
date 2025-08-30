import React from "react";
import Education from "../components/Education/Education";
import MySkill from "../components/Skill/MySkill";
import Project from "../components/Potfolio/Project";
import FormContact from "../components/ContactCom/FormContact";
import ContactHero from "../components/ContactCom/ContactHero";

const About = () => {
  return (
    <>
      <div className="h-auto ">
        <Education />
        <MySkill />
        <Project />

        <FormContact />
      </div>
    </>
  );
};

export default About;
