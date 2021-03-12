import React, { useState } from "react";
import { Link } from "react-router-dom";
import LibrarySVG from "../../SVG/LibrarySVG";
import LogoutSVG from "../../SVG/LogoutSVG";
import "./nav.css";

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
        <LibrarySVG classname="nav__icon" /> <h6>Libraria</h6>
      </Link>

      <ul className="nav__items nav__items-1">
        <li className="nav__item">
          <Link to="/myOrders" className="nav__link">
            Orders
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Buy
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Market
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            About
          </Link>
        </li>
      </ul>

      <div className="nav__search">
        <SearchSVG className="nav__search--icon" />
        <input type="text" className="nav__input" placeholder="Search..." />
      </div>

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
