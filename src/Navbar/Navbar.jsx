import React, { useState } from "react";
import "./Navbar.css";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">Travel</h1>
      <div
        className="menu-icons"
        onClick={() => {
          setToggle(!Toggle);
        }}
      >
        {!Toggle ? <GiHamburgerMenu /> : <GrClose />}
      </div>
      <ul className={Toggle ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((items, index) => {
          const { name, url, cName } = items;
          return (
            <li key={index}>
              <Link to={url} className={cName}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
