import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import style from "@/styles/about.module.scss";
import AboutHero from "@/component/about/AboutHero";
import AboutDescription from "../component/about/AboutDescription";
import AboutSkill from "../component/about/AboutSkill";
import AboutLink from "../component/about/AboutLink";
import AboutContact from "../component/about/AboutContact";
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
