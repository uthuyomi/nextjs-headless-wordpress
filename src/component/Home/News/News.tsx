"use client";

import Link from "next/link";
import style from "@/component/Home/News/News.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { NewsProps } from "@/types/home";

const News = ({ news, newsPost }: NewsProps) => {
  const postsWishThumbnail = newsPost.map((item) => ({
    ...item,
    thumbnail: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  }));
  return (
    <div className={style.article}>
      <h2>{news.title}</h2>
      <div className={style.slider_wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: "#button_prev_news",
            nextEl: "#button_next_news",
          }}
          pagination={{ clickable: true }}
          centeredSlides={true}
          className={style.categorySwiper}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
        >
          {postsWishThumbnail.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={style.articleContentItem}>
                <div className={style.articleImage}>
                  <Image
                    src={item.thumbnail || news.noimg}
                    alt={item.title.rendered}
                    width={300}
                    height={200}
                  />
                  {item._embedded?.["wp:term"]?.[0]?.length ? (
                    <span className={style.categoryLabel}>
                      {
                        item._embedded["wp:term"][0] // ← categories[]
                          .map((cat: any) => cat.name) //   名前だけ抜く
                      }
                    </span>
                  ) : null}
                </div>
                <div className={style.articleText}>
                  <h3
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                  <p>{new Date(item.date).toLocaleDateString()}</p>
                  <Link href={`/blog/${item.slug}`}>{news.linkLabel}</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div id="button_prev_news" className="swiper-button-prev"></div>
        <div id="button_next_news" className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default News;
