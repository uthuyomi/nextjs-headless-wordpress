import React from "react";
import style from "@/styles/about.module.scss";
import Link from "next/link";

type ContactProps = {
  contact: {
    title: string;
    text01: string;
    text02: string;
    linkLabel: string;
    linkUrl: string;
  };
};

const AboutContact = ({ contact }: ContactProps) => {
  return (
    <section className={style.contactSection}>
      <h2 className={style.sectionTitle}>{contact.title}</h2>
      <p className={style.description}>
        {contact.text01}
        <br />
        {contact.text02}
      </p>
      <div className={style.contactBox}>
        <Link className={style.contactButton} href={contact.linkUrl}>
          {contact.linkLabel}
        </Link>
      </div>
    </section>
  );
};

export default AboutContact;
