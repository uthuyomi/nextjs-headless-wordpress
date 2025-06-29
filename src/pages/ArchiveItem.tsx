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

        // カテゴリのみを抽出
        const terms = post._embedded?.["wp:term"]?.[0] ?? [];
        const categories = terms.filter(
          (term): term is Category => term.taxonomy === "category"
        );

        const primaryCategory = categories[0];
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
              <span>
                {" "}
                {primaryCategory ? (
                  <Link href={`/category/${primaryCategory.id}`}>
                    {primaryCategory.name}
                  </Link>
                ) : (
                  "未分類"
                )}
              </span>
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
