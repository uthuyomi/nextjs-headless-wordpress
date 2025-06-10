import Link from "next/link";
import style from "@/component/News.module.scss";
import Image from "next/image";

type NewsProps = {
  news: any[];
  newsData: {
    title: string;
  };
};



const News = ({ newsData, news }: NewsProps) => {

  return (
    <div className={style.article}>
      <h2>{newsData.title}</h2>
      <div className={style.articleContent}>
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
      </div>
    </div>
  );
};

export default News;
