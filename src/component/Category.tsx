import style from "@/component/Category.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

type WP_Category = {
  id: number;
  name: string;
  description: string;
  slug: string;
}

const Category = () => {

  const [categories, setCategories] = useState<WP_Category[]>([]);

  useEffect(() => { 
    fetch("http://localhost/wordpress/wp-json/wp/v2/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .then((err) => console.error("カテゴリ主直失敗:", err));
  }) 
 
  return (
    <div className={style.category}>
      <h2 className={style.title}>学習カテゴリー</h2>
      <div className={style.categoryContent}>
        {categories.map((item, i) => (
          <div key={i} className={style.categoryContentItem}>
            <h3>
              <Link href={`/category/${item.slug}`}>{item.name}</Link>
            </h3>
            <p>{item.description || "説明文なし"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
