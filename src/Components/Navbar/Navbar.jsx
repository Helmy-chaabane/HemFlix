import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutSVG from "../../SVG/LogoutSVG";
import "./nav.scss";

const Navbar = () => {
  const [navbarC, setNavBar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else setNavBar(false);
  });

  return (
    <nav className={`nav  ${navbarC && "nav-scrolled "}`}>
      <Link to="/" className="nav__logo">
        <h6 className="nav__title">hemflix</h6>
      </Link>

      <ul className="nav__items nav__items-1">
        <li className="nav__item">
          <Link to="/mymovies" className="nav__link">
            My movies
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/actors" className="nav__link">
            Actors
          </Link>
        </li>
      </ul>

      <ul className="nav__items">
        <li className="nav__item">
          <Link to="/login" className="nav__link">
            <LogoutSVG classname="nav__logout" /> Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
