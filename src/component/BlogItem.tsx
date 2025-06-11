import React from 'react'
import style from '@/styles/archive.module.scss';
import Link from 'next/link';

const BlogItem = ({posts}) => {
  return (
    <div className={style.blogContent}>
      {posts.map((post) => (
          <article className={style.blogContentItem} key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Link>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </article>
      ))}
    </div>
  );
}

export default BlogItem;