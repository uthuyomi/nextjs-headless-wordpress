import style from "@/component/Header.module.scss";
import Nav from "./Nav";

export type DataProps = {
  nav: {
    label: string;
    url: string;
  }[];
};

const Header = ({ nav }: DataProps) => {
  return (
    <header className={style.header}>
      <Nav nav={nav} />
    </header>
  );
};

export default Header;
