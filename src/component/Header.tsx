import style from "@/component/Header.module.scss";
import Nav from "./Nav"

type dataProps = { 
  nav: {
    label: string;
    url: string;
  }[];
}

const Header = ({ nav }: dataProps) => {
  return (
    <header className={style.header}>
      <Nav nav={nav} />
    </header>
  )
}

export default Header