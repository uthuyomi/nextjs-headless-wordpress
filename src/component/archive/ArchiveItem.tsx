import React from "react";
import style from "@/styles/archive.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Post, Category } from "@/types/types";

type Props = {
  posts: Post[];
  noimg: string;
};

const archiveItem = ({ posts, noimg }: Props) => {
  return (
    <div className={style.blogContent}>
      {posts.map((post) => {
        const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        const categoryTerms = post._embedded?.["wp:term"]?.find(
          (terms): terms is Category[] =>
            Array.isArray(terms) && terms[0]?.taxonomy === "category"
        );

        const categoryName = categoryTerms?.[0]?.name ?? "未分類";

        return (
          <article className={style.blogContentItem} key={post.id}>
            <div className={style.img}>
              <Image
                src={thumbnail || noimg}
                alt={post.title.rendered}
                width={600}
                height={340}
                className={style.thumbnail}
              />
              <span className={style.categoryLabel}>{categoryName}</span>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Link>
            <p>{new Date(post.date).toLocaleDateString()}</p>
          </article>
        );
      })}
    </div>
  );
};
export default archiveItem;
