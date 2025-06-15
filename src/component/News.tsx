import Link from "next/link";
import style from "@/component/News.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type NewsProps = {
  newsPost: any[];
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

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className={style.categorySwiper}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
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
              </div>
              <div className={style.articleText}>
                <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                <p>{new Date(item.date).toLocaleDateString()}</p>
                <Link href={`/blog/${item.slug}`}>{news.linkLabel}</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
