import Header from "@/component/Header_1";
import Hero from "@/component/Hero_1";
import Category from "@/component/Category_1";
import News from "@/component/News_1";
import Data from "@/data/data.json";
import Profile from "@/component/Profile_1";
import Footer from "@/component/Footer_1";
import { Post } from "@/types/types";

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
      <div className="main">
        <Hero hero={Data.top.hero} />
        <Category category={Data.top.categories} />
        <News news={Data.top.news} newsPost={posts} />
        <Profile about={Data.top.profile} />
      </div>
      <Footer footer={Data.top.footer} />
    </>
  );
}
