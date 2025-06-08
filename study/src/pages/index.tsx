import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Category from "@/component/Category";
import Data from "@/data/data.json";

export default function index() {
  return (
    <>
      <Header />
      <Hero data={Data.hero} />
      <Category data={Data.categories} />
    </>
  );
}
