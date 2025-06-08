import style from "./Category.module.scss";
import Link from "next/link";

const Category = ({data}: any) => {
    return (
      <div className={style.category}>
        <h2>{data.categoryTitle}</h2>
            {data.categories.category.map((item, i)){ 

            }}
        <div className={style.categoryItem}></div>
      </div>
    );
}

export default Category