import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Header from "@/component/Header";
import ArchiveItem from "@/pages/CategoryItem";
import Footer from "@/component/Footer";
import style from "@/styles/archive.module.scss";
import Data from "@/data/data.json";
import { Post } from "@/types/types";

type Props = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const url = `${Data.top.wpurl}?_embed&per_page=100`;
  const res = await fetch(url);
  const posts = await res.json();
  return { props: { posts } };
};

const category = ({ posts }: Props) => {
  const router = useRouter();
  const { category } = router.query;

  const [categoryName, setCategoryName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof category === "string") {
      const isNumeric = /^\d+$/.test(category);
      const url = isNumeric
        ? `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/categories/${category}`
        : `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/categories?slug=${category}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const categoryData = Array.isArray(data) ? data[0] : data;
          if (categoryData?.name) {
            setCategoryName(categoryData.name);
          } else {
            setCategoryName("取得エラー");
          }
        })
        .catch((err) => {
          console.error("カテゴリ名取得失敗:", err);
          setCategoryName("取得エラー");
        });
    } else {
      setCategoryName(null);
    }
  }, [category]);

  const filteredPosts =
    typeof category === "string"
      ? posts.filter((post) => post.categories?.includes(Number(category)))
      : posts;

  return (
    <>
      <Header nav={Data.top.header.nav} />
      <section className={style.archive}>
        <h2 className={style.heading}>
          {!category
            ? Data.archive.blogLabel // ← 例：「すべての記事」
            : categoryName
            ? `${categoryName} 一覧`
            : "カテゴリ未取得"}
        </h2>
        <ArchiveItem
          posts={filteredPosts}
          noimg={Data.archive.noimg}
          categoryName={categoryName ?? "カテゴリ"}
        />
      </section>
      <Footer footer={Data.top.footer} />
    </>
  );
};

export default category;
