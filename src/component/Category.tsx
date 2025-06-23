import style from "@/component/Category.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


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
    fetch(
      "https://webyayasu.sakura.ne.jp/uthuyomizyuku/wp-json/wp/v2/categories?exclude=1"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("カテゴリ取得失敗:", err));
  }, []); // ← 無限fetchバグ修正（依存配列忘れてた）

  return (
    <div className={style.category}>
      <h2 className={style.title}>{category.title}</h2>
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
                <Link href={`/Archive?category=${item.id}`}>
                  {category.more}
                </Link>
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
