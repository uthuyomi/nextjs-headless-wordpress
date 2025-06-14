import React from "react";
import style from "@/styles/about.module.scss";

type ItemProps = {
  linkLabel: string;
  linkUrl: string;
}

type LinkProp = {
  link: {
    title: string;
    linkItem: ItemProps[];
  };
};

const AboutLink = ({ link }: LinkProp) => {
  return (
    <section className={style.siteLinkSection}>
      <h2 className={style.sectionTitle}>{link.title}</h2>
      <ul className={style.siteList}>
        {link.map((item, i) => (
          <li key={i}>
            <strong>{item.link.linkLabel[i]}</strong>
            <a
              href={item.link.linkUrl[i]}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutLink;
