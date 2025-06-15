import React from "react";
import Header from "@/component/Header";
import style from "@/styles/about.module.scss";
import AboutHero from "@/pages/about/AboutHero";
import AboutDescription from "./about/AboutDescription";
import AboutSkill from "./about/AboutSkill";
import AboutLink from "./about/AboutLink";
import AboutContact from "./about/AboutContact";
import Data from "@/data/data.json";

const About = () => {
  return (
    <>
      <Header nav={Data.top.header.nav} />
      <main className={style.profileMain}>
        <AboutHero about={Data.about.hero} />
        <AboutDescription description={Data.about.description} />
        <AboutSkill skill={Data.about.skill} />
        <AboutLink link={Data.about.link} />
        <AboutContact contact={Data.about.contact} />
      </main>
    </>
  );
};

export default About;
