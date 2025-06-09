import style from "./Category.module.scss";
import Link from "next/link";

type data = {
  categories: {
    title: string;
    category: {
      label: string;
      description: string;
    }[];
  };
};

const Category = ({ data }: data) => {
  const categoryData = data;
  return (
    <div className={style.category}>
      <h2>{categories.title}</h2>
      <div>
        {categoryData.map((item, i) => (
          <div key={i} className={style.categoryItem}>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
