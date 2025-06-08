import React from "react";
import siteData from "../data/data.json";

const Nav = () => {
  const navData = siteData.header.nav;
  return (
    <nav>
      <ul>
        {navData.map((item, i) => (
          <a key={i} href={item.url}>
            {item.label}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
