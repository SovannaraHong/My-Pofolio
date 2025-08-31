import React from "react";
import Project from "../components/Potfolio/Project";
import FormContact from "../components/ContactCom/FormContact";
import ContactHero from "../components/ContactCom/ContactHero";

const Potfolio = () => {
  return (
    <div className="h-auto">
      <Project />
      <ContactHero />
      <FormContact />
    </div>
  );
};

export default Potfolio;
