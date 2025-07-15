import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/project", label: "Project" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <FaUserCircle className="user-icon" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`nav-link ${
                location.pathname === path ? "active" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
