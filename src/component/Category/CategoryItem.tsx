"use client"; // クライアントコンポーネント化

import React from "react";
import style from "@/styles/archive.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/types";

type Props = {
  posts?: Post[];
  noimg: string;
  categoryName: string;
};

const CategoryItem = ({ posts = [], noimg, categoryName }: Props) => {
  return (
    <div className={style.blogContent}>
      {posts.map((post) => {
        const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        // ブラウザのconsoleに出る
        console.log("Post thumbnail:", thumbnail);

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
              <p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Link>
            <p>{new Date(post.date).toLocaleDateString()}</p>
          </article>
        );
      })}
    </div>
  );
};

export default CategoryItem;
