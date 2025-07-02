import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import style from "@/styles/about.module.scss";
import AboutHero from "@/component/About_1/AboutHero_1";
import AboutDescription from "../component/About_1/AboutDescription_1";
import AboutSkill from "../component/About_1/AboutSkill_1";
import AboutLink from "../component/About_1/AboutLink_1";
import AboutContact from "../component/About_1/AboutContact_1";
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
