import React from 'react'
import style from "@/styles/profile.module.scss";
import Header from "@/component/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <main className={style.profileMain}>
        <section className={style.heroSection}>
          <h1 className={style.pageTitle}>私について</h1>
          <p className={style.pageIntro}>Web制作 × 文章制作 × AI活用</p>
        </section>

        <section className={style.introductionSection}>
          <h2 className={style.sectionTitle}>自己紹介</h2>
          <p className={style.description}>
            札幌拠点のWebコーダー・ライター。HTML/CSS/JS/PHPを用いたLP制作や、WordPressテーマ開発、SEO最適化、そして小説執筆なども行っています。
            独学＋現場で培った実装力で、構造的な設計と表現力を両立します。
          </p>
        </section>

        <section className={style.skillSection}>
          <h2 className={style.sectionTitle}>スキルセット</h2>
          <ul className={style.skillList}>
            <li>HTML / CSS / SCSS</li>
            <li>JavaScript / React / Next.js</li>
            <li>PHP / WordPress開発</li>
            <li>Figma / XD / Photoshop</li>
            <li>SEO設計 / レスポンシブ対応</li>
            <li>執筆（小説・技術記事）/ 構造ライティング</li>
          </ul>
        </section>

        <section className={style.contactSection}>
          <h2 className={style.sectionTitle}>お問い合わせ</h2>
          <p className={style.description}>
            ご相談・ご依頼などは、下記のフォームまたはSNS経由でお気軽にどうぞ。
          </p>
          <div className={style.contactBox}>
            <a href="/contact" className={style.contactButton}>
              お問い合わせフォームへ
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile