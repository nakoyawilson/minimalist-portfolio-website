import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import logo from "../images/logo-white.svg";
import "./Footer.css";

const Footer = ({ scrollToTop }) => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} alt="" className="footer-logo" />
        <ul className="footer-links">
          <li>
            <Link to="/" onClick={scrollToTop} className="footer-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="portfolio" onClick={scrollToTop} className="footer-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" onClick={scrollToTop} className="footer-link">
              Contact Me
            </Link>
          </li>
        </ul>
        <SocialIcons fillColor="#FFFFFF" />
      </div>
    </footer>
  );
};

export default Footer;
