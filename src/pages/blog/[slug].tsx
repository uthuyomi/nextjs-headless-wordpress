import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import style from "@/styles/blog.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@/component/Header";
import Link from "next/link";
import Data from "@/data/data.json";

type WP_Post = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  author: number;
  categories: number[];
  tags: number[];
  featured_media: number;
};

type BlogPostProps = {
  post: WP_Post;
  author: { name: string };
  categoryNames: string[];
  tagNames: string[];
  featuredImage: string | null;
  prevPost: { slug: string } | null;
  nextPost: { slug: string } | null;
};

export default function BlogPost({
  post,
  author,
  categoryNames,
  tagNames,
  featuredImage,
  prevPost,
  nextPost,
}: BlogPostProps) {
  const router = useRouter();
  if (router.isFallback) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta
          name="description"
          content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
        />
        <meta property="og:title" content={post.title.rendered} />
        {featuredImage && <meta property="og:image" content={featuredImage} />}
      </Head>

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
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost/wordpress/wp-json/wp/v2/posts");
  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const res = await fetch(
    `http://localhost/wordpress/wp-json/wp/v2/posts?slug=${slug}`
  );
  const posts = await res.json();

  if (!posts.length) return { notFound: true };

  const post = posts[0];

  // 著者
  const authorRes = await fetch(
    `http://localhost/wordpress/wp-json/wp/v2/users/${post.author}`
  );
  const author = await authorRes.json();

  // カテゴリ名取得
  const catRes = await Promise.all(
    post.categories.map((id: number) =>
      fetch(`http://localhost/wordpress/wp-json/wp/v2/categories/${id}`).then(
        (r) => r.json()
      )
    )
  );
  const categoryNames = catRes.map((cat) => cat.name);

  // タグ名取得
  const tagRes = await Promise.all(
    post.tags.map((id: number) =>
      fetch(`http://localhost/wordpress/wp-json/wp/v2/tags/${id}`).then((r) =>
        r.json()
      )
    )
  );
  const tagNames = tagRes.map((tag) => tag.name);

  // アイキャッチ画像URL取得
  let featuredImage = null;
  if (post.featured_media) {
    const imgRes = await fetch(
      `http://localhost/wordpress/wp-json/wp/v2/media/${post.featured_media}`
    );
    const img = await imgRes.json();
    featuredImage = img.source_url;
  }

  const currentId = post.id; //投稿順
  const mainCategory = post.categories?.[0]; //カテゴリ別

  // カテゴリ内の投稿を全件（100件まで）取得
  const allRes = await fetch(
    `http://localhost/wordpress/wp-json/wp/v2/posts?categories=${mainCategory}&orderby=id&order=asc&per_page=100`
  );
  const allPosts: WP_Post[] = await allRes.json();

  // 現在の投稿の位置を探す
  const index = allPosts.findIndex((p) => p.id === currentId);
  const prevPost = allPosts[index - 1] || null;
  const nextPost = allPosts[index + 1] || null;

  return {
    props: {
      post,
      author,
      categoryNames,
      tagNames,
      featuredImage,
      prevPost,
      nextPost,
    },
    revalidate: 10,
  };
};
