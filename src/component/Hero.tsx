import React from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  hero: {
    title: string;
    subtitle: string;
    buttontext: string;
    buttonlink: string;
    imageUrl: string;
  };
};

const Hero = ({ hero }: HeroProps) => {
  return (
    <div className={style.hero}>
      <div className={style.heroText}>
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <Link href={hero.buttonlink}>{hero.buttontext}</Link>
      </div>
      <div className={style.heroImg}>
        <div className={style.img}>
          <Image
            src={hero.imageUrl}
            alt={hero.title}
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
