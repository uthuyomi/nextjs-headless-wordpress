import React from "react";
import style from "@/component/Footer.module.scss";

type footerProps = {
  footer: {
    copyData: string;
    copyName: string;
    copyPenName: string;
  };
};

const Footer = ({ footer }: footerProps) => {
  return (
    <footer className={style.footer}>
      <p className={style.copyright}>
        {footer.copyData}
        <span className={style.name}>{footer.copyName}</span> (
        <span className={style.alias}>{footer.copyPenName}</span>)
      </p>
    </footer>
  );
};

export default Footer;
