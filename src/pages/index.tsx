import Header from '@/component/Header';
import Hero from '@/component/Hero';
import Category from '@/component/Category';
import News from '@/component/News';
import Data from '@/data/data.json';
import Profile from '@/component/Profile';
import Footer from '@/component/Footer';
import { Post } from '@/types/types';

export async function getStaticProps() {
  const url = Data.top.wpurl;
  const res = await fetch(url);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default function index({ posts }: { posts: Post[] }) {
  return (
    <>
      <Header nav={Data.top.header.nav} />
      <Hero hero={Data.top.hero} />
      <Category category={Data.top.categories} />
      <News news={Data.top.news} newsPost={posts} />
      <Profile about={Data.top.profile} />
      <Footer footer={Data.top.footer} />
    </>
  );
}
