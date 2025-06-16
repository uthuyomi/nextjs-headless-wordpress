import React from "react";
import style from "@/styles/about.module.scss";
import Image from "next/image";

type heroProps = {
  about: {
    imgUrl: string
    title: string;
    intro: string;
  };
};

const aboutHero = ({ about }: heroProps) => {
  return (
    <section className={style.heroSection}>
      <div className={style.img}>
        <Image src={about.imgUrl} alt={about.title} width={600} height={340} />
      </div>
      <h1 className={style.pageTitle}>{about.title}</h1>
      <p className={style.pageIntro}>{about.intro}</p>
    </section>
  );
};

export default aboutHero;
