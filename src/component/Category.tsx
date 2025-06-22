import style from "@/component/Category.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type WP_Category = {
  id: number;
  name: string;
  description: string;
  slug: string;
};

type categoryProps = {
  category: {
    title: string;
    noDescription: string;
    more: string;
  };
};

const Category = ({ category }: categoryProps) => {
  const [categories, setCategories] = useState<WP_Category[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1/wordpress/wp-json/wp/v2/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("カテゴリ取得失敗:", err));
  }, []); // ← 無限fetchバグ修正（依存配列忘れてた）

  return (
    <div className={style.category}>
      <h2 className={style.title}>{category.title}</h2>
      <div className={style.swiper_wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={4}
          navigation={{
            prevEl: "#button_prev",
            nextEl: "#button_next",
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
                <Link href={`/Archive?category=${item.id}`}>
                  {category.more}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
