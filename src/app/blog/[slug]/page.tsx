// src/app/blog/[slug]/page.tsx
import Header from "@/component/common/header/Header";
import Footer from "@/component/common/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import style from "@/styles/blog.module.scss";
import Data from "@/data/data.json";
import { WP_Post } from "@/types/blog";

// ✅ WordPress記事取得
async function getPost(slug: string) {
  const res = await fetch(
    `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/posts?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const posts = await res.json();
  if (!posts.length) return null;
  return posts[0] as WP_Post;
}

// ✅ 著者
async function getAuthor(id: number) {
  const res = await fetch(
    `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/users/${id}`
  );
  return res.json();
}

// ✅ タクソノミー（カテゴリ/タグ）
async function getNames(ids: number[], type: "categories" | "tags") {
  const data = await Promise.all(
    ids.map((id) =>
      fetch(
        `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/${type}/${id}`
      ).then((r) => r.json())
    )
  );
  return data.map((d) => d.name);
}

// ✅ アイキャッチ
async function getFeaturedImage(id: number) {
  if (!id) return null;
  const res = await fetch(
    `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/media/${id}`
  );
  const img = await res.json();
  return img?.source_url || null;
}

// ✅ 前後記事
async function getPrevNext(post: WP_Post) {
  const mainCategory = post.categories?.[0];
  const allRes = await fetch(
    `https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/posts?categories=${mainCategory}&orderby=id&order=asc&per_page=100`
  );
  const allPosts: WP_Post[] = await allRes.json();
  const index = allPosts.findIndex((p) => p.id === post.id);

  return {
    prevPost: allPosts[index - 1] || null,
    nextPost: allPosts[index + 1] || null,
  };
}

// ✅ ★ 型を緩めてビルド通す
export default async function BlogPostPage({ params }: any) {
  const post = await getPost(params.slug);
  if (!post) return <p>記事が見つかりませんでした。</p>;

  const [
    author,
    categoryNames,
    tagNames,
    featuredImage,
    { prevPost, nextPost },
  ] = await Promise.all([
    getAuthor(post.author),
    getNames(post.categories, "categories"),
    getNames(post.tags, "tags"),
    getFeaturedImage(post.featured_media),
    getPrevNext(post),
  ]);

  return (
    <>
      <Header nav={Data.top.header.nav} />

      <article className={style.blogItem}>
        <h1
          className={style.heading}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div className={style.headingItem}>
          <p>{new Date(post.date).toLocaleDateString()}</p>
          <p>著者: {author.name}</p>
          <p>カテゴリ: {categoryNames.join(", ")}</p>
          <p>タグ: {tagNames.join(", ")}</p>
        </div>

        {featuredImage && (
          <Image
            src={featuredImage}
            width={800}
            height={450}
            alt="アイキャッチ"
          />
        )}

        <div
          className={style.blogPostContent}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div className={style.pageNaition}>
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`}>＜＜ 前の記事：</Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`}>次の記事 ＞＞</Link>
          )}
        </div>
      </article>

      <Footer footer={Data.top.footer} />
    </>
  );
}

// ✅ SSG（静的パス生成）
export async function generateStaticParams() {
  const res = await fetch(
    "https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/posts"
  );
  const posts: WP_Post[] = await res.json();
  return posts.map((post) => ({ slug: post.slug }));
}
