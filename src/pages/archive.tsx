import React, { useEffect, useState } from "react";
import Header from "@/component/Header";
import ArchiveItem from "@/component/archive/ArchiveItem";
import Footer from "@/component/Footer";
import style from "@/styles/archive.module.scss";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Data from "@/data/data.json";
import { Post } from "@/types/types";

// すべての投稿を取得して静的生成
export const getStaticProps: GetStaticProps = async () => {
  const url = `${Data.top.wpurl}?_embed&per_page=100`; // アイキャッチ含む
  const res = await fetch(url);
  const posts = await res.json();
  return { props: { posts } };
};

const Archive = ({ posts }: { posts: Post[] }) => {
  const navData = Data.top.header.nav;
  const router = useRouter();
  const { category } = router.query;

  const [categoryName, setCategoryName] = useState<string | null>(null);

  // カテゴリ名を取得
  useEffect(() => {
    if (typeof category === "string") {
      const isNumeric = /^\d+$/.test(category);
      const url = isNumeric
        ? `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/categories/${category}`
        : `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/categories?slug=${category}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          //slugで取得した場合、配列になる
          const categoryData = Array.isArray(data) ? data[0] : data;
          if (categoryData?.name) {
            setCategoryName(categoryData.name);
          } else {
            setCategoryName("取得エラー");
          }
        })
        .catch((err) => { 
          console.error("カテゴリ名の取得に失敗:", err);
          setCategoryName("取得エラー");
        })
    }
  }, [category]);

  // カテゴリIDで記事をフィルタリング
  const filteredPosts =
    typeof category === "string"
      ? posts.filter((post) => post.categories?.includes(Number(category)))
      : posts;

  return (
    <>
      <Header nav={navData} />
      <section className={style.archive}>
        <h2 className={style.heading}>
          {category
            ? `${categoryName || "カテゴリ"} 一覧`
            : Data.archive.blogLabel}
        </h2>
        <ArchiveItem
          posts={filteredPosts}
          noimg={Data.archive.noimg}
          categoryName={
            category
              ? `${categoryName || "カテゴリ"}`
              : Data.archive.blogLabel
          }
        />
      </section>
      <Footer footer={Data.top.footer} />
    </>
  );
};

export default Archive;
