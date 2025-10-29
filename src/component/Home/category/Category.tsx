"use client";

import style from "@/component/Home/category/Category.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WP_Category, CategoryProps } from "@/types/home";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Category = ({ category }: CategoryProps) => {
  const [categories, setCategories] = useState<WP_Category[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch(
          "https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/categories?exclude=1",
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("API error");

        const data = (await res.json()) as WP_Category[];
        setCategories(data);
      } catch (err) {
        console.error("カテゴリ取得失敗:", err);
        setIsError(true);
        setCategories([]); // fallback: 空
      }
    }

    loadCategories();
  }, []);

  return (
    <div id="category" className={style.category}>
      <h2 className={style.title}>{category.title}</h2>

      {isError && (
        <p className={style.error}>カテゴリーを読み込めませんでした。</p>
      )}

      <div className={style.slider_wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={4}
          navigation={{
            prevEl: "#button_prev_category",
            nextEl: "#button_next_category",
          }}
          pagination={{ clickable: true }}
          className={style.categoryContent}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={style.categoryContentItem}>
                <h3>{item.name}</h3>
                <p>{item.description || category.noDescription}</p>
                <Link href={`/category/${item.slug}`}>{category.more}</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div id="button_prev_category" className="swiper-button-prev"></div>
        <div id="button_next_category" className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Category;
