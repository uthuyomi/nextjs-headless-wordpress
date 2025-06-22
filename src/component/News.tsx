import Link from "next/link";
import style from "@/component/News.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Post } from "@/types/types";

type NewsProps = {
  newsPost: Post[];
  news: {
    title: string;
    noimg: string;
    linkLabel: string;
  };
};

const News = ({ news, newsPost }: NewsProps) => {

  return (
    <div className={style.article}>
      <h2>{news.title}</h2>
      <div className={style.slider_wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: "#button_prev",
            nextEl: "#button_next",
          }}
          pagination={{ clickable: true }}
          centeredSlides={true}
          className={style.categorySwiper}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
        >
          {newsPost.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={style.articleContentItem}>
                <div className={style.articleImage}>
                  <Image
                    src={item.jetpack_featured_media_url || news.noimg}
                    alt={item.title.rendered}
                    width={300}
                    height={200}
                  />
                  <span></span>
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
        <div id="button_prev" className="swiper-button-prev"></div>
        <div id="button_next" className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default News;
