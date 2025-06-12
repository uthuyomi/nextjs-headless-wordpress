import React from "react";

const Nav = ({ nav }) => {
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
