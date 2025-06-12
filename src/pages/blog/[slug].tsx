import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import style from "@/styles/blogItem.module.scss"
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@/component/Header";

export default function BlogPost({
  post,
  author,
  categoryNames,
  tagNames,
  featuredImage,
}: any) {
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

      <Header />

      <article className={style.blogItem}>
        <h1
          className={style.heading}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div class={style.headingItem}>
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

        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
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

  return {
    props: {
      post,
      author,
      categoryNames,
      tagNames,
      featuredImage,
    },
    revalidate: 10,
  };
};
