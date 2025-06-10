import Link from "next/link";
import style from "@/component/News.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type NewsProps = {
  news: any[];
  newsData: {
    title: string;
  };
};

const News = ({ newsData, news }: NewsProps) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={style.article}>
      <h2>{newsData.title}</h2>
      <Slider {...settings} className={style.articleContent}>
        {news.map((item, i) => (
          <div className={style.articleContentItem} key={item.id}>
            <div className={style.articleImage}>
              <Image
                src={item.jetpack_featured_media_url}
                alt={item.title.rendered}
                width={300}
                height={200}
              />
            </div>
            <div className={style.articleText}>
              <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              <p>{new Date(item.date).toLocaleDateString()}</p>
              <Link href={item.link}>続きを読む</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
