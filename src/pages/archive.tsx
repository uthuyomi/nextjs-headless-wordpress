import React from "react";
import Header from "@/component/Header";
import ArchiveItem from "@/pages/archive/ArchiveItem";
import style from "@/styles/archive.module.scss";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import localhost from "@/data/data.json";
import Data from "@/data/data.json";

export const getStaticProps: GetStaticProps = async () => {
  const url = localhost.top.wpurl;
  const res = await fetch(url);
  const posts = await res.json();
  return { props: { posts } }; // ← props 小文字でOK
};

const Archive = ({ posts }: { posts: any[] }) => { 
  const navData = Data.top.header.nav;
  const router = useRouter();
  const { category } = router.query;

  //フィルター処理：カテゴリIDが一致する記事だけを抽出
  const filterPosts = category
    ? posts.filter((post) =>
      post.categories.includes(Number(category))
    )
    : posts;

  return (
    <>
      <Header nav={navData} />
      <section className={style.archive}>
        <h2 className={style.heading}>{ category ? Data.archive.categoryLabel : Data.archive.blogLabel}</h2>
        <ArchiveItem posts={filterPosts} noimg={Data.archive.noimg} />
      </section>
    </>
  );
};

export default Archive;
