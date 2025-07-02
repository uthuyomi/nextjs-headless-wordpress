import React from "react";
import style from "@/styles/about.module.scss";
type SkillProps = {
  skill: {
    title: string;
    skillSet: string[];
  };
};

const AboutSkill = ({ skill }: SkillProps) => {
  const list = skill.skillSet;
  return (
    <section className={style.skillSection}>
      <h2 className={style.sectionTitle}>{skill.title}</h2>
      <ul className={style.skillList}>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSkill;
