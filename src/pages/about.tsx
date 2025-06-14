import React from "react";
import Header from "@/component/Header";
import style from "@/styles/about.module.scss";
import AboutHero from "@/pages/about/aboutHero";
import AboutDescription from "./about/AboutDescription";
import AboutSkill from "./about/AboutSkill";
import AboutLink from "./about/AboutLink";
import Data from '@/data/data.json';

const About = () => {
  return (
    <>
      <Header nav={Data.top.header.nav} />
      <main className={style.profileMain}>
        <AboutHero about={Data.about.hero} />
        <AboutDescription description={Data.about.description} />
        <AboutSkill skill={Data.about.skill} />
        <AboutLink link={Data.about.link} />

        

        <section className={style.contactSection}>
          <h2 className={style.sectionTitle}>お問い合わせ</h2>
          <p className={style.description}>
            Web制作のご依頼、文章案件、構造設計に関するご相談など、お気軽にご連絡ください。
            <br />
            内容を確認の上、通常1〜2営業日以内にお返事いたします。
          </p>
          <div className={style.contactBox}>
            <a href="/contact" className={style.contactButton}>
              お問い合わせフォームへ
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
