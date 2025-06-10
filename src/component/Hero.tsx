import React from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  data: {
    title: string;
    subtitle: string;
    buttontext: string;
    buttonlink: string;
    imageUrl: string;
  };
};

const Hero = ({ data }: HeroProps) => {
  return (
    <div className={style.hero}>
      <div className={style.heroText}>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <Link href={data.buttonlink}>{data.buttontext}</Link>
      </div>
      <div className={style.heroImg}>
        <div className={style.img}>
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
