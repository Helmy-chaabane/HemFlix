import React from "react";
import { Link } from "react-router-dom";
import LogoutSVG from "../../SVG/LogoutSVG";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NAV_BACKGROUNDCOLOR } from "../../Redux/reducers/navbar";
import { scrollingBoolean } from "../../Redux/selectors/navbar";
import { USER_LOG } from "../../Redux/reducers/user";
import { REMOVE_ALL_NOTIFICATIONS } from "../../Redux/reducers/notifications";
import "./nav.scss";

const Navbar = () => {
  const scroll = useSelector(scrollingBoolean);
  const dispatch = useDispatch();
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      dispatch(CHANGE_NAV_BACKGROUNDCOLOR({ bool: true }));
    } else dispatch(CHANGE_NAV_BACKGROUNDCOLOR({ bool: false }));
  });

  return (
    <nav className={`nav  ${scroll && "nav-scrolled "}`}>
      <Link to="/" className="nav__logo">
        <h6 className="nav__title">hemflix</h6>
      </Link>

      <ul className="nav__items nav__items-1">
        <li className="nav__item">
          <Link to="/mymovies" className="nav__link">
            My Movies
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/actors" className="nav__link">
            Actors/Trailers
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/nicer" className="nav__link">
            Beta
          </Link>
        </li>
      </ul>

      <ul className="nav__items">
        <li className="nav__item">
          <Link
            to="/login"
            className="nav__link"
            onClick={() => {
              dispatch(REMOVE_ALL_NOTIFICATIONS({}));
              dispatch(USER_LOG({}));
            }}
          >
            <LogoutSVG classname="nav__logout" /> Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
