import React from "react";
import style from "@/component/ArchiveItem.module.scss";
import Link from "next/link";
import Image from "next/image";

const archiveItem = ({ posts }) => {
  return (
    <div className={style.blogContent}>
      {posts.map((post) => {
        const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <article className={style.blogContentItem} key={post.id}>
            <div className={style.img}>
              <Image
                src={thumbnail}
                alt={post.title.rendered}
                width={600}
                height={340}
                className={style.thumbnail}
              />
            </div>
            <Link href={`/blog/${post.id}`}>
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
