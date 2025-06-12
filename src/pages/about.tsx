import React from "react";
import Header from "@/component/Header";
import style from "@/styles/about.module.scss";

const About = () => {
  return (
    <>
      <Header />
      <main className={style.profileMain}>
        

        <section className={style.introductionSection}>
          <h2 className={style.sectionTitle}>自己紹介</h2>
          <p className={style.description}>
            北海道札幌市を拠点に活動している、Webコーダー／ライターの安崎海星（Yasuzaki
            Kaisei）です。
            フロントエンドの実装から、WordPressテーマの開発、小説・技術記事の執筆まで──
            「構造」と「言語」を軸に、多領域での表現と設計を行っています。
          </p>
          <p className={style.description}>
            単なる実装ではなく、クライアントの意図や読者の理解までを視野に入れた「設計としてのコーディング」「構造としてのライティング」を重視。
            自身の制作物には、意味のある余白と、静かな文脈を宿すよう心がけています。
          </p>
        </section>

        <section className={style.skillSection}>
          <h2 className={style.sectionTitle}>スキルセット</h2>
          <ul className={style.skillList}>
            <li>HTML / CSS / SCSS（レスポンシブ / カラム設計）</li>
            <li>JavaScript / React / Next.js（SPA / API連携）</li>
            <li>
              PHP / WordPressテーマ開発（自作 / カスタム投稿 / フィールド）
            </li>
            <li>Figma / XD / Photoshop（デザインカンプからの実装）</li>
            <li>SEO設計 / ページ構造の最適化</li>
            <li>執筆（小説 / 技術記事 / 構造ライティング）</li>
            <li>AI活用（ChatGPTとの共同制作 / コンテンツ設計支援）</li>
          </ul>
        </section>

        <section className={style.siteLinkSection}>
          <h2 className={style.sectionTitle}>運営中のサイト・SNS</h2>
          <ul className={style.siteList}>
            <li>
              <strong>📘 文章・創作ブログ：</strong>
              <a
                href="https://note.com/utuyomi"
                target="_blank"
                rel="noopener noreferrer"
              >
                『現読：記録者ノート』シリーズ（note）
              </a>
            </li>
            <li>
              <strong>💼 事業用サイト：</strong>
              <a
                href="https://example-business-site.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web制作・構造設計サービス（事業サイト）
              </a>
            </li>
            <li>
              <strong>🖼️ ポートフォリオ：</strong>
              <a
                href="https://example-portfolio-site.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                制作実績とコードサンプル（ポートフォリオサイト）
              </a>
            </li>
            <li>
              <strong>🐦 Twitter（X）：</strong>
              <a
                href="https://twitter.com/webyayasu"
                target="_blank"
                rel="noopener noreferrer"
              >
                @webyayasu
              </a>
              ──制作進行や構造思考などを発信しています。
            </li>
            <li>
              <strong>🔗 LinkedIn：</strong>
              <a
                href="https://www.linkedin.com/in/kaisei-yasuzaki"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kaisei Yasuzaki（LinkedInプロフィール）
              </a>
              ──構造設計・AI協働・言語UIに関する投稿多数。
            </li>
          </ul>
        </section>

        <section className={style.contactSection}>
          <h2 className={style.sectionTitle}>お問い合わせ</h2>
          <p className={style.description}>
            Web制作のご依頼、文章案件、構造設計に関するご相談など、お気軽にご連絡ください。
            <br />
            内容を確認の上、通常1〜2営業日以内にお返事いたします。
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
};

export default About;
