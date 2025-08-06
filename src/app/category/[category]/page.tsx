// src/app/category/[category]/page.tsx
import Header from "@/component/common/header/Header";
import Footer from "@/component/common/footer/Footer";
import style from "@/styles/archive.module.scss";
import Data from "@/data/data.json";
import { Post } from "@/types/types";
import CategoryItem from "@/component/Category/CategoryItem";

export const dynamic = "force-dynamic"; // SSR強制で毎回fetch

type Props = { params: { category: string } };

async function getPosts(): Promise<Post[]> {
  const url = `${Data.top.wpurl}?_embed&per_page=100`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

async function getCategoryName(category: string): Promise<string> {
  const isNumeric = /^\d+$/.test(category);
  const url = isNumeric
    ? `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/categories/${category}`
    : `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/categories?slug=${category}`;

  console.log("Category API URL:", url);

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  if (Array.isArray(data)) return data[0]?.name ?? "取得エラー";
  if (data && typeof data === "object")
    return (data as any).name ?? "取得エラー";
  return "取得エラー";
}

export default async function CategoryPage({ params }: Props) {
  const posts = await getPosts();
  const { category } = params;

  const categoryName = await getCategoryName(category);

  const filteredPosts = /^\d+$/.test(category)
    ? posts.filter((post) => post.categories?.includes(Number(category)))
    : posts;

  return (
    <>
      <Header nav={Data.top.header.nav} />
      <section className={style.archive}>
        <h2 className={style.heading}>
          {categoryName ? `${categoryName} 一覧` : Data.archive.blogLabel}
        </h2>
        <CategoryItem
          posts={filteredPosts}
          noimg={Data.archive.noimg}
          categoryName={categoryName}
        />
      </section>
      <Footer footer={Data.top.footer} />
    </>
  );
}
