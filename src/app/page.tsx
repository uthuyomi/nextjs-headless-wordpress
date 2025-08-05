import Header from "@/component/common/header/Header";
import Hero from "@/component/Home/hero/Hero";
import Category from "@/component/Home/category/Category";
import News from "@/component/Home/News/News";
import Data from "@/data/data.json";
import Profile from "@/component/Home/profile/Profile";
import Footer from "@/component/common/footer/Footer";
import { Post } from "@/types/types";

async function getPosts(): Promise<Post[]> {
  const url = `${Data.top.wpurl}?_embed&per_page=100`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

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
