import React from "react";
import Header from "@/component/Header";
import ArchiveItem from "@/pages/archive/ArchiveItem";
import style from "@/styles/archive.module.scss";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Data from "@/data/data.json";
import { useEffect, useState } from "react";
import { Post } from '@/types/types';

// ビルド時に全記事を取得して静的生成
export const getStaticProps: GetStaticProps = async () => {
  const url = Data.top.wpurl;
  const res = await fetch(url);
  const posts = await res.json();
  return { props: { posts } }; // ← props 小文字でOK
};

const Archive = ({ posts }: { posts: Post[] }) => {
  const navData = Data.top.header.nav;
  const router = useRouter();
  const { category } = router.query;

  // 動的に取得したカテゴリ名を格納
  const [categoryName, setCategoryName] = useState<string | null>(null);
  useEffect(() => {
    // categoryが未定義 or 配列（エラーケース）の場合は無視
    if (category) {
      fetch(`http://localhost/wordpress/wp-json/wp/v2/categories/${category}`)
        .then((res) => res.json())
        .then((data) => setCategoryName(data.name))
        .catch((err) => {
          console.error("カテゴリ名の取得に失敗:", err);
          setCategoryName(null);
        });
    } else {
      setCategoryName(null);
    }
  }, [category]);

  //フィルター処理：カテゴリIDが一致する記事だけを抽出
  const filterPosts = category
    ? posts.filter((post) => post.categories?.some((c) => c.id === Number(category)))
    : posts;

  return (
    <>
      <Header nav={navData} />
      <section className={style.archive}>
        <h2 className={style.heading}>
          {category ? `${categoryName} 一覧` : Data.archive.blogLabel}
        </h2>
        <ArchiveItem posts={filterPosts} noimg={Data.archive.noimg} />
      </section>
    </>
  );
};

export default Archive;
