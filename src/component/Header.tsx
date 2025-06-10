import style from "@/component/Header.module.scss";
import Nav from "./Nav"

const header = () => {
  return (
    <header className={style.header}>
          <Nav/>
    </header>
  )
}

export default header