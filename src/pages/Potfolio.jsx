import React from "react";
import Project from "../components/Potfolio/Project";
import FormContact from "../components/ContactCom/FormContact";
import ContactHero from "../components/ContactCom/ContactHero";
import MySkill from "../components/Skill/MySkill";

const Potfolio = () => {
  return (
    <div className="h-auto">
      <Project />
      <MySkill />
      <ContactHero />
      <FormContact />
    </div>
  );
};

export default Potfolio;
