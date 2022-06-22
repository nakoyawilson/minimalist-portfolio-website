import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import hamburger from "../images/icons/hamburger.svg";
import close from "../images/icons/close.svg";
import "./Header.css";

const Header = ({ showMenu, closeMenu, toggleMenu, scrollToTop }) => {
  return (
    <header className="header">
      <img src={logo} alt="" className="header-logo" />
      <button className="mobile-btn" onClick={toggleMenu}>
        <img src={showMenu ? close : hamburger} alt="" />
      </button>
      <nav className={`navigation${showMenu ? " open" : ""}`}>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link"
              }
              onClick={() => {
                scrollToTop();
                closeMenu();
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="portfolio"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link"
              }
              onClick={() => {
                scrollToTop();
                closeMenu();
              }}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link"
              }
              onClick={() => {
                scrollToTop();
                closeMenu();
              }}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
