import React from 'react'
import style from '@/styles/about.module.scss'

type heroProps = {
  about: { 
  title: string;
  intro: string;
  }
}

const aboutHero = ({ about }: heroProps) => {
  return (
    <section className={style.heroSection}>
      <h1 className={style.pageTitle}>{ about.title }</h1>
      <p className={style.pageIntro}>{  about.intro }</p>
    </section>
  );
}

export default aboutHero