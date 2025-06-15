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
  };
};

const Category = ({ category }: categoryProps) => {
  const [categories, setCategories] = useState<WP_Category[]>([]);

  useEffect(() => {
    fetch("http://localhost/wordpress/wp-json/wp/v2/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("カテゴリ取得失敗:", err));
  }, []); // ← 無限fetchバグ修正（依存配列忘れてた）

  return (
    <div className={style.category}>
      <h2 className={style.title}>{category.title}</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={4} // ← デフォルトはモバイル最小サイズ用に
        navigation
        pagination={{ clickable: true }}
        className={style.categoryContent}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }, // ← PC幅で4枚表示
        }}
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={style.categoryContentItem}>
              <h3>
                <Link href={`/archive?category=${item.id}`}>{item.name}</Link>
              </h3>
              <p>{item.description || category.noDescription}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
