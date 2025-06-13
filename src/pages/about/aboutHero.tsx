import React from 'react'
import style from '@/styles/about.module.scss'

const aboutHero = () => {
  return (
    <section className={style.heroSection}>
      <h1 className={style.pageTitle}>私について</h1>
      <p className={style.pageIntro}>Web制作 × 文章制作 × AI活用</p>
    </section>
  );
}

export default aboutHero