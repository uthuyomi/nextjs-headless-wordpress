import React from "react";
import style from "@/styles/about.module.scss";

type descriptionProps = {
  description: {
    title: string;
    descriptionText01: string;
    descriptionText02: string;
  };
};

const AboutDescription = ({ description }: descriptionProps) => {
  return (
    <section className={style.introductionSection}>
      <h2 className={style.sectionTitle}>{description.title}</h2>
      <p className={style.description}>{description.descriptionText01}</p>
      <p className={style.description}>{description.descriptionText02}</p>
    </section>
  );
};

export default AboutDescription;
