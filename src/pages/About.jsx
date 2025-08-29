import React from "react";
import Education from "../components/Education/Education";
import MySkill from "../components/Skill/MySkill";
import Project from "../components/Potfolio/Project";

const About = () => {
  return (
    <>
      <div className="h-auto">
        <Education />
        <MySkill />
        <Project />
      </div>
    </>
  );
};

export default About;
