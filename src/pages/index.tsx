import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Category from "@/component/Category";
import News from "@/component/News";
import Data from "@/data/data.json";
import Profile from "@/component/Profile";

export async function getStaticProps() {
  const res = await fetch("http://localhost/wordpress/wp-json/wp/v2/posts");
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
