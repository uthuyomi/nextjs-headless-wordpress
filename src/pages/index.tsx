import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Category from "@/component/Category";
import News from "@/component/News";
import Data from "@/data/data.json";
import Profile from "@/component/Profile";
import localhost from '@/data/data.json';

export async function getStaticProps() {
  const url = localhost.wpurl;
  const res = await fetch(url);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default function index({ posts }) {
  return (
    <>
      <Header />
      <Hero data={Data.hero} />
      <Category categories={Data.categories} />
      <News newsData={Data.articles} news={posts} />
      <Profile about={Data.about} />
    </>
  );
}
