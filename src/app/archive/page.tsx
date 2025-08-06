import Header from "@/component/common/header/Header";
import Footer from "@/component/common/footer/Footer";
import ArchiveItem from "@/component/Archive/ArchiveItem";
import style from "@/styles/archive.module.scss";
import Data from "@/data/data.json";
import { Post } from "@/types/archive";

export const dynamic = "force-dynamic"; // SSR強制

async function getPosts(): Promise<Post[]> {
  const url = `${Data.top.wpurl}?_embed&per_page=100`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export default async function ArchiveIndexPage() {
  const posts = await getPosts();

  return (
    <>
      <Header nav={Data.top.header.nav} />
      <section className={style.archive}>
        <h2 className={style.heading}>記事一覧</h2>
        <ArchiveItem posts={posts} noimg={Data.archive.noimg} />
      </section>
      <Footer footer={Data.top.footer} />
    </>
  );
}
