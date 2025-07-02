import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import style from "@/styles/about.module.scss";
import AboutHero from "@/component/About/AboutHero";
import AboutDescription from "../component/About/AboutDescription";
import AboutSkill from "../component/About/AboutSkill";
import AboutLink from "../component/About/AboutLink";
import AboutContact from "../component/About/AboutContact";
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
      <Footer footer={Data.top.footer} />
    </>
  );
};

export default About;
