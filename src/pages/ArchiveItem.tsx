import React from "react";
import style from "@/styles/archive.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/types";

type Props = {
  posts?: Post[]; // ← undefined許容（安全のため）
  noimg: string;
};

const ArchiveItem = ({ posts = [], noimg }: Props) => {
  return (
    <div className={style.blogContent}>
      {posts.map((post) => {
        const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        const categoryTerms = post._embedded?.["wp:term"]?.[0]
          ?.filter((term) => term.taxonomy === "category")
          ?.map((term) => term.name)
          ?.join(", "); // ← 配列を文字列化して表示

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
              <span className={style.categoryLabel}>
                {categoryTerms ?? "カテゴリなし"}
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

export default ArchiveItem;
