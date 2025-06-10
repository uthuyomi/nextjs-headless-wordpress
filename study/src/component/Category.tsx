import style from "@/component/Category.module.scss";
import Link from "next/link";

type CategoryItem = {
  label: string;
  description: string;
};
type props = {
  categories: {
    title: string;
    category: CategoryItem[];
  };
};

const Category = ({ categories }: props) => {
  return (
    <div className={style.category}>
      <h2 className={style.title}>{categories.title}</h2>
      <div className={style.categoryContent}>
        {categories.category.map((item, i) => (
          <div key={i} className={style.categoryContentItem}>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
