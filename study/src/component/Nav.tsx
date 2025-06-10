import React from "react";
import siteData from "../data/data.json";

const Nav = () => {
  const navData = siteData.header.nav;
  return (
    <nav className="headNav">
      <ul>
        {navData.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
