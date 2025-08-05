import React from "react";
import { DataProps } from "./Header";

const Nav = ({ nav }: DataProps) => {
  return (
    <nav className="headNav">
      <ul>
        {nav.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
