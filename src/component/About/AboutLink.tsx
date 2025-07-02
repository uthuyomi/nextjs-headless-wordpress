import React from "react";
import style from "@/styles/about.module.scss";
import Link from "next/link";

type ItemProps = {
  linkLabel: string;
  linkUrl: string;
};

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
        {link.linkItem.map((item, i) => (
          <li key={i}>
            <strong>{item.linkLabel}</strong>
            <Link href={item.linkUrl}>{item.linkUrl}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutLink;
