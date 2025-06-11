import React from "react";
import Header from "@/component/Header";
import BlogItem from "@/component/BlogItem";
import style from "@/styles/archive.module.scss";
import { GetStaticProps } from "next";
import localhost from "@/data/data.json";

export const getStaticProps: GetStaticProps = async () => {
    const url = localhost.wpurl;
  const res = await fetch(url);
  const posts = await res.json();
  return { props: { posts } }; // ← props 小文字でOK
};

const Archive = ({ posts }) => {
  return (
    <>
      <Header />
      <section className={style.archive}>
              <h2 className={style.heading}>ブログ一覧</h2>
        <BlogItem posts={posts} />
      </section>
    </>
  );
};

export default Archive;
